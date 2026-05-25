
// Remove all previously loaded theme CSS links so switching themes
// doesn't leave stale font/color rules (e.g. MilitaryHUD font persisting).
function CSSRemoveTheme(){
    var themeFiles = [
        "style_main.css",
        "style_light.css",
        "style_military.css",
        "style_sailor.css",
        "roundslider_main.css",
        "roundslider_light.css",
        "roundslider_military.css",
        "roundslider_sailor.css"
    ];
    var links = document.head.getElementsByTagName("link");
    // Iterate backwards so removal doesn't shift remaining indices
    for (var i = links.length - 1; i >= 0; i--) {
        var href = links[i].getAttribute("href") || "";
        for (var j = 0; j < themeFiles.length; j++) {
            if (href.indexOf(themeFiles[j]) !== -1) {
                links[i].parentNode.removeChild(links[i]);
                break;
            }
        }
    }
}

//Load default Style
function CSSLoad(file){
    var link = document.createElement("link");
    link.setAttribute("rel", "stylesheet");
    link.setAttribute("type", "text/css");
    link.setAttribute("href", file);
    document.getElementsByTagName("head")[0].appendChild(link);
}

// Apply selected style
function assign_css_style(){
    tn_cng_color = document.getElementById("tn_color");
    tn_color_idx = tn_cng_color.options[tn_cng_color.selectedIndex].value;

    // Remove any previously loaded theme sheets before adding the new one
    CSSRemoveTheme();

    //load custom scrollbars
    CSSLoad("css/jquery.mCustomScrollbar.css");
    /*$('body').mCustomScrollbar({
        theme: "dark-thick",
        scrollButtons:{enable:true},
        keyboard:{scrollAmount:100},
        mouseWheel:{deltaFactor:100},
        scrollInertia:400
    }); */

    if(tn_color_idx*1.0 === 1){
        CSSLoad("css/style_main.css?v01148111111345");
        CSSLoad("css/roundslider_main.css");
    }
    if(tn_color_idx*1.0 === 2){
        CSSLoad("css/style_light.css?v51111041131113");
        CSSLoad("css/roundslider_light.css");
    }
    if(tn_color_idx*1.0 === 3){
        CSSLoad("css/style_military.css?v1");
        CSSLoad("css/roundslider_military.css");
    }
    if(tn_color_idx*1.0 === 4){
        CSSLoad("css/style_sailor.css?v1");
        CSSLoad("css/roundslider_sailor.css");
    }
    // Trigger resize after CSS loads so Highcharts reflows charts within the container
    // and they do not overflow the right edge of the screen when switching themes.
    setTimeout(function(){ window.dispatchEvent(new Event('resize')); }, 200);
    ZoomButtonChangeStyle();

    // On Android, update the native status-bar / navigation-bar color to match the
    // new theme's body background so the system bars blend with the app UI.
    if (typeof Android !== 'undefined' && typeof Android.setStatusBarColor === 'function') {
        var themeColors = { 1: '#2b2b2c', 2: '#ffffff', 3: '#060d04', 4: '#fff0f5' };
        var themeColor = themeColors[tn_color_idx * 1.0];
        if (themeColor) { Android.setStatusBarColor(themeColor); }
    }
}
assign_css_style();

//Change ZoomButtonStyles
function ZoomButtonChangeStyle(){
    if(tn_color_idx*1.0 === 1){
        ColorZoobButtonFill = "#fa2b2c";
        ColorZoobButtonStroke = "#969696";
        ColorZoobButtonText = "white";
        ZoobButtonRadius = 10;
        ColorZoobButtonFillHover = "#eeeeee";
        ColorZoobButtonTextHover = "#424242";
        ColorZoobButtonStrokeHover = "#0080fc";
    }
    if(tn_color_idx*1.0 === 2){
        ColorZoobButtonFill = "#fa2b2c";
        ColorZoobButtonStroke = "#fa2b2c";
        ColorZoobButtonText = "white";
        ZoobButtonRadius = 5;
        ColorZoobButtonFillHover = "#eeeeee";
        ColorZoobButtonTextHover = "#0080fc";
        ColorZoobButtonStrokeHover = "#0080fc";
    }
    if(tn_color_idx*1.0 === 3){
        ColorZoobButtonFill = "#1a3a0f";
        ColorZoobButtonStroke = "#4a7c2a";
        ColorZoobButtonText = "#a8d870";
        ZoobButtonRadius = 2;
        ColorZoobButtonFillHover = "#0a1f06";
        ColorZoobButtonTextHover = "#c8f090";
        ColorZoobButtonStrokeHover = "#6abf3a";
    }
    if(tn_color_idx*1.0 === 4){
        ColorZoobButtonFill = "#e91e8c";
        ColorZoobButtonStroke = "#f48fb1";
        ColorZoobButtonText = "#ffffff";
        ZoobButtonRadius = 20;
        ColorZoobButtonFillHover = "#fff0f5";
        ColorZoobButtonTextHover = "#e91e8c";
        ColorZoobButtonStrokeHover = "#e91e8c";
    }
}

//hide node js OS control icons and toolbar because not work smoothly
CSSLoad("css/style_hide_window_control_section.css?v153");




