
function upd_deco_gas_list(){
  var mix_deco = document.getElementById("opt_deco");
  var new_mx_arr = [];
  var mix_deco_idx = mix_deco.options[mix_deco.selectedIndex].value;
  
  //make array with new options values 
  for(c = 0 ; c < mix_deco_idx ; c++){
      tmp = document.getElementById("opt_deco_option_o2_" + (c + 1).toString()+"1");
      mix_deco_o2 = tmp.options[tmp.selectedIndex].value;
    
      tmp = document.getElementById("opt_deco_option_he_" + (c + 1).toString()+"2");
      mix_deco_he = tmp.options[tmp.selectedIndex].value;

      new_mx_arr.push(mix_deco_o2 , mix_deco_he);

      //update deco MOD array if changed
      var tmp = document.getElementById("opt_deco_option_mod_" + (c + 1).toString()+"3");
      var mix_deco_mod = tmp.options[tmp.selectedIndex].value;
      deco_mix_depth_arr[c] = mix_deco_mod;
  }
  
  //Comparing old and new array and find what the idx changed
  a = 0;
  o_idx = NaN;
  he_idx = NaN;
  start = 0;
  o_fr = 0;
  he_fr = 0;

  for(c = 0 ; c < mix_deco_idx ; c++){
    if(new_mx_arr[a]!=deco_mix_arr[a]){
      o_fr = new_mx_arr[a];
      he_fr = new_mx_arr[a+1];
      replacer = a;
      start = a;
      break;
    }
    if(new_mx_arr[a+1]!=deco_mix_arr[a+1]){
      o_fr = new_mx_arr[a];
      he_fr = new_mx_arr[a+1];
      replacer = a+1;
      start = a;
      break;
    }
    a = a + 2;
  }
  
  //Comparing old options value and if found inside identical
  //fix it dropping values to old option values.
  a = 0;
  for(c = 0 ; c < mix_deco_idx ; c++){
    if(a != start){
      if(new_mx_arr[a] == o_fr){
        if(new_mx_arr[a+1] == he_fr){
          new_mx_arr[replacer] = deco_mix_arr[replacer];
        }
      }
    }  
    a = a + 2;
  }
  //make changes inside gass array
  a = 0;
  for(c = 0 ; c < mix_deco_idx ; c++){
    mix_deco_o2 = new_mx_arr[a];
    if(mix_deco_o2 != parseInt(deco_mix_arr[a],0)){
      tmp1 = deco_mix_arr[a];
      deco_mix_arr[a] = mix_deco_o2;
      if((parseInt(deco_mix_arr[a],0) + parseInt(deco_mix_arr[a+1],0)) > 100){
        tmp2 = deco_mix_arr[a+1];
        deco_mix_arr[a+1] = 100 - parseInt(deco_mix_arr[a],0);
        b = 0;
        for(f = 0 ; f < mix_deco_idx ; f++){
          if(a != b){
            if(deco_mix_arr[b]==deco_mix_arr[a]){
              if(deco_mix_arr[b+1]==deco_mix_arr[a+1]){
               deco_mix_arr[a]=tmp1;
               deco_mix_arr[a+1]=tmp2;
               break;
              }
            }
          }
          b = b +2;
        }
        break;
      }
    }
    mix_deco_he = new_mx_arr[a+1];
    if(mix_deco_he != parseInt(deco_mix_arr[a+1],0)){
      tmp1 = deco_mix_arr[a+1];
      deco_mix_arr[a+1] = mix_deco_he;
      if(parseInt(deco_mix_arr[a+1],0) + parseInt(deco_mix_arr[a],0) > 100){
        tmp2 = deco_mix_arr[a];
        deco_mix_arr[a] = 100 - parseInt(deco_mix_arr[a+1],0);
        
        b = 0;
        for(f = 0 ; f < mix_deco_idx ; f++){
          if(a != b){
            if(deco_mix_arr[b]==deco_mix_arr[a]){
              if(deco_mix_arr[b+1]==deco_mix_arr[a+1]){
               deco_mix_arr[a+1]=tmp1;
               deco_mix_arr[a]=tmp2;
               break;
              }
            }
          }
          b = b +2;
        }
        break;
      }
    }
    a = a + 2;
  }
  upd_deco_list();
}

function upd_travel_gas_list(){
  var mix_travel = document.getElementById("opt_travel");
  var new_mx_arr = [];
  var mix_travel_idx = mix_travel.options[mix_travel.selectedIndex].value;
  
  //make array with new options values 
  for(c = 0 ; c < mix_travel_idx ; c++){
    tmp = document.getElementById("opt_travel_option_o2_"+(c+1).toString()+"1");
    mix_travel_o2 = tmp.options[tmp.selectedIndex].value;
    
    tmp = document.getElementById("opt_travel_option_he_"+(c+1).toString()+"2");
    mix_travel_he = tmp.options[tmp.selectedIndex].value;
    
    new_mx_arr.push(mix_travel_o2 , mix_travel_he);

      //update travel MOD array if changed
      var tmp = document.getElementById("opt_travel_option_mod_" + (c + 1).toString()+"3");
      var mix_travel_mod = tmp.options[tmp.selectedIndex].value;
      travel_mix_depth_arr[c] = mix_travel_mod;

  }
  
  //Comparing old and new array and find what the idx changed
  a = 0;
  start = 0;
  o_fr = new_mx_arr[a];
  he_fr = new_mx_arr[a+1];
  o_idx = NaN;
  he_idx = NaN;
  for(c = 0 ; c < mix_travel_idx ; c++){
    if(new_mx_arr[a]!=travel_mix_arr[a]){
      o_fr = new_mx_arr[a];
      he_fr = new_mx_arr[a+1];
      replacer = a;
      start = a;
      break;
    }
    if(new_mx_arr[a+1]!=travel_mix_arr[a+1]){
      o_fr = new_mx_arr[a];
      he_fr = new_mx_arr[a+1];
      replacer = a+1;
      start = a;
      break;
    }
    a = a + 2;
  }
  
  //Comparing old options value and if found inside identical
  //fix it droping values to old option values.
  a = 0;
  for(c = 0 ; c < mix_travel_idx ; c++){
    if(a != start){
      if(new_mx_arr[a] == o_fr){
        if(new_mx_arr[a+1] == he_fr){
          new_mx_arr[replacer] = travel_mix_arr[replacer];
        }
      }
    }  
    a = a + 2;
  }
  //make changes inside gass array
  a = 0;
  for(c = 0 ; c < mix_travel_idx ; c++){
    mix_travel_o2 = new_mx_arr[a];
    if(mix_travel_o2 != parseInt(travel_mix_arr[a],0)){
      tmp1 = travel_mix_arr[a];
      travel_mix_arr[a] = mix_travel_o2;
      if((parseInt(travel_mix_arr[a],0) + parseInt(travel_mix_arr[a+1],0)) > 100){
        tmp2 = travel_mix_arr[a+1];
        travel_mix_arr[a+1] = 100 - parseInt(travel_mix_arr[a],0);
        b = 0;
        for(f = 0 ; f < mix_travel_idx ; f++){
          if(a != b){
            if(travel_mix_arr[b]==travel_mix_arr[a]){
              if(travel_mix_arr[b+1]==travel_mix_arr[a+1]){
               travel_mix_arr[a]=tmp1;
               travel_mix_arr[a+1]=tmp2;
               break;
              }
            }
          }
          b = b +2;
        }
        break;
      }
    }
    mix_travel_he = new_mx_arr[a+1];
    if(mix_travel_he != parseInt(travel_mix_arr[a+1],0)){
      tmp1 = travel_mix_arr[a+1];
      travel_mix_arr[a+1] = mix_travel_he;
      if(parseInt(travel_mix_arr[a+1],0) + parseInt(travel_mix_arr[a],0) > 100){
        tmp2 = travel_mix_arr[a];
        travel_mix_arr[a] = 100 - parseInt(travel_mix_arr[a+1],0);
        
        b = 0;
        for(f = 0 ; f < mix_travel_idx ; f++){
          if(a != b){
            if(travel_mix_arr[b]==travel_mix_arr[a]){
              if(travel_mix_arr[b+1]==travel_mix_arr[a+1]){
               travel_mix_arr[a+1]=tmp1;
               travel_mix_arr[a]=tmp2;
               break;
              }
            }
          }
          b = b +2;
        }
        break;
      }
    }
    a = a + 2;
  }
  upd_travel_list();
}

//QSort array O2 fraction to list
function ret_qsort_arr(deco_mix_arr, mix_deco_idx){
  tmp_arr =[];
  for(e = 0 ; e < mix_deco_idx*2 ; e=e+2){
    tmp_arr.push(deco_mix_arr[e]);
  }
  tmp_arr.sort(function(a,b){return a-b;});
  
  return tmp_arr;
}

//Remove duplicated gases inside array
function fix_dup_mix_arr(mx_arr,mix_idx){
  for(x = 0 ; x < mix_idx ; x++){
    b=0;
    for(f = 0 ; f < mix_idx ; f++){
      a = 0;
      o2 = mx_arr[b];
      he = mx_arr[b+1];
      for(c = 0 ; c < mix_idx ; c++){
        tmp_arr = ret_qsort_arr(mx_arr, mix_idx);
        if(a!=b){
          if(mx_arr[a] == o2){
            if(mx_arr[a+1] == he){
                
                for(e = 1 ; e < tmp_arr.length ; e++){
                   if(e != tmp_arr[e]){
                     mx_arr[a] = e;
                     mx_arr[a+1] = (100.0-e).toFixed(0);
                     break;
                   }
                }
              break;
            }
          }
        }
        a=a+2;
      }
      b=b+2;
    }
  }
  return mx_arr;
}