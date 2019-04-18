
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
/*create_option_nrm - only for INTIGER NUMBERS. After dot numbers must be specifed manuality.
htmls_id - select element inside your html to add
opt_id - id for new added select element.
start - start number
end - end number for option
selected_elm - what the option selected in the "select" list
step - steep of change
nrm_after_dot - how many numbers after dot
*/
function create_option(htmls_id , opt_id , start , end , selected_elm , nrm_step , nrm_after_dot){
  
  htmls_id = document.getElementById(htmls_id);
  tmp_div = document.createElement('select');
  tmp_div.setAttribute("id", opt_id);
  tmp_div.setAttribute("name", opt_id);
  tmp_div.setAttribute("class", opt_id);
  
  for(f = start ; f < end +nrm_step ; f = f + nrm_step){
    fixed_f = f.toFixed(nrm_after_dot);
    addOption (tmp_div, fixed_f , fixed_f , false , fixed_f == selected_elm);
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
  
  for(f = start ; f < end +nrm_step ; f = f + nrm_step){
    fixed_f = f.toFixed(nrm_after_dot);
    addOption (tmp_div, fixed_f , fixed_f , false , fixed_f == selected_elm);
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
