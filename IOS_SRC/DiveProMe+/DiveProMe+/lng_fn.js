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

    lng_temper = "";

    function changeGuiDim(){
        if (Dmn_opt.options[Dmn_opt.selectedIndex].value == 1){
            if(lng_opt.options[lng_opt.selectedIndex].value == 1){
                lng_bar = ", bar";
                lng_meters = ", meters";
                lng_meters_min = ", m/min";
                lng_ltr_min = ", l/min";
                lng_min = ", min";
                lng_ltr = ", liters";
                lng_temper = ", <sup><small>o</small></sup>C"
            }
            if(lng_opt.options[lng_opt.selectedIndex].value == 2){
                lng_bar = ", бар";
                lng_meters = ", метры";
                lng_meters_min = " (м/мин)";
                lng_ltr_min = " (л/мин)";
                lng_min = ", мин.";
                lng_ltr = ", литры";
                lng_temper = ", <sup><small>o</small></sup>C"
            }
            if(lng_opt.options[lng_opt.selectedIndex].value == 3){
                lng_bar = ", bar";
                lng_meters = ", metros";
                lng_meters_min = ", m/min";
                lng_ltr_min = ", l/min";
                lng_min = ", min";
                lng_ltr = ", l";
                lng_temper = ", <sup><small>o</small></sup>C"
            }
            if(lng_opt.options[lng_opt.selectedIndex].value == 4){
                lng_bar = ", bar";
                lng_meters = ", metros";
                lng_meters_min = ", m/min";
                lng_ltr_min = ", l/min";
                lng_min = ", min";
                lng_ltr = ", l";
                lng_temper = ", <sup><small>o</small></sup>C"
            }
            if(lng_opt.options[lng_opt.selectedIndex].value == 5){
                lng_bar = ", bar";
                lng_meters = ", 米";
                lng_meters_min = ", 米/分钟";
                lng_ltr_min = ", 升/分钟";
                lng_min = ", 分钟";
                lng_ltr = ", 升";
                lng_temper = ", <sup><small>o</small></sup>C"
            }
        }
        else
        {
            if(lng_opt.options[lng_opt.selectedIndex].value == 1){
                lng_bar = ", psi";
                lng_meters = ", ft";
                lng_meters_min = ", ft/min";
                lng_ltr_min = ", ft<sup><small>3</small></sup>/min";
                lng_min = ", min";
                lng_ltr = ", ft<sup><small>3</small></sup>";
                lng_temper = ", <sup><small>o</small></sup>F"
            }
            if(lng_opt.options[lng_opt.selectedIndex].value == 2){
                lng_bar = ", psi";
                lng_meters = ", футы";
                lng_meters_min = " (футов/мин)";
                lng_ltr_min = " (футов<sup><small>3</small></sup>/мин)";
                lng_min = ", мин.";
                lng_ltr = ", футы<sup><small>3</small></sup>";
                lng_temper = ", <sup><small>o</small></sup>F"
            }
            if(lng_opt.options[lng_opt.selectedIndex].value == 3) {
                lng_bar = ", psi";
                lng_meters = ", ft";
                lng_meters_min = ", ft/min";
                lng_ltr_min = ", ft<sup><small>3</small></sup>/min";
                lng_min = ", min";
                lng_ltr = ", ft<sup><small>3</small></sup>";
                lng_temper = ", <sup><small>o</small></sup>F"
            }
            if(lng_opt.options[lng_opt.selectedIndex].value == 4) {
                lng_bar = ", psi";
                lng_meters = ", pés";
                lng_meters_min = ", p/min";
                lng_ltr_min = ", pés<sup><small>3</small></sup>/min";
                lng_min = ", min";
                lng_ltr = ", pés<sup><small>3</small></sup>";
                lng_temper = ", <sup><small>o</small></sup>F"
            }
            if(lng_opt.options[lng_opt.selectedIndex].value == 5) {
                lng_bar = ", psi";
                lng_meters = ", 英尺";
                lng_meters_min = ", 英尺/分钟";
                lng_ltr_min = ", 英尺<sup><small>3</small></sup>/分钟";
                lng_min = ", 分钟";
                lng_ltr = ", 英尺<sup><small>3</small></sup>";
                lng_temper = ", <sup><small>o</small></sup>F"
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
                ".tn_water_pacific" : "Pacific",
                ".tn_water_salt" : "Atlantic",

                ".tn_ppn2_max_deco" : "PPN<sub><small>2</small></sub> Max Deco" + lng_bar,
                ".tr_celsus" : "Surface Environment Temperature" + lng_temper,
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
                ".tn_dmn_mtr" : "Meters/Liters/Bar/Celsius",
                ".tn_dmn_imp" : "Feet/Cu.Feet/PSI/Fahrenheit",
                ".tr_mdl" : "Deco Model",
                ".tr_water" : "Water Salinity",
                ".tn_water_fresh" : "Fresh",
                ".tr_gf" : "Gradient Factor, %",
                ".tr_slevel" : "Dive Elevation" + lng_meters,
                ".tn_travel" : "Total Travel/Bottom/Diluent Mixes",
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
                ".tr_dmn" : "Unit",
                ".td_warn" : "WARNING! THERE IS ALWAYS A RISK OF DECOMPRESSION SICKNESS (DCS) FOR ANY DIVE PROFILE EVEN IF YOU FOLLOW THE DIVE PLAN PRESCRIBED BY DIVE TABLES. NO PROCEDURE OR DIVE TABLE WILL PREVENT THE POSSIBILITY OF DCS OR OXYGEN TOXICITY! An individual’s physiological make up can vary from day to day. You are strongly advised to remain well within the exposure limits provided by the planner to minimize the risk of DCS.",

                ".tn_wrn_ibcd_lip" : "Consider Lipid Response",
                ".tn_wrn_btm_mix" :"Bottom Mix More" + lng_ltr,
                ".tn_wrn_deco_mix49" :"Deco Mix Up 49% More" + lng_ltr,
                ".tn_wrn_deco_mix50" :"Deco Mix 50 to 99% More" + lng_ltr,
                ".tn_wrn_deco_mix100" :"Deco O<sub><small>2</small></sub> More" + lng_ltr,

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
                ".tn_price_cn" :"Chinese Yuan",

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
                ".tn_calc_cur_ex_rate_yuan" :"Yuan",
                ".tn_calc_cur_ex_rate_fyn" :"Fyn",

                ".tr_setpoint_start":"CCR Setpoint Start" + lng_bar,
                ".tr_setpoint_bottom":"CCR Setpoint Bottom" + lng_bar,
                ".tr_setpoint_deco":"CCR Setpoint Deco" + lng_bar,

                ".tr_airbr_header" : "Gas Breaks",
                ".tr_airbr_depth" : "Depth is more than" + lng_meters,
                ".tr_airbr_o2" : "Deco Oxygen is more than" + ", %",
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

                ".btn_ios_msg" : "How to make a Donation",
                ".btn_ios_tel" : "Make Call to Developers",

                ".tn_donat_header_founder" : "Founders Donation Section",
                ".tn_donat_header_gold" : "Gold Donation Section",
                ".tn_donat_header_silver" : "Silver Donation Section",
                ".tn_donat_header_bronze" : "Bronze Donation Section",

                ".td_founder_list" : "Thomas Holloway, Vladimir Polyakov, Franjo Sánchez Castejón, Nikita Azarenko, Hugo Ballester, 大漠骑兵Andy （谢鹏）",
                ".td_gold_list" : "Aleksandr Sestopalec, Aliaksander Lukyanchenka",
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
                ".tn_water_pacific" : "Тихий океан",
                ".tn_water_salt" : "Атлантика",

                ".tn_ppn2_max_deco" : "Максимальное ПД N<sub><small>2</small></sub> деко" + lng_bar,
                ".tr_celsus" : "Температура на поверхности" + lng_temper,
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

                ".tn_dmn_mtr" : "Метры/литры/бары/Цельсий",
                ".tn_dmn_imp" : "Футы/куб.футы/PSI/Фаренгейт",
                ".tr_mdl" : "Декомпрессионая модель",
                ".tr_water" : "Плотность воды",
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
                ".tn_price_cn" :"Китайский юань",

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
                ".tn_calc_cur_ex_rate_yuan" :"Юаней",
                ".tn_calc_cur_ex_rate_fyn" :"Фыней",

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

                ".btn_ios_msg" : "Как сделать пожертвование",
                ".btn_ios_tel" : "Сделать звонок разработчикам",

                ".tn_donat_header_founder" : "Секция основателей",
                ".tn_donat_header_gold" : "Золотая секция",
                ".tn_donat_header_silver" : "Серебряная секция",
                ".tn_donat_header_bronze" : "Бронзовая секция",

                ".td_founder_list" : "Thomas Holloway, Vladimir Polyakov, Franjo Sánchez Castejón, Nikita Azarenko, Hugo Ballester, 大漠骑兵Andy （谢鹏）",
                ".td_gold_list" : "Aleksandr Shestopalec, Aliaksander Lukyanchenka",
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
                ".tn_water_pacific" : "Pacífico",
                ".tn_water_salt" : "Océano Atlántico",

                ".tn_ppn2_max_deco" : "PPN<sub><small>2</small></sub> Deco" + lng_bar,
                ".tr_celsus" : "Temperatura Ambiente en la Superficie" + lng_temper,
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
                ".tn_dmn_mtr" : "Metros/Litros/Bar/Celsius",
                ".tn_dmn_imp" : "Pies/Pies Cu./PSI/Fahrenheit",
                ".tr_mdl" : "Modelo Deco",
                ".tr_water" : "Salinidad Acuática",
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
                ".tn_price_cn" :"Yuan Сhino",

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
                ".tn_calc_cur_ex_rate_yuan" :"Yuan",
                ".tn_calc_cur_ex_rate_fyn" :"Fyn",

                ".tr_setpoint_start":"CCR Setpoint Principio" + lng_bar,
                ".tr_setpoint_bottom":"CCR Setpoint Fondo" + lng_bar,
                ".tr_setpoint_deco":"CCR Setpoint Deco" + lng_bar,

                ".tr_airbr_header" : "Pausas de Gases",
                ".tr_airbr_depth" : "Profundidad es más que" + lng_meters,
                ".tr_airbr_o2" : "Deco Oxígeno es más que" + ", %",
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

                ".btn_ios_msg" : "Cómo hacer una Donación",
                ".btn_ios_tel" : "Hacer una Llamada al Desarrollador",

                ".tn_donat_header_founder" : "Sección de Fundadores",
                ".tn_donat_header_gold" : "Sección de Oro",
                ".tn_donat_header_silver" : "Sección de Plata",
                ".tn_donat_header_bronze" : "Sección de Bronce",

                ".td_founder_list" : "Thomas Holloway, Vladimir Polyakov, Franjo Sánchez Castejón, Nikita Azarenko, Hugo Ballester, 大漠骑兵Andy （谢鹏）",
                ".td_gold_list" : "Aleksandr Shestopalec, Aliaksander Lukyanchenka",
                ".td_silver_list" : "Maxim Parinov, Anton Bedarev",
                ".td_bronze_list" : "Evgenij Vlasov, Evgenij Pyanyh, Nikolaj Voronin, Valerij Vakshul"
            },
            4: {
                //Prt
                ".btn_bailout" : "Bailout",
                ".btn_diluent" : "Diluente",

                ".tn_plan_oc" : "Circuito Aberto",
                ".tr_plan_ccr" : "Modo",
                ".tr_plan_style" : "Estilo de Planeamento",
                ".tn_plan_detailed" : "Detalhado",
                ".tn_plan_short" : "Clássico",

                ".tn_download_local" : "Descarregue a Versão Local",
                ".tn_btn_tiss" : "Gerar Tabelas",
                ".td_copyright" : "Copyright © 2020 Alexey Vlasov. Licenciado por Apache License 2.0",
                ".btn_save" : "Guardar Definições Atuais",
                ".btn_restore" : "Restaurar Originais",
                ".tr_ifc_set" : "Estilo do Interface",
                ".tn_color_dark" : "Tema Escuro",
                ".tn_color_light" : "Tema Claro",

                ".tn_water_baltic" : "Mar Báltico",
                ".tn_water_redsea" : "Mar Vermelho",
                ".tn_water_glake" : "Grandes Lagos, Utah",
                ".tn_water_deadsea" : "Mar Morto",
                ".tn_water_pacific" : "Oceano Pacífico",
                ".tn_water_salt" : "Atlântico",
                ".tn_ppn2_max_deco" : "PPN<sub><small>2</small></sub> Max Deco" + lng_bar,
                ".tr_celsus" : "Temperatura Ambiente à Superfície" + lng_temper,
                ".tr_levels" : "Mistura / Profundidade" + lng_meters + " / Tempo" + lng_min,
                ".btn_add_lvl" : "Adicionar Nível",
                ".btn_del_lvl" : "Remover Nível ",

                ".tr_rate_dsc" : "Velocidade de Descida" + lng_meters_min,
                ".tr_rate_asc" : "Velocidade de Subida" + lng_meters_min,
                ".tr_rate_asc_deco" : "Velocidade Subida Durante Deco" + lng_meters_min,
                ".tr_rmv_deco" : "RMV Deco" + lng_ltr_min,
                ".tr_rmv_bt" : "RMV Fundo" + lng_ltr_min,
                ".tr_cng_time" : "Tempo Extra Para Mudança de Mistura" + lng_min,
                ".tr_lst_stop" : "Último Patamar" + lng_meters,

                ".tn_ppo2_deco" : "PPO<sub><small>2</small></sub> Deco" + lng_bar,
                ".tn_ppo2_bottom" : "PPO<sub><small>2</small></sub> Fundo" + lng_bar,
                ".tn_ppo2_min" : "PPO<sub><small>2</small></sub> Min" + lng_bar,
                ".tn_ppn2_max" : "PPN<sub><small>2</small></sub> Max" + lng_bar,
                ".tn_ibcd_ppn2" : "ICD PPN<sub><small>2</small></sub> Max" + lng_bar,
                ".tn_ibcd_pphe" : "ICD PPHe Max" + lng_bar,
                ".tn_dmn_mtr" : "Metros/Litros/Bar/Celsius",
                ".tn_dmn_imp" : "Pés/Pés Cúbicos/PSI/Fahrenheit",
                ".tr_mdl" : "Modelo Descompressivo",
                ".tr_water" : "Salinidade",
                ".tn_water_fresh" : "Doce",
                ".tr_gf" : "Fatores de Gradiente, %",
                ".tr_slevel" : "Altitude do Mergulho" + lng_meters,
                ".tn_travel" : "Mistura Total Travel/Fundo/Diluente",
                ".tn_deco" : "Mistura Total Deco/Bailout",

                ".header0" : "Definições Globais",
                ".header1" : "Definições do Mergulho",
                ".header2" : "Alertas",
                ".header3" : "Gases",
                ".header4" : "Gerar Perfil de Mergulho",
                ".header5" : "Pressões Parciais dos Gases" + lng_bar,
                ".header6" : "Tensão dos Gases nos Compartimentos dos Tecidos",
                ".header7" : "Consumo de Gás",
                ".header8" : "Preço do Gás",
                //".header9" : "Blending de Gases",
                ".header9" : "Ferramentas de Ensino",

                ".tr_lng" : "Língua",
                ".tr_dmn" : "Unidades",
                ".td_warn" : "ATENÇÃO! EXISTE SEMPRE O RISCO DE DOENÇA DESCOMPRESSIVA (DCS) PARA QUALQUER PERFIL DE MERGULHO, MESMO SE VOCÊ SEGUIR O PLANO DE MERGULHO PRESCRITO NAS TABELAS DE MERGULHO. NENHUM PROCEDIMENTO OU TABELA DE MERGULHO EVITARÃO A POSSIBILIDADE DE DCS OU TOXICIDADE DE OXIGÊNIO! A composição fisiológica de um indivíduo pode variar de um dia para o outro. É altamente recomendável permanecer dentro dos limites de exposição fornecidos pelo planificador para minimizar o risco de DD.",

                ".tn_wrn_ibcd_lip" : "Considerar a Resposta Lipida",
                ".tn_wrn_btm_mix" :"Mais Mistura Fundo" + lng_ltr,
                ".tn_wrn_deco_mix49" :"Deco Mistura até 49% Mais" + lng_ltr,
                ".tn_wrn_deco_mix50" :"Deco Mistura 50 a 99% Mais" + lng_ltr,
                ".tn_wrn_deco_mix100" :"Deco O2 Mais" + lng_ltr,

                ".tn_ibcd_lip_yes" :"Sim",
                ".tn_ibcd_lip_no" :"Não",

                //".tn_blnd_temp" :"Temperatura do Gás C<sup><small>o</small></sup>",
                //".tn_blnd_temp_mode" :"Modelo de Gás”,
                //".tn_blend_mix_first" :"Adicionar Primeiro Gás",

                //".tn_blend_press_start" :"Mistura Pressão Inicial",
                //".tn_blend_press_end" :"Pressão da Nova Mistura",
                //".tn_blend_he_start" :"Hélio Percentagem da Nova Mistura",
                //".tn_blend_o2_start" :"O<sub><small>2</small></sub> Percentagem Inicio da Nova Mistura",
                //".tn_blend_he_end" :"Hélio Percentagem da Nova Mistura",
                //".tn_blend_o2_end" :"O<sub><small>2</small></sub> Percentagem da Nova Mistura",

                ".tn_calc_depth" :"Profundidade Máxima Operacional do Gás (MOD)" + lng_meters,
                ".tn_calc_o2" :"Oxigénio%",
                ".tn_calc_he" :"Hélio%",
                ".tn_calc_depth_lo" :"Profundidade Mínima Operacional do Gás" + lng_meters,

                //".tn_blnd_temp_mode_ideal" :"Modelo Ideal",
                //".tn_blnd_temp_mode_vdv" :"Modelo de Van Der Waals",
                //".tn_mix_first_he" :"He",
                //".tn_mix_first_o2" :"O<sub><small>2</small></sub>",

                ".tn_price_cur" :"Selecionar Moeda",
                ".tn_price_top" :"Gás Top Preço",
                ".tn_price_he" :"Hélio Preço por Unidade",
                ".tn_price_o2" :"O<sub><small>2</small></sub> Preço por Unidade",
                ".tn_price_us" :"US Dólar",
                ".tn_price_eu" :"Euro",
                ".tn_price_uk" :"Pound Britânico",
                ".tn_price_rf" :"Rublos Russos",
                ".tn_price_cn" :"Yuan Chinês",

                ".btn_export_pdf_profile" :" Exportar PDF",
                ".btn_export_pdf_pp" :"Exportar PDF",
                ".tn_btn_overlay" :"Fechar",
                ".btn_export_xls" :" Exportar Tabela em XLS",
                ".btn_tbl_pdf" :"Exportar Tabela em PDF",

                ".tn_calc_ead" :"EAD:&nbsp;",
                ".tn_calc_end" :"END:&nbsp;",

                ".tn_calc_o2max" : "&nbsp;PPO<sub><small>2</small></sub> Fundo&nbsp;" + lng_bar,
                ".tn_calc_o2min" : "&nbsp;PPO<sub><small>2</small></sub> Min&nbsp;" + lng_bar,
                ".tn_calc_n2max" : "&nbsp;PPN<sub><small>2</small></sub> Max" + lng_bar,

                ".tn_calc_f_app" :"Formulas e Computação",
                ".tn_calc_f_mod" :"Profundidade Máxima do Gás (MOD)" + lng_meters,
                ".tn_calc_f_ead" :"Profundidade Ar Equivalente (EAD)" + lng_meters,
                ".tn_calc_f_ead2" :"Apenas N<sub><small>2</small></sub> Narcótico",
                ".tn_calc_f_end" :"Profundidade Narcótica Equivalente (END)" + lng_meters,
                ".tn_calc_f_end2" :"N<sub><small>2</small></sub> and O<sub><small>2</small></sub> Narcótico",

                ".tn_calc_cur_ex_rate" :"Taxa de Câmbio para 1 US Dólar",
                ".tn_calc_cur_ex_rate_pound" :"Pounds",
                ".tn_calc_cur_ex_rate_pence" :"Pence",
                ".tn_calc_cur_ex_rate_euro" :"Euro",
                ".tn_calc_cur_ex_rate_eucents" :"Cêntimos",
                ".tn_calc_cur_ex_rate_rub" :"Rublos",
                ".tn_calc_cur_ex_rate_kopek" :"Kopeks",
                ".tn_calc_cur_ex_rate_yuan" :"Luan",
                ".tn_calc_cur_ex_rate_fyn" :"Fyn",

                ".tr_setpoint_start":"CCR Setpoint Inicial" + lng_bar,
                ".tr_setpoint_bottom":"CCR Setpoint Fundo" + lng_bar,
                ".tr_setpoint_deco":"CCR Setpoint Deco" + lng_bar,

                ".tr_airbr_header" : "Gas Breaks",
                ".tr_airbr_depth" : "Profundidade é maior que:" + lng_meters,
                ".tr_airbr_o2" : "%O2 na Deco é maior que: " + ", %",
                ".tr_airbr_mix" : "Break Mistura",
                ".tr_airbr_time_after" : "Pausa Após" + lng_min,
                ".tr_airbr_time" : "Tempo de Pausa" + lng_min,
                ".tr_airbr_time_reset" : "Reiniciar Tempo de Pausa no Novo Nível",

                ".tn_airbr_time_reset_yes" : "Sim",
                ".tn_airbr_time_reset_no" : "Não",

                ".header10" : "Mural de Benfeitores",
                ".tn_donat_header" : "",
                ".btn_msg" : "Como fazer uma Doação?",
                ".btn_tel" : "Ligue aos Criadores",

                ".btn_ios_msg" : "Como fazer uma Doação?",
                ".btn_ios_tel" : "Contacte com os Criadores",

                ".tn_donat_header_founder" : "Fundadores",
                ".tn_donat_header_gold" : "Doações Ouro",
                ".tn_donat_header_silver" : "Doações Prata",
                ".tn_donat_header_bronze" : "Doações Bronze",

                ".td_founder_list" : "Thomas Holloway, Vladimir Polyakov, Franjo Sánchez Castejón, Nikita Azarenko, Hugo Ballester, 大漠骑兵Andy （谢鹏）",
                ".td_gold_list" : "Aleksandr Shestopalec, Aliaksander Lukyanchenka",
                ".td_silver_list" : "Maxim Parinov, Anton Bedarev",
                ".td_bronze_list" : "Evgenij Vlasov, Evgenij Pyanyh, Nikolaj Voronin, Valerij Vakshul"

            },
            5 : {
                //China

                ".btn_bailout" : "逃生气体",
                ".btn_diluent" : "稀释气体",

                ".tn_plan_oc" : "OC开放系统",
                ".tr_plan_ccr" : "潜水计划类型",
                ".tr_plan_style" : "潜水计划样式",
                ".tn_plan_detailed" : "细节",
                ".tn_plan_short" : "标准",

                ".tn_download_local" : "下载各系统平台对应的本地版本",
                ".tn_btn_tiss" : "建立图表",
                ".td_copyright" : " 版权所有© 2020 Alexey Vlasov. 根据Apache 2.0许可证授权",
                ".btn_save" : "保存当前设定",
                ".btn_restore" : "恢复默认设置",
                ".tr_ifc_set" : "界面风格",
                ".tn_color_dark" : "深色主题",
                ".tn_color_light" : "浅色主题",

                ".tn_water_baltic" : "波罗的海",
                ".tn_water_redsea" : "红海",
                ".tn_water_glake" : "犹他州大湖",
                ".tn_water_deadsea" : "死海",
                ".tn_water_pacific" : "太平洋地区",
                ".tn_water_salt" : "大西洋",

                ".tn_ppn2_max_deco" : "减压阶段最大氮分压" + lng_bar,
                ".tr_celsus" : "水面环境温度 <sup><small>o</small></sup>C",
                ".tr_levels" : "混合比例 / 深度" + lng_meters + " / 时间" + lng_min,
                ".btn_add_lvl" : "增加多层深度",
                ".btn_del_lvl" : "删除多层深度",

                ".tr_rate_dsc" : "下潜速度" + lng_meters_min,
                ".tr_rate_asc" : "上升速度" + lng_meters_min,
                ".tr_rate_asc_deco" : "减压阶段上升速度" + lng_meters_min,
                ".tr_rmv_deco" : "减压RMV" + lng_ltr_min,
                ".tr_rmv_bt" : "底部RMV" + lng_ltr_min,
                ".tr_cng_time" : "切换气体所需的额外时间" + lng_min,
                ".tr_lst_stop" : "最后停留深度" + lng_meters,

                ".tn_ppo2_deco" : "减压阶段氧分压" + lng_bar,
                ".tn_ppo2_bottom" : "底部阶段最大氧分压" + lng_bar,
                ".tn_ppo2_min" : "最小氧分压" + lng_bar,
                ".tn_ppn2_max" : "最大氮分压" + lng_bar,
                ".tn_ibcd_ppn2" : "ICD 氮分压最大" + lng_bar,
                ".tn_ibcd_pphe" : "ICD 氦分压 最大" + lng_bar,
                ".tn_dmn_mtr" : "米/升/Bar",
                ".tn_dmn_imp" : "英尺/立方英尺/Bar",
                ".tr_mdl" : "减压模型",
                ".tr_water" : "潜点盐度",
                ".tn_water_fresh" : "淡水",
                ".tr_gf" : "梯度因子GF值, %",
                ".tr_slevel" : "潜点海拔高度" + lng_meters,
                ".tn_travel" : "旅行气体/底部气体/稀释气体 数量总计",
                ".tn_deco" : "减压气体/逃生气体 数量总计",

                ".header0" : "全局设置",
                ".header1" : "潜水设定",
                ".header2" : "潜水警报设定",
                ".header3" : "潜水气体设定",
                ".header4" : "建立潜水计划",
                ".header5" : "气体分压" + lng_bar,
                ".header6" : "气体在组织腔隔中的表面张力",
                ".header7" : "气体消费计算",
                ".header8" : "气体价格",
                //".header9" : "气体混合",
                ".header9" : "学习工具",

                ".tr_lng" : "语言",
                ".tr_dmn" : "单位",
                ".td_warn" : "警告！ 任何潜水计划都存在减压病(DCS)的风险，即使你已经遵循了潜水表格中规定的潜水计划。没有一个减压模型或潜水表格可以保证不会发生DCS或氧中毒!一个人的生理状态成每天都在变化。强烈建议您不要超过潜水计划为您提供的暴露极限，以减少DCS的风险。",

                ".tn_wrn_ibcd_lip" : "考虑脂质反应",
                ".tn_wrn_btm_mix" :"底部气体" + lng_ltr,
                ".tn_wrn_deco_mix49" :"49%以内氧含量减压气体" + lng_ltr,
                ".tn_wrn_deco_mix50" :"50-99%氧含量减压气体" + lng_ltr,
                ".tn_wrn_deco_mix100" :"纯氧减压气体" + lng_ltr,

                ".tn_ibcd_lip_yes" :"是",
                ".tn_ibcd_lip_no" :"否",

                //".tn_blnd_temp" :"气体温度℃ <sup><small>o</small></sup>",
                //".tn_blnd_temp_mode" :"气体模式",
                //".tn_blend_mix_first" :"增加第一种气体",

                //".tn_blend_press_start" :"混合前起始压力",
                //".tn_blend_press_end" :"混合后新的压力",
                //".tn_blend_he_start" :"混合前氦气含量",
                //".tn_blend_o2_start" :"氧气 <sub><small>2</small></sub> 混合前起始含量",
                //".tn_blend_he_end" :"混合后氦气含量",
                //".tn_blend_o2_end" :"氧气 <sub><small>2</small></sub> 混合后含量",

                ".tn_calc_depth" :"最大操作深度" + lng_meters,
                ".tn_calc_o2" :"氧气%",
                ".tn_calc_he" :"氦气%",
                ".tn_calc_depth_lo" :"最小操作深度" + lng_meters,

                //".tn_blnd_temp_mode_ideal" :"理想模式",
                //".tn_blnd_temp_mode_vdv" :"Van Der Waals 模式",
                //".tn_mix_first_he" :"氦气 ",
                //".tn_mix_first_o2" :"氧气 <sub><small>2</small></sub>",

                ".tn_price_cur" :"货币种类选择",
                ".tn_price_top" :"气体最高价格",
                ".tn_price_he" :"氦气单价",
                ".tn_price_o2" :"氧气单价",
                ".tn_price_us" :"美元",
                ".tn_price_eu" :"欧元",
                ".tn_price_uk" :"英镑",
                ".tn_price_rf" :"俄罗斯卢布",
                ".tn_price_cn" :"人民币",

                ".btn_export_pdf_profile" :"PDF导出",
                ".btn_export_pdf_pp" :"PDF导出",
                ".tn_btn_overlay" :"关闭",
                ".btn_export_xls" :"输出XLS表格",
                ".btn_tbl_pdf" :"输出PDF表格",

                ".tn_calc_ead" :"EAD等同空气深度:&nbsp;",
                ".tn_calc_end" :"END等同迷醉深度:&nbsp;",

                ".tn_calc_o2max" : "&nbsp;氧分压底部&nbsp;" + lng_bar,
                ".tn_calc_o2min" : "&nbsp;氧分压分钟&nbsp;" + lng_bar,
                ".tn_calc_n2max" : "&nbsp;氮分压最大" + lng_bar,

                ".tn_calc_f_app" :"公式和计算",
                ".tn_calc_f_mod" :"最小操作深度" + lng_meters,
                ".tn_calc_f_ead" :"等同空气深度" + lng_meters,
                ".tn_calc_f_ead2" :"只考虑 氮气迷醉",
                ".tn_calc_f_end" :"等同迷醉深度" + lng_meters,
                ".tn_calc_f_end2" :"氮和 氧 迷醉",

                ".tn_calc_cur_ex_rate" :"1美元汇率设定",
                ".tn_calc_cur_ex_rate_pound" :"英镑",
                ".tn_calc_cur_ex_rate_pence" :"便士",
                ".tn_calc_cur_ex_rate_euro" :"欧元",
                ".tn_calc_cur_ex_rate_eucents" :"分",
                ".tn_calc_cur_ex_rate_rub" :"卢布",
                ".tn_calc_cur_ex_rate_kopek" :"戈比",
                ".tn_calc_cur_ex_rate_yuan" :"元",
                ".tn_calc_cur_ex_rate_fyn" :"分",

                ".tr_setpoint_start":"CCR 起始Setpoint设定" + lng_bar,
                ".tr_setpoint_bottom":"CCR 底部Setpoint设定" + lng_bar,
                ".tr_setpoint_deco":"CCR 减压Setpoint设定" + lng_bar,

                ".tr_airbr_header" : "低氧含量气体休息 Breaks",
                ".tr_airbr_depth" : "深度" + lng_meters,
                ".tr_airbr_o2" : "Break前氧含量" + ", %",
                ".tr_airbr_mix" : "Break期间气体比例",
                ".tr_airbr_time_after" : "多久时间开始 Break" + lng_min,
                ".tr_airbr_time" : "Break 时间" + lng_min,
                ".tr_airbr_time_reset" : "在新的深度重置Break时间",

                ".tn_airbr_time_reset_yes" : "是",
                ".tn_airbr_time_reset_no" : "否",

                ".header10" : "打赏金主爸爸名录",
                ".tn_donat_header" : "",
                ".btn_msg" : "如何为软件作者打赏",
                ".btn_tel" : "致电软件作者",

                ".btn_ios_msg" : "如何为软件作者打赏",
                ".btn_ios_tel" : "致电软件作者 ",

                ".tn_donat_header_founder" : "为软件作者打赏",
                    ".tn_donat_header_gold" : "黄金级土豪爸爸",
                ".tn_donat_header_silver" : "白银级土豪爸爸",
                ".tn_donat_header_bronze" : "青铜级土豪爸爸",

                ".td_founder_list" : "Thomas Holloway, Vladimir Polyakov, Franjo Sánchez Castejón, Nikita Azarenko, Hugo Ballester, 大漠骑兵Andy （谢鹏）",
                ".td_gold_list" : "Aleksandr Shestopalec, Aliaksander Lukyanchenka",
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
	  if(td_lng == 4){
          return "Mistura";
      }
      if(td_lng == 5){
          return "混合气体";
      }
	}

  function plan_lng(val){
      if (force_lng == 1){var td_lng = 1}
      else
      {
          var td_lng = lng_opt.options[lng_opt.selectedIndex].value
      };
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
          if(val == "OXY"){val = "Oxygen"}

          if(val == "tab_tr_dmn"){val = "Volume"}
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
          if(val == "ch_ata"){
              if($( "#tn_dmn" ).val() == 1){val = "bar"}
              if($( "#tn_dmn" ).val() == 2){val = "psi"}
          }
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
          if(val == "tn_price_dls_name_yuan"){val = "Yuan"}
          if(val == "tn_price_dls_name_fyn"){val = "Fyn"}

          if(val == "price_price"){val = "Price"}
          if(val == "price_currency"){val = "Currency"}
          if(val == "price_gas"){val = "Gas"}
          if(val == "price_gas_total"){val = "Total Price:"}

          if(val == "ch_price_top_total"){val = "Gas Top Price"}

          if(val == "tn_deco_mod"){val = "Auto"}

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

        if(val == "tab_tr_dmn"){val = "Объём"}
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
        if(val == "ch_mix"){val = "Смена газа"}
        if(val == "ch_pp"){val = "Парциальное давление"}
        if(val == "ch_n2"){val = "ПД азота"}
        if(val == "ch_o2"){val = "ПД кислорода"}
        if(val == "ch_he"){val = "ПД гелия"}
        if(val == "ch_pp_l"){val = "давление"}
        if(val == "ch_mix_pp"){val = "Используемая смесь"}
        if(val == "ch_ata"){
            if($( "#tn_dmn" ).val() == 1){val = "бар"}
            if($( "#tn_dmn" ).val() == 2){val = "psi"}
        }
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
        if(val == "tn_price_dls_name_yuan"){val = "Юаней"}
        if(val == "tn_price_dls_name_fyn"){val = "Фыней"}

        if(val == "price_price"){val = "Цена"}
        if(val == "price_currency"){val = "Валюта"}
        if(val == "price_gas"){val = "Газ"}
        if(val == "price_gas_total"){val = "Итого:"}

        if(val == "ch_price_top_total"){val = "Стоимость забивки газов"}

        if(val == "tn_deco_mod"){val = "Авто"}

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
        if(val == "OXY"){val = "Oxígeno"}

        if(val == "tab_tr_dmn"){val = "Volumen"}
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
        if(val == "ch_ata"){
            if($( "#tn_dmn" ).val() == 1){val = "bar"}
            if($( "#tn_dmn" ).val() == 2){val = "psi"}
        }
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
        if(val == "tn_price_dls_name_yuan"){val = "Yuan"}
        if(val == "tn_price_dls_name_fyn"){val = "Fyn"}

        if(val == "price_price"){val = "Precio"}
        if(val == "price_currency"){val = "Moneda"}
        if(val == "price_gas"){val = "Gas"}
        if(val == "price_gas_total"){val = "Precio Total:"}

        if(val == "ch_price_top_total"){val = "Precio del Gas de Top up"}

        if(val == "tn_deco_mod"){val = "Auto"}
    }
      if(td_lng == 4){
          if(val  == "t_diluent"){val = "Diluente "}
          if(val  == "t_zoom"){val = "Reset Zoom"}
          if(val  == "tab_tr_OTU"){val = "OTU"}
          if(val  == "tab_tr_CNS"){val = "CNS%"}
          if(val  == "ld_tis"){val = "Tecido Director"}
          if(val  == "amb_pres"){val = "Pressão Ambiente"}
          if(val  == "t_tiss_wrn"){val = "Este Plano Não Exige Paragens Descompressivas. Os Compartimentos dos Tecidos serão Ocultados."}
          if(val  == "t_tiss_nt"){val = "Compartimentos do Tecido de Nitrogénio "}
          if(val  == "t_tiss_hl"){val = "Compartimentos do Tecido de Hélio"}
          if(val  == "t_tiss_tl"){val = "Total dos Compartimentos de Tecido de Nitrogénio e Hélio"}
          if(val == "tab_tr_o2"){val = "PPO<sub><small>2</small></sub>"}
          if(val == "tab_tr_n2"){val = "PPN<sub><small>2</small></sub>"}
          if(val == "tab_tr_he"){val = "PPHe"}
          if(val == "tab_tr_coms"){val = "Consumo"}
          if(val == "tab_tr_mix"){val = "Mistura"}
          if(val == "tab_dmn_ltr"){
              if($( "#tn_dmn" ).val() == 1){val = "Litros"}
              if($( "#tn_dmn" ).val() == 2){val = "Pés Cubicos"}
          }
          if(val == "Level"){val = "Nível"}
          if(val == "Ascent"){val = "Subida"}
          if(val == "Descent"){val = "Descida"}
          if(val == "Stop"){val = "Paragem"}
          if(val == "Mix"){val = "Mistura"}
          if(val == "RunTime"){val = "RunTime"}
          if(val == "Time"){val = "Tempo"}
          if(val == "Depth"){val = "Profundidade"}
          if(val == "Action"){val = "Açao"}
          if(val == "Air"){val = "Ar"}
          if(val == "OXY"){val = "Oxigênio"}
          if(val == "tab_tr_dmn"){val = "Volume"}
          if(val == "tab_tr_time"){val = "Tempo"}
          if(val == "ch_gas_d"){val = "Consumo de Gás"}
          if(val == "ch_gas_amnt"){val = "Montante"}
          if(val == "ch_time"){val = "Tempo"}
          if(val == "ch_gas_ltr"){
              if($( "#tn_dmn" ).val() == 1){val = "Ltr."}
              if($( "#tn_dmn" ).val() == 2){val = "Pés<sup><small>3</small></sup>"}
          }
          if(val == "ch_depth"){val = "Profundidade Máxima"}
          if(val == "ch_source"){val = "Fonte"}
          if(val == "ch_bottom"){val = "Fundo"}
          if(val == "ch_mtr"){
              if($( "#tn_dmn" ).val() == 1){val = "m."}
              if($( "#tn_dmn" ).val() == 2){val = "pés"}
          }
          if(val == "ch_tmx"){val = "min."}
          if(val == "ch_mix"){val = "Mudança de Mistura"}
          if(val == "ch_pp"){val = "Pressões Parciais"}
          if(val == "ch_n2"){val = "PPN2"}
          if(val == "ch_o2"){val = "PPO2"}
          if(val == "ch_he"){val = "PPHe"}
          if(val == "ch_pp_l"){val = "Pressão"}
          if(val == "ch_mix_pp"){val = "Mistura Usada"}
          if(val == "ch_ata"){
              if($( "#tn_dmn" ).val() == 1){val = "bar"}
              if($( "#tn_dmn" ).val() == 2){val = "psi"}
          }
          if(val == "ch_Tissue"){val = "Tecido"}
          if(val == "ch_UnderDev"){val = "Atenção!<br>Esta Ferramenta está ainda em Desenvolvimento. Este Interface reflete trabalho ainda a ser desenvolvido.<br>Obrigado!<br>"}
          if(val == "ch_tbl_name"){val = "Tabela de Descompressão"}
          if(val == "ch_tbl_cons"){val = "Tabela de Consumo de Gases"}
          if(val == "dmn_air"){val = "Ar"}
          if(val == "dmn_mod"){val = "MOD"}
          if(val == "dmn_ead"){val = "EAD"}
          if(val == "dmn_end"){val = "END"}
          if(val == "dmn_msw"){val = "msw"}
          if(val == "dmn_fsw"){val = "fsw"}
          if(val == "dmn_bar"){val = "bar"}
          if(val == "dmn_ata"){val = "bar"}
          if(val == "tn_price_dls_name_dollars"){val = "Dólares"}
          if(val == "tn_price_dls_name_cents"){val = "Cêntimos"}
          if(val == "tn_price_dls_name_euro"){val = "Euros"}
          if(val == "tn_price_dls_name_pound"){val = "Pounds"}
          if(val == "tn_price_dls_name_pence"){val = "Pence"}
          if(val == "tn_price_dls_name_rouble"){val = "Rublos"}
          if(val == "tn_price_dls_name_kopek"){val = "Kopeks"}
          if(val == "tn_price_dls_name_yuan"){val = "Luan"}
          if(val == "tn_price_dls_name_fyn"){val = "Fyn"}

          if(val == "price_price"){val = " Preço "}
          if(val == "price_currency"){val = "Moeda"}
          if(val == "price_gas"){val = "Gás"}
          if(val == "price_gas_total"){val = "Preço Total:"}
          if(val == "ch_price_top_total"){val = "Preço Máximo do Gás"}
          if(val == "tn_deco_mod"){val = "Auto"}
      }
      if(td_lng == 5){
          if(val  == "t_diluent"){val = "稀释气 "}
          if(val  == "t_zoom"){val = "重置缩放"}
          if(val  == "tab_tr_OTU"){val = "OTU"}
          if(val  == "tab_tr_CNS"){val = "CNS%"}
          if(val  == "ld_tis"){val = "领先的组织"}
          if(val  == "amb_pres"){val = "环境压力"}
          if(val  == "t_tiss_wrn"){val = "这个计划没有包含减压停留。组织腔隔会被隐藏"}
          if(val  == "t_tiss_nt"){val = "氮气组织腔隔"}
          if(val  == "t_tiss_hl"){val = "氦气组织腔隔"}
          if(val  == "t_tiss_tl"){val = "总计 氮气和氦气组织腔隔"}
          if(val == "tab_tr_o2"){val = "氧分压"}
          if(val == "tab_tr_n2"){val = "氮分压"}
          if(val == "tab_tr_he"){val = "氦分压"}
          if(val == "tab_tr_coms"){val = "气量消耗"}
          if(val == "tab_tr_mix"){val = "气体"}
          if(val == "tab_dmn_ltr"){
              if($( "#tn_dmn" ).val() == 1){val = "升"}
              if($( "#tn_dmn" ).val() == 2){val = "立方英尺 英尺"}
          }
          if(val == "Level"){val = "深度"}
          if(val == "Ascent"){val = "上升"}
          if(val == "Descent"){val = "下潜"}
          if(val == "Stop"){val = "停留"}
          if(val == "Mix"){val = "气体"}
          if(val == "RunTime"){val = "运行时间"}
          if(val == "Time"){val = "时间"}
          if(val == "Depth"){val = "深度"}
          if(val == "Action"){val = "行动"}
          if(val == "Air"){val = "空气"}
          if(val == "OXY"){val = "氧气"}
          if(val == "tab_tr_dmn"){val = "单位"}
          if(val == "tab_tr_time"){val = "时间"}
          if(val == "ch_gas_d"){val = "气体消费"}
          if(val == "ch_gas_amnt"){val = "总计"}
          if(val == "ch_time"){val = "时间"}
          if(val == "ch_gas_ltr"){
              if($( "#tn_dmn" ).val() == 1){val = "升"}
              if($( "#tn_dmn" ).val() == 2){val = "英尺<sup><small>3</small></sup>"}
          }
          if(val == "ch_depth"){val = "最大深度"}
          if(val == "ch_source"){val = "来源"}
          if(val == "ch_bottom"){val = "底部"}
          if(val == "ch_mtr"){
              if($( "#tn_dmn" ).val() == 1){val = "米"}
              if($( "#tn_dmn" ).val() == 2){val = "英尺"}
          }
          if(val == "ch_tmx"){val = "分钟"}
          if(val == "ch_mix"){val = "气体切换"}
          if(val == "ch_pp"){val = "气体分压"}
          if(val == "ch_n2"){val = "氮分压"}
          if(val == "ch_o2"){val = "氧分压"}
          if(val == "ch_he"){val = "氦分压"}
          if(val == "ch_pp_l"){val = "压力"}
          if(val == "ch_mix_pp"){val = "使用后的混合"}
          if(val == "ch_ata"){
              if($( "#tn_dmn" ).val() == 1){val = "bar"}
              if($( "#tn_dmn" ).val() == 2){val = "psi"}
          }
          if(val == "ch_Tissue"){val = "组织"}
          if(val == "ch_UnderDev"){val = "警告！<br>这个工具软件仍在开发中，这个图形界面只提供了尚在进行中的工作演示。<br>谢谢!<br>"}
          if(val == "ch_tbl_name"){val = "减压表格"}
          if(val == "ch_tbl_cons"){val = "气体消费表格"}
          if(val == "dmn_air"){val = "空气"}
          if(val == "dmn_mod"){val = "MOD"}
          if(val == "dmn_ead"){val = "EAD"}
          if(val == "dmn_end"){val = "END"}
          if(val == "dmn_msw"){val = "msw"}
          if(val == "dmn_fsw"){val = "fsw"}
          if(val == "dmn_bar"){val = "bar"}
          if(val == "dmn_ata"){val = "bar"}
          if(val == "tn_price_dls_name_dollars"){val = "美元"}
          if(val == "tn_price_dls_name_cents"){val = "分"}
          if(val == "tn_price_dls_name_euro"){val = "欧元"}
          if(val == "tn_price_dls_name_pound"){val = "英镑"}
          if(val == "tn_price_dls_name_pence"){val = "便士"}
          if(val == "tn_price_dls_name_rouble"){val = "卢布"}
          if(val == "tn_price_dls_name_kopek"){val = "戈比"}
          if(val == "tn_price_dls_name_yuan"){val = "元"}
          if(val == "tn_price_dls_name_fyn"){val = "分"}

          if(val == "price_price"){val = "价格"}
          if(val == "price_currency"){val = "汇率"}
          if(val == "price_gas"){val = "气体"}
          if(val == "price_gas_total"){val = "总价:"}
          if(val == "ch_price_top_total"){val = "气体最高价格"}
          if(val == "tn_deco_mod"){val = "自动"}

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

