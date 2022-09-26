function DrawChart(html_id, html_id_1, html_id_2, main_plan1) {

    // Apply selected theme style
    tn_cng_color = document.getElementById("tn_color");
    var tn_color_idx = tn_cng_color.options[tn_cng_color.selectedIndex].value;
    if (tn_color_idx * 1.0 == 1) {
        Highcharts.setOptions(ChartThemeDark());
    }
    if (tn_color_idx * 1.0 == 2) {
        Highcharts.setOptions(ChartThemeLight());
    }

    ld_dp = max_lvl_depth(lvl_arr);
    //meters
    if ($("#tn_dmn").val() == 1) {
        ld_dp_fixed = ld_dp;
    }
    //feet
    if ($("#tn_dmn").val() == 2) {
        ld_dp_fixed = Math.ceil(3.28084 * ld_dp);
    }

    //build data arrays for chart
    chart_line_arr = [];

    tmp_arr = main_plan1;
    tmp_timex = 0;
    a9 = 0;
    clr_tick = 0;
    clr = "#20596c";
    chart_zone_arr = [];

    //OC Dive Color
    if ($("#tn_plan_ccr").val() == 1) {

    }
    //CCR Diluent Dive Color
    if ($("#tn_plan_ccr").val() == 2 && opt_blt_dln == 2) {
        chart_zone_arr.push({
            value: 100000,
            color: "#fffa6c"
        });
    }
    //CCR Bailout Dive Color
    if ($("#tn_plan_ccr").val() == 2 && opt_blt_dln == 1) {
        //Just nothing but need fix after all processed zones after for loop
    }

    chart_label_arr = [];
    //OC
    if ($("#tn_plan_ccr").val() == 1) {
        chart_label_arr.push({
            x: tmp_timex,
            title: plan_lng(tmp_arr[a9 + 4]),
            text: plan_lng(tmp_arr[a9 + 4])
        });
        //set default color for graph lines and legend dots
        //1. first line\point legend color 2. second line\point legend color
        if ($("#tn_color").val() == 1) {
            //Dark theme
            colors_custom = ['#49d4d3', '#20596c'];
        }
        if ($("#tn_color").val() == 2) {
            //Light theme
            colors_custom = ['#f45b5b', '#8085e9'];
        }
    }
    //CCR
    if ($("#tn_plan_ccr").val() == 2) {
        //get mix used in eCCR bottom
        var ccr_mix_interface = [lvl_mix_arr[0], lvl_mix_arr[1]];

        chart_label_arr.push({
            x: tmp_timex,
            title: plan_lng("t_diluent") + plan_lng(mix_to_txt_arr(ccr_mix_interface)),
            text: plan_lng("t_diluent") + plan_lng(mix_to_txt_arr(ccr_mix_interface))
        });
        //1. first line\point legend color 2. second line\point legend color
        if (opt_blt_dln == 1) {
            //Bailout
            //set color for graph lines and legend dots
            if ($("#tn_color").val() == 1) {
                //Dark theme
                colors_custom = ['#8fadd7', '#666ae9'];
            }
            if ($("#tn_color").val() == 2) {
                //Light theme
                colors_custom = ['#8fadd7', '#666ae9'];
            }
        }
        if (opt_blt_dln == 2) {
            //Diluent
            //set color for graph lines and legend dots
            if ($("#tn_color").val() == 1) {
                //Dark theme
                colors_custom = ['#fffa6c', '#ff9b6c'];
            }
            if ($("#tn_color").val() == 2) {
                //Light theme
                colors_custom = ['#fffa6c', '#ff9b6c'];
            }
        }
    }



    for (var i = 0; i < tmp_arr.length / 5; i++) {
        tmp_dp_arr = depth_from_name_arr(tmp_arr[a9 + 1]);
        if (tmp_dp_arr.length == 1) {
            tmp_dp_arr.push(tmp_dp_arr[0]);
        }
        tmp_time = time_to_dec_time(tmp_arr[a9 + 2]);




        if (i > 0 && i < (tmp_arr.length / 5 - 1)) {
            if (tmp_arr[a9 + 4] != tmp_arr[a9 - 1]) {
                //OC
                if ($("#tn_plan_ccr").val() == 1) {
                    chart_label_arr.push({
                        x: tmp_timex,
                        title: plan_lng(tmp_arr[a9 + 4]),
                        text: plan_lng(tmp_arr[a9 + 4])
                    });
                    if (clr_tick === 0) {
                        clr = "#20596c";
                        clr_tick = 1;
                    } else {
                        //clr = "#49d4d3";
                        //clr = "#207d8d";
                        clr = "#0094ad";
                        clr_tick = 0;
                    }
                    chart_zone_arr.push({
                        value: tmp_timex,
                        color: clr
                    });
                }
                //eCCR
                //Bailout dive
                if ($("#tn_plan_ccr").val() == 2 && opt_blt_dln == 1) {
                    //get o2 percentage for calculate deepest bailout mix
                    count = 0;
                    //Check real(interface selection) deco mix list and if this gas exist add gas label and color change
                    for (dlst = 0; dlst < $("#opt_deco").val(); dlst++) {
                        if (gass_from_name_arr(tmp_arr[a9 + 4])[0] == deco_mix_arr[count] && gass_from_name_arr(tmp_arr[a9 + 4])[2] == deco_mix_arr[count + 1]) {
                            if (tmp_arr[a9] != "Descent") {
                                //check it is not descent
                                chart_label_arr.push({
                                    x: tmp_timex,
                                    title: plan_lng(tmp_arr[a9 + 4]),
                                    text: plan_lng(tmp_arr[a9 + 4])
                                });
                                if (clr_tick === 0) {
                                    clr = "#666ae9";
                                    clr_tick = 1;
                                } else {
                                    clr = "#8fadd7";
                                    clr_tick = 0;
                                }
                                chart_zone_arr.push({
                                    value: tmp_timex,
                                    color: clr
                                });
                            }
                        }
                        count = count + 2;
                    }
                }
            }
        }
        //meters
        if ($("#tn_dmn").val() == 1) {
            //add first point
            chart_line_arr.push({
                x: tmp_timex,
                y: tmp_dp_arr[0] * -1.0
            });

            tmp_timex = tmp_timex + tmp_time;

            //add second point
            chart_line_arr.push({
                x: tmp_timex,
                y: tmp_dp_arr[1] * -1.0
            });
            a9 = a9 + 5;
        }
        //feet
        if ($("#tn_dmn").val() == 2) {
            //add first point
            chart_line_arr.push({
                x: tmp_timex,
                y: Math.floor(3.28084 * (tmp_dp_arr[0] * -1.0))
            });

            tmp_timex = tmp_timex + tmp_time;

            //add second point
            chart_line_arr.push({
                x: tmp_timex,
                y: Math.floor(3.28084 * (tmp_dp_arr[1] * -1.0))
            });
            a9 = a9 + 5;
        }

    }
    //CCR Bailout Dive final color fix
    if ($("#tn_plan_ccr").val() == 2 && opt_blt_dln == 1) {
        if (clr_tick === 0) {
            clr = "#666ae9";
            clr_tick = 1;
        } else {
            clr = "#8fadd7";
            clr_tick = 0;
        }
        chart_zone_arr.push({
            value: 1000,
            color: clr
        });
    }

    //Change Reset Zoom Text Language
    Highcharts.setOptions({
        lang: {
            resetZoom: plan_lng("t_zoom")
        }
    });


    //build profile main chart
    chart_mainprofile = Highcharts.chart(html_id, {
        navigation: {
            buttonOptions: {
                enabled: false
            }
        },
        chart: {
            resetZoomButton: {
                position: {
                    align: "center",
                    x: 0
                },
                theme: {
                    fill: ColorZoobButtonFill,
                    stroke: ColorZoobButtonStroke,
                    style: {
                        color: ColorZoobButtonText,
                        fontWeight: 'bold'
                    },
                    r: ZoobButtonRadius,
                    states: {
                        hover: {
                            stroke: ColorZoobButtonStrokeHover,
                            fill: ColorZoobButtonFillHover,
                            style: {
                                color: ColorZoobButtonTextHover
                            }
                        }
                    }
                }
            },
            marginTop: 110,
            zoomType: 'xy'
        },

        credits: {
            enabled: false
        },

        title: {
            text: plan_lng("ch_depth") + ' ' + ld_dp_fixed + plan_lng("ch_mtr")
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
                formatter: function() {
                    return this.value + plan_lng("ch_tmx");
                },

            }
        },
        yAxis: {
            title: {
                text: plan_lng("ch_depth")
            },
            labels: {
                formatter: function() {
                    return this.value / 1 * -1 + plan_lng("ch_mtr");
                }
            }
        },
        tooltip: {

            formatter: function() {
                return '<span style="text-align: left;color: {borderColor.color}">' + plan_lng("ch_time") + ": " + parseInt(this.x) + " " + plan_lng("ch_tmx") +
                    '</b><br><b style="color:{series.color}">' + plan_lng("ch_depth") + ": " + (-1 * (this.y)) + plan_lng("ch_mtr") + '</b>' + '</b><br><b>' + '</b>' + '</span>';
            },
            split: true,
            shared: true,
            useHTML: true
        },

        plotOptions: {
            series: {
                animation: false
            }
        },

        exporting: {
            buttons: {
                contextButton: {
                    menuItems: null,
                    onclick: function main_plan_print() {
                        this.print();
                    }
                }
            },
            chartOptions: {
                chart: {
                    style: {
                        fontFamily: 'Arial'
                    }
                }
            }
        },
        colors: colors_custom,
        series: [{
                id: 'main_series',
                type: 'area',
                name: plan_lng("ch_depth"),
                data: chart_line_arr,
                zoneAxis: 'x',
                zones: chart_zone_arr
            },
            /*{
                   type: 'scatter',
                   name: 'Observations',
                   data: [1, 1.5, 2.8, 3.5, 3.9, 4.2],
                   marker: {
                       radius: 4,
                   }
               },*/
            {
                type: 'flags',
                name: plan_lng("ch_mix"),
                data: chart_label_arr,
                onSeries: 'main_series',
                shape: 'squarepin'
                //width: 16
            }
        ]
    });

}

//build tissue charts if button pressed
function btn_build_tiss() {
    
    element_id_hide("t_tiss_btn");
    element_id_show("t_tiss_chart");

    //if decompreesion dive build tissue table
    if (ld_dp > 6) {
        //build array_for_tissue_categories. Time stamp
        var tiss_cat_arr = [];

        var tiss_val_arr_ng = [];
        var tiss_val_arr_hl = [];
        var tiss_val_arr_tl = [];

        //var tiss_val_fin_arr = [];
        var tiss_val_fin_arr_ng = [];
        var tiss_val_fin_arr_hl = [];
        var tiss_val_fin_arr_tl = [];
        var tiss_val_fin_arr_tl_heat = [];
        a = 0;
        b = 0;

        //add start time zero
        tiss_cat_arr.push(0);

        var dp_arr = [];
        //add start ambient pressure in bars
        //bar
        if ($("#tn_dmn").val() == 1) {
            //include water density, altitude correction and water temperature correction
            dp_arr.push((water_density_temperature_correction() * water_density() * 0.001 * (1)) - ((1 - height_to_bar())));
        }
        //psi
        if ($("#tn_dmn").val() == 2) {
            //include water density, altitude correction and water temperature correction
            dp_arr.push(14.5037738 * ((water_density_temperature_correction() * water_density() * 0.001 * (1)) - ((1 - height_to_bar())))).toFixed(2);
        }

        //process all other values
        for (j = 0; j < comp_tiss_arr.length / 17; j++) {

            b = b + comp_tiss_arr[a].TimeCurrent;
            tiss_cat_arr.push(time_dec_to_time(b));

            //Add absolute pressure array
            //bar
            if ($("#tn_dmn").val() == 1) {
                dp_arr.push(
                    //include water density, altitude correction and water temperature correction
                    +((water_density_temperature_correction() * water_density() * 0.001 * ((comp_tiss_arr[a].EndDepthL / 10) + 1)) - (1 - height_to_bar())).toFixed(2)
                );
            }
            //psi
            if ($("#tn_dmn").val() == 2) {
                dp_arr.push(
                    //include water density, altitude correction and water temperature correction
                    +(14.5037738 * ((water_density_temperature_correction() * water_density() * 0.001 * ((comp_tiss_arr[a].EndDepthL / 10) + 1)) - (1 - height_to_bar()))).toFixed(2)
                );
            }

            a = a + 17;
        }


        var aa_a = 0;
        var bb_b = 0;

        for (s = 0; s < 16; s++) {
            vis = false;

            //add first helium and nitrogen value extracted from first mix in dive plan
            var rgas = gass_from_name_arr(main_plan_src[0].gasName);
            tiss_val_arr_ng.push(0);
            tiss_val_arr_hl.push(0);
            tiss_val_arr_tl.push(0);

            //process all other
            for (j = 0; j < comp_tiss_arr.length / 17; j++) {

                tmp = comp_tiss_arr[aa_a + bb_b].NitroLoad;
                tmp.toFixed(2);
                if (tmp < 0.01) {
                    tmp = 0.0
                }
                //bars
                if ($("#tn_dmn").val() == 1) {
                    tiss_val_arr_ng.push(tmp);
                }
                //psi
                if ($("#tn_dmn").val() == 2) {
                    tiss_val_arr_ng.push((14.5037738 * tmp));
                }

                tmp = comp_tiss_arr[aa_a + bb_b].HeliumLoad;
                tmp.toFixed(2);
                if (tmp < 0.01) {
                    tmp = 0.0
                }
                //tiss_val_arr_hl.push(tmp);
                //bars
                if ($("#tn_dmn").val() == 1) {
                    tiss_val_arr_hl.push(tmp);
                }
                //psi
                if ($("#tn_dmn").val() == 2) {
                    tiss_val_arr_hl.push((14.5037738 * tmp));
                }

                tmp = comp_tiss_arr[aa_a + bb_b].TotalLoad;
                tmp.toFixed(2);
                if (tmp < 0.01) {
                    tmp = 0.0
                }
                //tiss_val_arr_tl.push(tmp);
                //bars
                if ($("#tn_dmn").val() == 1) {
                    tiss_val_arr_tl.push(tmp);
                }
                //psi
                if ($("#tn_dmn").val() == 2) {
                    tiss_val_arr_tl.push((14.5037738 * tmp));
                }
                aa_a = aa_a + 17;
            }



            if (s == 0 || s == 15) {
                vis = true;
            } else {
                vis = false;
            }

            tiss_val_fin_arr_ng.push({
                type: "column",
                data: tiss_val_arr_ng,
                name: plan_lng("ch_Tissue") + " " + (s + 1),
                visible: vis
            });
            tiss_val_fin_arr_hl.push({
                type: "column",
                data: tiss_val_arr_hl,
                name: plan_lng("ch_Tissue") + " " + (s + 1),
                visible: vis
            });
            tiss_val_fin_arr_tl.push({
                type: "column",
                data: tiss_val_arr_tl,
                name: plan_lng("ch_Tissue") + " " + (s + 1),
                visible: vis
            });
            tiss_val_fin_arr_tl_heat.push({
                data: tiss_val_arr_tl,
                name: plan_lng("ch_Tissue") + " " + (s + 1),
                visible: true
            });
            tiss_val_arr_ng = [];
            tiss_val_arr_hl = [];
            tiss_val_arr_tl = [];



            aa_a = 0;
            bb_b = bb_b + 1;
        }

        //build data for maximum tissue line for nitrogen,helium and total
        var m_val_max_ng = [];
        var m_val_cr_ng = 0;

        var m_val_max_hl = [];
        var m_val_cr_hl = 0;

        var m_val_max_tl = [];
        var m_val_cr_tl = 0;

        m_val_max_ng.push(0);
        m_val_max_hl.push(0);
        m_val_max_tl.push(0);

        aa_a = 0;
        bb_b = 0;

        for (j = 0; j < comp_tiss_arr.length / 17; j++) {

            for (s = 0; s < 16; s++) {
                tmp = comp_tiss_arr[aa_a + bb_b].NitroLoad;
                tmp.toFixed(2);
                if (m_val_cr_ng < tmp) {
                    m_val_cr_ng = tmp
                }

                tmp = comp_tiss_arr[aa_a + bb_b].HeliumLoad;
                tmp.toFixed(2);
                if (m_val_cr_hl < tmp) {
                    m_val_cr_hl = tmp
                }

                tmp = comp_tiss_arr[aa_a + bb_b].TotalLoad;
                tmp.toFixed(2);
                if (m_val_cr_tl < tmp) {
                    m_val_cr_tl = tmp
                }

                aa_a = aa_a + 1;
            }

            m_val_max_ng.push(m_val_cr_ng);
            m_val_cr_ng = 0;

            m_val_max_hl.push(m_val_cr_hl);
            m_val_cr_hl = 0;

            m_val_max_tl.push(m_val_cr_tl);
            m_val_cr_tl = 0;

            //aa_a = aa_a + 1;
            bb_b = bb_b + 1;
        }

        //add chart whit ambient pressure to all other charts
        aa_a = {
            type: 'line',
            name: plan_lng("amb_pres"),
            data: dp_arr,
            marker: {
                lineWidth: 2,
                lineColor: Highcharts.getOptions().colors[7],
                fillColor: 'white'
            },
            color: Highcharts.getOptions().colors[7]
        };

        tiss_val_fin_arr_ng.push(aa_a);
        tiss_val_fin_arr_hl.push(aa_a);
        tiss_val_fin_arr_tl.push(aa_a);

        //add chart whit maximum tissue value for nitrogen
        aa_a = {
            type: 'spline',
            name: plan_lng("ld_tis"),
            data: m_val_max_ng,
            marker: {
                lineWidth: 2,
                lineColor: Highcharts.getOptions().colors[0],
                fillColor: 'white'
            },
            color: Highcharts.getOptions().colors[0]
        };

        tiss_val_fin_arr_ng.push(aa_a);

        //helium
        aa_a = {
            type: 'spline',
            name: plan_lng("ld_tis"),
            data: m_val_max_hl,
            marker: {
                lineWidth: 2,
                lineColor: Highcharts.getOptions().colors[0],
                fillColor: 'white'
            },
            color: Highcharts.getOptions().colors[0]
        };

        tiss_val_fin_arr_hl.push(aa_a);

        //total
        aa_a = {
            type: 'spline',
            name: plan_lng("ld_tis"),
            data: m_val_max_tl,
            marker: {
                lineWidth: 2,
                lineColor: Highcharts.getOptions().colors[0],
                fillColor: 'white'
            },
            color: Highcharts.getOptions().colors[0]
        };

        tiss_val_fin_arr_tl.push(aa_a);


        //Build Tissue Nitrogen Chart
        Highcharts.chart("t_tiss_ng", {

            navigation: {
                buttonOptions: {
                    enabled: false
                }
            },

            chart: {
                resetZoomButton: {
                    position: {
                        align: "center",
                        x: 0
                    },
                    theme: {
                        fill: ColorZoobButtonFill,
                        stroke: ColorZoobButtonStroke,
                        style: {
                            color: ColorZoobButtonText,
                            fontWeight: 'bold'
                        },
                        r: ZoobButtonRadius,
                        states: {
                            hover: {
                                stroke: ColorZoobButtonStrokeHover,
                                fill: ColorZoobButtonFillHover,
                                style: {
                                    color: ColorZoobButtonTextHover
                                }
                            }
                        }
                    }
                },
                exporting: {
                    enabled: false,
                    chartOptions: {
                        chart: {
                            style: {
                                fontFamily: 'Arial'
                            }
                        }
                    }
                },
                type: 'column',
                zoomType: 'xy'
            },
            credits: {
                enabled: false
            },

            title: {
                text: plan_lng("t_tiss_nt")
            },
            xAxis: {
                title: {
                    text: plan_lng("ch_time") + ", " + plan_lng("ch_tmx")
                },
                categories: tiss_cat_arr,
                crosshair: true
            },
            yAxis: {
                min: 0,
                title: {
                    text: plan_lng("ch_pp") + ", " + plan_lng("ch_ata")
                }
            },
            tooltip: {
                headerFormat: '<span style="font-size:15px;text-align: left">{point.key}' + " " + plan_lng("ch_tmx") + '</span><table>',
                pointFormat: '<tr><td style="color:{series.color};padding:0;border-bottom: 0px;font-size:15px;text-align: left">{series.name}: </td>' +
                    '<td style="padding:0;border-bottom: 0px;font-size:15px;text-align: left"><b>{point.y:.2f}' + " " + plan_lng("ch_ata") + '</b></td></tr>',
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
        });
        //Build Tissue Helium Chart
        Highcharts.chart("t_tiss_hl", {
            navigation: {
                buttonOptions: {
                    enabled: false
                }
            },
            chart: {
                resetZoomButton: {
                    position: {
                        align: "center",
                        x: 0
                    },
                    theme: {
                        fill: ColorZoobButtonFill,
                        stroke: ColorZoobButtonStroke,
                        style: {
                            color: ColorZoobButtonText,
                            fontWeight: 'bold'
                        },
                        r: ZoobButtonRadius,
                        states: {
                            hover: {
                                stroke: ColorZoobButtonStrokeHover,
                                fill: ColorZoobButtonFillHover,
                                style: {
                                    color: ColorZoobButtonTextHover
                                }
                            }
                        }
                    }
                },
                exporting: {
                    enabled: false,
                    buttons: {
                        contextButton: {
                            menuItems: null,
                            onclick: function() {
                                this.print();
                            }
                        }
                    },
                    chartOptions: {
                        chart: {
                            style: {
                                fontFamily: 'Arial'
                            }
                        }
                    }
                },
                type: 'column',
                zoomType: 'xy'
            },
            credits: {
                enabled: false
            },
            title: {
                text: plan_lng("t_tiss_hl")
            },
            xAxis: {
                title: {
                    text: plan_lng("ch_time") + ", " + plan_lng("ch_tmx")
                },
                categories: tiss_cat_arr,
                crosshair: true
            },
            yAxis: {
                min: 0,
                title: {
                    text: plan_lng("ch_pp") + ", " + plan_lng("ch_ata")
                }
            },
            tooltip: {
                headerFormat: '<span style="font-size:15px;text-align: left">{point.key}' + " " + plan_lng("ch_tmx") + '</span><table>',
                pointFormat: '<tr><td style="color:{series.color};padding:0;border-bottom: 0px;font-size:15px;text-align: left">{series.name}: </td>' +
                    '<td style="padding:0;border-bottom: 0px;font-size:15px;text-align: left"><b>{point.y:.2f}' + " " + plan_lng("ch_ata") + '</b></td></tr>',
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
        });
        //Build Tissue Total Chart
        Highcharts.chart("t_tiss_tl", {

            navigation: {
                buttonOptions: {
                    enabled: false
                }
            },

            chart: {
                resetZoomButton: {
                    position: {
                        align: "center",
                        x: 0
                    },
                    theme: {
                        fill: ColorZoobButtonFill,
                        stroke: ColorZoobButtonStroke,
                        style: {
                            color: ColorZoobButtonText,
                            fontWeight: 'bold'
                        },
                        r: ZoobButtonRadius,
                        states: {
                            hover: {
                                stroke: ColorZoobButtonStrokeHover,
                                fill: ColorZoobButtonFillHover,
                                style: {
                                    color: ColorZoobButtonTextHover
                                }
                            }
                        }
                    }
                },
                exporting: {
                    enabled: false,
                    buttons: {
                        contextButton: {
                            menuItems: null,
                            onclick: function() {
                                this.print();
                            }
                        }
                    },
                    chartOptions: {
                        chart: {
                            style: {
                                fontFamily: 'Arial'
                            }
                        }
                    }
                },
                type: 'column',
                zoomType: 'xy'
            },
            credits: {
                enabled: false
            },
            title: {
                text: plan_lng("t_tiss_tl")
            },
            xAxis: {
                title: {
                    text: plan_lng("ch_time") + ", " + plan_lng("ch_tmx")
                },
                categories: tiss_cat_arr,
                crosshair: true
            },
            yAxis: {
                min: 0,
                title: {
                    text: plan_lng("ch_pp") + ", " + plan_lng("ch_ata")
                }
            },
            tooltip: {
                headerFormat: '<span style="font-size:15px;text-align: left">{point.key}' + " " + plan_lng("ch_tmx") + '</span><table>',
                pointFormat: '<tr><td style="color:{series.color};padding:0;border-bottom: 0px;font-size:15px;text-align: left">{series.name}: </td>' +
                    '<td style="padding:0;border-bottom: 0px;font-size:15px;text-align: left"><b>{point.y:.2f}' + " " + plan_lng("ch_ata") + '</b></td></tr>',
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
        });

        //buld heat map for total tissue
        Highcharts.chart('t_tiss_tl_heat', {

            navigation: {
                buttonOptions: {
                    enabled: false
                }
            },

            chart: {
                resetZoomButton: {
                    position: {
                        align: "center",
                        x: 0
                    },
                    theme: {
                        fill: ColorZoobButtonFill,
                        stroke: ColorZoobButtonStroke,
                        style: {
                            color: ColorZoobButtonText,
                            fontWeight: 'bold'
                        },
                        r: ZoobButtonRadius,
                        states: {
                            hover: {
                                stroke: ColorZoobButtonStrokeHover,
                                fill: ColorZoobButtonFillHover,
                                style: {
                                    color: ColorZoobButtonTextHover
                                }
                            }
                        }
                    }
                },
                exporting: {
                    enabled: false,
                    buttons: {
                        contextButton: {
                            menuItems: null,
                            onclick: function() {
                                this.print();
                            }
                        }
                    },
                    chartOptions: {
                        chart: {
                            style: {
                                fontFamily: 'Arial'
                            }
                        }
                    }
                },
                type: 'area',
                zoomType: 'xy'
            },
            credits: {
                enabled: false
            },
            title: {
                text: plan_lng("t_tiss_tl")
            },
            xAxis: {
                title: {
                    text: plan_lng("ch_time") + ", " + plan_lng("ch_tmx")
                },
                categories: tiss_cat_arr,
                crosshair: false
            },
            yAxis: {
                min: 0,
                max: 100,
                title: {
                    text: "%"
                }
            },
            tooltip: {
                headerFormat: '<span style="font-size:15px;text-align: left">{point.key}' + " " + plan_lng("ch_tmx") + '</span><table>',
                pointFormat: '<tr><td style="color:{series.color};padding:0;border-bottom: 0px;font-size:15px;text-align: left">{series.name}: </td>' +
                    '<td style="padding:0;border-bottom: 0px;font-size:15px;text-align: left"><b>{point.y:.2f}' + " " + plan_lng("ch_ata") + '</b></td></tr>',
                footerFormat: '</table>',
                shared: true,
                useHTML: true
            },
            plotOptions: {
                area: {
                    stacking: 'percent',
                    lineWidth: 0,
                    marker: {
                        enabled: false
                    }

                }
            },
            series: tiss_val_fin_arr_tl_heat
        });

    } else
    //non deco dive and write only one warning about non deco dive
    {
        del_html_elem("t_tiss_ng");
        del_html_elem("t_tiss_hl");
        del_html_elem("t_tiss_tl");
        del_html_elem("t_tiss_tl_heat");
        create_html_text("t_tiss_ng", "t_tiss_wrn", plan_lng("t_tiss_wrn"));
    }
}

/*
if ($("#tn_plan_ccr").val() == 2) {

    var ccr_fixed_plan = dec_table.slice();
    //replace current depth current diluent mix to one selected diluent mix from interface
    var counter = 5;
    var dil_name = $("#opt_levels_mix_0 option:selected").text();

    for (i = 0; i < ccr_fixed_plan.length/5 - 1; i++) {
        //console.log(ccr_fixed_plan[counter + 4]);
        var cnt = 0;
        var current_dil = gass_from_name_arr(ccr_fixed_plan[counter + 4]);
        //console.log(current_dil);
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
            ccr_fixed_plan.splice(counter + 4, 1, dil_name);
        }  
        counter = counter + 5;
    }
    ////CCR plan collapse small ascent and descent levels to one level
    counter = 5;
    var ccr_fixed_plan_new = [ccr_fixed_plan[5] , ccr_fixed_plan[6] , ccr_fixed_plan[7] , ccr_fixed_plan[8] , ccr_fixed_plan[9]];
    var tick_cng = 0;
    for (i = 0; i < ccr_fixed_plan.length/5 - 1; i++) {

        //console.log(ccr_fixed_plan[counter] , ccr_fixed_plan[counter + 5]);
        if(ccr_fixed_plan[counter] == ccr_fixed_plan[counter + 5] && ccr_fixed_plan[counter + 4] == ccr_fixed_plan[counter + 9]){
            console.log("glue");
        }
        else{
            ccr_fixed_plan_new.push(ccr_fixed_plan[counter] , ccr_fixed_plan[counter + 1], ccr_fixed_plan[counter + 2], ccr_fixed_plan[counter + 3], ccr_fixed_plan[counter + 4]);
        }
        counter = counter + 5;
    }
    
    console.log(ccr_fixed_plan_new);
    dec_table = ccr_fixed_plan.slice();
  
}
*/

//build PP profile chart
function pp_profile_chart(html_id2) {



    chart_pp_profile = Highcharts.chart(html_id2, {

        navigation: {
            buttonOptions: {
                enabled: false
            }
        },

        chart: {
            resetZoomButton: {
                position: {
                    align: "center",
                    x: 0
                },
                theme: {
                    fill: ColorZoobButtonFill,
                    stroke: ColorZoobButtonStroke,
                    style: {
                        color: ColorZoobButtonText,
                        fontWeight: 'bold'
                    },
                    r: ZoobButtonRadius,
                    states: {
                        hover: {
                            stroke: ColorZoobButtonStrokeHover,
                            fill: ColorZoobButtonFillHover,
                            style: {
                                color: ColorZoobButtonTextHover
                            }
                        }
                    }
                }
            },
            exporting: {
                enabled: false,
                buttons: {
                    contextButton: {
                        menuItems: null

                    }
                },
                chartOptions: {
                    chart: {
                        style: {
                            fontFamily: 'Arial'
                        }
                    }
                }
            },
            zoomType: 'xy'
        },
        credits: {
            enabled: false
        },
        title: {
            text: plan_lng("ch_pp")
        },
        subtitle: {
            text: plan_lng("ch_source") + ': <a href="http://scan3d.ru/DiveMePro">' +
                'divepro.me</a>'
        },
        xAxis: {
            plotBands: [],
            allowDecimals: false,
            title: {
                text: plan_lng("ch_time")
            },
            labels: {
                formatter: function() {
                    return this.value + plan_lng("ch_tmx");
                }
            }
        },
        yAxis: {
            title: {
                text: plan_lng("ch_pp_l")
            },
            labels: {
                formatter: function() {
                    return this.value / 1 * 1 + plan_lng("ch_ata");
                }
            }
        },
        useHTML: true,
        tooltip: {
            enabled: true,
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
            }, {
                id: 'ppn2',
                lineWidth: 2,
                color: '#ff4964',
                //dashStyle: 'dot',
                name: plan_lng("ch_n2"),
                data: ppn2_array

            }, {
                id: 'pphe',
                lineWidth: 2,
                color: '#5c96dc',
                //dashStyle: 'dot',
                name: plan_lng("ch_he"),
                data: pphe_array
            }
            /*,{
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