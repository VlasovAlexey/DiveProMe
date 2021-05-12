
//check if is IOS
function IsIOS(){
    return false;
}

function IOS_CheckPlatform(value){
    if(value == true){
        //hide Android Buttons
        element_id_hide("btn_msg");
        element_id_hide("btn_tel");
        //hide IOS Buttons
        element_id_hide("btn_ios_msg");
        element_id_hide("btn_ios_tel");
    }
    else{
        //hide IOS Buttons
        element_id_hide("btn_ios_msg");
        element_id_hide("btn_ios_tel");
    }
}
IOS_CheckPlatform(false);
