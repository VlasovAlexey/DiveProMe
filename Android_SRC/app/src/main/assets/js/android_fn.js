//Android Platform specific functions
const userAgent = navigator.userAgent.toLowerCase();
const isAndroid = /android/.test(userAgent);
const isWebView = /version\/\d+\.\d+/.test(userAgent) || /wv/.test(userAgent);

//Check platform if Android return true
function IsAndroid(){
    var ua = navigator.userAgent.toLowerCase();
    //console.log(ua);
    var isAndroid = ua.indexOf("android") > -1; //&& ua.indexOf("mobile");
    // var isWV = ua.indexOf("wv") > -1;
    if(isAndroid) {
        //we under Android :) simply but some times does`t work
        //fix later if you work lover lollipop
        return false;
    }
    //web View class not present
    return false;
}

//Generate special data for Android savings
function generateAndDownload(content, fileName, mimeType) {
    if (isAndroid && isWebView) {
        //we under android and webview
        /*Example of usage
        content = "This is a sample text file generated from WebView.\n\n";
        //fileName = "webview_sample.txt";
        mimeType = "text/plain";*/
            
        // Create a blob and convert to base64
        const blob = new Blob([content], { type: mimeType });
        const reader = new FileReader();
            
        reader.onload = function() {
            // The result contains the base64 data
            const base64data = reader.result.split(',')[1];

            // Call Android interface to download the file
            if (window.Android && typeof window.Android.downloadFile === 'function') {
                window.Android.downloadFile(base64data, fileName, mimeType);
                showStatus(plan_lng("downl_start") + ": " + fileName, plan_lng("success"));
                } else {
                    showStatus(plan_lng("android_interface_err"), plan_lng("error"));
                }
            };    
        reader.readAsDataURL(blob);
    }
}

//Call Android to show info in status bar
function showStatus(message, type) {
    const statusEl = document.getElementById('status');
    statusEl.textContent = message;
    statusEl.className = 'status';
       
    if (type === 'success') {
    statusEl.classList.add('success');
    } else if (type === 'error') {
        statusEl.classList.add('error');
    }        
    // Auto-hide success messages after 5 seconds
    if (type === 'success') {
        setTimeout(() => {
            statusEl.style.display = 'none';
        }, 5000);
    }
}
