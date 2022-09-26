
//Make from SINGLE fraction array text gases array
function mix_to_txt_arr(tmp_arr){

    var a = 0;
    var mix_text_arr=[];
    var txt = "";

    if (tmp_arr[a]*1.0 != 21){
        if(tmp_arr[a+1]*1.0 === 0){
            txt="EAN"+tmp_arr[a];
        }
    }

    if(tmp_arr[a+1]*1.0 > 0){
        txt="Tmx"+(tmp_arr[a]*1.0)+"/"+(tmp_arr[a+1]*1.0);
    }

    if (tmp_arr[a]*1.0 == 21){
        if(tmp_arr[a+1]*1.0 === 0){
            txt="Air";
        }
    }
    if (tmp_arr[a]*1.0 == 100){
        if(tmp_arr[a+1]*1.0 === 0){
            txt="OXY";
        }
    }
    mix_text_arr.push(txt);
    a=a+2;
    return mix_text_arr.toString();
}



// Create / update round slider and option for oxy and depth lo with custom parameters
function learn_slider_upd(){
    //compute oxy min value based on PPO2 current or changed settings
    //max depth is 400 meters and can`t be changed

    //get actual PPO2 max \ min, PPN2 max value from Dive Settings
    var ppo2_bottom = [];
    $.each($(".opt_ppo2_bottom option:selected"), function(){
        ppo2_bottom.push($(this).val());
    });
    var ppo2_min = [];
    $.each($(".opt_ppo2_min option:selected"), function(){
        ppo2_min.push($(this).val());
    });
    var ppn2_max = [];
    $.each($(".opt_ppn2_max option:selected"), function(){
        ppn2_max.push($(this).val());
    });

    var oxy_min = Math.floor(((ppo2_bottom * 1.0) / ((400 + 10) / 10)) * 100);
    var depth_min = Math.ceil((ppo2_min*1.0) / ((ppo2_bottom * 1.0) / ((400 + 10) / 10)) * 10 - 10);

    //need recalculate maximum depth about 400 m because this fix rounding problem for helium selector
    //for example if ppo2_max = 1.4, ppn2 = 3.95 and oxy is 3% after calculation we have 456 metres maximum depth
    //it is above 400 and need fixed inside round slider selector
    var depth_max = Math.floor(((ppo2_bottom * 1.0)/(oxy_min / 100)) * 10 - 10);
    var he_max = Math.ceil(100 - (((ppo2_bottom * 1.0) / ((depth_max + 10) / 10)) * 100) - (((ppn2_max * 1.0) / ((depth_max + 10) / 10)) * 100));

    //Create new round sliders
    $("#tr_circle_sld_depth").roundSlider({
            sliderType: "range",
            width: 24,
            radius: 136,
            value: ($("select#opt_calc_depth_lo option").filter(":selected").val()) + "," + ($("select#opt_calc_depth option").filter(":selected").val()) ,
            max: 400,
            min: 0,
            lineCap: "round",
            editableTooltip: false,
            showTooltip: false,
            mouseScrollAction: false,
            circleShape: "pie"
        }
    );

    //for Oxygen
    $("#tr_circle_sld_oxy").roundSlider({
            sliderType: "min-range",
            width: 24,
            radius: 106,
            value: $("select#opt_calc_o2 option").filter(":selected").val(),
            max: 100,
            min: oxy_min,
            lineCap: "round",
            editableTooltip: false,
            showTooltip: false,
            mouseScrollAction: false,
            circleShape: "pie"
        }
    );

    //for Helium
    $("#tr_circle_sld_he").roundSlider({
            sliderType: "min-range",
            width: 24,
            radius: 76,
            value: $("select#opt_calc_he option").filter(":selected").val(),
            max: he_max,
            min: 0,
            lineCap: "round",
            editableTooltip: false,
            showTooltip: false,
            mouseScrollAction: false,
            circleShape: "pie"
        }
    );

    //Update options sizes to actual
    del_html_elem("tr_calc_he");
    create_option("tr_calc_he", "opt_calc_he", 0 , he_max , opt_calc_he_usr , 1 , 0 , "none");

    del_html_elem("tr_calc_o2");
    create_option("tr_calc_o2", "opt_calc_o2", oxy_min, 100 , opt_calc_o2_usr , 1 , 0, "none");

    del_html_elem("tr_calc_depth_lo");
    create_option("tr_calc_depth_lo", "opt_calc_depth_lo", 0, depth_min , depth_min , 1 , 0, "depth");
    //$("#opt_calc_depth_lo option[value=" + depth_min + "]").prop('selected', true);
}
learn_slider_upd();

//get start value for round slider range. It is important because round slider don`t return range lo and hi separately
//one event for two parameters
slider_circle_depth = $("#tr_circle_sld_depth").data("roundSlider").getValue(2);
slider_circle_depth_lo = $("#tr_circle_sld_depth").data("roundSlider").getValue(1);

//make CALC_MWD DEPTH and DEPTH_LO  changes after depth round slider touched or changed
$("#tr_circle_sld_depth").roundSlider({
    //after event "drag"
    drag: function (e) {
        var val_selector = (e.value).split(",");

        if(val_selector[0]  != slider_circle_depth_lo){
            //$("#opt_calc_depth_lo option[value=" + val_selector[0] + "]").prop('selected', true);
            //calc_upd_best_mix("dp_min");
            slider_circle_depth_lo = val_selector[0];

        }

        if(val_selector[1]  != slider_circle_depth){
            $("#opt_calc_depth option[value=" + val_selector[1] + "]").prop('selected', true);
            calc_upd_best_mix("dp_max");
            slider_circle_depth = val_selector[1];
        }
        calc_upd_best_mix("dp_max");
    },
    start: function (ee){
    },
    stop: function (eee) {
        first_touched = 0;
    }
});

//Update round slider max depth after changing option value
function upd_calc_mwd_depth() {
    //get from option current selected value
    var a = [];
    $.each($(".opt_calc_depth option:selected"), function(){
        a.push($(this).val());
    });

    //replace only second value for "range" round slider value
    a = ($("#tr_circle_sld_depth").data("roundSlider").getValue(1)) + "," + a;

    //set it!
    $("#tr_circle_sld_depth").roundSlider("setValue", a );
    slider_circle_depth = a;

    //compute new oxy an he after all changes and update interface
    calc_upd_best_mix("dp_max");

}

//Update round slider lo depth after changing option value
function upd_calc_mwd_depth_lo() {
    //get from option current selected value
    var a = [];
    $.each($(".opt_calc_depth_lo option:selected"), function(){
        a.push($(this).val());
    });

    //replace only second value for "range" round slider value
    a = (a + "," + $("#tr_circle_sld_depth").data("roundSlider").getValue(2));

    //set it!
    $("#tr_circle_sld_depth").roundSlider("setValue", a );
    slider_circle_depth_lo = a;

    //compute new oxy an he after all changes and update interface
    calc_upd_best_mix("dp_min");
}

//MWD_OXY
$("#tr_circle_sld_oxy").roundSlider({
    //after event "drag"
    drag: function (e) {
        calc_upd_depth_he();
    }

});

//Update round slider oxy after changing option value
function upd_calc_mwd_oxy() {
    //get from option current selected value
    var a = [];
    $.each($(".opt_calc_o2 option:selected"), function(){
        a.push($(this).val());
    });

    //set it!
    $("#tr_circle_sld_oxy").roundSlider("setValue", a );
    calc_upd_depth_he();
}

//MWD_He
$("#tr_circle_sld_he").roundSlider({
    //after event "drag"
    drag: function (e) {
        calc_upd_depth_oxy();
    }

});

//Update round slider oxy after changing option value
function upd_calc_mwd_he() {
    //get from option current selected value
    var a = [];
    $.each($(".opt_calc_he option:selected"), function(){
        a.push($(this).val());
    });

    //set it!
    $("#tr_circle_sld_he").roundSlider("setValue", a );
    calc_upd_depth_oxy();
}

//calculate END using n2 fraction and maximum depth. Only n2 is narcotic
function calc_end_n2_only(fhe , end_depth ){
    var calc_end = Math.ceil(((end_depth + 10)*(1 - fhe)) - 10);
    if(calc_end <= 0){calc_end = 0;}
    return calc_end;
}

//calculate EAD use He fraction and maximum depth
function calc_ead_fn(fn2 , ead_depth){
    var calc_ead = Math.ceil(((ead_depth + 10)*(fn2 / 0.79)) - 10);
    if(calc_ead <= 0){calc_ead = 0;}
    return calc_ead;
}

//display inside DOM interface calculated EAD and END
function calc_disp_end_ead(calc_end , calc_ead){
    del_html_elem("tr_calc_ead");
    del_html_elem("tr_calc_end");
    create_html_text("tr_calc_ead" , "opt_calc_ead" , calc_ead);
    create_html_text("tr_calc_end" , "opt_calc_end" , calc_end);
}

//Display current mix inside circle
function calc_mix_disp(o2,he) {
    tmp_arr =[o2,he];
    del_html_elem("tr_circle_mix");
    create_html_text("tr_circle_mix" , "opt_circle_mix" , nrm_to_txt_arr(tmp_arr));
}
//First start you need update mix interface inside circle
calc_mix_disp($("#tr_circle_sld_oxy").data("roundSlider").getValue(1) , $("#tr_circle_sld_he").data("roundSlider").getValue(1));

//Update PP O2 min\max and N2 max
function calc_pp_disp (){

    //get actual value from Dive Settings
    var a = [];
    $.each($(".opt_ppo2_bottom option:selected"), function(){
        a.push($(this).text());
    });
    var b = [];
    $.each($(".opt_ppo2_min option:selected"), function(){
        b.push($(this).text());
    });
    var c = [];
    $.each($(".opt_ppn2_max option:selected"), function(){
        c.push($(this).text());
    });

    //remove old values
    del_html_elem("tr_calc_o2max");
    del_html_elem("tr_calc_o2min");
    del_html_elem("tr_calc_n2max");

    //and add new
    create_html_text("tr_calc_o2max" , "opt_calc_o2max" , a);
    create_html_text("tr_calc_o2min" , "opt_calc_o2min" , b);
    create_html_text("tr_calc_n2max" , "opt_calc_n2max" , c);
}

//Compute best mix if Depth min \ max changed
function calc_upd_best_mix(flag) {
    //Get current slider Depht selected value
    var calc_depth_min = ($("#tr_circle_sld_depth").data("roundSlider").getValue(1));
    var calc_depth_max = ($("#tr_circle_sld_depth").data("roundSlider").getValue(2));

    //get actual value from Dive Settings
    var calc_ppo2_bottom = 0;
    $.each($(".opt_ppo2_bottom option:selected"), function(){
        calc_ppo2_bottom = ($(this).val());
    });
    var calc_ppo2_min = [];
    $.each($(".opt_ppo2_min option:selected"), function(){
        calc_ppo2_min.push($(this).val());
    });
    var calc_ppn2_max = [];
    $.each($(".opt_ppn2_max option:selected"), function(){
        calc_ppn2_max.push($(this).val());
    });

    //compute new mixture and display it
    var calc_oxy_fr = Math.floor(((calc_ppo2_bottom * 1.0) / ((calc_depth_max + 10) / 10)) * 100);
    var calc_he_fr = Math.ceil(100 - (((calc_ppo2_bottom * 1.0) / ((calc_depth_max + 10) / 10)) * 100) - (((calc_ppn2_max * 1.0) / ((calc_depth_max + 10) / 10)) * 100));

    //if changed only round slider DP_MAX or Option DP_Max use this case
    if(flag === "dp_max") {
        var calc_min_depth_new = Math.ceil((calc_ppo2_min*1.0) / ((calc_ppo2_bottom * 1.0) / ((calc_depth_max + 10) / 10)) * 10 - 10);
        if(calc_min_depth_new < 0){
            calc_min_depth_new = 0;
        }

        $("#tr_circle_sld_depth").roundSlider("setValue", calc_min_depth_new.toString() + "," + calc_depth_max.toString());
        $("#opt_calc_depth_lo option[value=" + calc_min_depth_new + "]").prop('selected', true);

    }

    if(flag === "dp_min") {

        var calc_depth_max_new = Math.floor(((calc_ppo2_bottom*1.0) / ((calc_ppo2_min*1.0)/((calc_depth_min*1.0) + 10) / 10))/10 - 10);

        //fix rounding problem
        if(calc_depth_max_new > 400){
            calc_depth_max_new = 400
        }

        $("#tr_circle_sld_depth").roundSlider("setValue" , calc_depth_min.toString() + "," + calc_depth_max_new);
        $("#opt_calc_depth option[value=" + calc_depth_max_new + "]").prop('selected', true);

    }

    //if depth <6 metres use only oxy 100%
    if(calc_oxy_fr >= 100){
        calc_oxy_fr = 100;
        calc_he_fr = 0;
    }

    //if helium fraction <=0 then no add helium
    if(calc_he_fr <= 0){
        calc_he_fr = 0;
    }

    //Display EAD and END
    //in meters
    if($( "#tn_dmn" ).val() == 1){
        calc_disp_end_ead(calc_end_n2_only((calc_he_fr*0.01) , calc_depth_max) , calc_ead_fn(((100 - calc_oxy_fr - calc_he_fr)*0.01) , calc_depth_max));
    }
    //in feets
    if($( "#tn_dmn" ).val() == 2){
        calc_disp_end_ead(Math.ceil(3.28084 * calc_end_n2_only((calc_he_fr*0.01) , calc_depth_max)) , Math.ceil(3.28084 * calc_ead_fn(((100 - calc_oxy_fr - calc_he_fr)*0.01) , calc_depth_max)));
    }

    //set computed value on round slider
    $("#tr_circle_sld_oxy").roundSlider("setValue", calc_oxy_fr );
    $("#tr_circle_sld_he").roundSlider("setValue", calc_he_fr );

    //and select on option for oxy and he
    $("#opt_calc_o2 option[value=" + calc_oxy_fr + "]").prop('selected', true);
    $("#opt_calc_he option[value=" + calc_he_fr + "]").prop('selected', true);

    //and finally update mix inside circles
    calc_mix_disp(calc_oxy_fr , calc_he_fr);
}

//update depth and helium if oxy is changed
function calc_upd_depth_he(){

    //Get current slider Oxy selected value
    var calc_oxy_fr = ($("#tr_circle_sld_oxy").data("roundSlider").getValue());

    //get actual value from Dive Settings
    var calc_ppo2_bottom = 0;
    $.each($(".opt_ppo2_bottom option:selected"), function(){
        calc_ppo2_bottom = ($(this).val());
    });
    var calc_ppo2_min = [];
    $.each($(".opt_ppo2_min option:selected"), function(){
        calc_ppo2_min.push($(this).val());
    });
    var calc_ppn2_max = [];
    $.each($(".opt_ppn2_max option:selected"), function(){
        calc_ppn2_max.push($(this).val());
    });

    //calculate new depth min \ max and helium fraction
    //compute new mixture and display it
    //var calc_oxy_fr = Math.floor(((calc_ppo2_bottom * 1.0) / ((calc_depth_max + 10) / 10)) * 100);

    var calc_depth_max = Math.floor(((calc_ppo2_bottom * 1.0)/(calc_oxy_fr / 100)) * 10 - 10);

    //fixing rounding problem
    if(calc_depth_max < 0 ){
        calc_depth_max = 0;
    }
    var calc_he_fr = Math.ceil(100 - (((calc_ppo2_bottom * 1.0) / ((calc_depth_max + 10) / 10)) * 100) - (((calc_ppn2_max * 1.0) / ((calc_depth_max + 10) / 10)) * 100));
    var calc_depth_min = Math.ceil((calc_ppo2_min*1.0) / ((calc_ppo2_bottom * 1.0) / ((calc_depth_max + 10) / 10)) * 10 - 10);

    //fix depth_min rounding problem
    if(calc_depth_min < 0){
        calc_depth_min = 0;
    }

    //fix < 0 helium fraction because oxy is to height percentage for selected ppn2 max
    if (calc_he_fr < 0){
        calc_he_fr = 0;
    }
    //Display EAD and END
    calc_disp_end_ead(calc_end_n2_only((calc_he_fr*0.01) , calc_depth_max) , calc_ead_fn(((100 - calc_oxy_fr - calc_he_fr)*0.01) , calc_depth_max));

    //set computed value on round slider
    $("#tr_circle_sld_depth").roundSlider("setValue", calc_depth_min + "," + calc_depth_max );
    $("#tr_circle_sld_he").roundSlider("setValue", calc_he_fr );

    //and select on option for depth min \ max, he
    $("#opt_calc_depth_lo option[value=" + calc_depth_min + "]").prop('selected', true);
    $("#opt_calc_depth option[value=" + calc_depth_max + "]").prop('selected', true);
    $("#opt_calc_he option[value=" + calc_he_fr + "]").prop('selected', true);
    $("#opt_calc_o2 option[value=" + calc_oxy_fr + "]").prop('selected', true);

    //and finally update mix inside circles
    calc_mix_disp(calc_oxy_fr , calc_he_fr);
}

//update depth and oxy if helium is changed
function calc_upd_depth_oxy(){
    //Get current slider Helium selected value
    var calc_he_fr = ($("#tr_circle_sld_he").data("roundSlider").getValue());

    //get actual value from Dive Settings
    var calc_ppo2_bottom = 0;
    $.each($(".opt_ppo2_bottom option:selected"), function(){
        calc_ppo2_bottom = ($(this).val()) * 1.0;
    });

    var calc_ppo2_min = 0;
    $.each($(".opt_ppo2_min option:selected"), function(){
        calc_ppo2_min = ($(this).val()) * 1.0;
    });
    var calc_ppn2_max = 0;
    $.each($(".opt_ppn2_max option:selected"), function(){
        calc_ppn2_max = ($(this).val()) * 1.0;
    });

    //calculate new depth min \ max and helium fraction
    //var calc_he_fr = Math.ceil(100 - (((calc_ppo2_bottom * 1.0) / ((calc_depth_max + 10) / 10)) * 100) - (((calc_ppn2_max * 1.0) / ((calc_depth_max + 10) / 10)) * 100));
    //var calc_oxy_fr = 33;

    var calc_depth_max = Math.floor((((calc_ppo2_bottom * 1.0) - (calc_ppn2_max * 1.0) * 1000)) / (calc_he_fr - 100));// + 10
    //console.log(calc_depth_max);

    var calc_depth_min = Math.ceil((calc_ppo2_min*1.0) / ((calc_ppo2_bottom * 1.0) / ((calc_depth_max + 10) / 10)) * 10 - 10);
    var calc_oxy_fr = Math.floor(((calc_ppo2_bottom * 1.0) / ((calc_depth_max + 10) / 10)) * 100);
    //fix depth_min rounding problem
    if(calc_depth_min < 0){
        calc_depth_min = 0;
    }
    //fix < 0 oxy fraction because oxy is to height percentage for selected ppn2 max
    if (calc_oxy_fr < 0){
        calc_oxy_fr = 0;
    }

    //Display EAD and END
    calc_disp_end_ead(calc_end_n2_only((calc_he_fr*0.01) , calc_depth_max) , calc_ead_fn(((100 - calc_oxy_fr - calc_he_fr)*0.01) , calc_depth_max));

    //set computed value on round slider
    $("#tr_circle_sld_depth").roundSlider("setValue", calc_depth_min + "," + calc_depth_max );
    $("#tr_circle_sld_oxy").roundSlider("setValue", calc_oxy_fr );

    //and select on option for depth min \ max, he
    $("#opt_calc_depth_lo option[value=" + calc_depth_min + "]").prop('selected', true);
    $("#opt_calc_depth option[value=" + calc_depth_max + "]").prop('selected', true);
    $("#opt_calc_o2 option[value=" + calc_oxy_fr + "]").prop('selected', true);
    $("#opt_calc_he option[value=" + calc_he_fr + "]").prop('selected', true);

    //and finally update mix inside circles
    calc_mix_disp(calc_oxy_fr , calc_he_fr);
}

//Draw All Formulas whit selected style \ colors \ dimension
function calc_formuls(){
    //combine formula colors for different themes style
    //get current selected theme
    var tn_cng_color = document.getElementById("tn_color");
    var tn_color_idx = tn_cng_color.options[tn_cng_color.selectedIndex].value;

    //dark theme
    if(tn_color_idx == 1){
        var color_main = "#c4c4c4";
        var color_depth_max_min = "#006bac";
        var color_oxy = "#188958";
        var color_he = "#446184";
        var color_n2 = "#953a48";
    }
    //light theme
    if(tn_color_idx == 2){
        var color_main = "#000000";
        var color_depth_max_min = "#00aefe";
        var color_oxy = "#00ab00";
        var color_he = "#0080fc";
        var color_n2 = "#cf0020";
    }


    //get current selected dimension and lng
    var tn_cng_dmn = document.getElementById("tn_dmn");
    var tn_dmn_idx = tn_cng_dmn.options[tn_cng_dmn.selectedIndex].value;

    //metres
    if(tn_dmn_idx == 1){
        var dmn_add = "10";
        var dmn_msw = plan_lng("dmn_msw");
        var dmn_bar = plan_lng("dmn_bar");
    }
    //imperial
    if(tn_dmn_idx == 2){
        var dmn_add = "33";
        var dmn_msw = plan_lng("dmn_fsw");
        var dmn_bar = plan_lng("dmn_ata");
    }
    //only get lang translate
    var dmn_air = plan_lng("dmn_air");
    var dmn_mod = plan_lng("dmn_mod");
    var dmn_ead = plan_lng("dmn_ead");
    var dmn_end = plan_lng("dmn_end");

    //MOD formula
    var fr_mod_max = "\\color{" + color_main + "}\\colorbox{" + color_depth_max_min + "}{" + dmn_mod + "}_{(" + dmn_msw + ")}=" + dmn_add + dmn_msw + "/" + dmn_bar + "×\\left[\\bigg({\\frac{p\\colorbox{" + color_oxy + "}O_\\colorbox{" + color_oxy + "}2" + dmn_bar + "}{F\\colorbox{" + color_oxy + "}O_\\colorbox{" + color_oxy + "}2}}\\right)-1\\bigg]";
    katex.render(fr_mod_max, tr_calc_f_mod, {
        throwOnError: false
    });

    //EAD formula
    var fr_ead = "\\color{" + color_main + "}\\colorbox{#d94c26}{" + dmn_ead + "}_{(" + dmn_msw + ")}=\\frac{F\\colorbox{" + color_n2 + "}{N}_\\colorbox{" + color_n2 + "}2}{F\\colorbox{" + color_n2 + "}N_{\\colorbox{" + color_n2 + "}2}(" + dmn_air + ")}×(\\colorbox{" + color_depth_max_min + "}{" + dmn_mod + "}_{(" + dmn_msw + ")}+" + dmn_add + ")-" + dmn_add;
    katex.render(fr_ead, tr_calc_f_ead, {
        throwOnError: false
    });

    //END Formula
    var fr_end = "\\color{" + color_main + "}\\colorbox{" + color_n2 + "}{" + dmn_end + "}_{(" + dmn_msw + ")}=(\\colorbox{" + color_depth_max_min + "}{" + dmn_mod + "}_{(" + dmn_msw + ")}+" + dmn_add + ")×(1-F\\colorbox{" + color_he + "}{He})-" + dmn_add;
    katex.render(fr_end, tr_calc_f_end, {
        throwOnError: false
    });

    //Dalton`s Diamond


}
//calc_formuls();