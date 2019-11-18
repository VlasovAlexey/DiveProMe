//Build decompression table

  function dplan_sort_arr(tmp_arr){
    del_html_elem("t_table");
    
    dec_table = tmp_arr;
    pdf_table_export_arr = [];

    body = document.getElementById("t_table");
    columns = 5;
    rows = ((dec_table.length)-1)/columns;
    tr = "";
    td = "";
  
    firstTable = document.querySelector("#table");
    
    table = document.createElement("table");
    table.setAttribute("width", "100%");
      table.setAttribute("id", "opt_main_plan_table");
      table.setAttribute("class", "opt_main_plan_table");
    tick = 0;
    for (i = 0; i < rows; i++) {
      tr = document.createElement("tr");
      tr.setAttribute("width", "100%");

      clr = 0;
      gass_cng = 0;
      for (j = 0; j < columns; j++) {
        td = document.createElement("td");
        if(i === 0 && j === 0 ){
          td.setAttribute("id", "tab_action");
          td.setAttribute("class", "tab_action");
        }
        if(i === 0 && j === 1 ){
          td.setAttribute("id", "tab_depth");
          td.setAttribute("class", "tab_depth");
        }
        if(i === 0 && j === 2 ){
          td.setAttribute("id", "tab_time");
          td.setAttribute("class", "tab_time");
          }
        if(i === 0 && j === 3 ){
          td.setAttribute("id", "tab_rtime");
          td.setAttribute("class", "tab_rtime");
          }
        if(i === 0 && j === 4 ){
          td.setAttribute("id", "tab_mix");
          td.setAttribute("class", "tab_mix");
        }
        //make colors for levels and stops
        if(dec_table[tick] === "Level" ){
          clr = 1;
          td.setAttribute("class", "tab_black");
        }
        if(dec_table[tick] === "Stop" ){
          clr = 1;
          td.setAttribute("class", "tab_black");
        }
        if (clr === 1){
          td.setAttribute("class", "tab_black");
        }
        
        //Make horizontal lines if gass changed
        if (i > 1){
          if (j === 0){
            if(dec_table[tick+4].toString() !== dec_table[tick-1].toString() ){
              gass_cng = 1;

                //Prepare check for IBCD Alert
                var dp1 = depth_from_name_arr(dec_table[tick-1]);
                dp1 = dp1[0];

                //Find Ascent or descend after gas changed
                //If descent do nothing. Otherwise check for IBCD Alert
                for ( var k = i; k > 0; k-- ) {
                    dp_state = "Level";
                    var dp2 = depth_from_name_arr(dec_table[columns*k+1]);
                    //One depth returned do nothing
                    if(dp2.length < 2 && dp1 !== dp2[0]){
                        dp_state = "Level";
                    }
                    //Two depth returned
                    else{
                        //console.log("1dp: " + dp2[0] + ", 2dp: " + dp2[1]);
                        if(dp2[0] < dp2[1]){
                            dp_state = "Descent";
                            break;
                        }
                        else{

                            //Extract depth changed gas
                            dp1 = depth_from_name_arr(dec_table[tick+1]);
                            dp1 = dp1[0];

                            var gas1 = gass_from_name_arr(dec_table[tick+4]);
                            var gas2 = gass_from_name_arr(dec_table[tick-1]);

                            var diff_he = Math.abs(((dp1*0.1+1)*(0.01*gas1[2]))- ((dp1*0.1+1)*(0.01*gas2[2]))).toFixed(2);
                            var diff_n2 = Math.abs(((dp1*0.1+1)*(0.01*gas1[1]))- ((dp1*0.1+1)*(0.01*gas2[1]))).toFixed(2);
                              /*
                            console.log( dp1);
                            console.log(gas1 +" , " + gas2);
                            console.log("helium: " + diff_he);
                            console.log("n2: " + diff_n2);
                        */
                            //get IBCD limits from GUI
                            var he_limit = document.getElementById("opt_ibcd_pphe");
                            var opt_ibcd_pphe_idx = he_limit.options[he_limit.selectedIndex].value;

                            var n2_limit = document.getElementById("opt_ibcd_ppn2");
                            var opt_ibcd_ppn2_idx = n2_limit.options[n2_limit.selectedIndex].value;

                            //Check for IBCD N2 or He limits is crossed
                            if(diff_n2 >= opt_ibcd_ppn2_idx){
                                dp_state = "N2_WRN!";
                            }
                            if(diff_he >= opt_ibcd_pphe_idx){
                                dp_state = "He_WRN!";
                            }

                            //prepare to compute lipid response IBCD
                            //get IBCD lipids check state from GUI
                            var icd_lip_check = document.getElementById("opt_wrn_ibcd_lip");
                            var opt_ibcd_lip_idx = parseInt(icd_lip_check.options[icd_lip_check.selectedIndex].value);

                            //if yes check it
                            if (opt_ibcd_lip_idx == 1){
                                var he_diff = Math.abs(gas1[2]-gas2[2]);
                                var n2_diff = Math.abs(gas1[1]-gas2[1]);

                                /*
                                console.log(gas1);
                                console.log(gas2);
                                console.log("he diff:"+he_diff);
                                console.log("n2 diff:"+n2_diff);
                                console.log("he/5: "+he_diff/5+" , n2: " + n2_diff);
                                */

                                //check for 1/5 he to n2 ratio
                                if((he_diff/5) < n2_diff && he_diff !== 0 ){
                                    dp_state = "LIP_WRN!";
                                }

                            }
                            break;
                        }
                    }
                }
                //console.log(dp_state);
            }
            else
            {
              td.setAttribute("id", "gs_sv_brd_thin");
            }
          }
        }
        if(gass_cng === 1){
            td.setAttribute("id", "gs_sv_brd");

            //diver going up and gas changed
            if(dp_state === "N2_WRN!") {
                td.setAttribute("id", "gs_n2_limit_wrn");
            }
            if(dp_state === "He_WRN!") {
                td.setAttribute("id", "gs_he_limit_wrn");
            }
            if(dp_state === "LIP_WRN!") {
                td.setAttribute("id", "gs_lip_limit_wrn");
            }
        }
        text = document.createTextNode(plan_lng(dec_table[tick]));
        pdf_table_export_arr.push(plan_lng(dec_table[tick]));

        td.appendChild(text);
        tr.appendChild(td);
        tick = tick+1;
      }
      table.appendChild(tr);
    }
      
    if (firstTable === null) {
      return body.appendChild(table);
    }
    else
    {
      var newTable = body.appendChild(table);
      return body.replaceChild(newTable, firstTable);
    }
  }
  //Build PP table
  function dplan_press_arr(tmp_arr){
    del_html_elem("t_press");
    
    //tmp_arr.splice(0,5);
    dec_table = tmp_arr;

    //console.log(dec_table);


    body = document.getElementById("t_press");
    columns = 5;
    rows = ((dec_table.length)-1)/columns;
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
    //ppo2_array.push([0 , 0.21]);

    for (i = 0; i < rows; i++) {
      tr = document.createElement("tr");
      tr.setAttribute("width", "100%");
      clr = 0;
      gass_cng = 0;
      for (j = 0; j < columns; j++) {
        if(j < 3){
        td = document.createElement("td");
        }
        //make colors for columns
        if(j === 0 && i !== 0){
          td.setAttribute("class", "tab_o2");
        }
        if(j === 1 && i !== 0){
          td.setAttribute("class", "tab_n2");
        }
        if(j === 2 && i !== 0){
          td.setAttribute("class", "tab_he");
        }
        
        //Make horizontal lines if gass changed
        if (i > 1){
          if (j === 0){
            if(dec_table[tick+4].toString() != dec_table[tick-1].toString() ){
              gass_cng = 1;
              td.setAttribute("id", "gs_sv_brd");
            }
            else
            {
              td.setAttribute("id", "gs_sv_brd_thin");
            }
          }
        }
        if(gass_cng == 1){
          td.setAttribute("id", "gs_sv_brd");
        }
        
        if(i > 0){
          //for oxygen
          if(j === 0){
            depth = depth_from_name_arr(dec_table[tick+1]);
            time_add = time_to_dec_time(dec_table[tick+2]);
            //console.log(time_add);
              // console.log(time_base);

            depth_start = depth[0];
            if(depth.length > 1){
              depth_end = depth[1];
            }
            else
            {
              depth_end = depth[0];
            }
            o2_fr = gass_from_name_arr(dec_table[tick+4]);
            o2_fr = o2_fr[0];
            o2_fr_start = ((o2_fr*(depth_start+10)*0.001)).toFixed(2);
            o2_fr_end = ((o2_fr*(depth_end+10)*0.001)).toFixed(2);
            if(depth_start == depth_end){
                text = document.createTextNode(o2_fr_start);
                ppo2_array.push([1*(time_base).toFixed(1) , 1*parseFloat(o2_fr_start).toFixed(2)]);
                ppo2_array.push([1*(time_base+time_add).toFixed(1) , 1*parseFloat(o2_fr_start).toFixed(2)]);
            }
            else
            {
                text = document.createTextNode(o2_fr_start+"-"+o2_fr_end);
                ppo2_array.push([1*(time_base).toFixed(1) , 1*parseFloat(o2_fr_start).toFixed(2)]);
                ppo2_array.push([1*(time_base+time_add).toFixed(1) , 1*parseFloat(o2_fr_end).toFixed(2)]);
            }

              //console.log(time_base);
          }
          //for nitrogen
          if(j == 1){
            depth = depth_from_name_arr(dec_table[tick]);
            depth_start = depth[0];
            if(depth.length > 1){
              depth_end = depth[1];
            }
            else
            {
              depth_end = depth[0];
            }
            
            n2_fr = gass_from_name_arr(dec_table[tick+3]);
            n2_fr = n2_fr[1];
            n2_fr_start = ((n2_fr*(depth_start+10)*0.001)).toFixed(2);
            n2_fr_end = ((n2_fr*(depth_end+10)*0.001)).toFixed(2);
            if(depth_start == depth_end){
                text = document.createTextNode(n2_fr_start);
                ppn2_array.push([1*(time_base).toFixed(1) , 1*parseFloat(n2_fr_start).toFixed(2)]);
                ppn2_array.push([1*(time_base+time_add).toFixed(1) , 1*parseFloat(n2_fr_start).toFixed(2)]);
            }
            else
            {
                text = document.createTextNode(n2_fr_start+"-"+n2_fr_end);
                ppn2_array.push([1*(time_base).toFixed(1) , 1*parseFloat(n2_fr_start).toFixed(2)]);
                ppn2_array.push([1*(time_base+time_add).toFixed(1) , 1*parseFloat(n2_fr_end).toFixed(2)]);
            }
          }
          //and for helium if exist
          if(j == 2){
            depth = depth_from_name_arr(dec_table[tick-1]);
            depth_start = depth[0];
            if(depth.length > 1){
              depth_end = depth[1];
            }
            else
            {
              depth_end = depth[0];
            }
            
            he_fr = gass_from_name_arr(dec_table[tick+2]);
            he_fr = he_fr[2];
            he_fr_start = ((he_fr*(depth_start+10)*0.001)).toFixed(2);
            he_fr_end = ((he_fr*(depth_end+10)*0.001)).toFixed(2);
            if(depth_start == depth_end){
                text = document.createTextNode(he_fr_start);
                pphe_array.push([1*(time_base).toFixed(1) , 1*parseFloat(he_fr_start).toFixed(2)]);
                pphe_array.push([1*(time_base+time_add).toFixed(1) , 1*parseFloat(he_fr_start).toFixed(2)]);
            }
            else
            {
              text = document.createTextNode(he_fr_start+"-"+he_fr_end);
                pphe_array.push([1*(time_base).toFixed(1) , 1*parseFloat(he_fr_start).toFixed(2)]);
                pphe_array.push([1*(time_base+time_add).toFixed(1) , 1*parseFloat(he_fr_end).toFixed(2)]);
            }
            //hack for update because in one function we build many tables with different columns and data
              time_base = time_base + time_add;
          }



          if(j == 3){
            depth = depth_from_name_arr(dec_table[tick-2]);
            depth_start = depth[0];
            if(depth.length > 1){
              depth_end = depth[1];
            }
            else
            {
              depth_end = depth[0];
            }
            
            opt_rmv_deco = document.getElementById("opt_rmv_deco");
            opt_rmv_bt = document.getElementById("opt_rmv_bt");

            
            opt_rmv_bt_idx = opt_rmv_bt.options[opt_rmv_bt.selectedIndex].value;
            
            
            time1 = time_to_dec_time(dec_table[tick-1]);
            
            //console.log(time1);
            coms = Math.ceil((time1) * (((depth_end + depth_start)*0.5)*0.1+1) * opt_rmv_bt_idx);
         
          }
         
          if(j < 3){
            td.appendChild(text);
          }

        }
        else
        {
          if(i === 0 && j === 0 ){
            td.setAttribute("id", "tab_td_o2");
            td.setAttribute("class", "tab_td_o2");
            td.innerHTML = plan_lng("tab_tr_o2");
          }
          if(i === 0 && j === 1 ){
            td.setAttribute("id", "tab_td_n2");
            td.setAttribute("class", "tab_td_n2");
            td.innerHTML = plan_lng("tab_tr_n2");
          }
          if(i === 0 && j === 2 ){
            td.setAttribute("id", "tab_td_he");
            td.setAttribute("class", "tab_td_he");
            td.innerHTML = plan_lng("tab_tr_he");
            }
          if(i === 0 && j === 3 ){
            td.setAttribute("id", "tab_td_coms");
            td.setAttribute("class", "tab_td_coms");
            //td.innerHTML = plan_lng("tab_tr_coms");
            //text = document.createTextNode("");
          }
          if(i === 0 && j === 4 ){
            td.setAttribute("id", "tab_time");
            td.setAttribute("class", "tab_time");
            //td.innerHTML = plan_lng("tab_tr_mix");
            //text = document.createTextNode("");
          }
        }
        if(j < 3){
          tr.appendChild(td);
        }


        tick = tick+1;
      }
      if(j < 3){
          tr.appendChild(td);
        }
      table.appendChild(tr);
    }
      //console.log(ppo2_array);
    return body.appendChild(table);

  }
  
//Build Cons table
  function dplan_cons_arr(tmp_arr){
    del_html_elem("t_cons");
    columns = 5;
    rows = ((tmp_arr.length)-1)/columns;
    tick = 0;
    dec_table = [];
    //dec_table.push("Mix","Cons", "Time", "Dimension");
    
    for (i = 0; i < rows; i++) {
      for (j = 0; j < columns; j++) {
        
          if(j == 1){
           dec_table.push(tmp_arr[tick],tmp_arr[tick+1], tmp_arr[tick+3], "litres"); 
          }
          
        
        tick = tick + 1;
      }
      
    }
    
    body = document.getElementById("t_cons");
    columns = 4;
    rows = ((dec_table.length)-1)/columns;
    tr = "";
    td = "";
  
    firstTable = document.getElementById("t_cons");
    
    table = document.createElement("table");
    table.setAttribute("width", "100%");

    //pdf_table_cons_arr =[];
    
    tick = 0;
    clr = 0;
    for (i = 0; i < rows; i++) {
      tr = document.createElement("tr");
      tr.setAttribute("width", "100%");
      gass_cng = 0;
      for (j = 0; j < columns; j++) {

        td = document.createElement("td");
        //Make horizontal lines if gass changed
        if (i > 1){
          if (j === 0 ){
            if(dec_table[tick+2].toString() != dec_table[tick-2].toString() ){
                gass_cng = 1;
                td.setAttribute("id", "gs_sv_brd");
                if (clr === 0) {
                    clr = 1;
                }
                else {
                    clr = 0;
                }
            }
            else
            {
              td.setAttribute("id", "gs_sv_brd_thin");
            }
          }
        }
        
        if(gass_cng == 1){
          td.setAttribute("id", "gs_sv_brd");
        }
        if(clr == 1){
          td.setAttribute("class", "tr_coms_dark");
        }
        else
        {
          td.setAttribute("class", "tr_coms_light");
        }
        if(i > 0){
          if(j == 1){
            depth = depth_from_name_arr(dec_table[tick-1]);
            depth_start = depth[0];
            if(depth.length > 1){
              depth_end = depth[1];
            }
            else
            {
              depth_end = depth[0];
            }
            
            opt_rmv_deco = document.getElementById("opt_rmv_deco");
            opt_rmv_bt = document.getElementById("opt_rmv_bt");
            opt_rmv_bt_idx = opt_rmv_bt.options[opt_rmv_bt.selectedIndex].value;
            opt_rmv_deco_idx = opt_rmv_deco.options[opt_rmv_deco.selectedIndex].value;
            
            time1 = time_to_dec_time(dec_table[tick]);
            
            if (i-2 < (lvl_arr.length/3)*2){
              coms = Math.ceil((time1) * (((depth_end + depth_start)*0.5)*0.1+1) * opt_rmv_bt_idx);
            }
            else
            {
              coms = Math.ceil((time1) * (((depth_end + depth_start)*0.5)*0.1+1) * opt_rmv_deco_idx);
            }
            text = document.createTextNode(coms);
            td.appendChild(text);
          }
          if(j === 0){
            text = document.createTextNode(plan_lng(dec_table[tick+2]));
            //pdf_table_cons_arr.push(plan_lng(dec_table[tick+2]));

            td.appendChild(text);
          }
          if(j == 2){
            text = document.createTextNode(dec_table[tick-1]);
              //pdf_table_cons_arr.push(plan_lng(dec_table[tick-1]));
            td.appendChild(text);
          }
          if(i > 0 && j == 3){
            td.innerHTML = plan_lng("tab_dmn_ltr");
            //pdf_table_cons_arr.push (plan_lng("tab_dmn_ltr"));
            //td.appendChild(text);
          }
          
        }
        else
        {
          if(i === 0 && j === 0 ){
            td.setAttribute("id", "tab_td_he");
            td.setAttribute("class", "tab_td_he");
            td.innerHTML = plan_lng("tab_tr_mix");
            }
          if(i === 0 && j === 1 ){
            td.setAttribute("id", "tab_td_coms");
            td.setAttribute("class", "tab_td_coms");
            td.innerHTML = plan_lng("tab_tr_coms");
            //text = document.createTextNode("");
          }
          if(i === 0 && j === 2 ){
            td.setAttribute("id", "tab_td_time");
            td.setAttribute("class", "tab_td_time");
            td.innerHTML = plan_lng("tab_tr_time");
            
          }
          if(i === 0 && j === 3 ){
            td.setAttribute("id", "tab_td_dmn");
            td.setAttribute("class", "tab_td_dmn");
            td.innerHTML = plan_lng("tab_tr_dmn");
            
          }
        }
        tr.appendChild(td);
        tick = tick+1;
      }
      tr.appendChild(td);
      table.appendChild(tr);
    }
    return body.appendChild(table);
  }
    
//Extract Gass Fraction from Gass Name
function gass_from_name_arr(tmp_arr){
  gass_fr_arr = [];
  //very strange manipulation need explain from Anton
  tmp_arr = tmp_arr.toString();
  if((tmp_arr.toString().substr(0, 3)) == "Tmx"){
    
    a = tmp_arr.substr(3, tmp_arr.length-3);
    for (var f = 0; f < a.length; f++){
      if(a.charAt(f) == "/"){
          o2 = parseFloat(a.substr(0, f));
          he = parseFloat(a.substr(f+1, a.length - f - 1));
          break;
        }
      }
    n2 = 100 - o2 - he;
  }
  if(tmp_arr.toString() == "OXY"){
    n2 = 0;
    o2 = 100;
    he = 0;
  }
  if(tmp_arr.toString() == "Air"){
    n2 = 79;
    o2 = 21;
    he = 0;
  }
  if((tmp_arr.toString().substr(0, 3)) == "EAN"){
    
    o2 = parseFloat(tmp_arr.toString().substr(3, tmp_arr.length-3));
    n2 = 100 - o2;
    he = 0;
  }
  
  gass_fr_arr.push(o2,n2,he);
  return gass_fr_arr;
}

//Extract depth from Depth txt
function depth_from_name_arr(tmp_arr){
  depth_name_arr = [];
  a = tmp_arr.toString();
  
  if(a.indexOf("-") != -1){
  for (var f = 0; f < a.length; f++){
    if(a.charAt(f) == "-"){
      first = parseFloat(a.substr(0, f));
      second = parseFloat(a.substr(f+1, (a.length - f - 1)));
      depth_name_arr.push(first , second);
      break;
      }
    }
  }
  else
  {
    depth_name_arr.push(parseFloat(a));
  }
  return depth_name_arr;
}

//real time format xx:xx to dec time equal
  function time_to_dec_time(tmp_time){
    tmp_time = tmp_time.toString();
    for (var f = 0; f < tmp_time.length; f++){
    if(tmp_time.charAt(f) == ":"){
      mins = parseFloat(tmp_time.substr(0, f));
      seconds = parseFloat(tmp_time.substr(f+1, (tmp_time.length - f - 1)));
      tmp_time =parseFloat( mins + ((seconds/60*100)*0.01));
      break;
      }
    }
    return tmp_time;
  }
  
//Total Gass Computation
  function total_gass_arr(tmp_arr){
    del_html_elem("t_total_cons");
    tmp_arr.splice(0,5);
    
    columns = 5;
    rows = ((tmp_arr.length)-1)/columns;
    tick = 0;
    dec_table = [];
    //dec_table.push("Mix","Cons", "Time", "Dimension");
    
    for (i = 0; i < rows; i++) {
      for (j = 0; j < columns; j++) {
        
          if(j === 0){
           dec_table.push(
            {
              Mix: tmp_arr[tick+4].toString(),
              Depth: tmp_arr[tick+1],
              Time: tmp_arr[tick+2]
            }
          ); 
        }
        tick = tick + 1;
      }
    }
    tick = 0;
    gas_swich = 0;
    coms_ttl_arr = [];
    for (i = 0; i < dec_table.length; i++) {
      
      depth = depth_from_name_arr(dec_table[tick].Depth);
      depth_start = depth[0];
      if(depth.length > 1){
        depth_end = depth[1];
      }
      else
      {
        depth_end = depth[0];
      }
      opt_rmv_deco = document.getElementById("opt_rmv_deco");
      opt_rmv_bt = document.getElementById("opt_rmv_bt");
      opt_rmv_bt_idx = opt_rmv_bt.options[opt_rmv_bt.selectedIndex].value;
      opt_rmv_deco_idx = opt_rmv_deco.options[opt_rmv_deco.selectedIndex].value;
            
      time1 = time_to_dec_time(dec_table[tick].Time);
      
      //select consumption rate deco or bottom
      if (i-1 < (lvl_arr.length/3)*2){
        coms = Math.ceil((time1) * (((depth_end + depth_start)*0.5)*0.1+1) * opt_rmv_bt_idx);
      }
      else
      {
        coms = Math.ceil((time1) * (((depth_end + depth_start)*0.5)*0.1+1) * opt_rmv_deco_idx);
      }
      
      coms_ttl_arr.push(
        {
          Mix: dec_table[tick].Mix,
          Comsum: coms
        }
      );
      tick = tick + 1;
    }
    coms_final_arr = [];
    coms_total = coms_ttl_arr[0].Comsum;
    for (i = 1; i < coms_ttl_arr.length; i++) {
      
      a = (coms_ttl_arr[i].Mix);
      b = (coms_ttl_arr[i-1].Mix);
      if(a != b){
        coms_final_arr.push(
        {
          Mix: dec_table[i-1].Mix,
          Сonsumption: coms_total
        }
      );
        coms_total = 0;
      }
      coms_total = coms_total + coms_ttl_arr[i].Comsum;
      if(i == coms_ttl_arr.length-1){
        coms_final_arr.push(
        {
          Mix: dec_table[i].Mix,
          Сonsumption: coms_total
        }
      );
      }
  }
  for (i = 0; i < coms_final_arr.length; i++) {
    for (j = i+1; j < coms_final_arr.length; j++) {
      if(coms_final_arr[j].Mix == coms_final_arr[i].Mix){
        coms_final_arr[i].Сonsumption = coms_final_arr[i].Сonsumption + coms_final_arr[j].Сonsumption;
        coms_final_arr.splice(j,1);
      }
    }
  }
  
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
      if(limit_return(coms_final_arr[i].Mix , coms_final_arr[i].Сonsumption , dpst_mix) != 0){
         if(limit_return(coms_final_arr[i].Mix,coms_final_arr[i].Сonsumption , dpst_mix) == 2){aler_atr ="cons_wrn_deco_mix49"};
         if(limit_return(coms_final_arr[i].Mix,coms_final_arr[i].Сonsumption , dpst_mix) == 3){aler_atr ="cons_wrn_deco_mix50"};
         if(limit_return(coms_final_arr[i].Mix,coms_final_arr[i].Сonsumption , dpst_mix) == 4){aler_atr ="cons_wrn_deco_mix100"};

         //Bottom mix check
          if(limit_return(coms_final_arr[i].Mix,coms_final_arr[i].Сonsumption , dpst_mix) == 1){aler_atr ="cons_wrn_btm_mix"};
     }
     else
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
    text = document.createTextNode(coms_final_arr[i].Сonsumption);
    pdf_table_cons_arr.push(coms_final_arr[i].Сonsumption);
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
}

//Compute limits is hi or lo and return true for alert or no
//c_mix - your mix for test. c_cons consumtion of your mix
//return marking if to much consumption
function limit_return(c_mix,c_cons, dpst_mix){
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

    if(gas_arr[0] <= 49){
        ref_cons = opt_wrn_deco_mix49_idx;
        mark_flag = 2;
    }
    if(gas_arr[0] > 49 && gas_arr[1] < 100){
        ref_cons = opt_wrn_deco_mix50_idx;
        mark_flag = 3;
    }
    if(gas_arr[0] == 100){
        ref_cons = opt_wrn_deco_mix100_idx;
        mark_flag = 4;
    }
    if(dpst_mix == coms_final_arr[i].Mix){
        ref_cons = opt_wrn_btm_mix_idx;
        mark_flag = 1;
    }



    //make choice and return flag for changing css style or no
    //console.log(c_cons);
    //console.log(ref_cons);

    if(parseFloat(c_cons) < parseFloat(ref_cons)){
        mark_flag = 0;
    }

    return mark_flag;
}
//from table array return dipest gass name. Need for generation Consumption Alerts.
function dipest_mix_ret(plan_arr){
    var dp_fraction = "";
    var temp_deep = 0;
    var columns = 5;
    var rows = ((plan_arr.length)-1)/columns;
    var tick = 0;
    for (var i = 0; i < rows; i++) {
        for (var j = 0; j < columns; j++) {
          //Select Deep
          if (j == 1){
            //Return deep as array

              var best_deep = depth_from_name_arr(plan_arr[tick]);

              //If double deep in array we need take dipest
              if(best_deep.length == 2){
                if(best_deep[0]>best_deep[1]){
                    best_deep = best_deep[0];
                }
                else{
                    best_deep = best_deep[1];
                }
              }
              //or return single deep to best_deep
              else
              {
                  best_deep = best_deep[0];
              }

              //Compare temp_deep and selected best_deep
              if(temp_deep < best_deep){//compute deepest
                  temp_deep = best_deep;
                  dp_fraction = plan_arr[tick + 3];
              }
          }
          tick = tick+1;
        }
    }
    return dp_fraction
}