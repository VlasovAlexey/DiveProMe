
//option only for numbers
function addOption (oListbox, text, value, isDefaultSelected, isSelected)
{
  var oOption = document.createElement("option");
  
  oOption.appendChild(document.createTextNode(text));
  oOption.setAttribute("value", value);
  oOption.setAttribute("id", value);

  if (isDefaultSelected) oOption.defaultSelected = true;
  else if (isSelected) oOption.selected = true;

  oListbox.appendChild(oOption);
}

//custom option for evrething you need
function addOption_custom (oListbox, text, value, isDefaultSelected, isSelected, tr_value, tr_disable)
{
    var oOption = document.createElement("option");

    oOption.appendChild(document.createTextNode(text));
    oOption.setAttribute("value", value);
    oOption.setAttribute("id", tr_value);
    oOption.setAttribute("class", tr_value);
    if(tr_disable == "disabled"){
        oOption.setAttribute("disabled", tr_disable);
    }
    if (isDefaultSelected) oOption.defaultSelected = true;
    else if (isSelected) oOption.selected = true;

    oListbox.appendChild(oOption);
}
/*create_option_nrm - only for INTEGER NUMBERS. After dot numbers must be specified manually.
htmls_id - select element inside your html to add
opt_id - id for new added select element.
start - start number
end - end number for option
selected_elm - what the option selected in the "select" list
step - steep of change
nrm_after_dot - how many numbers after dot
dmn_type - dimension type for correct conversion from meters to feet or from liters to cubic feet "none","vol" and "depth"
*/
function create_option(htmls_id , opt_id , start , end , selected_elm , nrm_step , nrm_after_dot, dmn_type){
  
  htmls_id = document.getElementById(htmls_id);
  tmp_div = document.createElement('select');
  tmp_div.setAttribute("id", opt_id);
  tmp_div.setAttribute("name", opt_id);
  tmp_div.setAttribute("class", opt_id);


  //not specified dimension e.g. time or partial pressures
  if(dmn_type === "none"){
      for(f = start ; f < end +nrm_step ; f = f + nrm_step){
          fixed_f = f.toFixed(nrm_after_dot);
          addOption (tmp_div, fixed_f , fixed_f , false , fixed_f == selected_elm);
      }
  }

    //meters and liters
    if($( "#tn_dmn" ).val() == 1){
        if(dmn_type === "vol" || dmn_type === "depth"){
            for(f = start ; f < end +nrm_step ; f = f + nrm_step){
                fixed_f = f.toFixed(nrm_after_dot);
                addOption (tmp_div, fixed_f , fixed_f , false , fixed_f == selected_elm);
            }
        }
        //bar
        if(dmn_type === "press"){
            for(f = start ; f < end +nrm_step ; f = f + nrm_step){
                fixed_f = f.toFixed(nrm_after_dot);
                addOption (tmp_div, fixed_f , fixed_f , false , fixed_f == selected_elm);
            }
        }
        //Celsius
        if(dmn_type === "temper"){
            for(f = start ; f < end +nrm_step ; f = f + nrm_step){
                fixed_f = f.toFixed(nrm_after_dot);
                addOption (tmp_div, fixed_f , fixed_f , false , fixed_f == selected_elm);
            }
        }
        //Depth for MOD, meters
        if(dmn_type === "depth_mod"){

            //Add first element "Auto"
            addOption (tmp_div, plan_lng("tn_deco_mod") , 0 , false , 0 == selected_elm);
            //And all other
            for(f = start ; f < end +nrm_step ; f = f + nrm_step){
                fixed_f = f.toFixed(nrm_after_dot);
                addOption (tmp_div, fixed_f , fixed_f , false , fixed_f == selected_elm);
            }
        }
    }

    //feet\cubic feet\PSI
    if($( "#tn_dmn" ).val() == 2){
        //volume dimension cubic feet
        if(dmn_type === "vol"){
            for(f = start ; f < end +nrm_step ; f = f + nrm_step){
                fixed_f = f.toFixed(nrm_after_dot);
                if(nrm_step > 1){
                    addOption (tmp_div, ((0.0353147 * fixed_f).toFixed(0)) , fixed_f , false , fixed_f == selected_elm);
                }
                else
                {
                    addOption (tmp_div, ((0.0353147 * fixed_f).toFixed(2)) , fixed_f , false , fixed_f == selected_elm);
                }

            }
        }
        //long dimension feet
        if(dmn_type === "depth"){
            for(f = start ; f < end +nrm_step ; f = f + nrm_step){
                fixed_f = f.toFixed(nrm_after_dot);
                addOption (tmp_div, (Math.ceil(3.28084 * fixed_f)) , fixed_f , false , fixed_f == selected_elm);
            }
        }
        //PSI
        if(dmn_type === "press"){
            for(f = start ; f < end +nrm_step ; f = f + nrm_step){
                fixed_f = f.toFixed(nrm_after_dot);
                addOption (tmp_div, ((14.5037738 * fixed_f).toFixed(1)), fixed_f , false , fixed_f == selected_elm);
            }
        }
        //Fahrenheit
        if(dmn_type === "temper"){
            for(f = start ; f < end +nrm_step ; f = f + nrm_step){
                fixed_f = f.toFixed(nrm_after_dot);
                addOption (tmp_div, (Math.floor((9 / 5) * fixed_f + 32)) , fixed_f , false , fixed_f == selected_elm);
            }
        }
        //Depth for MOD, feet
        if(dmn_type === "depth_mod"){
            //Add first element "Auto"
            addOption (tmp_div, plan_lng("tn_deco_mod") , 0 , false , 0 == selected_elm);
            for(f = start ; f < end +nrm_step ; f = f + nrm_step){
                fixed_f = f.toFixed(nrm_after_dot);
                addOption (tmp_div, (Math.ceil(3.28084 * fixed_f)) , fixed_f , false , fixed_f == selected_elm);
            }
        }
    }
    htmls_id.appendChild(tmp_div);
}

function create_option_arr(htmls_id , opt_id , selected_elm, tmp_arr){
  
  htmls_id = document.getElementById(htmls_id);
  tmp_div = document.createElement('select');
  tmp_div.setAttribute("id", opt_id);
  tmp_div.setAttribute("name", opt_id);
  tmp_div.setAttribute("class", "lvl_option_style");
  
  for(f = 0 ; f < tmp_arr.length ; f++){
    
    addOption (tmp_div, tmp_arr[f] , f , false , f+1 == selected_elm);

  }
  htmls_id.appendChild(tmp_div);
}


//Create various options with array e.g. selector for model
function create_custom_option_arr(htmls_id , opt_id , selected_elm, tmp_arr){

    htmls_id = document.getElementById(htmls_id);
    tmp_div = document.createElement('select');
    tmp_div.setAttribute("id", opt_id);
    tmp_div.setAttribute("name", opt_id);
    tmp_div.setAttribute("class", opt_id);

    for(f = 0 ; f < tmp_arr.length ; f++){

        addOption_custom (tmp_div, tmp_arr[f].text , f+1 , false , f+1 == selected_elm, tmp_arr[f].id, tmp_arr[f].isdisable);

    }
    htmls_id.appendChild(tmp_div);
}
/*Create text inside div.
htmls_id - select element inside your html to add
opt_id - id for new added select element
text - text what you want
*/
function create_html_text(htmls_id , opt_id , text){


      htmls_id = document.getElementById(htmls_id);

      tmp_div = document.createElement('div');
      tmp_div.setAttribute("id", opt_id);
      tmp_div.setAttribute("name", opt_id);
      tmp_div.setAttribute("class", opt_id);

      tmp_div.innerHTML = text;
      htmls_id.appendChild(tmp_div);
}


function del_html_elem(htmls_id){
  htmls_id = document.getElementById(htmls_id);
  htmls_id.innerHTML = "";
}
//Special changes for custom class changes only for level number option
function create_option_lvl(htmls_id , opt_id , start , end , selected_elm , nrm_step , nrm_after_dot){

  htmls_id = document.getElementById(htmls_id);
  tmp_div = document.createElement('select');
  tmp_div.setAttribute("id", opt_id);
  tmp_div.setAttribute("name", opt_id);
  tmp_div.setAttribute("class", "lvl_option_number_style");

    //meters\liters\bars
    if($( "#tn_dmn" ).val() == 1){
        for(f = start ; f < end +nrm_step ; f = f + nrm_step){
            fixed_f = f.toFixed(nrm_after_dot);
            addOption (tmp_div, fixed_f , fixed_f , false , fixed_f == selected_elm);
        }
    }

    //feet\cubic feet\bar
    if($( "#tn_dmn" ).val() == 2){
        //volume dimension cubic feet
        if(start >= 1){start = 2}
        /*
        for(f = (Math.floor(3.28084 * start)) ; f < (Math.floor(3.28084 * end)) +nrm_step ; f = f + nrm_step) {
            fixed_f = f.toFixed(nrm_after_dot);
            addOption(tmp_div, fixed_f, Math.floor(fixed_f * 0.3048) , false, fixed_f-1 == (Math.floor(3.28084 * selected_elm)));
        }
        */
        for(f = start ; f < end +nrm_step ; f = f + nrm_step){
            fixed_f = f.toFixed(nrm_after_dot);
            addOption (tmp_div, (Math.ceil(3.28084 * fixed_f)) , fixed_f , false , fixed_f == selected_elm);
        }
    }
  htmls_id.appendChild(tmp_div);
}
//Special changes for custom class changes only for level time option
function create_option_tm(htmls_id , opt_id , start , end , selected_elm , nrm_step , nrm_after_dot){

  htmls_id = document.getElementById(htmls_id);
  tmp_div = document.createElement('select');
  tmp_div.setAttribute("id", opt_id);
  tmp_div.setAttribute("name", opt_id);
  tmp_div.setAttribute("class", "lvl_option_time_style");

  for(f = start ; f < end +nrm_step ; f = f + nrm_step){
    fixed_f = f.toFixed(nrm_after_dot);
    addOption (tmp_div, fixed_f , fixed_f , false , fixed_f == selected_elm);
  }
  htmls_id.appendChild(tmp_div);
}

/*Create button inside div.
htmls_id - select element inside your html to add
opt_id - id for new added select element
on_click_fn - what the function start on btn click
*/
function create_html_button(htmls_id , opt_id , on_click_fn){

    htmls_id = document.getElementById(htmls_id);
    tmp_div = document.createElement('button');
    tmp_div.setAttribute("type", "button");
    tmp_div.setAttribute("id", opt_id);
    tmp_div.setAttribute("name", opt_id);
    tmp_div.setAttribute("class", opt_id);
    tmp_div.setAttribute("onClick", on_click_fn);

    //tmp_div.innerHTML = text;
    htmls_id.appendChild(tmp_div);
}
