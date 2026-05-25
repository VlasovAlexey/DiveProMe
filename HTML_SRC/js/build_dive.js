// Globals formerly provided by dive_comp.js (removed; engine replaced by ApexDeco)
var abs_press     = [1.0];
var comp_tiss_arr = [];
var first_ascent  = 0;
var mix_mod_arr   = [];
// dive_comp.js also defined a browser require() bundler used by main.js line 2
if (typeof require === 'undefined') { window.require = function() { return {}; }; }

function buildApexLevels(levels_arr, levels_mix_arr) {
	var tn_cng_el    = document.getElementById("opt_cng_time");
	var gasChangeTime = parseInt(tn_cng_el.options[tn_cng_el.selectedIndex].value) || 0;

	var levels = [];
	var a = 0, b = 0;
	for (var i = 0; i < levels_arr.length / 3; i++) {
		var o2    = Math.round(levels_mix_arr[b] * 1);
		var he    = Math.round(levels_mix_arr[b + 1] * 1);
		var depth = levels_arr[a + 1] * 1.0;
		var time  = levels_arr[a + 2] * 1.0;

		// If gas changed between consecutive bottom levels, insert a pause
		// so the engine loads tissues during the mix change (not just cosmetic).
		if (i > 0 && gasChangeTime > 0) {
			var prev = levels[levels.length - 1];
			if (prev.o2 !== o2 || prev.he !== he) {
				levels.push({ depth: depth, time: gasChangeTime, o2: o2, he: he });
			}
		}

		levels.push({ depth: depth, time: time, o2: o2, he: he });
		a += 3;
		b += 2;
	}
	return levels;
}

function buildApexLevelsCCR(levels_arr, levels_mix_arr) {
	var tn_cng_el    = document.getElementById("opt_cng_time");
	var gasChangeTime = parseInt(tn_cng_el.options[tn_cng_el.selectedIndex].value) || 0;

	var sp_start  = $("#opt_setpoint_start").val() * 1.0;
	var sp_bottom = $("#opt_setpoint_bottom").val() * 1.0;
	var sp_deco   = $("#opt_setpoint_deco").val() * 1.0;
	var levels = [];
	var a = 0, b = 0;
	for (var i = 0; i < levels_arr.length / 3; i++) {
		var depth = levels_arr[a + 1] * 1.0;
		var time  = levels_arr[a + 2] * 1.0;
		var o2    = Math.round(levels_mix_arr[b] * 1);
		var he    = Math.round(levels_mix_arr[b + 1] * 1);
		if (i === 0) {
			// Variant A: first level gets a zero-time descent entry (sp_start),
			// then the actual bottom time entry (sp_bottom).
			levels.push({ depth: depth, time: 0,    o2: o2, he: he, setpoint: sp_start });
			levels.push({ depth: depth, time: time,  o2: o2, he: he, setpoint: sp_bottom });
		} else {
			// If diluent mix changed, insert a pause so engine loads tissues during mix change.
			if (gasChangeTime > 0) {
				var prevCCR = levels[levels.length - 1];
				if (prevCCR.o2 !== o2 || prevCCR.he !== he) {
					levels.push({ depth: depth, time: gasChangeTime, o2: o2, he: he, setpoint: sp_bottom });
				}
			}
			// Additional levels use sp_bottom; engine handles inter-level ascents/descents.
			levels.push({ depth: depth, time: time,  o2: o2, he: he, setpoint: sp_bottom });
		}
		a += 3;
		b += 2;
	}
	// Diluent mode: append a zero-time level at the last depth so lastSP = sp_deco during deco.
	if (opt_blt_dln == 2 && levels.length > 0) {
		var last = levels[levels.length - 1];
		levels.push({ depth: last.depth, time: 0, o2: last.o2, he: last.he, setpoint: sp_deco });
	}
	return levels;
}

function buildApexDecos() {
	var decos = [];
	var opt_deco_el = document.getElementById("opt_deco");
	var mix_deco_idx = opt_deco_el.options[opt_deco_el.selectedIndex].value * 1;
	var aaa = 0;
	for (var c = 0; c < mix_deco_idx; c++) {
		var o2 = deco_mix_arr[aaa] * 1;
		var he = deco_mix_arr[aaa + 1] * 1;
		var manualMOD = deco_mix_depth_arr[c] * 1;
		var depthOverrideOn = manualMOD !== 0;
		if ($("#opt_lst_stop").val() == 6) {
			var curMixMOD = depthOverrideOn ? manualMOD : GetDecoMODinMeters(o2, he);
			curMixMOD = 3 * Math.round(curMixMOD / 3);
			if (curMixMOD >= 6) {
				decos.push({ o2: o2, he: he, depthOverrideOn: depthOverrideOn, depthOverride: depthOverrideOn ? manualMOD : null });
			}
		} else {
			decos.push({ o2: o2, he: he, depthOverrideOn: depthOverrideOn, depthOverride: depthOverrideOn ? manualMOD : null });
		}
		aaa += 2;
	}
	return decos;
}

// Returns a shallow-copied, SI-desaturated tissue array for t=0 chart display.
// Must be called AFTER buildApexSettings() so the full settings object is available
// for getSurfacePressure() inside applySurfaceInterval().
// Returns null if this is a first dive (no pre_tissues_arr).
function computeDiveStartTissues(settings) {
	if (!pre_tissues_arr || pre_tissues_arr.length < 16) return null;
	// Shallow copy — do NOT mutate the stored pre_tissues_arr
	var dst = pre_tissues_arr.map(function(t) { return { pN2: t.pN2, pHe: t.pHe }; });
	if (surface_interval_min > 0 && typeof DecoEngine !== 'undefined' && DecoEngine.applySurfaceInterval) {
		DecoEngine.applySurfaceInterval(dst, surface_interval_min, settings); // mutates dst in-place
	}
	return dst;
}

function buildApexSettings(mdl_idx, isCCR) {
	var rate_asc_el      = document.getElementById("opt_rate_asc");
	var rate_asc         = rate_asc_el.options[rate_asc_el.selectedIndex].value * 1.0;
	var rate_asc_deco_el = document.getElementById("opt_rate_asc_deco");
	var rate_asc_deco    = rate_asc_deco_el.options[rate_asc_deco_el.selectedIndex].value * 1.0;
	var rate_dsc_el      = document.getElementById("opt_rate_dsc");
	var rate_dsc         = rate_dsc_el.options[rate_dsc_el.selectedIndex].value * 1.0;
	var rate_surf_el     = document.getElementById("opt_rate_asc_surf");
	var rate_surf        = rate_surf_el.options[rate_surf_el.selectedIndex].value * 1.0;
	var ppo2_deco_el     = document.getElementById("opt_ppo2_deco");
	var ppO2Deco         = ppo2_deco_el.options[ppo2_deco_el.selectedIndex].value * 1.0;
	var lst_stop_el      = document.getElementById("opt_lst_stop");
	var lastStop         = lst_stop_el.options[lst_stop_el.selectedIndex].value * 1;
	var alt_el           = document.getElementById("opt_slevel");
	var altitude         = alt_el.options[alt_el.selectedIndex].value * 1.0;
	var tn_water_el      = document.getElementById("tn_water");
	var waterIdx         = tn_water_el.options[tn_water_el.selectedIndex].value * 1;
	//Model indices after ZHL-A was added first: 1=ZHL-A, 2=ZHL-B, 3=ZHL-C,
	//4=VPM-A, 5=VPM-B, 6=VPM-B/E, 7=VPM-B/GFS, 8=VPM-B/FBO.
	var waterType        = (waterIdx === 2) ? 1 : 0;
	//Pass exact water density (kg/m³) from the UI selection so the engine uses the
	//real metres-per-bar for stop depths and ceilings (not just binary salt/fresh).
	var waterDensityVal  = (typeof water_density === 'function') ? water_density() : 0;
	var vpmModelMap      = { 4: 'VPMA', 5: 'VPMB', 6: 'VPMBE', 7: 'VPMB_GFS', 8: 'VPMBFBO' };
	var zhlModelMap      = { 1: 'ZHLA_GF', 2: 'ZHLB_GF', 3: 'ZHLC_GF' };
	var vpm_conserv_el   = document.getElementById("opt_vpm_conserv");
	var vpm_conserv      = vpm_conserv_el ? vpm_conserv_el.options[vpm_conserv_el.selectedIndex].value * 1 : 0;
	var tn_cng_el        = document.getElementById("opt_cng_time");
	var gasChangeTime    = parseInt(tn_cng_el.options[tn_cng_el.selectedIndex].value) || 0;
	var settings = {
		circuit: isCCR ? 'CCR' : 'OC',
		decoModel: zhlModelMap[mdl_idx] || 'ZHLC_GF',
		gfLo: gf_arr[0],
		gfHi: gf_arr[1],
		conservatism: vpm_conserv,
		metric: true,
		waterType: waterType,
		waterDensity: (waterDensityVal && waterDensityVal > 0) ? waterDensityVal : 0,
		altitude: altitude,
		descentRate: rate_dsc,
		ascentRate: rate_asc,
		decoAscentRate: rate_asc_deco,
		surfaceAscentRate: rate_surf,
		stepSize: 3,
		lastStop: lastStop,
		minStopTime: 1,
		ppO2Deco: ppO2Deco,
		gasChangeTime: gasChangeTime,
		_isVPM: mdl_idx >= 4,
		_vpmModel: vpmModelMap[mdl_idx] || 'VPMB'
	};
	if (pre_tissues_arr && pre_tissues_arr.length === 16) {
		settings._preTissues = pre_tissues_arr;
		if (surface_interval_min > 0) { settings._surfaceInterval = surface_interval_min; }
	}
	return settings;
}

// Build comp_tiss_arr from per-segment tissue snapshots stored on apexResult.plan.
// Each plan segment (descent / bottom / stop / ascent) already carries _tissues[]
// captured by the engine's plan.push override — so no engine replay is needed.
// Layout: groups of 17 per time-step (16 tissue objects + 1 dummy), matching
// what chart_profile.js btn_build_tiss() expects.
function populateTissueTimeline(apexResult) {
	comp_tiss_arr = [];

	// Prepend t=0 initial tissue state for repetitive dives (post surface-interval).
	// window._dive_start_tissues was computed by computeDiveStartTissues() before the
	// engine ran, so applySurfaceInterval() was called with the correct settings object.
	var _t0_src = window._dive_start_tissues;
	if (_t0_src && _t0_src.length >= 16) {
		for (var _j0 = 0; _j0 < 16; _j0++) {
			var _t0 = _t0_src[_j0] || { pN2: 0, pHe: 0 };
			comp_tiss_arr.push({ TimeCurrent: 0, EndDepthL: 0, StartDepthL: 0,
				NitroLoad: _t0.pN2, HeliumLoad: _t0.pHe, TotalLoad: _t0.pN2 + _t0.pHe, HalfTime: 0 });
		}
		comp_tiss_arr.push({ TimeCurrent: 0, EndDepthL: 0, StartDepthL: 0,
			NitroLoad: 0, HeliumLoad: 0, TotalLoad: 0, HalfTime: 0 });
	}

	// Use engine's cumulative runtime delta for each segment's TimeCurrent.
	// seg.runtime already includes implicit inter-stop transit time internally,
	// so (seg.runtime - prevRuntime) gives stop+transit = compartment chart x-axis
	// that sums to exactly engine.totalRuntime (35), matching ApexDeco's display.
	// No separate deco-rate calculation needed.
	var _prevRuntime = 0;

	var plan = apexResult.plan || [];
	for (var i = 0; i < plan.length; i++) {
		var seg = plan[i];
		if (seg.type === 'surface') continue;
		var segTime = seg.time || 0;
		if (segTime <= 0) continue;
		if (!seg._tissues || seg._tissues.length < 16) continue;

		// Determine end depth in metres — chart formula uses EndDepthL/10 as 10m-units,
		// so EndDepthL must be in metres (not decimetres). Example: 30m → EndDepthL=30 →
		// chart computes density×(30/10+1)=density×4 ≈ 4 bar ✓
		var endDepthM = (seg.type === 'ascent' || seg.type === 'descent')
			? (seg.endDepth || 0)
			: (seg.depth   || 0);
		var endDepthL = endDepthM; // metres

		// Engine runtime delta: includes stop time + any implicit transit before this segment.
		var segTimeCurrent = (seg.runtime !== undefined)
			? (seg.runtime - _prevRuntime)
			: segTime;
		_prevRuntime = (seg.runtime !== undefined) ? seg.runtime : (_prevRuntime + segTime);

		// 16 tissue compartment entries
		for (var j = 0; j < 16; j++) {
			var t = seg._tissues[j] || { pN2: 0, pHe: 0 };
			comp_tiss_arr.push({
				TimeCurrent: segTimeCurrent,
				EndDepthL:   endDepthL,
				StartDepthL: endDepthL,
				NitroLoad:   t.pN2,
				HeliumLoad:  t.pHe,
				TotalLoad:   t.pN2 + t.pHe,
				HalfTime:    0
			});
		}
		// 17th dummy entry required by the chart's length/17 iteration
		comp_tiss_arr.push({
			TimeCurrent: segTimeCurrent,
			EndDepthL:   endDepthL,
			StartDepthL: endDepthL,
			NitroLoad: 0, HeliumLoad: 0, TotalLoad: 0, HalfTime: 0
		});
	}

	// Fallback: if no segments had tissue data, use only the final state
	if (comp_tiss_arr.length === 0) {
		var tissues  = apexResult.finalTissues || [];
		var totalTime = apexResult.totalRuntime || 0;
		for (var i = 0; i < 16; i++) {
			var t = tissues[i] || { pN2: 0, pHe: 0 };
			comp_tiss_arr.push({ StartDepthL: 0, EndDepthL: 0, TimeCurrent: totalTime,
				NitroLoad: t.pN2, HeliumLoad: t.pHe, TotalLoad: t.pN2 + t.pHe, HalfTime: 0 });
		}
		comp_tiss_arr.push({ StartDepthL: 0, EndDepthL: 0, TimeCurrent: 0,
			NitroLoad: 0, HeliumLoad: 0, TotalLoad: 0, HalfTime: 0 });
	}
}

function convertApexPlanToLegacy(apexResult, rate_asc, rate_asc_deco, rate_asc_surf) {
	var output = [];
	var plan   = apexResult.plan || [];
	// _prevEngineRuntime tracks the engine's cumulative runtime after the previous segment.
	// Used to compute implicit transit times from engine runtime deltas so that:
	//   transit.time + stop.time = seg.runtime - prevRuntime  (an exact integer for 1-min grid)
	// This makes the profile chart x-axis sum to exactly engine.totalRuntime (35), not 37.
	var _prevEngineRuntime = 0;

	for (var i = 0; i < plan.length; i++) {
		var seg = plan[i];
		if (seg.type === 'surface') continue;
		var gasName = mix_to_txt_arr([seg.o2, seg.he]);
		if (seg.type === 'descent' || seg.type === 'ascent') {
			output.push({ startDepth: seg.startDepth, endDepth: seg.endDepth,
				time: seg.time, engineRuntime: seg.runtime, gasName: gasName });
		} else if (seg.type === 'gas_change') {
			// Engine-computed gas change pause: tissue loading already done inside engine.
			// Mark as gas change so ExtraStops() does not insert a duplicate.
			var gcDepth = seg.depth;
			output.push({ startDepth: gcDepth, endDepth: gcDepth,
				time: seg.time, engineRuntime: seg.runtime, gasName: gasName, isGasChange: true });
		} else if (seg.type === 'bottom' || seg.type === 'stop') {
			var segDepth = seg.depth;
			if (output.length > 0) {
				var prevEnd = output[output.length - 1].endDepth;
				if (prevEnd > segDepth) {
					// Transit time from engine runtime delta: seg.runtime - seg.time - prevRuntime.
					// For a 1-min grid stop this equals (prevDepth - stopDepth) / ascentRate exactly,
					// so transit + stop = integer → profile chart total = engine.totalRuntime = 35.
					// Use the PREVIOUS segment's gas: switches happen AT stop depth, not during ascent.
					var transitTime = seg.runtime - seg.time - _prevEngineRuntime;
					output.push({ startDepth: prevEnd, endDepth: segDepth,
						time: transitTime,
						engineRuntime: seg.runtime - seg.time,
						gasName: output[output.length - 1].gasName, implicit: true });
				}
			}
			output.push({ startDepth: segDepth, endDepth: segDepth,
				time: seg.time, engineRuntime: seg.runtime, gasName: gasName });
		}
		_prevEngineRuntime = seg.runtime;
	}
	if (output.length > 0) {
		var last = output[output.length - 1];
		if (last.endDepth > 0) {
			// Surface ascent: implicit. Give it an engineRuntime that includes the ascent time
			// so to_5_column_arr_full produces _chartTime > 0 → gradual line on profile chart.
			// (The engine does not count this in totalRuntime, but the chart should show it.)
			var surfTime = last.endDepth / rate_asc_surf;
			output.push({ startDepth: last.endDepth, endDepth: 0,
				time: surfTime,
				engineRuntime: last.engineRuntime + surfTime,
				gasName: last.gasName, implicit: true });
		}
	}
	return output;
}

//build whole profile
function build_dive() {
	var cnt = 1;
	for (var j = 0; j < (lvl_arr.length / 3); j++) {
		var tmp = document.getElementById("opt_levels_depth_" + j);
		lvl_arr[cnt]     = tmp.options[tmp.selectedIndex].value * 1.0;
		tmp = document.getElementById("opt_levels_time_" + j);
		lvl_arr[cnt + 1] = tmp.options[tmp.selectedIndex].value * 1.0;
		cnt += 3;
	}

	var tmp_lvl_arr     = lvl_arr.slice();
	var tmp_lvl_mix_arr = lvl_mix_arr.slice();
	var output = build_dive_segment(tmp_lvl_arr, tmp_lvl_mix_arr);

	var isDecoDive = max_lvl_depth(tmp_lvl_arr) >= 7;

	if (isDecoDive) {
		// Both OC and CCR now use ApexDeco; surface ascent already included by convertApexPlanToLegacy
		output = GasBreakInsert(output);
	} else {
		var rate_asc_surf_el  = document.getElementById("opt_rate_asc_surf");
		var rate_asc_surf_idx = rate_asc_surf_el.options[rate_asc_surf_el.selectedIndex].value;
		output.push({
			endDepth: 0,
			startDepth: output[output.length - 1].startDepth,
			time: (output[output.length - 1].startDepth * 1.0 / rate_asc_surf_idx) * 1.0,
			gasName: output[output.length - 1].gasName
		});
	}

	return output;
}
//main function to build any dive segment
function build_dive_segment(levels_segment_arr, levels_mix_segment_arr) {

	var rate_asc = document.getElementById("opt_rate_asc");
	var rate_asc_idx = rate_asc.options[rate_asc.selectedIndex].value;

	var rate_asc_surf = document.getElementById("opt_rate_asc_surf");
	var rate_asc_surf_idx = rate_asc_surf.options[rate_asc_surf.selectedIndex].value;

	var rate_asc_deco_el2 = document.getElementById("opt_rate_asc_deco");
	var rate_asc_deco_idx = rate_asc_deco_el2.options[rate_asc_deco_el2.selectedIndex].value;

	var rate_dsc = document.getElementById("opt_rate_dsc");
	var rate_dsc_idx = rate_dsc.options[rate_dsc.selectedIndex].value;
	var output = [];

	first_ascent = 0;

	if (max_lvl_depth(levels_segment_arr) < 7) {
		//Not Deco Dive Segment

		if ($("#tn_plan_ccr").val() * 1.0 == 2) {
			if (opt_blt_dln == 2) {
				// CCR Diluent mode: show diluent metabolic consumption even for shallow dives
				element_id_show("7-header");
				element_id_show("t_total_cons");
			} else {
				// CCR Bailout mode without deco gases: hide (no OC gases used)
				element_id_hide("t_total_cons");
				element_id_hide("7-header");
				element_id_hide("7-content");
			}
		}

		tmp_arr = [];
		tmp_end_depth = levels_segment_arr[1];
		tmp_time = (levels_segment_arr[0 + 1] * 1.0 / rate_dsc_idx) * 1.0;
		tmp_mx_arr = [];
		tmp_mx_arr.push(levels_mix_segment_arr[0], levels_mix_segment_arr[1]);
		tmp_gass_name = mix_to_txt_arr(tmp_mx_arr);

		//add first descent lvl
		tmp_arr.push({
			endDepth: tmp_end_depth,
			startDepth: 0,
			time: tmp_time,
			gasName: tmp_gass_name
		});
		//loop for all added levels
		a3 = 0;
		b3 = 0;
		for (i = 0; i < levels_segment_arr.length / 3; i++) {
			//for every flat levels
			tmp_end_depth = levels_segment_arr[a3 + 1];
			tmp_start_depth = levels_segment_arr[a3 + 1];
			tmp_time = levels_segment_arr[a3 + 2];
			tmp_mx_arr = [];
			tmp_mx_arr.push(levels_mix_segment_arr[b3], levels_mix_segment_arr[b3 + 1]);
			tmp_gass_name = mix_to_txt_arr(tmp_mx_arr);

			tmp_arr.push({
				endDepth: tmp_end_depth,
				startDepth: tmp_start_depth,
				time: tmp_time,
				gasName: tmp_gass_name
			});
			//add lvl change.if it is not last change
			if (levels_segment_arr[a3 + 4] !== undefined) {
				tmp_end_depth = levels_segment_arr[a3 + 4] * 1.0;
				tmp_start_depth = levels_segment_arr[a3 + 1] * 1.0;

				//compute travel time from one to next lvl
				tt_time = Math.abs(tmp_start_depth - tmp_end_depth);
				if (tmp_start_depth - tmp_end_depth < 0) {
					tmp_time = (tt_time * 1.0 / rate_dsc_idx);
				} else {
					tmp_time = (tt_time * 1.0 / rate_asc_idx);
				}
				//return char mix name
				tmp_mx_arr = [];
				tmp_mx_arr.push(levels_mix_segment_arr[b3], levels_mix_segment_arr[b3 + 1]);
				tmp_gass_name = mix_to_txt_arr(tmp_mx_arr);

				tmp_arr.push({
					endDepth: tmp_end_depth,
					startDepth: tmp_start_depth,
					time: tmp_time,
					gasName: tmp_gass_name.toString()
				});
			}

			b3 = b3 + 2;
			a3 = a3 + 3;
		}

		//add last lvl to surface
		tmp_time = ((tmp_arr[tmp_arr.length - 1].endDepth) * 1.0 / rate_asc_surf_idx) * 1.0;
		tmp_arr.push({
			endDepth: 0,
			startDepth: tmp_arr[tmp_arr.length - 1].endDepth,
			time: tmp_time,
			gasName: tmp_arr[tmp_arr.length - 1].gasName
		});
		output = tmp_arr;
	} else

	//Deco Dive_Segment!
	{
		//reset compartment info array every graph rebuild
		comp_tiss_arr = [];
		mix_mod_arr = [];

		var mdl     = document.getElementById("tn_mdl");
		var mdl_idx = mdl.options[mdl.selectedIndex].value * 1;

		if (parseInt($("#tn_plan_ccr").val()) === 1) {

			//OC Dive - ApexDeco engines
			var apex_levels   = buildApexLevels(levels_segment_arr, levels_mix_segment_arr);
			var apex_decos    = buildApexDecos();
			var apex_settings = buildApexSettings(mdl_idx, false);
			// Pre-compute SI-adjusted t=0 tissue state while settings are available
			window._dive_start_tissues = computeDiveStartTissues(apex_settings);
			var apexResult    = apex_settings._isVPM
				? VPMEngine.calculate(apex_levels, apex_decos, apex_settings, apex_settings._vpmModel)
				: DecoEngine.calculate(apex_levels, apex_decos, apex_settings);
			if (apexResult && !apexResult.error) {
				window._last_final_tissues = apexResult.finalTissues || null;
				populateTissueTimeline(apexResult);
				output = convertApexPlanToLegacy(apexResult, rate_asc_idx * 1.0, rate_asc_deco_idx * 1.0, rate_asc_surf_idx * 1.0);
			} else {
				window._last_final_tissues = null;
				output = [];
			}

		} else {

		//CCR Dive - ApexDeco engine
		var apex_levels_ccr   = buildApexLevelsCCR(levels_segment_arr, levels_mix_segment_arr);
		// Bailout mode: pass deco gases; Diluent mode: no deco gases (stays on CCR)
		var apex_decos_ccr    = (opt_blt_dln == 1) ? buildApexDecos() : [];
		var apex_settings_ccr = buildApexSettings(mdl_idx, true);
		// Pre-compute SI-adjusted t=0 tissue state while settings are available
		window._dive_start_tissues = computeDiveStartTissues(apex_settings_ccr);
		var apexResultCCR     = apex_settings_ccr._isVPM
			? VPMEngine.calculate(apex_levels_ccr, apex_decos_ccr, apex_settings_ccr, apex_settings_ccr._vpmModel)
			: DecoEngine.calculate(apex_levels_ccr, apex_decos_ccr, apex_settings_ccr);
		if (apexResultCCR && !apexResultCCR.error) {
			window._last_final_tissues = apexResultCCR.finalTissues || null;
			populateTissueTimeline(apexResultCCR);
			output = convertApexPlanToLegacy(apexResultCCR, rate_asc_idx * 1.0, rate_asc_deco_idx * 1.0, rate_asc_surf_idx * 1.0);
		} else {
			window._last_final_tissues = null;
			output = [];
		}

		} // end CCR else

	}
	//fix ascent error on very short dives
	for (c = 0; c < output.length; c++) {
		if (output[c].endDepth < 0) {
			output[c].endDepth = 3;
			output.push({
				endDepth: 0,
				startDepth: output[c].endDepth,
				time: output[c].time,
				gasName: output[c].gasName
			});
		}
	}

	return output;
}

//from idx filtered array make only fraction o2\he from real travel gases array
function get_rl_fraction(idx_arr) {
	var mix_travel_idx = mix_travel.options[mix_travel.selectedIndex].value;
	var tmp_arr = [];
	var a = 0;
	var b = 0;
	for (c = 0; c < mix_travel_idx; c++) {
		if (c == idx_arr[a]) {
			tmp_arr.push(travel_mix_arr[b], travel_mix_arr[b + 1]);
			a = a + 1;
		}
		b = b + 2;
	}
	return tmp_arr;
}
//get from fraction proper MOD idx
function ret_mix_mod_idx(o2_fr, he_fr) {
	var idx_me = 0;
	for (var cnt = 0; cnt < travel_mix_arr.length - 1; cnt++) {

		if (travel_mix_arr[cnt] == o2_fr && travel_mix_arr[cnt + 1] == he_fr) {
			break;
		}
		idx_me = idx_me + 1;
	}
	return cnt / 2;
}

//return depth range, for selected by idx, mix array. Only two min max number for OC
function ret_mix_range_oc(idx, tmp_mix_arr) {

	var ppo2_bottom = document.getElementById("opt_ppo2_bottom");
	var ppo2_min = document.getElementById("opt_ppo2_min");
	var ppn2_max = document.getElementById("opt_ppn2_max");

	var ppo2_bottom_idx = ppo2_bottom.options[ppo2_bottom.selectedIndex].value;
	var ppo2_min_idx = ppo2_min.options[ppo2_min.selectedIndex].value;
	var ppn2_max_idx = ppn2_max.options[ppn2_max.selectedIndex].value;
	var tmp_arr = [];
	var a = 0;
	for (c = 0; c < tmp_mix_arr.length; c++) {



		if (c + 1 == idx) {
			//get current mod for selected mix
			var depth_cur_mod = travel_mix_depth_arr[ret_mix_mod_idx(tmp_mix_arr[a], tmp_mix_arr[a + 1])] * 1.0;

			//check current Mix MOD status
			if (depth_cur_mod == 0) {
				//Auto
				//calculation of correction with altitude above sea level
				//console.log(1 / ((water_density_temperature_correction() * water_density() * 0.001 * (1)) - ((1 - height_to_bar()))));
				//calculation of correction without altitude above sea level
				var WaterDensTempCompensation = (1 / ((water_density_temperature_correction() * water_density() * 0.001 * (1))));

				dp_o2_max = (WaterDensTempCompensation * (ppo2_bottom_idx / (tmp_mix_arr[a] * 0.01) * 10)) - (10 * height_to_bar()) + 1; //+1m fixing rounding to standard
				dp_o2_min = (WaterDensTempCompensation * (ppo2_min_idx / (tmp_mix_arr[a] * 0.01) * 10)) - (10 * height_to_bar());
				if (dp_o2_min < 1) {
					dp_o2_min = 1;
				}
				if (dp_o2_min == Infinity) {
					dp_o2_min = 1;
				}
				dp_ppn2_max = (WaterDensTempCompensation * (ppn2_max_idx / ((100 - tmp_mix_arr[a] - tmp_mix_arr[a + 1]) * 0.01) * 10)) - (10 * height_to_bar()) + 1; //+1m fixing rounding to standard
			} else {
				//Manual
				dp_o2_max = depth_cur_mod + 1;
				dp_o2_min = 1.0; //Always from one meter depth
				dp_ppn2_max = depth_cur_mod + 1;

			}

			tmp_arr.push(dp_o2_min);
			if (dp_ppn2_max >= dp_o2_max) {
				tmp_arr.push(dp_o2_max);
			} else {
				tmp_arr.push(dp_ppn2_max);
			}
			break;
		}
		a = a + 2;
	}

	return tmp_arr;
}

//return depth range, for selected by idx, mix array. Only two min max number for CCR
function ret_mix_range_ccr(idx, tmp_mix_arr) {

	//get from setpoint bottom option
	var ppo2_bottom = document.getElementById("opt_setpoint_bottom");

	//ppn max get from bailout settings
	var ppn2_max = document.getElementById("opt_ppn2_max");

	var ppo2_bottom_idx = ppo2_bottom.options[ppo2_bottom.selectedIndex].value;
	var ppn2_max_idx = ppn2_max.options[ppn2_max.selectedIndex].value;
	var tmp_arr = [];
	var a = 0;
	for (c = 0; c < tmp_mix_arr.length; c++) {
		if (c + 1 == idx) {
			//get current mod for selected mix
			var depth_cur_mod = travel_mix_depth_arr[ret_mix_mod_idx(tmp_mix_arr[a], tmp_mix_arr[a + 1])] * 1.0;

			//check current Mix MOD status
			if (depth_cur_mod == 0) {
				//Auto
				//calculation of correction with altitude above sea level
				//console.log(1 / ((water_density_temperature_correction() * water_density() * 0.001 * (1)) - ((1 - height_to_bar()))));
				//calculation of correction without altitude above sea level
				var WaterDensTempCompensation = (1 / ((water_density_temperature_correction() * water_density() * 0.001 * (1))));

				dp_o2_max = (WaterDensTempCompensation * (ppo2_bottom_idx / (tmp_mix_arr[a] * 0.01) * 10)) - (10 * height_to_bar()) + 1; //+1m fixing rounding to standard
				dp_o2_min = 1;
				dp_ppn2_max = (WaterDensTempCompensation * (ppn2_max_idx / ((100 - tmp_mix_arr[a] - tmp_mix_arr[a + 1]) * 0.01) * 10)) - (10 * height_to_bar()) + 1; //+1m fixing rounding to standard

				//fix error if mix n2 > 95%
				if (dp_ppn2_max < 1) {
					dp_ppn2_max = 6;
				}
			} else {
				//Manual
				dp_o2_max = depth_cur_mod + 1;
				dp_o2_min = 1.0; //Always from one meter depth
				dp_ppn2_max = depth_cur_mod + 1;
			}

			tmp_arr.push(dp_o2_min);

			if (dp_ppn2_max >= dp_o2_max) {
				tmp_arr.push(dp_o2_max);
			} else {
				tmp_arr.push(dp_ppn2_max);
			}
			break;
		}
		a = a + 2;
	}
	//tmp_arr[0] = 1;
	return tmp_arr;
}


function upd_lvl_opt_arr() {
	//check if level time changed then write to lvl_arr and update interface
	a = 2;
	for (j = 0; j < (lvl_arr.length / 3); j++) {
		tmp = document.getElementById("opt_levels_time_" + j);
		lvl_tm_c = parseInt(tmp.options[tmp.selectedIndex].value);

		//if time === 0 then make some time on levels for correct computation. one second
		if (lvl_tm_c === 0) {
			lvl_tm_c = 0.01;
		}
		if (lvl_arr[a] != lvl_tm_c) {
			lvl_arr[a] = lvl_tm_c;
			break;
		}
		a = a + 3;
	}

	//for depth
	a = 1;
	for (j = 0; j < (lvl_arr.length / 3); j++) {
		//code
		tmp = document.getElementById("opt_levels_depth_" + j);
		lvl_tm_c = tmp.options[tmp.selectedIndex].value;
		if (lvl_arr[a] != lvl_tm_c) {
			lvl_arr[a] = lvl_tm_c * 1.0;
			lvl_arr.length = a + 2;
			break;
		}
		a = a + 3;
	}

	//and for mix
	a = 0;
	for (j = 0; j < (lvl_arr.length / 3); j++) {
		tmp = document.getElementById("opt_levels_mix_" + j);
		lvl_mx_c = tmp.options[tmp.selectedIndex].value;
		b = Math.floor(lvl_mx_c) + 1.0;
		if (lvl_arr[a] != b) {
			lvl_arr[a] = b;
			lvl_arr.length = a + 3;
			break;
		}
		a = a + 3;
	}
	//upd_lvl_list();
	upd_all();
}
//Dec time equal to real time format xx:xx
function time_dec_to_time(tmp_time) {
	tmp_time_hi = Math.floor(tmp_time);
	tmp_time_lo = (((tmp_time * 100) - (tmp_time_hi * 100)) * 0.6) * 0.01;
	//fix javascript bug
	if (tmp_time_lo >= 0.59) {
		tmp_time_lo = 1.0
	}
	tmp_time = (tmp_time_hi + tmp_time_lo).toFixed(2);
	tmp_time = tmp_time.replace(".", ":");
	return tmp_time;
}

//Recombine output plan to five column table format
function src_to_5_arr(tmp_arr, flag_full) {

	tmp_arr = zero_lvl_arr(tmp_arr);
	if (flag_full == 1) {
		dec_table = to_5_column_arr_full(tmp_arr);
	} else {
		dec_table = to_5_column_arr(tmp_arr);
	}

	//fix tissue error on very short dive plans
	tn_lst_stop1 = document.getElementById("opt_lst_stop");
	tn_lst_stop1_idx = parseFloat(tn_lst_stop1.options[tn_lst_stop1.selectedIndex].value);
	test_dp = depth_from_name_arr(dec_table[dec_table.length - 9]);


	//fix gas switch error on exit for very short dive plans
	dec_table[(dec_table.length - 1)] = dec_table[(dec_table.length - 6)];
	return dec_table;
}

//remove_zero time levels from plan. It is normal because user can assign lvl same depth
function zero_lvl_arr(tmp_arr) {
	for (i = 0; i < tmp_arr.length; i++) {
		if (tmp_arr[i].time <= 0.001) {
			tmp_arr.splice(i, 1);
		}
	}
	//if levels have same depth and gass name - glue it to one level
	for (i = 0; i < tmp_arr.length - 1; i++) {
		if (tmp_arr[i].startDepth == tmp_arr[i + 1].startDepth) {
			if (tmp_arr[i].endDepth == tmp_arr[i + 1].endDepth) {
				if (tmp_arr[i].gasName.toString() == tmp_arr[i + 1].gasName.toString()) {
					tmp_arr[i].time = (tmp_arr[i].time * 1.0) + (tmp_arr[i + 1].time * 1.0);
					tmp_arr.splice(i + 1, 1);
					i = i - 1;
				}
			}
		}
	}
	return tmp_arr;
}
//add table different info
function to_5_column_arr(tmp_arr) {
	dec_table = ["Action", "Depth", "Time", "RunTime", "Mix"];
	//check plan style selection status
	var pln_style_val = $("#tn_plan_style option:selected").val();

	runtime = 0;
	for (var i = 0; i < tmp_arr.length; i++) {
		dp_end1 = tmp_arr[i].endDepth * 1.0;
		dp_start1 = tmp_arr[i].startDepth * 1.0;
		dp_c_time = tmp_arr[i].time * 1.0;

		// implicit segments (inter-stop transits, surface ascent) are excluded from runtime
		// to match ApexDeco formula: runtime = Math.ceil(engine plan segments only)
		if (!tmp_arr[i].implicit) {
			runtime = runtime + dp_c_time;
		}
		dp_c_mix = tmp_arr[i].gasName;

		if (dp_end1 == dp_start1) {

			if (((lvl_arr.length / 3) * 2) > i) {
				dec_table.push("Level");
			} else {
				dec_table.push("Stop");
			}
		}
		if (dp_end1 < dp_start1) {
			dec_table.push("Ascent");
		}
		if (dp_end1 > dp_start1) {
			dec_table.push("Descent");
		}
		if (dp_start1 == dp_end1) {
			dec_table.push(dp_start1);
		} else {
			dec_table.push(dp_start1 + "-" + dp_end1);
		}
		dec_table.push(time_dec_to_time(dp_c_time));

		// Classic: ceil to whole minutes (unchanged).
		// Detailed: 1-second precision; implicit transit rows show runtime+transitTime
		// (= arrival time at next stop) so consecutive rows never share the same value.
		var _rtVal;
		if (pln_style_val === "1") {
			var _rtBase = (tmp_arr[i].implicit) ? runtime + dp_c_time : runtime;
			_rtVal = time_dec_to_time(Math.round(_rtBase * 60) / 60);
		} else {
			_rtVal = time_dec_to_time(Math.ceil(runtime));
		}
		dec_table.push("(" + _rtVal + ")");

		dec_table.push(dp_c_mix);
	}
	return dec_table;
}

//Very crappy code. Copy of the above function, slightly modified. Adds table info in a different format but doesn't use the "classic" view fixes. Keeps all other safety checks (excluding the main table).
function to_5_column_arr_full(tmp_arr) {
	dec_table = ["Action", "Depth", "Time", "RunTime", "Mix"];

	//check plan style selection status
	var pln_style_val = $("#tn_plan_style option:selected").val();

	runtime = 0;
	// _prevEngRT: tracks cumulative engine runtime after the previous segment.
	// Using engine runtime deltas for the TIME field ensures the profile chart
	// x-axis sums to exactly engine.totalRuntime (35), identical to ApexDeco,
	// while transit segments preserve gradual ascent lines (not vertical steps).
	var _prevEngRT = 0;
	var blns = 0;
	for (var i = 0; i < tmp_arr.length; i++) {
		dp_end1 = tmp_arr[i].endDepth * 1.0;
		dp_start1 = tmp_arr[i].startDepth * 1.0;
		dp_c_time = tmp_arr[i].time * 1.0;

		// Chart x-axis time: engine runtime delta so chart total = engine.totalRuntime.
		// ExtraStops gas-change segments have no engineRuntime → fall back to dp_c_time.
		var _engRT = (tmp_arr[i].engineRuntime !== undefined)
			? tmp_arr[i].engineRuntime
			: (_prevEngRT + dp_c_time);
		var _chartTime = _engRT - _prevEngRT;
		_prevEngRT = _engRT;

		// Runtime column: exclude implicit segments (matches plan table accumulation).
		if (!tmp_arr[i].implicit) {
			runtime = runtime + dp_c_time;
		}

		dp_c_mix = tmp_arr[i].gasName;

		if (dp_end1 == dp_start1) {

			if (((lvl_arr.length / 3) * 2) > i) {
				dec_table.push("Level");
			} else {
				dec_table.push("Stop");
			}
		}
		if (dp_end1 < dp_start1) {
			dec_table.push("Ascent");
		}
		if (dp_end1 > dp_start1) {
			dec_table.push("Descent");
		}
		if (dp_start1 == dp_end1) {
			dec_table.push(dp_start1);
		} else {
			dec_table.push(dp_start1 + "-" + dp_end1);
		}
		dec_table.push(time_dec_to_time(_chartTime));
		dec_table.push("(" + time_dec_to_time(Math.ceil(runtime)) + ")");
		dec_table.push(dp_c_mix);
	}
	return dec_table;
}

//fix ultra short stops not integer time
function ShortStop(mn_plan) {

	for (var i = 0; i < mn_plan.length; i++) {
		//only for stops or flat segments
		if (mn_plan[i].startDepth == mn_plan[i].endDepth) {
			//only for non-integer time: round to nearest minute (conservative — keeps sub-minute stops)
			// Math.round instead of Math.floor: 0.667min→1min (kept), not 0min (removed).
			// Math.floor caused sub-minute deco stops to vanish, silently dropping decompression time.
			if (mn_plan[i].time != Math.round(mn_plan[i].time)) {

				var rep = {
					gasName: mn_plan[i].gasName,
					startDepth: mn_plan[i].startDepth,
					endDepth: mn_plan[i].endDepth,
					time: Math.round(mn_plan[i].time),
					// Preserve engineRuntime so to_5_column_arr_full can compute exact
					// chart x-axis deltas even after the stop time is rounded.
					engineRuntime: mn_plan[i].engineRuntime
				};
				mn_plan.splice(i, 1, rep);
			}
		}
	}

	return mn_plan;
}

//Insert gas break in to the plan
function GasBreakInsert(main_arr) {

	var gb_DepthStart = $("#opt_airbr_depth").val() * 1.0;
	var gb_MixMore = $("#opt_airbr_o2").val() * 1.0;
	var gb_Mix = $("#opt_airbr_mix option:selected").text();
	var gb_MinAfter = $("#opt_airbr_time_after").val() * 1.0;
	var gb_Break = $("#opt_airbr_time").val() * 1.0;
	var gb_Enable = $("#opt_airbr_time_reset").val() * 1.0;

	var TotalTime = 0;

	var LvlMaxDepth = PlanMaxDepth(lvl_arr);
	if (gb_DepthStart > LvlMaxDepth) {
		gb_DepthStart = LvlMaxDepth;
	}
	//Gas breaks enabled and it is NO CCR plan
	if (gb_Enable == 2 && $("#tn_plan_ccr").val() * 1.0 != 2) {
		for (var j = 0; j < main_arr.length; j++) {
			var dp_start = main_arr[j].startDepth * 1.0;
			var dp_end = main_arr[j].endDepth * 1.0;

			//flat level
			if (dp_start === dp_end) {

				var cr_gas_level_o2fr = (gass_from_name_arr(main_arr[j].gasName))[0];

				//level depth less or equal than break start depth
				//if(gb_DepthStart >= dp_start || cr_gas_level_o2fr >= gb_MixMore){
				if (gb_DepthStart >= dp_start) {
					//current level less than maximum plan depth
					if (dp_start < LvlMaxDepth) {
						if (gb_LevelReset = 1) {
							//reset time on current level
							TotalTime = 0;
							if (main_arr[j].time >= (gb_MinAfter + gb_Break)) {

								var gb_end_time = main_arr[j].time - ((gb_MinAfter + gb_Break) * Math.floor(main_arr[j].time / (gb_MinAfter + gb_Break)));

								var gb_total_time = main_arr[j].time;
								var gb_mix_total = main_arr[j].gasName;
								var gb_startDepth_total = main_arr[j].startDepth;
								var gb_endDepth_total = main_arr[j].endDepth;

								main_arr.splice(j, 1);

								for (var s = 0; s < (Math.floor(gb_total_time / (gb_MinAfter + gb_Break))); s++) {
									//console.log(s);

									main_arr.splice(j, 0, {
										gasName: gb_Mix,
										startDepth: gb_startDepth_total,
										endDepth: gb_endDepth_total,
										time: gb_Break
									});
									main_arr.splice(j, 0, {
										gasName: gb_mix_total,
										startDepth: gb_startDepth_total,
										endDepth: gb_endDepth_total,
										time: gb_MinAfter
									});

								}
								main_arr.splice(j + (s * 2), 0, {
									//gasName : gb_mix_total,
									gasName: gb_mix_total,
									startDepth: gb_startDepth_total,
									endDepth: gb_endDepth_total,
									time: gb_end_time
								});
							}

						} else {
							//or add to counter
							TotalTime = TotalTime + main_arr[j].time;
						}
					}
				}
			}
		}
	}
	return main_arr;
}

//ADD extra stops for gas changing
function ExtraStops(output) {
	var tn_cng_time = document.getElementById("opt_cng_time");
	var tn_cng_time_idx = parseInt(tn_cng_time.options[tn_cng_time.selectedIndex].value);

	//if changing mix time === 0 we need to add some time for proper dive plan computation.
	if (tn_cng_time_idx === 0) {
		//!!!need deep test! changed from 0.0 to 0.00001 after v9.11
		//Important: if 0.0 then app crashes. Needs more testing to resolve this unexpected behavior.
		tn_cng_time_idx = 0.00001;
	}

	//OC plan
	if ($("#tn_plan_ccr").val() * 1.0 == 1) {
		for (c = 1; c < output.length; c++) {
			// Skip if engine already inserted a gas_change segment at this position
			if (output[c].isGasChange) { c++; continue; }
			if (output[c].gasName != output[c - 1].gasName) {
				output.splice(c, 0, {
					gasName: output[c].gasName,
					startDepth: output[c].startDepth,
					endDepth: output[c].startDepth,
					time: tn_cng_time_idx,
					isGasChange: true
				});
			}
		}
	}
	//CCR bailout plan
	if ($("#tn_plan_ccr").val() * 1.0 == 2 && opt_blt_dln == 1) {

		var god_deco_gas = 0;
		var deco_mix_stp = ($("#opt_deco").val() * 1.0);

		for (c = 1; c < output.length; c++) {
			// Skip if engine already inserted a gas_change segment at this position
			if (output[c].isGasChange) { c++; continue; }

			var cnt = 0;

			//we need add extra stop time only if changed to bailout array mix
			for (j = 0; j < deco_mix_stp; j++) {
				if (output[c].gasName == (mix_to_txt_arr([deco_mix_arr[cnt], deco_mix_arr[cnt + 1]]))) {
					god_deco_gas = 1;
				}
				cnt = cnt + 2;
			}

			if (output[c].gasName != output[c - 1].gasName && god_deco_gas == 1) {
				output.splice(c, 0, {
					gasName: output[c].gasName,
					startDepth: output[c].startDepth,
					endDepth: output[c].startDepth,
					time: tn_cng_time_idx,
					isGasChange: true
				});
				god_deco_gas = 0;
			}
		}
	}

	return output;
}

//return max depth in meters from lvl list array
function PlanMaxDepth(plan_array) {
	var a = 0;
	var max_dp = 1.0;
	for (j = 0; j < (plan_array.length / 3); j++) {
		if (plan_array[a + 1] * 1.0 > max_dp) {
			max_dp = plan_array[a + 1] * 1.0;
		}
		a = a + 3;
	}
	return max_dp;
}