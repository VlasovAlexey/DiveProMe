/*
deleteCookie("decomix_usr1");
deleteCookie("travelmix_usr1");
deleteCookie("lvl_usr1");
deleteCookie("lvl_mix_usr1");
deleteCookie("mdls_usr1");
*/
var deco_mix_arr = [50,0,100,0,20,30,18,45,15,55,12,60,10,70,21,35,30,30,60,0];
var travel_mix_arr = [21,0,40,0,18,45,15,55,12,60,30,70,16,35,21,35,30,0,60,0];

var lvl_arr = [1,40,9];
var lvl_mix_arr = [21,0];

var gf_arr = [20,80];

var mdls_usr = 2;
var lngs_usr = 1;

var dmns_usr = 1;
var color_usr = 1;
var water_ph_usr = 4;
var opt_deco_usr = 2;
var opt_travel_usr = 7;

var opt_ppo2_deco_usr = 1.58;
var opt_ppo2_bottom_usr = 1.4;
var opt_ppo2_min_usr = 0.18;
var opt_ppn2_max_usr = 3.95;
var opt_ppn2_max_deco_usr = 3.16;
var opt_ibcd_ppn2_usr = 1.5;
var opt_ibcd_pphe_usr = 1.5;
var opt_rate_dsc_usr = 25;
var opt_rate_asc_usr = 15;
var opt_rate_asc_deco_usr = 9;
var opt_rmv_deco_usr = 18;
var opt_rmv_bt_usr = 20;
var opt_cng_time_usr = 1.0;
var opt_lst_stop_usr = 3;
var opt_slevel_usr = 0;
var opt_celsus_usr = 21;

//New dim
var opt_wrn_ibcd_lip_usr = 2;
var opt_wrn_btm_mix_usr = 4800;
var opt_wrn_deco_mix49_usr = 2400;
var opt_wrn_deco_mix50_usr = 2400;
var opt_wrn_deco_mix100_usr = 1200;

var opt_blnd_temp_usr = 21;
var opt_blnd_temp_mode_usr = 1;

var opt_blend_mix_first_usr = 1;
var opt_blend_press_start_usr = 100;
var opt_blend_press_end_usr = 200;
var opt_blend_he_start_usr = 0;
var opt_blend_o2_start_usr = 21;
var opt_blend_he_end_usr = 0;
var opt_blend_o2_end_usr = 50;

var opt_calc_depth_usr = 50;
var opt_calc_o2_usr = 20;
var opt_calc_he_usr = 30;
var opt_calc_depth_lo_usr = 1;

var opt_price_cur_usr = 1;
var opt_price_he_dls_usr = 0;
var opt_price_he_cnt_usr = 8;

var opt_price_o2_dls_usr = 0;
var opt_price_o2_cnt_usr = 2;

var opt_price_top_dls_usr = 5;
var opt_price_top_cnt_usr = 0;

//new2_0
var opt_calc_cur_ex_rate_pound_usr = 0;
var opt_calc_cur_ex_rate_pence_usr = 77;
var opt_calc_cur_ex_rate_euro_usr = 0;
var opt_calc_cur_ex_rate_eucents_usr = 90;
var opt_calc_cur_ex_rate_rub_usr = 65;
var opt_calc_cur_ex_rate_kopek_usr = 5;

function default_set(){
    deco_mix_arr = [50,0,100,0,20,30,18,45,15,55,12,60,10,70,21,35,30,30,60,0];
    travel_mix_arr = [21,0,40,0,18,45,15,55,12,60,30,70,16,35,21,35,30,0,60,0];
    lvl_arr = [1,40,9];
    lvl_mix_arr = [21,0];
    gf_arr = [20,80];
    mdls_usr = 2;
    lngs_usr = 1;
    dmns_usr = 1;
    color_usr = 1;
    water_ph_usr = 4;
    opt_deco_usr = 2;
    opt_travel_usr = 7;

    opt_ppo2_deco_usr = 1.58;
    opt_ppo2_bottom_usr = 1.4;
    opt_ppo2_min_usr = 0.18;
    opt_ppn2_max_usr = 3.95;
    opt_ppn2_max_deco_usr = 3.16;
    opt_ibcd_ppn2_usr = 1.5;
    opt_ibcd_pphe_usr = 1.5;

    opt_rate_dsc_usr = 25;
    opt_rate_asc_usr = 15;
    opt_rate_asc_deco_usr = 9;
    opt_rmv_deco_usr = 18;
    opt_rmv_bt_usr = 20;
    opt_cng_time_usr = 1.0;
    opt_lst_stop_usr = 3;
    opt_slevel_usr = 0;
    opt_celsus_usr = 21;

    //New dim
    opt_wrn_ibcd_lip_usr = 2;
    opt_wrn_btm_mix_usr = 4800;
    opt_wrn_deco_mix49_usr = 2400;
    opt_wrn_deco_mix50_usr = 2400;
    opt_wrn_deco_mix100_usr = 1200;

    opt_blnd_temp_usr = 21;
    opt_blnd_temp_mode_usr = 1;

    opt_blend_mix_first_usr = 1;
    opt_blend_press_start_usr = 100;
    opt_blend_press_end_usr = 200;
    opt_blend_he_start_usr = 0;
    opt_blend_o2_start_usr = 21;
    opt_blend_he_end_usr = 0;
    opt_blend_o2_end_usr = 50;

    opt_calc_depth_usr = 66;
    opt_calc_o2_usr = 18;
    opt_calc_he_usr = 30;
    opt_calc_depth_lo_usr = 0;

    opt_price_cur_usr = 1;
    opt_price_he_dls_usr = 0;
    opt_price_he_cnt_usr = 8;

    opt_price_o2_dls_usr = 0;
    opt_price_o2_cnt_usr = 2;

    opt_price_top_dls_usr = 5;
    opt_price_top_cnt_usr = 0;

    //new2_0
    opt_calc_cur_ex_rate_pound_usr = 0;
    opt_calc_cur_ex_rate_pence_usr = 77;
    opt_calc_cur_ex_rate_euro_usr = 0;
    opt_calc_cur_ex_rate_eucents_usr = 90;
    opt_calc_cur_ex_rate_rub_usr = 65;
    opt_calc_cur_ex_rate_kopek_usr = 5;
}

var price_main_arr = [
    {
        text: "US Dollar",
        id: "tn_price_us",
        isdisable: "enabled"
    },
    {
        text: "Euro",
        id: "tn_price_eu",
        isdisable: "enabled"
    },
    {
        text: "British Pound",
        id: "tn_price_uk",
        isdisable: "enabled"
    },
    {
        text: "Russian Ruble",
        id: "tn_price_rf",
        isdisable: "enabled"
    }];
var wrn_ibcd_lip_arr = [
    {
        text: "Yes",
        id: "tn_ibcd_lip_yes",
        isdisable: "enabled"
    },
    {
        text: "No",
        id: "tn_ibcd_lip_no",
        isdisable: "enabled"
    }];
var blend_temp_mode_arr = [
    {
        text: "Ideal Gas",
        id: "tn_blnd_temp_mode_ideal",
        isdisable: "enabled"
    },
    {
        text: "Van Der Waals",
        id: "tn_blnd_temp_mode_vdv",
        isdisable: "disabled"
    }];
var blend_mix_first_arr = [
    {
        text: "He",
        id: "tn_mix_first_he",
        isdisable: "enabled"
    },
    {
        text: "O<sub><small>2</small></sub>",
        id: "tn_mix_first_o2",
        isdisable: "enabled"
    }];

var mdls_arr = [
    {
        text: "ZHL-A",
        id: "tn_mdl_zhl_a",
        isdisable: "enabled"
    },
    {
        text: "ZHL-B",
        id: "tn_mdl_zhl_b",
        isdisable: "enabled"
    },
    {
        text: "ZHL-C",
        id: "tn_mdl_zhl_c",
        isdisable: "enabled"
    },
    {
        text: "VPM-B",
        id: "tn_mdl_vpm_b",
        isdisable: "disabled"
    }];
var lng_arr = [
    {
        text: "English",
        id: "tn_english",
        isdisable: "enabled"
    },
    {
        text: "Русский",
        id: "tn_russia",
        isdisable: "enabled"
    },
    {
        text: "Español",
        id: "tn_espanol",
        isdisable: "enabled"
    }];
var dmns_arr = [
    {
        text: "Meters/Liters/Atm.",
        id: "tn_dmn_mtr",
        isdisable: "enabled"
    },
    {
        text: "Feet/Cu.Feet/Atm.",
        id: "tn_dmn_imp",
        isdisable: "disabled"
    }];
var color_arr = [
    {
        text: "Dark Theme",
        id: "tn_color_dark",
        isdisable: "enabled"
    },
    {
        text: "Light Theme",
        id: "tn_color_light",
        isdisable: "enabled"
    }];
var water_ph_arr = [
    {
        text: "Atlantic",
        id: "tn_water_salt",
        isdisable: "enabled"
    },
    {
        text: "Fresh",
        id: "tn_water_fresh",
        isdisable: "enabled"
    },
    {
        text: "Baltic",
        id: "tn_water_baltic",
        isdisable: "enabled"
    },
    {
        text: "Red Sea",
        id: "tn_water_redsea",
        isdisable: "enabled"
    },
    {
        text: "Grand Lake",
        id: "tn_water_glake",
        isdisable: "enabled"
    },
    {
        text: "Dead Sea",
        id: "tn_water_deadsea",
        isdisable: "enabled"
    }];

function setCookie(name, value) {
    if (IsAndroid() == true) {
        var expires = "; expires=" + "Mon, 01-Jan-2224 00:00:00 GMT";
        //make cookie policy
        //var SameSite = "; SameSite=Strict;  Path=/";
        var SameSite = "";
        document.cookie = name + "=" + value + expires + SameSite;
    }
    else
    {
        localStorage.setItem(name, value);
    }
}

function getCookie(name) {
    if (IsAndroid() == true) {
        var r = document.cookie.match("(^|;) ?" + name + "=([^;]*)(;|$)");
        if (r) return r[2];
        else return null;
    }
    else
    {
        return (localStorage.getItem(name));
    }
}
function deleteCookie(name) {
    if (IsAndroid() == true) {
        var date = new Date();
        date.setTime(date.getTime() - 1);
        document.cookie = name += "=; expires=" + date.toGMTString();
    }
    else
    {
        localStorage.removeItem(name);
    }
}
function write_cookie(){
    setCookie("decomix_usr1", deco_mix_arr.join(","));
    setCookie("travelmix_usr1", travel_mix_arr.join(","));
    setCookie("lvl_usr1", lvl_arr.join(","));
    setCookie("lvl_mix_usr1", lvl_mix_arr.join(","));

    setCookie("gf_arr_usr1", gf_arr.join(","));
    setCookie("mdls_usr1", return_idx("tn_mdl"));
    setCookie("lngs_usr1", return_idx("tn_lng"));

    setCookie("dmns_usr1", return_idx("tn_dmn"));
    setCookie("color_usr1", return_idx("tn_color"));
    setCookie("water_ph_usr1", return_idx("tn_water"));
    setCookie("opt_deco_usr1", return_idx("opt_deco"));
    setCookie("opt_travel_usr1", return_idx("opt_travel"));

    setCookie("opt_ppo2_deco_usr1", return_idx("opt_ppo2_deco"));
    setCookie("opt_ppo2_bottom_usr1", return_idx("opt_ppo2_bottom"));
    setCookie("opt_ppo2_min_usr1", return_idx("opt_ppo2_min"));
    setCookie("opt_ppn2_max_usr1", return_idx("opt_ppn2_max"));
    setCookie("opt_ppn2_max_deco_usr1", return_idx("opt_ppn2_max_deco"));
    setCookie("opt_ibcd_ppn2_usr1", return_idx("opt_ibcd_ppn2"));
    setCookie("opt_ibcd_pphe_usr1", return_idx("opt_ibcd_pphe"));

    setCookie("opt_rate_dsc_usr1", return_idx("opt_rate_dsc"));
    setCookie("opt_rate_asc_usr1", return_idx("opt_rate_asc"));
    setCookie("opt_rate_asc_deco_usr1", return_idx("opt_rate_asc_deco"));
    setCookie("opt_rmv_deco_usr1", return_idx("opt_rmv_deco"));
    setCookie("opt_rmv_bt_usr1", return_idx("opt_rmv_bt"));
    setCookie("opt_cng_time_usr1", return_idx("opt_cng_time"));
    setCookie("opt_lst_stop_usr1", return_idx("opt_lst_stop"));
    setCookie("opt_slevel_usr1", return_idx("opt_slevel"));
    setCookie("opt_celsus_usr1", return_idx("opt_celsus"));

    //new
    setCookie("opt_wrn_ibcd_lip_usr1", return_idx("opt_wrn_ibcd_lip"));
    setCookie("opt_wrn_btm_mix_usr1", return_idx("opt_wrn_btm_mix"));
    setCookie("opt_wrn_deco_mix49_usr1", return_idx("opt_wrn_deco_mix49"));
    setCookie("opt_wrn_deco_mix50_usr1", return_idx("opt_wrn_deco_mix50"));
    setCookie("opt_wrn_deco_mix100_usr1", return_idx("opt_wrn_deco_mix100"));

    //setCookie("opt_blnd_temp_usr1", return_idx("opt_blnd_temp"));
    //setCookie("opt_blnd_temp_mode_usr1", return_idx("opt_blnd_temp_mode"));

    //setCookie("opt_blend_mix_first_usr1", return_idx("opt_blend_mix_first"));
    //setCookie("opt_blend_press_start_usr1", return_idx("opt_blend_press_start"));
    //setCookie("opt_blend_press_end_usr1", return_idx("opt_blend_press_end"));
    //setCookie("opt_blend_he_start_usr1", return_idx("opt_blend_he_start"));
    //setCookie("opt_blend_o2_start_usr1", return_idx("opt_blend_o2_start"));
    //setCookie("opt_blend_he_end_usr1", return_idx("opt_blend_he_end"));
    //setCookie("opt_blend_o2_end_usr1", return_idx("opt_blend_o2_end"));

    setCookie("opt_calc_depth_usr1", return_idx("opt_calc_depth"));
    setCookie("opt_calc_o2_usr1", return_idx("opt_calc_o2"));
    setCookie("opt_calc_he_usr1", return_idx("opt_calc_he"));
    setCookie("opt_calc_depth_lo_usr1", return_idx("opt_calc_depth_lo"));

    setCookie("opt_price_cur_usr1", return_idx("opt_price_cur"));
    setCookie("opt_price_he_dls_usr1", return_idx("opt_price_he_dls"));
    setCookie("opt_price_he_cnt_usr1", return_idx("opt_price_he_cnt"));

    setCookie("opt_price_o2_dls_usr1", return_idx("opt_price_o2_dls"));
    setCookie("opt_price_o2_cnt_usr1", return_idx("opt_price_o2_cnt"));

    setCookie("opt_price_top_dls_usr1", return_idx("opt_price_top_dls"));
    setCookie("opt_price_top_cnt_usr1", return_idx("opt_price_top_cnt"));

    //new2_0
    setCookie("opt_calc_cur_ex_rate_pound_usr1", return_idx("opt_calc_cur_ex_rate_pound"));
    setCookie("opt_calc_cur_ex_rate_pence_usr1", return_idx("opt_calc_cur_ex_rate_pence"));
    setCookie("opt_calc_cur_ex_rate_euro_usr1", return_idx("opt_calc_cur_ex_rate_euro"));
    setCookie("opt_calc_cur_ex_rate_eucents_usr1", return_idx("opt_calc_cur_ex_rate_eucents"));
    setCookie("opt_calc_cur_ex_rate_rub_usr1", return_idx("opt_calc_cur_ex_rate_rub"));
    setCookie("opt_calc_cur_ex_rate_kopek_usr1", return_idx("opt_calc_cur_ex_rate_kopek"));
}

function read_cookie(){
    deco_mix_arr = split_fn_to_int("decomix_usr1");
    travel_mix_arr = split_fn_to_int("travelmix_usr1");
    lvl_arr = split_fn_to_int("lvl_usr1");
    lvl_mix_arr = split_fn_to_int("lvl_mix_usr1");

    gf_arr = split_fn_to_int("gf_arr_usr1");
    mdls_usr = parseInt(getCookie("mdls_usr1"));
    lngs_usr = parseInt(getCookie("lngs_usr1"));
    color_usr = parseInt(getCookie("color_usr1"));
    water_ph_usr = parseInt(getCookie("water_ph_usr1"));
    opt_deco_usr = parseInt(getCookie("opt_deco_usr1"));
    opt_travel_usr = parseInt(getCookie("opt_travel_usr1"));

    opt_ppo2_deco_usr = parseFloat(getCookie("opt_ppo2_deco_usr1"));
    opt_ppo2_bottom_usr = parseFloat(getCookie("opt_ppo2_bottom_usr1"));
    opt_ppo2_min_usr = parseFloat(getCookie("opt_ppo2_min_usr1"));
    opt_ppn2_max_usr = parseFloat(getCookie("opt_ppn2_max_usr1"));
    opt_ppn2_max_deco_usr = parseFloat(getCookie("opt_ppn2_max_deco_usr1"));
    opt_ibcd_ppn2_usr = parseFloat(getCookie("opt_ibcd_ppn2_usr1"));
    opt_ibcd_pphe_usr = parseFloat(getCookie("opt_ibcd_pphe_usr1"));

    opt_rate_dsc_usr = parseInt(getCookie("opt_rate_dsc_usr1"));
    opt_rate_asc_usr = parseInt(getCookie("opt_rate_asc_usr1"));
    opt_rate_asc_deco_usr = parseInt(getCookie("opt_rate_asc_deco_usr1"));
    opt_rmv_deco_usr = parseInt(getCookie("opt_rmv_deco_usr1"));
    opt_rmv_bt_usr = parseInt(getCookie("opt_rmv_bt_usr1"));
    opt_cng_time_usr = parseInt(getCookie("opt_cng_time_usr1"));
    opt_lst_stop_usr = parseInt(getCookie("opt_lst_stop_usr1"));
    opt_slevel_usr = parseInt(getCookie("opt_slevel_usr1"));
    opt_celsus_usr = parseInt(getCookie("opt_celsus_usr1"));

    //new
    opt_wrn_ibcd_lip_usr = parseInt(getCookie("opt_wrn_ibcd_lip_usr1"));
    opt_wrn_btm_mix_usr = parseInt(getCookie("opt_wrn_btm_mix_usr1"));
    opt_wrn_deco_mix49_usr = parseInt(getCookie("opt_wrn_deco_mix49_usr1"));
    opt_wrn_deco_mix50_usr = parseInt(getCookie("opt_wrn_deco_mix50_usr1"));
    opt_wrn_deco_mix100_usr = parseInt(getCookie("opt_wrn_deco_mix100_usr1"));

    //opt_blnd_temp_usr = parseInt(getCookie("opt_blnd_temp_usr1"));
    //opt_blnd_temp_mode_usr = parseInt(getCookie("opt_blnd_temp_mode_usr1"));

    //opt_blend_mix_first_usr = parseInt(getCookie("opt_blend_mix_first_usr1"));
    //opt_blend_press_start_usr = parseInt(getCookie("opt_blend_press_start_usr1"));
    //opt_blend_press_end_usr = parseInt(getCookie("opt_blend_press_end_usr1"));
    //opt_blend_he_start_usr = parseInt(getCookie("opt_blend_he_start_usr1"));
    //opt_blend_he_start_usr = parseInt(getCookie("opt_blend_he_start_usr1"));
    //opt_blend_o2_start_usr = parseInt(getCookie("opt_blend_o2_start_usr1"));
    //opt_blend_he_end_usr = parseInt(getCookie("opt_blend_he_end_usr1"));
    //opt_blend_o2_end_usr = parseInt(getCookie("opt_blend_o2_end_usr1"));

    opt_calc_depth_usr = parseInt(getCookie("opt_calc_depth_usr1"));
    opt_calc_o2_usr = parseInt(getCookie("opt_calc_o2_usr1"));
    opt_calc_he_usr = parseInt(getCookie("opt_calc_he_usr1"));
    opt_calc_depth_lo_usr = parseInt(getCookie("opt_calc_depth_lo_usr1"));

    opt_price_cur_usr = parseInt(getCookie("opt_price_cur_usr1"));
    opt_price_he_dls_usr = parseInt(getCookie("opt_price_he_dls_usr1"));
    opt_price_he_cnt_usr = parseInt(getCookie("opt_price_he_cnt_usr1"));

    opt_price_o2_dls_usr = parseInt(getCookie("opt_price_o2_dls_usr1"));
    opt_price_o2_cnt_usr = parseInt(getCookie("opt_price_o2_cnt_usr1"));

    opt_price_top_dls_usr = parseInt(getCookie("opt_price_top_dls_usr1"));
    opt_price_top_cnt_usr = parseInt(getCookie("opt_price_top_cnt_usr1"));

    //new2_0
    opt_calc_cur_ex_rate_pound_usr = parseInt(getCookie("opt_calc_cur_ex_rate_pound_usr1"));
    opt_calc_cur_ex_rate_pence_usr = parseInt(getCookie("opt_calc_cur_ex_rate_pence_usr1"));
    opt_calc_cur_ex_rate_euro_usr = parseInt(getCookie("opt_calc_cur_ex_rate_euro_usr1"));
    opt_calc_cur_ex_rate_eucents_usr = parseInt(getCookie("opt_calc_cur_ex_rate_eucents_usr1"));
    opt_calc_cur_ex_rate_rub_usr = parseInt(getCookie("opt_calc_cur_ex_rate_rub_usr1"));
    opt_calc_cur_ex_rate_kopek_usr = parseInt(getCookie("opt_calc_cur_ex_rate_kopek_usr1"));

}
function return_idx(html_ids){
    tmp4 = document.getElementById(html_ids);
    idx_me = tmp4.options[tmp4.selectedIndex].value;
    //console.log(idx_me);
    return idx_me;
}
//settings doesn`t saved ad it is first start. it will be saved now
if(getCookie("decomix_usr1") == null){
    //need explanation for me. If uncomment below line all is don`t work on Android
    //write_cookie();
}
else
// read if exist but it is secod start
{
    read_cookie();
}

function split_fn_to_int(arr){
    tmp_arr = getCookie(arr).split(",");
    for(c = 0 ; c < tmp_arr.length ; c++){
        tmp_arr[c] = parseInt(tmp_arr[c]);
    }
    return tmp_arr;
}

//Google analytics + save settings
 function btn_save(){
    //ga('send', 'event'  , 'Save Settings', 'Save Settings OK!');
    write_cookie();

    //check Anroid platform an enable warning about 40 sec. after save if true
    if(IsAndroid() === true){
        android_btn();
    }
 }
 //Restore all default settings
function btn_restore(){
    default_set();
    create_html();
    init_global();
    changeLang();
    assign_css_style();
    write_cookie();
    upd_all();
}

//Create dynamic HTML elements

function create_html(){
    del_html_elem("tn_gf");
    create_option("tn_gf", "tn_gf_lo_opt", 0, 100, gf_arr[0] , 1 , 0);
    create_option("tn_gf", "tn_gf_hi_opt", 0, 100, gf_arr[1], 1 , 0);

    del_html_elem("tr_mdl_sel");
    create_custom_option_arr("tr_mdl_sel" , "tn_mdl" , mdls_usr , mdls_arr);
    del_html_elem("tr_lng_sel");
    create_custom_option_arr("tr_lng_sel" , "tn_lng" , lngs_usr , lng_arr);
    del_html_elem("tr_dmn_sel");
    create_custom_option_arr("tr_dmn_sel" , "tn_dmn" , dmns_usr , dmns_arr);
    del_html_elem("tn_ifc_set");
    create_custom_option_arr("tn_ifc_set" , "tn_color" , color_usr , color_arr);
    del_html_elem("tn_water_set");
    create_custom_option_arr("tn_water_set" , "tn_water" , water_ph_usr , water_ph_arr);

//Create mix numbers selector
    del_html_elem("tr_deco");
    create_option("tr_deco", "opt_deco", 0, 10, opt_deco_usr , 1 , 0);
    del_html_elem("tr_travel");
    create_option("tr_travel", "opt_travel", 1, 10, opt_travel_usr , 1 , 0);

//and other options
    del_html_elem("tr_ppo2_deco");
    create_option("tr_ppo2_deco", "opt_ppo2_deco", 0.8, 3.9, opt_ppo2_deco_usr , 0.01 , 2);
    del_html_elem("tr_ppo2_bottom");
    create_option("tr_ppo2_bottom", "opt_ppo2_bottom", 1.0, 3.2, opt_ppo2_bottom_usr , 0.01 , 2);
    del_html_elem("tr_ppo2_min");
    create_option("tr_ppo2_min", "opt_ppo2_min", 0.1, 0.4, opt_ppo2_min_usr , 0.01 , 2);
    del_html_elem("tr_ppn2_max");
    create_option("tr_ppn2_max", "opt_ppn2_max", 0.9, 9, opt_ppn2_max_usr , 0.01 , 2);
    del_html_elem("tr_ppn2_max_deco");
    create_option("tr_ppn2_max_deco", "opt_ppn2_max_deco", 0.9, 9, opt_ppn2_max_deco_usr , 0.01 , 2);

    del_html_elem("tr_ibcd_ppn2");
    create_option("tr_ibcd_ppn2", "opt_ibcd_ppn2", 0.5, 3.5, opt_ibcd_ppn2_usr , 0.1 , 1);
    del_html_elem("tr_ibcd_pphe");
    create_option("tr_ibcd_pphe", "opt_ibcd_pphe", 0.5, 3.5, opt_ibcd_pphe_usr , 0.1 , 1);

    del_html_elem("tn_rate_dsc");
    create_option("tn_rate_dsc", "opt_rate_dsc", 1, 60, opt_rate_dsc_usr , 1 , 0);
    del_html_elem("tn_rate_asc");
    create_option("tn_rate_asc", "opt_rate_asc", 1, 40, opt_rate_asc_usr , 1 , 0);
    del_html_elem("tn_rate_asc_deco");
    create_option("tn_rate_asc_deco", "opt_rate_asc_deco", 1, 20, opt_rate_asc_deco_usr , 1 , 0);

    del_html_elem("tn_rmv_deco");
    create_option("tn_rmv_deco", "opt_rmv_deco", 3, 60, opt_rmv_deco_usr , 1 , 0);
    del_html_elem("tn_rmv_bt");
    create_option("tn_rmv_bt", "opt_rmv_bt", 3, 60, opt_rmv_bt_usr , 1 , 0);

    del_html_elem("tn_cng_time");
    create_option("tn_cng_time", "opt_cng_time", 0.5, 3, opt_cng_time_usr , 0.5 , 1);
    del_html_elem("tn_lst_stop");
    create_option("tn_lst_stop", "opt_lst_stop", 3, 6, opt_lst_stop_usr , 3 , 0);
    del_html_elem("tn_slevel");
    create_option("tn_slevel", "opt_slevel", 0, 6500, opt_slevel_usr , 100 , 0);
    del_html_elem("tn_celsus");
    create_option("tn_celsus", "opt_celsus", -40, 45, opt_celsus_usr , 1 , 0);

    //create new
    del_html_elem("tr_wrn_ibcd_lip");
    create_custom_option_arr("tr_wrn_ibcd_lip" , "opt_wrn_ibcd_lip" , opt_wrn_ibcd_lip_usr , wrn_ibcd_lip_arr);

    del_html_elem("tr_wrn_btm_mix");
    create_option("tr_wrn_btm_mix", "opt_wrn_btm_mix", 100, 12000, opt_wrn_btm_mix_usr , 100 , 0);
    del_html_elem("tr_wrn_deco_mix49");
    create_option("tr_wrn_deco_mix49", "opt_wrn_deco_mix49", 100, 6000, opt_wrn_deco_mix49_usr , 100 , 0);
    del_html_elem("tr_wrn_deco_mix50");
    create_option("tr_wrn_deco_mix50", "opt_wrn_deco_mix50", 100, 6000, opt_wrn_deco_mix50_usr , 100 , 0);
    del_html_elem("tr_wrn_deco_mix100");
    create_option("tr_wrn_deco_mix100", "opt_wrn_deco_mix100", 100, 6000, opt_wrn_deco_mix100_usr , 100 , 0);

    //del_html_elem("tr_blnd_temp");
    //create_option("tr_blnd_temp", "opt_blnd_temp", 0, 45, opt_blnd_temp_usr , 1 , 0);
    //del_html_elem("tr_blnd_temp_mode");
    //create_custom_option_arr("tr_blnd_temp_mode" , "opt_blnd_temp_mode" , opt_blnd_temp_mode_usr , blend_temp_mode_arr);
    //del_html_elem("tr_blend_mix_first");
    //create_custom_option_arr("tr_blend_mix_first" , "opt_blend_mix_first" , opt_blend_mix_first_usr , blend_mix_first_arr);

    //del_html_elem("tr_blend_press_start");
    //create_option("tr_blend_press_start", "opt_blend_press_start", 0, 400, opt_blend_press_start_usr , 1 , 0);
    //del_html_elem("tr_blend_press_end");
    //create_option("tr_blend_press_end", "opt_blend_press_end", 0, 400, opt_blend_press_end_usr , 1 , 0);
    //del_html_elem("tr_blend_he_start");
    //create_option("tr_blend_he_start", "opt_blend_he_start", 0, 99, opt_blend_he_start_usr , 1 , 0);
    //del_html_elem("tr_blend_he_end");
    //create_option("tr_blend_he_end", "opt_blend_he_end", 0, 99, opt_blend_he_end_usr , 1 , 0);
    //del_html_elem("tr_blend_o2_start");
    //create_option("tr_blend_o2_start", "opt_blend_o2_start", 1, 100, opt_blend_o2_start_usr , 1 , 0);
    //del_html_elem("tr_blend_o2_end");
    //create_option("tr_blend_o2_end", "opt_blend_o2_end", 1, 100, opt_blend_o2_end_usr , 1 , 0);

    del_html_elem("tr_calc_depth");
    create_option("tr_calc_depth", "opt_calc_depth", 1, 400 , opt_calc_depth_usr , 1 , 0);
    del_html_elem("tr_calc_o2");
    create_option("tr_calc_o2", "opt_calc_o2", 3, 100 , opt_calc_o2_usr , 1 , 0);
    del_html_elem("tr_calc_he");
    create_option("tr_calc_he", "opt_calc_he", 0, 99 , opt_calc_he_usr , 1 , 0);
    del_html_elem("tr_calc_depth_lo");
    create_option("tr_calc_depth_lo", "opt_calc_depth_lo", 0, 43 , opt_calc_depth_lo_usr , 1 , 0);

    del_html_elem("tr_price_cur");
    create_custom_option_arr("tr_price_cur" , "opt_price_cur" , opt_price_cur_usr , price_main_arr);
    del_html_elem("tr_price_he_dls");
    create_option("tr_price_he_dls", "opt_price_he_dls", 0, 99 , opt_price_he_dls_usr , 1 , 0);
    del_html_elem("tr_price_he_cnt");
    create_option("tr_price_he_cnt", "opt_price_he_cnt", 0, 99 , opt_price_he_cnt_usr , 1 , 0);

    del_html_elem("tr_price_o2_dls");
    create_option("tr_price_o2_dls", "opt_price_o2_dls", 0, 99 , opt_price_o2_dls_usr , 1 , 0);
    del_html_elem("tr_price_o2_cnt");
    create_option("tr_price_o2_cnt", "opt_price_o2_cnt", 0, 99 , opt_price_o2_cnt_usr , 1 , 0);

    del_html_elem("tr_price_top_dls");
    create_option("tr_price_top_dls", "opt_price_top_dls", 0, 99 , opt_price_top_dls_usr , 1 , 0);
    del_html_elem("tr_price_top_cnt");
    create_option("tr_price_top_cnt", "opt_price_top_cnt", 0, 99 , opt_price_top_cnt_usr , 1 , 0);

    //new2_0
    del_html_elem("tr_calc_cur_ex_rate_pound");
    create_option("tr_calc_cur_ex_rate_pound", "opt_calc_cur_ex_rate_pound", 0, 9 , opt_calc_cur_ex_rate_pound_usr , 1 , 0);
    del_html_elem("tr_calc_cur_ex_rate_pence");
    create_option("tr_calc_cur_ex_rate_pence", "opt_calc_cur_ex_rate_pence", 0, 99 , opt_calc_cur_ex_rate_pence_usr , 1 , 0);

    del_html_elem("tr_calc_cur_ex_rate_euro");
    create_option("tr_calc_cur_ex_rate_euro", "opt_calc_cur_ex_rate_euro", 0, 9 , opt_calc_cur_ex_rate_euro_usr , 1 , 0);
    del_html_elem("tr_calc_cur_ex_rate_eucents");
    create_option("tr_calc_cur_ex_rate_eucents", "opt_calc_cur_ex_rate_eucents", 0, 99 , opt_calc_cur_ex_rate_eucents_usr , 1 , 0);

    del_html_elem("tr_calc_cur_ex_rate_rub");
    create_option("tr_calc_cur_ex_rate_rub", "opt_calc_cur_ex_rate_rub", 0, 199 , opt_calc_cur_ex_rate_rub_usr , 1 , 0);
    del_html_elem("tr_calc_cur_ex_rate_kopek");
    create_option("tr_calc_cur_ex_rate_kopek", "opt_calc_cur_ex_rate_kopek", 0, 99 , opt_calc_cur_ex_rate_kopek_usr , 1 , 0);

    //Re create watchers for changes
    tn_gf_lo = document.getElementById("tn_gf_lo_opt");
    tn_gf_hi = document.getElementById("tn_gf_hi_opt");
    tn_gf_lo.addEventListener('change', upd_gf);
    tn_gf_hi.addEventListener('change', upd_gf);

    tn_cng_time = document.getElementById("opt_cng_time");
    tn_cng_time.addEventListener('change', upd_all);

    tn_cng_color = document.getElementById("tn_color");
    tn_cng_color.addEventListener('change', assign_css_style);
    tn_cng_color.addEventListener('change', upd_all);

    opt_rmv_deco = document.getElementById("opt_rmv_deco");
    opt_rmv_bt = document.getElementById("opt_rmv_bt");

    opt_rmv_deco.addEventListener('change', upd_all);
    opt_rmv_bt.addEventListener('change', upd_all);

    tn_celsus = document.getElementById("opt_celsus");
    tn_celsus.addEventListener('change', upd_altitide);

    tn_slevel = document.getElementById("opt_slevel");
    tn_slevel.addEventListener('change', upd_altitide);

    tn_lst_stop = document.getElementById("opt_lst_stop");
    tn_lst_stop.addEventListener('change', upd_all);

    tn_water_g = document.getElementById("tn_water");
    tn_water_g.addEventListener('change', upd_all);

    rate_asc = document.getElementById("opt_rate_asc");
    rate_dsc = document.getElementById("opt_rate_dsc");
    rate_asc_deco = document.getElementById("opt_rate_asc_deco");

    rate_asc.addEventListener('change', upd_all);
    rate_dsc.addEventListener('change', upd_all);
    rate_asc_deco.addEventListener('change', upd_all);

    mix_deco = document.getElementById("opt_deco");
    mix_travel = document.getElementById("opt_travel");

    ppo2_deco = document.getElementById("opt_ppo2_deco");
    ppo2_bottom = document.getElementById("opt_ppo2_bottom");
    ppo2_min = document.getElementById("opt_ppo2_min");
    ppn2_max = document.getElementById("opt_ppn2_max");

    ibcd_ppn2 = document.getElementById("opt_ibcd_ppn2");
    ibcd_pphe = document.getElementById("opt_ibcd_pphe");

    slevel = document.getElementById("opt_slevel");

    mix_deco.addEventListener('change', upd_deco_list);
    mix_travel.addEventListener('change', upd_travel_list);

    ppn2_max_deco = document.getElementById("opt_ppn2_max_deco");
    ppn2_max_deco.addEventListener('change', upd_all);

    mix_deco.addEventListener('change', upd_all);
    mix_travel.addEventListener('change', upd_all);

    ppo2_deco.addEventListener('change', upd_all);


    ppo2_bottom.addEventListener('change', upd_all);
    ppo2_min.addEventListener('change', upd_all);
    ppn2_max.addEventListener('change', upd_all);

    ibcd_ppn2.addEventListener('change', upd_all);
    ibcd_pphe.addEventListener('change', upd_all);

    lng_opt = document.getElementById("tn_lng");
    lng_opt.addEventListener('change', upd_all);
    //lng_opt.addEventListener('change', changeLang);

    mix_travel.addEventListener('change', del_lvl_list);
    ppo2_deco.addEventListener('change', del_lvl_list);
    ppo2_bottom.addEventListener('change', del_lvl_list);
    ppo2_min.addEventListener('change', del_lvl_list);
    ppn2_max.addEventListener('change', del_lvl_list);
    ibcd_ppn2.addEventListener('change', del_lvl_list);
    ibcd_pphe.addEventListener('change', del_lvl_list);

    mdl = document.getElementById("tn_mdl");
    mdl.addEventListener('change', upd_gf_opt);
    mdl.addEventListener('change', upd_all);

    //recreate watchers for new
    //need check because now every changes make upd_all. This is low performances and need review.

    wrn_ibcd_lip = document.getElementById("tr_wrn_ibcd_lip");
    wrn_ibcd_lip.addEventListener('change', upd_tbl_main);

    wrn_btm_mix = document.getElementById("tr_wrn_btm_mix");
    wrn_btm_mix.addEventListener('change', upd_tbl_main);
    wrn_deco_mix49 = document.getElementById("tr_wrn_deco_mix49");
    wrn_deco_mix49.addEventListener('change', upd_tbl_main);
    wrn_deco_mix50 = document.getElementById("tr_wrn_deco_mix50");
    wrn_deco_mix50.addEventListener('change', upd_tbl_main);
    wrn_deco_mix100 = document.getElementById("tr_wrn_deco_mix100");
    wrn_deco_mix100.addEventListener('change', upd_tbl_main);

    //blnd_temp = document.getElementById("tr_blnd_temp");
    //blnd_temp.addEventListener('change', upd_blend);
    //blnd_temp_mode = document.getElementById("tr_blnd_temp_mode");
    //blnd_temp_mode.addEventListener('change', upd_blend);
    //blend_mix_first = document.getElementById("tr_blend_mix_first");
    //blend_mix_first.addEventListener('change', upd_blend);

    //blend_press_start = document.getElementById("tr_blend_press_start");
    //blend_press_start.addEventListener('change', upd_blend);
    //blend_press_end = document.getElementById("tr_blend_press_end");
    //blend_press_end.addEventListener('change', upd_blend);
    //blend_he_start = document.getElementById("tr_blend_he_start");
    //blend_he_start.addEventListener('change', upd_blend);
    //blend_he_end = document.getElementById("tr_blend_he_end");
    //blend_he_end.addEventListener('change', upd_blend);
    //blend_o2_start = document.getElementById("tr_blend_o2_start");
    //blend_o2_start.addEventListener('change', upd_blend);
    //blend_o2_end= document.getElementById("tr_blend_o2_end");
    //blend_o2_end.addEventListener('change', upd_blend);

    calc_depth = document.getElementById("tr_calc_depth");
    calc_depth.addEventListener('change', upd_calc_mwd_depth);
    calc_o2 = document.getElementById("tr_calc_o2");
    calc_o2.addEventListener('change', upd_calc_mwd_oxy);
    calc_he = document.getElementById("tr_calc_he");
    calc_he.addEventListener('change', upd_calc_mwd_he);
    calc_depth_lo = document.getElementById("tr_calc_depth_lo");
    calc_depth_lo.addEventListener('change', upd_calc_mwd_depth_lo);

    price_cur = document.getElementById("tr_price_cur");
    price_cur.addEventListener('change', upd_price);
    price_he_dls = document.getElementById("tr_price_he_dls");
    price_he_dls.addEventListener('change', upd_price);
    price_he_cnt = document.getElementById("tr_price_he_cnt");
    price_he_cnt.addEventListener('change', upd_price);

    price_o2_dls = document.getElementById("tr_price_o2_dls");
    price_o2_dls.addEventListener('change', upd_price);
    price_o2_cnt = document.getElementById("tr_price_o2_cnt");
    price_o2_cnt.addEventListener('change', upd_price);

    price_top_dls = document.getElementById("tr_price_top_dls");
    price_top_dls.addEventListener('change', upd_price);
    price_top_cnt = document.getElementById("tr_price_top_cnt");
    price_top_cnt.addEventListener('change', upd_price);

    //new2_0
    calc_cur_ex_rate_pound = document.getElementById("tr_calc_cur_ex_rate_pound");
    calc_cur_ex_rate_pound.addEventListener('change', upd_price);
    calc_cur_ex_rate_pence = document.getElementById("tr_calc_cur_ex_rate_pence");
    calc_cur_ex_rate_pence.addEventListener('change', upd_price);

    calc_cur_ex_rate_euro = document.getElementById("tr_calc_cur_ex_rate_euro");
    calc_cur_ex_rate_euro.addEventListener('change', upd_price);
    calc_cur_ex_rate_eucents = document.getElementById("tr_calc_cur_ex_rate_eucents");
    calc_cur_ex_rate_eucents.addEventListener('change', upd_price);

    calc_cur_ex_rate_rub = document.getElementById("tr_calc_cur_ex_rate_rub");
    calc_cur_ex_rate_rub.addEventListener('change', upd_price);
    calc_cur_ex_rate_kopek = document.getElementById("tr_calc_cur_ex_rate_kopek");
    calc_cur_ex_rate_kopek.addEventListener('change', upd_price);

}

create_option("tn_gf", "tn_gf_lo_opt", 0, 100, gf_arr[0] , 1 , 0);
create_option("tn_gf", "tn_gf_hi_opt", 0, 100, gf_arr[1], 1 , 0);

create_custom_option_arr("tr_mdl_sel" , "tn_mdl" , mdls_usr , mdls_arr);
create_custom_option_arr("tr_lng_sel" , "tn_lng" , lngs_usr , lng_arr);
create_custom_option_arr("tr_dmn_sel" , "tn_dmn" , dmns_usr , dmns_arr);
create_custom_option_arr("tn_ifc_set" , "tn_color" , color_usr , color_arr);
create_custom_option_arr("tn_water_set" , "tn_water" , water_ph_usr , water_ph_arr);
create_option("tr_deco", "opt_deco", 0, 10, opt_deco_usr , 1 , 0);
create_option("tr_travel", "opt_travel", 1, 10, opt_travel_usr , 1 , 0);
create_option("tr_ppo2_deco", "opt_ppo2_deco", 0.8, 3.9, opt_ppo2_deco_usr , 0.01 , 2);
create_option("tr_ppo2_bottom", "opt_ppo2_bottom", 1.0, 3.2, opt_ppo2_bottom_usr , 0.01 , 2);
create_option("tr_ppo2_min", "opt_ppo2_min", 0.1, 0.4, opt_ppo2_min_usr , 0.01 , 2);
create_option("tr_ppn2_max", "opt_ppn2_max", 0.9, 9, opt_ppn2_max_usr , 0.01 , 2);
create_option("tr_ppn2_max_deco", "opt_ppn2_max_deco", 0.9, 9, opt_ppn2_max_deco_usr , 0.01 , 2);
create_option("tr_ibcd_ppn2", "opt_ibcd_ppn2", 0.5, 3.5, opt_ibcd_ppn2_usr , 0.1 , 1);
create_option("tr_ibcd_pphe", "opt_ibcd_pphe", 0.5, 3.5, opt_ibcd_pphe_usr , 0.1 , 1);
create_option("tn_rate_dsc", "opt_rate_dsc", 1, 60, opt_rate_dsc_usr , 1 , 0);
create_option("tn_rate_asc", "opt_rate_asc", 1, 40, opt_rate_asc_usr , 1 , 0);
create_option("tn_rate_asc_deco", "opt_rate_asc_deco", 1, 20, opt_rate_asc_deco_usr , 1 , 0);
create_option("tn_rmv_deco", "opt_rmv_deco", 3, 60, opt_rmv_deco_usr , 1 , 0);
create_option("tn_rmv_bt", "opt_rmv_bt", 3, 60, opt_rmv_bt_usr , 1 , 0);
create_option("tn_cng_time","opt_cng_time", 0.5, 3, opt_cng_time_usr , 0.5 , 1);
create_option("tn_lst_stop", "opt_lst_stop", 3, 6, opt_lst_stop_usr , 3 , 0);
create_option("tn_slevel", "opt_slevel", 0, 6500, opt_slevel_usr , 100 , 0);
create_option("tn_celsus", "opt_celsus", -40, 45, opt_celsus_usr , 1 , 0);

//new
create_custom_option_arr("tr_wrn_ibcd_lip" , "opt_wrn_ibcd_lip" , opt_wrn_ibcd_lip_usr , wrn_ibcd_lip_arr);

create_option("tr_wrn_btm_mix", "opt_wrn_btm_mix", 100, 12000, opt_wrn_btm_mix_usr , 100 , 0);
create_option("tr_wrn_deco_mix49", "opt_wrn_deco_mix49", 100, 6000, opt_wrn_deco_mix49_usr , 100 , 0);
create_option("tr_wrn_deco_mix50", "opt_wrn_deco_mix50", 100, 6000, opt_wrn_deco_mix50_usr , 100 , 0);
create_option("tr_wrn_deco_mix100", "opt_wrn_deco_mix100", 100, 6000, opt_wrn_deco_mix100_usr , 100 , 0);

//create_option("tr_blnd_temp", "opt_blnd_temp", 0, 45, opt_blnd_temp_usr , 1 , 0);
//create_custom_option_arr("tr_blnd_temp_mode" , "opt_blnd_temp_mode" , opt_blnd_temp_mode_usr , blend_temp_mode_arr);
//create_custom_option_arr("tr_blend_mix_first" , "opt_blend_mix_first" , opt_blend_mix_first_usr , blend_mix_first_arr);

//create_option("tr_blend_press_start", "opt_blend_press_start", 0, 400, opt_blend_press_start_usr , 1 , 0);
//create_option("tr_blend_press_end", "opt_blend_press_end", 0, 400, opt_blend_press_end_usr , 1 , 0);
//create_option("tr_blend_he_start", "opt_blend_he_start", 0, 99, opt_blend_he_start_usr , 1 , 0);
//create_option("tr_blend_he_end", "opt_blend_he_end", 0, 99, opt_blend_he_end_usr , 1 , 0);
//create_option("tr_blend_o2_start", "opt_blend_o2_start", 1, 100, opt_blend_o2_start_usr , 1 , 0);
//create_option("tr_blend_o2_end", "opt_blend_o2_end", 1, 100, opt_blend_o2_end_usr , 1 , 0);

create_option("tr_calc_depth", "opt_calc_depth", 1, 400 , opt_calc_depth_usr , 1 , 0);
create_option("tr_calc_o2", "opt_calc_o2", 3, 100 , opt_calc_o2_usr , 1 , 0);
create_option("tr_calc_he", "opt_calc_he", 0, 99 , opt_calc_he_usr , 1 , 0);
create_option("tr_calc_depth_lo", "opt_calc_depth_lo", 0, 43 , opt_calc_depth_lo_usr , 1 , 0);

create_custom_option_arr("tr_price_cur" , "opt_price_cur" , opt_price_cur_usr , price_main_arr);
create_option("tr_price_he_dls", "opt_price_he_dls", 0, 99 , opt_price_he_dls_usr , 1 , 0);
create_option("tr_price_he_cnt", "opt_price_he_cnt", 0, 99 , opt_price_he_cnt_usr , 1 , 0);

create_option("tr_price_o2_dls", "opt_price_o2_dls", 0, 99 , opt_price_o2_dls_usr , 1 , 0);
create_option("tr_price_o2_cnt", "opt_price_o2_cnt", 0, 99 , opt_price_o2_cnt_usr , 1 , 0);

create_option("tr_price_top_dls", "opt_price_top_dls", 0, 99 , opt_price_top_dls_usr , 1 , 0);
create_option("tr_price_top_cnt", "opt_price_top_cnt", 0, 99 , opt_price_top_cnt_usr , 1 , 0);

//new2_0
create_option("tr_calc_cur_ex_rate_pound", "opt_calc_cur_ex_rate_pound", 0, 99 , opt_calc_cur_ex_rate_pound_usr , 1 , 0);
create_option("tr_calc_cur_ex_rate_pence", "opt_calc_cur_ex_rate_pence", 0, 99 , opt_calc_cur_ex_rate_pence_usr , 1 , 0);

create_option("tr_calc_cur_ex_rate_euro", "opt_calc_cur_ex_rate_euro", 0, 99 , opt_calc_cur_ex_rate_euro_usr , 1 , 0);
create_option("tr_calc_cur_ex_rate_eucents", "opt_calc_cur_ex_rate_eucents", 0, 99 , opt_calc_cur_ex_rate_eucents_usr , 1 , 0);

create_option("tr_calc_cur_ex_rate_rub", "opt_calc_cur_ex_rate_rub", 0, 2000 , opt_calc_cur_ex_rate_rub_usr , 1 , 0);
create_option("tr_calc_cur_ex_rate_kopek", "opt_calc_cur_ex_rate_kopek", 0, 99 , opt_calc_cur_ex_rate_kopek_usr , 1 , 0);

function init_global(){
    //if you want force language to eng you change to 1
//this "feature" very important for PDF generation with other languages is not possible. Only eng.
    force_lng = 0;

//var deco_mix_arr_new = [];
    deco_watcher = [];
    travel_watcher = [];

    lvl_mix_watcher = [];
    lvl_dp_watcher = [];
    lvl_tm_watcher = [];

//Create first start watchers for changes
    tn_cng_time = document.getElementById("opt_cng_time");
    tn_cng_time.addEventListener('change', upd_all);

    lng_opt = document.getElementById("tn_lng");
    lng_opt.addEventListener('change', upd_all);
    lng_opt.addEventListener('change', changeLang);

    tn_cng_color = document.getElementById("tn_color");
    tn_cng_color.addEventListener('change', assign_css_style);
    tn_cng_color.addEventListener('change', upd_all);

    opt_rmv_deco = document.getElementById("opt_rmv_deco");
    opt_rmv_bt = document.getElementById("opt_rmv_bt");

    opt_rmv_deco.addEventListener('change', upd_all);
    opt_rmv_bt.addEventListener('change', upd_all);

    tn_celsus = document.getElementById("opt_celsus");
    tn_celsus.addEventListener('change', upd_altitide);

    tn_slevel = document.getElementById("opt_slevel");
    tn_slevel.addEventListener('change', upd_altitide);

    tn_lst_stop = document.getElementById("opt_lst_stop");
    tn_lst_stop.addEventListener('change', upd_all);

    tn_water_g = document.getElementById("tn_water");
    tn_water_g.addEventListener('change', upd_all);

    rate_asc = document.getElementById("opt_rate_asc");
    rate_dsc = document.getElementById("opt_rate_dsc");
    rate_asc_deco = document.getElementById("opt_rate_asc_deco");

    rate_asc.addEventListener('change', upd_all);
    rate_dsc.addEventListener('change', upd_all);
    rate_asc_deco.addEventListener('change', upd_all);

    mix_deco = document.getElementById("opt_deco");
    mix_travel = document.getElementById("opt_travel");

    ppo2_deco = document.getElementById("opt_ppo2_deco");
    ppo2_bottom = document.getElementById("opt_ppo2_bottom");
    ppo2_min = document.getElementById("opt_ppo2_min");
    ppn2_max = document.getElementById("opt_ppn2_max");

    ibcd_ppn2 = document.getElementById("opt_ibcd_ppn2");
    ibcd_pphe = document.getElementById("opt_ibcd_pphe");

    slevel = document.getElementById("opt_slevel");

    mix_deco.addEventListener('change', upd_deco_list);
    mix_travel.addEventListener('change', upd_travel_list);

    ppn2_max_deco = document.getElementById("opt_ppn2_max_deco");
    ppn2_max_deco.addEventListener('change', upd_all);

    mix_deco.addEventListener('change', upd_all);
//mix_travel.addEventListener('change', upd_all);

    ppo2_deco.addEventListener('change', upd_all);
    ppo2_bottom.addEventListener('change', upd_all);
    ppo2_min.addEventListener('change', upd_all);
    ppn2_max.addEventListener('change', upd_all);


    ibcd_ppn2.addEventListener('change', upd_tbl_main);
    ibcd_pphe.addEventListener('change', upd_tbl_main);

    mix_travel.addEventListener('change', del_lvl_list);
    ppo2_deco.addEventListener('change', del_lvl_list);
    ppo2_bottom.addEventListener('change', del_lvl_list);
    ppo2_min.addEventListener('change', del_lvl_list);
    ppn2_max.addEventListener('change', del_lvl_list);
//ibcd_ppn2.addEventListener('change', del_lvl_list);
//ibcd_pphe.addEventListener('change', del_lvl_list);

    mdl = document.getElementById("tn_mdl");
    mdl.addEventListener('change', upd_gf_opt);
    mdl.addEventListener('change', upd_all);

    wrn_tn_dmn = document.getElementById("tn_dmn");
    wrn_tn_dmn.addEventListener('change', upd_error);

//new
    wrn_ibcd_lip = document.getElementById("tr_wrn_ibcd_lip");
    wrn_ibcd_lip.addEventListener('change', upd_tbl_main);

    wrn_btm_mix = document.getElementById("tr_wrn_btm_mix");
    wrn_btm_mix.addEventListener('change', upd_tbl_main);
    wrn_deco_mix49 = document.getElementById("tr_wrn_deco_mix49");
    wrn_deco_mix49.addEventListener('change', upd_tbl_main);
    wrn_deco_mix50 = document.getElementById("tr_wrn_deco_mix50");
    wrn_deco_mix50.addEventListener('change', upd_tbl_main);
    wrn_deco_mix100 = document.getElementById("tr_wrn_deco_mix100");
    wrn_deco_mix100.addEventListener('change', upd_tbl_main);

    //blnd_temp = document.getElementById("tr_blnd_temp");
    //blnd_temp.addEventListener('change', upd_blend);
    //blnd_temp_mode = document.getElementById("tr_blnd_temp_mode");
    //blnd_temp_mode.addEventListener('change', upd_blend);
    //blend_mix_first = document.getElementById("tr_blend_mix_first");
    //blend_mix_first.addEventListener('change', upd_blend);

    //blend_press_start = document.getElementById("tr_blend_press_start");
    //blend_press_start.addEventListener('change', upd_blend);
    //blend_press_end = document.getElementById("tr_blend_press_end");
    //blend_press_end.addEventListener('change', upd_blend);
    //blend_he_start = document.getElementById("tr_blend_he_start");
    //blend_he_start.addEventListener('change', upd_blend);
    //blend_he_end = document.getElementById("tr_blend_he_end");
    //blend_he_end.addEventListener('change', upd_blend);
    //blend_o2_start = document.getElementById("tr_blend_o2_start");
    //blend_o2_start.addEventListener('change', upd_blend);
    //blend_o2_end= document.getElementById("tr_blend_o2_end");
    //blend_o2_end.addEventListener('change', upd_blend);

    calc_depth = document.getElementById("tr_calc_depth");
    calc_depth.addEventListener('change', upd_calc_mwd_depth);
    calc_o2 = document.getElementById("tr_calc_o2");
    calc_o2.addEventListener('change', upd_calc_mwd_oxy);
    calc_he = document.getElementById("tr_calc_he");
    calc_he.addEventListener('change', upd_calc_mwd_he);
    calc_depth_lo = document.getElementById("tr_calc_depth_lo");
    calc_depth_lo.addEventListener('change', upd_calc_mwd_depth_lo);

    price_cur = document.getElementById("tr_price_cur");
    price_cur.addEventListener('change', price_lng_cur_upd);
    price_cur.addEventListener('change', upd_price);
    price_he_dls = document.getElementById("tr_price_he_dls");
    price_he_dls.addEventListener('change', upd_price);
    price_he_cnt = document.getElementById("tr_price_he_cnt");
    price_he_cnt.addEventListener('change', upd_price);

    price_o2_dls = document.getElementById("tr_price_o2_dls");
    price_o2_dls.addEventListener('change', upd_price);
    price_o2_cnt = document.getElementById("tr_price_o2_cnt");
    price_o2_cnt.addEventListener('change', upd_price);

    price_top_dls = document.getElementById("tr_price_top_dls");
    price_top_dls.addEventListener('change', upd_price);
    price_top_cnt = document.getElementById("tr_price_top_cnt");
    price_top_cnt.addEventListener('change', upd_price);

//new2_0
    calc_cur_ex_rate_pound = document.getElementById("tr_calc_cur_ex_rate_pound");
    calc_cur_ex_rate_pound.addEventListener('change', upd_price);
    calc_cur_ex_rate_pence = document.getElementById("tr_calc_cur_ex_rate_pence");
    calc_cur_ex_rate_pence.addEventListener('change', upd_price);

    calc_cur_ex_rate_euro = document.getElementById("tr_calc_cur_ex_rate_euro");
    calc_cur_ex_rate_euro.addEventListener('change', upd_price);
    calc_cur_ex_rate_eucents = document.getElementById("tr_calc_cur_ex_rate_eucents");
    calc_cur_ex_rate_eucents.addEventListener('change', upd_price);

    calc_cur_ex_rate_rub = document.getElementById("tr_calc_cur_ex_rate_rub");
    calc_cur_ex_rate_rub.addEventListener('change', upd_price);
    calc_cur_ex_rate_kopek = document.getElementById("tr_calc_cur_ex_rate_kopek");
    calc_cur_ex_rate_kopek.addEventListener('change', upd_price);
}
