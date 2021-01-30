//Add level to level list
function btn_add_lvl(){
  if(lvl_arr.length < 299){
    
    lvl_arr.push(1);
    lvl_arr.push(lvl_arr[lvl_arr.length-3]);
    lvl_arr.push(lvl_arr[lvl_arr.length-3]);
    
    lvl_mix_arr.push(lvl_mix_arr[lvl_mix_arr.length-2]);
    lvl_mix_arr.push(lvl_mix_arr[lvl_mix_arr.length-2]);
    
    upd_lvl_list();
    upd_all();  
  }
}
//Remove level to level list
function btn_del_lvl(){
  if(lvl_arr.length > 3){
    
    lvl_arr.pop();
    lvl_arr.pop();
    lvl_arr.pop();
    
    lvl_mix_arr.pop();
    lvl_mix_arr.pop();
    
    upd_lvl_list();
    upd_all();  
  }
}

//Export plan Table and Consumption Table to PDF
function btn_export_tbl_plan_pdf(){

    var doc = new jsPDF();
    // set properties on the document
    doc.setProperties({
        title: "DiveProMe "+ plan_lng("ch_tbl_name") + " " + plan_lng("ch_depth") + ' ' + ld_dp + plan_lng("ch_mtr"),
        subject: plan_lng("ch_tbl_name"),
        author: "Alexey Vlasov",
        keywords: 'generated, javascript, web 2.0, ajax',
        creator: "DiveProMe"
    });

    //Header name and text
    doc.setFont('Arial_Digiscream_Normal');
    doc.setFontSize(10);
    doc.setTextColor(30,30,30);
    doc.text(15,10,"DiveProMe "+ plan_lng("ch_tbl_name") + " " + plan_lng("ch_depth") + ' ' + ld_dp + plan_lng("ch_mtr"));

    var j = 0;
    var i = 0;

    var pdf_fin_arr =[];
    var tick = 5;

    for (j = 0; j < (pdf_table_export_arr.length-1)/5-1; j++) {
        var tmp_arr = [];
        for (i = 0; i < 5; i++) {
            var a = (pdf_table_export_arr[tick]).toString();
            a = a.replace("-", "-->");
            tmp_arr.push(a);
            tick = tick+1;
        }
        pdf_fin_arr.push(tmp_arr);
    }
    //console.log(doc);

    doc.autoTable({
        styles: {
            //font: 'Arial_Digiscream_Normal'
        },
        headStyles: { //fontStyle: 'Arial_Digiscream_Normal'
            },
        head: [[pdf_table_export_arr[0], pdf_table_export_arr[1], pdf_table_export_arr[2],pdf_table_export_arr[3],pdf_table_export_arr[4]]],

        body: pdf_fin_arr
    });

    //add another page with total gas consumption
    if($( "#tn_plan_ccr" ).val() == 1){
        //OC
        pdf_add_total_cons(doc);
    }
    else{

        //CCR
        if(opt_blt_dln == 1){
            //Bailout
            pdf_add_total_cons(doc);
        }
        else{
            //Diluent
        }
    }

    //add table with OTU and CNS

    doc.autoTable({
        styles: {
            font: 'Arial_Digiscream_Normal'
        },
        headStyles: {
            fontStyle: 'Arial_Digiscream_Normal',
            fillColor: "#ff89a9"
        }
        ,
        head: [[pdf_table_otu_cns_arr[0] , pdf_table_otu_cns_arr[1]]],

        body: [[pdf_table_otu_cns_arr[2] , pdf_table_otu_cns_arr[3]]]
    });

    //Save build to pdf file
    //if node js enabled use special file save dialog
    if(node_enable()===true){
        NodesaveFile("#nodejs_export_pdf", doc.output() , false);
    }
    //else standart web based datauri64 blob save file for all browser
    else {
        doc.save("DiveProMe " + plan_lng("ch_tbl_name") + " " + plan_lng("ch_depth") + ' ' + ld_dp + (plan_lng("ch_mtr")).replace(".", "") + ".pdf");
    }
}

//Function add consumption to PDF
function pdf_add_total_cons(doc){
    //doc.addPage();
    //doc.text(15,10,"DiveProMe "+ plan_lng("ch_tbl_cons") + ". " + plan_lng("ch_depth") + ' ' + ld_dp + plan_lng("ch_mtr"));
    var j = 0;
    var i = 0;

    var pdf_fin_arr =[];
    var tick = 3;

    for (j = 0; j < (pdf_table_cons_arr.length-1)/3-1; j++) {
        var tmp_arr = [];
        for (i = 0; i < 3; i++) {
            var a = (pdf_table_cons_arr[tick]).toString();
            tmp_arr.push(a);
            tick = tick+1;
        }
        pdf_fin_arr.push(tmp_arr);
    }
    doc.autoTable({
        styles: {
            font: 'Arial_Digiscream_Normal'
        },
        headStyles: {
            fontStyle: 'Arial_Digiscream_Normal',
            fillColor: "#ff6700"
        }
        ,
        head: [[pdf_table_cons_arr[0], pdf_table_cons_arr[1], pdf_table_cons_arr[2]]],

        body: pdf_fin_arr
    });
}

//Export XLS Table
function btn_export_xls(){
    //create workbook
    var wb = XLSX.utils.book_new();

    //get table
    var tbl = document.getElementById("opt_main_plan_table");

    //create sheet with table
    var ws = XLSX.utils.table_to_sheet(tbl , {
            raw : true
        }
    );

    //add to selected workbook
    XLSX.utils.book_append_sheet(wb, ws, plan_lng("ch_tbl_name"));

    //and make for another table with consumption
    if($( "#tn_plan_ccr" ).val() == 1){
        //OC
        tbl = document.getElementById("opt_total_cons");
        ws = XLSX.utils.table_to_sheet(tbl , {
                raw : true
            }
        );
        XLSX.utils.book_append_sheet(wb, ws, plan_lng("ch_tbl_cons"));
    }
    else{

        //CCR
        if(opt_blt_dln == 1){
            //Bailout
            tbl = document.getElementById("opt_total_cons");
            ws = XLSX.utils.table_to_sheet(tbl , {
                    raw : true
                }
            );
            XLSX.utils.book_append_sheet(wb, ws, plan_lng("ch_tbl_cons"));
        }
        else{
            //Diluent
        }
    }


    //add OTU, CNS sheet
    //and make for another table with consumption
    tbl = document.getElementById("opt_otu_cns");
    ws = XLSX.utils.table_to_sheet(tbl , {
            raw : true
        }
    );
    XLSX.utils.book_append_sheet(wb, ws, plan_lng("tab_tr_OTU") + "," + plan_lng("tab_tr_CNS"));


    //save xls
    XLSX.writeFile(wb, "DiveProMe " + plan_lng("ch_depth") + ' '+ ld_dp + (plan_lng("ch_mtr")).replace(".", "") + ".xlsx");


    //XLSX.save("DiveProMe " + plan_lng("ch_depth") + ' '+ ld_dp + (plan_lng("ch_mtr")).replace(".", "") + ".xlsx");
}


//Export_PDF main depth\time chart
function btn_export_pdf(){

    //switch to english because PDF generator doesn`t support russian or other UTF-8 code pages
    var fname_depth = plan_lng("ch_depth");
    var fname_dim = plan_lng("ch_mtr").replace(".", "");

    DrawChart("chart_pdf","chart_pdf", "chart_pdf", main_plan);

            chart_mainprofile.exportChartLocal({
            type: 'application/pdf',
            //type : "image/svg+xml",
            filename: "DiveProMe " + fname_depth + ' '+ ld_dp + fname_dim
        });


    //var a = pdf.output('datauristring');
    //console.log(a);
    //NodesaveFile("#nodejs_export_pdf", a);

    del_html_elem("chart_pdf");
}

//Export_PDF pp chart
function btn_export_pdf_pp(){
    //switch to english because PDF generator doesn`t support russian or other UTF-8 code pages
    var fname_depth = plan_lng("ch_depth");
    var fname_dim = plan_lng("ch_mtr").replace(".", "");
    var fname_pp = plan_lng("ch_pp");
    f//orce_lng = 1;
    pp_profile_chart ("chart_pdf");
    chart_pp_profile.exportChartLocal({
        type: 'application/pdf',
        filename: "DiveProMe " + fname_pp + ' ' + fname_depth + ' ' + ld_dp + fname_dim
    });
    //delete "temp" html element for PDF
    del_html_elem("chart_pdf");
    //force_lng = 0;
}
//sleep interface to a xxx sec
function sleep(milliseconds) {
    var start = new Date().getTime();
    for (var i = 0; i < 1e7; i++) {
        if ((new Date().getTime() - start) > milliseconds){
            break;
        }
    }
}
