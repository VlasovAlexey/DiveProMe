
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
    if(tn_color_idx*1.0 == 1){
        CSSLoad("style_main.css?v0821");
    }
    if(tn_color_idx*1.0 == 2){
        CSSLoad("style_light.css?v013");
    }
}
assign_css_style();
