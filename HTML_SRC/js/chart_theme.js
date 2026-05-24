function ChartThemeLight(){
    Highcharts.theme = {
        colors: ['#f45b5b', '#8085e9', '#8d4654', '#7798BF', '#aaeeee', '#ff0066', '#eeaaee',
            '#55BF3B', '#DF5353', '#7798BF', '#aaeeee'],
        chart: {
            backgroundColor: null,
            style: {
                fontFamily: 'Signika, serif'
            }
        },
        title: {
            style: {
                color: 'black',
                fontSize: '16px',
                fontWeight: 'bold',
                fontFamily: 'Signika, serif'
            }
        },
        subtitle: {
            style: {
                color: 'black',
                fontFamily: 'Signika, serif'
            }
        },
        tooltip: {
            borderWidth: 0,
            style: {
                fontFamily: 'Signika, serif'
            }
        },
        legend: {
        itemStyle: {
            fontWeight: 'bold',
            fontSize: '13px',
            color: '#000000',
            fontFamily: 'Signika, serif'
        },
        itemHoverStyle: {
            color: '#606063'
        },
        itemHiddenStyle: {
            color: '#606063'
        }
    },
        xAxis: {
            labels: {
                style: {
                    color: '#6e6e70',
                    fontFamily: 'Signika, serif'
                }
            },
            title: {
                style: {
                    fontFamily: 'Signika, serif'
                }
            }
        },
        yAxis: {
            labels: {
                style: {
                    color: '#6e6e70',
                    fontFamily: 'Signika, serif'
                }
            },
            title: {
                style: {
                    fontFamily: 'Signika, serif'
                }
            }
        },
        plotOptions: {
            series: {
                shadow: true,
                marker: {
                    lineColor: '#a0a0a0'
                }
            },
            candlestick: {
                lineColor: '#404048'
            },
            map: {
                shadow: false
            }
        },

        // Highstock specific
        navigator: {
            xAxis: {
                gridLineColor: '#D0D0D8'
            }
        },
        rangeSelector: {
            buttonTheme: {
                fill: 'white',
                stroke: '#C0C0C8',
                'stroke-width': 1,
                states: {
                    select: {
                        fill: '#D0D0D8'
                    }
                }
            }
        },
        scrollbar: {
            trackBorderColor: '#C0C0C8'
        },

        // General
        background2: '#E0E0E8'

    };
    return Highcharts.theme;
}
function ChartThemeDark(){
    //First Change Chart Theme
    Highcharts.theme = {
   colors: ['#2b908f', '#90ee7e', '#f45b5b', '#7798BF', '#aaeeee', '#ff0066', '#eeaaee',
      '#55BF3B', '#DF5353', '#7798BF', '#aaeeee'],
   chart: {
      backgroundColor: "#2a2a2b"
      ,
      style: {
         fontFamily: '\'Unica One\', sans-serif'
      },
      plotBorderColor: '#606063'
   },
   title: {
      style: {
         color: '#E0E0E3',
         textTransform: 'uppercase',
         fontSize: '20px',
         fontFamily: '\'Unica One\', sans-serif'
      }
   },
   subtitle: {
      style: {
         color: '#E0E0E3',
         textTransform: 'uppercase',
         fontFamily: '\'Unica One\', sans-serif'
      }
   },
   xAxis: {
      gridLineColor: '#707073',
      labels: {
         style: {
            color: '#E0E0E3',
            fontFamily: '\'Unica One\', sans-serif'
         }
      },
      lineColor: '#707073',
      minorGridLineColor: '#505053',
      tickColor: '#707073',
      title: {
         style: {
            color: '#A0A0A3',
            fontFamily: '\'Unica One\', sans-serif'
         }
      }
   },
   yAxis: {
      gridLineColor: '#707073',
      labels: {
         style: {
            color: '#E0E0E3',
            fontFamily: '\'Unica One\', sans-serif'
         }
      },
      lineColor: '#707073',
      minorGridLineColor: '#505053',
      tickColor: '#707073',
      tickWidth: 1,
      title: {
         style: {
            color: '#A0A0A3',
            fontFamily: '\'Unica One\', sans-serif'
         }
      }
   },
   tooltip: {
      backgroundColor: 'rgba(0, 0, 0, 0.85)',
      style: {
         color: '#F0F0F0',
         fontFamily: '\'Unica One\', sans-serif'
      }
   },
   plotOptions: {
      series: {
         dataLabels: {
            color: '#B0B0B3'
         },
         marker: {
            lineColor: '#333'
         }
      },
      boxplot: {
         fillColor: '#505053'
      },
      candlestick: {
         lineColor: 'white'
      },
      errorbar: {
         color: 'white'
      }
   },
   legend: {
      itemStyle: {
         color: '#E0E0E3',
         fontFamily: '\'Unica One\', sans-serif'
      },
      itemHoverStyle: {
         color: '#FFF'
      },
      itemHiddenStyle: {
         color: '#606063'
      }
   },
   credits: {
      style: {
         color: '#666'
      }
   },
   labels: {
      style: {
         color: '#707073'
      }
   },

   drilldown: {
      activeAxisLabelStyle: {
         color: '#F0F0F3'
      },
      activeDataLabelStyle: {
         color: '#F0F0F3'
      }
   },

   navigation: {
      buttonOptions: {
         symbolStroke: '#DDDDDD',
         theme: {
            fill: '#505053'
         }
      }
   },

   // scroll charts
   rangeSelector: {
      buttonTheme: {
         fill: '#505053',
         stroke: '#000000',
         style: {
            color: '#CCC'
         },
         states: {
            hover: {
               fill: '#707073',
               stroke: '#000000',
               style: {
                  color: 'white'
               }
            },
            select: {
               fill: '#000003',
               stroke: '#000000',
               style: {
                  color: 'white'
               }
            }
         }
      },
      inputBoxBorderColor: '#505053',
      inputStyle: {
         backgroundColor: '#333',
         color: 'silver'
      },
      labelStyle: {
         color: 'silver'
      }
   },

   navigator: {
      handles: {
         backgroundColor: '#666',
         borderColor: '#AAA'
      },
      outlineColor: '#CCC',
      maskFill: 'rgba(255,255,255,0.1)',
      series: {
         color: '#7798BF',
         lineColor: '#A6C7ED'
      },
      xAxis: {
         gridLineColor: '#505053'
      }
   },

   scrollbar: {
      barBackgroundColor: '#808083',
      barBorderColor: '#808083',
      buttonArrowColor: '#CCC',
      buttonBackgroundColor: '#606063',
      buttonBorderColor: '#606063',
      rifleColor: '#FFF',
      trackBackgroundColor: '#404043',
      trackBorderColor: '#404043'
   },

   // special colors for some of the
   //legendBackgroundColor: 'rgba(0, 0, 0, 0.5)',
   //background2: '#505053',
   dataLabelsColor: '#B0B0B3',
   textColor: '#C0C0C0',
   contrastTextColor: '#F0F0F3',
   //maskColor: 'rgba(255,255,255,0.3)'
};
return Highcharts.theme;

}

function ChartThemeMilitary(){
    Highcharts.theme = {
        colors: ['#7db866', '#a8d870', '#c8f090', '#4a9e2a', '#5ab82e', '#2d8c1a', '#9dd65a',
                 '#6abf3a', '#3a6e1e', '#b8e88a', '#1e5a0e'],
        chart: {
            backgroundColor: '#060d04',
            style: {
                fontFamily: '\'MilitaryHUD\', monospace'
            },
            plotBorderColor: '#2d5a1b'
        },
        title: {
            style: {
                color: '#a8d870',
                textTransform: 'uppercase',
                fontSize: '18px',
                fontFamily: '\'MilitaryHUD\', monospace'
            }
        },
        subtitle: {
            style: {
                color: '#7db866',
                textTransform: 'uppercase',
                fontFamily: '\'MilitaryHUD\', monospace'
            }
        },
        xAxis: {
            gridLineColor: '#1e3a12',
            labels: {
                style: {
                    color: '#7db866',
                    fontFamily: '\'MilitaryHUD\', monospace'
                }
            },
            lineColor: '#2d5a1b',
            minorGridLineColor: '#0e1f09',
            tickColor: '#2d5a1b',
            title: {
                style: {
                    color: '#7db866',
                    fontFamily: '\'MilitaryHUD\', monospace'
                }
            }
        },
        yAxis: {
            gridLineColor: '#1e3a12',
            labels: {
                style: {
                    color: '#7db866',
                    fontFamily: '\'MilitaryHUD\', monospace'
                }
            },
            lineColor: '#2d5a1b',
            minorGridLineColor: '#0e1f09',
            tickColor: '#2d5a1b',
            tickWidth: 1,
            title: {
                style: {
                    color: '#7db866',
                    fontFamily: '\'MilitaryHUD\', monospace'
                }
            }
        },
        tooltip: {
            backgroundColor: 'rgba(6, 13, 4, 0.92)',
            borderColor: '#4a7c2a',
            style: {
                color: '#c8f090',
                fontFamily: '\'MilitaryHUD\', monospace'
            }
        },
        plotOptions: {
            series: {
                dataLabels: {
                    color: '#7db866'
                },
                marker: {
                    lineColor: '#1e3a12'
                }
            },
            boxplot: {
                fillColor: '#0e1f09'
            },
            candlestick: {
                lineColor: '#a8d870'
            },
            errorbar: {
                color: '#7db866'
            }
        },
        legend: {
            itemStyle: {
                color: '#a8d870',
                fontFamily: '\'MilitaryHUD\', monospace'
            },
            itemHoverStyle: {
                color: '#c8f090'
            },
            itemHiddenStyle: {
                color: '#2d5a1b'
            }
        },
        credits: {
            style: {
                color: '#2d5a1b'
            }
        },
        labels: {
            style: {
                color: '#4a7c2a'
            }
        },
        drilldown: {
            activeAxisLabelStyle: {
                color: '#a8d870'
            },
            activeDataLabelStyle: {
                color: '#a8d870'
            }
        },
        navigation: {
            buttonOptions: {
                symbolStroke: '#7db866',
                theme: {
                    fill: '#0e1f09'
                }
            }
        },
        rangeSelector: {
            buttonTheme: {
                fill: '#0e1f09',
                stroke: '#2d5a1b',
                style: {
                    color: '#7db866'
                },
                states: {
                    hover: {
                        fill: '#1e3a12',
                        stroke: '#4a7c2a',
                        style: {
                            color: '#a8d870'
                        }
                    },
                    select: {
                        fill: '#060d04',
                        stroke: '#4a7c2a',
                        style: {
                            color: '#c8f090'
                        }
                    }
                }
            },
            inputBoxBorderColor: '#2d5a1b',
            inputStyle: {
                backgroundColor: '#0e1f09',
                color: '#7db866'
            },
            labelStyle: {
                color: '#7db866'
            }
        },
        navigator: {
            handles: {
                backgroundColor: '#1e3a12',
                borderColor: '#4a7c2a'
            },
            outlineColor: '#2d5a1b',
            maskFill: 'rgba(74,124,42,0.15)',
            series: {
                color: '#7db866',
                lineColor: '#a8d870'
            },
            xAxis: {
                gridLineColor: '#1e3a12'
            }
        },
        scrollbar: {
            barBackgroundColor: '#1e3a12',
            barBorderColor: '#2d5a1b',
            buttonArrowColor: '#7db866',
            buttonBackgroundColor: '#0e1f09',
            buttonBorderColor: '#2d5a1b',
            rifleColor: '#a8d870',
            trackBackgroundColor: '#060d04',
            trackBorderColor: '#0e1f09'
        },
        dataLabelsColor: '#7db866',
        textColor: '#7db866',
        contrastTextColor: '#c8f090'
    };
    return Highcharts.theme;
}

function ChartThemeSailor(){
    Highcharts.theme = {
        colors: ['#e91e8c', '#ff69b4', '#7cb9e8', '#c2185b', '#ffadd6',
                 '#f48fb1', '#ad1457', '#81d4fa', '#ffd700', '#ff80ab',
                 '#4fc3f7'],
        chart: {
            backgroundColor: '#ffffff',
            style: {
                fontFamily: '\'FirstFont\', sans-serif'
            },
            plotBorderColor: '#f8bbd0'
        },
        title: {
            style: {
                color: '#c2185b',
                fontSize: '18px',
                fontWeight: 'bold'
            }
        },
        subtitle: {
            style: {
                color: '#e91e8c'
            }
        },
        xAxis: {
            gridLineColor: '#fce4ec',
            labels: {
                style: { color: '#ad1457' }
            },
            lineColor: '#f48fb1',
            minorGridLineColor: '#fff0f5',
            tickColor: '#f48fb1',
            title: {
                style: { color: '#c2185b' }
            }
        },
        yAxis: {
            gridLineColor: '#fce4ec',
            labels: {
                style: { color: '#ad1457' }
            },
            lineColor: '#f48fb1',
            minorGridLineColor: '#fff0f5',
            tickColor: '#f48fb1',
            tickWidth: 1,
            title: {
                style: { color: '#c2185b' }
            }
        },
        tooltip: {
            backgroundColor: 'rgba(255,240,245,0.95)',
            borderColor: '#f48fb1',
            style: { color: '#2d1a2e' }
        },
        plotOptions: {
            series: {
                dataLabels: { color: '#c2185b' },
                marker: { lineColor: '#fce4ec' }
            },
            boxplot:     { fillColor: '#fce4ec' },
            candlestick: { lineColor: '#e91e8c' },
            errorbar:    { color: '#e91e8c' }
        },
        legend: {
            itemStyle:       { color: '#2d1a2e' },
            itemHoverStyle:  { color: '#e91e8c' },
            itemHiddenStyle: { color: '#f8bbd0' }
        },
        credits: {
            style: { color: '#f48fb1' }
        },
        labels: {
            style: { color: '#ad1457' }
        },
        drilldown: {
            activeAxisLabelStyle:  { color: '#c2185b' },
            activeDataLabelStyle:  { color: '#c2185b' }
        },
        navigation: {
            buttonOptions: {
                symbolStroke: '#e91e8c',
                theme: { fill: '#fce4ec' }
            }
        },
        rangeSelector: {
            buttonTheme: {
                fill: '#fce4ec',
                stroke: '#f48fb1',
                style: { color: '#c2185b' },
                states: {
                    hover: {
                        fill: '#f8bbd0',
                        stroke: '#e91e8c',
                        style: { color: '#ad1457' }
                    },
                    select: {
                        fill: '#e91e8c',
                        stroke: '#c2185b',
                        style: { color: '#ffffff' }
                    }
                }
            },
            inputBoxBorderColor: '#f48fb1',
            inputStyle: { backgroundColor: '#fff0f5', color: '#2d1a2e' },
            labelStyle:  { color: '#c2185b' }
        },
        navigator: {
            handles: {
                backgroundColor: '#fce4ec',
                borderColor: '#f48fb1'
            },
            outlineColor: '#f48fb1',
            maskFill: 'rgba(233,30,140,0.1)',
            series: {
                color: '#e91e8c',
                lineColor: '#ff69b4'
            },
            xAxis: { gridLineColor: '#fce4ec' }
        },
        scrollbar: {
            barBackgroundColor: '#f48fb1',
            barBorderColor:     '#f48fb1',
            buttonArrowColor:   '#ffffff',
            buttonBackgroundColor: '#fce4ec',
            buttonBorderColor:     '#f48fb1',
            rifleColor:         '#e91e8c',
            trackBackgroundColor: '#fff0f5',
            trackBorderColor:     '#fce4ec'
        },
        dataLabelsColor: '#c2185b',
        textColor: '#2d1a2e',
        contrastTextColor: '#e91e8c'
    };
    return Highcharts.theme;
}
