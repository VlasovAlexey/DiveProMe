const DecoEngine = (() => {
    const ZHL16C_N2 = [
        { ht: 4.0,    a: 1.2599, b: 0.5050 },
        { ht: 8.0,    a: 1.0000, b: 0.6514 },
        { ht: 12.5,   a: 0.8618, b: 0.7222 },
        { ht: 18.5,   a: 0.7562, b: 0.7825 },
        { ht: 27.0,   a: 0.6200, b: 0.8126 },
        { ht: 38.3,   a: 0.5043, b: 0.8434 },
        { ht: 54.3,   a: 0.4410, b: 0.8693 },
        { ht: 77.0,   a: 0.4000, b: 0.8910 },
        { ht: 109.0,  a: 0.3750, b: 0.9092 },
        { ht: 146.0,  a: 0.3500, b: 0.9222 },
        { ht: 187.0,  a: 0.3295, b: 0.9319 },
        { ht: 239.0,  a: 0.3065, b: 0.9403 },
        { ht: 305.0,  a: 0.2835, b: 0.9477 },
        { ht: 390.0,  a: 0.2610, b: 0.9544 },
        { ht: 498.0,  a: 0.2480, b: 0.9602 },
        { ht: 635.0,  a: 0.2327, b: 0.9653 }
    ];
    const ZHL16C_He = [
        { ht: 1.51,   a: 1.7424, b: 0.4245 },
        { ht: 3.02,   a: 1.3830, b: 0.5747 },
        { ht: 4.72,   a: 1.1919, b: 0.6527 },
        { ht: 6.99,   a: 1.0458, b: 0.7223 },
        { ht: 10.21,  a: 0.9220, b: 0.7582 },
        { ht: 14.48,  a: 0.8205, b: 0.7957 },
        { ht: 20.53,  a: 0.7305, b: 0.8279 },
        { ht: 29.11,  a: 0.6502, b: 0.8553 },
        { ht: 41.20,  a: 0.5950, b: 0.8757 },
        { ht: 55.19,  a: 0.5545, b: 0.8903 },
        { ht: 70.69,  a: 0.5333, b: 0.8997 },
        { ht: 90.34,  a: 0.5189, b: 0.9073 },
        { ht: 115.29, a: 0.5181, b: 0.9122 },
        { ht: 147.42, a: 0.5176, b: 0.9171 },
        { ht: 188.24, a: 0.5172, b: 0.9217 },
        { ht: 240.03, a: 0.5119, b: 0.9267 }
    ];
    const NUM_COMPARTMENTS = 16;
    const WATER_VAPOR_PRESSURE = 0.0577; 
    const SLP_SW_M = 10.078; 
    const SLP_FW_M = 10.337; 
    const SLP_SW_F = 33.066; 
    const SLP_FW_F = 33.914; 
    function createDefaultSettings() {
        return {
            circuit: 'OC',
            decoModel: 'ZHLC_GF',
            gfLo: 30,
            gfHi: 85,
            gfs: 85,
            conservatism: 0,
            oxyNarc: false,
            metric: true,
            waterType: 0, 
            altitude: 0,
            acclimatized: 0,
            gasVolUnit: 'ltr',
            pressureUnit: 'bar',
            temperature: 20,
            mix_units: 0, 
            mix_temp_units: 0, 
            mix_temp: 4, 
            mix_banked32: false,
            gaugeType: 1, 
            descentRate: 22,
            ascentRate: 9,
            decoAscentRate: 9,
            surfaceAscentRate: 9,
            stepSize: 3,
            lastStop: 3,
            lastStopCCR: 3,
            minStopTime: 1,
            ppO2Deco: 1.6,
            ppO2Low: 1.4,
            ppO2Mid: 1.5,
            ppO2High: 1.6,
            ppO2Bottom: 1.4,
            o2MaxDepth: 6,
            firstStop30sec: false,
            firstStopDoubleStep: false,
            ccrDefaultSP: 1.3,
            spUnits: 'bar',
            rmvBottom: 22,
            rmvDeco: 20,
            rmvDilCCR: 1,
            extendedStops: false,
            extStopDeep: 1,
            extStopShallow: 2,
            extendAdd: false,
            extendAllMix: false,
            extendO2Window: false,
            warnPpO2Hi: true,
            ppO2HighThreshold: 1.6,
            warnColorPpO2Hi: '#ff8080',
            warnPpO2Lo: true,
            ppO2LowThreshold: 0.16,
            warnColorPpO2Lo: '#ff8080',
            warnCNS: true,
            cnsHigh: 80,
            warnColorCNS: '#ffff00',
            warnOTU: true,
            otuHigh: 300,
            warnColorOTU: '#ffff00',
            warnIBCDN2: true,
            ibcdN2Threshold: 0.5,
            warnColorIBCDN2: '#ff0000',
            warnIBCDHe: true,
            ibcdHeThreshold: 0.5,
            warnColorIBCDHe: '#ff0000',
            ccrDilCheck: true,
            warnColorCCRDil: '#ff8040',
            bailoutActive: false,
            bailModel: 'ZHLC_GF',
            bailGFLo: 30,
            bailGFHi: 85,
            bailGFS: 85,
            bailRMV: 30,
            bailExtraMin: false,
            bailExtraMinTime: 1,
            bailDiveNum: 1,
            bailCaveBail: false,
            bailCavePortion: 33,
            surfaceInterval: 0,
            twoWeekOTU: 0,
            travelO2: 21,
            travelHe: 0,
        };
    }
    function getCCRFractions(o2Frac, heFrac, setpoint, pAmb) {
        const effO2 = Math.min(1.0, setpoint / pAmb);
        const n2Frac = 1.0 - o2Frac - heFrac;
        const inertSum = heFrac + n2Frac;
        let effN2, effHe;
        if (inertSum > 0 && o2Frac < 1.0) {
            effN2 = n2Frac * (1.0 - effO2) / (1.0 - o2Frac);
            effHe = (1.0 - effO2) - effN2;
        } else {
            effN2 = 0;
            effHe = 0;
        }
        return { o2: effO2, n2: effN2, he: Math.max(0, effHe) };
    }
    function getDepthPressure(depth, settings) {
        let slp;
        if (settings.metric) {
            slp = settings.waterType === 0 ? SLP_SW_M : SLP_FW_M;
        } else {
            slp = settings.waterType === 0 ? SLP_SW_F : SLP_FW_F;
        }
        return depth / slp;
    }
    function getSurfacePressure(settings) {
        const alt = settings.altitude || 0;
        return 1.01325 * Math.exp(-alt / 8434);
    }
    function getAmbientPressure(depth, settings) {
        return getSurfacePressure(settings) + getDepthPressure(depth, settings);
    }
    function gasN2Fraction(o2Frac, heFrac) {
        return 1.0 - o2Frac - heFrac;
    }
    function createTissueState(settings) {
        const pAmb = getSurfacePressure(settings);
        const ppH2O = WATER_VAPOR_PRESSURE;
        const inspiredN2 = 0.7902 * (pAmb - ppH2O);
        const inspiredHe = 0.0;
        const tissues = [];
        for (let i = 0; i < NUM_COMPARTMENTS; i++) {
            tissues.push({
                pN2: inspiredN2,
                pHe: inspiredHe
            });
        }
        if (settings._preTissues && settings._preTissues.length === NUM_COMPARTMENTS) {
            for (let i = 0; i < NUM_COMPARTMENTS; i++) {
                tissues[i].pN2 = settings._preTissues[i].pN2;
                tissues[i].pHe = settings._preTissues[i].pHe;
            }
            if (settings._surfaceInterval > 0) {
                applySurfaceInterval(tissues, settings._surfaceInterval, settings);
            }
        }
        return tissues;
    }
    function haldaneEquation(pStart, pInspired, halfTime, time) {
        const k = Math.LN2 / halfTime;
        return pStart + (pInspired - pStart) * (1 - Math.exp(-k * time));
    }
    function loadTissuesConstantDepth(tissues, depth, time, o2Frac, heFrac, settings, setpoint) {
        const pAmb = getAmbientPressure(depth, settings);
        const ppH2O = WATER_VAPOR_PRESSURE;
        let n2Frac, heFracEff;
        if (setpoint && setpoint > 0) {
            const ccr = getCCRFractions(o2Frac, heFrac, setpoint, pAmb);
            n2Frac = ccr.n2;
            heFracEff = ccr.he;
        } else {
            n2Frac = gasN2Fraction(o2Frac, heFrac);
            heFracEff = heFrac;
        }
        const inspN2 = n2Frac * (pAmb - ppH2O);
        const inspHe = heFracEff * (pAmb - ppH2O);
        for (let i = 0; i < NUM_COMPARTMENTS; i++) {
            tissues[i].pN2 = haldaneEquation(tissues[i].pN2, inspN2, ZHL16C_N2[i].ht, time);
            tissues[i].pHe = haldaneEquation(tissues[i].pHe, inspHe, ZHL16C_He[i].ht, time);
        }
    }
    function loadTissuesLinearDepthChange(tissues, startDepth, endDepth, rate, o2Frac, heFrac, settings, setpoint) {
        const time = Math.abs(endDepth - startDepth) / rate;
        if (time <= 0) return 0;
        const ppH2O = WATER_VAPOR_PRESSURE;
        const surfP = getSurfacePressure(settings);
        let slp;
        if (settings.metric) {
            slp = settings.waterType === 0 ? SLP_SW_M : SLP_FW_M;
        } else {
            slp = settings.waterType === 0 ? SLP_SW_F : SLP_FW_F;
        }
        if (setpoint && setpoint > 0) {
            const steps = Math.max(1, Math.ceil(time));
            const dt = time / steps;
            for (let s = 0; s < steps; s++) {
                const t0 = s / steps;
                const t1 = (s + 1) / steps;
                const d0 = startDepth + (endDepth - startDepth) * t0;
                const d1 = startDepth + (endDepth - startDepth) * t1;
                const midDepth = (d0 + d1) / 2;
                const pAmbMid = surfP + midDepth / slp;
                const ccr = getCCRFractions(o2Frac, heFrac, setpoint, pAmbMid);
                const n2Frac = ccr.n2;
                const heFracEff = ccr.he;
                const depthRate = (d1 - d0) / dt;
                const pressureRate = depthRate / slp;
                const pAmbStart = surfP + d0 / slp;
                const inspN2Start = n2Frac * (pAmbStart - ppH2O);
                const inspHeStart = heFracEff * (pAmbStart - ppH2O);
                const rN2 = n2Frac * pressureRate;
                const rHe = heFracEff * pressureRate;
                for (let i = 0; i < NUM_COMPARTMENTS; i++) {
                    const kN2 = Math.LN2 / ZHL16C_N2[i].ht;
                    const kHe = Math.LN2 / ZHL16C_He[i].ht;
                    tissues[i].pN2 = inspN2Start + rN2 * (dt - 1/kN2)
                        - (inspN2Start - tissues[i].pN2 - rN2/kN2) * Math.exp(-kN2 * dt);
                    tissues[i].pHe = inspHeStart + rHe * (dt - 1/kHe)
                        - (inspHeStart - tissues[i].pHe - rHe/kHe) * Math.exp(-kHe * dt);
                }
            }
        } else {
            const n2Frac = gasN2Fraction(o2Frac, heFrac);
            const depthRate = (endDepth - startDepth) / time;
            const pressureRate = depthRate / slp;
            const pAmbStart = surfP + startDepth / slp;
            const inspN2Start = n2Frac * (pAmbStart - ppH2O);
            const inspHeStart = heFrac * (pAmbStart - ppH2O);
            const rN2 = n2Frac * pressureRate;
            const rHe = heFrac * pressureRate;
            for (let i = 0; i < NUM_COMPARTMENTS; i++) {
                const kN2 = Math.LN2 / ZHL16C_N2[i].ht;
                const kHe = Math.LN2 / ZHL16C_He[i].ht;
                tissues[i].pN2 = inspN2Start + rN2 * (time - 1/kN2)
                    - (inspN2Start - tissues[i].pN2 - rN2/kN2) * Math.exp(-kN2 * time);
                tissues[i].pHe = inspHeStart + rHe * (time - 1/kHe)
                    - (inspHeStart - tissues[i].pHe - rHe/kHe) * Math.exp(-kHe * time);
            }
        }
        return time;
    }
    function getCeiling(tissues, settings, gfLo, gfHi, maxDepth) {
        const surfP = getSurfacePressure(settings);
        let slp;
        if (settings.metric) {
            slp = settings.waterType === 0 ? SLP_SW_M : SLP_FW_M;
        } else {
            slp = settings.waterType === 0 ? SLP_SW_F : SLP_FW_F;
        }
        let minPAmb = 0;
        for (let i = 0; i < NUM_COMPARTMENTS; i++) {
            const pTotal = tissues[i].pN2 + tissues[i].pHe;
            let a, b;
            if (pTotal > 0) {
                a = (tissues[i].pN2 * ZHL16C_N2[i].a + tissues[i].pHe * ZHL16C_He[i].a) / pTotal;
                b = (tissues[i].pN2 * ZHL16C_N2[i].b + tissues[i].pHe * ZHL16C_He[i].b) / pTotal;
            } else {
                a = ZHL16C_N2[i].a;
                b = ZHL16C_N2[i].b;
            }
            const gf = gfLo / 100;
            const pAmbTol = (pTotal - a * gf) / (gf / b - gf + 1);
            if (pAmbTol > minPAmb) {
                minPAmb = pAmbTol;
            }
        }
        const ceilingDepth = (minPAmb - surfP) * slp;
        return Math.max(0, ceilingDepth);
    }
    function getDisplayCeiling(tissues, settings, gfRefDepth, currentDepth, fallbackMaxDepth) {
        const depthNow = Math.max(0, currentDepth || 0);
        if (depthNow <= 0) return 0;
        if (!gfRefDepth || gfRefDepth <= 0) {
            return Math.max(0, getCeiling(
                tissues,
                settings,
                settings.gfLo || 30,
                settings.gfHi || 85,
                fallbackMaxDepth || depthNow
            ));
        }
        const coarseStep = settings.metric ? 0.25 : 1;
        const fineStep = settings.metric ? 0.05 : 0.25;
        let coarseCeiling = depthNow;
        for (let d = 0; d <= depthNow + 1e-9; d += coarseStep) {
            if (isClearToAscend(tissues, d, gfRefDepth, settings)) {
                coarseCeiling = d;
                break;
            }
        }
        const fineStart = Math.max(0, coarseCeiling - coarseStep);
        let refinedCeiling = coarseCeiling;
        for (let d = fineStart; d <= Math.min(depthNow, coarseCeiling) + 1e-9; d += fineStep) {
            if (isClearToAscend(tissues, d, gfRefDepth, settings)) {
                refinedCeiling = d;
                break;
            }
        }
        return Math.max(0, Math.round(refinedCeiling * 10) / 10);
    }
    function getGFAtDepth(stopDepth, firstStopDepth, settings) {
        const gfLo = settings.gfLo / 100;
        const gfHi = settings.gfHi / 100;
        if (firstStopDepth <= 0) return gfHi;
        const surfaceDepth = 0;
        const gf = gfHi + (gfLo - gfHi) * (stopDepth / firstStopDepth);
        return Math.max(gfLo, Math.min(gfHi, gf));
    }
    function isClearToAscend(tissues, targetDepth, firstStopDepth, settings) {
        const pAmb = getAmbientPressure(targetDepth, settings);
        const gf = getGFAtDepth(targetDepth, firstStopDepth, settings);
        for (let i = 0; i < NUM_COMPARTMENTS; i++) {
            const pTotal = tissues[i].pN2 + tissues[i].pHe;
            let a, b;
            if (pTotal > 0) {
                a = (tissues[i].pN2 * ZHL16C_N2[i].a + tissues[i].pHe * ZHL16C_He[i].a) / pTotal;
                b = (tissues[i].pN2 * ZHL16C_N2[i].b + tissues[i].pHe * ZHL16C_He[i].b) / pTotal;
            } else {
                a = ZHL16C_N2[i].a;
                b = ZHL16C_N2[i].b;
            }
            const mValue = a + pAmb / b;
            const mValueGF = pAmb + gf * (mValue - pAmb);
            if (pTotal > mValueGF) return false;
        }
        return true;
    }
    function roundUpToStop(depth, stepSize) {
        return Math.ceil(depth / stepSize) * stepSize;
    }
    function getGasPpO2Limit(gas, settings) {
        const o2pct = gas.o2 * 100;
        if (settings.ppO2Low && settings.ppO2Mid && settings.ppO2High) {
            if (o2pct <= 28) return settings.ppO2Low;
            if (o2pct <= 45) return settings.ppO2Mid;
            if (o2pct < 100) return settings.ppO2High;
        }
        return settings.ppO2Deco || 1.6;
    }
    function getManualDecoSwitchDepth(gas) {
        if (!gas || !(gas.depthOverrideOn === true || gas.depthOverrideOn === 1 || gas.depthOverrideOn === '1')) {
            return null;
        }
        const depth = Number(gas.depthOverride);
        return Number.isFinite(depth) && depth > 0 ? depth : null;
    }
    function selectDecoGas(depth, decoGases, ppO2Limit, settings) {
        let bestGas = null;
        let bestO2 = 0;
        const o2MaxDepth = settings.o2MaxDepth || 6;
        for (const gas of decoGases) {
            const manualSwitchDepth = getManualDecoSwitchDepth(gas);
            if (manualSwitchDepth != null) {
                if (depth <= manualSwitchDepth && gas.o2 > bestO2) {
                    bestO2 = gas.o2;
                    bestGas = gas;
                }
                continue;
            }
            const pAmb = getAmbientPressure(depth, settings);
            const ppO2 = gas.o2 * pAmb;
            const limit = getGasPpO2Limit(gas, settings);
            if (gas.o2 >= 0.995) {
                if (depth <= o2MaxDepth && gas.o2 > bestO2) {
                    bestO2 = gas.o2;
                    bestGas = gas;
                }
                continue;
            }
            if (ppO2 <= limit && gas.o2 > bestO2) {
                bestO2 = gas.o2;
                bestGas = gas;
            }
        }
        return bestGas;
    }
    function calculate(levels, decoGases, settings) {
        if (!levels || levels.length === 0) {
            return { error: 'No bottom segments defined', stops: [], totalTime: 0 };
        }
        const stepSizeRaw = settings.stepSize || 3;
        const lastStopRaw = settings.lastStop || 3;
        const stepSize = settings.metric ? stepSizeRaw : Math.round(stepSizeRaw * 3.28084);
        const lastStop = settings.metric ? lastStopRaw : Math.round(lastStopRaw * 3.28084);
        const descentRate = settings.descentRate || (settings.metric ? 20 : 60);
        const ascentRate = settings.ascentRate || (settings.metric ? 10 : 30);
        const decoAscentRate = settings.decoAscentRate || (settings.metric ? 3 : 10);
        const surfaceAscentRate = settings.surfaceAscentRate || decoAscentRate;
        const ppO2Deco = settings.ppO2Deco || 1.6;
        const minStopTime = settings.minStopTime || 1;
        const firstStop30sec = settings.firstStop30sec || false;
        const firstStopDoubleStep = settings.firstStopDoubleStep || false;
        const tissues = createTissueState(settings);
        const plannedMaxDepth = Math.max(...levels.map(l => l.depth));
        const plan = [];
        let globalGFRefDepth = 0;
        const _origPush = plan.push;
        plan.push = function(seg) {
            try {
                const segDepth = Math.max(0,
                    seg.depth !== undefined ? seg.depth :
                    (seg.endDepth !== undefined ? seg.endDepth :
                    (seg.startDepth !== undefined ? seg.startDepth : 0))
                );
                seg._tissues = tissues.map(t => ({ pN2: t.pN2, pHe: t.pHe }));
                seg._cumOTU = totalOTU;
                seg._cumCNS = totalCNS;
                seg._ceilingDepth = getDisplayCeiling(
                    tissues,
                    settings,
                    globalGFRefDepth,
                    segDepth,
                    plannedMaxDepth
                );
            } catch (e) {  }
            return _origPush.call(this, seg);
        };
        let runtime = 0;
        let currentDepth = 0;
        let totalOTU = 0;
        let totalCNS = 0;
        const normalizedDecoGases = decoGases.map(g => ({
            o2: g.o2 / 100,
            he: g.he / 100,
            label: `${g.o2}/${g.he}`,
            depthOverrideOn: g.depthOverrideOn === true || g.depthOverrideOn === 1 || g.depthOverrideOn === '1',
            depthOverride: g.depthOverride != null && g.depthOverride !== '' ? Number(g.depthOverride) : null
        }));
        const isCCR = settings.circuit === 'CCR';
        let currentO2 = 0, currentHe = 0, currentGasLabel = '', currentSP = 0;
        let decoZoneStart = 0;
        function buildAscentProjection(fromDepth) {
            const surfP = getSurfacePressure(settings);
            const slpLocal = settings.metric ? (settings.waterType === 0 ? SLP_SW_M : SLP_FW_M) : (settings.waterType === 0 ? SLP_SW_F : SLP_FW_F);
            const ppH2O = WATER_VAPOR_PRESSURE;
            let n2f, hefEff;
            if (currentSP > 0) {
                const pAmbMax = surfP + fromDepth / slpLocal;
                const ccr = getCCRFractions(currentO2, currentHe, currentSP, pAmbMax);
                n2f = ccr.n2;
                hefEff = ccr.he;
            } else {
                n2f = gasN2Fraction(currentO2, currentHe);
                hefEff = currentHe;
            }
            const savedTissues = tissues.map(t => ({ pN2: t.pN2, pHe: t.pHe }));
            const pAmbStart = surfP + fromDepth / slpLocal;
            return {
                surfP,
                slpLocal,
                savedTissues,
                inspN2Start: n2f * (pAmbStart - ppH2O),
                inspHeStart: hefEff * (pAmbStart - ppH2O),
                rN2: n2f * (-ascentRate / slpLocal),
                rHe: hefEff * (-ascentRate / slpLocal)
            };
        }
        function projectAscentTissuesAtDepth(projection, fromDepth, depth) {
            const t = (fromDepth - depth) / ascentRate;
            return projection.savedTissues.map((saved, i) => {
                const kN2 = Math.LN2 / ZHL16C_N2[i].ht;
                const kHe = Math.LN2 / ZHL16C_He[i].ht;
                return {
                    pN2: projection.inspN2Start + projection.rN2 * (t - 1 / kN2)
                        - (projection.inspN2Start - saved.pN2 - projection.rN2 / kN2) * Math.exp(-kN2 * t),
                    pHe: projection.inspHeStart + projection.rHe * (t - 1 / kHe)
                        - (projection.inspHeStart - saved.pHe - projection.rHe / kHe) * Math.exp(-kHe * t)
                };
            });
        }
        function findAscentStartDepth(fromDepth, toDepth, criterion) {
            const projection = buildAscentProjection(fromDepth);
            const minDepth = Math.max(toDepth, 0);
            const depthStep = criterion === 'supersaturation' ? 0.1 : 0.5;
            for (let d = fromDepth; d >= minDepth; d -= depthStep) {
                const projected = projectAscentTissuesAtDepth(projection, fromDepth, d);
                if (criterion === 'supersaturation') {
                    const pAmb = projection.surfP + d / projection.slpLocal;
                    if (projected.some(t => t.pN2 + t.pHe > pAmb)) {
                        return Math.ceil(d / stepSize) * stepSize;
                    }
                    continue;
                }
                const ceiling = getCeiling(projected, settings, settings.gfLo, settings.gfHi, fromDepth);
                if (ceiling >= d - 1e-9) {
                    return Math.ceil(d / stepSize) * stepSize;
                }
            }
            return 0;
        }
        function performDecoAscent(fromDepth, toDepth) {
            const rawCeiling = getCeiling(tissues, settings, settings.gfLo, settings.gfHi, fromDepth);
            const phaseGFRefDepth = findAscentStartDepth(fromDepth, toDepth, 'required-deco');
            const phaseSupersatStart = findAscentStartDepth(fromDepth, toDepth, 'supersaturation');
            if (phaseSupersatStart > decoZoneStart) decoZoneStart = phaseSupersatStart;
            let firstStopDepth = ((toDepth === 0)
                ? Math.ceil(rawCeiling / stepSize)
                : Math.floor(rawCeiling / stepSize)) * stepSize;
            if (firstStopDoubleStep && firstStopDepth > lastStop) {
                const doubleStep = stepSize * 2;
                firstStopDepth = Math.ceil(rawCeiling / doubleStep) * doubleStep;
            }
            if (firstStopDepth >= fromDepth) firstStopDepth = fromDepth - stepSize;
            const effectiveLastStop = (toDepth > 0) ? Math.max(toDepth, lastStop) : lastStop;
            if (firstStopDepth < effectiveLastStop) firstStopDepth = effectiveLastStop;
            if (rawCeiling <= 0 || firstStopDepth < effectiveLastStop) {
                const ascTime = loadTissuesLinearDepthChange(
                    tissues, fromDepth, toDepth, ascentRate, currentO2, currentHe, settings, currentSP
                );
                runtime += ascTime;
                totalOTU += calculateOTUDepthChange(fromDepth, toDepth, ascentRate, currentO2, settings);
                totalCNS += calculateCNSDepthChange(fromDepth, toDepth, ascentRate, currentO2, settings);
                plan.push({
                    type: 'ascent',
                    startDepth: fromDepth,
                    endDepth: toDepth,
                    time: Math.round(ascTime * 10) / 10,
                    runtime: Math.round(runtime * 10) / 10,
                    gas: currentGasLabel,
                    o2: Math.round(currentO2 * 100),
                    he: Math.round(currentHe * 100)
                });
                return toDepth;
            }
            if (!globalGFRefDepth) {
                globalGFRefDepth = Math.max(firstStopDepth, phaseGFRefDepth || 0);
            }
            const ascTime1 = loadTissuesLinearDepthChange(
                tissues, fromDepth, firstStopDepth, ascentRate, currentO2, currentHe, settings, currentSP
            );
            runtime += ascTime1;
            totalOTU += calculateOTUDepthChange(fromDepth, firstStopDepth, ascentRate, currentO2, settings);
            totalCNS += calculateCNSDepthChange(fromDepth, firstStopDepth, ascentRate, currentO2, settings);
            plan.push({
                type: 'ascent',
                startDepth: fromDepth,
                endDepth: firstStopDepth,
                time: Math.round(ascTime1 * 10) / 10,
                runtime: Math.round(runtime * 10) / 10,
                gas: currentGasLabel,
                o2: Math.round(currentO2 * 100),
                he: Math.round(currentHe * 100)
            });
            let stopDepth = firstStopDepth;
            let maxIter = 500;
            let isFirstDecoStop = true;
            const gfRefDepth = globalGFRefDepth || Math.max(firstStopDepth, phaseGFRefDepth || 0);
            let prevStopGas = currentGasLabel;
            while (stopDepth >= effectiveLastStop && maxIter > 0) {
                maxIter--;
                const nextStop = (stopDepth <= effectiveLastStop) ? (toDepth > 0 ? toDepth : 0) : stopDepth - stepSize;
                let transitTime = 0;
                if (!isFirstDecoStop) {
                    const prevStop = stopDepth + stepSize;
                    transitTime = stepSize / decoAscentRate;
                    loadTissuesLinearDepthChange(
                        tissues, prevStop, stopDepth, decoAscentRate, currentO2, currentHe, settings, currentSP
                    );
                    runtime += transitTime;
                    totalOTU += calculateOTUDepthChange(prevStop, stopDepth, decoAscentRate, currentO2, settings);
                    totalCNS += calculateCNSDepthChange(prevStop, stopDepth, decoAscentRate, currentO2, settings);
                }
                if (stopDepth === toDepth && toDepth > 0) {
                    break;
                }
                const decoGas = selectDecoGas(stopDepth, normalizedDecoGases, ppO2Deco, settings);
                if (decoGas) {
                    const pAmbHere = getAmbientPressure(stopDepth, settings);
                    const ocPpO2 = decoGas.o2 * pAmbHere;
                    const ccrPpO2 = currentSP > 0 ? Math.min(currentSP, pAmbHere) : 0;
                    if (decoGas.o2 > currentO2 || (currentSP > 0 && ocPpO2 > ccrPpO2)) {
                        currentO2 = decoGas.o2;
                        currentHe = decoGas.he;
                        currentGasLabel = decoGas.label;
                        currentSP = 0;
                        // Load tissues during gas switch — previously instantaneous (cosmetic only).
                        // This makes deco plan account for saturation during mix change time.
                        const gct = settings.gasChangeTime || 0;
                        if (gct > 0) {
                            loadTissuesConstantDepth(tissues, stopDepth, gct, currentO2, currentHe, settings, currentSP);
                            runtime += gct;
                            const pAmbGC = getAmbientPressure(stopDepth, settings);
                            const ppO2GC = currentO2 * pAmbGC;
                            totalOTU += calculateOTU(ppO2GC, gct);
                            totalCNS += calculateCNS(ppO2GC, gct);
                            plan.push({
                                type: 'gas_change',
                                depth: stopDepth,
                                time: gct,
                                runtime: Math.round(runtime * 10) / 10,
                                gas: currentGasLabel,
                                o2: Math.round(currentO2 * 100),
                                he: Math.round(currentHe * 100)
                            });
                        }
                    }
                }
                const isFirstStop = (stopDepth === firstStopDepth);
                const increment = isFirstStop ? (1 / 60) : minStopTime;
                let rawStopTime = 0;
                while (!isClearToAscend(tissues, nextStop, gfRefDepth, settings) && rawStopTime < 999) {
                    loadTissuesConstantDepth(tissues, stopDepth, increment, currentO2, currentHe, settings, currentSP);
                    rawStopTime += increment;
                }
                let actualStopTime;
                const grid = Math.max(minStopTime, 1 / 60);
                if (isFirstStop) {
                    const rtAfterAscent = runtime;
                    const ceilGrid = Math.ceil(rtAfterAscent / grid) * grid;
                    const minFirstStop = ceilGrid - rtAfterAscent;
                    const rawRounded = Math.round(rawStopTime * 60) / 60;
                    actualStopTime = Math.max(rawRounded, Math.round(minFirstStop * 60) / 60);
                    if (actualStopTime < 1 / 60) actualStopTime = 1 / 60;
                    const extraFirst = actualStopTime - rawStopTime;
                    if (extraFirst > 0.001) {
                        loadTissuesConstantDepth(tissues, stopDepth, extraFirst, currentO2, currentHe, settings, currentSP);
                    }
                } else {
                    const total = transitTime + rawStopTime;
                    const totalAtLevel = Math.max(grid, Math.ceil(total / grid) * grid);
                    actualStopTime = totalAtLevel - transitTime;
                    const extraTime = actualStopTime - rawStopTime;
                    if (extraTime > 0.001) {
                        loadTissuesConstantDepth(tissues, stopDepth, extraTime, currentO2, currentHe, settings, currentSP);
                    }
                }
                if (settings.extendedStops) {
                    const deepMin = settings.extStopDeep || 0;
                    const shallowMin = settings.extStopShallow || 0;
                    const boundary = settings.metric ? 30 : 100;
                    const isMixChange = currentGasLabel !== prevStopGas;
                    let apply = settings.extendAllMix || isMixChange;
                    if (apply && settings.extendO2Window && !settings.extendAllMix) {
                        const curO2pct = Math.round(currentO2 * 100);
                        const prevO2pct = parseInt((prevStopGas || '0/0').split('/')[0]) || 0;
                        if (curO2pct <= prevO2pct) apply = false;
                    }
                    if (apply) {
                        const extTime = stopDepth > boundary ? deepMin : shallowMin;
                        if (extTime > 0) {
                            const addExtra = settings.extendAdd
                                ? extTime
                                : Math.max(0, extTime - actualStopTime);
                            if (addExtra > 0) {
                                loadTissuesConstantDepth(tissues, stopDepth, addExtra, currentO2, currentHe, settings, currentSP);
                                actualStopTime += addExtra;
                            }
                        }
                    }
                }
                runtime += actualStopTime;
                const pAmb = getAmbientPressure(stopDepth, settings);
                const ppO2 = currentSP > 0 ? Math.min(currentSP, pAmb) : currentO2 * pAmb;
                totalOTU += calculateOTU(ppO2, actualStopTime);
                totalCNS += calculateCNS(ppO2, actualStopTime);
                plan.push({
                    type: 'stop',
                    depth: stopDepth,
                    time: actualStopTime,
                    runtime: Math.round(runtime * 10) / 10,
                    gas: currentGasLabel,
                    o2: Math.round(currentO2 * 100),
                    he: Math.round(currentHe * 100)
                });
                prevStopGas = currentGasLabel;
                isFirstDecoStop = false;
                if (stopDepth <= effectiveLastStop) break;
                stopDepth = nextStop;
                if (stopDepth < effectiveLastStop) stopDepth = effectiveLastStop;
            }
            if (toDepth === 0 && lastStop > 0) {
                loadTissuesLinearDepthChange(
                    tissues, lastStop, 0, surfaceAscentRate, currentO2, currentHe, settings, currentSP
                );
                totalOTU += calculateOTUDepthChange(lastStop, 0, surfaceAscentRate, currentO2, settings);
                totalCNS += calculateCNSDepthChange(lastStop, 0, surfaceAscentRate, currentO2, settings);
            }
            return toDepth;
        }
        for (let levelIdx = 0; levelIdx < levels.length; levelIdx++) {
            const level = levels[levelIdx];
            const depth = level.depth;
            const time = level.time;
            const o2Frac = level.o2 / 100;
            const heFrac = level.he / 100;
            const sp = (isCCR && !level.oc && !level.scr) ? (level.setpoint || 1.3) : 0;
            currentO2 = o2Frac;
            currentHe = heFrac;
            currentGasLabel = `${level.o2}/${level.he}`;
            currentSP = sp;
            if (depth > currentDepth) {
                const descTime = loadTissuesLinearDepthChange(
                    tissues, currentDepth, depth, descentRate, o2Frac, heFrac, settings, sp
                );
                runtime += descTime;
                totalOTU += calculateOTUDepthChange(currentDepth, depth, descentRate, o2Frac, settings);
                totalCNS += calculateCNSDepthChange(currentDepth, depth, descentRate, o2Frac, settings);
                plan.push({
                    type: 'descent',
                    startDepth: currentDepth,
                    endDepth: depth,
                    time: Math.round(descTime * 10) / 10,
                    runtime: Math.round(runtime * 10) / 10,
                    gas: currentGasLabel,
                    o2: level.o2,
                    he: level.he
                });
            } else if (depth < currentDepth) {
                currentDepth = performDecoAscent(currentDepth, depth);
                currentO2 = o2Frac;
                currentHe = heFrac;
                currentGasLabel = `${level.o2}/${level.he}`;
                currentSP = sp;
            }
            const descTimeFromLevel = (depth > currentDepth)
                ? (depth - currentDepth) / descentRate
                : 0;
            const bottomTime = Math.max(0, time - descTimeFromLevel);
            const bottomTimeDisplay = Math.floor(bottomTime);
            if (bottomTime > 0) {
                loadTissuesConstantDepth(tissues, depth, bottomTime, o2Frac, heFrac, settings, sp);
                runtime += bottomTime;
                const pAmb = getAmbientPressure(depth, settings);
                const ppO2Bottom = sp > 0 ? Math.min(sp, pAmb) : o2Frac * pAmb;
                totalOTU += calculateOTU(ppO2Bottom, bottomTime);
                totalCNS += calculateCNS(ppO2Bottom, bottomTime);
                plan.push({
                    type: 'bottom',
                    depth: depth,
                    time: bottomTimeDisplay,
                    runtime: Math.round(runtime * 10) / 10,
                    gas: currentGasLabel,
                    o2: level.o2,
                    he: level.he
                });
            }
            currentDepth = depth;
        }
        const maxDepth = Math.max(...levels.map(l => l.depth));
        const lastLevel = levels[levels.length - 1];
        currentO2 = lastLevel.o2 / 100;
        currentHe = lastLevel.he / 100;
        currentGasLabel = `${lastLevel.o2}/${lastLevel.he}`;
        const lastSP = (isCCR && !lastLevel.oc && !lastLevel.scr) ? (lastLevel.setpoint || 1.3) : 0;
        currentSP = lastSP;
        performDecoAscent(currentDepth, 0);
        plan.push({
            type: 'surface',
            depth: 0,
            time: 0,
            runtime: Math.round(runtime * 10) / 10,
            gas: currentGasLabel
        });
        return buildResult(plan, runtime, totalOTU, totalCNS, settings, decoZoneStart, tissues);
    }
    function buildResult(plan, runtime, totalOTU, totalCNS, settings, decoZoneStart, tissues) {
        const depthUnit = settings.metric ? 'm' : 'ft';
        return {
            plan: plan,
            totalRuntime: Math.round(runtime),
            totalOTU: Math.round(totalOTU),
            totalCNS: Math.round(totalCNS * 100) / 100,
            depthUnit: depthUnit,
            stops: plan.filter(s => s.type === 'stop'),
            decoZoneStart: decoZoneStart || 0,
            finalTissues: tissues ? tissues.map(t => ({ pN2: t.pN2, pHe: t.pHe })) : null,
            error: null
        };
    }
    function calculateOTU(ppO2, time) {
        if (ppO2 <= 0.5) return 0;
        return time * Math.pow((ppO2 - 0.5) / 0.5, 0.8333);
    }
    function calculateOTUDepthChange(startDepth, endDepth, rate, o2Frac, settings) {
        const totalTime = Math.abs(endDepth - startDepth) / rate;
        if (totalTime <= 0) return 0;
        const dt = 1 / 60; 
        let otu = 0;
        for (let t = 0; t < totalTime; t += dt) {
            const d = startDepth + (endDepth - startDepth) * (t / totalTime);
            const pAmb = getAmbientPressure(d, settings);
            const ppO2 = o2Frac * pAmb;
            if (ppO2 > 0.5) otu += dt * Math.pow((ppO2 - 0.5) / 0.5, 0.8333);
        }
        return otu;
    }
    const CNS_RATE_ANDROID = [
        0.120, 0.122, 0.125, 0.127, 0.129, 0.130, 0.132, 0.134, 0.135, 0.138, 
        0.140, 0.140, 0.140, 0.145, 0.150, 0.155, 0.160, 0.165, 0.170, 0.175, 
        0.180, 0.180, 0.180, 0.185, 0.185, 0.190, 0.200, 0.200, 0.210, 0.210, 
        0.220, 0.225, 0.230, 0.235, 0.240, 0.245, 0.250, 0.255, 0.260, 0.270, 
        0.280, 0.290, 0.290, 0.300, 0.300, 0.305, 0.310, 0.315, 0.320, 0.325, 
        0.330, 0.340, 0.350, 0.355, 0.360, 0.370, 0.380, 0.385, 0.400, 0.410, 
        0.420, 0.430, 0.435, 0.4375, 0.439, 0.440, 0.445, 0.455, 0.460, 0.465, 
        0.470, 0.475, 0.480, 0.495, 0.510, 0.515, 0.520, 0.530, 0.540, 0.550, 
        0.560, 0.565, 0.570, 0.590, 0.600, 0.610, 0.620, 0.630, 0.640, 0.645, 
        0.650, 0.660, 0.680, 0.695, 0.710, 0.720, 0.740, 0.770, 0.780, 0.800, 
        0.830, 0.880, 0.930, 0.980, 1.040, 1.110, 1.190, 1.320, 1.470, 1.800, 
        2.220, 2.500, 3.000, 3.500, 4.000, 4.500, 5.000, 6.000, 8.000, 9.000, 
        10.000, 11.000, 12.500, 15.000, 20.000, 21.000, 22.000, 25.000, 31.250, 40.000, 
        50.000                                                                 
    ];
    function getCNSRate(ppO2) {
        if (ppO2 < 0.50) return 0;
        if (ppO2 > 2.00) return 100.0;   
        if (ppO2 > 1.80) return 50.0;    
        const idx = Math.max(50, Math.min(180, Math.round(ppO2 * 100))) - 50;
        return CNS_RATE_ANDROID[idx];
    }
    function getCNSLimit(ppO2) {
        if (ppO2 < 0.50) return Infinity;
        const rate = getCNSRate(ppO2);
        if (rate <= 0) return Infinity;
        return 100.0 / rate;
    }
    function calculateCNS(ppO2, time) {
        if (ppO2 < 0.50) return 0;
        return time * getCNSRate(ppO2);
    }
    function calculateCNSDepthChange(startDepth, endDepth, rate, o2Frac, settings) {
        const totalTime = Math.abs(endDepth - startDepth) / rate;
        if (totalTime <= 0) return 0;
        const dt = 1 / 60;
        let cns = 0;
        for (let t = 0; t < totalTime; t += dt) {
            const d = startDepth + (endDepth - startDepth) * (t / totalTime);
            const pAmb = getAmbientPressure(d, settings);
            const ppO2 = o2Frac * pAmb;
            if (ppO2 > 0.5) {
                const limit = getCNSLimit(ppO2);
                if (isFinite(limit)) cns += (dt / limit) * 100;
            }
        }
        return cns;
    }
    function applySurfaceInterval(tissues, intervalMinutes, settings) {
        const pAmb = getSurfacePressure(settings);
        const ppH2O = WATER_VAPOR_PRESSURE;
        const inspN2 = 0.7902 * (pAmb - ppH2O);
        for (let i = 0; i < NUM_COMPARTMENTS; i++) {
            tissues[i].pN2 = haldaneEquation(tissues[i].pN2, inspN2, ZHL16C_N2[i].ht, intervalMinutes);
            tissues[i].pHe = haldaneEquation(tissues[i].pHe, 0, ZHL16C_He[i].ht, intervalMinutes);
        }
    }
    return {
        calculate,
        createDefaultSettings,
        createTissueState,
        applySurfaceInterval,
        getAmbientPressure,
        getDepthPressure,
        getSurfacePressure,
        getCeiling,
        calculateOTU,
        calculateCNS,
        getCCRFractions,
        gasN2Fraction,
        loadTissuesConstantDepth,
        loadTissuesLinearDepthChange,
        WATER_VAPOR_PRESSURE,
        ZHL16C_N2,
        ZHL16C_He,
        NUM_COMPARTMENTS,
        SLP_SW_M,
        SLP_FW_M,
        SLP_SW_F,
        SLP_FW_F
    };
})();
if (typeof module !== 'undefined') module.exports = DecoEngine;
