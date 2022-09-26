//Android Platform specific functions

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

//Color Button about 30 sed
//if we wanna save cookie properly
function android_btn(){
    var button_sv = document.getElementById("btn_save");

    button_sv.style.animationName = "ibcd_ppn2_anim";
    button_sv.style.animationDuration = "2s";
    button_sv.style.animationIterationCount = "infinite";

    setTimeout(function() {
        button_sv.style.animationName = "none";
    }, 45000);
}
