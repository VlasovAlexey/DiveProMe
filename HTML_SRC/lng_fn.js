	//Change Interface Lang
	var lng_opt = document.getElementById("tn_lng");
	
	var lang = {
	  1: {
	   //Eng

		  ".tn_download_local" : "Download Local Version",
		".tn_btn_tiss" : "Build Charts",
		".td_copyright" : "Copyright © 2016 Alexey Vlasov. Licensed under the Apache License 2.0",
	    ".btn_save" : "Save Current Settings",
		".btn_restore" : "Restore Defaults",
        ".tr_ifc_set" : "Interface Style",
        ".tn_color_dark" : "Dark Theme",
        ".tn_color_light" : "Light Theme",

	    ".tn_water_baltic" : "Baltic Sea",
	    ".tn_water_redsea" : "Red Sea",
	    ".tn_water_glake" : "Great Lake Utah",
	    ".tn_water_deadsea" : "Dead Sea",
	    ".tn_water_salt" : "Atlantic",
	    
	    ".tn_ppn2_max_deco" : "PPN<sub><small>2</small></sub> Max Deco",
	    ".tr_celsus" : "Surface Environment Temperature C<sup><small>o</small></sup> ",
	    ".tr_levels" : "Mix / Depth / Time",
	    ".btn_add_lvl" : "Add Level",
	    ".btn_del_lvl" : "Delete Level",
	    
	    ".tr_rate_dsc" : "Descent Rate",
	    ".tr_rate_asc" : "Ascent Rate",
	    ".tr_rate_asc_deco" : "Ascent Deco Rate",
	    ".tr_rmv_deco" : "Deco RMV",
	    ".tr_rmv_bt" : "Bottom RMV",
	    ".tr_cng_time" : "Mix Change Extra Time",
	    ".tr_lst_stop" : "Last Stop",
	    
	    ".tn_ppo2_deco" : "PPO<sub><small>2</small></sub> Deco",
	    ".tn_ppo2_bottom" : "PPO<sub><small>2</small></sub> Bottom",
	    ".tn_ppo2_min" : "PPO<sub><small>2</small></sub> Min",
	    ".tn_ppn2_max" : "PPN<sub><small>2</small></sub> Max",
	    ".tn_ibcd_ppn2" : "ICD PPN<sub><small>2</small></sub> Max",
	    ".tn_ibcd_pphe" : "ICD PPHe Max",
	    ".tn_dmn_mtr" : "Meters/Liters/Atm.",
	    ".tn_dmn_imp" : "Feet/Cu.Feet/Atm.",
	    ".tr_mdl" : "Deco Model",
	    ".tr_water" : "Water",
	    ".tn_water_fresh" : "Fresh",
	    ".tr_gf" : "Gradient Factor",
	    ".tr_slevel" : "Dive Elevation",
	    ".tn_travel" : "Total Travel/Bottom Mix",
	    ".tn_deco" : "Total Deco Mixes",
	   
	    ".header0" : "Global Settings",
	    ".header1" : "Dive Settings",
	    ".header2" : "Dive Alerts",
	    ".header3" : "Dive Gases",
	    ".header4" : "Build Dive Profile",
	    ".header5" : "Gas Partial Pressures",
        ".header6" : "Gas Tension in Tissue Compartments",
          ".header7" : "Gas Consumption",
          ".header8" : "Gas Price",
          //".header9" : "Gas Blending",
          ".header9" : "Learning Tools",

	    ".tr_lng" : "Language",
	    ".tr_dmn" : "Dimensions",
	    ".td_warn" : "WARNING! THERE IS ALWAYS A RISK OF DECOMPRESSION SICKNESS (DCS) FOR ANY DIVE PROFILE EVEN IF YOU FOLLOW THE DIVE PLAN PRESCRIBED BY DIVE TABLES. NO PROCEDURE OR DIVE TABLE WILL PREVENT THE POSSIBILITY OF DCS OR OXYGEN TOXICITY! An individual’s physiological make up can vary from day to day. You are strongly advised to remain well within the exposure limits provided by the planner to minimize the risk of DCS.",

          ".tn_wrn_ibcd_lip" : "Consider Lipid Response",
          ".tn_wrn_btm_mix" :"Bottom Mix More",
          ".tn_wrn_deco_mix49" :"Deco Mix Up 49% More",
          ".tn_wrn_deco_mix50" :"Deco Mix 50 to 99% More",
          ".tn_wrn_deco_mix100" :"Deco Oxy More",

          ".tn_ibcd_lip_yes" :"Yes",
          ".tn_ibcd_lip_no" :"No",

          //".tn_blnd_temp" :"Gas Temperature C<sup><small>o</small></sup>",
          //".tn_blnd_temp_mode" :"Gas Model",
          //".tn_blend_mix_first" :"Add First Gas",

          //".tn_blend_press_start" :"Mix Start Pressure",
          //".tn_blend_press_end" :"New Mix Pressure",
          //".tn_blend_he_start" :"He Mix Start Percents",
          //".tn_blend_o2_start" :"O<sub><small>2</small></sub> Mix Start Percents",
          //".tn_blend_he_end" :"He New Mix Percents",
          //".tn_blend_o2_end" :"O<sub><small>2</small></sub> New Mix Percents",

          ".tn_calc_depth" :"Maximum Operation Depth",
          ".tn_calc_o2" :"Oxygen",
          ".tn_calc_he" :"Helium",
          ".tn_calc_depth_lo" :"Minimum Operation Depth",

          //".tn_blnd_temp_mode_ideal" :"Ideal Model",
          //".tn_blnd_temp_mode_vdv" :"Van Der Waals Model",
          //".tn_mix_first_he" :"He",
          //".tn_mix_first_o2" :"O<sub><small>2</small></sub>",

          ".tn_price_cur" :"Currency Selection",
          ".tn_price_top" :"Gas Top Price",
          ".tn_price_he" :"He Price per Unit",
          ".tn_price_o2" :"O<sub><small>2</small></sub> Price per Unit",
          ".tn_price_us" :"US Dollar",
          ".tn_price_eu" :"Euro",
          ".tn_price_uk" :"British Pound",
          ".tn_price_rf" :"Russian Ruble",

          ".btn_export_pdf_profile" :"PDF Export",
          ".btn_export_pdf_pp" :"PDF Export",
          ".tn_btn_overlay" :"Close",
          ".btn_export_xls" :"Export XLS Table",
          ".btn_tbl_pdf" :"Export PDF Table",

          ".tn_calc_ead" :"EAD:&nbsp;",
          ".tn_calc_end" :"END:&nbsp;",

          ".tn_calc_o2max" : "&nbsp;PPO<sub><small>2</small></sub> Bottom&nbsp;",
          ".tn_calc_o2min" : "&nbsp;PPO<sub><small>2</small></sub> Min&nbsp;",
          ".tn_calc_n2max" : "&nbsp;PPN<sub><small>2</small></sub> Max",

          ".tn_calc_f_app" :"Formulas and Computation",
          ".tn_calc_f_mod" :"Maximum Operation Depth",
          ".tn_calc_f_ead" :"Equivalent Air Depth",
          ".tn_calc_f_ead2" :"Only N<sub><small>2</small></sub> Narcotic",
          ".tn_calc_f_end" :"Equivalent Narcotic Depth",
          ".tn_calc_f_end2" :"N<sub><small>2</small></sub> and O<sub><small>2</small></sub> Narcotic",

          ".tn_calc_cur_ex_rate" :"Exchange Rate for One Dollar",
          ".tn_calc_cur_ex_rate_pound" :"Pounds",
          ".tn_calc_cur_ex_rate_pence" :"Pence",
          ".tn_calc_cur_ex_rate_euro" :"Euro",
          ".tn_calc_cur_ex_rate_eucents" :"Cents",
          ".tn_calc_cur_ex_rate_rub" :"Roubles",
          ".tn_calc_cur_ex_rate_kopek" :"Kopeks"
	  },
	  
	  //Rus
	  2: {
          ".tn_download_local" : "Скачать локальную версию",
        ".tn_btn_tiss" : "Построить диаграммы",
        ".td_copyright" : "Все права защищены © 2016 Алексей Власов. Использование в соответствии с Apache 2.0 лицензией.",
	    ".btn_save" : "Сохранить текущие настройки",
        ".btn_restore" : "Настройки по умолчанию",
        ".tr_ifc_set" : "Стиль интерфейса",
        ".tn_color_dark" : " Ночная тема",
        ".tn_color_light" : "Дневная тема",

	    ".tn_water_baltic" : "Балтийское море",
	    ".tn_water_redsea" : "Красное море",
	    ".tn_water_glake" : "Великое озеро Юта",
	    ".tn_water_deadsea" : "Мертвое море",
	    ".tn_water_salt" : "Атлантика",

	    ".tn_ppn2_max_deco" : "Максимальное ПД N<sub><small>2</small></sub> деко",
	    ".tr_celsus" : "Температура на поверхности C<sup><small>o</small></sup> ",
	    ".tr_levels" : "Смесь / глубина / время",
	    ".btn_add_lvl" : "Добавить глубину",
	    ".btn_del_lvl" : "Удалить глубину",
	  
	    ".tr_rate_dsc" : "Скорость погружения",
	    ".tr_rate_asc" : "Скорость всплытия",
	    ".tr_rate_asc_deco" : "Скорость всплытия на деко",
	    ".tr_rmv_deco" : "Дыхание на деко",
	    ".tr_rmv_bt" : "Дыхание на дне",
	    ".tr_cng_time" : "Время смены смесей",
	    ".tr_lst_stop" : "Последняя остановка",
	    
	    ".tn_ppo2_deco" : "ПД O<sub><small>2</small></sub> деко",
	    ".tn_ppo2_bottom" : "ПД O<sub><small>2</small></sub> на дне",
	    ".tn_ppo2_min" : "Минимальное ПД O<sub><small>2</small></sub>",
	    
	    ".tn_ppn2_max" : "Максимальное ПД N<sub><small>2</small></sub>",
	    ".tn_ibcd_ppn2" : "Предел ИКД ПД N<sub><small>2</small></sub>",
	    ".tn_ibcd_pphe" : "Предел ИКД ПД He",
	    
	    ".tn_dmn_mtr" : "Метры/литры/атм.",
	    ".tn_dmn_imp" : "Футы/куб.футы",
	    ".tr_mdl" : "Декомпрессионая модель",
	    ".tr_water" : "Вода",
	    ".tn_water_fresh" : "Пресная",
	    
	    ".tr_gf" : "Градиент фактор",
	    ".tr_slevel" : "Альтиту́да",
	    
	    ".tn_travel" : "Число донных/транспортных смесей",
	    ".tn_deco" : "Число декомпрессионных смесей",
	   
	    ".header0" : "Глобальные настройки",
	    ".header1" : "Параметры погружения",
	    ".header2" : "Предупреждения погружения",
	    ".header3" : "Смеси погружения",
	    ".header4" : "Профиль погружения",
	    ".header5" : "Парциальные давления газов",
        ".header6" : "Давление газов в тканях",
          ".header7" : "Расход газов",
          ".header8" : "Стоимость газов",
          //".header9" : "Компрессорная",
          ".header9" : "Инструменты обучения",



	    ".tr_lng" : "Язык",
	    ".tr_dmn" : "Еденицы измерения",
	    ".td_warn" : "ПРЕДУПРЕЖДЕНИЕ! ВНЕ ЗАВИСИМОСТИ ОТ ПРОФИЛЯ ПОГРУЖЕНИЯ И ДАЖЕ В СЛУЧАЕ СОБЛЮДЕНИЯ ПЛАНА ПОГРУЖЕНИЯ, ПРЕДПИСАННОГО ДЕКОМПРЕССИОННЫМИ ТАБЛИЦАМИ, ВСЕГДА СУЩЕСТВУЕТ ОПАСНОСТЬ ВОЗНИКНОВЕНИЯ ДЕКОМПРЕССИОННОЙ БОЛЕЗНИ (ДКБ). НИКАКАЯ ПРОЦЕДУРА ИЛИ ДЕКОМПРЕССИОННАЯ ТАБЛИЦА НЕ СПОСОБНЫ ИСКЛЮЧИТЬ ВОЗМОЖНОСТЬ ВОЗНИКНОВЕНИЯ ДЕКОМПРЕССИОННОЙ БОЛЕЗНИ ИЛИ КИСЛОРОДНОГО ОТРАВЛЕНИЯ! Физиологическое состояние конкретного человека в разные дни может различаться. Настоятельно рекомендуем соблюдать предложенные планером пределы воздействий, причем со значительным запасом, чтобы минимизировать риск возникновения декомпрессионной болезни (ДКБ).",

          ".tn_wrn_ibcd_lip" : "Учитывать липидную реакцию",
          ".tn_wrn_btm_mix" :"Донная смесь более",
          ".tn_wrn_deco_mix49" :"Смесь деко до 49% более",
          ".tn_wrn_deco_mix50" :"Смесь деко 50 до 99% более",
          ".tn_wrn_deco_mix100" :"Смесь кислород более",

          ".tn_ibcd_lip_yes" :"Да",
          ".tn_ibcd_lip_no" :"Нет",

          //".tn_blnd_temp" :"Температура газа C<sup><small>o</small></sup>",
          //".tn_blnd_temp_mode" :"Модель газа",

          //".tn_blend_mix_first" :"Какой газ набиваем первый",
          //".tn_blend_press_start" :"Давление газа до забивки",
          //".tn_blend_press_end" :"Желаемое давление газа",
          //".tn_blend_he_start" :"Процент He до забивки",
          //".tn_blend_o2_start" :"Процент O<sub><small>2</small></sub> до забивки",
          //".tn_blend_he_end" :"Желаемый процент He в смеси",
          //".tn_blend_o2_end" :"Желаемый процент O<sub><small>2</small></sub> в смеси",

          ".tn_calc_depth" :"Максимальная рабочая глубина",
          ".tn_calc_o2" :"Кислород",
          ".tn_calc_he" :"Гелий",
          ".tn_calc_depth_lo" :"Минимальная рабочая глубина",

          //".tn_blnd_temp_mode_ideal" :"Идеальный газ",
          //".tn_blnd_temp_mode_vdv" :"Ван-дер-Ваальс",
          //".tn_mix_first_he" :"He",
          //".tn_mix_first_o2" :"O<sub><small>2</small></sub>",

          ".tn_price_cur" :"Выбор Валюты",
          ".tn_price_top" :"Стоимость забивки газов",
          ".tn_price_he" :"He стоимость за еденицу",
          ".tn_price_o2" :"O<sub><small>2</small></sub> стоимость за еденицу",
          ".tn_price_us" :"Доллар США",
          ".tn_price_eu" :"Евро",
          ".tn_price_uk" :"Британский Фунт",
          ".tn_price_rf" :"Российский рубль",

          ".btn_export_pdf_profile" :"Экспорт в PDF",
          ".btn_export_pdf_pp" :"Экспорт в PDF",
          ".tn_btn_overlay" :"Закрыть",
          ".btn_export_xls" :"Экспорт в XLS таблицу",
          ".btn_tbl_pdf" :"Экспорт таблицы в PDF",

          ".tn_calc_ead" :"ЭВГ:&nbsp;",
          ".tn_calc_end" :"ЭНГ:&nbsp;",

          ".tn_calc_o2max" : "&nbsp;ПД O<sub><small>2</small></sub> на дне&nbsp;",
          ".tn_calc_o2min" : "&nbsp;ПД O<sub><small>2</small></sub> мин.&nbsp;",
          ".tn_calc_n2max" : "&nbsp;ПД N<sub><small>2</small></sub> макс.",

          ".tn_calc_f_app" :"Формулы и расчеты",
          ".tn_calc_f_mod" :"Максимальная рабочая глубина",
          ".tn_calc_f_ead" :"Эквивалентная воздушная глубина",
          ".tn_calc_f_ead2" :"Наркотичен только N<sub><small>2</small></sub>",
          ".tn_calc_f_end" :"Эквивалентная наркотическая глубина",
          ".tn_calc_f_end2" :"Наркотичен N<sub><small>2</small></sub> и O<sub><small>2</small></sub>",

          ".tn_calc_cur_ex_rate" :"Обменный курс к одному доллару",
          ".tn_calc_cur_ex_rate_pound" :"Фунтов",
          ".tn_calc_cur_ex_rate_pence" :"Пенсов",
          ".tn_calc_cur_ex_rate_euro" :"Евро",
          ".tn_calc_cur_ex_rate_eucents" :"Центов",
          ".tn_calc_cur_ex_rate_rub" :"Рублей",
          ".tn_calc_cur_ex_rate_kopek" :"Копеек"
      },
	  
	  //Spa
	  3: {
          ".tn_download_local" : "Descargue Versión Local",
        ".tn_btn_tiss" : "Construya Сartas",
        ".td_copyright" : "Copyright © 2016 Alexey Vlasov. Licenciado según la licencia de Apache 2.0.",
	    ".btn_save" : "Salve Ajustes Corrientes",
        ".btn_restore" : "Restaure Configuraciones",
        ".tr_ifc_set" : "Estilo del Interfaz",
        ".tn_color_dark" : "Tema Oscuro",
		".tn_color_light" : "Tema Ligero",

	    ".tn_water_baltic" : "Mar Báltico",
	    ".tn_water_redsea" : "Mar Rojo",
	    ".tn_water_glake" : "Gran Lago Utah",
	    ".tn_water_deadsea" : "Mar Muerto",
	    ".tn_water_salt" : "Atlántico",

	    ".tn_ppn2_max_deco" : "PPN<sub><small>2</small></sub> Max. Desco",
	    ".tr_celsus" : "Temperatura Firme del Ambiente C<sup><small>o</small></sup> ",
	    ".tr_levels" : "Mezcla / Nivel / Tiempo",
	    ".btn_add_lvl" : "Añada Nivel",
	    ".btn_del_lvl" : "Borrar Nivel",
	    
	    ".tr_rate_dsc" : "Descenso Precio",
	    ".tr_rate_asc" : "Subida Precio",
	    ".tr_rate_asc_deco" : "Subida Deco Precio",
	    ".tr_rmv_deco" : "Desco RMV",
	    ".tr_rmv_bt" : "Fondo RMV",
	    ".tr_cng_time" : "Prórroga Cambio de Mezcla",
	    ".tr_lst_stop" : "Última Parada",
	    
	    ".tn_ppo2_deco" : "PPO<sub><small>2</small></sub> Desco",
	    ".tn_ppo2_bottom" : "PPO<sub><small>2</small></sub> Fondo",
	    ".tn_ppo2_min" : "PPO<sub><small>2</small></sub> Min.",
	    ".tn_ppn2_max" : "PPN<sub><small>2</small></sub> Max.",
	    ".tn_ibcd_ppn2" : "ICD PPN<sub><small>2</small></sub> Max.",
	    ".tn_ibcd_pphe" : "ICD PPHe Max",
	    ".tn_dmn_mtr" : "Metros/Litros/Atm.",
	    ".tn_dmn_imp" : "Ft/Cú.Ft./Atm.",
	    ".tr_mdl" : "Desco Model",
	    ".tr_water" : "Agua",
	    ".tn_water_fresh" : "Dulce",
	    ".tr_gf" : "Gradient Factor",
	    ".tr_slevel" : "Mar el Nivel",
	    ".tn_travel" : "Mezcla de Viajes/Fondo Total",
	    ".tn_deco" : "Deco Mezcla Total",
	    
	    ".header0" : "Ajustes Globales",
	    ".header1" : "Ajustes Sumergirse",
	    ".header2" : "Alarmas Sumergirse",
	    ".header3" : "Gases Sumergirse",
	    ".header4" : "Perfil Sumergirse",
	    ".header5" : "Presión Parcial/Consumo",
        ".header6" : "Tensión Gas en Compartimentos",
          ".header7" : "Consumo",
          ".header8" : "Precio Gas",
          //".header9" : "Mezcla Gas",
          ".header9" : "Aprendizaje Instrumentos",

	    ".tr_lng" : "Lengue",
	    ".tr_dmn" : "Dimensión",
	    ".td_warn" : "SIEMPRE EXISTE EL RIESGO DE ENFERMEDAD DESCOMPRESIVA (ED) EN CUALQUIER PERFIL DE BUCEO, INCLUSO SI SIGUE EL PLAN DE BUCEO PRESCRITO POR TABLAS DE INMERSIÓN U ORDENADOR DE BUCEO. ¡NINGÚN PROCEDIMIENTO, ORDENADOR DE BUCEO O TABLA DE INMERSIÓN IMPEDIRÁ LA POSIBILIDAD DE ED O DE TOXICIDAD DEL OXÍGENO! La fisiología de cada persona puede variar de un día para otro. El ordenador de buceo no puede tener en cuenta estas variaciones. Recomendamos encarecidamente que permanezca claramente dentro de los límites de exposición indicados por el instrumento para reducir el riesgo de ED.",

          ".tn_wrn_ibcd_lip" : "Considere Respuesta Lípido",
          ".tn_wrn_btm_mix" :"Mezcla del Fondo más",
          ".tn_wrn_deco_mix49" :"Deco Mezcla bien 49% más",
          ".tn_wrn_deco_mix50" :"Deco Mezcla 50 a 99% más",
          ".tn_wrn_deco_mix100" :"Deco Oxy",
          ".tn_ibcd_lip_yes" :"Si",
          ".tn_ibcd_lip_no" :"No",

         // ".tn_blnd_temp" :"Temperatura Gas C<sup><small>o</small></sup>",
          //".tn_blnd_temp_mode" :"Modelo Gas",

          //".tn_blend_mix_first" :"Añada Primer Gas",
          //".tn_blend_press_start" :"Presión Principio Mezcla",
          //".tn_blend_press_end" :"Nueva Presión Mezcla",
          //".tn_blend_he_start" :"He Por Ciento Principio Mezcla",
          //".tn_blend_o2_start" :"O<sub><small>2</small></sub> Por Ciento Principio Mezcla",
          //".tn_blend_he_end" :"He Nuevos Ciento Mezcla",
          //".tn_blend_o2_end" :"O<sub><small>2</small></sub> Nuevos Ciento Mezcla",

          ".tn_calc_depth" :"Profundidad Operación Máxima",
          ".tn_calc_o2" :"Oxígeno",
          ".tn_calc_he" :"Helio",
          ".tn_calc_depth_lo" :"Profundidad Operación Mínima",

          //".tn_blnd_temp_mode_ideal" :"Ideal",
          //".tn_blnd_temp_mode_vdv" :"Van Der Waals",
          //".tn_mix_first_he" :"He",
          //".tn_mix_first_o2" :"O<sub><small>2</small></sub>",

          ".tn_price_cur" :"Selección Monetaria",
          ".tn_price_top" :"Cumbre Gas",
          ".tn_price_he" :"He Precio de He por Unidad",
          ".tn_price_o2" :"Precio de O<sub><small>2</small></sub> por Unidad",
          ".tn_price_us" :"Dólar Americano",
          ".tn_price_eu" :"Euro",
          ".tn_price_uk" :"Libra Esterlina",
          ".tn_price_rf" :"Rublo Ruso",
          ".btn_export_pdf_profile" :"PDF Exportar",
          ".btn_export_pdf_pp" :"PDF Exportar",

          ".tn_btn_overlay" :"Close",
          ".btn_export_xls" :"Exporte XLS Mesa",
          ".btn_tbl_pdf" :"Export PDF Mesa",

          ".tn_calc_ead" :"EAP:&nbsp;",
          ".tn_calc_end" :"ENP:&nbsp;",

          ".tn_calc_o2max" : "&nbsp;PPO<sub><small>2</small></sub>  Fondo&nbsp;",
          ".tn_calc_o2min" : "&nbsp;PPO<sub><small>2</small></sub> Min.&nbsp;",
          ".tn_calc_n2max" : "&nbsp;PPN<sub><small>2</small></sub> Max.",

          ".tn_calc_f_app" :"Fórmulas y Cálculo",
          ".tn_calc_f_mod" :"Profundidad de Operación Máxima",
          ".tn_calc_f_ead" :"Profundidad de Aire Equivalente",
          ".tn_calc_f_ead2" :"Sólo Narcótico N<sub><small>2</small></sub>",
          ".tn_calc_f_end" :"Profundidad Narcótica Equivalente",
          ".tn_calc_f_end2" :"Narcótico N<sub><small>2</small></sub> y O<sub><small>2</small></sub>",

          ".tn_calc_cur_ex_rate" :"Tipo de Cambio por un Dólar",
          ".tn_calc_cur_ex_rate_pound" :"Libras",
          ".tn_calc_cur_ex_rate_pence" :"Peniques",
          ".tn_calc_cur_ex_rate_euro" :"Euro",
          ".tn_calc_cur_ex_rate_eucents" :"Centavos",
          ".tn_calc_cur_ex_rate_rub" :"Rublos",
          ".tn_calc_cur_ex_rate_kopek" :"Copecs"
      }
	};
	
	function changeLang(force) {
        var td_lng = lng_opt.options[lng_opt.selectedIndex].value;
        if(force == "force"){td_lng = 3}
        for (var i in lang[td_lng]) {
            document.querySelector(i).innerHTML = lang[td_lng][i];
        }

        price_lng_cur_upd();
    }

	lng_opt.addEventListener('change', changeLang);
	changeLang();
	
	function mix_lng(){
	  var td_lng = lng_opt.options[lng_opt.selectedIndex].value;
	  if(td_lng == 1){
	    return "Mix";
	  }
	  if(td_lng == 2){
	    return "Смесь";
	  }
	  if(td_lng == 3){
	    return "Mezcla";
	  }
	}
	
  function plan_lng(val){
      if (force_lng == 1){var td_lng = 1}
      else
      {var td_lng = lng_opt.options[lng_opt.selectedIndex].value}
          ;
      if(td_lng == 1){

          if(val  == "t_tiss_wrn"){val = "This Plan doesn`t Have Decompression Stops. Tissue Compartments will be hidden."}

          if(val  == "t_tiss_nt"){val = "Nitrogen Tissue Compartments"}
          if(val  == "t_tiss_hl"){val = "Helium Tissue Compartments"}
          if(val  == "t_tiss_tl"){val = "Total Tissue Compartments"}

          if(val == "tab_tr_o2"){val = "PPO<sub><small>2</small></sub>"}
          if(val == "tab_tr_n2"){val = "PPN<sub><small>2</small></sub>"}
          if(val == "tab_tr_he"){val = "PPHe"}
          if(val == "tab_tr_coms"){val = "Cons."}
          if(val == "tab_tr_mix"){val = "Mix"}
          if(val == "tab_dmn_ltr"){val = "Litres"}


          if(val == "Level"){val = "Level"}
          if(val == "Ascent"){val = "Ascent"}
          if(val == "Descent"){val = "Descent"}
          if(val == "Stop"){val = "Stop"}
          if(val == "Mix"){val = "Mix"}
          if(val == "RunTime"){val = "RunTime"}
          if(val == "Time"){val = "Time"}
          if(val == "Depth"){val = "Depth"}
          if(val == "Action"){val = "Action"}
          if(val == "Air"){val = "Air"}
          if(val == "OXY"){val = "OXY"}

          if(val == "tab_tr_dmn"){val = "Dimension"}
          if(val == "tab_tr_time"){val = "Time"}

          if(val == "ch_gas_d"){val = "Gas Consumption"}
          if(val == "ch_gas_amnt"){val = "Amount"}
          if(val == "ch_time"){val = "Time"}
          if(val == "ch_gas_ltr"){val = "Ltr."}
          if(val == "ch_depth"){val = "Max Depth"}
          if(val == "ch_source"){val = "Source"}
          if(val == "ch_bottom"){val = "Bottom"}
          if(val == "ch_mtr"){val = "m."}
          if(val == "ch_tmx"){val = "min."}
          if(val == "ch_mix"){val = "Mix Change"}
          if(val == "ch_pp"){val = "Partial Pressures"}
          if(val == "ch_n2"){val = "PPN2"}
          if(val == "ch_o2"){val = "PPO2"}
          if(val == "ch_he"){val = "PPHe"}
          if(val == "ch_pp_l"){val = "Pressure"}
          if(val == "ch_mix_pp"){val = "Used Mix"}
          if(val == "ch_ata"){val = "ATA"}
          if(val == "ch_Tissue"){val = "Tissue"}
          if(val == "ch_UnderDev"){val = "Warning!<br>This Tool under Develop. This GUI only demonstrate Work in Progress.<br>Thank you!<br>"}
          if(val == "ch_tbl_name"){val = "Decompression Table"}
          if(val == "ch_tbl_cons"){val = "Table of Gas Consumption"}

          if(val == "dmn_air"){val = "Air"}
          if(val == "dmn_mod"){val = "MOD"}
          if(val == "dmn_ead"){val = "EAD"}
          if(val == "dmn_end"){val = "END"}

          if(val == "dmn_msw"){val = "msw"}
          if(val == "dmn_fsw"){val = "fsw"}
          if(val == "dmn_bar"){val = "bar"}
          if(val == "dmn_ata"){val = "ATA"}

          if(val == "tn_price_dls_name_dollars"){val = "Dollars"}
          if(val == "tn_price_dls_name_cents"){val = "Cents"}
          if(val == "tn_price_dls_name_euro"){val = "Euros"}
          if(val == "tn_price_dls_name_pound"){val = "Pounds"}
          if(val == "tn_price_dls_name_pence"){val = "Pence"}
          if(val == "tn_price_dls_name_rouble"){val = "Roubles"}
          if(val == "tn_price_dls_name_kopek"){val = "Kopeks"}

          if(val == "price_price"){val = "Price"}
          if(val == "price_currency"){val = "Currency"}
          if(val == "price_gas"){val = "Gas"}
          if(val == "price_gas_total"){val = "Total Price:"}


    }
    if(td_lng == 2){
        if(val  == "t_tiss_wrn"){val = "У этого плана нет декомпрессионых остановок. Графики тканей будут скрыты."}

        if(val  == "t_tiss_nt"){val = "Давление азота в компартментах тканей"}
        if(val  == "t_tiss_hl"){val = "Давление гелия в компартментах тканей"}
        if(val  == "t_tiss_tl"){val = "Общее давление в компартментах тканей"}

        if(val == "tab_tr_o2"){val = "ПДO<sub><small>2</small></sub>"}
        if(val == "tab_tr_n2"){val = "ПДN<sub><small>2</small></sub>"}
        if(val == "tab_tr_he"){val = "ПДHe"}
        if(val == "tab_tr_coms"){val = "Расход"}
        if(val == "tab_tr_mix"){val = "Смесь"}
        if(val == "tab_dmn_ltr"){val = "Литров"}

        if(val == "Level"){val = "Уровень"}
        if(val == "Ascent"){val = "Подъём"}
        if(val == "Descent"){val = "Спуск"}
        if(val == "Stop"){val = "Стоп"}
        if(val == "Mix"){val = "Смесь"}
        if(val == "RunTime"){val = "Уход"}
        if(val == "Time"){val = "Время"}
        if(val == "Depth"){val = "Глубь"}
        if(val == "Action"){val = "Шаг"}
        if(val == "Air"){val = "Воздух"}
        if(val == "OXY"){val = "Кислород"}

        if(val == "tab_tr_dmn"){val = "Единицы"}
        if(val == "tab_tr_time"){val = "Время"}

        if(val == "ch_gas_d"){val = "Расход газа"}
        if(val == "ch_gas_amnt"){val = "Объём составляет"}
        if(val == "ch_time"){val = "Время"}
        if(val == "ch_gas_ltr"){val = "Лит."}
        if(val == "ch_depth"){val = "Максимальная глубина"}
        if(val == "ch_source"){val = "Источник"}
        if(val == "ch_bottom"){val = "На дне"}
        if(val == "ch_mtr"){val = "м."}
        if(val == "ch_tmx"){val = "мин."}
        if(val == "ch_mix"){val = "Сменить газ"}
        if(val == "ch_pp"){val = "Парциальное давление"}
        if(val == "ch_n2"){val = "ПД азота"}
        if(val == "ch_o2"){val = "ПД кислорода"}
        if(val == "ch_he"){val = "ПД гелия"}
        if(val == "ch_pp_l"){val = "давление"}
        if(val == "ch_mix_pp"){val = "Используемая смесь"}
        if(val == "ch_ata"){val = "ATA"}
        if(val == "ch_Tissue"){val = "Ткань"}
        if(val == "ch_UnderDev"){val = "Внимание!<br>Выбранный инструмент находится в разработке. Интерфейс показан для демонстрации общего прогресса работы.<br>Спасибо за тест!<br>"}
        if(val == "ch_tbl_name"){val = "Декомпрессионная таблица"}
        if(val == "ch_tbl_cons"){val = "Таблица расхода газа"}

        if(val == "dmn_air"){val = "Воздух"}
        if(val == "dmn_mod"){val = "МРГ"}
        if(val == "dmn_ead"){val = "ЭВГ"}
        if(val == "dmn_end"){val = "ЭНГ"}

        if(val == "dmn_msw"){val = "ммв"}
        if(val == "dmn_fsw"){val = "фмв"}
        if(val == "dmn_bar"){val = "бар"}
        if(val == "dmn_ata"){val = "АТА"}

        if(val == "tn_price_dls_name_dollars"){val = "Долларов"}
        if(val == "tn_price_dls_name_cents"){val = "Центов"}
        if(val == "tn_price_dls_name_euro"){val = "Евро"}
        if(val == "tn_price_dls_name_pound"){val = "Фунтов"}
        if(val == "tn_price_dls_name_pence"){val = "Пенсов"}
        if(val == "tn_price_dls_name_rouble"){val = "Рублей"}
        if(val == "tn_price_dls_name_kopek"){val = "Копеек"}

        if(val == "price_price"){val = "Цена"}
        if(val == "price_currency"){val = "Валюта"}
        if(val == "price_gas"){val = "Газ"}
        if(val == "price_gas_total"){val = "Итого:"}

    }
    if(td_lng == 3){
        if(val  == "t_tiss_wrn"){val = "Este Plan no Tiene Paradas de Descompresión. Los Compartimentos del tejido se esconderán."}

        if(val  == "t_tiss_nt"){val = "Compartimentos del Tejido Nitrógeno"}
        if(val  == "t_tiss_hl"){val = "Compartimentos del Tejido Helio"}
        if(val  == "t_tiss_tl"){val = "Compartimentos del Tejido Totales"}

        if(val == "tab_tr_o2"){val = "PPO<sub><small>2</small></sub>"}
        if(val == "tab_tr_n2"){val = "PPN<sub><small>2</small></sub>"}
        if(val == "tab_tr_he"){val = "PPHe"}
        if(val == "tab_tr_coms"){val = "Consumo"}
        if(val == "tab_tr_mix"){val = "Mezcla"}

        if(val == "Level"){val = "Nivel"}
        if(val == "Ascent"){val = "Asc"}
        if(val == "Descent"){val = "Desc"}
        if(val == "Stop"){val = "Parada"}
        if(val == "Mix"){val = "Mezcla"}
        if(val == "RunTime"){val = "Partida"}
        if(val == "Time"){val = "Tiempo"}
        if(val == "Action"){val = "Acción"}
        if(val == "Air"){val = "Aire"}
        if(val == "OXY"){val = "Oxígeno"}
        if(val == "tab_dmn_ltr"){val = "Litros"}

        if(val == "tab_tr_dmn"){val = "Dimensión"}
        if(val == "tab_tr_time"){val = "Tiempo"}

        if(val == "ch_gas_d"){val = "Consumo de Gas"}
        if(val == "ch_gas_amnt"){val = "Cantidad"}
        if(val == "ch_time"){val = "Tiempo"}
        if(val == "ch_gas_ltr"){val = "Ltr."}
        if(val == "ch_depth"){val = "Max Profundidad"}
        if(val == "ch_source"){val = "Fuente"}
        if(val == "ch_bottom"){val = "En Fondo"}
        if(val == "ch_mtr"){val = "m."}
        if(val == "ch_tmx"){val = "min."}
        if(val == "ch_mix"){val = "Cambio de la Mezcla"}
        if(val == "ch_pp"){val = "Presión Parcial"}
        if(val == "ch_n2"){val = "PPN2"}
        if(val == "ch_o2"){val = "PPO2"}
        if(val == "ch_he"){val = "PPHe"}
        if(val == "ch_pp_l"){val = "Presión"}
        if(val == "ch_mix_pp"){val = "Mezcla"}
        if(val == "ch_ata"){val = "ATA"}
        if(val == "ch_Tissue"){val = "Tejido"}
        if(val == "ch_UnderDev"){val = "¡Advertencia!<br>Este Instrumento bajo Se desarrolla. Este GUI sólo demuestra Producto en proceso.<br>¡Gracias!<br>"}
        if(val == "ch_tbl_name"){val = "Deco Tabla"}
        if(val == "ch_tbl_cons"){val = "Mesa de Consumo de Gas"}

        if(val == "dmn_air"){val = "Aire"}
        if(val == "dmn_mod"){val = "MOP"}
        if(val == "dmn_ead"){val = "EAP"}
        if(val == "dmn_end"){val = "ENP"}

        if(val == "dmn_msw"){val = "mma"}
        if(val == "dmn_fsw"){val = "fma"}
        if(val == "dmn_bar"){val = "bar"}
        if(val == "dmn_ata"){val = "ATA"}

        if(val == "tn_price_dls_name_dollars"){val = "Dólares"}
        if(val == "tn_price_dls_name_cents"){val = "Centavos"}
        if(val == "tn_price_dls_name_euro"){val = "Euros"}
        if(val == "tn_price_dls_name_pound"){val = "Libras"}
        if(val == "tn_price_dls_name_pence"){val = "Peniques"}
        if(val == "tn_price_dls_name_rouble"){val = "Rublos"}
        if(val == "tn_price_dls_name_kopek"){val = "Copecs"}

        if(val == "price_price"){val = "Precio"}
        if(val == "price_currency"){val = "Dinero"}
        if(val == "price_gas"){val = "Gas"}
        if(val == "price_gas_total"){val = "Precio Total:"}

    }
    return (val.toString());
  }

    function price_lng_cur_upd(){
        //get current selected currency
        var a = [];
        $.each($(".opt_price_cur option:selected"), function(){
            a.push($(this).val());
        });
        //no force lng english now
        force_lng = 0;

        //clear current text value
        del_html_elem("tn_price_dls_name1");
        del_html_elem("tn_price_dls_name2");
        del_html_elem("tn_price_dls_name3");

        del_html_elem("tn_price_cnt_name1");
        del_html_elem("tn_price_cnt_name2");
        del_html_elem("tn_price_cnt_name3");

        //Dollars selected
        if(a[0] == 1){
            create_html_text("tn_price_dls_name1" , "opt_price_dls_name1" , plan_lng("tn_price_dls_name_dollars"));
            create_html_text("tn_price_dls_name2" , "opt_price_dls_name2" , plan_lng("tn_price_dls_name_dollars"));
            create_html_text("tn_price_dls_name3" , "opt_price_dls_name3" , plan_lng("tn_price_dls_name_dollars"));

            create_html_text("tn_price_cnt_name1" , "opt_price_cnt_name1" , plan_lng("tn_price_dls_name_cents"));
            create_html_text("tn_price_cnt_name2" , "opt_price_cnt_name2" , plan_lng("tn_price_dls_name_cents"));
            create_html_text("tn_price_cnt_name3" , "opt_price_cnt_name3" , plan_lng("tn_price_dls_name_cents"));
        }
        //Euro selected
        if(a[0] == 2){
            create_html_text("tn_price_dls_name1" , "opt_price_dls_name1" , plan_lng("tn_price_dls_name_euro"));
            create_html_text("tn_price_dls_name2" , "opt_price_dls_name2" , plan_lng("tn_price_dls_name_euro"));
            create_html_text("tn_price_dls_name3" , "opt_price_dls_name3" , plan_lng("tn_price_dls_name_euro"));

            create_html_text("tn_price_cnt_name1" , "opt_price_cnt_name1" , plan_lng("tn_price_dls_name_cents"));
            create_html_text("tn_price_cnt_name2" , "opt_price_cnt_name2" , plan_lng("tn_price_dls_name_cents"));
            create_html_text("tn_price_cnt_name3" , "opt_price_cnt_name3" , plan_lng("tn_price_dls_name_cents"));
        }
        //Pounds selected
        if(a[0] == 3){
            create_html_text("tn_price_dls_name1" , "opt_price_dls_name1" , plan_lng("tn_price_dls_name_pound"));
            create_html_text("tn_price_dls_name2" , "opt_price_dls_name2" , plan_lng("tn_price_dls_name_pound"));
            create_html_text("tn_price_dls_name3" , "opt_price_dls_name3" , plan_lng("tn_price_dls_name_pound"));

            create_html_text("tn_price_cnt_name1" , "opt_price_cnt_name1" , plan_lng("tn_price_dls_name_pence"));
            create_html_text("tn_price_cnt_name2" , "opt_price_cnt_name2" , plan_lng("tn_price_dls_name_pence"));
            create_html_text("tn_price_cnt_name3" , "opt_price_cnt_name3" , plan_lng("tn_price_dls_name_pence"));
        }
        //Roubles selected
        if(a[0] == 4){
            create_html_text("tn_price_dls_name1" , "opt_price_dls_name1" , plan_lng("tn_price_dls_name_rouble"));
            create_html_text("tn_price_dls_name2" , "opt_price_dls_name2" , plan_lng("tn_price_dls_name_rouble"));
            create_html_text("tn_price_dls_name3" , "opt_price_dls_name3" , plan_lng("tn_price_dls_name_rouble"));

            create_html_text("tn_price_cnt_name1" , "opt_price_cnt_name1" , plan_lng("tn_price_dls_name_kopek"));
            create_html_text("tn_price_cnt_name2" , "opt_price_cnt_name2" , plan_lng("tn_price_dls_name_kopek"));
            create_html_text("tn_price_cnt_name3" , "opt_price_cnt_name3" , plan_lng("tn_price_dls_name_kopek"));
        }
    }
    //price_lng_cur_upd();