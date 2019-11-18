function DrawChart(html_id, html_id_1 , html_id_2 , main_plan1){

    // Apply selected theme style
    tn_cng_color = document.getElementById("tn_color");
    var tn_color_idx = tn_cng_color.options[tn_cng_color.selectedIndex].value;
    if(tn_color_idx*1.0 == 1){
        Highcharts.setOptions(ChartThemeDark());
    }
    if(tn_color_idx*1.0 == 2){
        Highcharts.setOptions(ChartThemeLight());
    }
    
    ld_dp = max_lvl_depth(lvl_arr);


    //build data arrays for chart
    chart_line_arr = [];
    
    tmp_arr = main_plan1;
    tmp_timex = 0;
    a9=0;
    clr_tick = 1;
    clr = "#20596c";
    
    chart_zone_arr = [];
    chart_zone_arr.push({
      value: 0,
      color: clr
    });
    
    chart_label_arr = [];
    chart_label_arr.push({
      x : tmp_timex,
      title : plan_lng(tmp_arr[a9+4]),
      text : plan_lng(tmp_arr[a9+4])
    });
    
    for (var i = 0; i < tmp_arr.length/5; i++) {
      tmp_dp_arr =  depth_from_name_arr(tmp_arr[a9+1]);
      if(tmp_dp_arr.length == 1){
        tmp_dp_arr.push(tmp_dp_arr[0]);
      }
      tmp_time = time_to_dec_time(tmp_arr[a9+2]);
      
      if(i > 0 && i < (tmp_arr.length/5-1)){
        if(tmp_arr[a9+4] != tmp_arr[a9-1]){
          chart_label_arr.push({
            x : tmp_timex,
            title : plan_lng(tmp_arr[a9+4]),
            text : plan_lng(tmp_arr[a9+4])
          });
          
          if(clr_tick === 0){
            clr = "#20596c";
            clr_tick = 1;
          }
          else
          {
            clr = "#49d4d3";
            clr_tick = 0;
          }
          chart_zone_arr.push({
            value: tmp_timex,
            color: clr
          });
        }
      }
      
      //add first point
      chart_line_arr.push({
        x: tmp_timex,
        y: tmp_dp_arr[0]*-1.0}
        );
        
      tmp_timex = tmp_timex + tmp_time;
      
      //add second point
      chart_line_arr.push({
        x: tmp_timex, 
        y: tmp_dp_arr[1]*-1.0});
      a9 = a9 + 5;
      
      
    }



    //build profile main chart
    chart_mainprofile =  Highcharts.chart(html_id, {
    chart:{
        marginTop: 110
    },

      credits: {
        enabled: false
      },

    title: {
        text: plan_lng("ch_depth") + ' '+ld_dp + plan_lng("ch_mtr")
    },
    subtitle: {
        text: plan_lng("ch_source") + ': <a href="http://scan3d.ru/DiveMePro+">' +
            'divepro.me</a>'
    },
    xAxis: {



        allowDecimals: false,
            title: {
            text: plan_lng("ch_time")
        },
        labels: {
            formatter: function () {
                return this.value + plan_lng("ch_tmx");
            },

        }
    },
    yAxis: {
        title: {
            text: plan_lng("ch_depth")
        },
        labels: {
            formatter: function () {
                return this.value / 1*-1 + plan_lng("ch_mtr");
            }
        }
    },
        tooltip: {

            formatter: function () {
                return '<span style="text-align: left;color: {borderColor.color}">' + plan_lng("ch_time") +": " + parseInt(this.x) + " " + plan_lng("ch_tmx") +
                    '</b><br><b style="color:{series.color}">'+ plan_lng("ch_depth") + ": " + (-1*(this.y)) + plan_lng("ch_mtr") + '</b>' + '</b><br><b>' +'</b>' + '</span>';
            },
            shared: true,
            useHTML: true
        },

    navigation: {
        buttonOptions: {
            enabled: false
        }
    },

    plotOptions: {
        series: {
            animation: true
        }
    },
        exporting: {
            chartOptions: {
                chart: {
                    style: {
                        fontFamily: 'Arial'
                    }
                }
            }
        },
    series: [{
        id: 'main_series',
        type: 'area',
        name: plan_lng("ch_depth"),
        data: chart_line_arr,
        zoneAxis: 'x',
        zones: chart_zone_arr
    }, /*{
        type: 'scatter',
        name: 'Observations',
        data: [1, 1.5, 2.8, 3.5, 3.9, 4.2],
        marker: {
            radius: 4,
        }
    },*/{
            type: 'flags',
            name: plan_lng("ch_mix"),
            data:  chart_label_arr,
            onSeries: 'main_series',
            shape: 'squarepin',
            //width: 16
        }
    ]
});

}

//build tissue charts if button pressed
function btn_build_tiss(){
//if decompreesion dive build tissue table
    if(ld_dp > 6){
        //build array_for_tissue_categories. Time stamp
        var tiss_cat_arr = [];

        var tiss_val_arr_ng = [];
        var tiss_val_arr_hl = [];
        var tiss_val_arr_tl = [];
        //var tiss_val_fin_arr = [];
        var tiss_val_fin_arr_ng = [];
        var tiss_val_fin_arr_hl = [];
        var tiss_val_fin_arr_tl = [];
        a = 0;
        b = 0;
        for(j = 0 ; j < comp_tiss_arr.length/17 ; j++) {

            b = b + comp_tiss_arr[a].TimeCurrent;
            tiss_cat_arr.push(time_dec_to_time(b));
            a = a + 17;
        }

        a = 0;
        b = 0;
        for(s = 1 ; s < 17 ; s++){
            vis = false;
            for(j = 0 ; j < comp_tiss_arr.length/17 ; j++) {
                tmp = comp_tiss_arr[a+b].NitroLoad
                tmp.toFixed(2);
                if(tmp < 0.01){tmp = 0.0}
                tiss_val_arr_ng.push(tmp);

                tmp = comp_tiss_arr[a+b].HeliumLoad
                tmp.toFixed(2);
                if(tmp < 0.01){tmp = 0.0}
                tiss_val_arr_hl.push(tmp);

                tmp = comp_tiss_arr[a+b].TotalLoad
                tmp.toFixed(2);
                if(tmp < 0.01){tmp = 0.0}
                tiss_val_arr_tl.push(tmp);
                a = a + 17;
            }
            if(s == 1 || s == 16){
                vis = true;
            }
            else
            {
                vis = false;
            }

            tiss_val_fin_arr_ng.push({
                data: tiss_val_arr_ng,
                name: plan_lng("ch_Tissue") + " " + (s),
                visible: vis
            });
            tiss_val_fin_arr_hl.push({
                data: tiss_val_arr_hl,
                name: plan_lng("ch_Tissue") + " " + (s),
                visible: vis
            });
            tiss_val_fin_arr_tl.push({
                data: tiss_val_arr_tl,
                name: plan_lng("ch_Tissue") + " " + (s),
                visible: vis
            });
            tiss_val_arr_ng  = [];
            tiss_val_arr_hl  = [];
            tiss_val_arr_tl  = [];
            a = 0;
            b = b + 1;
        }

        /*  name: plan_lng("ch_Tissue") + " 1",
            data: tiss_val_fin_arr[0].ts_ng,
            visible: true*/

        //console.log(comp_tiss_arr);
        //console.log(tiss_val_fin_arr);
        //add chart profile

        //Build Tissue Nitrogen Chart
        Highcharts.chart("t_tiss_ng", {
                navigation: {
                    buttonOptions: {
                        enabled: false
                    }
                },
                credits: {
                    enabled: false
                },
                chart: {
                    type: 'column'
                },
                title: {
                    text: plan_lng("t_tiss_nt")
                },
                xAxis: {title: {
                    text: plan_lng("ch_time") + ", " + plan_lng("ch_tmx")
                },
                    categories: tiss_cat_arr,
                    crosshair: true
                },
                yAxis: {
                    min: 0,
                    title: {
                        text: plan_lng("ch_pp") + ", " +  plan_lng("ch_ata")
                    }
                },
                tooltip: {
                    headerFormat: '<span style="font-size:15px;text-align: left">{point.key}'+ " " + plan_lng("ch_tmx") + '</span><table>',
                    pointFormat: '<tr><td style="color:{series.color};padding:0;border-bottom: 0px;font-size:15px;text-align: left">{series.name}: </td>' +
                    '<td style="padding:0;border-bottom: 0px;font-size:15px;text-align: left"><b>{point.y:.2f}' + plan_lng("ch_ata") + '</b></td></tr>',
                    footerFormat: '</table>',
                    shared: true,
                    useHTML: true
                },
                plotOptions: {
                    column: {
                        pointPadding: 0,
                        borderWidth: 0,
                        groupPadding: 0,
                        shadow: false
                    }
                },
                series: tiss_val_fin_arr_ng
            }
        );
        //Build Tissue Helium Chart
        Highcharts.chart("t_tiss_hl", {
                navigation: {
                    buttonOptions: {
                        enabled: false
                    }
                },
                credits: {
                    enabled: false
                },
                chart: {
                    type: 'column'
                },
                title: {
                    text: plan_lng("t_tiss_hl")
                },
                xAxis: {title: {
                    text: plan_lng("ch_time") + ", " + plan_lng("ch_tmx")
                },
                    categories: tiss_cat_arr,
                    crosshair: true
                },
                yAxis: {
                    min: 0,
                    title: {
                        text: plan_lng("ch_pp") + ", " +  plan_lng("ch_ata")
                    }
                },
                tooltip: {
                    headerFormat: '<span style="font-size:15px;text-align: left">{point.key}'+ " " + plan_lng("ch_tmx") + '</span><table>',
                    pointFormat: '<tr><td style="color:{series.color};padding:0;border-bottom: 0px;font-size:15px;text-align: left">{series.name}: </td>' +
                    '<td style="padding:0;border-bottom: 0px;font-size:15px;text-align: left"><b>{point.y:.2f}' + plan_lng("ch_ata") + '</b></td></tr>',
                    footerFormat: '</table>',
                    shared: true,
                    useHTML: true
                },
                plotOptions: {
                    column: {
                        pointPadding: 0,
                        borderWidth: 0,
                        groupPadding: 0,
                        shadow: false
                    }
                },
                series: tiss_val_fin_arr_hl
            }
        );
//Build Tissue Total Chart
        Highcharts.chart("t_tiss_tl", {
                navigation: {
                    buttonOptions: {
                        enabled: false
                    }
                },
                credits: {
                    enabled: false
                },
                chart: {
                    type: 'column'
                },
                title: {
                    text: plan_lng("t_tiss_tl")
                },
                xAxis: {title: {
                    text: plan_lng("ch_time") + ", " + plan_lng("ch_tmx")
                },
                    categories: tiss_cat_arr,
                    crosshair: true
                },
                yAxis: {
                    min: 0,
                    title: {
                        text: plan_lng("ch_pp") + ", " +  plan_lng("ch_ata")
                    }
                },
                tooltip: {
                    headerFormat: '<span style="font-size:15px;text-align: left">{point.key}'+ " " + plan_lng("ch_tmx") + '</span><table>',
                    pointFormat: '<tr><td style="color:{series.color};padding:0;border-bottom: 0px;font-size:15px;text-align: left">{series.name}: </td>' +
                    '<td style="padding:0;border-bottom: 0px;font-size:15px;text-align: left"><b>{point.y:.2f}' + plan_lng("ch_ata") + '</b></td></tr>',
                    footerFormat: '</table>',
                    shared: true,
                    useHTML: true
                },
                plotOptions: {
                    column: {
                        pointPadding: 0,
                        borderWidth: 0,
                        groupPadding: 0,
                        shadow: false
                    }
                },
                series: tiss_val_fin_arr_tl
            }
        );
        //del_html_elem("t_tiss_btn");
    }
    else
    //non deco dive and write only one warning about non deco dive
    {
        del_html_elem("t_tiss_ng");
        del_html_elem("t_tiss_hl");
        del_html_elem("t_tiss_tl");
        create_html_text("t_tiss_ng" , "t_tiss_wrn" , plan_lng("t_tiss_wrn"));
    }
}

//build PP profile chart
function pp_profile_chart (html_id2){
    //console.log(ppo2_array);


    chart_pp_profile = Highcharts.chart(html_id2, {
        chart:{

        },
        navigation: {
            buttonOptions: {
                enabled: false
            }
        },
        credits: {
            enabled: false
        },
        title: {
            text:  plan_lng("ch_pp")
        },
        subtitle: {
            text: plan_lng("ch_source")+': <a href="http://scan3d.ru/DiveMePro">' +
            'divepro.me</a>'
        },
        xAxis: {
            plotBands: [],
            allowDecimals: false,
            title: {
                text: plan_lng("ch_time")
            },
            labels: {
                formatter: function () {
                    return this.value + plan_lng("ch_tmx");
                }
            }
        },
        yAxis: {
            title: {
                text: plan_lng("ch_pp_l")
            },
            labels: {
                formatter: function () {
                    return this.value / 1*1 + plan_lng("ch_ata");
                }
            }
        },
        useHTML : true,
        tooltip: {enabled: true,
            split: true
        },
        pointFormat: 'Time at <b>{point.x:1.0f}</b><br/>Depth {point.y}',
        plotOptions: {
            area: {
                pointStart: 0,
                marker: {
                    enabled: false,
                    symbol: 'circle',
                    radius: 2,
                    states: {
                        hover: {
                            enabled: true
                        }
                    }
                }
            }
        },


        series: [{
            id: 'ppo2',
            lineWidth: 2,
            color: '#47b847',
            //dashStyle: 'dot',
            name: plan_lng("ch_o2"),
            data: ppo2_array
        },{
            id: 'ppn2',
            lineWidth: 2,
            color: '#ff4964',
            //dashStyle: 'dot',
            name: plan_lng("ch_n2"),
            data: ppn2_array

        },{
            id: 'pphe',
            lineWidth: 2,
            color: '#5c96dc',
            //dashStyle: 'dot',
            name: plan_lng("ch_he"),
            data: pphe_array
        }/*,{
            type: 'flags',
            name: ch_mix_pp,
            data: mix_array,
            onSeries: 'ppo2',
            shape: 'squarepin',
            //width: 16
        }*/
        ]
    });
}