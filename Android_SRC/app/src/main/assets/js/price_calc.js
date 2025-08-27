
//Function created table whit different columns,rows and any place inside your HTML
//TableId - HTML id for your table will be placed
//tableHeaderData - header data for your table
//Example array test_a = [["HEAD 1, HEAD 1", "HEAD, HEAD 2"]];
//tableData - your table main date
//Example Array test_b = [["row 1, cell 1", "row 1, cell 2"], ["row 2, cell 1", "row 2, cell 2"],["row 3, cell 1", "row 3, cell 2"]];
//tableFooter - footer for table whit different style
//Leave none if do nothing or use example array test_c = [["FOOT 1, FOOT 1","FOOT 2, FOOT 2"]];
//footerStyleClass make unique style and assign custom id for cell
function createTable(tableId , tableHeaderData , tableData, tableFooter , footerStyleClass) {
    var body = document.getElementById(tableId);
    var table = document.createElement("table");
    var tableBody = document.createElement("tbody");

    table.setAttribute("width", "100%");

    //create Table Header
    tableHeaderData.forEach(function(rowData) {
        var row = document.createElement("tr");
        rowData.forEach(function(cellData) {
            var cell = document.createElement("td");
            //row.setAttribute("class", "tr_coms_light");
            cell.appendChild(document.createTextNode(cellData));
            row.appendChild(cell);
        });

        tableBody.appendChild(row);
    });

    //create Table Data
    tableData.forEach(function(rowData) {
        var row = document.createElement("tr");
        rowData.forEach(function(cellData) {
            var cell = document.createElement("td");
            row.setAttribute("class", "tr_coms_light");
            cell.appendChild(document.createTextNode(cellData));
            row.appendChild(cell);
        });
        tableBody.appendChild(row);
    });

    //create Table Footer
    tableFooter.forEach(function(rowData) {
        var row = document.createElement("tr");
        rowData.forEach(function(cellData) {
            var cell = document.createElement("td");
            //cell.setAttribute("class", footerStyleClass);
            row.setAttribute("class", footerStyleClass);
            cell.appendChild(document.createTextNode(cellData));
            row.appendChild(cell);
        });

        tableBody.appendChild(row);
    });

    table.appendChild(tableBody);
    body.appendChild(table);
}

//all needed for price calculation
//Main Function for Price Calculation
function upd_price() {
    //get current options selected currency selected index
    var price_cur_option_current = $("#opt_price_cur option:selected").val();

    // get actual current price for helium, oxy and topping from interface
    var price_he_total =  (($("#opt_price_he_cnt option:selected").val()) * 0.01) + ($("#opt_price_he_dls option:selected").val() * 1.0);
    var price_oxy_total =  (($("#opt_price_o2_cnt option:selected").val()) * 0.01) + ($("#opt_price_o2_dls option:selected").val() * 1.0);
    var price_top_total =  (($("#opt_price_top_cnt option:selected").val()) * 0.01) + ($("#opt_price_top_dls option:selected").val() * 1.0);

    var price_pound = (($("#opt_calc_cur_ex_rate_pence option:selected").val()) * 0.01) + ($("#opt_calc_cur_ex_rate_pound option:selected").val() * 1.0);
    var price_euro = (($("#opt_calc_cur_ex_rate_eucents option:selected").val()) * 0.01) + ($("#opt_calc_cur_ex_rate_euro option:selected").val() * 1.0);
    var price_rouble = (($("#opt_calc_cur_ex_rate_kopek option:selected").val()) * 0.01) + ($("#opt_calc_cur_ex_rate_rub option:selected").val() * 1.0);
    var price_yuan = (($("#opt_calc_cur_ex_rate_fyn option:selected").val()) * 0.01) + ($("#opt_calc_cur_ex_rate_yuan option:selected").val() * 1.0);

    //build table header
    var price_header = [[plan_lng("price_gas"),plan_lng("ch_gas_d"),plan_lng("price_price"),plan_lng("price_currency")]];

    //build table body
    var price_body = [];
    var price_chart = [];
    var price_mix_total = 0;

    for(c = 0 ; c < coms_final_arr.length ; c++){
        var price_mix_oxy = 0;
        var price_mix_he = 0;
        var price_fr_arr = gass_from_name_arr(coms_final_arr[c].Mix);

        //if oxy > 21 compute price for oxy first
        if( (price_fr_arr[0]) > 21){
            price_mix_oxy = (price_oxy_total * ((parseInt(coms_final_arr[c].Сonsumption)) / 100.0 * (price_fr_arr[0])));
        }
        //and for Helium if exist
        if((price_fr_arr[1]) > 0){
            price_mix_he = (price_he_total * ((parseInt(coms_final_arr[c].Сonsumption)) / 100 * price_fr_arr[2]));
        }

        //make propertly selected dimension
        if(price_cur_option_current == 1){
            var price_val = plan_lng("tn_price_dls_name_dollars");
        }
        if(price_cur_option_current == 2){
            var price_val = plan_lng("tn_price_dls_name_euro");
        }
        if(price_cur_option_current == 3){
            var price_val = plan_lng("tn_price_dls_name_pound");
        }
        if(price_cur_option_current == 4){
            var price_val = plan_lng("tn_price_dls_name_rouble");
        }
        if(price_cur_option_current == 5){
            var price_val = plan_lng("tn_price_dls_name_yuan");
        }
        //liters
        if($( "#tn_dmn" ).val() == 1){
            price_body.push([lng_cng(coms_final_arr[c].Mix), coms_final_arr[c].Сonsumption , (price_mix_oxy + price_mix_he).toFixed(2) , price_val]);
        }
        //cubic foot
        if($( "#tn_dmn" ).val() == 2){
            price_body.push([lng_cng(coms_final_arr[c].Mix), (0.0353147 * coms_final_arr[c].Сonsumption).toFixed(2) , (price_mix_oxy + price_mix_he).toFixed(2) , price_val]);
        }

        if(parseFloat((price_mix_oxy + price_mix_he).toFixed(2)) > 0){

            if($( "#tn_plan_ccr" ).val() == 1){
                //OC
                price_chart.push(
                    {
                        name : lng_cng(coms_final_arr[c].Mix),
                        y: parseFloat((price_mix_oxy + price_mix_he).toFixed(2))
                    }
                );
            }
            else{
                //CCR
                if(opt_blt_dln == 1){
                    //Bailout
                    price_chart.push(
                        {
                            name : lng_cng(coms_final_arr[c].Mix),
                            y: parseFloat((price_mix_oxy + price_mix_he).toFixed(2))
                        }
                    );
                }
                else{
                    //Diluent
                }
            }
        }

        price_mix_total = (price_mix_total + (price_mix_oxy + price_mix_he));

    }
    //add to chart topping price
    price_chart.push(
        {
            name : plan_lng("ch_price_top_total"),
            y: parseFloat((price_top_total).toFixed(2))
        }
    );

    //build table footer final total price for selected currency
    var tableFooter = [];

    //make propertly selected dimension for chart
    if(price_cur_option_current == 1){
        var price_val_chart = "$";
    }
    if(price_cur_option_current == 2){
        var price_val_chart = "€";
    }
    if(price_cur_option_current == 3){
        var price_val_chart = "£";
    }
    if(price_cur_option_current == 4){
        var price_val_chart = "₽";
    }
    if(price_cur_option_current == 5){
        var price_val_chart = "元";
    }

    //create circle 3d chart
    del_html_elem("t_price_chart");
    price_3d_chart("t_price_chart" , price_val_chart , price_chart);

    //Delete old table if exist and build final table
    del_html_elem("t_price_main");

    if($( "#tn_plan_ccr" ).val() == 1){
        //OC
        createTable("t_price_main" , price_header , price_body , tableFooter, "tn_price_table_total_style");
    }
    else{
        //CCR
        if(opt_blt_dln == 1){
            //Bailout
            createTable("t_price_main" , price_header , price_body , tableFooter, "tn_price_table_total_style");
        }
        else{
            //Diluent
            price_mix_total = 0;
        }
    }

    //build total price by every currency
    price_header = price_body = [];

    //if dollars selected
    if(price_cur_option_current == 1){
        tableFooter.push([plan_lng("price_gas_total") , (price_mix_total + price_top_total).toFixed(2) , price_val]);
        tableFooter.push([plan_lng("price_gas_total") , ((price_mix_total + price_top_total) * price_euro).toFixed(2) , plan_lng("tn_price_dls_name_euro")]);
        tableFooter.push([plan_lng("price_gas_total") , ((price_mix_total + price_top_total) * price_pound).toFixed(2) , plan_lng("tn_price_dls_name_pound")]);
        tableFooter.push([plan_lng("price_gas_total") , ((price_mix_total + price_top_total) * price_rouble).toFixed(2) , plan_lng("tn_price_dls_name_rouble")]);
        tableFooter.push([plan_lng("price_gas_total") , ((price_mix_total + price_top_total) * price_yuan).toFixed(2) , plan_lng("tn_price_dls_name_yuan")]);
    }
    //euros
    if(price_cur_option_current == 2){
        tableFooter.push([plan_lng("price_gas_total") , (price_mix_total + price_top_total).toFixed(2) , price_val]);
        tableFooter.push([plan_lng("price_gas_total") , ((price_mix_total + price_top_total) / price_euro).toFixed(2) , plan_lng("tn_price_dls_name_dollars")]);
        tableFooter.push([plan_lng("price_gas_total") , ((price_mix_total + price_top_total) / price_euro * price_pound).toFixed(2) , plan_lng("tn_price_dls_name_pound")]);
        tableFooter.push([plan_lng("price_gas_total") , ((price_mix_total + price_top_total) / price_euro * price_rouble).toFixed(2) , plan_lng("tn_price_dls_name_rouble")]);
        tableFooter.push([plan_lng("price_gas_total") , ((price_mix_total + price_top_total) / price_euro * price_yuan).toFixed(2) , plan_lng("tn_price_dls_name_yuan")]);
    }
    //pounds
    if(price_cur_option_current == 3){
        tableFooter.push([plan_lng("price_gas_total") , (price_mix_total + price_top_total).toFixed(2) , price_val]);
        tableFooter.push([plan_lng("price_gas_total") , ((price_mix_total + price_top_total) / price_pound).toFixed(2) , plan_lng("tn_price_dls_name_dollars")]);
        tableFooter.push([plan_lng("price_gas_total") , ((price_mix_total + price_top_total) / price_pound * price_euro).toFixed(2) , plan_lng("tn_price_dls_name_euro")]);
        tableFooter.push([plan_lng("price_gas_total") , ((price_mix_total + price_top_total) / price_pound * price_rouble).toFixed(2) , plan_lng("tn_price_dls_name_rouble")]);
        tableFooter.push([plan_lng("price_gas_total") , ((price_mix_total + price_top_total) / price_pound * price_yuan).toFixed(2) , plan_lng("tn_price_dls_name_yuan")]);
    }

    if(price_cur_option_current == 4){
        tableFooter.push([plan_lng("price_gas_total") , (price_mix_total + price_top_total).toFixed(2) , price_val]);
        tableFooter.push([plan_lng("price_gas_total") , ((price_mix_total + price_top_total) / price_rouble).toFixed(2) , plan_lng("tn_price_dls_name_dollars")]);
        tableFooter.push([plan_lng("price_gas_total") , ((price_mix_total + price_top_total) / price_rouble * price_euro).toFixed(2) , plan_lng("tn_price_dls_name_euro")]);
        tableFooter.push([plan_lng("price_gas_total") , ((price_mix_total + price_top_total) / price_rouble * price_pound).toFixed(2) , plan_lng("tn_price_dls_name_pound")]);
        tableFooter.push([plan_lng("price_gas_total") , ((price_mix_total + price_top_total) / price_rouble * price_yuan).toFixed(2) , plan_lng("tn_price_dls_name_yuan")]);
    }

    if(price_cur_option_current == 5){
        tableFooter.push([plan_lng("price_gas_total") , (price_mix_total + price_top_total).toFixed(2) , price_val]);
        tableFooter.push([plan_lng("price_gas_total") , ((price_mix_total + price_top_total) / price_yuan).toFixed(2) , plan_lng("tn_price_dls_name_dollars")]);
        tableFooter.push([plan_lng("price_gas_total") , ((price_mix_total + price_top_total) / price_yuan * price_euro).toFixed(2) , plan_lng("tn_price_dls_name_euro")]);
        tableFooter.push([plan_lng("price_gas_total") , ((price_mix_total + price_top_total) / price_yuan * price_pound).toFixed(2) , plan_lng("tn_price_dls_name_pound")]);
        tableFooter.push([plan_lng("price_gas_total") , ((price_mix_total + price_top_total) / price_yuan * price_rouble).toFixed(2) , plan_lng("tn_price_dls_name_rouble")]);
    }

    del_html_elem("t_price_total");
    createTable("t_price_total" , price_header , price_body, tableFooter , "tn_price_table_total_style");
}

//Change lang mix names for 3d Chart
function lng_cng(mix_name){
    var result = mix_name;

    if(mix_name == "Air"){
        result = plan_lng("Air");
    }
    if(mix_name == "OXY"){
        result = plan_lng("OXY");
    }
    return result;
}

//Build circle 3d chart
function price_3d_chart(price_chart_id , price_val_chart , price_chart){
    Highcharts.chart( price_chart_id, {
        chart: {
            plotBackgroundColor: null,
            plotBorderWidth: null,
            plotShadow: false,
            type: "pie"
        },
        credits: {
            enabled: false
        },
        navigation: {
            buttonOptions: {
                enabled: false
            }
        },
        title: {
            text: plan_lng("ch_gas_d")
        },
        tooltip: {
            pointFormat: "<b>{point.y}</b>"+ price_val_chart
        },
        plotOptions: {
            pie: {
                allowPointSelect: true,
                cursor: 'pointer',
                dataLabels: {
                    enabled: true,
                    format: "<b>{point.name}</b> {point.y}" + price_val_chart
                }
            }
        },
        series: [{
            name: "",
            colorByPoint: true,
            data: price_chart
        }]
    });
}
