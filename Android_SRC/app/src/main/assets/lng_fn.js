	//Change Interface Lang
	var lng_opt = document.getElementById("tn_lng");
    var Dmn_opt = document.getElementById("tn_dmn");

    //Assign properly language and  dimension variables
    lng_bar = "";
    lng_meters = "";
    lng_meters_min = "";
    lng_ltr_min = "";
    lng_min = "";
    lng_ltr = "";

    function changeGuiDim(){
        if (Dmn_opt.options[Dmn_opt.selectedIndex].value == 1){
            if(lng_opt.options[lng_opt.selectedIndex].value == 1){
                lng_bar = ", bar";
                lng_meters = ", meters";
                lng_meters_min = ", m/min";
                lng_ltr_min = ", l/min";
                lng_min = ", min";
                lng_ltr = ", liters";
            }
            if(lng_opt.options[lng_opt.selectedIndex].value == 2){
                lng_bar = ", бар";
                lng_meters = ", метры";
                lng_meters_min = " (м/мин)";
                lng_ltr_min = " (л/мин)";
                lng_min = ", мин.";
                lng_ltr = ", литры";
            }
            if(lng_opt.options[lng_opt.selectedIndex].value == 3){
                lng_bar = ", bar";
                lng_meters = ", metros";
                lng_meters_min = ", m/min";
                lng_ltr_min = ", l/min";
                lng_min = ", min";
                lng_ltr = ", l";
            }
        }
        else
        {
            if(lng_opt.options[lng_opt.selectedIndex].value == 1){
                lng_bar = ", bar";
                lng_meters = ", ft";
                lng_meters_min = ", ft/s";
                lng_ltr_min = ", ft<sup><small>3</small></sup>/min";
                lng_min = ", min";
                lng_ltr = ", ft<sup><small>3</small></sup>";
            }
            if(lng_opt.options[lng_opt.selectedIndex].value == 2){
                lng_bar = ", бар";
                lng_meters = ", футы";
                lng_meters_min = " (футов/с)";
                lng_ltr_min = " (футов<sup><small>3</small></sup>/мин)";
                lng_min = ", мин.";
                lng_ltr = ", футы<sup><small>3</small></sup>";
            }
            if(lng_opt.options[lng_opt.selectedIndex].value == 3) {
                lng_bar = ", bar";
                lng_meters = ", ft";
                lng_meters_min = ", m/s";
                lng_ltr_min = ", ft<sup><small>3</small></sup>/min";
                lng_min = ", min";
                lng_ltr = ", ft<sup><small>3</small></sup>";
            }
        }
        AssignLng();
    }
    changeGuiDim();
    lng_opt.addEventListener('change', changeGuiDim);
    Dmn_opt.addEventListener('change', changeGuiDim);


    function AssignLng(){
        lang = {
            1: {
                //Eng
                ".btn_bailout" : "Bailout",
                ".btn_diluent" : "Diluent",

                ".tn_plan_oc" : "Open Circuit",
                ".tr_plan_ccr" : "Planning Type",
                ".tr_plan_style" : "Plan Style",
                ".tn_plan_detailed" : "Detailed",
                ".tn_plan_short" : "Classic",

                ".tn_download_local" : "Download Local Version",
                ".tn_btn_tiss" : "Build Charts",
                ".td_copyright" : "Copyright © 2020 Alexey Vlasov. Licensed under the Apache License 2.0",
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

                ".tn_ppn2_max_deco" : "PPN<sub><small>2</small></sub> Max Deco" + lng_bar,
                ".tr_celsus" : "Surface Environment Temperature <sup><small>o</small></sup>C",
                ".tr_levels" : "Mix / Depth" + lng_meters + " / Time" + lng_min,
                ".btn_add_lvl" : "Add Level",
                ".btn_del_lvl" : "Delete Level",

                ".tr_rate_dsc" : "Descent Rate" + lng_meters_min,
                ".tr_rate_asc" : "Ascent Rate" + lng_meters_min,
                ".tr_rate_asc_deco" : "Ascent Deco Rate" + lng_meters_min,
                ".tr_rmv_deco" : "Deco RMV" + lng_ltr_min,
                ".tr_rmv_bt" : "Bottom RMV" + lng_ltr_min,
                ".tr_cng_time" : "Mix Change Extra Time" + lng_min,
                ".tr_lst_stop" : "Last Stop" + lng_meters,

                ".tn_ppo2_deco" : "PPO<sub><small>2</small></sub> Deco" + lng_bar,
                ".tn_ppo2_bottom" : "PPO<sub><small>2</small></sub> Bottom" + lng_bar,
                ".tn_ppo2_min" : "PPO<sub><small>2</small></sub> Min" + lng_bar,
                ".tn_ppn2_max" : "PPN<sub><small>2</small></sub> Max" + lng_bar,
                ".tn_ibcd_ppn2" : "ICD PPN<sub><small>2</small></sub> Max" + lng_bar,
                ".tn_ibcd_pphe" : "ICD PPHe Max" + lng_bar,
                ".tn_dmn_mtr" : "Meters/Liters/Bar",
                ".tn_dmn_imp" : "Feet/Cu.Feet/Bar",
                ".tr_mdl" : "Deco Model",
                ".tr_water" : "Water",
                ".tn_water_fresh" : "Fresh",
                ".tr_gf" : "Gradient Factor, %",
                ".tr_slevel" : "Dive Elevation" + lng_meters,
                ".tn_travel" : "Total Travel/Bottom/Diluent Mix",
                ".tn_deco" : "Total Deco/Bailout Mixes",

                ".header0" : "Global Settings",
                ".header1" : "Dive Settings",
                ".header2" : "Dive Alerts",
                ".header3" : "Dive Gases",
                ".header4" : "Build Dive Profile",
                ".header5" : "Gas Partial Pressures" + lng_bar,
                ".header6" : "Gas Tension in Tissue Compartments",
                ".header7" : "Gas Consumption",
                ".header8" : "Gas Price",
                //".header9" : "Gas Blending",
                ".header9" : "Learning Tools",

                ".tr_lng" : "Language",
                ".tr_dmn" : "Dimensions",
                ".td_warn" : "WARNING! THERE IS ALWAYS A RISK OF DECOMPRESSION SICKNESS (DCS) FOR ANY DIVE PROFILE EVEN IF YOU FOLLOW THE DIVE PLAN PRESCRIBED BY DIVE TABLES. NO PROCEDURE OR DIVE TABLE WILL PREVENT THE POSSIBILITY OF DCS OR OXYGEN TOXICITY! An individual’s physiological make up can vary from day to day. You are strongly advised to remain well within the exposure limits provided by the planner to minimize the risk of DCS.",

                ".tn_wrn_ibcd_lip" : "Consider Lipid Response",
                ".tn_wrn_btm_mix" :"Bottom Mix More" + lng_ltr,
                ".tn_wrn_deco_mix49" :"Deco Mix Up 49% More" + lng_ltr,
                ".tn_wrn_deco_mix50" :"Deco Mix 50 to 99% More" + lng_ltr,
                ".tn_wrn_deco_mix100" :"Deco Oxy More" + lng_ltr,

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

                ".tn_calc_depth" :"Maximum Operation Depth" + lng_meters,
                ".tn_calc_o2" :"Oxygen%",
                ".tn_calc_he" :"Helium%",
                ".tn_calc_depth_lo" :"Minimum Operation Depth" + lng_meters,

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

                ".tn_calc_o2max" : "&nbsp;PPO<sub><small>2</small></sub> Bottom&nbsp;" + lng_bar,
                ".tn_calc_o2min" : "&nbsp;PPO<sub><small>2</small></sub> Min&nbsp;" + lng_bar,
                ".tn_calc_n2max" : "&nbsp;PPN<sub><small>2</small></sub> Max" + lng_bar,

                ".tn_calc_f_app" :"Formulas and Computation",
                ".tn_calc_f_mod" :"Maximum Operation Depth" + lng_meters,
                ".tn_calc_f_ead" :"Equivalent Air Depth" + lng_meters,
                ".tn_calc_f_ead2" :"Only N<sub><small>2</small></sub> Narcotic",
                ".tn_calc_f_end" :"Equivalent Narcotic Depth" + lng_meters,
                ".tn_calc_f_end2" :"N<sub><small>2</small></sub> and O<sub><small>2</small></sub> Narcotic",

                ".tn_calc_cur_ex_rate" :"Exchange Rate for One Dollar",
                ".tn_calc_cur_ex_rate_pound" :"Pounds",
                ".tn_calc_cur_ex_rate_pence" :"Pence",
                ".tn_calc_cur_ex_rate_euro" :"Euro",
                ".tn_calc_cur_ex_rate_eucents" :"Cents",
                ".tn_calc_cur_ex_rate_rub" :"Roubles",
                ".tn_calc_cur_ex_rate_kopek" :"Kopeks",

                ".tr_setpoint_start":"CCR Setpoint Start" + lng_bar,
                ".tr_setpoint_bottom":"CCR Setpoint Bottom" + lng_bar,
                ".tr_setpoint_deco":"CCR Setpoint Deco" + lng_bar,

                ".tr_airbr_header" : "Gas Breaks",
                ".tr_airbr_depth" : "Depth is more" + lng_meters,
                ".tr_airbr_o2" : "Deco Oxygen is more" + ", %",
                ".tr_airbr_mix" : "Break Mix",
                ".tr_airbr_time_after" : "Break After" + lng_min,
                ".tr_airbr_time" : "Break Time" + lng_min,
                ".tr_airbr_time_reset" : "Reset Break Time on New Level",

                ".tn_airbr_time_reset_yes" : "Yes",
                ".tn_airbr_time_reset_no" : "No",

                ".header10" : "Donation Hall of Fame",
                ".tn_donat_header" : "",
                ".btn_msg" : "How to make a Donation",
                ".btn_tel" : "Make Call to Developers",
                ".tn_donat_header_founder" : "Founders Donation Section",
                ".tn_donat_header_gold" : "Gold Donation Section",
                ".tn_donat_header_silver" : "Silver Donation Section",
                ".tn_donat_header_bronze" : "Bronze Donation Section",

                ".td_founder_list" : "Vladimir Polyakov, Franjo Sánchez Castejón, Nikita Azarenko",
                ".td_gold_list" : "",
                ".td_silver_list" : "Maxim Parinov, Anton Bedarev",
                ".td_bronze_list" : "Evgenij Vlasov, Evgenij Pyanyh, Nikolaj Voronin, Valerij Vakshul"
            },

            //Rus
            2: {
                ".btn_bailout" : "Бейлаут",
                ".btn_diluent" : "Дилуэнт",

                ".tn_plan_oc" : "Открытый цикл",
                ".tr_plan_ccr" : "Вид планирования",
                ".tr_plan_style" : "Стиль Плана",
                ".tn_plan_detailed" : "Детальный",
                ".tn_plan_short" : "Классический",

                ".tn_download_local" : "Скачать локальную версию",
                ".tn_btn_tiss" : "Построить диаграммы",
                ".td_copyright" : "Все права защищены © 2020 Алексей Власов. Использование в соответствии с Apache 2.0 лицензией.",
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

                ".tn_ppn2_max_deco" : "Максимальное ПД N<sub><small>2</small></sub> деко" + lng_bar,
                ".tr_celsus" : "Температура на поверхности <sup><small>o</small></sup>C",
                ".tr_levels" : "Смесь / глубина" + lng_meters + " / время" + lng_min,
                ".btn_add_lvl" : "Добавить глубину",
                ".btn_del_lvl" : "Удалить глубину",

                ".tr_rate_dsc" : "Скорость погружения" + lng_meters_min,
                ".tr_rate_asc" : "Скорость всплытия" + lng_meters_min,
                ".tr_rate_asc_deco" : "Скорость всплытия на деко" + lng_meters_min,
                ".tr_rmv_deco" : "Дыхание на деко" + lng_ltr_min,
                ".tr_rmv_bt" : "Дыхание на дне" + lng_ltr_min,
                ".tr_cng_time" : "Время смены смесей" + lng_min,
                ".tr_lst_stop" : "Последняя остановка" + lng_meters,

                ".tn_ppo2_deco" : "ПД O<sub><small>2</small></sub> деко" + lng_bar,
                ".tn_ppo2_bottom" : "ПД O<sub><small>2</small></sub> на дне" + lng_bar,
                ".tn_ppo2_min" : "Минимальное ПД O<sub><small>2</small></sub>" + lng_bar,

                ".tn_ppn2_max" : "Максимальное ПД N<sub><small>2</small></sub>" + lng_bar,
                ".tn_ibcd_ppn2" : "Предел ИКД ПД N<sub><small>2</small></sub>" + lng_bar,
                ".tn_ibcd_pphe" : "Предел ИКД ПД He" + lng_bar,

                ".tn_dmn_mtr" : "Метры/литры/бары",
                ".tn_dmn_imp" : "Футы/куб.футы/бары",
                ".tr_mdl" : "Декомпрессионая модель",
                ".tr_water" : "Вода",
                ".tn_water_fresh" : "Пресная",

                ".tr_gf" : "Градиент фактор, %",
                ".tr_slevel" : "Альтиту́да" + lng_meters,

                ".tn_travel" : "Число донных/транспортных/дилуэнт смесей",
                ".tn_deco" : "Число декомпрессионных/бейлаут смесей",

                ".header0" : "Глобальные настройки",
                ".header1" : "Параметры погружения",
                ".header2" : "Предупреждения погружения",
                ".header3" : "Смеси погружения",
                ".header4" : "Профиль погружения",
                ".header5" : "Парциальные давления газов" + lng_bar,
                ".header6" : "Давление газов в тканях",
                ".header7" : "Расход газов",
                ".header8" : "Стоимость газов",
                //".header9" : "Компрессорная",
                ".header9" : "Инструменты обучения",



                ".tr_lng" : "Язык",
                ".tr_dmn" : "Единицы измерения",
                ".td_warn" : "ПРЕДУПРЕЖДЕНИЕ! ВНЕ ЗАВИСИМОСТИ ОТ ПРОФИЛЯ ПОГРУЖЕНИЯ И ДАЖЕ В СЛУЧАЕ СОБЛЮДЕНИЯ ПЛАНА ПОГРУЖЕНИЯ, ПРЕДПИСАННОГО ДЕКОМПРЕССИОННЫМИ ТАБЛИЦАМИ, ВСЕГДА СУЩЕСТВУЕТ ОПАСНОСТЬ ВОЗНИКНОВЕНИЯ ДЕКОМПРЕССИОННОЙ БОЛЕЗНИ (ДКБ). НИКАКАЯ ПРОЦЕДУРА ИЛИ ДЕКОМПРЕССИОННАЯ ТАБЛИЦА НЕ СПОСОБНЫ ИСКЛЮЧИТЬ ВОЗМОЖНОСТЬ ВОЗНИКНОВЕНИЯ ДЕКОМПРЕССИОННОЙ БОЛЕЗНИ ИЛИ КИСЛОРОДНОГО ОТРАВЛЕНИЯ! Физиологическое состояние конкретного человека в разные дни может различаться. Настоятельно рекомендуем соблюдать предложенные планером пределы воздействий, причем со значительным запасом, чтобы минимизировать риск возникновения декомпрессионной болезни (ДКБ).",

                ".tn_wrn_ibcd_lip" : "Учитывать липидную реакцию",
                ".tn_wrn_btm_mix" :"Донная смесь более" + lng_ltr,
                ".tn_wrn_deco_mix49" :"Смесь деко до 49% более" + lng_ltr,
                ".tn_wrn_deco_mix50" :"Смесь деко 50 до 99% более" + lng_ltr,
                ".tn_wrn_deco_mix100" :"Смесь кислород более" + lng_ltr,

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

                ".tn_calc_depth" :"Максимальная рабочая глубина" + lng_meters,
                ".tn_calc_o2" :"Кислород%",
                ".tn_calc_he" :"Гелий%",
                ".tn_calc_depth_lo" :"Минимальная рабочая глубина" + lng_meters,

                //".tn_blnd_temp_mode_ideal" :"Идеальный газ",
                //".tn_blnd_temp_mode_vdv" :"Ван-дер-Ваальс",
                //".tn_mix_first_he" :"He",
                //".tn_mix_first_o2" :"O<sub><small>2</small></sub>",

                ".tn_price_cur" :"Выбор Валюты",
                ".tn_price_top" :"Стоимость забивки газов",
                ".tn_price_he" :"He стоимость за единицу",
                ".tn_price_o2" :"O<sub><small>2</small></sub> стоимость за единицу",
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

                ".tn_calc_o2max" : "&nbsp;ПД O<sub><small>2</small></sub> на дне&nbsp;" + lng_bar,
                ".tn_calc_o2min" : "&nbsp;ПД O<sub><small>2</small></sub> мин.&nbsp;" + lng_bar,
                ".tn_calc_n2max" : "&nbsp;ПД N<sub><small>2</small></sub> макс." + lng_bar,

                ".tn_calc_f_app" :"Формулы и расчеты",
                ".tn_calc_f_mod" :"Максимальная рабочая глубина" + lng_meters,
                ".tn_calc_f_ead" :"Эквивалентная воздушная глубина" + lng_meters,
                ".tn_calc_f_ead2" :"Наркотичен только N<sub><small>2</small></sub>",
                ".tn_calc_f_end" :"Эквивалентная наркотическая глубина" + lng_meters,
                ".tn_calc_f_end2" :"Наркотичен N<sub><small>2</small></sub> и O<sub><small>2</small></sub>",

                ".tn_calc_cur_ex_rate" :"Обменный курс к одному доллару",
                ".tn_calc_cur_ex_rate_pound" :"Фунтов",
                ".tn_calc_cur_ex_rate_pence" :"Пенсов",
                ".tn_calc_cur_ex_rate_euro" :"Евро",
                ".tn_calc_cur_ex_rate_eucents" :"Центов",
                ".tn_calc_cur_ex_rate_rub" :"Рублей",
                ".tn_calc_cur_ex_rate_kopek" :"Копеек",

                ".tr_setpoint_start":"CCR сетпоинт на старте" + lng_bar,
                ".tr_setpoint_bottom":"CCR сетпоинт на дне" + lng_bar,
                ".tr_setpoint_deco":"CCR сетпоинт на деко" + lng_bar,

                ".tr_airbr_header" : "Газовые перерывы",
                ".tr_airbr_depth" : "Глубина более чем" + lng_meters,
                ".tr_airbr_o2" : "В деко смеси кислорода более чем" + ", %",
                ".tr_airbr_mix" : "Смесь на перерыве",
                ".tr_airbr_time_after" : "Перерыв после" + lng_min,
                ".tr_airbr_time" : "Время перерыва" + lng_min,
                ".tr_airbr_time_reset" : "Обнулить время перерыва при смене глубины",

                ".tn_airbr_time_reset_yes" : "Да",
                ".tn_airbr_time_reset_no" : "Нет",

                ".header10" : "Зал славы",
                ".tn_donat_header" : "",
                ".btn_msg" : "Как сделать пожертвование",
                ".btn_tel" : "Сделать звонок разработчикам",
                ".tn_donat_header_founder" : "Секция основателей",
                ".tn_donat_header_gold" : "Золотая секция",
                ".tn_donat_header_silver" : "Серебряная секция",
                ".tn_donat_header_bronze" : "Бронзовая секция",

                ".td_founder_list" : "Vladimir Polyakov, Franjo Sánchez Castejón, Nikita Azarenko",
                ".td_gold_list" : "",
                ".td_silver_list" : "Maxim Parinov, Anton Bedarev",
                ".td_bronze_list" : "Evgenij Vlasov, Evgenij Pyanyh, Nikolaj Voronin, Valerij Vakshul"
            },

            //Spa
            3: {
                ".btn_bailout" : "Rescate",
                ".btn_diluent" : "Diluyente",

                ".tn_plan_oc" : "Circuito Abierto",
                ".tr_plan_ccr" : "Planificación de Tipo",
                ".tr_plan_style" : "Estilo Planificación",
                ".tn_plan_detailed" : "Detallado",
                ".tn_plan_short" : "Clásico",

                ".tn_download_local" : "Descargar Versión Local",
                ".tn_btn_tiss" : "Crear Gráficos",
                ".td_copyright" : "Copyright © 2020 Alexey Vlasov. Bajo licencia Apache 2.0",
                ".btn_save" : "Guardar Configuración Actual",
                ".btn_restore" : "Restaurar Valores Predeterminados",
                ".tr_ifc_set" : "Estilo Pantalla",
                ".tn_color_dark" : "Tema Oscuro",
                ".tn_color_light" : "Tema Claro",

                ".tn_water_baltic" : "Mar Báltico",
                ".tn_water_redsea" : "Mar Rojo",
                ".tn_water_glake" : "Gran Lago de Utah",
                ".tn_water_deadsea" : "Mar Muerto",
                ".tn_water_salt" : "Océano Atlántico",

                ".tn_ppn2_max_deco" : "PPN<sub><small>2</small></sub> Deco" + lng_bar,
                ".tr_celsus" : "Temperatura Ambiente en la Superficie <sup><small>o</small></sup>C",
                ".tr_levels" : "Mezcla / Profundidad" + lng_meters + " / Tiempo" + lng_min,
                ".btn_add_lvl" : "Añadir Nivel",
                ".btn_del_lvl" : "Borrar Nivel",

                ".tr_rate_dsc" : "Velocidad Descenso" + lng_meters_min,
                ".tr_rate_asc" : "Velocidad Ascenso" + lng_meters_min,
                ".tr_rate_asc_deco" : "Velocidad Ascenso Deco" + lng_meters_min,
                ".tr_rmv_deco" : "Ratio Consumo Deco" + lng_ltr_min,
                ".tr_rmv_bt" : "Ratio Consumo Fondo" + lng_ltr_min,
                ".tr_cng_time" : "Tiempo Extra Cambio de Gas" + lng_min,
                ".tr_lst_stop" : "Última Parada" + lng_meters,

                ".tn_ppo2_deco" : "PPO<sub><small>2</small></sub> Deco" + lng_bar,
                ".tn_ppo2_bottom" : "PPO<sub><small>2</small></sub> Fondo" + lng_bar,
                ".tn_ppo2_min" : "PPO<sub><small>2</small></sub> Min" + lng_bar,
                ".tn_ppn2_max" : "PPN<sub><small>2</small></sub> Fondo" + lng_bar,
                ".tn_ibcd_ppn2" : "CDI PPN<sub><small>2</small></sub> Fondo" + lng_bar,
                ".tn_ibcd_pphe" : "CDI PPHe Fondo" + lng_bar,
                ".tn_dmn_mtr" : "Metros/Litros/Bar",
                ".tn_dmn_imp" : "Pies/Pies Cu./Bar",
                ".tr_mdl" : "Modelo Deco",
                ".tr_water" : "Agua",
                ".tn_water_fresh" : "Dulce",
                ".tr_gf" : "Factores Gradiente, %",
                ".tr_slevel" : "Elevación Buceo" + lng_meters,
                ".tn_travel" : "Mezcla Total Viaje/Fondo/Diluente",
                ".tn_deco" : "Mezcla Total Deco/Bailout",

                ".header0" : "Ajustes Generales",
                ".header1" : "Ajustes de Buceo",
                ".header2" : "Alertas",
                ".header3" : "Gases",
                ".header4" : "Crear Perfil Buceo",
                ".header5" : "Presiones Parciales" + lng_bar,
                ".header6" : "Tensión Gases en Compartimentos",
                ".header7" : "Consumo de Gas",
                ".header8" : "Precio del Gas",
                //".header9" : "Mezclado de Gases",
                ".header9" : "Herramientas de Aprendizaje",

                ".tr_lng" : "Idioma",
                ".tr_dmn" : "Unidades de Medida",
                ".td_warn" : "¡ATENCIÓN! SIEMPRE HAY UN RIESGO DE ENFERMEDAD DESCOMPRESIVA (ED), PARA CUALQUIER PERFIL DE BUCEO, INCLUSO SI SIGUES EL PLAN INDICADO POR LAS TABLAS DE BUCEO. ¡NINGÚN PROCEDIMIENTO O TABLA DE BUCEO EVITARÁ LA POSIBILIDAD DE ED O DE TOXICIDAD DE OXÍGENO!.  La composición fisiológica de un individuo puede variar de un día a otro. Se recomienda encarecidamente que se mantenga dentro de los límites de exposición proporcionados por el planificador para minimizar el riesgo de ED.",


                ".tn_wrn_ibcd_lip" : "Considerar Respuesta Lípidos",
                ".tn_wrn_btm_mix" :"Más Mezclas Fondo" + lng_ltr,
                ".tn_wrn_deco_mix49" :"Más Mezclas Deco hasta 49%" + lng_ltr,
                ".tn_wrn_deco_mix50" :"Más Mezclas Deco hasta 50%" + lng_ltr,
                ".tn_wrn_deco_mix100" :"Más Oxígeno Deco" + lng_ltr,

                ".tn_ibcd_lip_yes" :"Sí",
                ".tn_ibcd_lip_no" :"No",

                //".tn_blnd_temp" :"Temperatura Gas C<sup><small>o</small></sup>",
                //".tn_blnd_temp_mode" :"Modelo Gas",
                //".tn_blend_mix_first" :"Añadir Gas Primero",

                //".tn_blend_press_start" :"Presión Mezcla Inicial",
                //".tn_blend_press_end" :"Presión Nueva Mezcla",
                //".tn_blend_he_start" :"Porcentajes He Mezcla Incial",
                //".tn_blend_o2_start" :"O<sub><small>2</small></sub> Porcentajes Mezcla Inicial",
                //".tn_blend_he_end" :"Porcentajes He Nueva Mezcla",
                //".tn_blend_o2_end" :"O<sub><small>2</small></sub> Porcentajes Nueva Mezcla",

                ".tn_calc_depth" :"Profundidad Máxima Operativa" + lng_meters,
                ".tn_calc_o2" :"Oxígeno%",
                ".tn_calc_he" :"Helio%",
                ".tn_calc_depth_lo" :"Profundidad Mínima Operativa" + lng_meters,

//".tn_blnd_temp_mode_ideal" :"Modelo Gases Ideales",
//".tn_blnd_temp_mode_vdv" :"Modelo Van Der Waals",
//".tn_mix_first_he" :"He",
//".tn_mix_first_o2" :"O<sub><small>2</small></sub>",

                ".tn_price_cur" :"Seleccionar Moneda",
                ".tn_price_top" :"Precio Gas Top Up",
                ".tn_price_he" :"He Precio Unidad",
                ".tn_price_o2" :"O<sub><small>2</small></sub> Precio Unidad",
                ".tn_price_us" :"Dólar USA",
                ".tn_price_eu" :"Euro",
                ".tn_price_uk" :"Libras británicas",
                ".tn_price_rf" :"Rublos rusos",

                ".btn_export_pdf_profile" :"Exportar PDF",
                ".btn_export_pdf_pp" :"Exportar PDF",
                ".tn_btn_overlay" :"Cerrar",
                ".btn_export_xls" :"Exportar Tablas XLS",
                ".btn_tbl_pdf" :"Exportar Tablas PDF",

                ".tn_calc_ead" :"PEA:&nbsp;",
                ".tn_calc_end" :"PEN:&nbsp;",

                ".tn_calc_o2max" : "&nbsp;PPO<sub><small>2</small></sub> Fondo&nbsp;" + lng_bar,
                ".tn_calc_o2min" : "&nbsp;PPO<sub><small>2</small></sub> Min&nbsp;" + lng_bar,
                ".tn_calc_n2max" : "&nbsp;PPN<sub><small>2</small></sub> Fondo" + lng_bar,

                ".tn_calc_f_app" :"Fórmulas y Cálculo",
                ".tn_calc_f_mod" :"Profundidad Máxima Operativa" + lng_meters,
                ".tn_calc_f_ead" :"Profundidad Equivalente Aire" + lng_meters,
                ".tn_calc_f_ead2" :"Sólo N<sub><small>2</small></sub> Narcótico",
                ".tn_calc_f_end" :"Profundidad Equivalente Narcosis" + lng_meters,
                ".tn_calc_f_end2" :"N<sub><small>2</small></sub> y O<sub><small>2</small></sub> Narcotic",

                ".tn_calc_cur_ex_rate" :"Tipo Cambio 1 Dólar",
                ".tn_calc_cur_ex_rate_pound" :"Libras",
                ".tn_calc_cur_ex_rate_pence" :"Peniques",
                ".tn_calc_cur_ex_rate_euro" :"Euro",
                ".tn_calc_cur_ex_rate_eucents" :"Céntimos",
                ".tn_calc_cur_ex_rate_rub" :"Rublos",
                ".tn_calc_cur_ex_rate_kopek" :"Kopeks",

                ".tr_setpoint_start":"CCR Setpoint Principio" + lng_bar,
                ".tr_setpoint_bottom":"CCR Setpoint Fondo" + lng_bar,
                ".tr_setpoint_deco":"CCR Setpoint Deco" + lng_bar,

                ".tr_airbr_header" : "Pausas de Gases",
                ".tr_airbr_depth" : "Profundidad es más" + lng_meters,
                ".tr_airbr_o2" : "Deco Oxígeno es más" + ", %",
                ".tr_airbr_mix" : "Gases de Pausa",
                ".tr_airbr_time_after" : "Después de" + lng_min,
                ".tr_airbr_time" : "Pausa por" + lng_min,
                ".tr_airbr_time_reset" : "Reiniciar en Nuevo Nivel",

                ".tn_airbr_time_reset_yes" : "Sí",
                ".tn_airbr_time_reset_no" : "No",

                ".header10" : "Templo de la Fama de la Donación",
                ".tn_donat_header" : "",
                ".btn_msg" : "Cómo hacer una Donación",
                ".btn_tel" : "Hacer una Llamada al Desarrollador",
                ".tn_donat_header_founder" : "Sección de Fundadores",
                ".tn_donat_header_gold" : "Sección de Oro",
                ".tn_donat_header_silver" : "Sección de Plata",
                ".tn_donat_header_bronze" : "Sección de Bronce",

                ".td_founder_list" : "Vladimir Polyakov, Franjo Sánchez Castejón, Nikita Azarenko",
                ".td_gold_list" : "",
                ".td_silver_list" : "Maxim Parinov, Anton Bedarev",
                ".td_bronze_list" : "Evgenij Vlasov, Evgenij Pyanyh, Nikolaj Voronin, Valerij Vakshul"
            }
        };
    }
    AssignLng();
	
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

          if(val  == "t_diluent"){val = "Diluent "}

          if(val  == "t_zoom"){val = "Reset Zoom"}

          if(val  == "tab_tr_OTU"){val = "OTU"}
          if(val  == "tab_tr_CNS"){val = "CNS%"}

          if(val  == "ld_tis"){val = "Leading Tissue"}
          if(val  == "amb_pres"){val = "Ambient Pressure"}

          if(val  == "t_tiss_wrn"){val = "This Plan doesn`t Have Decompression Stops. Tissue Compartments will be hidden."}

          if(val  == "t_tiss_nt"){val = "Nitrogen Tissue Compartments"}
          if(val  == "t_tiss_hl"){val = "Helium Tissue Compartments"}
          if(val  == "t_tiss_tl"){val = "Total Nitrogen and Helium Tissue Compartments"}

          if(val == "tab_tr_o2"){val = "PPO<sub><small>2</small></sub>"}
          if(val == "tab_tr_n2"){val = "PPN<sub><small>2</small></sub>"}
          if(val == "tab_tr_he"){val = "PPHe"}
          if(val == "tab_tr_coms"){val = "Cons."}
          if(val == "tab_tr_mix"){val = "Mix"}
          if(val == "tab_dmn_ltr"){
              if($( "#tn_dmn" ).val() == 1){val = "Liters"}
              if($( "#tn_dmn" ).val() == 2){val = "Cubic Feet"}
          }
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
          if(val == "ch_gas_ltr"){
              if($( "#tn_dmn" ).val() == 1){val = "Ltr."}
              if($( "#tn_dmn" ).val() == 2){val = "Ft<sup><small>3</small></sup>"}
          }
          if(val == "ch_depth"){val = "Max Depth"}
          if(val == "ch_source"){val = "Source"}
          if(val == "ch_bottom"){val = "Bottom"}
          if(val == "ch_mtr"){
              if($( "#tn_dmn" ).val() == 1){val = "m."}
              if($( "#tn_dmn" ).val() == 2){val = "ft."}
          }
          if(val == "ch_tmx"){val = "min."}
          if(val == "ch_mix"){val = "Mix Change"}
          if(val == "ch_pp"){val = "Partial Pressures"}
          if(val == "ch_n2"){val = "PPN2"}
          if(val == "ch_o2"){val = "PPO2"}
          if(val == "ch_he"){val = "PPHe"}
          if(val == "ch_pp_l"){val = "Pressure"}
          if(val == "ch_mix_pp"){val = "Used Mix"}
          if(val == "ch_ata"){val = "bar"}
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
          if(val == "dmn_ata"){val = "bar"}

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

          if(val == "ch_price_top_total"){val = "Gas Top Price"}

    }
    if(td_lng == 2){
        if(val  == "t_diluent"){val = "Дилуэнт "}
        if(val  == "t_zoom"){val = "Сбросить масштаб"}

        if(val  == "tab_tr_OTU"){val = "OTU"}
        if(val  == "tab_tr_CNS"){val = "CNS%"}

        if(val  == "ld_tis"){val = "Лидирующая ткань"}
        if(val  == "amb_pres"){val = "Атмосферное давление"}

        if(val  == "t_tiss_wrn"){val = "У этого плана нет декомпрессионых остановок. Графики тканей будут скрыты."}

        if(val  == "t_tiss_nt"){val = "Давление азота в компартментах тканей"}
        if(val  == "t_tiss_hl"){val = "Давление гелия в компартментах тканей"}
        if(val  == "t_tiss_tl"){val = "Общее давление азота и гелия в компартментах тканей"}

        if(val == "tab_tr_o2"){val = "ПДO<sub><small>2</small></sub>"}
        if(val == "tab_tr_n2"){val = "ПДN<sub><small>2</small></sub>"}
        if(val == "tab_tr_he"){val = "ПДHe"}
        if(val == "tab_tr_coms"){val = "Расход"}
        if(val == "tab_tr_mix"){val = "Смесь"}
        if(val == "tab_dmn_ltr"){
            if($( "#tn_dmn" ).val() == 1){val = "Литров"}
            if($( "#tn_dmn" ).val() == 2){val = "Куб.Футов"}
        }

        if(val == "Level"){val = "Уровень"}
        if(val == "Ascent"){val = "Подъём"}
        if(val == "Descent"){val = "Спуск"}
        if(val == "Stop"){val = "Стоп"}
        if(val == "Mix"){val = "Смесь"}
        if(val == "RunTime"){val = "Уход"}
        if(val == "Time"){val = "Время"}
        if(val == "Depth"){val = "Глубина"}
        if(val == "Action"){val = "Шаг"}
        if(val == "Air"){val = "Воздух"}
        if(val == "OXY"){val = "Кислород"}

        if(val == "tab_tr_dmn"){val = "Единицы"}
        if(val == "tab_tr_time"){val = "Время"}

        if(val == "ch_gas_d"){val = "Расход газа"}
        if(val == "ch_gas_amnt"){val = "Объём составляет"}
        if(val == "ch_time"){val = "Время"}
        if(val == "ch_gas_ltr"){
            if($( "#tn_dmn" ).val() == 1){val = "Лит."}
            if($( "#tn_dmn" ).val() == 2){val = "Фут<sup><small>3</small></sup>"}
        }
        if(val == "ch_depth"){val = "Максимальная глубина"}
        if(val == "ch_source"){val = "Источник"}
        if(val == "ch_bottom"){val = "На дне"}
        if(val == "ch_mtr"){
            if($( "#tn_dmn" ).val() == 1){val = "м."}
            if($( "#tn_dmn" ).val() == 2){val = "фт."}
        }
        if(val == "ch_tmx"){val = "мин."}
        if(val == "ch_mix"){val = "Сменить газ"}
        if(val == "ch_pp"){val = "Парциальное давление"}
        if(val == "ch_n2"){val = "ПД азота"}
        if(val == "ch_o2"){val = "ПД кислорода"}
        if(val == "ch_he"){val = "ПД гелия"}
        if(val == "ch_pp_l"){val = "давление"}
        if(val == "ch_mix_pp"){val = "Используемая смесь"}
        if(val == "ch_ata"){val = "бар"}
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
        if(val == "dmn_ata"){val = "бар"}

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

        if(val == "ch_price_top_total"){val = "Стоимость забивки газов"}

    }
    if(td_lng == 3){
        if(val  == "t_diluent"){val = "Diluyente "}
        if(val  == "t_zoom"){val = "Reinicializar Acercamiento"}
        if(val  == "tab_tr_OTU"){val = "OTU"}
        if(val  == "tab_tr_CNS"){val = "CNS%"}

        if(val  == "ld_tis"){val = "Carga Compartimentos"}
        if(val  == "amb_pres"){val = "Presión Ambiente"}

        if(val  == "t_tiss_wrn"){val = "Este plan no tiene paradas de descompresión. Los compartimientos estarán ocultos."}

        if(val  == "t_tiss_nt"){val = "Nitrógeno Compartimentos"}
        if(val  == "t_tiss_hl"){val = "Helio Compartimentos"}
        if(val  == "t_tiss_tl"){val = "Total Nitrógeno y Helio Compartimentos"}

        if(val == "tab_tr_o2"){val = "PPO<sub><small>2</small></sub>"}
        if(val == "tab_tr_n2"){val = "PPN<sub><small>2</small></sub>"}
        if(val == "tab_tr_he"){val = "PPHe"}
        if(val == "tab_tr_coms"){val = "Consumo"}
        if(val == "tab_tr_mix"){val = "Mezcla"}
        if(val == "tab_dmn_ltr"){
            if($( "#tn_dmn" ).val() == 1){val = "Litros"}
            if($( "#tn_dmn" ).val() == 2){val = "Pie Cúbico"}
        }

        if(val == "Level"){val = "Nivel"}
        if(val == "Ascent"){val = "Ascenso"}
        if(val == "Descent"){val = "Descenso"}
        if(val == "Stop"){val = "Parada"}
        if(val == "Mix"){val = "Mezcla"}
        if(val == "RunTime"){val = "RunTime"}
        if(val == "Time"){val = "Tiempo"}
        if(val == "Depth"){val = "Profundidad"}
        if(val == "Action"){val = "Acción"}
        if(val == "Air"){val = "Aire"}
        if(val == "OXY"){val = "OXY"}

        if(val == "tab_tr_dmn"){val = "Dimensión"}
        if(val == "tab_tr_time"){val = "Tiempo"}

        if(val == "ch_gas_d"){val = "Consumo de Gas"}
        if(val == "ch_gas_amnt"){val = "Cantidad"}
        if(val == "ch_time"){val = "Tiempo"}
        if(val == "ch_gas_ltr"){
            if($( "#tn_dmn" ).val() == 1){val = "Ltr."}
            if($( "#tn_dmn" ).val() == 2){val = "Ft<sup><small>3</small></sup>"}
        }
        if(val == "ch_depth"){val = "Profundidad Máxima"}
        if(val == "ch_source"){val = "Fuente"}
        if(val == "ch_bottom"){val = "Fondo"}
        if(val == "ch_mtr"){
            if($( "#tn_dmn" ).val() == 1){val = "m."}
            if($( "#tn_dmn" ).val() == 2){val = "ft."}
        }
        if(val == "ch_tmx"){val = "min."}
        if(val == "ch_mix"){val = "Cambio Mezcla"}
        if(val == "ch_pp"){val = "Presiones Parciales"}
        if(val == "ch_n2"){val = "PPN2"}
        if(val == "ch_o2"){val = "PPO2"}
        if(val == "ch_he"){val = "PPHe"}
        if(val == "ch_pp_l"){val = "Presión"}
        if(val == "ch_mix_pp"){val = "Mezcla Usada"}
        if(val == "ch_ata"){val = "bar"}
        if(val == "ch_Tissue"){val = "Compartimento"}
        if(val == "ch_UnderDev"){val = "¡Atención!<br>Esta herramienta está en desarrollo. Esta GUI solo muestra el trabajo en progreso.<br>¡Gracias!<br>"}
        if(val == "ch_tbl_name"){val = "Tabla Descompresión"}
        if(val == "ch_tbl_cons"){val = "Tabla Consumo de Gas"}

        if(val == "dmn_air"){val = "Aire"}
        if(val == "dmn_mod"){val = "PMO"}
        if(val == "dmn_ead"){val = "PEA"}
        if(val == "dmn_end"){val = "PEN"}

        if(val == "dmn_msw"){val = "msw"}
        if(val == "dmn_fsw"){val = "fsw"}
        if(val == "dmn_bar"){val = "bar"}
        if(val == "dmn_ata"){val = "bar"}

        if(val == "tn_price_dls_name_dollars"){val = "Dólares"}
        if(val == "tn_price_dls_name_cents"){val = "Céntimos"}
        if(val == "tn_price_dls_name_euro"){val = "Euros"}
        if(val == "tn_price_dls_name_pound"){val = "Libras"}
        if(val == "tn_price_dls_name_pence"){val = "Peniques"}
        if(val == "tn_price_dls_name_rouble"){val = "Rublos"}
        if(val == "tn_price_dls_name_kopek"){val = "Kopeks"}

        if(val == "price_price"){val = "Precio"}
        if(val == "price_currency"){val = "Moneda"}
        if(val == "price_gas"){val = "Gas"}
        if(val == "price_gas_total"){val = "Precio Total:"}

        if(val == "ch_price_top_total"){val = "Precio del Gas de Top up"}
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

