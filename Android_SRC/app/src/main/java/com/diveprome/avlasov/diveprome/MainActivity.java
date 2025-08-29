package com.diveprome.avlasov.diveprome;

import androidx.annotation.NonNull;
import androidx.annotation.RequiresApi;
import androidx.appcompat.app.AppCompatActivity;
import androidx.core.app.ActivityCompat;

import android.app.DownloadManager;
import android.content.ContentResolver;
import android.content.ContentValues;
import android.content.Intent;
import android.content.pm.PackageManager;
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
import android.widget.Toast;

import java.io.OutputStream;
import java.text.SimpleDateFormat;
import java.util.Date;
import java.util.Locale;

public class MainActivity extends AppCompatActivity {
    private static final String TAG = "WebViewFileDownload";
    private static final int CREATE_FILE_REQUEST_CODE = 1001;
    private WebView webView;
    private String pendingFileName;
    private String pendingMimeType;
    private byte[] pendingFileData;

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_main);

        Log.d(TAG, "Activity created - minSdk: 31, targetSdk: 34");

        // Initialize WebView
        webView = findViewById(R.id.myWeb);
        setupWebView();
    }

    private void setupWebView() {
        WebSettings webSettings = webView.getSettings();
        webSettings.setJavaScriptEnabled(true);
        webSettings.setDomStorageEnabled(true);
        webSettings.setAllowFileAccess(true);
        webSettings.setAllowContentAccess(true);

        webView.setHorizontalScrollBarEnabled(false);
        webView.setVerticalScrollBarEnabled(false);

        // Set WebView clients
        webView.setWebViewClient(new WebViewClient() {
            @Override
            public boolean shouldOverrideUrlLoading(WebView view, String url) {
                Log.d(TAG, "Loading URL: " + url);
                return false;
            }
        });

        webView.setWebChromeClient(new WebChromeClient() {
            @Override
            public void onReceivedTitle(WebView view, String title) {
                super.onReceivedTitle(view, title);
                Log.d(TAG, "Page title: " + title);
            }
        });

        // Add JavaScript interface
        webView.addJavascriptInterface(new WebAppInterface(), "Android");

        // Load the HTML content
        webView.loadUrl("file:///android_asset/index.html");
        Log.i(TAG, "WebView initialized and loading HTML content");
    }

    // JavaScript interface for handling blob downloads
    public class WebAppInterface {
        @JavascriptInterface
        public void downloadFile(String base64Data, String fileName, String mimeType) {
            Log.d(TAG, "Received download request for: " + fileName);

            try {
                byte[] data = Base64.decode(base64Data, Base64.DEFAULT);

                // For Android 10+ we use MediaStore API
                if (Build.VERSION.SDK_INT >= Build.VERSION_CODES.Q) {
                    saveFileWithMediaStore(data, fileName, mimeType);
                } else {
                    // Fallback for older versions (though minSdk=31 makes this unreachable)
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
                            // Notify the system about the new file
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
                Uri uri = data.getData();
                saveFileWithSAF(uri, pendingFileData);
            }
        }
    }

    private void saveFileWithSAF(Uri uri, byte[] data) {
        try {
            ContentResolver resolver = getContentResolver();
            try (OutputStream outputStream = resolver.openOutputStream(uri)) {
                if (outputStream != null) {
                    outputStream.write(data);
                    Log.i(TAG, "File saved with SAF: " + uri.toString());
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
}