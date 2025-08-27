
// hide unused elements
// may be activate later
element_id_hide("tr_airbr_o2");
element_id_hide("tn_airbr_o2");
element_id_hide("tn_btn_save");

//open file dialog at any platforms for saving pdf, xls or other file
//html_id - html id for specific node js file type selector. Data-your data
function NodesaveFile(html_id,data, encoding) {
    var chooser = document.querySelector(html_id);
    chooser.addEventListener("change", function(evt) {
        var fs = require('fs');// save it now

        if(encoding === true){
            var base64Data = data.replace(/^data:application\/pdf;filename=generated.pdf;base64,/, "");
            fs.writeFile(this.value, base64Data , 'base64' , function(err) {
                if(err) {
                    alert("Error write to file"+err);
                }
            });
        }
        else
            {

                fs.writeFile(this.value, data , function(err) {
                    if(err) {
                        alert("Error write to file"+err);
                    }
                });
        }

    }, false);

    chooser.click();
}



//Check node js present
function node_enable() {
    if(typeof process === 'object' && process + '' === '[object process]'){
        return true;
    }
    else{
        return false;
    }
}

//Hide download section if run on desktop Platform
function hide_download_icons_node(){
    if(node_enable() === true){
        CSSLoad("style_hide_download_section.css?v01");
        //CSSLoad("style_hide_window_control_section.css?v03");
    }
}
hide_download_icons_node();

//Load any js script and run it
function loadScript(url, callback){

    var script = document.createElement("script");
    script.type = "text/javascript";

    if (script.readyState){  //IE
        script.onreadystatechange = function(){
            if (script.readyState == "loaded" ||
                script.readyState == "complete"){
                script.onreadystatechange = null;
                callback();
            }
        };
    } else {  //Others
        script.onload = function(){
            callback();
        };
    }

    script.src = url;
    document.getElementsByTagName("head")[0].appendChild(script);
}

//Hide download section if run on Android Platform
function hide_download_icons_android(){
    if(IsAndroid() === true){
        CSSLoad("style_hide_download_section.css?v0221");
        CSSLoad("style_hide_window_control_section.css?v023");

        //and hide buttons on mobile devices PDF and XLS save documents
        element_id_hide("btn_export_pdf_profile");
        element_id_hide("btn_export_xls");
        element_id_hide("btn_tbl_pdf");
        element_id_hide("btn_export_pdf_pp");
    }
}
hide_download_icons_android();


//Functions for custom Window Controls
// Min

if(node_enable() === true) {
    document.getElementById('windowControlMinimize').onclick = function () {
        win.minimize();
    };

// Close
    document.getElementById('windowControlClose').onclick = function () {
        win.close();
    };

// Max
    document.getElementById('windowControlMaximize').onclick = function () {
        if (win.isMaximized)
            win.unmaximize();
        else
            win.maximize();
    };

    if (node_enable() === true) {
        win.on('maximize', function () {
            win.isMaximized = true;
        });

        win.on('unmaximize', function () {
            win.isMaximized = false;
        });
    }
}

