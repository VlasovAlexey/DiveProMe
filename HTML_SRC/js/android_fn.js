//Android Platform specific functions
const userAgent = navigator.userAgent.toLowerCase();
const isAndroid = /android/.test(userAgent);
const isWebView = /version\/\d+\.\d+/.test(userAgent) || /wv/.test(userAgent);

//Check platform if Android return true
function IsAndroid(){
    var ua = navigator.userAgent.toLowerCase();
    //console.log(ua);
    var isAndroid = ua.indexOf("android") > -1; //&& ua.indexOf("mobile");
    if(isAndroid) {
        //we under Android :) simply but some times does`t work
        return true;
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

//convert DataURI to Binary Array
var BASE64_MARKER = ';base64,';
function convertDataURIToBinary(dataURI) {
  var base64Index = dataURI.indexOf(BASE64_MARKER) + BASE64_MARKER.length;
  var base64 = dataURI.substring(base64Index);
  var raw = window.atob(base64);
  var rawLength = raw.length;
  var array = new Uint8Array(new ArrayBuffer(rawLength));

  for(i = 0; i < rawLength; i++) {
    array[i] = raw.charCodeAt(i);
  }
  return array;
}