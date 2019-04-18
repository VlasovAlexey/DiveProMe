//main prg start
var dive = require("/dive_comp.js");

//if you want force language to eng you change to 1
//this "feature" very important for PDF generation with other languages is not possible. Only eng.
force_lng = 0;

//var deco_mix_arr_new = [];
var deco_watcher = [];
var travel_watcher = [];

var lvl_mix_watcher = [];
var lvl_dp_watcher = [];
var lvl_tm_watcher = [];

//Create first start watchers for changes
var tn_cng_time = document.getElementById("opt_cng_time");
tn_cng_time.addEventListener('change', upd_all);

var lng_opt = document.getElementById("tn_lng");
lng_opt.addEventListener('change', upd_all);
lng_opt.addEventListener('change', changeLang);

var tn_cng_color = document.getElementById("tn_color");
tn_cng_color.addEventListener('change', assign_css_style);
tn_cng_color.addEventListener('change', upd_all);

var opt_rmv_deco = document.getElementById("opt_rmv_deco");
var opt_rmv_bt = document.getElementById("opt_rmv_bt");

opt_rmv_deco.addEventListener('change', upd_all);
opt_rmv_bt.addEventListener('change', upd_all);

var tn_celsus = document.getElementById("opt_celsus");
tn_celsus.addEventListener('change', upd_altitide);

var tn_slevel = document.getElementById("opt_slevel");
tn_slevel.addEventListener('change', upd_altitide);

tn_lst_stop = document.getElementById("opt_lst_stop");
tn_lst_stop.addEventListener('change', upd_all);

tn_water_g = document.getElementById("tn_water");
tn_water_g.addEventListener('change', upd_all);

var rate_asc = document.getElementById("opt_rate_asc");
var rate_dsc = document.getElementById("opt_rate_dsc");
var rate_asc_deco = document.getElementById("opt_rate_asc_deco");

rate_asc.addEventListener('change', upd_all);
rate_dsc.addEventListener('change', upd_all);
rate_asc_deco.addEventListener('change', upd_all);

var mix_deco = document.getElementById("opt_deco");
var mix_travel = document.getElementById("opt_travel");

var ppo2_deco = document.getElementById("opt_ppo2_deco");
var ppo2_bottom = document.getElementById("opt_ppo2_bottom");
var ppo2_min = document.getElementById("opt_ppo2_min");
var ppn2_max = document.getElementById("opt_ppn2_max");

var ibcd_ppn2 = document.getElementById("opt_ibcd_ppn2");
var ibcd_pphe = document.getElementById("opt_ibcd_pphe");

var slevel = document.getElementById("opt_slevel");

mix_deco.addEventListener('change', upd_deco_list);
mix_travel.addEventListener('change', upd_travel_list);

var ppn2_max_deco = document.getElementById("opt_ppn2_max_deco");
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

var mdl = document.getElementById("tn_mdl");
mdl.addEventListener('change', upd_gf_opt);
mdl.addEventListener('change', upd_all);

var wrn_tn_dmn = document.getElementById("tn_dmn");
wrn_tn_dmn.addEventListener('change', upd_error);



//new
var wrn_ibcd_lip = document.getElementById("tr_wrn_ibcd_lip");
wrn_ibcd_lip.addEventListener('change', upd_tbl_main);

var wrn_btm_mix = document.getElementById("tr_wrn_btm_mix");
wrn_btm_mix.addEventListener('change', upd_tbl_main);
var wrn_deco_mix49 = document.getElementById("tr_wrn_deco_mix49");
wrn_deco_mix49.addEventListener('change', upd_tbl_main);
var wrn_deco_mix50 = document.getElementById("tr_wrn_deco_mix50");
wrn_deco_mix50.addEventListener('change', upd_tbl_main);
var wrn_deco_mix100 = document.getElementById("tr_wrn_deco_mix100");
wrn_deco_mix100.addEventListener('change', upd_tbl_main);

var blnd_temp = document.getElementById("tr_blnd_temp");
blnd_temp.addEventListener('change', upd_blend);
var blnd_temp_mode = document.getElementById("tr_blnd_temp_mode");
blnd_temp_mode.addEventListener('change', upd_blend);
var blend_mix_first = document.getElementById("tr_blend_mix_first");
blend_mix_first.addEventListener('change', upd_blend);

var blend_press_start = document.getElementById("tr_blend_press_start");
blend_press_start.addEventListener('change', upd_blend);
var blend_press_end = document.getElementById("tr_blend_press_end");
blend_press_end.addEventListener('change', upd_blend);
var blend_he_start = document.getElementById("tr_blend_he_start");
blend_he_start.addEventListener('change', upd_blend);
var blend_he_end = document.getElementById("tr_blend_he_end");
blend_he_end.addEventListener('change', upd_blend);
var blend_o2_start = document.getElementById("tr_blend_o2_start");
blend_o2_start.addEventListener('change', upd_blend);
var blend_o2_end= document.getElementById("tr_blend_o2_end");
blend_o2_end.addEventListener('change', upd_blend);

var calc_depth = document.getElementById("tr_calc_depth");
calc_depth.addEventListener('change', upd_calc);
var calc_o2 = document.getElementById("tr_calc_o2");
calc_o2.addEventListener('change', upd_calc);
var calc_he = document.getElementById("tr_calc_he");
calc_he.addEventListener('change', upd_calc);
var calc_n2 = document.getElementById("tr_calc_n2");
calc_n2.addEventListener('change', upd_calc);

var price_cur = document.getElementById("tr_price_cur");
price_cur.addEventListener('change', upd_price);
var price_he_dls = document.getElementById("tr_price_he_dls");
price_he_dls.addEventListener('change', upd_price);
var price_he_cnt = document.getElementById("tr_price_he_cnt");
price_he_cnt.addEventListener('change', upd_price);

var price_o2_dls = document.getElementById("tr_price_o2_dls");
price_o2_dls.addEventListener('change', upd_price);
var price_o2_cnt = document.getElementById("tr_price_o2_cnt");
price_o2_cnt.addEventListener('change', upd_price);

var price_top_dls = document.getElementById("tr_price_top_dls");
price_top_dls.addEventListener('change', upd_price);
var price_top_cnt = document.getElementById("tr_price_top_cnt");
price_top_cnt.addEventListener('change', upd_price);

function upd_altitide(){
  abs_press[0] = height_to_bar();
  del_lvl_list();
}

function upd_gf_opt(){
    upd_gf();
    /*
    mdl = document.getElementById("tn_mdl");
    mdl_idx = mdl.options[mdl.selectedIndex].value;
    if(mdl_idx == 1){
      upd_gf();
    }
    if(mdl_idx == 2){
      tn_gf_lo = document.getElementById("tn_gf_lo_opt");
      tn_gf_hi = document.getElementById("tn_gf_hi_opt");
      gf_arr[0] = tn_gf_lo.options[tn_gf_lo.selectedIndex].value;
      gf_arr[1] = tn_gf_hi.options[tn_gf_hi.selectedIndex].value;
    
      del_html_elem("tn_gf");
      del_html_elem("tr_gf");
    }*/
}

function del_lvl_list(){
  del_html_elem("tn_levels");
  
  lvl_mix_arr =[];
  lvl_arr.length = 3;
  lvl_arr[1] = 15;
  
  //idx_arr = get_rl_fraction(get_working_mix_idx(1, travel_mix_arr));
  //lvl_mix_arr.push(idx_arr[0], idx_arr[1]);
    
  //need check for errors in travel gass list before all updated
  idx_arr = get_rl_fraction(get_working_mix_idx(1, travel_mix_arr));
  if(idx_arr.length === 0 ){
    travel_mix_arr[0] = 50;
    travel_mix_arr[1] = 0;
    lvl_arr[0] = 1;
    lvl_arr[1] = 15;
    lvl_mix_arr.push(50, 0);
  }
  else
  {
    lvl_arr[0] = 1;
    lvl_arr[1] = 15;
    lvl_mix_arr.push(idx_arr[0], idx_arr[1]);
  }

  //alert(lvl_mix_arr);
  //alert(lvl_arr);
  //upd_lvl_list();
  upd_all();
}

function upd_deco_list(){
  del_html_elem("tr_deco_option");
  var mix_deco_idx = mix_deco.options[mix_deco.selectedIndex].value;
  deco_watcher = [];
  
  fix_dup_mix_arr(deco_mix_arr,mix_deco_idx);
  
  a = 0;
  for(c = 0 ; c < mix_deco_idx ; c++){
    create_html_text("tr_deco_option" , "tr_deco_mix_name_"+((c+1).toString()) , mix_lng()+((c+1).toString())+" %O<sub><small>2</small></sub>\\He");
    
    create_option("tr_deco_option", "opt_deco_option_o2_"+(c+1).toString()+"1", 1, 100, deco_mix_arr[a], 1 , 0);
    deco_watcher[a] = document.getElementById("opt_deco_option_o2_"+(c+1).toString()+"1");
    deco_watcher[a].addEventListener('change', upd_deco_gas_list);
    deco_watcher[a].addEventListener('change', upd_all);
    
    create_option("tr_deco_option", "opt_deco_option_he_"+(c+1).toString()+"2", 0, 99, deco_mix_arr[a+1], 1 , 0);
    deco_watcher[a+1] = document.getElementById("opt_deco_option_he_"+(c+1).toString()+"2");
    deco_watcher[a+1].addEventListener('change', upd_deco_gas_list);
    deco_watcher[a+1].addEventListener('change', upd_all);
    a = a + 2;
  }
}
upd_deco_list();

function upd_travel_list(){
  del_html_elem("tr_travel_option");
  var mix_travel_idx = mix_travel.options[mix_travel.selectedIndex].value;
  travel_watcher = [];
  
  fix_dup_mix_arr(travel_mix_arr,mix_travel_idx);
  
  a = 0;
  for(c = 0 ; c < mix_travel_idx ; c++){
    create_html_text("tr_travel_option" , "tr_travel_mix_name_"+((c+1).toString()) , mix_lng()+((c+1).toString())+" %O<sub><small>2</small></sub>\\He");
    
    create_option("tr_travel_option", "opt_travel_option_o2_"+(c+1).toString()+"1", 1, 100, travel_mix_arr[a], 1 , 0);
    travel_watcher[a] = document.getElementById("opt_travel_option_o2_"+(c+1).toString()+"1");
    
    travel_watcher[a].addEventListener('change', upd_travel_gas_list);
    travel_watcher[a].addEventListener('change', upd_all);
    travel_watcher[a].addEventListener('change', del_lvl_list);
    
    create_option("tr_travel_option", "opt_travel_option_he_"+(c+1).toString()+"2", 0, 99, travel_mix_arr[a+1], 1 , 0);
    travel_watcher[a+1] = document.getElementById("opt_travel_option_he_"+(c+1).toString()+"2");
    
    travel_watcher[a+1].addEventListener('change', upd_travel_gas_list);
    travel_watcher[a+1].addEventListener('change', upd_all);
    travel_watcher[a+1].addEventListener('change', del_lvl_list);
    a = a + 2;
  }
}
upd_travel_list();

//Return filtered mix array by PPO2 Max\Min\Deco END for selected depth
function get_working_mix_idx(wrk_dp, tmp_mix_arr){
  var mix_travel = document.getElementById("opt_travel");
  var ppo2_bottom = document.getElementById("opt_ppo2_bottom");
  var ppo2_min = document.getElementById("opt_ppo2_min");
  var ppn2_max = document.getElementById("opt_ppn2_max");

  var mix_travel_idx = mix_travel.options[mix_travel.selectedIndex].value;
  var ppo2_bottom_idx = ppo2_bottom.options[ppo2_bottom.selectedIndex].value;
  var ppo2_min_idx = ppo2_min.options[ppo2_min.selectedIndex].value;
  var ppn2_max_idx = ppn2_max.options[ppn2_max.selectedIndex].value;
  
  tmp_arr=[];
  a=0;
  for(c = 0 ; c < mix_travel_idx ; c++){
    dp_o2_max = (ppo2_bottom_idx/(tmp_mix_arr[a]*0.01)*10) - (10*height_to_bar())*1.0;
    dp_o2_min = (ppo2_min_idx/(tmp_mix_arr[a]*0.01)*10 - (10*height_to_bar()))*1.0;
    if(dp_o2_min < 1){dp_o2_min = 1;}
    if(dp_o2_min == Infinity){dp_o2_min = 1;}
    dp_ppn2_max = (ppn2_max_idx/((100-tmp_mix_arr[a]-tmp_mix_arr[a+1])*0.01)*10) - (10*height_to_bar())*1.0;
    //alert(depth_max);
    if (wrk_dp <= dp_o2_max){
      if (wrk_dp >= dp_o2_min){
        if (wrk_dp <= dp_ppn2_max){
          tmp_arr.push(c);
          
        }
      }
    }
    a=a+2;
  }
  return tmp_arr;
}

//Make from SINGLE fraction array text gases array
function mix_to_txt_arr(tmp_arr){
  
  a = 0;
  mix_text_arr=[];
  txt = "";
  
    if (tmp_arr[a]*1.0 > 21){
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

//Make from fraction array text gases array
function nrm_to_txt_arr(tmp_arr){
  mix_travel_idx = tmp_arr.length/2;
  a = 0;
  mix_text_arr=[];
  txt = "";
  for(c = 0 ; c < mix_travel_idx ; c++){
    
    if (tmp_arr[a]*1.0 > 21){
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
  }
  //alert(mix_text_arr)
  return mix_text_arr;
}

//Recalculate all profiles
function upd_all(){



  upd_travel_list();
  upd_deco_list();
  upd_lvl_list();

  main_plan = src_to_5_arr(build_dive());
  //Build main dive table
  dplan_sort_arr(main_plan);
  //Build PP Table
  dplan_press_arr(main_plan);
  //Build Coms Table
  dplan_cons_arr(main_plan);
  //Build Total Coms Table
  total_gass_arr(main_plan);

    del_html_elem("t_tiss_ng");
    del_html_elem("t_tiss_hl");
    del_html_elem("t_tiss_tl");

   // del_html_elem("t_tiss_btn");
    //create_html_button("t_tiss_btn" , "tn_btn_tiss" , "btn_build_tiss();");
    //changeLang();

  DrawChart("profile_chart","t_tiss_ng", "t_tiss_hl", main_plan);
  pp_profile_chart ("t_press_chart");
}
upd_all();

//Update on change only tables alerts after alerts limits changed
function upd_tbl_main () {

    main_plan = src_to_5_arr(build_dive());
    //Build main dive table
    dplan_sort_arr(main_plan);
    //Build Total Coms Table
    total_gass_arr(main_plan);
}

//Main Function for gass blending
function upd_blend(){
    openNav();
}

//Main Function for learning tools \ calculators
function upd_calc() {
    openNav();
}

//Main Function for Price Calculation
function upd_price() {
    openNav();
}

//Main Function for AnyErrors
function upd_error() {
    openNav();
}

//Return current max deptt in levels
function max_lvl_depth(tmp_arr){
  max_dp = 1.0;
  a = 0;
  for(j = 0 ; j < (tmp_arr.length/3) ; j++){
    if(tmp_arr[a+1]*1.0 > max_dp){
      max_dp = tmp_arr[a+1]*1.0;
    }
    a = a + 3;
  }
  return max_dp;
}

//Update levels list after interface changes
function upd_lvl_list(){
  del_html_elem("tn_levels");
  
  lvl_mix_watcher = [];
  lvl_dp_watcher = [];
  lvl_tm_watcher = [];
  
  att = 0;
  lvl_mix_arr =[];
  for(j = 0 ; j < (lvl_arr.length/3) ; j++){
    if(j === 0){
      main_lvl = 1;
    }
    else
    {
      main_lvl = lvl_arr[att-2];
    }
    //get propertly mix list for selected level/ Sort\arr etc and make option
    idx_arr = get_rl_fraction(get_working_mix_idx(main_lvl, travel_mix_arr));
    create_option_arr("tn_levels" , "opt_levels_mix_" + j , lvl_arr[att] , nrm_to_txt_arr(idx_arr));
    lvl_mix_watcher[att] = document.getElementById("opt_levels_mix_" + j);
    lvl_mix_watcher[att].addEventListener('change', upd_lvl_opt_arr);
    //make lvl profile actual gass list to array
    h = (lvl_arr[att]-1)*2;
    lvl_mix_arr.push(idx_arr[h]*1.0, idx_arr[h+1]*1.0);
    //^^^^^^^need fix problem with interface update
    //get min and max depth for selected mix and make option
    min_max_arr = ret_mix_range(lvl_arr[att] , get_rl_fraction(get_working_mix_idx(main_lvl, travel_mix_arr)));
    

    if(j > 0){

      //fix deco computation problem with big steeps between levels under ascent and make maximum ascent level half of previos level
      if(j < (lvl_arr.length/3)){
            //alert(lvl_arr[att-2]);
            min_max_arr[0] = parseInt(lvl_arr[att-2]/2);
      }
       //fix first level in selection
        if(j < (lvl_arr.length/3)){
            //alert(lvl_arr[att-2]);
        }
      //fix problem with bad decompression computation dive with hight O2(+80)% over 6 meters.
      if(min_max_arr[0] < 7){
        if(lvl_arr[att-2] > 6){
          min_max_arr[0] = 7;
        }
      }
    }

    create_option_lvl("tn_levels", "opt_levels_depth_" + j , min_max_arr[0], min_max_arr[1]-1, lvl_arr[att+1], 1 , 0);
    //                                                                                     ^^fix rounding problem betwin lvl conections
    lvl_dp_watcher[att] = document.getElementById("opt_levels_depth_" + j);
    lvl_dp_watcher[att].addEventListener('change', upd_lvl_opt_arr);
    
    create_option_tm("tn_levels", "opt_levels_time_" + j , 1, 60, lvl_arr[att+2], 1 , 0);
    lvl_tm_watcher[att] = document.getElementById("opt_levels_time_" + j);
    lvl_tm_watcher[att].addEventListener('change', upd_lvl_opt_arr);
    
    create_html_text("tn_levels" , "tn_levels_break" , "");  
    att=att + 3;
  }
  
  //crappy code with interface update. No problem but crappy update. Maybe fix later.
  if(isNaN(lvl_mix_arr[0]) === true){
    //anyway this default number updated after final recalculate. Yust add any e.g. 21
    lvl_mix_arr[0] = 21;
    lvl_mix_arr[1] = 0;
  }
}
upd_lvl_list();

















