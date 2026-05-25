package com.diveprome.avlasov.diveprome;

import androidx.annotation.NonNull;
import androidx.annotation.RequiresApi;
import androidx.appcompat.app.AppCompatActivity;
import androidx.core.graphics.Insets;
import androidx.core.view.ViewCompat;
import androidx.core.view.WindowCompat;
import androidx.core.view.WindowInsetsCompat;
import androidx.core.view.WindowInsetsControllerCompat;

import android.animation.AnimatorListenerAdapter;
import android.animation.ArgbEvaluator;
import android.animation.ValueAnimator;
import android.animation.Animator;
import android.content.ContentResolver;
import android.content.ContentValues;
import android.content.Intent;
import android.graphics.Color;
import android.net.Uri;
import android.os.Build;
import android.os.Bundle;
import android.os.Environment;
import android.provider.MediaStore;
import android.util.Base64;
import android.util.Log;
import android.webkit.JavascriptInterface;
import android.webkit.WebChromeClient;
import android.webkit.WebSettings;
import android.webkit.WebView;
import android.webkit.WebViewClient;
import android.widget.FrameLayout;
import android.widget.Toast;

import java.io.OutputStream;

public class MainActivity extends AppCompatActivity {
    private static final String TAG = "DiveProMe";
    private static final int CREATE_FILE_REQUEST_CODE = 1001;

    private WebView webView;
    private FrameLayout container;
    private WindowInsetsControllerCompat insetsController;
    private int currentStatusColor;

    private String pendingFileName;
    private String pendingMimeType;
    private byte[] pendingFileData;

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);

        // Edge-to-edge: system bars are transparent; container background shows through them.
        WindowCompat.setDecorFitsSystemWindows(getWindow(), false);
        insetsController = new WindowInsetsControllerCompat(getWindow(), getWindow().getDecorView());

        setContentView(R.layout.activity_main);

        container = findViewById(R.id.main_frame);

        // Default to the Dark theme background; JS will call setStatusBarColor once the
        // WebView finishes loading and the user's saved theme is applied.
        currentStatusColor = Color.parseColor("#2b2b2c");
        container.setBackgroundColor(currentStatusColor);
        insetsController.setAppearanceLightStatusBars(false);
        insetsController.setAppearanceLightNavigationBars(false);

        // Shift content down by the status-bar height and up by the nav-bar height so the
        // WebView is never hidden behind the system bars.
        ViewCompat.setOnApplyWindowInsetsListener(container, (view, windowInsets) -> {
            Insets bars = windowInsets.getInsets(
                    WindowInsetsCompat.Type.systemBars() | WindowInsetsCompat.Type.displayCutout()
            );
            view.setPadding(bars.left, bars.top, bars.right, bars.bottom);
            return WindowInsetsCompat.CONSUMED;
        });

        Log.d(TAG, "Activity created");

        webView = findViewById(R.id.myWeb);
        setupWebView(savedInstanceState);
    }

    /**
     * Smoothly transitions the container background (which is visible through the transparent
     * status and navigation bars) to {@code toColor} over 200 ms, and updates the status-bar
     * icon tint to keep good contrast.
     */
    private void animateStatusBarColor(int toColor) {
        ValueAnimator animator = ValueAnimator.ofObject(new ArgbEvaluator(), currentStatusColor, toColor);
        animator.setDuration(200);
        animator.addUpdateListener(animation ->
                container.setBackgroundColor((int) animation.getAnimatedValue()));
        animator.addListener(new AnimatorListenerAdapter() {
            @Override
            public void onAnimationEnd(Animator animation) {
                currentStatusColor = toColor;
            }
        });
        animator.start();

        // Choose dark or light system-bar icons based on background luminance.
        double luminance = (0.299 * Color.red(toColor)
                          + 0.587 * Color.green(toColor)
                          + 0.114 * Color.blue(toColor)) / 255.0;
        boolean lightIcons = luminance > 0.5;
        insetsController.setAppearanceLightStatusBars(lightIcons);
        insetsController.setAppearanceLightNavigationBars(lightIcons);
    }

    private void setupWebView(Bundle savedInstanceState) {
        WebSettings webSettings = webView.getSettings();
        webSettings.setJavaScriptEnabled(true);
        webSettings.setDomStorageEnabled(true);
        webSettings.setAllowFileAccess(true);
        webSettings.setAllowContentAccess(true);
        webSettings.setCacheMode(WebSettings.LOAD_DEFAULT);

        webView.setHorizontalScrollBarEnabled(false);
        webView.setVerticalScrollBarEnabled(false);

        webView.setWebViewClient(new WebViewClient() {
            @Override
            public boolean shouldOverrideUrlLoading(WebView view, String url) {
                Log.d(TAG, "Loading URL: " + url);
                return false;
            }

            @Override
            public void onPageFinished(WebView view, String url) {
                super.onPageFinished(view, url);
            }
        });

        webView.setWebChromeClient(new WebChromeClient() {
            @Override
            public void onReceivedTitle(WebView view, String title) {
                super.onReceivedTitle(view, title);
                Log.d(TAG, "Page title: " + title);
            }
        });

        webView.addJavascriptInterface(new WebAppInterface(), "Android");

        if (savedInstanceState != null) {
            webView.restoreState(savedInstanceState);
        } else {
            webView.loadUrl("file:///android_asset/index.html");
        }

        Log.i(TAG, "WebView initialized");
    }

    // JavaScript interface exposed to the WebView as window.Android
    public class WebAppInterface {

        /**
         * Called by style_manager.js when the user switches themes.
         * {@code hexColor} is the body background color of the new theme, e.g. "#2b2b2c".
         */
        @JavascriptInterface
        public void setStatusBarColor(String hexColor) {
            try {
                int toColor = Color.parseColor(hexColor);
                runOnUiThread(() -> animateStatusBarColor(toColor));
            } catch (IllegalArgumentException e) {
                Log.e(TAG, "setStatusBarColor: invalid color: " + hexColor);
            }
        }

        /** Called by android_fn.js to save a dive profile or log file from the WebView. */
        @JavascriptInterface
        public void downloadFile(String base64Data, String fileName, String mimeType) {
            Log.d(TAG, "Received download request for: " + fileName);
            try {
                byte[] data = Base64.decode(base64Data, Base64.DEFAULT);
                if (Build.VERSION.SDK_INT >= Build.VERSION_CODES.Q) {
                    saveFileWithMediaStore(data, fileName, mimeType);
                } else {
                    createFileWithSAF(data, fileName, mimeType);
                }
            } catch (Exception e) {
                Log.e(TAG, "Error decoding base64 data: " + e.getMessage());
                runOnUiThread(() -> Toast.makeText(MainActivity.this,
                        "Error downloading file", Toast.LENGTH_SHORT).show());
            }
        }
    }

    @RequiresApi(api = Build.VERSION_CODES.Q)
    private void saveFileWithMediaStore(byte[] data, String fileName, String mimeType) {
        try {
            ContentResolver resolver = getContentResolver();
            ContentValues contentValues = new ContentValues();
            contentValues.put(MediaStore.MediaColumns.DISPLAY_NAME, fileName);
            contentValues.put(MediaStore.MediaColumns.MIME_TYPE, mimeType);
            contentValues.put(MediaStore.MediaColumns.RELATIVE_PATH, Environment.DIRECTORY_DOWNLOADS);

            Uri contentUri = MediaStore.Downloads.EXTERNAL_CONTENT_URI;
            Uri uri = resolver.insert(contentUri, contentValues);

            if (uri != null) {
                try (OutputStream outputStream = resolver.openOutputStream(uri)) {
                    if (outputStream != null) {
                        outputStream.write(data);
                        Log.i(TAG, "File saved with MediaStore: " + fileName);
                        runOnUiThread(() -> {
                            Toast.makeText(this, "File saved to Downloads folder", Toast.LENGTH_LONG).show();
                            Intent mediaScanIntent = new Intent(Intent.ACTION_MEDIA_SCANNER_SCAN_FILE);
                            mediaScanIntent.setData(uri);
                            sendBroadcast(mediaScanIntent);
                        });
                    }
                }
            } else {
                Log.e(TAG, "Failed to create URI for MediaStore");
                runOnUiThread(() -> Toast.makeText(this,
                        "Failed to save file", Toast.LENGTH_SHORT).show());
            }
        } catch (Exception e) {
            Log.e(TAG, "Error saving file with MediaStore: " + e.getMessage());
            runOnUiThread(() -> Toast.makeText(this,
                    "Error saving file", Toast.LENGTH_SHORT).show());
        }
    }

    private void createFileWithSAF(byte[] data, String fileName, String mimeType) {
        pendingFileData = data;
        pendingFileName = fileName;
        pendingMimeType = mimeType;

        Intent intent = new Intent(Intent.ACTION_CREATE_DOCUMENT);
        intent.addCategory(Intent.CATEGORY_OPENABLE);
        intent.setType(mimeType);
        intent.putExtra(Intent.EXTRA_TITLE, fileName);
        startActivityForResult(intent, CREATE_FILE_REQUEST_CODE);
    }

    @Override
    protected void onActivityResult(int requestCode, int resultCode, Intent data) {
        super.onActivityResult(requestCode, resultCode, data);
        if (requestCode == CREATE_FILE_REQUEST_CODE && resultCode == RESULT_OK) {
            if (data != null && data.getData() != null) {
                saveFileWithSAF(data.getData(), pendingFileData);
            }
        }
    }

    private void saveFileWithSAF(Uri uri, byte[] data) {
        try {
            ContentResolver resolver = getContentResolver();
            try (OutputStream outputStream = resolver.openOutputStream(uri)) {
                if (outputStream != null) {
                    outputStream.write(data);
                    Log.i(TAG, "File saved with SAF: " + uri);
                    runOnUiThread(() -> Toast.makeText(this,
                            "File saved successfully", Toast.LENGTH_LONG).show());
                }
            }
        } catch (Exception e) {
            Log.e(TAG, "Error saving file with SAF: " + e.getMessage());
            runOnUiThread(() -> Toast.makeText(this,
                    "Error saving file", Toast.LENGTH_SHORT).show());
        }
    }

    @Override
    public void onBackPressed() {
        if (webView.canGoBack()) {
            webView.goBack();
        } else {
            super.onBackPressed();
        }
    }

    @Override
    protected void onSaveInstanceState(@NonNull Bundle outState) {
        super.onSaveInstanceState(outState);
        webView.saveState(outState);
    }

    @Override
    protected void onResume() {
        super.onResume();
        webView.onResume();
    }

    @Override
    protected void onPause() {
        super.onPause();
        webView.onPause();
    }

    @Override
    protected void onDestroy() {
        super.onDestroy();
        webView.destroy();
    }
}
