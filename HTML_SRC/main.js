// /main prg start
var dive = require("/dive_comp.js");
init_global();


function upd_altitide() {
    abs_press[0] = height_to_bar();
    del_lvl_list();
}

function upd_gf_opt() {
    upd_gf();
}

function del_lvl_list() {
    del_html_elem("tn_levels");

    //reset array is important
    lvl_mix_arr = [];
    lvl_arr.length = 3;
    lvl_arr[1] = 15;

    //need check for errors in travel gas list before all updated
    if ($("#tn_plan_ccr").val() == 1) {
        //OC
        idx_arr = get_rl_fraction(get_working_mix_idx(1, travel_mix_arr));
    } else {
        //CCR
        idx_arr = get_rl_fraction(get_working_mix_idx_ccr(1, travel_mix_arr));
    }

    if (idx_arr.length === 0) {
        travel_mix_arr[0] = 50;
        travel_mix_arr[1] = 0;
        lvl_arr[0] = 1;
        lvl_arr[1] = 6;
        //lvl_arr[2] = 10;
        lvl_mix_arr.push(50, 0);
    } else {
        lvl_arr[0] = 1;
        lvl_arr[1] = 6;
        // lvl_arr[2] = 10;
        lvl_mix_arr.push(idx_arr[0], idx_arr[1]);
    }
    upd_all();
}

function upd_deco_list() {
    del_html_elem("tr_deco_option");
    var mix_deco_idx = mix_deco.options[mix_deco.selectedIndex].value;
    deco_watcher = [];

    fix_dup_mix_arr(deco_mix_arr, mix_deco_idx);

    var a = 0;
    var c_counter = 0;
    for (var c = 0; c < mix_deco_idx; c++) {
        create_html_text("tr_deco_option", "tr_deco_mix_name_" + ((c + 1).toString()), mix_lng() + ((c + 1).toString()) + " O<sub><small>2</small></sub>, % / He, % / " + plan_lng("dmn_mod") + lng_meters);

        create_option("tr_deco_option", "opt_deco_option_o2_" + (c + 1).toString() + "1", 1, 100, deco_mix_arr[a], 1, 0, "none");
        deco_watcher[a] = document.getElementById("opt_deco_option_o2_" + (c + 1).toString() + "1");
        deco_watcher[a].addEventListener('change', upd_deco_gas_list);
        deco_watcher[a].addEventListener('change', upd_all);

        create_option("tr_deco_option", "opt_deco_option_he_" + (c + 1).toString() + "2", 0, 99, deco_mix_arr[a + 1], 1, 0, "none");
        deco_watcher[a + 1] = document.getElementById("opt_deco_option_he_" + (c + 1).toString() + "2");
        deco_watcher[a + 1].addEventListener('change', upd_deco_gas_list);
        deco_watcher[a + 1].addEventListener('change', upd_all);

        create_option("tr_deco_option", "opt_deco_option_mod_" + (c + 1).toString() + "3", 6, 400, deco_mix_depth_arr[c_counter], 3, 0, "depth_mod");
        deco_watcher[c_counter] = document.getElementById("opt_deco_option_mod_" + (c + 1).toString() + "3");
        deco_watcher[c_counter].addEventListener('change', upd_deco_gas_list);
        deco_watcher[c_counter].addEventListener('change', upd_all);

        a = a + 2;
        c_counter = c_counter + 1;
    }
}
upd_deco_list();

function upd_travel_list() {
    del_html_elem("tr_travel_option");
    var mix_travel_idx = mix_travel.options[mix_travel.selectedIndex].value;
    travel_watcher = [];

    fix_dup_mix_arr(travel_mix_arr, mix_travel_idx);

    var a = 0;
    var c_counter = 0;
    for (c = 0; c < mix_travel_idx; c++) {
        create_html_text("tr_travel_option", "tr_travel_mix_name_" + ((c + 1).toString()), mix_lng() + ((c + 1).toString()) + " O<sub><small>2</small></sub>, % / He, % / " + plan_lng("dmn_mod") + lng_meters);

        create_option("tr_travel_option", "opt_travel_option_o2_" + (c + 1).toString() + "1", 1, 100, travel_mix_arr[a], 1, 0, "none");
        travel_watcher[a] = document.getElementById("opt_travel_option_o2_" + (c + 1).toString() + "1");
        travel_watcher[a].addEventListener('change', upd_travel_gas_list);
        travel_watcher[a].addEventListener('change', del_lvl_list);
        //!!!_need_deep_test_!!! return if got errors on travel and bottom mix change
        //travel_watcher[a].addEventListener('change', upd_all);

        create_option("tr_travel_option", "opt_travel_option_he_" + (c + 1).toString() + "2", 0, 99, travel_mix_arr[a + 1], 1, 0, "none");
        travel_watcher[a + 1] = document.getElementById("opt_travel_option_he_" + (c + 1).toString() + "2");
        travel_watcher[a + 1].addEventListener('change', upd_travel_gas_list);
        travel_watcher[a + 1].addEventListener('change', del_lvl_list);
        //!!!_need_deep_test_!!! return if got errors on travel and bottom mix change
        //travel_watcher[a+1].addEventListener('change', upd_all);

        create_option("tr_travel_option", "opt_travel_option_mod_" + (c + 1).toString() + "3", 6, 400, travel_mix_depth_arr[c_counter], 3, 0, "depth_mod");
        travel_watcher[c_counter] = document.getElementById("opt_travel_option_mod_" + (c + 1).toString() + "3");
        travel_watcher[c_counter].addEventListener('change', upd_travel_gas_list);
        travel_watcher[c_counter].addEventListener('change', del_lvl_list);

        a = a + 2;
        c_counter = c_counter + 1;
    }
}
upd_travel_list();

//Return filtered mix array by PPO2 Max\Min\Deco END for selected depth OC
function GetDecoMODinMeters(o2_fr, he_fr) {
    var ppo2_deco = document.getElementById("opt_ppo2_deco");
    var ppn2_max_deco = document.getElementById("opt_ppn2_max_deco");

    var ppo2_deco_idx = ppo2_deco.options[ppo2_deco.selectedIndex].value;
    var ppn2_max_deco_idx = ppn2_max_deco.options[ppn2_max_deco.selectedIndex].value;

    var mod = 0.0;

    //calculation of correction without altitude above sea level
    var WaterDensTempCompensation = (1 / ((water_density_temperature_correction() * water_density() * 0.001 * (1))));

    var dp_o2_max = (WaterDensTempCompensation * (ppo2_deco_idx / (o2_fr * 0.01) * 10)) - (10 * height_to_bar()) + 1; //+1m fixing rounding to standard
    var dp_ppn2_max = (WaterDensTempCompensation * (ppn2_max_deco_idx / ((100 - o2_fr - he_fr) * 0.01) * 10)) - (10 * height_to_bar()) + 1; //+1m fixing rounding to standard

    if (dp_o2_max > dp_ppn2_max) {
        mod = dp_ppn2_max;
    } else {
        mod = dp_o2_max;
    }
    return mod;
}


//hide\show OC or CCR html elements
function oc_ccr_hide_show_elem() {
    if ($("#tn_plan_ccr").val() * 1.0 == 1) {

        opt_blt_dln = 1;

        element_id_show_inline("btn_add_lvl");
        element_id_show_inline("btn_del_lvl");

        element_id_hide("tr_setpoint_block");

        element_id_hide("btn_bailout");
        element_id_hide("btn_diluent");

        element_id_show_inline("tn_deco_block");

        element_id_show("7-header");
        element_id_show("t_total_cons");
        //element_id_show("7-content");

        element_id_show("tr_gasbreak_block");
        element_id_show("tr_pp");

        //element_id_show("2-content"); //comment fix problem with every time opened block
        element_id_show("2-header");

        element_id_show("ibcd_block");

        element_id_show("t_cons_btn");
        element_id_show_inline("tn_param_adv");
    } else {
        //ccr plan!
        element_id_hide("btn_add_lvl");
        element_id_hide("btn_del_lvl");

        element_id_show("tr_setpoint_block");

        element_id_hide("tr_gasbreak_block");

        //Bailout plan
        if (opt_blt_dln == 1) {
            element_id_hide("btn_bailout");
            element_id_show_inline("btn_diluent");
            element_id_show_inline("tn_deco_block");
            element_id_show_inline("tn_param_adv");

            //element_id_show("2-content"); //comment fix problem with every time opened block
            element_id_show("2-header");

           element_id_show("7-header");
            element_id_show("t_total_cons");
            //element_id_show("7-content");

            element_id_show("tr_pp");

            element_id_hide("ibcd_block");

            element_id_show("t_cons_btn");
        } else {
            //Diluent plan
            element_id_show_inline("btn_bailout");
            element_id_hide("btn_diluent");
            element_id_hide("tn_deco_block");
            element_id_hide("tn_param_adv");

            element_id_hide("2-content");
            element_id_hide("2-header");

            element_id_hide("7-header");
            element_id_hide("t_total_cons");
            element_id_hide("7-content");

            element_id_hide("tr_pp");

            element_id_hide("ibcd_block");

            element_id_hide("t_cons_btn");
        }
    }
    // /if NO decompression mixtures then hide all gas consumptions
    if (($("#tn_plan_ccr").val() * 1.0 == 2)) {
        if (($("#opt_deco").val() * 1.0) == 0) {
            element_id_hide("7-header");
            element_id_hide("t_total_cons");
        }
    }
}

//Build Bailout CCR Plan
function btn_bailout() {
    opt_blt_dln = 1;
    upd_all();
}
//Build Diluent CCR Plan
function btn_diluent() {
    opt_blt_dln = 2;
    upd_all();
}

//reset plan on change from OC to CCR and from CCR to OC
function oc_ccr_change() {
    del_lvl_list();
}

function btn_build_pp(){
    element_id_show("div_pp_chart");
    element_id_show("div_pp_table");
    element_id_hide("t_pp_btn");
    
    dplan_press_arr(main_plan_ccr_fix);
    pp_profile_chart("t_press_chart");
    
}

function btn_build_cons(){
    element_id_show("t_cons_table");
    element_id_show("t_cons_total_2");
    element_id_hide("t_cons_btn");

    dplan_cons_arr(main_plan_table);
    
    var nodeF = document.getElementById("t_total_cons").lastChild;
    var cloneF = nodeF.cloneNode(true);
    document.getElementById("t_cons_total_2").appendChild(cloneF);
}

function btn_build_price() {
    element_id_show("price_price");
    element_id_show("price_exchange");
    element_id_show("price_total");

    element_id_hide("t_price_calc_btn");
    
    upd_price();
}

function btn_build_learn(){
    element_id_show("t_learns_interface");
    element_id_show("t_learns_pp");
    element_id_show("t_learns_formulas");

    element_id_hide("t_learn_btn");

    //update learn sliders BEFORE any init or change
    learn_slider_upd();
    //update learn tools data. Only for display not for computation
    calc_pp_disp();
    //Update MOD calculator after PPO2 \ PPN2 limits Changed
    calc_upd_best_mix("dp_max");
    calc_formuls();
}

//Recalculate OC profiles
function upd_all() {
    //Show progress bar
    Pbar_Show();

    //update to current selected pressure. It is important for correct update prepared data to dive plan building
    abs_press[0] = height_to_bar();

    //Update GUI dimension first. It is important for correct update GUI elements at any time
    changeGuiDim();
    oc_ccr_hide_show_elem();
   
    upd_travel_list();
    upd_deco_list();
    upd_lvl_list();

    //Main Function for AirBrakes
    airbr_mix_arr();
    upd_airbr_mix();

    //upd_airbr();
    main_plan_res = ShortStop(build_dive());
    main_plan_src = ccr_compact_plan(main_plan_res);

    main_plan_table = src_to_5_arr((main_plan_src) , 0);
    main_plan = src_to_5_arr(main_plan_src , 1);
    main_plan_ccr_fix = src_to_5_arr(main_plan_res , 1);
  
    

    //Build main dive table
    dplan_sort_arr(main_plan_table);
    
    //Build Total Consumption Table
    total_gass_arr(main_plan);

    //Build Total CNS and OTU Table
    total_cns_otu(main_plan_ccr_fix);
    

    DrawChart("profile_chart", "t_tiss_ng", "t_tiss_hl", main_plan);

    //Hide consumptions tables
    element_id_hide("t_cons_table");
    element_id_hide("t_cons_total_2");
    //element_id_hide("7-content");
    element_id_show("t_cons_btn");

    //delete compartments charts before create new
    del_html_elem("t_tiss_ng");
    del_html_elem("t_tiss_hl");
    del_html_elem("t_tiss_tl");
    del_html_elem("t_tiss_tl_heat");
    element_id_hide("t_tiss_chart");
    element_id_show("t_tiss_btn");
    
    //Hide partial pressure table and chart
    element_id_hide("div_pp_chart");
    element_id_hide("div_pp_table");
    element_id_show("t_pp_btn");

    //Hide learn tools
    element_id_hide("t_learns_interface");
    element_id_hide("t_learns_pp");
    element_id_hide("t_learns_formulas");
    element_id_show("t_learn_btn");

    //Hide gas price
    element_id_hide("price_price");
    element_id_hide("price_exchange");
    element_id_hide("price_total");
    element_id_show("t_price_calc_btn");    

    //auto save all settings
    btn_save();

    Pbar_Hide();
}
upd_all();

//Update on change only tables alerts after alerts limits changed
function upd_tbl_main() {

    main_plan = src_to_5_arr(build_dive());
    //Build main dive table
    dplan_sort_arr(main_plan);
    //Build Total Coms Table
    total_gass_arr(main_plan);
}


//Main Function for learning tools \ calculators
function upd_calc() {
    openNav();
}

//Show progress bar
var f_start = 1;
function Pbar_Show() {
    if(f_start == 1){
        f_start = 0;
    }
    if(f_start == 0){
        //del_html_elem("tn_overlay_text_progress");
        //create_html_text("tn_overlay_text_progress", "opt_overlay_text_progress", "Please Wait...");
        setTimeout(function() {
        document.getElementById("Overlay_progress").style.height = "100%";
        document.getElementById("Overlay_progress").style.opacity = "1";
    }, 20);
        //document.getElementById("Overlay_progress").style.height = "100%";
        //document.getElementById("Overlay_progress").style.opacity = "1";
    }    
}

function Pbar_Hide() {
    //document.getElementById("Overlay_progress").style.height = "0%";
    //document.getElementById("Overlay_progress").style.opacity = "0";
    setTimeout(function() {
        document.getElementById("Overlay_progress").style.height = "0%";
        document.getElementById("Overlay_progress").style.opacity = "0";
    }, 200);
    
}


//Main Function for AnyErrors
function upd_error() {
    openNav();
    upd_all();
}
//Open overlay window with custom text
function openNav() {
    del_html_elem("tn_overlay_text");
    create_html_text("tn_overlay_text", "opt_overlay_text", plan_lng("ch_UnderDev"));
    document.getElementById("AlertOverlay").style.height = "100%";
    //document.getElementById("AlertOverlay").style.display = "block";
    document.getElementById("AlertOverlay").style.opacity = "1";

}

//and close
function closeNav() {
    setTimeout(function() {
        document.getElementById("AlertOverlay").style.height = "0%";
    }, 400);
    document.getElementById("AlertOverlay").style.opacity = "0";
    //document.getElementById("AlertOverlay").style.display = "none";
}

//Return current max depth in levels
function max_lvl_depth(tmp_arr) {
    var max_dp = 1.0;
    var a = 0;
    for (j = 0; j < (tmp_arr.length / 3); j++) {
        if (tmp_arr[a + 1] * 1.0 > max_dp) {
            max_dp = tmp_arr[a + 1] * 1.0;
        }
        a = a + 3;
    }
    return max_dp;
}

//Update levels list after interface changes
function upd_lvl_list() {
    del_html_elem("tn_levels");

    lvl_mix_watcher = [];
    lvl_dp_watcher = [];
    lvl_tm_watcher = [];



    att = 0;
    lvl_mix_arr = [];
    //console.log(lvl_arr);
    for (j = 0; j < (lvl_arr.length / 3); j++) {
        if (j === 0) {
            main_lvl = 1;
        } else {
            //current selected gas is main_lvl index
            main_lvl = lvl_arr[att - 2];

            //need deep tests. Actual fixing problem with levels available gas list.
            //Remove old crapy calculation current level depth
            //main_lvl = lvl_arr[att+1];

        }
        //get properly mix list for selected level/ Sort\arr etc and make option
        idx_arr = [];
        //make properly mix list for OC(1) or CCR(2) type plan
        if ($("#tn_plan_ccr").val() == 1) {
            //OC
            idx_arr = get_rl_fraction(get_working_mix_idx(main_lvl, travel_mix_arr));
        } else {
            //CCR
            idx_arr = get_rl_fraction(get_working_mix_idx_ccr(main_lvl, travel_mix_arr));
        }

        create_option_arr("tn_levels", "opt_levels_mix_" + j, lvl_arr[att], nrm_to_txt_arr(idx_arr));
        lvl_mix_watcher[att] = document.getElementById("opt_levels_mix_" + j);
        lvl_mix_watcher[att].addEventListener('change', upd_lvl_opt_arr);

        //make lvl profile actual gass list to array
        h = (lvl_arr[att] - 1) * 2;

        lvl_mix_arr.push(idx_arr[h] * 1.0, idx_arr[h + 1] * 1.0);

        //make properly min and max depth for OC(1) or CCR(2) type plan and make option
        if ($("#tn_plan_ccr").val() == 1) {
            //OC
            min_max_arr = ret_mix_range_oc(lvl_arr[att], get_rl_fraction(get_working_mix_idx(main_lvl, travel_mix_arr)));

        } else {
            //CCR
            min_max_arr = ret_mix_range_ccr(lvl_arr[att], get_rl_fraction(get_working_mix_idx_ccr(main_lvl, travel_mix_arr)));
        }

        if (j > 0) {

            //fix deco computation problem with big steeps between levels under ascent and make maximum ascent level half of previous level
            if (j < (lvl_arr.length / 3)) {
                //alert(lvl_arr[att-2]);
                if(parseInt(lvl_arr[att - 2] / 2) < 1) {
                    min_max_arr[0] = 1;
                }
                else{
                    min_max_arr[0] = parseInt(lvl_arr[att - 2] / 2);
                }
            }

            //fix problem with bad decompression computation dive with hight O2(+80)% over 6 meters.
            if (min_max_arr[0] < 7) {
                if (lvl_arr[att - 2] > 6) {
                    min_max_arr[0] = 7;
                }
            }
        }

        //console.log(min_max_arr[0],min_max_arr[1], lvl_arr[att+1]);
        create_option_lvl("tn_levels", "opt_levels_depth_" + j, min_max_arr[0] * 1.0, (min_max_arr[1] * 1.0) - 1, lvl_arr[att + 1] * 1.0, 1, 0);
        //                                                                                                    ^^fix rounding problem between lvl connections
        lvl_dp_watcher[att] = document.getElementById("opt_levels_depth_" + j);
        lvl_dp_watcher[att].addEventListener('change', upd_lvl_opt_arr);
        
        
        if ($("#tn_plan_ccr").val() == 1) {
            create_option_tm("tn_levels", "opt_levels_time_" + j, 1, 60, lvl_arr[att + 2], 1, 0);
        }
        else{
            create_option_tm("tn_levels", "opt_levels_time_" + j, 1, 320, lvl_arr[att + 2], 1, 0);
        }
        
        lvl_tm_watcher[att] = document.getElementById("opt_levels_time_" + j);
        lvl_tm_watcher[att].addEventListener('change', upd_lvl_opt_arr);

        create_html_text("tn_levels", "tn_levels_break", "");
        att = att + 3;
    }

    //crappy code with interface update. No problem but crappy update. Maybe fix later.
    if (isNaN(lvl_mix_arr[0]) == true) {
        del_lvl_list();
    }

    //console.log(lvl_arr);
}
upd_lvl_list();

//Version checker and reset do default if version changed
if(getCookie("version_check") == null || getCookie("version_check") != "11.5"){
    //setCookie("version_check", "11.5");
    //console.log("first start current version!");
    //btn_restore();
    
}