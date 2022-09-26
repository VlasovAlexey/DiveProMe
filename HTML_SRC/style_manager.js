
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

    //load custom scrollbars
    CSSLoad("jquery.mCustomScrollbar.css");
    /*$('body').mCustomScrollbar({
        theme: "dark-thick",
        scrollButtons:{enable:true},
        keyboard:{scrollAmount:100},
        mouseWheel:{deltaFactor:100},
        scrollInertia:400
    }); */

    if(tn_color_idx*1.0 === 1){
        CSSLoad("style_main.css?v01148111111345");
        CSSLoad("roundslider_main.css");
    }
    if(tn_color_idx*1.0 === 2){
        CSSLoad("style_light.css?v51111041131113");
        CSSLoad("roundslider_light.css");
    }
    ZoomButtonChangeStyle();
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
}

//hide node js OS control icons and toolbar because not work smoothly
CSSLoad("style_hide_window_control_section.css?v153");




