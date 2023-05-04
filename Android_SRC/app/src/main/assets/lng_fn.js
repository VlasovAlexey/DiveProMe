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
                lng_temper = ", <sup><small>o</small></sup>C";
            }
            if(lng_opt.options[lng_opt.selectedIndex].value == 2){
                lng_bar = ", бар";
                lng_meters = ", метры";
                lng_meters_min = " (м/мин)";
                lng_ltr_min = " (л/мин)";
                lng_min = ", мин.";
                lng_ltr = ", литры";
                lng_temper = ", <sup><small>o</small></sup>C";
            }
            if(lng_opt.options[lng_opt.selectedIndex].value == 3){
                lng_bar = ", bar";
                lng_meters = ", metros";
                lng_meters_min = ", m/min";
                lng_ltr_min = ", l/min";
                lng_min = ", min";
                lng_ltr = ", l";
                lng_temper = ", <sup><small>o</small></sup>C";
            }
            if(lng_opt.options[lng_opt.selectedIndex].value == 4){
                lng_bar = ", bar";
                lng_meters = ", metros";
                lng_meters_min = ", m/min";
                lng_ltr_min = ", l/min";
                lng_min = ", min";
                lng_ltr = ", l";
                lng_temper = ", <sup><small>o</small></sup>C";
            }
            if(lng_opt.options[lng_opt.selectedIndex].value == 5){
                lng_bar = ", bar";
                lng_meters = ", 米";
                lng_meters_min = ", 米/分钟";
                lng_ltr_min = ", 升/分钟";
                lng_min = ", 分钟";
                lng_ltr = ", 升";
                lng_temper = ", <sup><small>o</small></sup>C";
            }
            if(lng_opt.options[lng_opt.selectedIndex].value == 6){
                lng_bar = ", бар";
                lng_meters = ", метри";
                lng_meters_min = ", м/мин";
                lng_ltr_min = ", л/мин";
                lng_min = ", мин";
                lng_ltr = ", литри";
                lng_temper = ", <sup><small>o</small></sup>C";
            }
            if(lng_opt.options[lng_opt.selectedIndex].value == 7){
                lng_bar = ", bar";
                lng_meters = ", metres";
                lng_meters_min = ", m/min";
                lng_ltr_min = ", l/min";
                lng_min = ", min";
                lng_ltr = ", litres";
                lng_temper = ", <sup><small>o</small></sup>C";
            }
            if(lng_opt.options[lng_opt.selectedIndex].value == 8){
                lng_bar = ", bar";
                lng_meters = ", meters";
                lng_meters_min = ", m/min";
                lng_ltr_min = ", l/min";
                lng_min = ", min";
                lng_ltr = ", liters";
                lng_temper = ", <sup><small>o</small></sup>C";
            }
            if(lng_opt.options[lng_opt.selectedIndex].value == 9){
                lng_bar = ", bar";
                lng_meters = ", metri";
                lng_meters_min = ", m/min";
                lng_ltr_min = ", l/min";
                lng_min = ", min";
                lng_ltr = ", litri";
                lng_temper = ", <sup><small>o</small></sup>C";
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
                lng_temper = ", <sup><small>o</small></sup>F";
            }
            if(lng_opt.options[lng_opt.selectedIndex].value == 2){
                lng_bar = ", psi";
                lng_meters = ", футы";
                lng_meters_min = " (футов/мин)";
                lng_ltr_min = " (футов<sup><small>3</small></sup>/мин)";
                lng_min = ", мин.";
                lng_ltr = ", футы<sup><small>3</small></sup>";
                lng_temper = ", <sup><small>o</small></sup>F";
            }
            if(lng_opt.options[lng_opt.selectedIndex].value == 3) {
                lng_bar = ", psi";
                lng_meters = ", ft";
                lng_meters_min = ", ft/min";
                lng_ltr_min = ", ft<sup><small>3</small></sup>/min";
                lng_min = ", min";
                lng_ltr = ", ft<sup><small>3</small></sup>";
                lng_temper = ", <sup><small>o</small></sup>F";
            }
            if(lng_opt.options[lng_opt.selectedIndex].value == 4) {
                lng_bar = ", psi";
                lng_meters = ", pés";
                lng_meters_min = ", p/min";
                lng_ltr_min = ", pés<sup><small>3</small></sup>/min";
                lng_min = ", min";
                lng_ltr = ", pés<sup><small>3</small></sup>";
                lng_temper = ", <sup><small>o</small></sup>F";
            }
            if(lng_opt.options[lng_opt.selectedIndex].value == 5) {
                lng_bar = ", psi";
                lng_meters = ", 英尺";
                lng_meters_min = ", 英尺/分钟";
                lng_ltr_min = ", 英尺<sup><small>3</small></sup>/分钟";
                lng_min = ", 分钟";
                lng_ltr = ", 英尺<sup><small>3</small></sup>";
                lng_temper = ", <sup><small>o</small></sup>F";
            }
            if(lng_opt.options[lng_opt.selectedIndex].value == 6){
                lng_bar = ", пси";
                lng_meters = ", фт";
                lng_meters_min = ", фт/мин";
                lng_ltr_min = ", фт<sup><small>3</small></sup>/мин";
                lng_min = ", мин";
                lng_ltr = ", фт<sup><small>3</small></sup>";
                lng_temper = ", <sup><small>o</small></sup>F";
            }
            if(lng_opt.options[lng_opt.selectedIndex].value == 7){
                lng_bar = ", psi";
                lng_meters = ", ft";
                lng_meters_min = ", ft/min";
                lng_ltr_min = ", ft<sup><small>3</small></sup>/min";
                lng_min = ", min";
                lng_ltr = ", ft<sup><small>3</small></sup>";
                lng_temper = ", <sup><small>o</small></sup>F";
            }
            if(lng_opt.options[lng_opt.selectedIndex].value == 8){
                lng_bar = ", psi";
                lng_meters = ", ft";
                lng_meters_min = ", ft/min";
                lng_ltr_min = ", ft<sup><small>3</small></sup>/min";
                lng_min = ", min";
                lng_ltr = ", ft<sup><small>3</small></sup>";
                lng_temper = ", <sup><small>o</small></sup>F";
            }
            if(lng_opt.options[lng_opt.selectedIndex].value == 9){
                lng_bar = ", psi";
                lng_meters = ", ft";
                lng_meters_min = ", ft/min";
                lng_ltr_min = ", ft<sup><small>3</small></sup>/min";
                lng_min = ", min";
                lng_ltr = ", ft<sup><small>3</small></sup>";
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

                ".tn_btn_price" : "Build Charts",
                ".tn_btn_learn" : "Build Charts",
                ".tn_btn_pp_profile_chart" : "Build Charts",
                ".tn_btn_cons" : "Build Charts",
                
                ".td_copyright" : "Copyright © 2023 Alexey Vlasov. Licensed under the Apache License 2.0",
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

                ".tn_water_mediterranean" : "Mediterranean Sea",
                ".tn_water_black" : "Black Sea",
                ".tn_water_caspian" : "Caspian Sea",
                ".tn_water_azov" : "Sea of Azov",

                ".tn_ppn2_max_deco" : "PPN<sub><small>2</small></sub> Max Deco" + lng_bar,
                ".tr_celsus" : "Surface Environment Temperature" + lng_temper,
                ".tr_levels" : "Mix / Depth" + lng_meters + " / Time" + lng_min,
                ".btn_add_lvl" : "Add Level",
                ".btn_del_lvl" : "Delete Level",

                ".tr_rate_dsc" : "Descent Rate" + lng_meters_min,
                ".tr_rate_asc" : "Ascent Rate" + lng_meters_min,

                ".tr_rate_asc_surf" : "Ascent Rate to Surface" + lng_meters_min,

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
                ".tr_airbr_time_reset" : "Enable",

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

                ".td_founder_list" : "Thomas Holloway, Vladimir Polyakov, Franjo Sánchez Castejón, Nikita Azarenko, Hugo Ballester, 大漠骑兵Andy （谢鹏）, Lee Nam Gil, Marco P.",
                ".td_gold_list" : "Aleksandr Sestopalec, Aliaksander Lukyanchenka, Michail Balabanov, Fabrice Pierre Palacio",
                ".td_silver_list" : "Maxim Parinov, Anton Bedarev, Andrey Nikolskiy, Denis Bogatyrev",
                ".td_bronze_list" : "Evgenij Vlasov, Evgenij Pyanyh, Nikolaj Voronin, Valerij Vakshul",

                ".header11" : "S.A.U.L. Recreational Dive Planner",
                ".tr_saul_mix" : "Mix",
                ".tr_saul_res_type" : "Calculation Type",
                ".tr_saul_depth" : "Depth" + lng_meters,
                ".tr_saul_btime" : "Bottom Time" + lng_min,
                ".tn_saul_mix_arr_air" : "Air",
                ".tn_saul_mix_arr_ean32" : "EAN32",
                ".tn_saul_res_type_arr_forward" : "%(DCS) for a selected Bottom Time",
                ".tn_saul_res_type_arr_reverse" : "Bottom Time for an acceptable %(DCS)",

                ".tr_saul_cap_percent" : "Your DCS Risk is:",
                ".tr_saul_time_max" : "Your Maximum Bottom Time is:",
                ".tr_saul_time_max_dim" : "Copyright © 2021 Dr. Saul Goldman, Professor Emeritus, University of Guelph",
                ".tr_saul_percent" : "DCS Acceptable Probability, %"
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

                ".tn_btn_price" : "Построить диаграммы",
                ".tn_btn_learn" : "Построить диаграммы",
                ".tn_btn_pp_profile_chart" : "Построить диаграммы",
                ".tn_btn_cons" : "Построить диаграммы",

                ".td_copyright" : "Все права защищены © 2022 Алексей Власов. Использование в соответствии с Apache 2.0 лицензией",
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

                ".tn_water_mediterranean" : "Средиземное море",
                ".tn_water_black" : "Черное море",
                ".tn_water_caspian" : "Каспийское море",
                ".tn_water_azov" : "Азовское море",

                ".tn_ppn2_max_deco" : "Максимальное ПД N<sub><small>2</small></sub> деко" + lng_bar,
                ".tr_celsus" : "Температура на поверхности" + lng_temper,
                ".tr_levels" : "Смесь / глубина" + lng_meters + " / время" + lng_min,
                ".btn_add_lvl" : "Добавить глубину",
                ".btn_del_lvl" : "Удалить глубину",

                ".tr_rate_dsc" : "Скорость погружения" + lng_meters_min,
                ".tr_rate_asc" : "Скорость всплытия" + lng_meters_min,

                ".tr_rate_asc_surf" : "Скорость всплытия на поверхность" + lng_meters_min,

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
                ".tr_airbr_time_reset" : "Включить",

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

                ".td_founder_list" : "Thomas Holloway, Vladimir Polyakov, Franjo Sánchez Castejón, Nikita Azarenko, Hugo Ballester, 大漠骑兵Andy （谢鹏）, Lee Nam Gil, Marco P.",
                ".td_gold_list" : "Aleksandr Shestopalec, Aliaksander Lukyanchenka, Michail Balabanov, Fabrice Pierre Palacio",
                ".td_silver_list" : "Maxim Parinov, Anton Bedarev, Andrey Nikolskiy, Denis Bogatyrev",
                ".td_bronze_list" : "Evgenij Vlasov, Evgenij Pyanyh, Nikolaj Voronin, Valerij Vakshul",

                ".header11" : "S.A.U.L. Рекриационный планировщик риска погружений",
                ".tr_saul_mix" : "Смесь",
                ".tr_saul_res_type" : "Метод расчета",
                ".tr_saul_depth" : "Глубина" + lng_meters,
                ".tr_saul_btime" : "Донное время" + lng_min,
                ".tn_saul_mix_arr_air" : "Воздух",
                ".tn_saul_mix_arr_ean32" : "EAN32",
                ".tn_saul_res_type_arr_forward" : "%(ДКБ) для выбранной глубины",
                ".tn_saul_res_type_arr_reverse" : "Донное время для премлемого %(ДКБ)",

                ".tr_saul_cap_percent" : "Ваш риск ДКБ составляет:",
                ".tr_saul_time_max" : "Ваше максимальное время на дне составляет:",
                ".tr_saul_time_max_dim" : "Все права защищены © 2021 Сол Гольдман, почетный профессор, Гвельфский университет",
                ".tr_saul_percent" : "Допускаемая вероятность ДКБ, %"
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

                ".tn_btn_price" : "Crear Gráficos",
                ".tn_btn_learn" : "Crear Gráficos",
                ".tn_btn_pp_profile_chart" : "Crear Gráficos",
                ".tn_btn_cons" : "Crear Gráficos",

                ".td_copyright" : "Copyright © 2023 Alexey Vlasov. Bajo licencia Apache 2.0",
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

                ".tn_water_mediterranean" : "Mar Mediterráneo",
                ".tn_water_black" : "Mar Negro",
                ".tn_water_caspian" : "Mar Caspio",
                ".tn_water_azov" : "Mar de Azov",

                ".tn_ppn2_max_deco" : "PPN<sub><small>2</small></sub> Deco" + lng_bar,
                ".tr_celsus" : "Temperatura Ambiente en la Superficie" + lng_temper,
                ".tr_levels" : "Mezcla / Profundidad" + lng_meters + " / Tiempo" + lng_min,
                ".btn_add_lvl" : "Añadir Nivel",
                ".btn_del_lvl" : "Borrar Nivel",

                ".tr_rate_dsc" : "Velocidad Descenso" + lng_meters_min,
                ".tr_rate_asc" : "Velocidad Ascenso" + lng_meters_min,

                ".tr_rate_asc_surf" : "Velocidad Ascenso a Superficie" + lng_meters_min,

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
                ".tr_airbr_time_reset" : "Permitir",

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

                ".td_founder_list" : "Thomas Holloway, Vladimir Polyakov, Franjo Sánchez Castejón, Nikita Azarenko, Hugo Ballester, 大漠骑兵Andy （谢鹏）, Lee Nam Gil, Marco P.",
                ".td_gold_list" : "Aleksandr Shestopalec, Aliaksander Lukyanchenka, Michail Balabanov, Fabrice Pierre Palacio",
                ".td_silver_list" : "Maxim Parinov, Anton Bedarev, Andrey Nikolskiy, Denis Bogatyrev",
                ".td_bronze_list" : "Evgenij Vlasov, Evgenij Pyanyh, Nikolaj Voronin, Valerij Vakshul",

                ".header11" : "S.A.U.L. Planificador de Buceo Recreativo",
                ".tr_saul_mix" : "Mezcla",
                ".tr_saul_res_type" : "Tipo de Cálculo",
                ".tr_saul_depth" : "Profundidad" + lng_meters,
                ".tr_saul_btime" : "Tiempo del Fondo" + lng_min,
                ".tn_saul_mix_arr_air" : "Aire",
                ".tn_saul_mix_arr_ean32" : "EAN32",
                ".tn_saul_res_type_arr_forward" : "% (ED) Para Una Hora Inferior Seleccionada",
                ".tn_saul_res_type_arr_reverse" : "Tiempo Inferior Para Aceptable %(ED)",

                ".tr_saul_cap_percent" : "Su Riesgo de (ED) es:",
                ".tr_saul_time_max" : "El Tiempo Máximo de la Parte Inferior es:",
                ".tr_saul_time_max_dim" : "Copyright © 2021 Dr. Saul Goldman, Profesor Emérito, Universidad de Guelph",
                ".tr_saul_percent" : "DC Probabilidad Aceptable, %"
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
                
                ".tn_btn_price" : "Gerar Tabelas",
                ".tn_btn_learn" : "Gerar Tabelas",
                ".tn_btn_pp_profile_chart" : "Gerar Tabelas",
                ".tn_btn_cons" : "Gerar Tabelas",

                ".td_copyright" : "Copyright © 2023 Alexey Vlasov. Licenciado por Apache License 2.0",
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

                ".tn_water_mediterranean" : "Mar Mediterrâneo",
                ".tn_water_black" : "Mar Negro",
                ".tn_water_caspian" : "Mar Cáspio",
                ".tn_water_azov" : "Mar de Azov",

                ".tn_ppn2_max_deco" : "PPN<sub><small>2</small></sub> Max Deco" + lng_bar,
                ".tr_celsus" : "Temperatura Ambiente à Superfície" + lng_temper,
                ".tr_levels" : "Mistura / Profundidade" + lng_meters + " / Tempo" + lng_min,
                ".btn_add_lvl" : "Adicionar Nível",
                ".btn_del_lvl" : "Remover Nível ",

                ".tr_rate_dsc" : "Velocidade de Descida" + lng_meters_min,
                ".tr_rate_asc" : "Velocidade de Subida" + lng_meters_min,

                ".tr_rate_asc_surf" : "Velocidade de Subida à Superfície" + lng_meters_min,

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
                ".tr_airbr_time_reset" : "Permitir",

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

                ".td_founder_list" : "Thomas Holloway, Vladimir Polyakov, Franjo Sánchez Castejón, Nikita Azarenko, Hugo Ballester, 大漠骑兵Andy （谢鹏）, Lee Nam Gil, Marco P.",
                ".td_gold_list" : "Aleksandr Shestopalec, Aliaksander Lukyanchenka, Michail Balabanov, Fabrice Pierre Palacio",
                ".td_silver_list" : "Maxim Parinov, Anton Bedarev, Andrey Nikolskiy, Denis Bogatyrev",
                ".td_bronze_list" : "Evgenij Vlasov, Evgenij Pyanyh, Nikolaj Voronin, Valerij Vakshul",


                ".header11" : "S.A.U.L. Planificador de Mergulho Recreativo",
                ".tr_saul_mix" : "Mistura",
                ".tr_saul_res_type" : "Tipo de Cálculo",
                ".tr_saul_depth" : "Profundidade" + lng_meters,
                ".tr_saul_btime" : "Tempo de Fundo" + lng_min,
                ".tn_saul_mix_arr_air" : "Ar",
                ".tn_saul_mix_arr_ean32" : "EAN32",
                ".tn_saul_res_type_arr_forward" : "%(DCS) para um determinado tempo de fundo",
                ".tn_saul_res_type_arr_reverse" : "Tempo de fundo para um probabilidade aceitável de %(DCS)",

                ".tr_saul_cap_percent" : "O Seu Risco de DCS é:",
                ".tr_saul_time_max" : "O Seu Tempo Máximo de Fundo é:",
                ".tr_saul_time_max_dim" : "Todos os direitos reservados © 2021 Dr. Saul Goldman, Professor Emeritus, Universidade de Guelph",
                ".tr_saul_percent" : "DCS probabilidade aceitável, %"

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

                ".tn_btn_price" : "建立图表",
                ".tn_btn_learn" : "建立图表",
                ".tn_btn_pp_profile_chart" : "建立图表",
                ".tn_btn_cons" : "建立图表",

                ".td_copyright" : " 版权所有© 2022 Alexey Vlasov. 根据Apache 2.0许可证授权",
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

                ".tn_water_mediterranean" : "地中海",
                ".tn_water_black" : "黑海",
                ".tn_water_caspian" : "里海",
                ".tn_water_azov" : "阿佐夫海",

                ".tn_ppn2_max_deco" : "减压阶段最大氮分压" + lng_bar,
                ".tr_celsus" : "水面环境温度 <sup><small>o</small></sup>C",
                ".tr_levels" : "混合比例 / 深度" + lng_meters + " / 时间" + lng_min,
                ".btn_add_lvl" : "增加多层深度",
                ".btn_del_lvl" : "删除多层深度",

                ".tr_rate_dsc" : "下潜速度" + lng_meters_min,
                ".tr_rate_asc" : "上升速度" + lng_meters_min,

                ".tr_rate_asc_surf" : "上升到表面的速度" + lng_meters_min,

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
                ".tr_airbr_time_reset" : "启用",

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

                ".td_founder_list" : "Thomas Holloway, Vladimir Polyakov, Franjo Sánchez Castejón, Nikita Azarenko, Hugo Ballester, 大漠骑兵Andy （谢鹏）, Lee Nam Gil, Marco P.",
                ".td_gold_list" : "Aleksandr Shestopalec, Aliaksander Lukyanchenka, Michail Balabanov, Fabrice Pierre Palacio",
                ".td_silver_list" : "Maxim Parinov, Anton Bedarev, Andrey Nikolskiy, Denis Bogatyrev",
                ".td_bronze_list" : "Evgenij Vlasov, Evgenij Pyanyh, Nikolaj Voronin, Valerij Vakshul",

                ".header11" : "S.A.U.L. 休闲潜水计划工具软件",
                ".tr_saul_mix" : "Mix",
                ".tr_saul_res_type" : "计算类型",
                ".tr_saul_depth" : "深度" + lng_meters,
                ".tr_saul_btime" : "底部时间" + lng_min,
                ".tn_saul_mix_arr_air" : "空气",
                ".tn_saul_mix_arr_ean32" : "EAN32高氧",
                ".tn_saul_res_type_arr_forward" : "已选择的底部时间所面临的DCS风险概率%",
                ".tn_saul_res_type_arr_reverse" : "可接受的DCS风险概率% 对应的底部时间",

                ".tr_saul_cap_percent" : "你面临的减压病风险:",
                ".tr_saul_time_max" : "你的最大底部时间:",
                ".tr_saul_time_max_dim" : "版权所有 © 2021 Saul Goldman博士, Guelph大学名誉教授 ",
                ".tr_saul_percent" : "可接受的DCS减压病风险概率, %"

            },
            6 : {
                //Bulgarian
                ".btn_bailout" : "Аварийна",
                ".btn_diluent" : "Смесителна",
                ".tn_plan_oc" : "Отворен цикъл",
                ".tr_plan_ccr" : "Тип на планиране",
                ".tr_plan_style" : "Стил на планиране",
                ".tn_plan_detailed" : "Детайлно",
                ".tn_plan_short" : "Класически",
                ".tn_download_local" : "Изтеглете локалната версия",
                ".tn_btn_tiss" : "Изграждане на диаграми",
                
                ".tn_btn_price" : "Изграждане на диаграми",
                ".tn_btn_learn" : "Изграждане на диаграми",
                ".tn_btn_pp_profile_chart" : "Изграждане на диаграми",
                ".tn_btn_cons" : "Изграждане на диаграми",

                ".td_copyright" : "Copyright © 2023 Alexey Vlasov. Licensed under the Apache License 2.0",
                ".btn_save" : "Запазване на текущите настройки",
                ".btn_restore" : "Възстанови фабричните настройки",
                ".tr_ifc_set" : "Стил на интерфейса",
                ".tn_color_dark" : "Нощна тема",
                ".tn_color_light" : "Дневна тема",
                ".tn_water_baltic" : "Балтийско море",
                ".tn_water_redsea" : "Червено море",
                ".tn_water_glake" : "Великото езеро Юта",
                ".tn_water_deadsea" : "Мъртво море",
                ".tn_water_pacific" : "Тихи океан",
                ".tn_water_salt" : "Атлантически океан",

                ".tn_water_mediterranean" : "Средиземно море",
                ".tn_water_black" : "Черно море",
                ".tn_water_caspian" : "Каспийско море",
                ".tn_water_azov" : "Азовско море",

                ".tn_ppn2_max_deco" : "пнN<sub><small>2</small></sub> Макс Деко" + lng_bar,
                ".tr_celsus" : "Температура на повърхноста" + lng_temper,
                ".tr_levels" : "Смес / Дълбочина" + lng_meters + " / Време" + lng_min,
                ".btn_add_lvl" : "Добави ниво",
                ".btn_del_lvl" : "Изтрий ниво",
                ".tr_rate_dsc" : "Скорост на спускане" + lng_meters_min,
                ".tr_rate_asc" : "Скорост на изкачване" + lng_meters_min,

                ".tr_rate_asc_surf" : "Скорост на изкачване до повърхността" + lng_meters_min,

                ".tr_rate_asc_deco" : "Скорост на изкачване-деко" + lng_meters_min,
                ".tr_rmv_deco" : "Деко RMV" + lng_ltr_min,
                ".tr_rmv_bt" : "Дънно RMV" + lng_ltr_min,
                ".tr_cng_time" : "Допълнително време за смяна на газа" + lng_min,
                ".tr_lst_stop" : "Последен стоп" + lng_meters,
                ".tn_ppo2_deco" : "пнO<sub><small>2</small></sub> Деко" + lng_bar,
                ".tn_ppo2_bottom" : "пнO<sub><small>2</small></sub> Дъно" + lng_bar,
                ".tn_ppo2_min" : "пнO<sub><small>2</small></sub> Минимум" + lng_bar,
                ".tn_ppn2_max" : "пнN<sub><small>2</small></sub> Макс" + lng_bar,
                ".tn_ibcd_ppn2" : "ИКД пнN<sub><small>2</small></sub> Макс" + lng_bar,
                ".tn_ibcd_pphe" : "ИКД пнHe Макс" + lng_bar,
                ".tn_dmn_mtr" : "Метри/Литри/Бар/Целзий",
                ".tn_dmn_imp" : "Фут/куб.Фут/ПСИ/Фаренхайт",
                ".tr_mdl" : "Деко модел",
                ".tr_water" : "Соленост на водата",
                ".tn_water_fresh" : "Прясна",
                ".tr_gf" : "Градиент фактор, %",
                ".tr_slevel" : "Височинен дайв" + lng_meters,
                ".tn_travel" : "Общо Транспортна/Дънна/Смесителна газ",
                ".tn_deco" : "Общо Деко/Аварийна газ",
                ".header0" : "Общи настройки",
                ".header1" : "Настройки на дайва",
                ".header2" : "Аларми",
                ".header3" : "Дайв газове",
                ".header4" : "Изградете профила на дайва",
                ".header5" : "Парциално налягане на газа" + lng_bar,
                ".header6" : "Напрежение на газа в тъканните групи",
                ".header7" : "Разход на газа",
                ".header8" : "Цена на газа",
                //".header9" : "Миксиране на газа",
                ".header9" : "Инструменти за обучение",
                ".tr_lng" : "Език",
                ".tr_dmn" : "Единица",
                ".td_warn" : "ВНИМАНИЕ! ПРИ ВСЕКИ ПРОФИЛ НА ГМУРКАНЕ НЕЗАВИСИМО ДАЛИ Е СЪЗДАДЕН С ПОМОЩТА НА КОМПЮТЪР ИЛИ ТАБЛИЦИ.ВИНАГИ СЪЩЕСТВУВА РИСК ОТ ДЕКОМПРЕСИОННА БОЛЕСТ- ДКБ. НЯМА ПРОЦЕДУРИ ИЛИ ТАБЛИЦИ, КОИТО МОГАТ ДА ВИ ГАРАНТИРАТ, ЧЕ ДКБ ИЛИ КОСЛОРОДНО ОТРАВЯНЕ ЩЕ БЪДАТ ИЗБЕГНАТИ! Физиологията на човека е индивидуална и може да варира дори и в рамките на един ден. Затова горещо ви препоръчваме да спазвате стриктно плана, който сте създали с помощта на планера, дори с добавка на допълнителен консерватизъм с цел, да се минимализира риска от ДКБ и кислородно отравяне! ",
                ".tn_wrn_ibcd_lip" : "С отчитане влиянието на мазнините",
                ".tn_wrn_btm_mix" :"Дънна газ още" + lng_ltr,
                ".tn_wrn_deco_mix49" :"Деко газ до 49 Още" + lng_ltr,
                ".tn_wrn_deco_mix50" :"Деко газ от 50 до 99% Още" + lng_ltr,
                ".tn_wrn_deco_mix100" :"Деко О<sub><small>2</small></sub> Още" + lng_ltr,
                ".tn_ibcd_lip_yes" :"Да",
                ".tn_ibcd_lip_no" :"Не",
                //".tn_blnd_temp" :"Температура на газа C<sup><small>o</small></sup>",
                //".tn_blnd_temp_mode" :"Газов модел",
                //".tn_blend_mix_first" :"Добави първия газ",
                //".tn_blend_press_start" :"Начално налягане на сместа",
                //".tn_blend_press_end" :"Ново налягане на сместа",
                //".tn_blend_he_start" :"He Mix Start Percents",
                //".tn_blend_o2_start" :"O<sub><small>2</small></sub> Начален процент на сместа",
                //".tn_blend_he_end" :"Процент на He в новата смес",
                //".tn_blend_o2_end" :"O<sub><small>2</small></sub> Процент на новата смес",
                ".tn_calc_depth" :"Максимална оперативна дълбочина" + lng_meters,
                ".tn_calc_o2" :"Кислород%",
                ".tn_calc_he" :"Хелий%",
                ".tn_calc_depth_lo" :"Минимална оперативна дълбочина" + lng_meters,
                //".tn_blnd_temp_mode_ideal" :"Идеален модел",
                //".tn_blnd_temp_mode_vdv" :"Van Der Waals модел",
                //".tn_mix_first_he" :"Hе",
                //".tn_mix_first_o2" :"O<sub><small>2</small></sub>",
                ".tn_price_cur" :"Избор на валута",
                ".tn_price_top" :"Цена на газа",
                ".tn_price_he" :"Цена на He за единица",
                ".tn_price_o2" :"O<sub><small>2</small></sub> Цена за единица",
                ".tn_price_us" :"САЩ долар",
                ".tn_price_eu" :"Евро",
                ".tn_price_uk" :"Английски паунд",
                ".tn_price_rf" :"Руска рубла",
                ".tn_price_cn" :"Китайски Юан",
                ".btn_export_pdf_profile" :"PDF експорт",
                ".btn_export_pdf_pp" :"PDF експорт",
                ".tn_btn_overlay" :"Затвори",
                ".btn_export_xls" :"Експорт XLS таблица",
                ".btn_tbl_pdf" :"Експорт PDF таблица",
                ".tn_calc_ead" :"ЕВД:&nbsp;",
                ".tn_calc_end" :"ЕНД:&nbsp;",
                ".tn_calc_o2max" : "&nbsp;пнO<sub><small>2</small></sub> Дъно&nbsp;" + lng_bar,
                ".tn_calc_o2min" : "&nbsp;пнO<sub><small>2</small></sub> Мин&nbsp;" + lng_bar,
                ".tn_calc_n2max" : "&nbsp;пнN<sub><small>2</small></sub> Макс" + lng_bar,
                ".tn_calc_f_app" :"Формули и изчисления",
                ".tn_calc_f_mod" :"Максимална оперативна дълбочина" + lng_meters,
                ".tn_calc_f_ead" :"Еквивалентна въздушна дълбочина" + lng_meters,
                ".tn_calc_f_ead2" :"Само N<sub><small>2</small></sub> Narcotic",
                ".tn_calc_f_end" :"Еквивалентна наркотична дълбочина" + lng_meters,
                ".tn_calc_f_end2" :"N<sub><small>2</small></sub> и O<sub><small>2</small></sub> Наркотичност",
                ".tn_calc_cur_ex_rate" :"Курс за един долар",
                ".tn_calc_cur_ex_rate_pound" :"Паунда",
                ".tn_calc_cur_ex_rate_pence" :"Пенс",
                ".tn_calc_cur_ex_rate_euro" :"Евро",
                ".tn_calc_cur_ex_rate_eucents" :"Цент",
                ".tn_calc_cur_ex_rate_rub" :"Рубли",
                ".tn_calc_cur_ex_rate_kopek" :"Копейки",
                ".tn_calc_cur_ex_rate_yuan" :"Юан",
                ".tn_calc_cur_ex_rate_fyn" :"Фин",
                ".tr_setpoint_start":"CCR Зададена точка Старт" + lng_bar,
                ".tr_setpoint_bottom":"CCR зададена точка  дъно" + lng_bar,
                ".tr_setpoint_deco":"CCR Зададена точка Деко" + lng_bar,
                ".tr_airbr_header" : "Газова почивка",
                ".tr_airbr_depth" : "Дълбочина повече от" + lng_meters,
                ".tr_airbr_o2" : "Деко на кислород повече от" + ", %",
                ".tr_airbr_mix" : "Микс газова почивка",
                ".tr_airbr_time_after" : "Почивка след" + lng_min,
                ".tr_airbr_time" : "Време на почивката" + lng_min,
                ".tr_airbr_time_reset" : "Активация",
                ".tn_airbr_time_reset_yes" : "Да",
                ".tn_airbr_time_reset_no" : "Не",
                ".header10" : "Зала на славата - дарения",
                ".tn_donat_header" : "",
                ".btn_msg" : "Как да направя дарение",
                ".btn_tel" : "Обадете се на разработчика",
                ".btn_ios_msg" : "Как да направя дарение",
                ".btn_ios_tel" : "Обадете се на разработчика",
                ".tn_donat_header_founder" : "Секция за дарения основатели",
                ".tn_donat_header_gold" : "Секция за дарение златна",
                ".tn_donat_header_silver" : " Секция за дарение сребърна ",
                ".tn_donat_header_bronze" : " Секция за дарение  ",
                ".td_founder_list" : "Thomas Holloway, Vladimir Polyakov, Franjo Sánchez Castejón, Nikita Azarenko, Hugo Ballester, 大漠骑兵Andy （谢鹏）, Lee Nam Gil, Marco P.",
                ".td_gold_list" : "Aleksandr Sestopalec, Aliaksander Lukyanchenka, Michail Balabanov, Fabrice Pierre Palacio",
                ".td_silver_list" : "Maxim Parinov, Anton Bedarev, Andrey Nikolskiy, Denis Bogatyrev",
                ".td_bronze_list" : "Evgenij Vlasov, Evgenij Pyanyh, Nikolaj Voronin, Valerij Vakshul",

                ".header11" : "S.A.U.L. Recreational Dive Planner",
                ".tr_saul_mix" : "Микс",
                ".tr_saul_res_type" : "Вид калкулация",
                ".tr_saul_depth" : "Дълбочина" + lng_meters,
                ".tr_saul_btime" : "Дънно време" + lng_min,
                ".tn_saul_mix_arr_air" : "Въздух",
                ".tn_saul_mix_arr_ean32" : "EAN32",
                ".tn_saul_res_type_arr_forward" : "%(DCS) за избраното дънно време",
                ".tn_saul_res_type_arr_reverse" : "Дънно време с приемлив %(DCS)",

                ".tr_saul_cap_percent" : "Вашия риск за DCS е :",
                ".tr_saul_time_max" : "Вашето максимално дънно време е:",
                ".tr_saul_time_max_dim" : "Copyright © 2021 Dr. Saul Goldman, Professor Emeritus, University of Guelph",
                ".tr_saul_percent" : "DCS Приемлива вероятност, %"
            },
            7: {
                //Fr
                ".btn_bailout" : "Bailout",
                ".btn_diluent" : "Diluant",
                ".tn_plan_oc" : "Circuit ouvert",
                ".tr_plan_ccr" : "Type de planning",
                ".tr_plan_style" : "Style de plan",
                ".tn_plan_detailed" : "en détail",
                ".tn_plan_short" : "Classique",
                ".tn_download_local" : "Télécharger la version local",
                ".tn_btn_tiss" : "Construire les tableaux",
                
                ".tn_btn_price" : "Construire les tableaux",
                ".tn_btn_learn" : "Construire les tableaux",
                ".tn_btn_pp_profile_chart" : "Construire les tableaux",
                ".tn_btn_cons" : "Construire les tableaux",

                ".td_copyright" : "Copyright © 2023 Alexey Vlasov. Sous licence Apache License 2.0",
                ".btn_save" : "Enregistrer les données actuelles",
                ".btn_restore" : "Restorer les données",
                ".tr_ifc_set" : "Style d’interface",
                ".tn_color_dark" : "Thème foncé",
                ".tn_color_light" : "Thème Clair",
                ".tn_water_baltic" : "Mer Baltique",
                ".tn_water_redsea" : "Mer Rouge",
                ".tn_water_glake" : "Les grands lacs Utah",
                ".tn_water_deadsea" : "Mer Morte",
                ".tn_water_pacific" : "Pacifique",
                ".tn_water_salt" : "Atlantique",

                ".tn_water_mediterranean" : "Mer Méditerranée",
                ".tn_water_black" : "Mer Noire",
                ".tn_water_caspian" : "Mer Caspienne",
                ".tn_water_azov" : "Mer d'Azov",

                ".tn_ppn2_max_deco" : "PPN<sub><small>2</small></sub>Max Deco" + lng_bar,
                ".tr_celsus" : "Temperature de surface environnante" + lng_temper,
                ".tr_levels" : "Mix / Profondeur" + lng_meters + " / Temps" + lng_min,
                ".btn_add_lvl" : "Ajouter niveau",
                ".btn_del_lvl" : "Effacer niveau",
                ".tr_rate_dsc" : "Vitesse de descente" + lng_meters_min,
                ".tr_rate_asc" : "Vitesse de remonter" + lng_meters_min,

                ".tr_rate_asc_surf" : "Vitesse de remontée en surface" + lng_meters_min,

                ".tr_rate_asc_deco" : "Vitesse de remontée en deco" + lng_meters_min,
                ".tr_rmv_deco" : "Deco RMV" + lng_ltr_min,
                ".tr_rmv_bt" : "Bottom RMV" + lng_ltr_min,
                ".tr_cng_time" : "Temps de changement de gaz" + lng_min,
                ".tr_lst_stop" : "Dernier Stop" + lng_meters,
                ".tn_ppo2_deco" : "PPO<sub><small>2</small></sub> Deco" + lng_bar,
                ".tn_ppo2_bottom" : "PPO<sub><small>2</small></sub> Fond" + lng_bar,
                ".tn_ppo2_min" : "PPO<sub><small>2</small></sub> Min" + lng_bar,
                ".tn_ppn2_max" : "PPAzote<sub><small>2</small></sub> Max" + lng_bar,
                ".tn_ibcd_ppn2" : "ICD PPAzote<sub><small>2</small></sub> Max" + lng_bar,
                ".tn_ibcd_pphe" : "ICD PPHelium Max" + lng_bar,
                ".tn_dmn_mtr" : "Metres/Litres/Bar/Celsius",
                ".tn_dmn_imp" : "Feet/Cu.Feet/PSI/Fahrenheit",
                ".tr_mdl" : "Model de Décompression",
                ".tr_water" : "Salinité de l’eau",
                ".tn_water_fresh" : "Douce",
                ".tr_gf" : "Facteur du gradien, %",
                ".tr_slevel" : "Altitude de plongée" + lng_meters,
                ".tn_travel" : "Total Travel/Fond/Diluent mélangé ",
                ".tn_deco" : "Total Déco/Bailout mélangé",
                ".header0" : "Réglages généraux",
                ".header1" : "Réglages de plongée",
                ".header2" : "Alertes de plongée",
                ".header3" : "Gaz de plongée",
                ".header4" : "Construire profile de plongée",
                ".header5" : "Pression partiel du gaz" + lng_bar,
                ".header6" : "Tension des Gaz dans les compartiments des tissues",
                ".header7" : "Consommation de gaz",
                ".header8" : "Prix du gaz",
                //".header9" : "Gaz mélangé",
                ".header9" : "Outils d’apprentissage",
                ".tr_lng" : "Langue",
                ".tr_dmn" : "Unité",
                ".td_warn" : " ATTENTION! IL Y A TOUJOURS UN RISQUE DE MALADIE DE DÉCOMPRESSION (ADD) POUR TOUT PROFIL DE PLONGÉE MÊME SI VOUS SUIVEZ LE PLAN DE PLONGÉE PRESCRIT PAR LES TABLES DE PLONGÉE. AUCUNE PROCÉDURE OU TABLEAU DE PLONGÉE N'ÉVITERA LA POSSIBILITÉ D'ACCIDENT DE DECOMPRESSION OU DE TOXICITÉ D’OXYGÈNE! La composition physiologique d’un individu peut varier d’un jour à l’autre. Il est fortement conseillé de bien rester dans les limites d'exposition fournies par le planificateur pour minimiser le risque de ADD.",
                ".tn_wrn_ibcd_lip" : "Considerez la réponse lipidique",
                ".tn_wrn_btm_mix" :"Mélange fond plus que" + lng_ltr,
                ".tn_wrn_deco_mix49" :"Mélange Déco jusqu’à 49%" + lng_ltr,
                ".tn_wrn_deco_mix50" :"Mélange Déco de 50 à 99%" + lng_ltr,
                ".tn_wrn_deco_mix100" :"Déco O<sub><small>2</small></sub>plus" + lng_ltr,
                ".tn_ibcd_lip_yes" :"Oui",
                ".tn_ibcd_lip_no" :"Non",
                //".tn_blnd_temp" :"Température du gaz C<sup><small>o</small></sup>",
                //".tn_blnd_temp_mode" :"Model de gas",
                //".tn_blend_mix_first" :"Ajoutez le premier gas",
                //".tn_blend_press_start" :"Pression du mélange de départ",
                //".tn_blend_press_end" :"Nouvelle pression de départ",
                //".tn_blend_he_start" :"Pourcentage du mélange de départ d’Helium",
                //".tn_blend_o2_start" :"O<sub><small>2</small></sub>Pourcentage du mélange de départ",
                //".tn_blend_he_end" :"Nouveau pourcentage de melange d’Helium",
                //".tn_blend_o2_end" :"Oxygene<sub><small>2</small></sub>Nouveau pourcentage de mélange",
                ".tn_calc_depth" :"Profondeur maximum d’opération" + lng_meters,
                ".tn_calc_o2" :"Oxygene%",
                ".tn_calc_he" :"Helium%",
                ".tn_calc_depth_lo" :"Profondeur minimum d’opération " + lng_meters,
                //".tn_blnd_temp_mode_ideal" :"Modèle Ideal",
                //".tn_blnd_temp_mode_vdv" :"Modèle Van Der Waals",
                //".tn_mix_first_he" :"Helium",
                //".tn_mix_first_o2" :"Oxygene<sub><small>2</small></sub>",
                ".tn_price_cur" :"Selection de la Devise",
                ".tn_price_top" :"Meilleur prix des gas",
                ".tn_price_he" :"Prix de l’helium par unité",
                ".tn_price_o2" :"O<sub><small>2</small></sub>Prix par unité ",
                ".tn_price_us" :"US Dollar",
                ".tn_price_eu" :"Euro",
                ".tn_price_uk" :"British Pound",
                ".tn_price_rf" :"Russian Ruble",
                ".tn_price_cn" :"Chinese Yuan",
                ".btn_export_pdf_profile" :"Export PDF",
                ".btn_export_pdf_pp" :"Export PDF",
                ".tn_btn_overlay" :"Fermer",
                ".btn_export_xls" :"Exporter la table en XLS",
                ".btn_tbl_pdf" :"Exporter la table en PDF",
                ".tn_calc_ead" :"EAD:&nbsp;",
                ".tn_calc_end" :"END:&nbsp;",
                ".tn_calc_o2max" : "&nbsp;PPOxygene<sub><small>2</small></sub>Fond&nbsp;" + lng_bar,
                ".tn_calc_o2min" : "&nbsp;PPOxygene<sub><small>2</small></sub> Min&nbsp;" + lng_bar,
                ".tn_calc_n2max" : "&nbsp;PPAzote<sub><small>2</small></sub> Max" + lng_bar,
                ".tn_calc_f_app" :"Formule et calculation",
                ".tn_calc_f_mod" :"Profondeur maximum d’opération" + lng_meters,
                ".tn_calc_f_ead" :"Profondeur d’air équivalente" + lng_meters,
                ".tn_calc_f_ead2" :"Seulement N<sub><small>2</small></sub> Narcotic",
                ".tn_calc_f_end" :"Profondeur narcotique équivalente " + lng_meters,
                ".tn_calc_f_end2" :"Azote<sub><small>2</small></sub>et O<sub><small>2</small></sub>Narcose",
                ".tn_calc_cur_ex_rate" :"Taux de change du dollar",
                ".tn_calc_cur_ex_rate_pound" :"Pounds",
                ".tn_calc_cur_ex_rate_pence" :"Pence",
                ".tn_calc_cur_ex_rate_euro" :"Euro",
                ".tn_calc_cur_ex_rate_eucents" :"Cents",
                ".tn_calc_cur_ex_rate_rub" :"Roubles",
                ".tn_calc_cur_ex_rate_kopek" :"Kopeks",
                ".tn_calc_cur_ex_rate_yuan" :"Yuan",
                ".tn_calc_cur_ex_rate_fyn" :"Fyn",
                ".tr_setpoint_start":"CCR Entrez Point de départ" + lng_bar,
                ".tr_setpoint_bottom":"CCR Entrez point du fond" + lng_bar,
                ".tr_setpoint_deco":"CCR Entrez point de Deco" + lng_bar,
                ".tr_airbr_header" : "Pause gaz",
                ".tr_airbr_depth" : "Si la profondeur est plus que" + lng_meters,
                ".tr_airbr_o2" : "Déco Oxygène est plus que " + ", %",
                ".tr_airbr_mix" : "Pause mélange",
                ".tr_airbr_time_after" : "Pause après" + lng_min,
                ".tr_airbr_time" : "Temps de pause" + lng_min,
                ".tr_airbr_time_reset" : "Activé",
                ".tn_airbr_time_reset_yes" : "Oui",
                ".tn_airbr_time_reset_no" : "Non",
                ".header10" : "Temple de la Donation ",
                ".tn_donat_header" : "",
                ".btn_msg" : " Comment faire un don ",
                ".btn_tel" : " Appelez les développeurs ",
                ".btn_ios_msg" : " Comment faire un don ",
                ".btn_ios_tel" : " Appelez les développeurs ",
                ".tn_donat_header_founder" : " Section des dons des fondateurs ",
                ".tn_donat_header_gold" : " Section OR des dons ",
                ".tn_donat_header_silver" : " Section Argent des dons",
                ".tn_donat_header_bronze" : " Section Bronze des dons",
                ".td_founder_list" : "Thomas Holloway, Vladimir Polyakov, Franjo Sánchez Castejón, Nikita Azarenko, Hugo Ballester, 大漠骑兵Andy （谢鹏）, Lee Nam Gil, Marco P.",
                ".td_gold_list" : "Aleksandr Sestopalec, Aliaksander Lukyanchenka, Michail Balabanov, Fabrice Pierre Palacio",
                ".td_silver_list" : "Maxim Parinov, Anton Bedarev, Andrey Nikolskiy, Denis Bogatyrev",
                ".td_bronze_list" : "Evgenij Vlasov, Evgenij Pyanyh, Nikolaj Voronin, Valerij Vakshul",

                ".header11" : "S.A.U.L. Planificateur de plongée récréative",
                ".tr_saul_mix" : "Mélange",
                ".tr_saul_res_type" : "Type de Calcul",
                ".tr_saul_depth" : "Profondeur" + lng_meters,
                ".tr_saul_btime" : "Temps au fond" + lng_min,
                ".tn_saul_mix_arr_air" : "Air",
                ".tn_saul_mix_arr_ean32" : "EAN32",
                ".tn_saul_res_type_arr_forward" : "%(d’accident de décompression) pour un temps au fond sélectionné",
                ".tn_saul_res_type_arr_reverse" : "Temps au fond pour un %(d’accident de décompression) acceptable",

                ".tr_saul_cap_percent" : "Votre Risque d’accident de décompression est de:",
                ".tr_saul_time_max" : "Votre temps maximum au fond est de:",
                ".tr_saul_time_max_dim" : "Copyright © 2021 Dr. Saul Goldman, Professor Emeritus, University of Guelph",
                ".tr_saul_percent" : "Probabilité acceptable d’accident de décompression, %"
            },
            8: {
                //Korean
                ".btn_bailout" : "Bailout",
                ".btn_diluent" : "Diluent",
                ".tn_plan_oc" : "Open Circuit",
                ".tr_plan_ccr" : "계획 유형",
                ".tr_plan_style" : "계획 스타일",
                ".tn_plan_detailed" : "상세한",
                ".tn_plan_short" : "클레식",
                ".tn_download_local" : "로컬 버전 다운로드",
                ".tn_btn_tiss" : "차트 작성",

                ".tn_btn_price" : "차트 작성",
                ".tn_btn_learn" : "차트 작성",
                ".tn_btn_pp_profile_chart" : "차트 작성",
                ".tn_btn_cons" : "차트 작성",

                ".td_copyright" : "저작권 © 2023 알렉세이 블라소프. Licensed under the Apache License 2.0",
                ".btn_save" : "현재 설정 저장",
                ".btn_restore" : "기본값으로 복원",
                ".tr_ifc_set" : "인터페이스 스타일",
                ".tn_color_dark" : "어두운 테마",
                ".tn_color_light" : "밝은 테마",
                ".tn_water_baltic" : "발트 해",
                ".tn_water_redsea" : "홍해",
                ".tn_water_glake" : "그레이트 레이크 유타",
                ".tn_water_deadsea" : "사해",
                ".tn_water_pacific" : "태평양",
                ".tn_water_salt" : "대서양",

                ".tn_water_mediterranean" : "지중해",
                ".tn_water_black" : "흑해",
                ".tn_water_caspian" : "카스피해",
                ".tn_water_azov" : "아조프해",

                ".tn_ppn2_max_deco" : "PPN<sub><small>2</small></sub> Max Deco" + lng_bar,
                ".tr_celsus" : "표면 환경 온도" + lng_temper,
                ".tr_levels" : "기체 / 수심" + lng_meters + " / 타임" + lng_min,
                ".btn_add_lvl" : "바닥 추가",
                ".btn_del_lvl" : "바닥 삭제",
                ".tr_rate_dsc" : "하강률" + lng_meters_min,
                ".tr_rate_asc" : "상승률" + lng_meters_min,

                ".tr_rate_asc_surf" : "표면으로의 상승 속도" + lng_meters_min,

                ".tr_rate_asc_deco" : "상승 데코 비율" + lng_meters_min,
                ".tr_rmv_deco" : "데코 RMV" + lng_ltr_min,
                ".tr_rmv_bt" : "바텀 RMV" + lng_ltr_min,
                ".tr_cng_time" : "기체 체인지 추가 시간" + lng_min,
                ".tr_lst_stop" : "Last Stop" + lng_meters,
                ".tn_ppo2_deco" : "PPO<sub><small>2</small></sub> 데코" + lng_bar,
                ".tn_ppo2_bottom" : "PPO<sub><small>2</small></sub> 바텀" + lng_bar,
                ".tn_ppo2_min" : "PPO<sub><small>2</small></sub> Min" + lng_bar,
                ".tn_ppn2_max" : "PPN<sub><small>2</small></sub> Max" + lng_bar,
                ".tn_ibcd_ppn2" : "ICD PPN<sub><small>2</small></sub> Max" + lng_bar,
                ".tn_ibcd_pphe" : "ICD PPHe Max" + lng_bar,
                ".tn_dmn_mtr" : "Meters/Liters/Bar/Celsius",
                ".tn_dmn_imp" : "Feet/Cu.Feet/PSI/Fahrenheit",
                ".tr_mdl" : "데코 모델",
                ".tr_water" : "물 염분",
                ".tn_water_fresh" : "민물",
                ".tr_gf" : "Gradient Factor, %",
                ".tr_slevel" : "다이빙 고도" + lng_meters,
                ".tn_travel" : "Total Travel/Bottom/Diluent Mixes",
                ".tn_deco" : "Total Deco/Bailout Mixes",
                ".header0" : "전역 설정",
                ".header1" : "다이빙 설정",
                ".header2" : "다이빙 경고",
                ".header3" : "다이빙 기체",
                ".header4" : "다이빙 프로필 작성",
                ".header5" : "가스 부분 압력" + lng_bar,
                ".header6" : "조직 구획의 기체 장력",
                ".header7" : "가스 소비",
                ".header8" : "기체 금액 계산",
                ".header9" : "기체 혼합",
                //".header9" : "Learning Tools",
                ".tr_lng" : "언어",
                ".tr_dmn" : "단위",
                ".td_warn" : "경고! 다이빙 테이블에 명시된 다이빙 계획을 따르더라도 모든 다이빙 프로필에는 항상 감압병(DCS)의 위험이 있습니다. 어떤 절차나 다이브 테이블도 DCS 또는 산소 독성의 가능성을 방지할 수 없습니다! 개인의 생리적 구성은 매일 다를 수 있습니다. DCS의 위험을 최소화하기 위해 계획자가 제공한 노출 한도 내에서 잘 유지하는 것이 좋습니다..",
                ".tn_wrn_ibcd_lip" : "지질 반응을 고려",
                ".tn_wrn_btm_mix" :"Bottom Mix More" + lng_ltr,
                ".tn_wrn_deco_mix49" :"Deco Mix Up 49% More" + lng_ltr,
                ".tn_wrn_deco_mix50" :"Deco Mix 50 to 99% More" + lng_ltr,
                ".tn_wrn_deco_mix100" :"Deco O<sub><small>2</small></sub> More" + lng_ltr,
                ".tn_ibcd_lip_yes" :"Yes",
                ".tn_ibcd_lip_no" :"No",
                //".tn_blnd_temp" :"기체 온도 C<sup><small>o</small></sup>",
                //".tn_blnd_temp_mode" :"가스 모델",
                //".tn_blend_mix_first" :"첫 번째 기체 추가",
                //".tn_blend_press_start" :"혼합 시작 비율",
                //".tn_blend_press_end" :"새로운 혼합 비율",
                //".tn_blend_he_start" :"He 혼합 시작 비율",
                //".tn_blend_o2_start" :"O<sub><small>2</small></sub> 혼합 시작 비율",
                //".tn_blend_he_end" :"He 혼합 시작 비율",
                //".tn_blend_o2_end" :"O<sub><small>2</small></sub> 새로운 혼합 비율",
                ".tn_calc_depth" :"최대 다이빙 수심" + lng_meters,
                ".tn_calc_o2" :"Oxygen%",
                ".tn_calc_he" :"Helium%",
                ".tn_calc_depth_lo" :"최소 다이빙 수심" + lng_meters,
                //".tn_blnd_temp_mode_ideal" :”이상적인 모델",
                //".tn_blnd_temp_mode_vdv" :"반 데르 발스 모델",
                //".tn_mix_first_he" :"He",
                //".tn_mix_first_o2" :"O<sub><small>2</small></sub>",
                ".tn_price_cur" :"통화 선택",
                ".tn_price_top" :"가스 최고 가격",
                ".tn_price_he" :"He 단위 당 가격",
                ".tn_price_o2" :"O<sub><small>2</small></sub> 단위 당 가격",
                ".tn_price_us" :"US 달러",
                ".tn_price_eu" :"유로",
                ".tn_price_uk" :"영국 파운드",
                ".tn_price_rf" :"러시아 루블",
                ".tn_price_cn" :"중국 위안",
                ".btn_export_pdf_profile" :"PDF 로 내보내기",
                ".btn_export_pdf_pp" :"PDF 로 내보내기",
                ".tn_btn_overlay" :"닫다",
                ".btn_export_xls" :"XLS 테이블 내보내기",
                ".btn_tbl_pdf" :"PDF 표 내보내기",
                ".tn_calc_ead" :"EAD:&nbsp;",
                ".tn_calc_end" :"END:&nbsp;",
                ".tn_calc_o2max" : "&nbsp;PPO<sub><small>2</small></sub> Bottom&nbsp;" + lng_bar,
                ".tn_calc_o2min" : "&nbsp;PPO<sub><small>2</small></sub> Min&nbsp;" + lng_bar,
                ".tn_calc_n2max" : "&nbsp;PPN<sub><small>2</small></sub> Max" + lng_bar,
                ".tn_calc_f_app" :"공식 및 계산",
                ".tn_calc_f_mod" :"최대 다이빙 수심" + lng_meters,
                ".tn_calc_f_ead" :"등가 공기 수심" + lng_meters,
                ".tn_calc_f_ead2" :"Only N<sub><small>2</small></sub> Narcotic",
                ".tn_calc_f_end" :"등가 마취 수심" + lng_meters,
                ".tn_calc_f_end2" :"N<sub><small>2</small></sub> and O<sub><small>2</small></sub> 마취",
                ".tn_calc_cur_ex_rate" :"1달러 환율",
                ".tn_calc_cur_ex_rate_pound" :"파운드",
                ".tn_calc_cur_ex_rate_pence" :"펜스",
                ".tn_calc_cur_ex_rate_euro" :"유로",
                ".tn_calc_cur_ex_rate_eucents" :"센트",
                ".tn_calc_cur_ex_rate_rub" :"루블",
                ".tn_calc_cur_ex_rate_kopek" :"코펙스",
                ".tn_calc_cur_ex_rate_yuan" :"원",
                ".tn_calc_cur_ex_rate_fyn" :"핀",
                ".tr_setpoint_start":"CCR 설정값 시작" + lng_bar,
                ".tr_setpoint_bottom":"CCR 설정값 바텀" + lng_bar,
                ".tr_setpoint_deco":"CCR 설정값 데코" + lng_bar,
                ".tr_airbr_header" : "가스 브레이크",
                ".tr_airbr_depth" : "Depth is more than" + lng_meters,
                ".tr_airbr_o2" : "Deco Oxygen은 그 이상입니다" + ", %",
                ".tr_airbr_mix" : "Break Mix",
                ".tr_airbr_time_after" : "Break After" + lng_min,
                ".tr_airbr_time" : "Break Time" + lng_min,
                ".tr_airbr_time_reset" : "설정",
                ".tn_airbr_time_reset_yes" : "Yes",
                ".tn_airbr_time_reset_no" : "No",
                ".header10" : "기부 명예의 전당",
                ".tn_donat_header" : "",
                ".btn_msg" : "기부 방법",
                ".btn_tel" : "개발자에게 전화 걸기",
                ".btn_ios_msg" : "기부 방법",
                ".btn_ios_tel" : "개발자에게 전화 걸기",
                ".tn_donat_header_founder" : "설립자 기부 섹션",
                ".tn_donat_header_gold" : "금 기부 섹션",
                ".tn_donat_header_silver" : "은 기부 섹션",
                ".tn_donat_header_bronze" : "동 기부 섹션",
                ".td_founder_list" : "Thomas Holloway, Vladimir Polyakov, Franjo Sánchez Castejón, Nikita Azarenko, Hugo Ballester, 大漠骑兵Andy （谢鹏）, Lee Nam Gil, Marco P.",
                ".td_gold_list" : "Aleksandr Sestopalec, Aliaksander Lukyanchenka, Michail Balabanov",
                ".td_silver_list" : "Maxim Parinov, Anton Bedarev, Andrey Nikolskiy, Denis Bogatyrev",
                ".td_bronze_list" : "Evgenij Vlasov, Evgenij Pyanyh, Nikolaj Voronin, Valerij Vakshul",

                ".header11" : "S.A.U.L. 레크리에이션 다이빙 플래너",
                ".tr_saul_mix" : "기체",
                ".tr_saul_res_type" : "계산 유형",
                ".tr_saul_depth" : "수심" + lng_meters,
                ".tr_saul_btime" : "바텀 시간" + lng_min,
                ".tn_saul_mix_arr_air" : "Air",
                ".tn_saul_mix_arr_ean32" : "EAN32",
                ".tn_saul_res_type_arr_forward" : "%(DCS) 선택된 바텀 시간",
                ".tn_saul_res_type_arr_reverse" : "선택 가능한 바텀 시간 %(DCS)",

                ".tr_saul_cap_percent" : "귀하의 DCS 위험은 다음과 같습니다",
                ".tr_saul_time_max" : "귀하의 최대 바텀 시간은 다음과 같습니다",
                ".tr_saul_time_max_dim" : "저작권 © 2021 Dr. Saul Goldman, Professor Emeritus, 대학교 명예교수",
                ".tr_saul_percent" : "DCS 허용 확률, %"
            },
            9: {
                //Italian
                ".btn_bailout" : "Bailout",
                ".btn_diluent" : "Diluente",
                ".tn_plan_oc" : "Circuito Aperto",
                ".tr_plan_ccr" : "Tipo di pianificazione",
                ".tr_plan_style" : "Stile di pianificazione",
                ".tn_plan_detailed" : "Dettagliato",
                ".tn_plan_short" : "Classico",
                ".tn_download_local" : "Scarica la versione del tuo sistema operativo",
                ".tn_btn_tiss" : "Disegna i grafici",

                ".tn_btn_price" : "Disegna i grafici",
                ".tn_btn_learn" : "Disegna i grafici",
                ".tn_btn_pp_profile_chart" : "Disegna i grafici",
                ".tn_btn_cons" : "Disegna i grafici",

                ".td_copyright" : "Copyright © 2023 Alexey Vlasov. Autorizzato secondo la licenza Apache 2.0",
                ".btn_save" : "Salva le impostazioni attuali",
                ".btn_restore" : "Ripristina alle impostazioni di fabbrica",
                ".tr_ifc_set" : "Stile dell’interfaccia",
                ".tn_color_dark" : "Tema Scuro",
                ".tn_color_light" : "Tema Chiaro",
                ".tn_water_baltic" : "Mar Baltico",
                ".tn_water_redsea" : "Mar Rosso",
                ".tn_water_glake" : " Gran Lago Salato - UTAH",
                ".tn_water_deadsea" : "Mar Morto",
                ".tn_water_pacific" : "Oceano Pacifico",
                ".tn_water_salt" : "Oceano Atlantico",

                ".tn_water_mediterranean" : "Mar Mediterraneo",
                ".tn_water_black" : "Mar Nero",
                ".tn_water_caspian" : "Mar Caspio",
                ".tn_water_azov" : "Mar d'Azov",

                ".tn_ppn2_max_deco" : "PPN<sub><small>2</small></sub> Mass. Deco" + lng_bar,
                ".tr_celsus" : "Temperatura ambientale superficiale" + lng_temper,
                ".tr_levels" : "Mix / Profondità" + lng_meters + " / Tempo" + lng_min,
                ".btn_add_lvl" : "Aggiungi Livello",
                ".btn_del_lvl" : "Cancella Livello",
                
                ".tr_rate_dsc" : "Velocità di discesa" + lng_meters_min,
                ".tr_rate_asc" : "Velocità di salita" + lng_meters_min,

                ".tr_rate_asc_surf" : "Velocità di salita in superficie" + lng_meters_min,

                ".tr_rate_asc_deco" : "Velocità di salita in Deco" + lng_meters_min,
                ".tr_rmv_deco" : "RMV in Deco" + lng_ltr_min,
                ".tr_rmv_bt" : "RMV sul fondo" + lng_ltr_min,
                ".tr_cng_time" : "Tempo Ulteriore per cambio miscela" + lng_min,
                ".tr_lst_stop" : "Ultimo Stop" + lng_meters,
                ".tn_ppo2_deco" : "PPO<sub><small>2</small></sub> Deco" + lng_bar,
                ".tn_ppo2_bottom" : "PPO<sub><small>2</small></sub> Fondo" + lng_bar,
                ".tn_ppo2_min" : "PPO<sub><small>2</small></sub> Min." + lng_bar,
                ".tn_ppn2_max" : "PPN<sub><small>2</small></sub> Mass." + lng_bar,
                ".tn_ibcd_ppn2" : "CDI PPN<sub><small>2</small></sub> Mass." + lng_bar,
                ".tn_ibcd_pphe" : "CDI PPHe Mass." + lng_bar,
                ".tn_dmn_mtr" : "Metri/Litri/Bar/Celsius",
                ".tn_dmn_imp" : "Piedi/Piedi Cubi/PSI/Fahrenheit",
                ".tr_mdl" : "Modello Decompressivo",
                ".tr_water" : "Salinità dell’acqua",
                ".tn_water_fresh" : "Fresca",
                ".tr_gf" : "Gradient Factor, %",
                ".tr_slevel" : "Elevazione dell’immersione" + lng_meters,
                ".tn_travel" : "Immersione totale/Fondo/Miscele diluenti",
                ".tn_deco" : "DECO Totale /Miscele di Bailout",
                ".header0" : "Impostazioni Generali",
                ".header1" : "Impostazioni dell’immersione",
                ".header2" : "Allarmi per l’immersione",
                ".header3" : "Gas per l’immersione",
                ".header4" : "Sviluppa il profilo dell’immersione",
                ".header5" : "Pressione parziale dei Gas" + lng_bar,
                ".header6" : "Tensione gassosa nei compartimenti tissutali",
                ".header7" : "Consumo di Gas",
                ".header8" : "Costo dei Gas",
                //".header9" : "Miscelazione dei Gas",
                ".header9" : "Strumento di apprendimento",
                ".tr_lng" : "Lingua",
                ".tr_dmn" : "Unità",
                ".td_warn" : "ATTENZIONE! C’È SEMPRE IL RISCHIO DI MALATTIA DA DECOMPRESSIONE (MDD) PER OGNI PROFILO DI IMMERSIONE ANCHE SE SI SEGUE IL PROFILO D’IMMERSIONE PRESCRITTO DALLE TABELLE D’IMMERSIONE. NESSUNA PROCEDURA O TABELLA D’IMMERSIONE POTRÀ PREVENIRE LA POSSIBILITÀ DI UNA MDD O DELLA TOSSICITÀ DA OSSIGENO! La composizione fisiologica di un individuo può variare di giorno in giorno. Si consiglia vivamente di rimanere ben entro i limiti di esposizione forniti dalla pianificazione per ridurre al minimo il rischio di MDD.",
                ".tn_wrn_ibcd_lip" : "Considerare la risposta dei Lipidi",
                ".tn_wrn_btm_mix" :"Miscela di fondo superiore a" + lng_ltr,
                ".tn_wrn_deco_mix49" :"Miscela Deco fino al 49% superiore a" + lng_ltr,
                ".tn_wrn_deco_mix50" :"Miscela deco dal 50 al 99% superiore a" + lng_ltr,
                ".tn_wrn_deco_mix100" :"Decompressione O<sub><small>2</small></sub> superiore a" + lng_ltr,
                ".tn_ibcd_lip_yes" :"Si",
                ".tn_ibcd_lip_no" :"No",
                //".tn_blnd_temp" :"Temperatura del gas C<sup><small>o</small></sup>",
                //".tn_blnd_temp_mode" :"Modello del Gas",
                //".tn_blend_mix_first" :"Aggiungi il primo gas",
                //".tn_blend_press_start" :"Pressione iniziale della miscela",
                //".tn_blend_press_end" :"Nuova pressione della miscela",
                //".tn_blend_he_start" :"Percentuale iniziale di He nella miscela",
                //".tn_blend_o2_start" :"Percentuale iniziale di O<sub><small>2</small></sub> nella miscela",
                //".tn_blend_he_end" :"Percentuale di He fresco nella miscela",
                //".tn_blend_o2_end" :"Percentuale di O<sub><small>2</small></sub> fresco nella miscela",
                ".tn_calc_depth" :"Profondità operativa Massima" + lng_meters,
                ".tn_calc_o2" :"Ossigeno%",
                ".tn_calc_he" :"Elio%",
                ".tn_calc_depth_lo" :"Profondità operativa Minima" + lng_meters,
                //".tn_blnd_temp_mode_ideal" :"Modello ideale",
                //".tn_blnd_temp_mode_vdv" :"Modello di Van Der Waals",
                //".tn_mix_first_he" :"He",
                //".tn_mix_first_o2" :"O<sub><small>2</small></sub>",
                ".tn_price_cur" :"Selezione valuta",
                ".tn_price_top" :"Prezzo superiore del gas",
                ".tn_price_he" :"Prezzo unitario per He",
                ".tn_price_o2" :" Prezzo unitario per O<sub><small>2</small></sub>",
                ".tn_price_us" :"Dollaro americano",
                ".tn_price_eu" :"Euro",
                ".tn_price_uk" :"Sterlina britannica",
                ".tn_price_rf" :"Rublo russo",
                ".tn_price_cn" :"Yuan cinese",
                ".btn_export_pdf_profile" :"Esporta in formato PDF",
                ".btn_export_pdf_pp" :" Esporta in formato PDF ",
                ".tn_btn_overlay" :"Chiudi",
                ".btn_export_xls" :"Esporta in tabella XLS",
                ".btn_tbl_pdf" :"Esporta in tabella PDF",
                ".tn_calc_ead" :"EAD:&nbsp;",
                ".tn_calc_end" :"END:&nbsp;",
                ".tn_calc_o2max" : "&nbsp;PPO<sub><small>2</small></sub> Fondo&nbsp;" + lng_bar,
                ".tn_calc_o2min" : "&nbsp;PPO<sub><small>2</small></sub> Min.&nbsp;" + lng_bar,
                ".tn_calc_n2max" : "&nbsp;PPN<sub><small>2</small></sub> Mass." + lng_bar,
                ".tn_calc_f_app" :"Formule e calcoli",
                ".tn_calc_f_mod" :"Profondità massima operativa" + lng_meters,
                ".tn_calc_f_ead" :"Profondità equivalente in aria" + lng_meters,
                ".tn_calc_f_ead2" :"Solo per narcosi da N<sub><small>2</small></sub>",
                ".tn_calc_f_end" :"Profondità narcotica equivalente" + lng_meters,
                ".tn_calc_f_end2" :"Narcosi da N<sub><small>2</small></sub> e O<sub><small>2</small></sub>",
                ".tn_calc_cur_ex_rate" :"Tasso di cambio per un Dollaro",
                ".tn_calc_cur_ex_rate_pound" :"Sterlina",
                ".tn_calc_cur_ex_rate_pence" :"Penny",
                ".tn_calc_cur_ex_rate_euro" :"Euro",
                ".tn_calc_cur_ex_rate_eucents" :"Centesimi",
                ".tn_calc_cur_ex_rate_rub" :"Roubli",
                ".tn_calc_cur_ex_rate_kopek" :"Copechi",
                ".tn_calc_cur_ex_rate_yuan" :"Yuan",
                ".tn_calc_cur_ex_rate_fyn" :"Fyn",
                ".tr_setpoint_start":"Setpoint iniziale del CCR" + lng_bar,
                ".tr_setpoint_bottom":" Setpoint di fondo del CCR" + lng_bar,
                ".tr_setpoint_deco":"Setpoin DECO del CCR" + lng_bar,
                ".tr_airbr_header" : "Pausa di gas",
                ".tr_airbr_depth" : "La profondità è maggiore di" + lng_meters,
                ".tr_airbr_o2" : "L’ossigeno da decompressione è maggiore di" + ", %",
                ".tr_airbr_mix" : "Pausa delle miscele",
                ".tr_airbr_time_after" : "Pausa dopo" + lng_min,
                ".tr_airbr_time" : "Tempo di Pausa" + lng_min,
                ".tr_airbr_time_reset" : "Abilita",
                ".tn_airbr_time_reset_yes" : "Si",
                ".tn_airbr_time_reset_no" : "No",
                ".header10" : "Albo d’onore dei donatori",
                ".tn_donat_header" : "",
                ".btn_msg" : "Come fare una donazione",
                ".btn_tel" : " Chiama gli sviluppatori ",
                ".btn_ios_msg" : " Come fare una donazione ",
                ".btn_ios_tel" : "Chiama gli sviluppatori",
                ".tn_donat_header_founder" : "Sezione donazione dei fondatori",
                ".tn_donat_header_gold" : "Sezione donazione dorata",
                ".tn_donat_header_silver" : "Sezione donazione argentata",
                ".tn_donat_header_bronze" : "Sezione donazione bronzea",
                ".td_founder_list" : "Thomas Holloway, Vladimir Polyakov, Franjo Sánchez Castejón, Nikita Azarenko, Hugo Ballester, 大漠骑兵Andy （谢鹏）, Lee Nam Gil, Marco P.",
                ".td_gold_list" : "Aleksandr Sestopalec, Aliaksander Lukyanchenka, Michail Balabanov",
                ".td_silver_list" : "Maxim Parinov, Anton Bedarev",
                ".td_bronze_list" : "Evgenij Vlasov, Evgenij Pyanyh, Nikolaj Voronin, Valerij Vakshul",
                ".header11" : "Pianificatore immersioni Ricreative S.A.U.L.",
                ".tr_saul_mix" : "Mix",
                ".tr_saul_res_type" : "Tipo di calcolo",
                ".tr_saul_depth" : "Profondità" + lng_meters,
                ".tr_saul_btime" : "Tempo di fondo" + lng_min,
                ".tn_saul_mix_arr_air" : "Aria",
                ".tn_saul_mix_arr_ean32" : "EAN32",
                ".tn_saul_res_type_arr_forward" : "%(MDD) per il tempo di fondo selezionato ",
                ".tn_saul_res_type_arr_reverse" : "Tempo di fondo per una % accettabile (MDD)",

                ".tr_saul_cap_percent" : "Il rischio di MDD è:",
                ".tr_saul_time_max" : "Il tempo massimo di fondo è:",
                ".tr_saul_time_max_dim" : "Copyright © 2021 Dr. Saul Goldman, Professore Emerito, Università di Guelph",
                ".tr_saul_percent" : "La probabilità di una MDD accettabile è: %"
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
      if(td_lng == 6){
          return "Микс";
      }
      if(td_lng == 7){
          return "Mélange";
      }
      if(td_lng == 8){
	    return "기체";
	  }
      if(td_lng == 9){
        return "Mix";
      }
    }

  function plan_lng(val){
      if (force_lng == 1){var td_lng = 1}
      else
      {
          var td_lng = lng_opt.options[lng_opt.selectedIndex].value
      };
      if(td_lng == 1){
        
          if(val  == "tab_tr_TTS"){val = "TTS"}
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
        if(val  == "tab_tr_TTS"){val = "TTS"}
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
        if(val  == "tab_tr_TTS"){val = "TTS"}
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
          if(val  == "tab_tr_TTS"){val = "TTS"}
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
          if(val  == "tab_tr_TTS"){val = "TTS"}
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
      if(td_lng == 6) {
          if(val  == "tab_tr_TTS"){val = "ТТС"}
          if (val == "t_diluent") {
              val = "Смесител "
          }
          if (val == "t_zoom") {
              val = "Нулиране на мащаба"
          }
          if (val == "tab_tr_OTU") {
              val = "ЕКТ"
          }
          if (val == "tab_tr_CNS") {
              val = "ЦНС%"
          }
          if (val == "ld_tis") {
              val = "Водеща тъкан"
          }
          if (val == "amb_pres") {
              val = "Околно налягане"
          }
          if (val == "t_tiss_wrn") {
              val = "В този план няма деко . Тъканните групи няма да са видими"
          }
          if (val == "t_tiss_nt") {
              val = "Азот - тъканни групи"
          }
          if (val == "t_tiss_hl") {
              val = "Хелий - тъканни групи"
          }
          if (val == "t_tiss_tl") {
              val = "Общо азот и хелий - тъканни групи"
          }
          if (val == "tab_tr_o2") {
              val = "пнO<sub><small>2</small></sub>"
          }
          if (val == "tab_tr_n2") {
              val = "пнN<sub><small>2</small></sub>"
          }
          if (val == "tab_tr_he") {
              val = "пнHe"
          }
          if (val == "tab_tr_coms") {
              val = "Конс."
          }
          if (val == "tab_tr_mix") {
              val = "Микс"
          }
          if (val == "tab_dmn_ltr") {
              if ($("#tn_dmn").val() == 1) {
                  val = "Литри"
              }
              if ($("#tn_dmn").val() == 2) {
                  val = "Кубичен фут"
              }
          }
          if (val == "Level") {
              val = "Ниво"
          }
          if (val == "Ascent") {
              val = "Изкачване"
          }
          if (val == "Descent") {
              val = "Спускане"
          }
          if (val == "Stop") {
              val = "Стоп"
          }
          if (val == "Mix") {
              val = "Микс"
          }
          if (val == "RunTime") {
              val = "Текущо време"
          }
          if (val == "Time") {
              val = "Време"
          }
          if (val == "Depth") {
              val = "Дълбочина"
          }
          if (val == "Action") {
              val = "Действие"
          }
          if (val == "Air") {
              val = "Въздух"
          }
          if (val == "OXY") {
              val = "Кислород"
          }
          if (val == "tab_tr_dmn") {
              val = "Обем"
          }
          if (val == "tab_tr_time") {
              val = "Време"
          }
          if (val == "ch_gas_d") {
              val = "Разход на газ"
          }
          if (val == "ch_gas_amnt") {
              val = "Количество"
          }
          if (val == "ch_time") {
              val = "Време"
          }
          if (val == "ch_gas_ltr") {
              if ($("#tn_dmn").val() == 1) {
                  val = "л."
              }
              if ($("#tn_dmn").val() == 2) {
                  val = "фт<sup><small>3</small></sup>"
              }
          }
          if (val == "ch_depth") {
              val = "Макс. дълбочина"
          }
          if (val == "ch_source") {
              val = "Източник"
          }
          if (val == "ch_bottom") {
              val = "Дъно"
          }
          if (val == "ch_mtr") {
              if ($("#tn_dmn").val() == 1) {
                  val = "м."
              }
              if ($("#tn_dmn").val() == 2) {
                  val = "фт."
              }
          }
          if (val == "ch_tmx") {
              val = "мин."
          }
          if (val == "ch_mix") {
              val = "Смяна на газа"
          }
          if (val == "ch_pp") {
              val = "Парциално налягане"
          }
          if (val == "ch_n2") {
              val = "пнN2"
          }
          if (val == "ch_o2") {
              val = "пнO2"
          }
          if (val == "ch_he") {
              val = "пнHe"
          }
          if (val == "ch_pp_l") {
              val = "Налягане"
          }
          if (val == "ch_mix_pp") {
              val = "Използвана газ"
          }
          if (val == "ch_ata") {
              if ($("#tn_dmn").val() == 1) {
                  val = "бар"
              }
              if ($("#tn_dmn").val() == 2) {
                  val = "пси"
              }
          }
          if (val == "ch_Tissue") {
              val = "Тъкан"
          }
          if (val == "ch_UnderDev") {
              val = "Внимание!<br>Този инструмент е в разработка.<br>Благодаря Ви!<br>"
          }
          if (val == "ch_tbl_name") {
              val = "Деко таблица"
          }
          if (val == "ch_tbl_cons") {
              val = "Таблица за консумация на газа"
          }
          if (val == "dmn_air") {
              val = "Въздух"
          }
          if (val == "dmn_mod") {
              val = "МОД"
          }
          if (val == "dmn_ead") {
              val = "ЕАД"
          }
          if (val == "dmn_end") {
              val = "ЕНД"
          }
          if (val == "dmn_msw") {
              val = "мвстм"
          }
          if (val == "dmn_fsw") {
              val = "фтвстм"
          }
          if (val == "dmn_bar") {
              val = "бар"
          }
          if (val == "dmn_ata") {
              val = "бар"
          }
          if (val == "tn_price_dls_name_dollars") {
              val = "Долари"
          }
          if (val == "tn_price_dls_name_cents") {
              val = "Цента"
          }
          if (val == "tn_price_dls_name_euro") {
              val = "Евро"
          }
          if (val == "tn_price_dls_name_pound") {
              val = "Паунд"
          }
          if (val == "tn_price_dls_name_pence") {
              val = "Пенс"
          }
          if (val == "tn_price_dls_name_rouble") {
              val = "Рубли"
          }
          if (val == "tn_price_dls_name_kopek") {
              val = "Копейки"
          }
          if (val == "tn_price_dls_name_yuan") {
              val = "Юан"
          }
          if (val == "tn_price_dls_name_fyn") {
              val = "Фин"
          }
          if (val == "price_price") {
              val = "Цена"
          }
          if (val == "price_currency") {
              val = "Валута"
          }
          if (val == "price_gas") {
              val = "Газ"
          }
          if (val == "price_gas_total") {
              val = "Обща цена:"
          }
          if (val == "ch_price_top_total") {
              val = "Цена на газа"
          }
          if (val == "tn_deco_mod") {
              val = "Авто"
          }
      }
      if(td_lng == 7) {
          if(val  == "tab_tr_TTS"){val = "TTS"}
          if (val == "t_diluent") {
              val = "Diluent "
          }
          if (val == "t_zoom") {
              val = "Zoom a Zero"
          }
          if (val == "tab_tr_OTU") {
              val = "OTU"
          }
          if (val == "tab_tr_CNS") {
              val = "CNS%"
          }
          if (val == "ld_tis") {
              val = "Leading Tissue"
          }
          if (val == "amb_pres") {
              val = "Pression ambiante"
          }
          if (val == "t_tiss_wrn") {
              val = "Ce plan n'a pas de stop de décompression. Les compartiments de tissus ne seront pas apparents."
          }
          if (val == "t_tiss_nt") {
              val = "Compartiments de tissus d'azote"
          }
          if (val == "t_tiss_hl") {
              val = "Compartiments de tissus d’Helium"
          }
          if (val == "t_tiss_tl") {
              val = "Total des Compartiments de tissus d'azote et d'hélium"
          }
          if (val == "tab_tr_o2") {
              val = "PPOxygene<sub><small>2</small></sub>"
          }
          if (val == "tab_tr_n2") {
              val = "PPAzote<sub><small>2</small></sub>"
          }
          if (val == "tab_tr_he") {
              val = "PPHelium"
          }
          if (val == "tab_tr_coms") {
              val = "Consommation."
          }
          if (val == "tab_tr_mix") {
              val = "Mélange"
          }
          if (val == "tab_dmn_ltr") {
              if ($("#tn_dmn").val() == 1) {
                  val = "Litres"
              }
              if ($("#tn_dmn").val() == 2) {
                  val = "Pied3"
              }
          }
          if (val == "Level") {
              val = "Niveau"
          }
          if (val == "Ascent") {
              val = "Remonté"
          }
          if (val == "Descent") {
              val = "Descente"
          }
          if (val == "Stop") {
              val = "Stop"
          }
          if (val == "Mix") {
              val = "Mélange"
          }
          if (val == "RunTime") {
              val = "Temps de fonctionnement"
          }
          if (val == "Time") {
              val = "Temps"
          }
          if (val == "Depth") {
              val = "Profondeur"
          }
          if (val == "Action") {
              val = "Action"
          }
          if (val == "Air") {
              val = "Air"
          }
          if (val == "OXY") {
              val = "Oxygen"
          }
          if (val == "tab_tr_dmn") {
              val = "Volume"
          }
          if (val == "tab_tr_time") {
              val = "Temps"
          }
          if(val == "ch_gas_d"){
              val = "Consommation de gaz"
          }
          if (val == "ch_gas_amnt") {
              val = "Montant"
          }
          if (val == "ch_time") {
              val = "Temps"
          }
          if (val == "ch_gas_ltr") {
              if ($("#tn_dmn").val() == 1) {
                  val = "Litre."
              }
              if ($("#tn_dmn").val() == 2) {
                  val = "Pied<sup><small>3</small></sup>"
              }
          }
          if (val == "ch_depth") {
              val = "Profondeur Maximum"
          }
          if (val == "ch_source") {
              val = "Source"
          }
          if (val == "ch_bottom") {
              val = "fond"
          }
          if (val == "ch_mtr") {
              if ($("#tn_dmn").val() == 1) {
                  val = "m."
              }
              if ($("#tn_dmn").val() == 2) {
                  val = "Pied."
              }
          }
          if (val == "ch_tmx") {
              val = "min."
          }
          if (val == "ch_mix") {
              val = "Changement de mélange"
          }
          if (val == "ch_pp") {
              val = "Pression Partielle"
          }
          if (val == "ch_n2") {
              val = "PPAzote2"
          }
          if (val == "ch_o2") {
              val = "PPOxygen2"
          }
          if (val == "ch_he") {
              val = "PPHelium"
          }
          if (val == "ch_pp_l") {
              val = "Pression"
          }
          if (val == "ch_mix_pp") {
              val = "Mélange utilisé"
          }
          if (val == "ch_ata") {
              if ($("#tn_dmn").val() == 1) {
                  val = "bar"
              }
              if ($("#tn_dmn").val() == 2) {
                  val = "psi"
              }
          }
          if (val == "ch_Tissue") {
              val = "Tissue"
          }
          if (val == "ch_UnderDev") {
              val = "ATTENTION!<br> Cet outil est en développement. Cette interface graphique montre uniquement les travaux en cours.<br>Merci de votre comprehension!<br>"
          }
          if (val == "ch_tbl_name") {
              val = "Table de décompression"
          }
          if (val == "ch_tbl_cons") {
              val = "Table de consommation de gaz"
          }
          if (val == "dmn_air") {
              val = "Air"
          }
          if (val == "dmn_mod") {
              val = "MOD"
          }
          if (val == "dmn_ead") {
              val = "EAD"
          }
          if (val == "dmn_end") {
              val = "END"
          }
          if (val == "dmn_msw") {
              val = "msw"
          }
          if (val == "dmn_fsw") {
              val = "fsw"
          }
          if (val == "dmn_bar") {
              val = "bar"
          }
          if (val == "dmn_ata") {
              val = "bar"
          }
          if (val == "tn_price_dls_name_dollars") {
              val = "Dollars"
          }
          if (val == "tn_price_dls_name_cents") {
              val = "Cents"
          }
          if (val == "tn_price_dls_name_euro") {
              val = "Euros"
          }
          if (val == "tn_price_dls_name_pound") {
              val = "Pounds"
          }
          if (val == "tn_price_dls_name_pence") {
              val = "Pence"
          }
          if (val == "tn_price_dls_name_rouble") {
              val = "Roubles"
          }
          if (val == "tn_price_dls_name_kopek") {
              val = "Kopeks"
          }
          if (val == "tn_price_dls_name_yuan") {
              val = "Yuan"
          }
          if (val == "tn_price_dls_name_fyn") {
              val = "Fyn"
          }
          if (val == "price_price") {
              val = "Prix"
          }
          if (val == "price_currency") {
              val = "Monnaie"
          }
          if (val == "price_gas") {
              val = "Gaz"
          }
          if (val == "price_gas_total") {
              val = "Prix Total:"
          }
          if (val == "ch_price_top_total") {
              val = "Meilleur prix du Gas"
          }
          if (val == "tn_deco_mod") {
              val = "Auto"
          }
        }
        if(td_lng == 8){
            if(val  == "tab_tr_TTS"){val = "TTS"}
            if(val  == "t_diluent"){val = "Diluent "}
            if(val  == "t_zoom"){val = "줌 재설정"}
            if(val  == "tab_tr_OTU"){val = "OTU"}
            if(val  == "tab_tr_CNS"){val = "CNS%"}
            if(val  == "ld_tis"){val = "선도 조직"}
            if(val  == "amb_pres"){val = "주변 압력"}
            if(val  == "t_tiss_wrn"){val = "이 계획에는 감압 정지가 없습니다. 조직 구획이 숨겨집니다."}
            if(val  == "t_tiss_nt"){val = "질소 조직 구획"}
            if(val  == "t_tiss_hl"){val = "헬륨 조직 구획"}
            if(val  == "t_tiss_tl"){val = "총 질소 및 헬륨 조직 구획"}
            if(val == "tab_tr_o2"){val = "PPO<sub><small>2</small></sub>"}
            if(val == "tab_tr_n2"){val = "PPN<sub><small>2</small></sub>"}
            if(val == "tab_tr_he"){val = "PPHe"}
            if(val == "tab_tr_coms"){val = "기체 소비."}
            if(val == "tab_tr_mix"){val = "기체"}
            if(val == "tab_dmn_ltr"){
                if($( "#tn_dmn" ).val() == 1){val = "리터"}
                if($( "#tn_dmn" ).val() == 2){val = "입방 피트"}
            }
            if(val == "Level"){val = "바닥"}
            if(val == "Ascent"){val = "상승"}
            if(val == "Descent"){val = "하강"}
            if(val == "Stop"){val = "스탑"}
            if(val == "Mix"){val = "가스"}
            if(val == "RunTime"){val = "런타임"}
            if(val == "Time"){val = "타임"}
            if(val == "Depth"){val = "수심"}
            if(val == "Action"){val = "절차"}
            if(val == "Air"){val = "Air"}
            if(val == "OXY"){val = "Oxygen"}
            if(val == "tab_tr_dmn"){val = "용량"}
            if(val == "tab_tr_time"){val = "타임"}
            if(val == "ch_gas_d"){val = "가스 소비"}
            if(val == "ch_gas_amnt"){val = "총양"}
            if(val == "ch_time"){val = "타임"}
            if(val == "ch_gas_ltr"){
                if($( "#tn_dmn" ).val() == 1){val = "Ltr."}
                if($( "#tn_dmn" ).val() == 2){val = "Ft<sup><small>3</small></sup>"}
            }
            if(val == "ch_depth"){val = "최대 수심"}
            if(val == "ch_source"){val = "Source"}
            if(val == "ch_bottom"){val = "바텀"}
            if(val == "ch_mtr"){
                if($( "#tn_dmn" ).val() == 1){val = "m."}
                if($( "#tn_dmn" ).val() == 2){val = "ft."}
            }
            if(val == "ch_tmx"){val = "min."}
            if(val == "ch_mix"){val = "기체 체인지"}
            if(val == "ch_pp"){val = "부분 압"}
            if(val == "ch_n2"){val = "PPN2"}
            if(val == "ch_o2"){val = "PPO2"}
            if(val == "ch_he"){val = "PPHe"}
            if(val == "ch_pp_l"){val = "압력"}
            if(val == "ch_mix_pp"){val = "소비된 기체"}
            if(val == "ch_ata"){
                if($( "#tn_dmn" ).val() == 1){val = "bar"}
                if($( "#tn_dmn" ).val() == 2){val = "psi"}
            }
            if(val == "ch_Tissue"){val = "조직"}
            if(val == "ch_UnderDev"){val = "경고!<br>이 Tool은 개발 중입니다. 이 GUI는 진행 중인 작업만 보여줍니다.<br>감사합니다!<br>"}
            if(val == "ch_tbl_name"){val = "감압표"}
            if(val == "ch_tbl_cons"){val = "기체 소비량 표"}
            if(val == "dmn_air"){val = "Air"}
            if(val == "dmn_mod"){val = "MOD"}
            if(val == "dmn_ead"){val = "EAD"}
            if(val == "dmn_end"){val = "END"}
            if(val == "dmn_msw"){val = "msw"}
            if(val == "dmn_fsw"){val = "fsw"}
            if(val == "dmn_bar"){val = "bar"}
            if(val == "dmn_ata"){val = "bar"}
            if(val == "tn_price_dls_name_dollars"){val = "달러"}
            if(val == "tn_price_dls_name_cents"){val = "센트"}
            if(val == "tn_price_dls_name_euro"){val = "유로"}
            if(val == "tn_price_dls_name_pound"){val = "파운드"}
            if(val == "tn_price_dls_name_pence"){val = "펜스"}
            if(val == "tn_price_dls_name_rouble"){val = "루블"}
            if(val == "tn_price_dls_name_kopek"){val = "코펙스"}
            if(val == "tn_price_dls_name_yuan"){val = "원"}
            if(val == "tn_price_dls_name_fyn"){val = "핀"}
            if(val == "price_price"){val = "가격"}
            if(val == "price_currency"){val = "통화"}
            if(val == "price_gas"){val = "기체"}
            if(val == "price_gas_total"){val = "총 가격:"}
            if(val == "ch_price_top_total"){val = "가스 최고 가격"}
            if(val == "tn_deco_mod"){val = "자동"}
        }
        if(td_lng == 9){
            if(val  == "t_diluent"){val = "Diluente "}
            if(val  == "t_zoom"){val = "Azzera lo Zoom"}
            if(val  == "tab_tr_OTU"){val = "OTU"}
            if(val  == "tab_tr_CNS"){val = "CNS%"}
            if(val  == "ld_tis"){val = "Tessuto principale"}
            if(val  == "amb_pres"){val = "Pressione ambientale "}
            if(val  == "t_tiss_wrn"){val = "Questa pianificazione non ha soste decompressive. I compartimenti tissutali saranno nascosti."}
            if(val  == "t_tiss_nt"){val = "Compartimenti tissutali azoto"}
            if(val  == "t_tiss_hl"){val = "Compartimenti tissutali Elio"}
            if(val  == "t_tiss_tl"){val = "Compartimenti tissutali totali Azoto ed Elio"}
            if(val == "tab_tr_o2"){val = "PPO<sub><small>2</small></sub>"}
            if(val == "tab_tr_n2"){val = "PPN<sub><small>2</small></sub>"}
            if(val == "tab_tr_he"){val = "PPHe"}
            if(val == "tab_tr_coms"){val = "Cons."}
            if(val == "tab_tr_mix"){val = "Mix"}
            if(val == "tab_dmn_ltr"){
                if($( "#tn_dmn" ).val() == 1){val = "Litri"}
                if($( "#tn_dmn" ).val() == 2){val = "Piedi cubici"}
            }
            if(val == "Level"){val = "Livello"}
            if(val == "Ascent"){val = "Salita"}
            if(val == "Descent"){val = "Discesa"}
            if(val == "Stop"){val = "Stop"}
            if(val == "Mix"){val = "Miscela"}
            if(val == "RunTime"){val = "Durata"}
            if(val == "Time"){val = "Tempo"}
            if(val == "Depth"){val = "Profondità"}
            if(val == "Action"){val = "Azione"}
            if(val == "Air"){val = "Aria"}
            if(val == "OXY"){val = "Ossigeno"}
            if(val == "tab_tr_dmn"){val = "Volume"}
            if(val == "tab_tr_time"){val = "Tempo"}
            if(val == "ch_gas_d"){val = "Consumo di gas "}
            if(val == "ch_gas_amnt"){val = "Quantità"}
            if(val == "ch_time"){val = "Tempo"}
            if(val == "ch_gas_ltr"){
                if($( "#tn_dmn" ).val() == 1){val = "Lt."}
                if($( "#tn_dmn" ).val() == 2){val = "Ft<sup><small>3</small></sup>"}
            }
            if(val == "ch_depth"){val = "Profondità mass."}
            if(val == "ch_source"){val = "Sorgente"}
            if(val == "ch_bottom"){val = "Fondo"}
            if(val == "ch_mtr"){
                if($( "#tn_dmn" ).val() == 1){val = "m."}
                if($( "#tn_dmn" ).val() == 2){val = "ft."}
            }
            if(val == "ch_tmx"){val = "min."}
            if(val == "ch_mix"){val = "Cambio Miscela"}
            if(val == "ch_pp"){val = "Pressioni parziali"}
            if(val == "ch_n2"){val = "PPN2"}
            if(val == "ch_o2"){val = "PPO2"}
            if(val == "ch_he"){val = "PPHe"}
            if(val == "ch_pp_l"){val = "Pressione"}
            if(val == "ch_mix_pp"){val = "Miscela usata"}
            if(val == "ch_ata"){
                if($( "#tn_dmn" ).val() == 1){val = "bar"}
                if($( "#tn_dmn" ).val() == 2){val = "psi"}
            }
            if(val == "ch_Tissue"){val = "Tessuto"}
            if(val == "ch_UnderDev"){val = "Attenzione!<br>Questo strumento è sotto sviluppo. Quest’interfaccia è mostrata sotto lavori in corso.<br>Grazie!<br>"}
            if(val == "ch_tbl_name"){val = "Tabelle decompressive"}
            if(val == "ch_tbl_cons"){val = "Tabelle dei consumi gassosi"}
            if(val == "dmn_air"){val = "Aria"}
            if(val == "dmn_mod"){val = "MOD"}
            if(val == "dmn_ead"){val = "EAD"}
            if(val == "dmn_end"){val = "END"}
            if(val == "dmn_msw"){val = "msw"}
            if(val == "dmn_fsw"){val = "fsw"}
            if(val == "dmn_bar"){val = "bar"}
            if(val == "dmn_ata"){val = "bar"}
            if(val == "tn_price_dls_name_dollars"){val = "Dollari"}
            if(val == "tn_price_dls_name_cents"){val = "Centesimi"}
            if(val == "tn_price_dls_name_euro"){val = "Euro"}
            if(val == "tn_price_dls_name_pound"){val = "Sterline"}
            if(val == "tn_price_dls_name_pence"){val = "Penny"}
            if(val == "tn_price_dls_name_rouble"){val = "Rubli"}
            if(val == "tn_price_dls_name_kopek"){val = "Copechi"}
            if(val == "tn_price_dls_name_yuan"){val = "Yuan"}
            if(val == "tn_price_dls_name_fyn"){val = "Fyn"}
            if(val == "price_price"){val = "Prezzo"}
            if(val == "price_currency"){val = "Valuta"}
            if(val == "price_gas"){val = "Gas"}
            if(val == "price_gas_total"){val = "Prezzo totale:"}
            if(val == "ch_price_top_total"){val = "Prezzo superiore del gas"}
            if(val == "tn_deco_mod"){val = "Auto"}
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

