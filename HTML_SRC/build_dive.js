//CCR get new property mix for selected ppo2
function CCR_mix_upd( o2fr_new , o2fr , hefr){
  var mix_fin = [];
  var n2fr_new;
  var hefr_new;

  var out_res;
  n2fr = 1 - o2fr - hefr;
  //out_res = (1 - hefr)/(1 - o2fr);
  out_res = (1 - o2fr_new)/(1 - o2fr);
  out_res = o2fr_new - (out_res*o2fr);
  n2fr_new = n2fr - (n2fr/1*out_res);
  hefr_new = hefr - (hefr/1*out_res);

  

  //Check created mix not equal any bailout mixes
  //Only for Bailout CCR plan
  var cnt = 0;
  if (opt_blt_dln == 1 && $("#tn_plan_ccr").val() == 2) {
    for (c = 0; c < $("#opt_deco").val(); c++) {
      
        //if current level mix is not equal a deco mix
        if (o2fr_new*100 == deco_mix_arr[cnt] && hefr_new*100 == deco_mix_arr[cnt + 1]) {
            //we need change current diluent mix to different a bailout mix
            //not good resolve we simply add 1% oxygen to current computed value
            //anyway this strange diluent like tmx 101/0 will be removed from any tables
            o2fr_new = o2fr_new + 0.01;
            //console.log(o2fr_new*100, hefr_new*100,deco_mix_arr[cnt], deco_mix_arr[cnt+1]);
            break;
        }
         cnt = cnt + 2;
    }
  }

  mix_fin.push (o2fr_new);
  mix_fin.push (hefr_new);
  mix_fin.push (n2fr_new);

  return mix_fin;
}

//CCR get new mix array from depth
function CCR_new_mix_from_depth( ccr_depth, ccr_ppo2_bt , o2fr , hefr){
  var o2fr_new;

  o2fr_new = ccr_ppo2_bt / (ccr_depth * 0.1 + 1);

  //fix problem with depth o2fr new fraction greatest 1
  if(o2fr_new > 1){o2fr_new = 1;}
  
  //fix problem if o2fr_new > o2 current mix fraction because we can`t remove o2, he, or n2 from existing dulient
  if(o2fr_new < o2fr){o2fr_new = o2fr;}

  return CCR_mix_upd( o2fr_new , o2fr , hefr);
}
//test_me = CCR_new_mix_from_depth( 21, 1.6, 0.2 , 0.3);

//build whole profile
function build_dive(){
  
  //Update levels array(depth and time) to actual from interface
  //It is important to do because the GUI is complicated and does not always return the actual data
  var cnt = 1;
  for(j = 0 ; j < (lvl_arr.length/3) ; j++){
    var tmp = document.getElementById("opt_levels_depth_" + j);
    var lvl_depth_tmp = tmp.options[tmp.selectedIndex].value;
    tmp = document.getElementById("opt_levels_time_" + j);
    var lvl_time_tmp = tmp.options[tmp.selectedIndex].value;
    //Depth
    lvl_arr[cnt] = lvl_depth_tmp * 1.0;
    //Time
    lvl_arr[cnt+1] = lvl_time_tmp * 1.0;
    cnt = cnt + 3;
  }
  
  a9 = 0;
  b9 = 0;
  tmp_lvl_arr = [];
  tmp_lvl_mix_arr = [];

  //var rate_asc = document.getElementById("opt_rate_asc");
  //var rate_asc_idx = rate_asc.options[rate_asc.selectedIndex].value;
  //var rate_dsc = document.getElementById("opt_rate_dsc");
  //var rate_dsc_idx = rate_dsc.options[rate_dsc.selectedIndex].value;

  //calculate ascending numbers for potentially deco stops
  for (i = 0; i < lvl_arr.length/3; i++) {

    if(i > 0){
        //console.log("all_as_fine_ASCENT");
      //if ascend you need build potentially deco levels
      if(lvl_arr[a9+1]*1.0 < lvl_arr[a9-2]*1.0){
        del_to_depth = lvl_arr[a9+1]*1.0;

        out_segment = build_dive_segment(tmp_lvl_arr , tmp_lvl_mix_arr, 0);

        //Delete from end to next lvl all levels after
        for (f = out_segment.length-1; f >= 0; f--) {
          if(out_segment[f].startDepth < del_to_depth){
            out_segment.splice(f,1);
          }
        }
        //Delete all Ascent\Descent
        for (z = 0; z < out_segment.length; z++) {
          //fix very short ascent segments one by one. Delete using second pass.
          for (f = 0; f < out_segment.length; f++) {
            if(out_segment[f].startDepth != out_segment[f].endDepth){
              out_segment.splice(f,1);

            }
          }

        }
        //Delete all levels from start
        out_segment.splice(0,tmp_lvl_arr.length/3);
        //console.log(out_segment);
        //Everything is almost ready for add extra deco stops if exist
        for (f = 0; f < out_segment.length; f++) {

          tmp_lvl_arr.push(tmp_lvl_arr.length/3+1 , out_segment[f].startDepth , out_segment[f].time);
          ret_mix = gass_from_name_arr(out_segment[f].gasName);
          tmp_lvl_mix_arr.push(ret_mix[0],ret_mix[2]);
        }
        //Add next level after adding potentially deco stops lvl`s
        tmp_lvl_arr.push(tmp_lvl_arr.length/3+1 , lvl_arr[a9+1]*1.0 , lvl_arr[a9+2]*1.0);
        tmp_lvl_mix_arr.push(lvl_mix_arr[b9]*1.0 , lvl_mix_arr[b9+1]*1.0);
      }
      else
      {
          tmp_lvl_arr.push(tmp_lvl_arr.length/3+1 , lvl_arr[a9+1]*1.0 , lvl_arr[a9+2]*1.0);
        tmp_lvl_mix_arr.push(lvl_mix_arr[b9]*1.0 , lvl_mix_arr[b9+1]*1.0);
      }
    }
    else
    {
      tmp_lvl_arr.push(lvl_arr[a9]*1.0 , lvl_arr[a9+1]*1.0 , lvl_arr[a9+2]*1.0);
      tmp_lvl_mix_arr.push(lvl_mix_arr[b9]*1.0 , lvl_mix_arr[b9+1]*1.0);

    }
    a9 = a9 + 3;
    b9 = b9 + 2;
  }

  //if last last segment above 7 meters. This code does`t work correct with no deco segments and
  //zacominchen:))
  if(tmp_lvl_arr[tmp_lvl_arr.length -2]*1.0 < 7){

   output = build_dive_segment(tmp_lvl_arr , tmp_lvl_mix_arr, 0);

  }
  else
  {
    //compute regular dive under 6 meters last lvl
    output = build_dive_segment(tmp_lvl_arr , tmp_lvl_mix_arr, 0);
    output = (GasBreakInsert(LastStopUpd(output)));
  }

  //modify exit to surface speed from interface parameters
  var rate_asc_surf = document.getElementById("opt_rate_asc_surf");
  var rate_asc_surf_idx = rate_asc_surf.options[rate_asc_surf.selectedIndex].value;

  tmp_time = ((output[output.length-1].startDepth)*1.0/rate_asc_surf_idx)*1.0;
  output.push(
    {
      endDepth: 0,
      startDepth: output[output.length-1].startDepth,
      time: tmp_time,
      gasName: output[output.length-1].gasName
    }
  );

  return output;
}
//main function to build any dive segment
function build_dive_segment(levels_segment_arr , levels_mix_segment_arr){

  var rate_asc = document.getElementById("opt_rate_asc");
  var rate_asc_idx = rate_asc.options[rate_asc.selectedIndex].value;

  var rate_asc_surf = document.getElementById("opt_rate_asc_surf");
  var rate_asc_surf_idx = rate_asc_surf.options[rate_asc_surf.selectedIndex].value;

  var rate_dsc = document.getElementById("opt_rate_dsc");
  var rate_dsc_idx = rate_dsc.options[rate_dsc.selectedIndex].value;
  var output = [];

    if(max_lvl_depth(levels_segment_arr) < 7){
      //Not Deco Dive Segment

        if($( "#tn_plan_ccr" ).val()*1.0 == 2){
            //CCR dive and we need hide consumption
            element_id_hide("t_total_cons");
            element_id_hide("7-header");
            element_id_hide("7-content");
            //console.log("true");
        }

      tmp_arr = [];
      tmp_end_depth = levels_segment_arr[1];
      tmp_time = (levels_segment_arr[0+1]*1.0/rate_dsc_idx)*1.0;
      tmp_mx_arr =[];
      tmp_mx_arr.push(levels_mix_segment_arr[0],levels_mix_segment_arr[1]);
      tmp_gass_name = mix_to_txt_arr(tmp_mx_arr);

      //add first descent lvl
      tmp_arr.push(
        {
          endDepth: tmp_end_depth,
          startDepth: 0,
          time: tmp_time,
          gasName: tmp_gass_name
        }
      );
      //loop for all added levels
      a3 = 0;
      b3 = 0;
      for (i = 0; i < levels_segment_arr.length/3; i++) {
        //for every flat levels
        tmp_end_depth = levels_segment_arr[a3+1];
        tmp_start_depth = levels_segment_arr[a3+1];
        tmp_time = levels_segment_arr[a3+2];
        tmp_mx_arr =[];
        tmp_mx_arr.push(levels_mix_segment_arr[b3],levels_mix_segment_arr[b3+1]);
        tmp_gass_name = mix_to_txt_arr(tmp_mx_arr);

        tmp_arr.push(
          {
            endDepth: tmp_end_depth,
            startDepth: tmp_start_depth,
            time: tmp_time,
            gasName: tmp_gass_name
          }
        );
          //add lvl change.if it is not last change
          if(levels_segment_arr[a3+4] !== undefined){
            tmp_end_depth = levels_segment_arr[a3+4]*1.0;
            tmp_start_depth = levels_segment_arr[a3+1]*1.0;

            //compute travel time from one to next lvl
            tt_time = Math.abs(tmp_start_depth - tmp_end_depth);
            if(tmp_start_depth - tmp_end_depth < 0){
              tmp_time = (tt_time*1.0/rate_dsc_idx);
            }
            else
            {
              tmp_time = (tt_time*1.0/rate_asc_idx);
            }
            //return char mix name
            tmp_mx_arr =[];
            tmp_mx_arr.push(levels_mix_segment_arr[b3],levels_mix_segment_arr[b3+1]);
            tmp_gass_name = mix_to_txt_arr(tmp_mx_arr);

            tmp_arr.push(
              {
                endDepth: tmp_end_depth,
                startDepth: tmp_start_depth,
                time: tmp_time,
                gasName: tmp_gass_name.toString()
              }
            );
          }

        b3 = b3 + 2;
        a3 = a3 + 3;
      }

      //add last lvl to surface
      tmp_time = ((tmp_arr[tmp_arr.length-1].endDepth)*1.0/rate_asc_surf_idx)*1.0;
      tmp_arr.push(
        {
          endDepth: 0,
          startDepth: tmp_arr[tmp_arr.length-1].endDepth,
          time: tmp_time,
          gasName: tmp_arr[tmp_arr.length-1].gasName
        }
      );
      output = tmp_arr;
    }
    else

    //Deco Dive_Segment! 
    {
      //reset compartment info array every graph rebuild
      comp_tiss_arr =[];

    //reset previos plan
    var plan = [];
    var mdl = document.getElementById("tn_mdl");
    var mdl_idx = mdl.options[mdl.selectedIndex].value;
    var buhlmann = dive.deco.buhlmann();
    vpm = dive.deco.vpm();
    //Select algorithm
    if(mdl_idx == 1){
      plan = new buhlmann.plan(buhlmann.ZH16ATissues);
    }
    if(mdl_idx == 2){
      plan = new buhlmann.plan(buhlmann.ZH16BTissues);
    }
    if(mdl_idx == 3){
      plan = new buhlmann.plan(buhlmann.ZH16CTissues);
    }
    if(mdl_idx == 4){
      plan = new vpm.plan(1,true);
    }

    //Add Bottom/travel gases
    if($( "#tn_plan_ccr" ).val() == 1){
      //OC Dive
      //and we need hide consumption first
      //element_id_show("t_total_cons");
      //element_id_show("7-header");
      //element_id_show("7-content");

      aaa = 0;
    for(c = 0 ; c < levels_mix_segment_arr.length/2 ; c++){
      ff = [levels_mix_segment_arr[aaa] , levels_mix_segment_arr[aaa+1]];

      plan.addBottomGas(mix_to_txt_arr(ff), levels_mix_segment_arr[aaa]*0.01, levels_mix_segment_arr[aaa+1]*0.01);

      //add bottom gass as deco gass !!!_need_deep_test_!!!
      //plan.addDecoGas(mix_to_txt_arr(ff), levels_mix_segment_arr[aaa]*0.01, levels_mix_segment_arr[aaa+1]*0.01);

      aaa = aaa + 2;
    }
    }
    else
    { //eCCR Dive Bailout and Diluent Dive
      //mixes for descent
      for(dp_lvl = 1; dp_lvl < (levels_segment_arr[1]*1.0)+1; dp_lvl++){
        ccr_descent_mix = CCR_new_mix_from_depth( dp_lvl , ($( "#opt_setpoint_start" ).val()*1.0) , levels_mix_segment_arr[0]*0.01 , levels_mix_segment_arr[1]*0.01);
        
        ccr_descent_mix_tmp = [];
        ccr_descent_mix_tmp[0] = ccr_descent_mix[0];
        ccr_descent_mix_tmp[1] = ccr_descent_mix[1];
        
        ccr_descent_mix[0] = Math.ceil(ccr_descent_mix[0]*100);
        ccr_descent_mix[1] = Math.ceil(ccr_descent_mix[1]*100);
        
        plan.addBottomGas(mix_to_txt_arr(ccr_descent_mix), ccr_descent_mix_tmp[0], ccr_descent_mix_tmp[1]);
      }
      //mix for bottom
      ccr_descent_mix = CCR_new_mix_from_depth( (levels_segment_arr[1]*1.0) , ($( "#opt_setpoint_bottom" ).val()*1.0) , levels_mix_segment_arr[0]*0.01 , levels_mix_segment_arr[1]*0.01);
      
      ccr_descent_mix_tmp = [];
      ccr_descent_mix_tmp[0] = ccr_descent_mix[0];
      ccr_descent_mix_tmp[1] = ccr_descent_mix[1];

      ccr_descent_mix[0] = Math.ceil(ccr_descent_mix[0]*100);
      ccr_descent_mix[1] = Math.ceil(ccr_descent_mix[1]*100);
      
      plan.addBottomGas(mix_to_txt_arr(ccr_descent_mix), ccr_descent_mix_tmp[0], ccr_descent_mix_tmp[1]);
    }
    

    //Add deco gases
    var mix_deco = document.getElementById("opt_deco");
    var mix_deco_idx = mix_deco.options[mix_deco.selectedIndex].value;
    aaa = 0;

    mix_mod_arr = [];
    var counter = 0;

    for(c = 0 ; c < mix_deco_idx ; c++){
      tmp3 = [deco_mix_arr[aaa],deco_mix_arr[aaa+1]];

      //This CCR Bailout Dive or OC Dive and deco gases is enable
      if(opt_blt_dln == 1){
        if(deco_mix_depth_arr[counter] != 0){
          //Manual MOD set for current deco mix
          var curMixMOD = deco_mix_depth_arr[counter];
        }
        else
        {
          ////Auto MOD set for current deco mix
          var curMixMOD = GetDecoMODinMeters(deco_mix_arr[aaa], deco_mix_arr[aaa+1]);
        }

        //Do a curMixMOD multiple of three
        curMixMOD = (3 * ((curMixMOD / 3).toFixed(0)));
        if($( "#opt_lst_stop" ).val() == 6){
          //6 meters last stop. Check current mix MOD and if less that 6 meters does`t add to the deco gas list
            if(curMixMOD >= 6){
                plan.addDecoGas(mix_to_txt_arr(tmp3), deco_mix_arr[aaa]*0.01, deco_mix_arr[aaa+1]*0.01);
                mix_mod_arr.push(
                  {
                    mix : mix_to_txt_arr(tmp3),
                    mod : deco_mix_depth_arr[counter]
                  });
              }
          }
          else
          {
              //3 meters last stop. Do nothing. Simply add deco gases to the list
              plan.addDecoGas(mix_to_txt_arr(tmp3), deco_mix_arr[aaa]*0.01, deco_mix_arr[aaa+1]*0.01);
              mix_mod_arr.push(
                {
                    mix : mix_to_txt_arr(tmp3),
                    mod : deco_mix_depth_arr[counter]
                });
            }
      }
      //as Bottom/Travel gases, for lvl compatibility
      plan.addBottomGas(mix_to_txt_arr(tmp3), deco_mix_arr[aaa]*0.01, deco_mix_arr[aaa+1]*0.01);
      counter = counter + 1;
      aaa = aaa + 2;
    }

    //eCCR Diluent deco mix add
    if($( "#tn_plan_ccr" ).val() == 2 && opt_blt_dln == 2){
      //it is CCR Diluent Dive and no Bailout(Deco gases added) dive
      //but we need add deco gases combined from Diluent
      //var ccr_deco_mix;
      for(dp_lvl = 1 ; dp_lvl < (levels_segment_arr[1]*1.0)+1; dp_lvl=dp_lvl+0.25){  
        ccr_deco_mix = CCR_new_mix_from_depth( dp_lvl , ($("#opt_setpoint_deco" ).val()*1.0) , levels_mix_segment_arr[0]*0.01 , levels_mix_segment_arr[1]*0.01);
        
        ccr_deco_mix_tmp = [];
        ccr_deco_mix_tmp[0] = ccr_deco_mix[0];
        ccr_deco_mix_tmp[1] = ccr_deco_mix[1];

        ccr_deco_mix[0] = Math.ceil(ccr_deco_mix[0]*100);
        ccr_deco_mix[1] = Math.ceil(ccr_deco_mix[1]*100);
          
        plan.addDecoGas(mix_to_txt_arr(ccr_deco_mix), ccr_deco_mix_tmp[0] , ccr_deco_mix_tmp[1]);
      }
    }

    //eCCR Bailout deco mix add
    if($( "#tn_plan_ccr" ).val() == 2 && opt_blt_dln == 1){
      //get o2 percentage for calculate deepest bailout mix
      var count = 0;
      var tmp_o2_fr_max = 100;
      for(a = 0 ; a < ($("#opt_deco").val()*1.0); a++){

        if(deco_mix_arr[count] < tmp_o2_fr_max){tmp_o2_fr_max = deco_mix_arr[count]};
        count = count+2;
      }
      
      //Add deco gases only from below bailout gases
      for(dp_lvl = 1 ; dp_lvl < (levels_segment_arr[1]*1.0)+1; dp_lvl=dp_lvl+0.25){
        ccr_deco_mix = CCR_new_mix_from_depth( dp_lvl , ($("#opt_setpoint_deco").val()*1.0) , levels_mix_segment_arr[0]*0.01 , levels_mix_segment_arr[1]*0.01);
      
        ccr_deco_mix_tmp = [];
        ccr_deco_mix_tmp[0] = ccr_deco_mix[0];
        ccr_deco_mix_tmp[1] = ccr_deco_mix[1];
      
        ccr_deco_mix[0] = Math.ceil(ccr_deco_mix[0]*100);
        ccr_deco_mix[1] = Math.ceil(ccr_deco_mix[1]*100);
        
        if(ccr_deco_mix[0] <= tmp_o2_fr_max){
          plan.addDecoGas(mix_to_txt_arr(ccr_deco_mix), ccr_deco_mix_tmp[0] , ccr_deco_mix_tmp[1]);
        }
      }
    }

    //Add lvl changes
    //Get current ascending deco speed
    if($( "#tn_plan_ccr" ).val() == 1){
      //OC Dive
      aaa = 0;
      fff = 0;
      for(c = 0 ; c < levels_mix_segment_arr.length/2 ; c++){
        ff = [levels_mix_segment_arr[aaa] , levels_mix_segment_arr[aaa+1]];
        if(c === 0){
          tmp_time = levels_segment_arr[fff+1]*1.0/rate_dsc_idx;
          plan.addDepthChange(0, levels_segment_arr[fff+1]*1.0, mix_to_txt_arr(ff), tmp_time*1.0);
          plan.addDepthChange(levels_segment_arr[fff+1]*1.0, levels_segment_arr[fff+1]*1.0, mix_to_txt_arr(ff), levels_segment_arr[fff+2]*1.0);
        }
        else
        {
          if(((levels_segment_arr[fff+1-3]*1.0) - (levels_segment_arr[fff+1]*1.0))>= 0){
            tmp_time = (Math.abs((levels_segment_arr[fff+1-3]*1.0) - (levels_segment_arr[fff+1]*1.0)))/rate_asc_idx;
          }
          else
          {
            tmp_time = (Math.abs((levels_segment_arr[fff+1-3]*1.0) - (levels_segment_arr[fff+1]*1.0)))/rate_dsc_idx;
          }
          //fix lib crush because time can`t == 0;
          if(tmp_time === 0){
            tmp_time = 0.001;
          }
          plan.addDepthChange(levels_segment_arr[fff+1-3]*1.0, levels_segment_arr[fff+1]*1.0, mix_to_txt_arr(ff), tmp_time);
          plan.addDepthChange(levels_segment_arr[fff+1]*1.0, levels_segment_arr[fff+1]*1.0, mix_to_txt_arr(ff), levels_segment_arr[fff+2]*1.0);
        }
        aaa = aaa + 2;
        fff = fff + 3;
      }
    }
    else{
      //eCCR Dive
      //add descent segment
      var ccr_start_mix;
      for(dp_lvl = 1 ; dp_lvl < (levels_segment_arr[1]*1.0)+1; dp_lvl++){
        ccr_start_mix = CCR_new_mix_from_depth( dp_lvl , ($( "#opt_setpoint_start" ).val()*1.0) , levels_mix_segment_arr[0]*0.01 , levels_mix_segment_arr[1]*0.01);
      
        ccr_start_mix[0] = Math.ceil(ccr_start_mix[0]*100);
        ccr_start_mix[1] = Math.ceil(ccr_start_mix[1]*100);
        ccr_start_mix[2] = Math.ceil(ccr_start_mix[2]*100);

        tmp_time = levels_segment_arr[1]*1.0/rate_dsc_idx;
        tmp_time = tmp_time / (levels_segment_arr[1]*1.0);
        
        
        plan.addDepthChange(dp_lvl-1, dp_lvl, mix_to_txt_arr(ccr_start_mix), tmp_time*1.0);
      }
      //bottom segment
      ccr_start_mix = CCR_new_mix_from_depth( (levels_segment_arr[1]*1.0) , ($( "#opt_setpoint_bottom" ).val()*1.0) , levels_mix_segment_arr[0]*0.01 , levels_mix_segment_arr[1]*0.01);
      ccr_start_mix[0] = Math.ceil(ccr_start_mix[0]*100);
      ccr_start_mix[1] = Math.ceil(ccr_start_mix[1]*100);
      ccr_start_mix[2] = Math.ceil(ccr_start_mix[2]*100);

      plan.addDepthChange(levels_segment_arr[1]*1.0, levels_segment_arr[1]*1.0, mix_to_txt_arr(ccr_start_mix), levels_segment_arr[2]*1.0);
        
    }

    var ppo2_deco = document.getElementById("opt_ppo2_deco");
    var ppo2_deco_idx = ppo2_deco.options[ppo2_deco.selectedIndex].value;

    //fix computation GF error with zero
    if(gf_arr[0] === 0){
      gf_arr[0] = 1;
    }
    //compute END for specific lib param
    var ppn2_max_deco = document.getElementById("opt_ppn2_max_deco");
    var ppn2_max_deco_idx = ppn2_max_deco.options[ppn2_max_deco.selectedIndex].value;
        
    //OLD!
    //var mxis_end = (((parseFloat(ppn2_max_deco_idx))/0.79)-1)*10;
    //NEW!
    var WaterDensTempCompensation = (1 / ((water_density_temperature_correction() * water_density() * 0.001 * (1))));
    var mxis_end = (((parseFloat(ppn2_max_deco_idx))/0.79)-1)*10 * height_to_bar() * WaterDensTempCompensation;

    //All is ready for plan computation    
    if($( "#tn_plan_ccr").val() == 1){
      //OC Dive
      output = plan.calculateDecompression(false, gf_arr[0]*0.01, gf_arr[1]*0.01, ppo2_deco_idx*1.0, mxis_end);
    }
    else
    {
      //eCCR Diluent Dive 
      if(opt_blt_dln == 2){
        //warning! crappy code with yoomba yumba -0.1 because we have strange defence between OC and eCCR mixes precessions. Need deep test and fix!
        output = plan.calculateDecompression(false, gf_arr[0]*0.01, gf_arr[1]*0.01, $("#opt_setpoint_deco").val(), mxis_end);
      }
      //eCCR Bailout Dive
      if(opt_blt_dln == 1){
        output = plan.calculateDecompression(false, gf_arr[0]*0.01, gf_arr[1]*0.01, $("#opt_setpoint_deco").val(), mxis_end);
      }
    }
    

    }
    //fix ascent error on very short dives
    for(c = 0 ; c < output.length ; c++){
      if(output[c].endDepth < 0){
        output[c].endDepth = 3;
        output.push(
          {
            endDepth: 0,
            startDepth: output[c].endDepth,
            time: output[c].time,
            gasName: output[c].gasName
          }
        );
      }
    }

    return output;
  }

//from idx filtered array make only fraction o2\he from real travel gases array
function get_rl_fraction(idx_arr){
    var mix_travel_idx = mix_travel.options[mix_travel.selectedIndex].value;
  var tmp_arr=[];
  var a = 0;
  var b = 0;
  for(c = 0 ; c < mix_travel_idx ; c++){
    if(c == idx_arr[a]){
      tmp_arr.push(travel_mix_arr[b],travel_mix_arr[b+1]);
      a = a + 1;
    }
    b = b + 2;
  }
  return tmp_arr;
}
//get from fraction proper MOD idx
function ret_mix_mod_idx(o2_fr , he_fr){
    var idx_me = 0;
    for(var cnt = 0 ; cnt < travel_mix_arr.length - 1 ; cnt++){

        if(travel_mix_arr[cnt] == o2_fr && travel_mix_arr[cnt+1] == he_fr ){
            break;
        }
        idx_me = idx_me + 1;
    }
    return cnt/2;
}

//return depth range, for selected by idx, mix array. Only two min max number for OC
function ret_mix_range_oc(idx , tmp_mix_arr){

    var ppo2_bottom = document.getElementById("opt_ppo2_bottom");
    var ppo2_min = document.getElementById("opt_ppo2_min");
    var ppn2_max = document.getElementById("opt_ppn2_max");

    var ppo2_bottom_idx = ppo2_bottom.options[ppo2_bottom.selectedIndex].value;
    var ppo2_min_idx = ppo2_min.options[ppo2_min.selectedIndex].value;
    var ppn2_max_idx = ppn2_max.options[ppn2_max.selectedIndex].value;
    var tmp_arr = [];
    var a = 0;
    for(c = 0 ; c < tmp_mix_arr.length ; c++){



        if(c + 1 == idx){
            //get current mod for selected mix
            var depth_cur_mod = travel_mix_depth_arr[ret_mix_mod_idx(tmp_mix_arr[a] , tmp_mix_arr[a+1])] * 1.0;

            //check current Mix MOD status
            if(depth_cur_mod == 0){
                //Auto
                //calculation of correction with altitude above sea level
                //console.log(1 / ((water_density_temperature_correction() * water_density() * 0.001 * (1)) - ((1 - height_to_bar()))));
                //calculation of correction without altitude above sea level
                var WaterDensTempCompensation = (1 / ((water_density_temperature_correction() * water_density() * 0.001 * (1))));

                dp_o2_max = (WaterDensTempCompensation * (ppo2_bottom_idx/(tmp_mix_arr[a]*0.01)*10)) - (10 * height_to_bar()) + 1;//+1m fixing rounding to standard
                dp_o2_min = (WaterDensTempCompensation * (ppo2_min_idx/(tmp_mix_arr[a]*0.01)*10)) - (10*height_to_bar());
                if(dp_o2_min < 1){dp_o2_min = 1;}
                if(dp_o2_min == Infinity){dp_o2_min = 1;}
                dp_ppn2_max = (WaterDensTempCompensation * (ppn2_max_idx/((100-tmp_mix_arr[a]-tmp_mix_arr[a+1])*0.01)*10)) - (10*height_to_bar()) + 1;//+1m fixing rounding to standard
            }
            else{
                //Manual
                dp_o2_max = depth_cur_mod + 1;
                dp_o2_min = 1.0;//Always from one meter depth
                dp_ppn2_max = depth_cur_mod + 1;

            }

            tmp_arr.push(dp_o2_min);
            if (dp_ppn2_max >= dp_o2_max){
                tmp_arr.push(dp_o2_max);
            }
            else
            {
                tmp_arr.push(dp_ppn2_max);
            }
            break;
        }
        a = a + 2;
    }

    return tmp_arr;
}

//return depth range, for selected by idx, mix array. Only two min max number for CCR
function ret_mix_range_ccr(idx , tmp_mix_arr){

    //get from setpoint bottom option
    var ppo2_bottom = document.getElementById("opt_setpoint_bottom");

    //ppn max get from bailout settings
    var ppn2_max = document.getElementById("opt_ppn2_max");

    var ppo2_bottom_idx = ppo2_bottom.options[ppo2_bottom.selectedIndex].value;
    var ppn2_max_idx = ppn2_max.options[ppn2_max.selectedIndex].value;
    var tmp_arr = [];
    var a = 0;
    for(c = 0 ; c < tmp_mix_arr.length ; c++){
        if(c + 1 == idx){
            //get current mod for selected mix
            var depth_cur_mod = travel_mix_depth_arr[ret_mix_mod_idx(tmp_mix_arr[a] , tmp_mix_arr[a+1])] * 1.0;

            //check current Mix MOD status
            if(depth_cur_mod == 0) {
                //Auto
                //calculation of correction with altitude above sea level
                //console.log(1 / ((water_density_temperature_correction() * water_density() * 0.001 * (1)) - ((1 - height_to_bar()))));
                //calculation of correction without altitude above sea level
                var WaterDensTempCompensation = (1 / ((water_density_temperature_correction() * water_density() * 0.001 * (1))));

                dp_o2_max = (WaterDensTempCompensation * (ppo2_bottom_idx / (tmp_mix_arr[a] * 0.01) * 10)) - (10 * height_to_bar()) + 1;//+1m fixing rounding to standard
                dp_o2_min = 1;
                dp_ppn2_max = (WaterDensTempCompensation * (ppn2_max_idx / ((100 - tmp_mix_arr[a] - tmp_mix_arr[a + 1]) * 0.01) * 10)) - (10 * height_to_bar()) + 1;//+1m fixing rounding to standard

                //fix error if mix n2 > 95%
                if (dp_ppn2_max < 1) {
                    dp_ppn2_max = 6;
                }
            }
            else{
                //Manual
                dp_o2_max = depth_cur_mod + 1;
                dp_o2_min = 1.0;//Always from one meter depth
                dp_ppn2_max = depth_cur_mod + 1;
            }

            tmp_arr.push(dp_o2_min);

            if (dp_ppn2_max >= dp_o2_max){
                tmp_arr.push(dp_o2_max);
            }
            else
            {
                tmp_arr.push(dp_ppn2_max);
            }
            break;
        }
        a = a + 2;
    }
    //tmp_arr[0] = 1;
    return tmp_arr;
}


function upd_lvl_opt_arr(){
  //check if level time changed then write to lvl_arr and update interface
  a = 2;
  for(j = 0 ; j < (lvl_arr.length/3) ; j++){
   tmp = document.getElementById("opt_levels_time_" + j);
   lvl_tm_c = parseInt(tmp.options[tmp.selectedIndex].value);

   //if time === 0 then make some time on levels for correct computation. one second
   if(lvl_tm_c  === 0){
       lvl_tm_c = 0.01;
   }
    if(lvl_arr[a]!= lvl_tm_c){
      lvl_arr[a] = lvl_tm_c;
      break;
    }
   a=a+3;
  }

  //for depth
  a = 1;
  for(j = 0 ; j < (lvl_arr.length/3) ; j++){
   //code
   tmp = document.getElementById("opt_levels_depth_" + j);
   lvl_tm_c = tmp.options[tmp.selectedIndex].value;
    if(lvl_arr[a]!= lvl_tm_c){
      lvl_arr[a]= lvl_tm_c * 1.0;
      lvl_arr.length = a+2;
      break;
    }
   a=a+3;
  }

  //and for mix
  a = 0;
  for(j = 0 ; j < (lvl_arr.length/3) ; j++){
   tmp = document.getElementById("opt_levels_mix_" + j);
   lvl_mx_c = tmp.options[tmp.selectedIndex].value;
    b = Math.floor(lvl_mx_c)+1.0;
    if(lvl_arr[a]!= b){
      lvl_arr[a]=b;
      lvl_arr.length = a+3;
      break;
    }
   a=a+3;
  }
  //upd_lvl_list();
  upd_all();
}





  //Dec time equal to real time format xx:xx
  function time_dec_to_time(tmp_time){
    tmp_time_hi = Math.floor(tmp_time);
    tmp_time_lo = (((tmp_time*100) - (tmp_time_hi*100))*0.6)*0.01;
    //fix javascript bug
    if(tmp_time_lo >= 0.59){tmp_time_lo = 1.0}
    tmp_time = (tmp_time_hi+tmp_time_lo).toFixed(2);
    tmp_time = tmp_time.replace( "." , ":");
    return tmp_time;
  }

  //Recombine output plan to five column table format
function src_to_5_arr(tmp_arr, flag_full){

  tmp_arr = zero_lvl_arr(tmp_arr);
  if(flag_full == 1){
      dec_table = to_5_column_arr_full(tmp_arr);
  }
  else{
      dec_table = to_5_column_arr(tmp_arr);
  }

  //fix tissue error on very short dive plans
  tn_lst_stop1 = document.getElementById("opt_lst_stop");
  tn_lst_stop1_idx = parseFloat(tn_lst_stop1.options[tn_lst_stop1.selectedIndex].value);
  test_dp = depth_from_name_arr(dec_table[dec_table.length - 9]);


  //fix gas switch error on exit for very short dive plans
  dec_table[(dec_table.length-1)] = dec_table[(dec_table.length-6)];
  return dec_table;
}

  //remove_zero time levels from plan. It is normal because user can assign lvl same depth
  function zero_lvl_arr(tmp_arr){
    for (i = 0; i < tmp_arr.length; i++){
      if(tmp_arr[i].time <= 0.001){
        tmp_arr.splice(i,1);
      }
    }
    //if levels have same depth and gass name - glue it to one level
    for (i = 0; i < tmp_arr.length-1; i++){
      if(tmp_arr[i].startDepth == tmp_arr[i+1].startDepth){
        if(tmp_arr[i].endDepth == tmp_arr[i+1].endDepth){
          if(tmp_arr[i].gasName.toString() == tmp_arr[i+1].gasName.toString()){
            tmp_arr[i].time = (tmp_arr[i].time*1.0)+(tmp_arr[i+1].time*1.0);
            tmp_arr.splice(i+1,1);
            i=i-1;
          }
        }
      }
    }
    return tmp_arr;
  }
  //add table different info
  function to_5_column_arr(tmp_arr){
    dec_table = ["Action" , "Depth" , "Time" , "RunTime" , "Mix"];
      //check plan style selection status
      var pln_style_val = $("#tn_plan_style option:selected").val();

    runtime = 0;
    var blns = 0;
    for (var i = 0; i < tmp_arr.length; i++) {
        dp_end1 = tmp_arr[i].endDepth*1.0;
        dp_start1 = tmp_arr[i].startDepth*1.0;
        dp_c_time = tmp_arr[i].time*1.0;
        
        //make plan time rounded if classic style selected
        /*if (pln_style_val == 2){
            if(dp_start1 == dp_end1){
                //levels or stops
                if(blns >= 1){
                    dp_c_time = Math.ceil(dp_c_time + blns);
                    blns = 0;
                }
                //dp_c_time = Math.ceil(dp_c_time);
            }
             else{
                //transition balances between levels or stops
                if(blns >= 1){
                    //dp_c_time = Math.ceil(dp_c_time + blns);
                    //blns = 0;
                    //console.log("ADD!")
                }
                else{
                    blns = blns + dp_c_time;
                    dp_c_time = 0;
                }
                //console.log(blns);
            }
            //fix start and exit to surface. Every time this make round to ceil. This add two more minutes to detailed plan anyway
            if(i == 0 || i == tmp_arr.length-1){
                dp_c_time = Math.ceil(tmp_arr[i].time*1.0);
            }
            //final update
            runtime = runtime + (dp_c_time);
        }
        else{
            runtime = runtime + (dp_c_time);
        }*/

        runtime = runtime + (dp_c_time);
        dp_c_mix = tmp_arr[i].gasName;

      if(dp_end1 == dp_start1){

        if(((lvl_arr.length/3)*2) > i){
          dec_table.push("Level");
        }
        else
        {
          dec_table.push("Stop");
        }
      }
      if(dp_end1 < dp_start1){
          dec_table.push("Ascent");
      }
      if(dp_end1 > dp_start1){
        dec_table.push("Descent");
      }
      if(dp_start1 == dp_end1){
        dec_table.push(dp_start1);
      }
      else
      {
        dec_table.push(dp_start1 + "-" + dp_end1);
      }
      dec_table.push(time_dec_to_time(dp_c_time));
      
      //make plan time rounded if classic style selected
      if (pln_style_val == 2){
        dec_table.push("(" + time_dec_to_time(Math.ceil(runtime)) +")");
      }
      else{
        dec_table.push("(" + time_dec_to_time(runtime) +")");
      }
      
      dec_table.push(dp_c_mix);
    }
    return dec_table;
  }

//very crappy code. copy of slightly modified function before. add table different info but don`t use "classic" fixes view. it is keep all other (exclude main table) safety
function to_5_column_arr_full(tmp_arr){
    dec_table = ["Action" , "Depth" , "Time" , "RunTime" , "Mix"];

    //check plan style selection status
    var pln_style_val = $("#tn_plan_style option:selected").val();

    runtime = 0;
    var blns = 0;
    for (var i = 0; i < tmp_arr.length; i++) {
        dp_end1 = tmp_arr[i].endDepth*1.0;
        dp_start1 = tmp_arr[i].startDepth*1.0;
        dp_c_time = tmp_arr[i].time*1.0;


            runtime = runtime + (dp_c_time);


        dp_c_mix = tmp_arr[i].gasName;

        if(dp_end1 == dp_start1){

            if(((lvl_arr.length/3)*2) > i){
                dec_table.push("Level");
            }
            else
            {
                dec_table.push("Stop");
            }
        }
        if(dp_end1 < dp_start1){
            dec_table.push("Ascent");
        }
        if(dp_end1 > dp_start1){
            dec_table.push("Descent");
        }
        if(dp_start1 == dp_end1){
            dec_table.push(dp_start1);
        }
        else
        {
            dec_table.push(dp_start1 + "-" + dp_end1);
        }
        dec_table.push(time_dec_to_time(dp_c_time));
        dec_table.push("(" + time_dec_to_time(runtime) +")");
        dec_table.push(dp_c_mix);
    }
    return dec_table;
}

//fix ultra short stops not integer time
function ShortStop(mn_plan){

    for (var i = 0; i < mn_plan.length; i++) {
        //only for stops or flat segments
        if(mn_plan[i].startDepth == mn_plan[i].endDepth){
            //only for non integer time
            if(mn_plan[i].time != Math.floor(mn_plan[i].time)){

                var rep = {
                    gasName : mn_plan[i].gasName,
                    startDepth : mn_plan[i].startDepth,
                    endDepth : mn_plan[i].endDepth,
                    //fix not integer time if present
                    time : Math.floor(mn_plan[i].time)
                    //time : Math.ceil(mn_plan[i].time)
                };
                mn_plan.splice(i,1,rep);
            }
        }
    }

    return mn_plan;
}
//Recombine plan if last stop changed from 3 meters to 6 meters
//post changes
function LastStopUpd (plan){
    for (var i = 0; i < plan.length; i++) {

    }


    if($( "#opt_lst_stop" ).val() == 6){

        //plan is 6 meters las stop. We need some magic
            var add_time = plan[plan.length - 2].time + plan[plan.length - 4].time;
            var new_end_time = 2.0 * plan[plan.length - 1].time;
            plan[plan.length - 4].time = add_time;
            plan.splice(plan.length - 3 , 3);
            plan.push({
                gasName : plan[plan.length - 1].gasName,
                startDepth : plan[plan.length - 1].endDepth,
                endDepth : 0,
                time : new_end_time
            });
    }
    else{
        //last stop is 3 meters and nothing will be changed
    }
    return plan;
}
//Insert gas break in to the plan
function GasBreakInsert(main_arr) {

    var gb_DepthStart =  $("#opt_airbr_depth").val() * 1.0;
    var gb_MixMore =  $("#opt_airbr_o2").val() * 1.0;
    var gb_Mix =  $("#opt_airbr_mix option:selected").text();
    var gb_MinAfter =  $("#opt_airbr_time_after").val() * 1.0;
    var gb_Break =  $("#opt_airbr_time").val() * 1.0;
    var gb_Enable =  $("#opt_airbr_time_reset").val() * 1.0;

    var TotalTime = 0;

    var LvlMaxDepth = PlanMaxDepth(lvl_arr);
    if(gb_DepthStart > LvlMaxDepth){
        gb_DepthStart = LvlMaxDepth;
    }
    //Gas breaks enabled and it is NO CCR plan
    if(gb_Enable == 2 && $( "#tn_plan_ccr" ).val()*1.0 != 2){
        for(var j = 0 ; j < main_arr.length ; j++){
            var dp_start = main_arr[j].startDepth * 1.0;
            var dp_end = main_arr[j].endDepth * 1.0;

            //flat level
            if(dp_start === dp_end){

                var cr_gas_level_o2fr = (gass_from_name_arr(main_arr[j].gasName))[0];

                //level depth less or equal than break start depth
                //if(gb_DepthStart >= dp_start || cr_gas_level_o2fr >= gb_MixMore){
                if(gb_DepthStart >= dp_start){
                    //current level less than maximum plan depth
                    if(dp_start < LvlMaxDepth){
                        if(gb_LevelReset = 1){
                            //reset time on current level
                            TotalTime = 0;
                            if(main_arr[j].time >= (gb_MinAfter + gb_Break)){

                                var gb_end_time = main_arr[j].time - ((gb_MinAfter + gb_Break) * Math.floor(main_arr[j].time /(gb_MinAfter + gb_Break))) ;

                                var gb_total_time = main_arr[j].time;
                                var gb_mix_total = main_arr[j].gasName;
                                var gb_startDepth_total = main_arr[j].startDepth;
                                var gb_endDepth_total = main_arr[j].endDepth;

                                main_arr.splice(j , 1);

                                for(var s = 0 ; s < (Math.floor(gb_total_time / (gb_MinAfter + gb_Break))) ; s++){
                                    //console.log(s);

                                    main_arr.splice(j , 0, {
                                        gasName : gb_Mix,
                                        startDepth : gb_startDepth_total,
                                        endDepth : gb_endDepth_total,
                                        time : gb_Break
                                    });
                                    main_arr.splice(j , 0, {
                                        gasName : gb_mix_total,
                                        startDepth : gb_startDepth_total,
                                        endDepth : gb_endDepth_total,
                                        time : gb_MinAfter
                                    });

                                }
                                main_arr.splice(j + (s * 2) , 0, {
                                    //gasName : gb_mix_total,
                                    gasName : gb_mix_total,
                                    startDepth : gb_startDepth_total,
                                    endDepth : gb_endDepth_total,
                                    time : gb_end_time
                                });
                            }

                        }
                        else{
                            //or add to counter
                            TotalTime = TotalTime + main_arr[j].time;
                        }
                    }
                }
            }
        }
    }
    return main_arr;
}

//ADD extra stops for gas changing
function ExtraStops(output) {
    var tn_cng_time = document.getElementById("opt_cng_time");
    var tn_cng_time_idx = parseInt(tn_cng_time.options[tn_cng_time.selectedIndex].value);

//if changing mix time === 0 we need add some time for property dive plan computation.
    if(tn_cng_time_idx === 0)
    {
        //!!!need deep test! changed from 0.0 to 0.00001 after v9.11
        //it is important. if 0.0 then crash app. need more testing and resolve this strange work
        tn_cng_time_idx = 0.00001;
    }

    for(c = 1 ; c < output.length ; c++){
        if(output[c].gasName != output[c-1].gasName){
            output.splice(c,0,
                {
                    endDepth: output[c].startDepth,
                    startDepth: output[c].startDepth,
                    time: tn_cng_time_idx,
                    gasName: output[c].gasName
                }
            );
        }
    }
    return output;
}

//return max depth in meters from lvl list array
function PlanMaxDepth(plan_array){
    var a = 0;
    var max_dp = 1.0;
    for(j = 0 ; j < (plan_array.length/3) ; j++){
        if(plan_array[a+1]*1.0 > max_dp){
            max_dp = plan_array[a+1]*1.0;
        }
        a = a + 3;
    }
    return max_dp;
}