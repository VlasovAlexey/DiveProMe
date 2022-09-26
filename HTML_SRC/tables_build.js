//eCCR compact plan before use build main deco table
function ccr_compact_plan(tmp_arr) {
    //is CCR plan and this is a Deco plan deepest 6 meters
    if ($("#tn_plan_ccr").val() == 2 && $("#opt_levels_depth_0").val() > 6 ) {
      //is eCCR plan
      var ccr_fixed_plan = [];
      var ccr_time_sh = 0;
      var ccr_start_dp;
      var ccr_glue = 0;
      //var ccr_last_add_cnt = 0;
      for (j = 0; j < tmp_arr.length; j++) {
          //remove short steps
          if (tmp_arr[j].time < 0.001) {
              tmp_arr.splice(j, 1);
          }
      }
      for (j = 0; j < tmp_arr.length - 1; j++) {
          //ccr_last_add_cnt = ccr_last_add_cnt + 1;
          //collapse different mixes for "descent"
          if (tmp_arr[j].startDepth != tmp_arr[j].endDepth) {

              if (ccr_glue == 0) {
                  //starting collapse time for descent nd adding every time if not flat level
                  ccr_start_dp = tmp_arr[j].startDepth;
                  ccr_glue = 1;
              }

              if (tmp_arr[j + 1].startDepth != tmp_arr[j + 1].endDepth) {
                  //next level same to "descent"
                  ccr_time_sh = ccr_time_sh + tmp_arr[j].time;
              }

              if (tmp_arr[j + 1].startDepth == tmp_arr[j + 1].endDepth && ccr_glue == 1) {
                  //next is flat!
                  ccr_time_sh = ccr_time_sh + tmp_arr[j].time;
                  ccr_fixed_plan.push({
                      gasName: tmp_arr[j - 1].gasName,
                      startDepth: ccr_start_dp,
                      endDepth: tmp_arr[j].endDepth,
                      time: ccr_time_sh
                  });
                  // and we reset counter and time
                  ccr_time_sh = 0;
                  ccr_glue = 0;
              }
          } else {
              //flat depth simply added to 
              ccr_fixed_plan.push(tmp_arr[j]);
          }

      }
      //add last not added element of array
      ccr_fixed_plan.push(tmp_arr[tmp_arr.length - 1]);

      //replace diluent levels mixes to one proper diluent mix

      var dil_name = $("#opt_levels_mix_0 option:selected").text();

      for (j = 0; j < ccr_fixed_plan.length; j++) {
          var cnt = 0;
          var current_dil = gass_from_name_arr(ccr_fixed_plan[j].gasName);
          var flag_to_del = 1;

          //Only for Bailout plan
          if (opt_blt_dln == 1) {
              for (c = 0; c < $("#opt_deco").val(); c++) {
                  //if current level mix is not equal a deco mix
                  if (current_dil[0] == deco_mix_arr[cnt] && current_dil[2] == deco_mix_arr[cnt + 1]) {
                      flag_to_del = 0;
                  }
                  cnt = cnt + 2;
              }
          }

          if (flag_to_del == 1) {
              //replace current mix with proper diluent mix
              ccr_fixed_plan.splice(j, 1, {
                  gasName: dil_name,
                  startDepth: ccr_fixed_plan[j].startDepth,
                  endDepth: ccr_fixed_plan[j].endDepth,
                  time: ccr_fixed_plan[j].time
              });
          }
      }

      tmp_arr = ccr_fixed_plan;

      //remove unused steps from tissue array
      var time_rem = ccr_fixed_plan[0].time * 1.0;
      var depth_rem = ccr_fixed_plan[0].endDepth * 1.0;
      var index_rem;
      //find first flat level index
      for (j = 0; j < comp_tiss_arr.length; j++) {
        if(depth_rem == comp_tiss_arr[j].StartDepthL && depth_rem == comp_tiss_arr[j].EndDepthL){
            index_rem = j;
            break;
        }
      }

      comp_tiss_arr.splice(0 , index_rem - 16);
      
      for (j = 0; j < 16; j++) {
         comp_tiss_arr.splice(j , 1, {
                StartDepthL: comp_tiss_arr[j].StartDepthL,
                EndDepthL: comp_tiss_arr[j].EndDepthL,
                TimeCurrent: time_rem,
                NitroLoad: comp_tiss_arr[j].NitroLoad,
                HeliumLoad: comp_tiss_arr[j].HeliumLoad,
                TotalLoad: comp_tiss_arr[j].TotalLoad,
                HalfTime: comp_tiss_arr[j].HalfTime
            });
        }
    }
  return tmp_arr;
}

//Build decompression table
function dplan_sort_arr(tmp_arr) {
  del_html_elem("t_table");

  //make real copy not equal massive
  var dec_table = tmp_arr.slice();
    
    //CCR diluent first gas marker
    var diluent_cng = 0;
    pdf_table_export_arr = [];

    body = document.getElementById("t_table");
    columns = 5;
    rows = ((dec_table.length) - 1) / columns;
    tr = "";
    td = "";
  
    firstTable = document.querySelector("#table");
  
    table = document.createElement("table");
    table.setAttribute("width", "100%");
    table.setAttribute("id", "opt_main_plan_table");
    table.setAttribute("class", "opt_main_plan_table");
    //tick = 0;
    //check plan style selection status
    var pln_style_val = $("#tn_plan_style option:selected").val();


  tick = 0;
  for (i = 0; i < rows; i++) {


      tr = document.createElement("tr");
      tr.setAttribute("width", "100%");

      
      // remove ascent\descent rows if user select classic plan style
      if (pln_style_val == 2) {
        if(i > 1 ){
            if (dec_table[tick] == "Ascent" || dec_table[tick] == "Descent") {
                //tr.setAttribute("id", "tab_hide_me");
                //tr.setAttribute("class", "tab_hide_me");
                tr.setAttribute("style","display:none;");
            }
          }
      }
      
      clr = 0;
      gass_cng = 0;
      for (j = 0; j < columns; j++) {
          td = document.createElement("td");
          if (i === 0 && j === 0) {
              td.setAttribute("id", "tab_action");
              td.setAttribute("class", "tab_action");
          }
          if (i === 0 && j === 1) {
              td.setAttribute("id", "tab_depth");
              td.setAttribute("class", "tab_depth");
          }
          if (i === 0 && j === 2) {
              td.setAttribute("id", "tab_time");
              td.setAttribute("class", "tab_time");
          }
          if (i === 0 && j === 3) {
              td.setAttribute("id", "tab_rtime");
              td.setAttribute("class", "tab_rtime");
          }
          if (i === 0 && j === 4) {
              td.setAttribute("id", "tab_mix");
              td.setAttribute("class", "tab_mix");
          }



          //make colors for levels and stops
          if (dec_table[tick] === "Level") {
              clr = 1;
              td.setAttribute("class", "tab_black");
          }
          if (dec_table[tick] === "Stop") {
              clr = 1;
              td.setAttribute("class", "tab_black");
          }
          if (clr === 1) {
              td.setAttribute("class", "tab_black");
          }

          //Make horizontal lines if gass changed
          if (i > 1) {
              if (j === 0) {
                  if (dec_table[tick + 4].toString() != dec_table[tick - 1].toString()) {
                      gass_cng = 1;
                      diluent_cng = 1;

                      //Prepare check for IBCD Alert
                      var dp1 = depth_from_name_arr(dec_table[tick - 1]);
                      dp1 = dp1[0];

                      //Find Ascent or descend after gas changed
                      //If descent do nothing. Otherwise check for IBCD Alert
                      for (var k = i; k > 0; k--) {
                          dp_state = "Level";
                          var dp2 = depth_from_name_arr(dec_table[columns * k + 1]);
                          //One depth returned do nothing
                          if (dp2.length < 2 && dp1 !== dp2[0]) {
                              dp_state = "Level";
                          }
                          //Two depth returned
                          else {
                              //console.log("1dp: " + dp2[0] + ", 2dp: " + dp2[1]);
                              if (dp2[0] < dp2[1]) {
                                  dp_state = "Descent";
                                  break;
                              } else {

                                  //Extract depth changed gas
                                  dp1 = depth_from_name_arr(dec_table[tick + 1]);
                                  dp1 = dp1[0];

                                  var gas1 = gass_from_name_arr(dec_table[tick + 4]);
                                  var gas2 = gass_from_name_arr(dec_table[tick - 1]);

                                  var diff_he = Math.abs(((dp1 * 0.1 + 1) * (0.01 * gas1[2])) - ((dp1 * 0.1 + 1) * (0.01 * gas2[2]))).toFixed(2);
                                  var diff_n2 = Math.abs(((dp1 * 0.1 + 1) * (0.01 * gas1[1])) - ((dp1 * 0.1 + 1) * (0.01 * gas2[1]))).toFixed(2);

                                  //get IBCD limits from GUI
                                  var he_limit = document.getElementById("opt_ibcd_pphe");
                                  var opt_ibcd_pphe_idx = he_limit.options[he_limit.selectedIndex].value;

                                  var n2_limit = document.getElementById("opt_ibcd_ppn2");
                                  var opt_ibcd_ppn2_idx = n2_limit.options[n2_limit.selectedIndex].value;

                                  //Check for IBCD N2 or He limits is crossed
                                  if (diff_n2 >= opt_ibcd_ppn2_idx) {
                                      dp_state = "N2_WRN!";
                                  }
                                  if (diff_he >= opt_ibcd_pphe_idx) {
                                      dp_state = "He_WRN!";
                                  }

                                  //prepare to compute lipid response IBCD
                                  //get IBCD lipids check state from GUI
                                  var icd_lip_check = document.getElementById("opt_wrn_ibcd_lip");
                                  var opt_ibcd_lip_idx = parseInt(icd_lip_check.options[icd_lip_check.selectedIndex].value);

                                  //if yes check it
                                  if (opt_ibcd_lip_idx == 1) {
                                      var he_diff = Math.abs(gas1[2] - gas2[2]);
                                      var n2_diff = Math.abs(gas1[1] - gas2[1]);

                                      //check for 1/5 he to n2 ratio
                                      if ((he_diff / 5) < n2_diff && he_diff !== 0) {
                                          dp_state = "LIP_WRN!";
                                      }
                                  }
                                  break;
                              }
                          }
                      }
                  } else {
                      td.setAttribute("id", "gs_sv_brd_thin");
                  }
              }
          }
          if (gass_cng === 1) {
              td.setAttribute("id", "gs_sv_brd");

              //diver going up and gas changed
              if ($("#tn_plan_ccr").val() == 1){
                //Only for OC plan we need marking IBCD and lipid warnings
                if (dp_state === "N2_WRN!") {
                        td.setAttribute("id", "gs_n2_limit_wrn");
                    }
                    if (dp_state === "He_WRN!") {
                        td.setAttribute("id", "gs_he_limit_wrn");
                    }
                    if (dp_state === "LIP_WRN!") {
                        td.setAttribute("id", "gs_lip_limit_wrn");
                    }
                }   
            }
          //make Diluent prefix on first mix if used CCR mode
          if ($("#tn_plan_ccr").val() == 1) {
              //OC
              if (i > 0 && j === 1) {
                  //meters
                  if ($("#tn_dmn").val() == 1) {
                      text = document.createTextNode(plan_lng(dec_table[tick]));
                      pdf_table_export_arr.push(plan_lng(dec_table[tick]));
                  }
                  //feet
                  if ($("#tn_dmn").val() == 2) {
                      var dp_arr = depth_from_name_arr(plan_lng(dec_table[tick]));
                      if (dp_arr.length == 1) {
                          text = document.createTextNode(Math.ceil(3.28084 * dp_arr[0]));
                          pdf_table_export_arr.push(Math.ceil(3.28084 * dp_arr[0]));
                      } else {
                          text = document.createTextNode(Math.ceil(3.28084 * dp_arr[0]) + "-" + Math.ceil(3.28084 * dp_arr[1]));
                          pdf_table_export_arr.push(Math.ceil(3.28084 * dp_arr[0]) + "-" + Math.ceil(3.28084 * dp_arr[1]));
                      }
                  }

              } else {
                  text = document.createTextNode(plan_lng(dec_table[tick]));
                  pdf_table_export_arr.push(plan_lng(dec_table[tick]));
              }
          } else {
              //CCR
              if (i > 0 && j === 4) {
                  if (diluent_cng == 0) {
                      //add text "Diluent" only for first mix in the plan
                      text = document.createTextNode(plan_lng("t_diluent") + plan_lng(dec_table[tick]));
                      pdf_table_export_arr.push(plan_lng("t_diluent") + plan_lng(dec_table[tick]));
                  } else {
                      text = document.createTextNode(plan_lng(dec_table[tick]));
                      pdf_table_export_arr.push(plan_lng(dec_table[tick]));
                  }
              } else {
                  text = document.createTextNode(plan_lng(dec_table[tick]));
                  pdf_table_export_arr.push(plan_lng(dec_table[tick]));
              }
          }



          td.appendChild(text);
          tr.appendChild(td);


          tick = tick + 1;
      }
      table.appendChild(tr);
  }
  //restore primary dec_table array if modified
  dec_table = tmp_arr.slice();

  if (firstTable === null) {
      return body.appendChild(table);
  } else {
      var newTable = body.appendChild(table);
      return body.replaceChild(newTable, firstTable);
  }
}




//Build PP table
function dplan_press_arr(tmp_arr) {
  del_html_elem("t_press");
  dec_table = tmp_arr.slice();

  body = document.getElementById("t_press");
  columns = 5;
  rows = ((dec_table.length) - 1) / columns;
  tr = "";
  td = "";

  firstTable = document.getElementById("t_press");
  table = document.createElement("table");
  table.setAttribute("width", "100%");
  tick = 0;

  ppo2_array = [];
  pphe_array = [];
  ppn2_array = [];

  var time_base = 0;
  var time_add = 0;

  for (i = 0; i < rows; i++) {
      tr = document.createElement("tr");
      tr.setAttribute("width", "100%");
      clr = 0;
      gass_cng = 0;
      for (j = 0; j < columns; j++) {
          if (j < 3) {
              td = document.createElement("td");
          }
          //make colors for columns
          if (j === 0 && i !== 0) {
              td.setAttribute("class", "tab_o2");
          }
          if (j === 1 && i !== 0) {
              td.setAttribute("class", "tab_n2");
          }
          if (j === 2 && i !== 0) {
              td.setAttribute("class", "tab_he");
          }

          //Make horizontal lines if gass changed
          if (i > 1) {
              if (j === 0) {
                  if (dec_table[tick + 4].toString() != dec_table[tick - 1].toString()) {
                    if ($("#tn_plan_ccr").val() == 2){
                        //CCR plan
                        if (opt_blt_dln == 2){
                            //Diluent plan
                            //Disable any lines on ix changes because it is diluent mix
                        }
                        if (opt_blt_dln == 1){
                            //Bailout plan
                            var cnt = 0;
                            var current_dil = gass_from_name_arr(dec_table[tick + 4].toString());
                            for (c = 0; c < $("#opt_deco").val(); c++) {
                            //if current level mix is equal a deco mix draw line
                            if (current_dil[0] == deco_mix_arr[cnt] && current_dil[2] == deco_mix_arr[cnt + 1]) {
                                //console.log(current_dil[0], current_dil[2] , deco_mix_arr[cnt], deco_mix_arr[cnt+1]);
                                //flag_to_del = 0;
                                gass_cng = 1;
                                td.setAttribute("id", "gs_sv_brd");
                            }
                            else{
                                //nothing draw line because it is diluent level change
                            }
                            cnt = cnt + 2;
                            }
                        }
                    }
                    if ($("#tn_plan_ccr").val() == 1){
                        //OC plan
                        gass_cng = 1;
                        td.setAttribute("id", "gs_sv_brd");
                        
                    }
                      
                  } else {
                      td.setAttribute("id", "gs_sv_brd_thin");
                  }
              }
          }
          if (gass_cng == 1) {
              td.setAttribute("id", "gs_sv_brd");
          }

          if (i > 0) {
              //include water density, altitude correction and water temperature correction
              //console.log(1 / ((water_density_temperature_correction() * water_density() * 0.001) - ((1 - height_to_bar()))));
              //calculation of correction without altitude above sea level
              var WaterDensTempCompensation = ((water_density_temperature_correction() * water_density() * 0.001));

              //for oxygen
              if (j === 0) {
                  depth = depth_from_name_arr(dec_table[tick + 1]);
                  time_add = time_to_dec_time(dec_table[tick + 2]);

                  depth_start = depth[0];
                  if (depth.length > 1) {
                      depth_end = depth[1];
                  } else {
                      depth_end = depth[0];
                  }
                  o2_fr = gass_from_name_arr(dec_table[tick + 4]);
                  o2_fr = o2_fr[0];

                  //bar
                  if ($("#tn_dmn").val() == 1) {
                      o2_fr_start = ((WaterDensTempCompensation * (o2_fr * (depth_start) * 0.001)) + (height_to_bar() * (0.01 * o2_fr))).toFixed(2);
                      o2_fr_end = ((WaterDensTempCompensation * (o2_fr * (depth_end) * 0.001)) + (height_to_bar() * (0.01 * o2_fr))).toFixed(2);
                  }
                  //psi
                  if ($("#tn_dmn").val() == 2) {
                      //include water density, altitude correction and water temperature correction
                      o2_fr_start = (14.5037738 * ((WaterDensTempCompensation * (o2_fr * (depth_start) * 0.001)) + ((height_to_bar()) * (0.01 * o2_fr)))).toFixed(1);
                      o2_fr_end = (14.5037738 * ((WaterDensTempCompensation * (o2_fr * (depth_end) * 0.001)) + ((height_to_bar()) * (0.01 * o2_fr)))).toFixed(1);
                  }

                  if (depth_start == depth_end) {
                      text = document.createTextNode(o2_fr_start);
                      ppo2_array.push([1 * (time_base).toFixed(1), 1 * parseFloat(o2_fr_start).toFixed(2)]);
                      ppo2_array.push([1 * (time_base + time_add).toFixed(1), 1 * parseFloat(o2_fr_start).toFixed(2)]);
                  } else {
                      text = document.createTextNode(o2_fr_start + "-" + o2_fr_end);
                      ppo2_array.push([1 * (time_base).toFixed(1), 1 * parseFloat(o2_fr_start).toFixed(2)]);
                      ppo2_array.push([1 * (time_base + time_add).toFixed(1), 1 * parseFloat(o2_fr_end).toFixed(2)]);
                  }
              }
              //for nitrogen
              if (j == 1) {
                  depth = depth_from_name_arr(dec_table[tick]);
                  depth_start = depth[0];
                  if (depth.length > 1) {
                      depth_end = depth[1];
                  } else {
                      depth_end = depth[0];
                  }

                  n2_fr = gass_from_name_arr(dec_table[tick + 3]);
                  n2_fr = n2_fr[1];

                  //bar
                  if ($("#tn_dmn").val() == 1) {
                      //include water density, altitude correction and water temperature correction
                      n2_fr_start = ((WaterDensTempCompensation * (n2_fr * (depth_start) * 0.001)) + ((height_to_bar()) * (0.01 * n2_fr))).toFixed(2);
                      n2_fr_end = ((WaterDensTempCompensation * (n2_fr * (depth_end) * 0.001)) + ((height_to_bar()) * (0.01 * n2_fr))).toFixed(2);
                  }
                  //psi
                  if ($("#tn_dmn").val() == 2) {
                      //include water density, altitude correction and water temperature correction
                      n2_fr_start = (14.5037738 * ((WaterDensTempCompensation * (n2_fr * (depth_start) * 0.001)) + ((height_to_bar()) * (0.01 * n2_fr)))).toFixed(1);
                      n2_fr_end = (14.5037738 * ((WaterDensTempCompensation * (n2_fr * (depth_end) * 0.001)) + ((height_to_bar()) * (0.01 * n2_fr)))).toFixed(1);
                  }

                  if (depth_start == depth_end) {
                      text = document.createTextNode(n2_fr_start);
                      ppn2_array.push([1 * (time_base).toFixed(1), 1 * parseFloat(n2_fr_start).toFixed(2)]);
                      ppn2_array.push([1 * (time_base + time_add).toFixed(1), 1 * parseFloat(n2_fr_start).toFixed(2)]);
                  } else {
                      text = document.createTextNode(n2_fr_start + "-" + n2_fr_end);
                      ppn2_array.push([1 * (time_base).toFixed(1), 1 * parseFloat(n2_fr_start).toFixed(2)]);
                      ppn2_array.push([1 * (time_base + time_add).toFixed(1), 1 * parseFloat(n2_fr_end).toFixed(2)]);
                  }
              }
              //and for helium if exist
              if (j == 2) {
                  depth = depth_from_name_arr(dec_table[tick - 1]);
                  depth_start = depth[0];
                  if (depth.length > 1) {
                      depth_end = depth[1];
                  } else {
                      depth_end = depth[0];
                  }

                  he_fr = gass_from_name_arr(dec_table[tick + 2]);
                  he_fr = he_fr[2];

                  //bar
                  if ($("#tn_dmn").val() == 1) {
                      //include water density, altitude correction and water temperature correction
                      he_fr_start = ((WaterDensTempCompensation * (he_fr * (depth_start) * 0.001)) + ((height_to_bar()) * (0.01 * he_fr))).toFixed(2);
                      he_fr_end = ((WaterDensTempCompensation * (he_fr * (depth_end) * 0.001)) + ((height_to_bar()) * (0.01 * he_fr))).toFixed(2);
                  }
                  //psi
                  if ($("#tn_dmn").val() == 2) {
                      //include water density, altitude correction and water temperature correction
                      he_fr_start = (14.5037738 * ((WaterDensTempCompensation * (he_fr * (depth_start) * 0.001)) + ((height_to_bar()) * (0.01 * he_fr)))).toFixed(1);
                      he_fr_end = (14.5037738 * ((WaterDensTempCompensation * (he_fr * (depth_end) * 0.001)) + ((height_to_bar()) * (0.01 * he_fr)))).toFixed(1);
                  }

                  if (depth_start == depth_end) {
                      text = document.createTextNode(he_fr_start);
                      pphe_array.push([1 * (time_base).toFixed(1), 1 * parseFloat(he_fr_start).toFixed(2)]);
                      pphe_array.push([1 * (time_base + time_add).toFixed(1), 1 * parseFloat(he_fr_start).toFixed(2)]);
                  } else {
                      text = document.createTextNode(he_fr_start + "-" + he_fr_end);
                      pphe_array.push([1 * (time_base).toFixed(1), 1 * parseFloat(he_fr_start).toFixed(2)]);
                      pphe_array.push([1 * (time_base + time_add).toFixed(1), 1 * parseFloat(he_fr_end).toFixed(2)]);
                  }
                  //hack for update because in one function we build many tables with different columns and data
                  time_base = time_base + time_add;
              }



              if (j == 3) {
                  depth = depth_from_name_arr(dec_table[tick - 2]);
                  depth_start = depth[0];
                  if (depth.length > 1) {
                      depth_end = depth[1];
                  } else {
                      depth_end = depth[0];
                  }

                  opt_rmv_deco = document.getElementById("opt_rmv_deco");
                  opt_rmv_bt = document.getElementById("opt_rmv_bt");


                  opt_rmv_bt_idx = opt_rmv_bt.options[opt_rmv_bt.selectedIndex].value;


                  time1 = time_to_dec_time(dec_table[tick - 1]);

                  //console.log(time1);
                  coms = Math.ceil((time1) * (((depth_end + depth_start) * 0.5) * 0.1 + 1) * opt_rmv_bt_idx);

              }

              if (j < 3) {
                  td.appendChild(text);
              }

          } else {
              if (i === 0 && j === 0) {
                  td.setAttribute("id", "tab_td_o2");
                  td.setAttribute("class", "tab_td_o2");
                  td.innerHTML = plan_lng("tab_tr_o2");
              }
              if (i === 0 && j === 1) {
                  td.setAttribute("id", "tab_td_n2");
                  td.setAttribute("class", "tab_td_n2");
                  td.innerHTML = plan_lng("tab_tr_n2");
              }
              if (i === 0 && j === 2) {
                  td.setAttribute("id", "tab_td_he");
                  td.setAttribute("class", "tab_td_he");
                  td.innerHTML = plan_lng("tab_tr_he");
              }
              if (i === 0 && j === 3) {
                  td.setAttribute("id", "tab_td_coms");
                  td.setAttribute("class", "tab_td_coms");
                  //td.innerHTML = plan_lng("tab_tr_coms");
                  //text = document.createTextNode("");
              }
              if (i === 0 && j === 4) {
                  td.setAttribute("id", "tab_time");
                  td.setAttribute("class", "tab_time");
                  //td.innerHTML = plan_lng("tab_tr_mix");
                  //text = document.createTextNode("");
              }
          }
          if (j < 3) {
              tr.appendChild(td);
          }


          tick = tick + 1;
      }
      if (j < 3) {
          tr.appendChild(td);
      }
      table.appendChild(tr);
  }
  //console.log(ppo2_array);
  return body.appendChild(table);

}

//Build Cons table one level by one level
function dplan_cons_arr(tmp_arr) {
    //console.log(tmp_arr);
  del_html_elem("t_cons");

  columns = 5;
  rows = ((tmp_arr.length) - 1) / columns;
  tick = 0;
  dec_table = [];
  //dec_table.push("Mix","Cons", "Time", "Dimension");
  for (i = 0; i < rows; i++) {
      for (j = 0; j < columns; j++) {
          if (j == 1) {
              dec_table.push(tmp_arr[tick], tmp_arr[tick + 1], tmp_arr[tick + 3], tmp_arr[tick + 2]);
          }
          tick = tick + 1;
      }

  }
  //console.log(dec_table);

  //if CCR BAILOUT mode remove tree or two lines with first gas
  if ($("#tn_plan_ccr").val() == 2) {
      //CCR!                     ^^^^
      columns = 4;
      rows = ((tmp_arr.length) - 1) / columns;
      tick = 0;
      var ipdx = 0;
      //Depth,Time,Mix,litres
      for (i = 0; i < rows; i++) {
          for (j = 0; j < columns; j++) {

              if (j == 0 && i > 1) {
                  //console.log(dec_table[tick+2],dec_table[tick-2]);
                  if (dec_table[tick + 2] != dec_table[tick - 2]) {
                      ipdx = tick;
                      break;
                  }
              }
              tick = tick + 1;
          }
      }
      dec_table.splice(3, ipdx - 4);
  }

  body = document.getElementById("t_cons");
  columns = 4;
  rows = ((dec_table.length) - 1) / columns;
  tr = "";
  td = "";

  firstTable = document.getElementById("t_cons");

  table = document.createElement("table");
  table.setAttribute("width", "100%");

  //pdf_table_cons_arr =[];

  tick = 0;
  clr = 0;

  //include water density, altitude correction and water temperature correction
  // console.log(1 / ((water_density_temperature_correction() * water_density() * 0.001) - ((1 - height_to_bar()))));
  //calculation of correction without altitude above sea level
  var WaterDensTempCompensation = ((water_density_temperature_correction() * water_density() * 0.001));

  for (i = 0; i < rows; i++) {
      tr = document.createElement("tr");
      tr.setAttribute("width", "100%");
      gass_cng = 0;
      for (j = 0; j < columns; j++) {

          td = document.createElement("td");
          //Make horizontal lines if gass changed
          if (i > 1) {
              if (j === 0) {
                  if (dec_table[tick + 2].toString() != dec_table[tick - 2].toString()) {
                      gass_cng = 1;
                      td.setAttribute("id", "gs_sv_brd");
                      if (clr === 0) {
                          clr = 1;
                      } else {
                          clr = 0;
                      }
                  } else {
                      td.setAttribute("id", "gs_sv_brd_thin");
                  }
              }
          }

          if (gass_cng == 1) {
              td.setAttribute("id", "gs_sv_brd");
          }
          if (clr == 1) {
              td.setAttribute("class", "tr_coms_dark");
          } else {
              td.setAttribute("class", "tr_coms_light");
          }
          if (i > 0) { 
              if (j == 1) {
                  depth = depth_from_name_arr(dec_table[tick - 1]);
                  depth_start = depth[0];
                  if (depth.length > 1) {
                      depth_end = depth[1];
                  } else {
                      depth_end = depth[0];
                  }

                  opt_rmv_deco = document.getElementById("opt_rmv_deco");
                  opt_rmv_bt = document.getElementById("opt_rmv_bt");
                  opt_rmv_bt_idx = opt_rmv_bt.options[opt_rmv_bt.selectedIndex].value;
                  opt_rmv_deco_idx = opt_rmv_deco.options[opt_rmv_deco.selectedIndex].value;

                  time1 = time_to_dec_time(dec_table[tick]);

                  if (i - 2 < (lvl_arr.length / 3) * 2) {


                      //include water density, altitude correction and water temperature correction
                      coms = Math.ceil((time1) * ((WaterDensTempCompensation * (((depth_end + depth_start) * 0.5) * 0.1)) + (height_to_bar())) * opt_rmv_bt_idx);
                  } else { //include water density, altitude correction and water temperature correction
                      coms = Math.ceil((time1) * ((WaterDensTempCompensation * (((depth_end + depth_start) * 0.5) * 0.1)) + (height_to_bar())) * opt_rmv_deco_idx);
                  }
                  //liters
                  if ($("#tn_dmn").val() == 1) {
                      text = document.createTextNode(coms);
                  }
                  //cubic foot
                  if ($("#tn_dmn").val() == 2) {
                      text = document.createTextNode((0.0353147 * coms).toFixed(2));
                  }
                  td.appendChild(text);
              }
              if (j === 0) {
                  text = document.createTextNode(plan_lng(dec_table[tick + 2]));
                  //pdf_table_cons_arr.push(plan_lng(dec_table[tick+2]));

                  td.appendChild(text);
              }
              if (j == 2) {
                    //meters
                    if ($("#tn_dmn").val() == 1) {
                        text = document.createTextNode(dec_table[tick - 2]);
                    }
                    //feet
                    if ($("#tn_dmn").val() == 2) {

                        var dp_arr = depth_from_name_arr(plan_lng(dec_table[tick - 2]));
                      if (dp_arr.length == 1) {
                          text = document.createTextNode(Math.ceil(3.28084 * dp_arr[0]));
                      } else {
                          text = document.createTextNode(Math.ceil(3.28084 * dp_arr[0]) + "-" + Math.ceil(3.28084 * dp_arr[1]));
                      }
                    }
                  //pdf_table_cons_arr.push(plan_lng(dec_table[tick-1]));
                  td.appendChild(text);
              }
              if (j == 3) {
                  //td.innerHTML = plan_lng("tab_dmn_ltr");
                  td.innerHTML = dec_table[tick - 2];
                  //pdf_table_cons_arr.push (plan_lng("tab_dmn_ltr"));
                  //td.appendChild(text);
              }

          } else {
              if (i === 0 && j === 0) {
                  td.setAttribute("id", "tab_td_he");
                  td.setAttribute("class", "tab_td_he");
                  td.innerHTML = plan_lng("tab_tr_mix");
              }
              if (i === 0 && j === 1) {
                  td.setAttribute("id", "tab_td_coms");
                  td.setAttribute("class", "tab_td_coms");
                  td.innerHTML = (plan_lng("tab_tr_coms") + "<br/>\n" + plan_lng("tab_dmn_ltr"));
                  //text = document.createTextNode("");
              }
              if (i === 0 && j === 3) {
                  td.setAttribute("id", "tab_td_time");
                  td.setAttribute("class", "tab_td_time");
                  td.innerHTML = (plan_lng("tab_tr_time") + "<br/>\n" + plan_lng("ch_tmx"));

              }
              //if (i === 0 && j === 3) {
                //  td.setAttribute("id", "tab_td_dmn");
                //  td.setAttribute("class", "tab_td_dmn");
                //  td.innerHTML = plan_lng("tab_tr_dmn");
              //}
              if (i === 0 && j === 2) {
                  td.setAttribute("id", "tab_td_depth");
                  td.setAttribute("class", "tab_td_depth");
                  td.innerHTML = (plan_lng("Depth") + "<br/>\n" + plan_lng("ch_mtr"));
              }
          }
          tr.appendChild(td);
          tick = tick + 1;
      }
      tr.appendChild(td);
      table.appendChild(tr);
  }
  return body.appendChild(table);
}

//Extract Gas Fraction from Gas Name
function gass_from_name_arr(tmp_arr) {
  gass_fr_arr = [];
  //very strange manipulation need explain from Anton
  tmp_arr = tmp_arr.toString();
  if ((tmp_arr.toString().substr(0, 3)) == "Tmx") {

      a = tmp_arr.substr(3, tmp_arr.length - 3);
      for (var f = 0; f < a.length; f++) {
          if (a.charAt(f) == "/") {
              o2 = parseFloat(a.substr(0, f));
              he = parseFloat(a.substr(f + 1, a.length - f - 1));
              break;
          }
      }
      n2 = 100 - o2 - he;
  }
  if (tmp_arr.toString() == "OXY") {
      n2 = 0;
      o2 = 100;
      he = 0;
  }
  if (tmp_arr.toString() == "Air") {
      n2 = 79;
      o2 = 21;
      he = 0;
  }
  if ((tmp_arr.toString().substr(0, 3)) == "EAN") {

      o2 = parseFloat(tmp_arr.toString().substr(3, tmp_arr.length - 3));
      n2 = 100 - o2;
      he = 0;
  }

  gass_fr_arr.push(o2, n2, he);
  return gass_fr_arr;
}

//Extract depth from Depth txt
function depth_from_name_arr(tmp_arr) {
  depth_name_arr = [];
  a = tmp_arr.toString();

  if (a.indexOf("-") != -1) {
      for (var f = 0; f < a.length; f++) {
          if (a.charAt(f) == "-") {
              first = parseFloat(a.substr(0, f));
              second = parseFloat(a.substr(f + 1, (a.length - f - 1)));
              depth_name_arr.push(first, second);
              break;
          }
      }
  } else {
      depth_name_arr.push(parseFloat(a));
  }
  return depth_name_arr;
}

//real time format xx:xx to dec time equal
function time_to_dec_time(tmp_time) {
  tmp_time = tmp_time.toString();
  for (var f = 0; f < tmp_time.length; f++) {
      if (tmp_time.charAt(f) == ":") {
          mins = parseFloat(tmp_time.substr(0, f));
          seconds = parseFloat(tmp_time.substr(f + 1, (tmp_time.length - f - 1)));
          tmp_time = parseFloat(mins + ((seconds / 60 * 100) * 0.01));
          break;
      }
  }
  return tmp_time;
}

//Get CNS for selected ppO2
function ppo2_to_cns(tmp_val) {
  tmp_val = (tmp_val.toFixed(2));

  var cns_min = cns_arr[0].CNS;
  var cns_max = cns_arr[cns_arr.length - 1].CNS;
  var ppo2_min = cns_arr[0].ppO2;
  var ppo2_max = cns_arr[cns_arr.length - 1].ppO2;
  var cns_calc = 0;

  //process if ppo2 present in table we use tables value
  if (tmp_val >= ppo2_min) {
      if (tmp_val <= ppo2_max) {

          var tbl_idx = ((tmp_val - ppo2_min) * 100).toFixed(0);
          cns_calc = cns_arr[tbl_idx].CNS;
      }
  }

  //or if this ppo2 not present in table we use first or last know
  if (tmp_val < ppo2_min) {
      cns_calc = cns_min;
  }
  if (tmp_val > ppo2_max) {
      cns_calc = cns_max;
  }

  return cns_calc;
}

//Total OTU and CNS Computation
function total_cns_otu(tmp_arr) {
  del_html_elem("t_otu_cns");

  //Extract Depth\Time\Mix from tmp_arr 5 columns
  //tmp_arr.splice(0,5);

  columns = 5;
  rows = ((tmp_arr.length) - 1) / columns;
  tick = 0;
  dec_table = [];

  for (i = 0; i < rows; i++) {
      for (j = 0; j < columns; j++) {

          if (j === 0) {
              dec_table.push({
                  Mix: tmp_arr[tick + 4].toString(),
                  Depth: tmp_arr[tick + 1],
                  Time: tmp_arr[tick + 2]
              });
          }
          tick = tick + 1;
      }
  }
  //remove first array element with labels. Mix: Mix, Depth: Depth, Time: Time
  dec_table.shift();


  tick = 0;
  var otu_final = 0;
  var cns_final = 0;
  for (i = 0; i < dec_table.length; i++) {

      var otu_current = 0;
      var cns_current = 0;
      var depth = depth_from_name_arr(dec_table[tick].Depth);
      var time = time_to_dec_time(dec_table[tick].Time);
      var mix = gass_from_name_arr(dec_table[tick].Mix);



      //O2 only to fraction
      mix = mix[0] * 0.01;

      //Ascent or Descent
      if (depth.length > 1) {
          var depth1 = depth[0];
          var depth2 = depth[1];

          //OTU computation
          var ppo2_1 = (mix * ((depth1 + 10) / 10));
          var ppo2_2 = (mix * ((depth2 + 10) / 10));

          if (ppo2_1 < 0.5 && ppo2_2 < 0.5) {
              otu_current = 0;
          } else {
              //if ppo2 from depth1 >= 0.5 and ppo2 from depth 2 >=0.5
              if (ppo2_1 >= 0.5 && ppo2_2 >= 0.5) {
                  otu_current = (((3 / 11 * time) / (ppo2_2 - ppo2_1)) * ((Math.pow((ppo2_2 - 0.5) / 0.5, (11 / 6))) - (Math.pow((ppo2_1 - 0.5) / 0.5, (11 / 6)))));

              }

              //if ppo2 from depth1 < 0.5
              if (ppo2_1 < 0.5) {
                  ppo2_1 = 0.5;
                  //recompute time for segment higher ppo2 >0.5 only
                  time = (time * (ppo2_2 - 0.5) / (ppo2_2 - mix));
                  otu_current = (((3 / 11 * time) / (ppo2_2 - ppo2_1)) * ((Math.pow((ppo2_2 - 0.5) / 0.5, (11 / 6))) - (Math.pow((ppo2_1 - 0.5) / 0.5, (11 / 6)))));
              }
              //if ppo2 from depth2 < 0.5
              if (ppo2_2 < 0.5) {
                  //NaN fixed after changed from0.5 to 0.5000001
                  ppo2_2 = 0.500000001;
                  //recompute time for segment higher ppo2 >0.5 only
                  time = (time * (ppo2_1 - 0.5) / (ppo2_1 - mix));
                  otu_current = (((3 / 11 * time) / (ppo2_2 - ppo2_1)) * ((Math.pow((ppo2_2 - 0.5) / 0.5, (11 / 6))) - (Math.pow((ppo2_1 - 0.5) / 0.5, (11 / 6)))));

              }
          }

          //CNS computation
          var depth_lo = 0;
          if (depth1 < depth2) {
              depth_lo = depth1;
          } else {
              depth_lo = depth2;
          }
          var time_steep = time / (Math.abs(depth1 - depth2));
          for (f = 0; f < (Math.abs(depth1 - depth2)); f++) {
              var cns_steep = 0;
              cns_steep = ppo2_to_cns(mix * ((depth_lo + f + 10) / 10)) * time_steep;

              cns_current = cns_current + cns_steep;
          }
          //console.log("rise/lo",mix, time,cns_current);
      }
      //Level
      else {
          depth = depth[0];
          //OTU computation
          //if po2 lower 0.5 computations don`t apply for current segment and OTU=0
          if ((mix * ((depth + 10) / 10)) > 0.5) {

              otu_current = time * Math.pow((0.5 / ((mix * ((depth + 10) / 10)) - 0.5)), (-5.0 / 6.0));

          } else {
              otu_current = 0.0;
          }

          //CNS computation
          cns_current = ppo2_to_cns(mix * ((depth + 10) / 10)) * time;
          //console.log("flat",mix, time, mix*((depth + 10) / 10), ppo2_to_cns(mix*((depth + 10) / 10)),cns_current);
      }
      //Compute final OTU
      otu_final = otu_final + otu_current;

      //ComputeFinal CNS
      cns_final = cns_final + cns_current;
      tick = tick + 1;
    }
    
    
    //compute TTS
    var depthF = 0;
    var depthFPreor = 0;
    var timeF = 0;

    var tts_current = 0;
    var tts_stop = 0;
    for (var i = dec_table.length - 1; i >= 1; i--) {
        depthF = depth_from_name_arr(dec_table[i].Depth);
        depthFPreor = depth_from_name_arr(dec_table[i-1].Depth);
        timeF = time_to_dec_time(dec_table[i].Time);
        
        if(tts_stop == 0){
            if (depthF.length == 2){
                if(depthF[0] > depthF[1]){
                    tts_current = tts_current + timeF;
                }
            }
    
            if (depthF.length == 1){
                if(depthFPreor.length == 2){
                        if(depthF[0] < depthFPreor[0]){
                            tts_current = tts_current + timeF;
                        }
                        if(depthF[0] > depthFPreor[0]){
                            tts_stop = 1;
                        }
                    if(depthFPreor.length == 1){
                        if(depthF[0] < depthFPreor[0]){
                            tts_current = tts_current + timeF;
                        }
                    }
                }
            }
        }
    }
    //console.log(dec_table);

  //build final array
  otu_cns_arr = [{
      OTU: Math.ceil(otu_final),
      CNS: Math.ceil(cns_final),
      TTS:  time_dec_to_time(tts_current)
  }];

  //Build final table
  body = document.getElementById("t_otu_cns");

  tr = "";
  td = "";

  pdf_table_otu_cns_arr = [];
  //price_cons_arr =[];

  firstTable = document.getElementById("t_otu_cns");
  table = document.createElement("table");
  table.setAttribute("width", "100%");
  table.setAttribute("id", "opt_otu_cns");

  tr = document.createElement("tr");
  tr.setAttribute("width", "100%");

  td = document.createElement("td");
  //td.setAttribute("class", "tab_black");
  td.innerHTML = plan_lng("tab_tr_OTU");
  pdf_table_otu_cns_arr.push(plan_lng("tab_tr_OTU"));
  tr.appendChild(td);

  td = document.createElement("td");
  //td.setAttribute("class", "tab_black");
  td.innerHTML = plan_lng("tab_tr_CNS");
  pdf_table_otu_cns_arr.push(plan_lng("tab_tr_CNS"));
  tr.appendChild(td);

  td = document.createElement("td");
  //td.setAttribute("class", "tab_black");
  td.innerHTML = plan_lng("tab_tr_TTS");
  pdf_table_otu_cns_arr.push(plan_lng("tab_tr_TTS"));
  tr.appendChild(td);

  table.appendChild(tr);

  //
  tr = document.createElement("tr");
  tr.setAttribute("width", "100%");

  //otu 
  td = document.createElement("td");
  td.setAttribute("class", "tab_black");
  td.innerHTML = otu_cns_arr[0].OTU;
  pdf_table_otu_cns_arr.push(otu_cns_arr[0].OTU);
  tr.appendChild(td);

  //cns
  td = document.createElement("td");
  td.setAttribute("class", "tab_black");
  td.innerHTML = otu_cns_arr[0].CNS;
  pdf_table_otu_cns_arr.push(otu_cns_arr[0].CNS);
  tr.appendChild(td);

  //tts
  td = document.createElement("td");
  td.setAttribute("class", "tab_black");
  td.innerHTML = otu_cns_arr[0].TTS;
  pdf_table_otu_cns_arr.push(otu_cns_arr[0].TTS);
  tr.appendChild(td);

  table.appendChild(tr);

  

  return body.appendChild(table);
}
//Total Gas Computation
function total_gass_arr(tmp_arr) {

    

  del_html_elem("t_total_cons");
  del_html_elem("t_cons_total_2");

  //Delete Depth\Time\Mix from tmp_arr 5 columns
  tmp_arr.splice(0, 5);
  //console.log(tmp_arr);

  //include water density, altitude correction and water temperature correction
  // console.log(1 / ((water_density_temperature_correction() * water_density() * 0.001) - ((1 - height_to_bar()))));
  //calculation of correction without altitude above sea level
  var WaterDensTempCompensation = ((water_density_temperature_correction() * water_density() * 0.001));

  columns = 5;
  rows = ((tmp_arr.length) - 1) / columns;
  tick = 0;
  dec_table = [];
  //dec_table.push("Mix","Cons", "Time", "Dimension");

  for (i = 0; i < rows; i++) {
      for (j = 0; j < columns; j++) {

          if (j === 0) {
              dec_table.push({
                  Mix: tmp_arr[tick + 4].toString(),
                  Depth: tmp_arr[tick + 1],
                  Time: tmp_arr[tick + 2]
              });
          }
          tick = tick + 1;
      }
  }
  //if CCR BAILOUT mode remove tree or two lines with first gas
  if ($("#tn_plan_ccr").val() == 2) {
      //CCR!                     ^^^^
      var mxt_idx = 0;
      for (i = 0; i < dec_table.length; i++) {
          if (dec_table[0].Mix != dec_table[i].Mix) {
              mxt_idx = i;
              break;
          }
      }
      //cut first gas
      dec_table.splice(0, mxt_idx);
  }


  tick = 0;
  gas_swich = 0;
  coms_ttl_arr = [];
  for (i = 0; i < dec_table.length; i++) {

      depth = depth_from_name_arr(dec_table[tick].Depth);
      depth_start = depth[0];
      if (depth.length > 1) {
          depth_end = depth[1];
      } else {
          depth_end = depth[0];
      }
      opt_rmv_deco = document.getElementById("opt_rmv_deco");
      opt_rmv_bt = document.getElementById("opt_rmv_bt");
      opt_rmv_bt_idx = opt_rmv_bt.options[opt_rmv_bt.selectedIndex].value;
      opt_rmv_deco_idx = opt_rmv_deco.options[opt_rmv_deco.selectedIndex].value;

      time1 = time_to_dec_time(dec_table[tick].Time);

      //select consumption rate deco or bottom

      if (i - 1 < (lvl_arr.length / 3) * 2) {
          //include water density, altitude correction and water temperature correction
          coms = Math.ceil((time1) * ((WaterDensTempCompensation * (((depth_end + depth_start) * 0.5) * 0.1)) + (height_to_bar())) * opt_rmv_bt_idx);
          //coms = Math.ceil((time1) * (((depth_end + depth_start)*0.5)*0.1+1) * opt_rmv_bt_idx);
      } else {
          //include water density, altitude correction and water temperature correction
          coms = Math.ceil((time1) * ((WaterDensTempCompensation * (((depth_end + depth_start) * 0.5) * 0.1)) + (height_to_bar())) * opt_rmv_deco_idx);
          //coms = Math.ceil((time1) * (((depth_end + depth_start)*0.5)*0.1+1) * opt_rmv_deco_idx);
      }

      coms_ttl_arr.push({
          Mix: dec_table[tick].Mix,
          Comsum: coms
      });
      tick = tick + 1;
  }
  
  //if CCR dive dipest 6 meters process to display gas consumption
  if (coms_ttl_arr.length > 0) {

      //current CCR mode on
      if ($("#tn_plan_ccr").val() == 2) {

          //current diluent on
          if (opt_blt_dln == 1) {
              //deco mixes present
              if ($("#opt_deco").val() * 1.0 != 0) {
                  //show consumptions if hide
                  //element_id_show("7-header");
                  //element_id_show("t_total_cons");
              }
          }
      }
      
      
        coms_final_arr = [];
        
        var coms_mix_arr = coms_ttl_arr.slice();
        var coms_mix_fin_arr = [];
        //leave only mix in array
        for (c = 0; c < coms_mix_arr.length; c++) {
            coms_mix_arr[c]=coms_mix_arr[c].Mix;
        }
        //filter array and leave only unique elements 
        coms_mix_fin_arr = coms_mix_arr.filter(function(elem, pos) {
            return coms_mix_arr.indexOf(elem) == pos;
        });
        //build final array for table
        for (c = 0; c < coms_mix_fin_arr.length; c++) {
            var ttl_coms = 0;
            for (i = 0; i < coms_ttl_arr.length; i++) {
                if(coms_ttl_arr[i].Mix == coms_mix_fin_arr[c]){
                    ttl_coms = ttl_coms + coms_ttl_arr[i].Comsum;
                }
            }
            coms_final_arr.push({
                Mix: coms_mix_fin_arr[c],
                Сonsumption: ttl_coms
            });
        }
      
      /*coms_total = coms_ttl_arr[0].Comsum;
      for (i = 1; i < coms_ttl_arr.length; i++) {

          a = (coms_ttl_arr[i].Mix);
          b = (coms_ttl_arr[i - 1].Mix);
          if (a != b) {
              coms_final_arr.push({
                  Mix: dec_table[i - 1].Mix,
                  Сonsumption: coms_total
              });
              coms_total = 0;
          }
          coms_total = coms_total + coms_ttl_arr[i].Comsum;
          if (i == coms_ttl_arr.length - 1) {
              coms_final_arr.push({
                  Mix: dec_table[i].Mix,
                  Сonsumption: coms_total
              });
          }
      }
      for (i = 0; i < coms_final_arr.length; i++) {
          for (j = i + 1; j < coms_final_arr.length; j++) {
              if (coms_final_arr[j].Mix == coms_final_arr[i].Mix) {
                  coms_final_arr[i].Сonsumption = coms_final_arr[i].Сonsumption + coms_final_arr[j].Сonsumption;
                  coms_final_arr.splice(j, 1);
              }
          }
      }
      */

      //CCR dive bailout dive. Remove first row from

      //Build Final Table
      body = document.getElementById("t_total_cons");

      tr = "";
      td = "";

      pdf_table_cons_arr = [];
      //price_cons_arr =[];

      firstTable = document.getElementById("t_total_cons");
      table = document.createElement("table");
      table.setAttribute("width", "100%");
      table.setAttribute("id", "opt_total_cons");

      tr = document.createElement("tr");
      tr.setAttribute("width", "100%");
      td = document.createElement("td");
      td.innerHTML = plan_lng("tab_tr_mix");
      pdf_table_cons_arr.push(plan_lng("tab_tr_mix"));
      tr.appendChild(td);

      td = document.createElement("td");
      td.innerHTML = plan_lng("tab_tr_coms");
      pdf_table_cons_arr.push(plan_lng("tab_tr_coms"));
      tr.appendChild(td);
      td = document.createElement("td");
      td.innerHTML = plan_lng("tab_tr_dmn");
      pdf_table_cons_arr.push(plan_lng("tab_tr_dmn"));
      tr.appendChild(td);

      table.appendChild(tr);

      //extract dipest mix from plan
      var dpst_mix = dipest_mix_ret(main_plan);

      for (i = 0; i < coms_final_arr.length; i++) {
          tr = document.createElement("tr");
          var aler_atr = "";


          //Make alerts if exist
          if (limit_return(coms_final_arr[i].Mix, coms_final_arr[i].Сonsumption, dpst_mix) != 0) {
              if (limit_return(coms_final_arr[i].Mix, coms_final_arr[i].Сonsumption, dpst_mix) == 2) {
                  aler_atr = "cons_wrn_deco_mix49";
              }
              if (limit_return(coms_final_arr[i].Mix, coms_final_arr[i].Сonsumption, dpst_mix) == 3) {
                  aler_atr = "cons_wrn_deco_mix50";
              }
              if (limit_return(coms_final_arr[i].Mix, coms_final_arr[i].Сonsumption, dpst_mix) == 4) {
                  aler_atr = "cons_wrn_deco_mix100";
              }

              //Bottom mix check
              if (limit_return(coms_final_arr[i].Mix, coms_final_arr[i].Сonsumption, dpst_mix) == 1) {
                  aler_atr = "cons_wrn_btm_mix";
              }
          } else
          //all is ok and no change
          {
              aler_atr = "tab_black";
          }

          td = document.createElement("td");
          td.setAttribute("class", aler_atr);
          text = document.createTextNode(plan_lng(coms_final_arr[i].Mix));
          pdf_table_cons_arr.push(plan_lng(coms_final_arr[i].Mix));

          td.appendChild(text);
          tr.appendChild(td);

          td = document.createElement("td");
          td.setAttribute("class", aler_atr);
          //liters
          if ($("#tn_dmn").val() == 1) {
              text = document.createTextNode(coms_final_arr[i].Сonsumption);
              pdf_table_cons_arr.push(coms_final_arr[i].Сonsumption);
          }
          //cubic foot
          if ($("#tn_dmn").val() == 2) {
              text = document.createTextNode((0.0353147 * coms_final_arr[i].Сonsumption).toFixed(2));
              pdf_table_cons_arr.push((0.0353147 * coms_final_arr[i].Сonsumption).toFixed(2));
          }
          td.appendChild(text);
          tr.appendChild(td);

          td = document.createElement("td");
          td.setAttribute("class", aler_atr);
          td.innerHTML = plan_lng("tab_dmn_ltr");
          pdf_table_cons_arr.push(plan_lng("tab_dmn_ltr"));
          tr.appendChild(td);

          table.appendChild(tr);
      }
      return body.appendChild(table);
  } else {
      //hide consumption because list is empty
      element_id_hide("7-header");
      element_id_hide("t_total_cons");
  }

}

//Compute limits is hi or lo and return true for alert or no
//c_mix - your mix for test. c_cons consumtion of your mix
//return marking if to much consumption
function limit_return(c_mix, c_cons, dpst_mix) {
  var gas_arr = gass_from_name_arr(c_mix);

  opt_wrn_btm_mix = document.getElementById("opt_wrn_btm_mix");
  opt_wrn_deco_mix49 = document.getElementById("opt_wrn_deco_mix49");
  opt_wrn_deco_mix50 = document.getElementById("opt_wrn_deco_mix50");
  opt_wrn_deco_mix100 = document.getElementById("opt_wrn_deco_mix100");

  opt_wrn_btm_mix_idx = opt_wrn_btm_mix.options[opt_wrn_btm_mix.selectedIndex].value;
  opt_wrn_deco_mix49_idx = opt_wrn_deco_mix49.options[opt_wrn_deco_mix49.selectedIndex].value;
  opt_wrn_deco_mix50_idx = opt_wrn_deco_mix50.options[opt_wrn_deco_mix50.selectedIndex].value;
  opt_wrn_deco_mix100_idx = opt_wrn_deco_mix100.options[opt_wrn_deco_mix100.selectedIndex].value;

  var ref_cons = 0;
  var mark_flag = 0;

  if (gas_arr[0] <= 49) {
      ref_cons = opt_wrn_deco_mix49_idx;
      mark_flag = 2;
  }
  if (gas_arr[0] > 49 && gas_arr[1] < 100) {
      ref_cons = opt_wrn_deco_mix50_idx;
      mark_flag = 3;
  }
  if (gas_arr[0] == 100) {
      ref_cons = opt_wrn_deco_mix100_idx;
      mark_flag = 4;
  }
  if (dpst_mix == coms_final_arr[i].Mix) {
      ref_cons = opt_wrn_btm_mix_idx;
      mark_flag = 1;
  }

  //make choice and return flag for changing css style or no
  if (parseFloat(c_cons) < parseFloat(ref_cons)) {
      mark_flag = 0;
  }
  return mark_flag;
}
//from table array return deepest gass name. Need for generation Consumption Alerts.
function dipest_mix_ret(plan_arr) {
  var dp_fraction = "";
  var temp_deep = 0;
  var columns = 5;
  var rows = ((plan_arr.length) - 1) / columns;
  var tick = 0;
  for (var i = 0; i < rows; i++) {
      for (var j = 0; j < columns; j++) {
          //Select Deep
          if (j == 1) {
              //Return deep as array

              var best_deep = depth_from_name_arr(plan_arr[tick]);

              //If double deep in array we need take dipest
              if (best_deep.length == 2) {
                  if (best_deep[0] > best_deep[1]) {
                      best_deep = best_deep[0];
                  } else {
                      best_deep = best_deep[1];
                  }
              }
              //or return single deep to best_deep
              else {
                  best_deep = best_deep[0];
              }

              //Compare temp_deep and selected best_deep
              if (temp_deep < best_deep) { //compute deepest
                  temp_deep = best_deep;
                  dp_fraction = plan_arr[tick + 3];
              }
          }
          tick = tick + 1;
      }
  }
  return dp_fraction;
}