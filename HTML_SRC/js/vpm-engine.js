const VPMEngine = (() => {
    const ZHL16C_N2 = [
        { ht: 5.0,    a: 1.2599, b: 0.5050 },
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
        { ht: 1.88,   a: 1.7424, b: 0.4245 },
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
    const NC = 16; 
    const GAMMA = 0.0179;            
    const GAMMA_C = 0.257;           
    const INITIAL_RADIUS_N2 = 0.55e-6; 
    const INITIAL_RADIUS_He = 0.45e-6; 
    const REGEN_TIME = 20160.0;      
    const WATER_VAPOR_PRESSURE = 0.0493; 
    const CONSTANT_PRESSURE_OTHER_GASES = (102.0 / 760.0) * 1.01325; 
    const CRIT_VOLUME_LAMBDA_FSW_MIN = 7500.0;
    function twoGammaOverR(gamma, r) {
        return (2.0 * gamma / r) / 1.0e5; 
    }
    const SLP_SW_M = 10.078;
    const SLP_FW_M = 10.337;
    const SLP_SW_F = 33.066;
    const SLP_FW_F = 33.914;
    function getSLP(settings) {
        if (settings.metric) {
            return settings.waterType === 0 ? SLP_SW_M : SLP_FW_M;
        }
        return settings.waterType === 0 ? SLP_SW_F : SLP_FW_F;
    }
    function getSurfacePressure(settings) {
        const alt = settings.altitude || 0;
        return 1.01325 * Math.exp(-alt / 8434);
    }
    function getAmbientPressure(depth, settings) {
        return getSurfacePressure(settings) + depth / getSLP(settings);
    }
    function depthFromPressure(pAmb, settings) {
        return (pAmb - getSurfacePressure(settings)) * getSLP(settings);
    }
    function createVPMState(settings) {
        const surfP = getSurfacePressure(settings);
        const ppH2O = WATER_VAPOR_PRESSURE;
        const inspiredN2 = 0.7902 * (surfP - ppH2O);
        const tissues = [];
        const critRadiiN2 = [];
        const critRadiiHe = [];
        const maxActualGradientN2 = [];
        const maxActualGradientHe = [];
        const maxCrushingPressureN2 = [];
        const maxCrushingPressureHe = [];
        const allowableGradientN2 = [];
        const allowableGradientHe = [];
        const decoGradientN2 = [];
        const decoGradientHe = [];
        const initialAllowableGradientN2 = [];
        const initialAllowableGradientHe = [];
        const adjustedCritRadiiN2 = [];
        const adjustedCritRadiiHe = [];
        const regeneratedRadiiN2 = [];
        const regeneratedRadiiHe = [];
        const adjustedCrushingPressureN2 = [];
        const adjustedCrushingPressureHe = [];
        const surfacePhaseVolumeTime = [];
        const lastPhaseVolumeTime = [];
        for (let i = 0; i < NC; i++) {
            tissues.push({ pN2: inspiredN2, pHe: 0 });
            critRadiiN2.push(INITIAL_RADIUS_N2);
            critRadiiHe.push(INITIAL_RADIUS_He);
            maxActualGradientN2.push(0);
            maxActualGradientHe.push(0);
            maxCrushingPressureN2.push(0);
            maxCrushingPressureHe.push(0);
            const gN2 = twoGammaOverR(GAMMA, INITIAL_RADIUS_N2)
                * (GAMMA_C - GAMMA) / GAMMA_C;
            const gHe = twoGammaOverR(GAMMA, INITIAL_RADIUS_He)
                * (GAMMA_C - GAMMA) / GAMMA_C;
            allowableGradientN2.push(gN2);
            allowableGradientHe.push(gHe);
            decoGradientN2.push(gN2);
            decoGradientHe.push(gHe);
            initialAllowableGradientN2.push(gN2);
            initialAllowableGradientHe.push(gHe);
            adjustedCritRadiiN2.push(INITIAL_RADIUS_N2);
            adjustedCritRadiiHe.push(INITIAL_RADIUS_He);
            regeneratedRadiiN2.push(INITIAL_RADIUS_N2);
            regeneratedRadiiHe.push(INITIAL_RADIUS_He);
            adjustedCrushingPressureN2.push(0);
            adjustedCrushingPressureHe.push(0);
            surfacePhaseVolumeTime.push(0);
            lastPhaseVolumeTime.push(0);
        }
        if (settings._preTissues && settings._preTissues.length === NC) {
            for (let i = 0; i < NC; i++) {
                tissues[i].pN2 = settings._preTissues[i].pN2;
                tissues[i].pHe = settings._preTissues[i].pHe;
            }
            if (settings._surfaceInterval > 0) {
                const inspN2 = 0.7902 * (surfP - ppH2O);
                for (let i = 0; i < NC; i++) {
                    const kN2 = Math.LN2 / ZHL16C_N2[i].ht;
                    const kHe = Math.LN2 / ZHL16C_He[i].ht;
                    tissues[i].pN2 = inspN2 + (tissues[i].pN2 - inspN2) * Math.exp(-kN2 * settings._surfaceInterval);
                    tissues[i].pHe = tissues[i].pHe * Math.exp(-kHe * settings._surfaceInterval);
                }
            }
        }
        return {
            tissues,
            critRadiiN2,
            critRadiiHe,
            maxActualGradientN2,
            maxActualGradientHe,
            maxCrushingPressureN2,
            maxCrushingPressureHe,
            allowableGradientN2,
            allowableGradientHe,
            decoGradientN2,
            decoGradientHe,
            initialAllowableGradientN2,
            initialAllowableGradientHe,
            adjustedCritRadiiN2,
            adjustedCritRadiiHe,
            regeneratedRadiiN2,
            regeneratedRadiiHe,
            adjustedCrushingPressureN2,
            adjustedCrushingPressureHe,
            surfacePhaseVolumeTime,
            lastPhaseVolumeTime,
            maxDepth: 0,
            maxAmbientPressure: surfP,
            firstStopDepth: 0,
            useDecoGradients: false
        };
    }
    function cloneVPMState(baseState) {
        return {
            ...baseState,
            tissues: cloneTissues(baseState.tissues),
            critRadiiN2: baseState.critRadiiN2.slice(),
            critRadiiHe: baseState.critRadiiHe.slice(),
            maxActualGradientN2: baseState.maxActualGradientN2.slice(),
            maxActualGradientHe: baseState.maxActualGradientHe.slice(),
            maxCrushingPressureN2: baseState.maxCrushingPressureN2.slice(),
            maxCrushingPressureHe: baseState.maxCrushingPressureHe.slice(),
            allowableGradientN2: baseState.allowableGradientN2.slice(),
            allowableGradientHe: baseState.allowableGradientHe.slice(),
            decoGradientN2: baseState.decoGradientN2.slice(),
            decoGradientHe: baseState.decoGradientHe.slice(),
            initialAllowableGradientN2: baseState.initialAllowableGradientN2.slice(),
            initialAllowableGradientHe: baseState.initialAllowableGradientHe.slice(),
            adjustedCritRadiiN2: baseState.adjustedCritRadiiN2.slice(),
            adjustedCritRadiiHe: baseState.adjustedCritRadiiHe.slice(),
            regeneratedRadiiN2: baseState.regeneratedRadiiN2.slice(),
            regeneratedRadiiHe: baseState.regeneratedRadiiHe.slice(),
            adjustedCrushingPressureN2: baseState.adjustedCrushingPressureN2.slice(),
            adjustedCrushingPressureHe: baseState.adjustedCrushingPressureHe.slice(),
            surfacePhaseVolumeTime: baseState.surfacePhaseVolumeTime.slice(),
            lastPhaseVolumeTime: baseState.lastPhaseVolumeTime.slice()
        };
    }
    function haldane(pStart, pInspired, ht, time) {
        const k = Math.LN2 / ht;
        return pStart + (pInspired - pStart) * (1 - Math.exp(-k * time));
    }
    function schreiner(pInspiredStart, rate, time, ht, pStart) {
        const k = Math.LN2 / ht;
        return pInspiredStart + rate * (time - 1 / k)
            - (pInspiredStart - pStart - rate / k) * Math.exp(-k * time);
    }
    function cloneTissues(tissues) {
        return tissues.map(t => ({ pN2: t.pN2, pHe: t.pHe }));
    }
    function restoreTissues(state, tissues) {
        for (let i = 0; i < NC; i++) {
            state.tissues[i].pN2 = tissues[i].pN2;
            state.tissues[i].pHe = tissues[i].pHe;
        }
    }
    function getInertFractions(o2Frac, heFrac, pAmb, setpoint) {
        if (setpoint && setpoint > 0) {
            const ccr = DecoEngine.getCCRFractions(o2Frac, heFrac, setpoint, pAmb);
            return { n2: ccr.n2, he: ccr.he };
        }
        return { n2: 1 - o2Frac - heFrac, he: heFrac };
    }
    function getWeightedAllowableGradient(state, i, pHe, pN2, useDecoGradients) {
        const gradHe = useDecoGradients ? state.decoGradientHe[i] : state.allowableGradientHe[i];
        const gradN2 = useDecoGradients ? state.decoGradientN2[i] : state.allowableGradientN2[i];
        const gasLoading = pHe + pN2;
        if (gasLoading > 0) {
            return (gradHe * pHe + gradN2 * pN2) / gasLoading;
        }
        return Math.min(gradHe, gradN2);
    }
    function loadTissuesConstant(state, depth, time, o2Frac, heFrac, settings, setpoint) {
        const pAmb = getAmbientPressure(depth, settings);
        const ppH2O = WATER_VAPOR_PRESSURE;
        let n2Frac, heFracEff;
        if (setpoint && setpoint > 0) {
            const ccr = DecoEngine.getCCRFractions(o2Frac, heFrac, setpoint, pAmb);
            n2Frac = ccr.n2;
            heFracEff = ccr.he;
        } else {
            n2Frac = 1 - o2Frac - heFrac;
            heFracEff = heFrac;
        }
        const inspN2 = n2Frac * (pAmb - ppH2O);
        const inspHe = heFracEff * (pAmb - ppH2O);
        if (pAmb > state.maxAmbientPressure) {
            state.maxAmbientPressure = pAmb;
            state.maxDepth = depth;
        }
        for (let i = 0; i < NC; i++) {
            state.tissues[i].pN2 = haldane(state.tissues[i].pN2, inspN2, ZHL16C_N2[i].ht, time);
            state.tissues[i].pHe = haldane(state.tissues[i].pHe, inspHe, ZHL16C_He[i].ht, time);
        }
    }
    function loadTissuesLinear(state, startDepth, endDepth, rate, o2Frac, heFrac, settings, setpoint) {
        const time = Math.abs(endDepth - startDepth) / rate;
        if (time <= 0) return 0;
        const ppH2O = WATER_VAPOR_PRESSURE;
        const slp = settings.metric ? SLP_SW_M : SLP_SW_F;
        const surfP = getSurfacePressure(settings);
        const maxP = Math.max(getAmbientPressure(startDepth, settings), getAmbientPressure(endDepth, settings));
        if (maxP > state.maxAmbientPressure) {
            state.maxAmbientPressure = maxP;
            state.maxDepth = Math.max(startDepth, endDepth);
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
                const ccr = DecoEngine.getCCRFractions(o2Frac, heFrac, setpoint, pAmbMid);
                const depthRate = (d1 - d0) / dt;
                const pressureRate = depthRate / slp;
                const pAmbStart = surfP + d0 / slp;
                const inspN2Start = ccr.n2 * (pAmbStart - ppH2O);
                const inspHeStart = ccr.he * (pAmbStart - ppH2O);
                const rN2 = ccr.n2 * pressureRate;
                const rHe = ccr.he * pressureRate;
                for (let i = 0; i < NC; i++) {
                    const kN2 = Math.LN2 / ZHL16C_N2[i].ht;
                    const kHe = Math.LN2 / ZHL16C_He[i].ht;
                    state.tissues[i].pN2 = inspN2Start + rN2 * (dt - 1/kN2)
                        - (inspN2Start - state.tissues[i].pN2 - rN2/kN2) * Math.exp(-kN2 * dt);
                    state.tissues[i].pHe = inspHeStart + rHe * (dt - 1/kHe)
                        - (inspHeStart - state.tissues[i].pHe - rHe/kHe) * Math.exp(-kHe * dt);
                }
            }
        } else {
            const n2Frac = 1 - o2Frac - heFrac;
            const depthRate = (endDepth - startDepth) / time;
            const pressureRate = depthRate / slp;
            const pAmbStart = surfP + startDepth / slp;
            const inspN2Start = n2Frac * (pAmbStart - ppH2O);
            const inspHeStart = heFrac * (pAmbStart - ppH2O);
            const rN2 = n2Frac * pressureRate;
            const rHe = heFrac * pressureRate;
            for (let i = 0; i < NC; i++) {
                const kN2 = Math.LN2 / ZHL16C_N2[i].ht;
                const kHe = Math.LN2 / ZHL16C_He[i].ht;
                state.tissues[i].pN2 = inspN2Start + rN2 * (time - 1/kN2)
                    - (inspN2Start - state.tissues[i].pN2 - rN2/kN2) * Math.exp(-kN2 * time);
                state.tissues[i].pHe = inspHeStart + rHe * (time - 1/kHe)
                    - (inspHeStart - state.tissues[i].pHe - rHe/kHe) * Math.exp(-kHe * time);
            }
        }
        return time;
    }
    function calcCrushing(state, settings) {
        const surfP = getSurfacePressure(settings);
        const pMaxAmb = state.maxAmbientPressure;
        const pCrush = Math.max(0, pMaxAmb - surfP);
        for (let i = 0; i < NC; i++) {
            state.maxCrushingPressureN2[i] = Math.max(state.maxCrushingPressureN2[i], pCrush);
            state.maxCrushingPressureHe[i] = Math.max(state.maxCrushingPressureHe[i], pCrush);
        }
    }
    function calcCrushRadius(r0, pCrush) {
        const twoGammaC = (2.0 * GAMMA_C / r0) / 1.0e5; 
        if (twoGammaC + pCrush <= 0) return r0;
        return r0 * twoGammaC / (twoGammaC + pCrush);
    }
    function applyNuclearRegeneration(state, diveTime) {
        const regenFactor = Math.exp(-diveTime / REGEN_TIME);
        for (let i = 0; i < NC; i++) {
            const crushN2 = state.maxCrushingPressureN2[i];
            const crushHe = state.maxCrushingPressureHe[i];
            const baseN2 = state.adjustedCritRadiiN2[i];
            const baseHe = state.adjustedCritRadiiHe[i];
            const endingRadiusN2 = calcCrushRadius(baseN2, crushN2);
            const endingRadiusHe = calcCrushRadius(baseHe, crushHe);
            const regeneratedN2 = baseN2 + (endingRadiusN2 - baseN2) * regenFactor;
            const regeneratedHe = baseHe + (endingRadiusHe - baseHe) * regenFactor;
            state.regeneratedRadiiN2[i] = regeneratedN2;
            state.regeneratedRadiiHe[i] = regeneratedHe;
            const ratioN2Den = regeneratedN2 * (baseN2 - endingRadiusN2);
            const ratioHeDen = regeneratedHe * (baseHe - endingRadiusHe);
            const ratioN2 = Math.abs(ratioN2Den) > 1e-18
                ? (endingRadiusN2 * (baseN2 - regeneratedN2)) / ratioN2Den
                : 1;
            const ratioHe = Math.abs(ratioHeDen) > 1e-18
                ? (endingRadiusHe * (baseHe - regeneratedHe)) / ratioHeDen
                : 1;
            state.adjustedCrushingPressureN2[i] = crushN2 * ratioN2;
            state.adjustedCrushingPressureHe[i] = crushHe * ratioHe;
        }
    }
    function calcSurfacePhaseVolumeTime(state, settings) {
        const surfP = getSurfacePressure(settings);
        const surfaceInspiredN2 = 0.79 * (surfP - WATER_VAPOR_PRESSURE);
        for (let i = 0; i < NC; i++) {
            const pHe = state.tissues[i].pHe;
            const pN2 = state.tissues[i].pN2;
            if (pN2 > surfaceInspiredN2) {
                state.surfacePhaseVolumeTime[i] = (
                    pHe / (Math.LN2 / ZHL16C_He[i].ht)
                    + (pN2 - surfaceInspiredN2) / (Math.LN2 / ZHL16C_N2[i].ht)
                ) / (pHe + pN2 - surfaceInspiredN2);
            } else if (pN2 <= surfaceInspiredN2 && pHe + pN2 >= surfaceInspiredN2 && pHe > 0) {
                const kHe = Math.LN2 / ZHL16C_He[i].ht;
                const kN2 = Math.LN2 / ZHL16C_N2[i].ht;
                const decayTime = Math.log((surfaceInspiredN2 - pN2) / pHe) / (kN2 - kHe);
                const integral = pHe / kHe * (1 - Math.exp(-kHe * decayTime))
                    + (pN2 - surfaceInspiredN2) / kN2 * (1 - Math.exp(-kN2 * decayTime));
                state.surfacePhaseVolumeTime[i] = integral / (pHe + pN2 - surfaceInspiredN2);
            } else {
                state.surfacePhaseVolumeTime[i] = 0;
            }
        }
    }
    function calcCriticalVolume(state, decoPhaseVolumeTime) {
        const lambdaPaMin = (CRIT_VOLUME_LAMBDA_FSW_MIN / 32.0) * 101325.0;
        for (let i = 0; i < NC; i++) {
            const phaseVolumeTime = decoPhaseVolumeTime + state.surfacePhaseVolumeTime[i];
            if (phaseVolumeTime <= 0) continue;
            const adjCrushHePa = state.adjustedCrushingPressureHe[i] * 1.0e5;
            const initAllowHePa = state.initialAllowableGradientHe[i] * 1.0e5;
            const bHe = initAllowHePa + (lambdaPaMin * GAMMA) / (GAMMA_C * phaseVolumeTime);
            const cHe = (GAMMA * GAMMA * lambdaPaMin * adjCrushHePa) / (GAMMA_C * GAMMA_C * phaseVolumeTime);
            const discHe = Math.max(0, bHe * bHe - 4.0 * cHe);
            state.allowableGradientHe[i] = (bHe + Math.sqrt(discHe)) / 2.0 / 1.0e5;
            const adjCrushN2Pa = state.adjustedCrushingPressureN2[i] * 1.0e5;
            const initAllowN2Pa = state.initialAllowableGradientN2[i] * 1.0e5;
            const bN2 = initAllowN2Pa + (lambdaPaMin * GAMMA) / (GAMMA_C * phaseVolumeTime);
            const cN2 = (GAMMA * GAMMA * lambdaPaMin * adjCrushN2Pa) / (GAMMA_C * GAMMA_C * phaseVolumeTime);
            const discN2 = Math.max(0, bN2 * bN2 - 4.0 * cN2);
            state.allowableGradientN2[i] = (bN2 + Math.sqrt(discN2)) / 2.0 / 1.0e5;
        }
    }
    function calcStartOfDecoZone(state, startingDepth, ascentRate, o2Frac, heFrac, settings, setpoint) {
        const slp = settings.metric ? SLP_SW_M : SLP_SW_F;
        const surfP = getSurfacePressure(settings);
        const startAmb = getAmbientPressure(startingDepth, settings);
        const fractions = getInertFractions(o2Frac, heFrac, startAmb, setpoint);
        const pressureRate = -Math.abs(ascentRate) / slp;
        const inspiredHe0 = fractions.he * (startAmb - WATER_VAPOR_PRESSURE);
        const inspiredN20 = fractions.n2 * (startAmb - WATER_VAPOR_PRESSURE);
        const heRate = fractions.he * pressureRate;
        const n2Rate = fractions.n2 * pressureRate;
        const lowBound = 0;
        const highBound = Math.max(0, -startAmb / pressureRate);
        let depthStart = 0;
        for (let i = 0; i < NC; i++) {
            const pHe0 = state.tissues[i].pHe;
            const pN20 = state.tissues[i].pN2;
            const f0 = pHe0 + pN20 + CONSTANT_PRESSURE_OTHER_GASES - startAmb;
            const pHeHi = schreiner(inspiredHe0, heRate, highBound, ZHL16C_He[i].ht, pHe0);
            const pN2Hi = schreiner(inspiredN20, n2Rate, highBound, ZHL16C_N2[i].ht, pN20);
            const fHi = pHeHi + pN2Hi + CONSTANT_PRESSURE_OTHER_GASES;
            if (f0 * fHi >= 0) continue;
            let t = f0 < 0 ? lowBound : highBound;
            let diff = f0 < 0 ? highBound - lowBound : lowBound - highBound;
            for (let iter = 0; iter < 100; iter++) {
                diff *= 0.5;
                const midT = t + diff;
                const midHe = schreiner(inspiredHe0, heRate, midT, ZHL16C_He[i].ht, pHe0);
                const midN2 = schreiner(inspiredN20, n2Rate, midT, ZHL16C_N2[i].ht, pN20);
                const midAmb = startAmb + pressureRate * midT;
                const fMid = midHe + midN2 + CONSTANT_PRESSURE_OTHER_GASES - midAmb;
                if (fMid <= 0) t = midT;
                if (Math.abs(diff) < 1e-3 || fMid === 0) break;
            }
            const compartmentDepth = Math.max(0, (startAmb + pressureRate * t) - surfP) * slp;
            depthStart = Math.max(depthStart, compartmentDepth);
        }
        return depthStart;
    }
    function projectedAscent(state, startingDepth, ascentRate, stopDepth, stepSize, o2Frac, heFrac, settings, setpoint) {
        const slp = settings.metric ? SLP_SW_M : SLP_SW_F;
        const surfP = getSurfacePressure(settings);
        const startAmb = getAmbientPressure(startingDepth, settings);
        const fractions = getInertFractions(o2Frac, heFrac, startAmb, setpoint);
        const inspiredHe0 = fractions.he * (startAmb - WATER_VAPOR_PRESSURE);
        const inspiredN20 = fractions.n2 * (startAmb - WATER_VAPOR_PRESSURE);
        const pressureRate = -Math.abs(ascentRate) / slp;
        const heRate = fractions.he * pressureRate;
        const n2Rate = fractions.n2 * pressureRate;
        let candidateStop = stopDepth;
        // Guard: candidateStop must never exceed startingDepth (deeper than current position
        // means negative segmentTime in Schreiner → exponential overflow → infinite loop).
        while (candidateStop > 0 && candidateStop <= startingDepth) {
            const endAmb = getAmbientPressure(candidateStop, settings);
            const segmentTime = (endAmb - startAmb) / pressureRate;
            let violated = false;
            for (let i = 0; i < NC; i++) {
                const tempHe = schreiner(inspiredHe0, heRate, segmentTime, ZHL16C_He[i].ht, state.tissues[i].pHe);
                const tempN2 = schreiner(inspiredN20, n2Rate, segmentTime, ZHL16C_N2[i].ht, state.tissues[i].pN2);
                const allowGrad = getWeightedAllowableGradient(state, i, tempHe, tempN2, false);
                const allowableLoading = endAmb + allowGrad - CONSTANT_PRESSURE_OTHER_GASES;
                if (tempHe + tempN2 > allowableLoading) {
                    candidateStop += stepSize;
                    violated = true;
                    break;
                }
            }
            if (!violated) return candidateStop;
        }
        // All candidates up to startingDepth were violated: stay at current depth.
        return startingDepth;
    }
    const VPM_CRITICAL_RADIUS_FACTOR = [
        1.00, 
        1.05, 
        1.12, 
        1.22, 
        1.35, 
        1.50  
    ];
    function setCriticalRadiiForConservatism(state, conservatism) {
        const consIdx = Math.max(0, Math.min(5, Math.round(conservatism || 0)));
        const factor = VPM_CRITICAL_RADIUS_FACTOR[consIdx];
        const rN2 = INITIAL_RADIUS_N2 * factor;
        const rHe = INITIAL_RADIUS_He * factor;
        for (let i = 0; i < NC; i++) {
            state.critRadiiN2[i] = rN2;
            state.critRadiiHe[i] = rHe;
            state.adjustedCritRadiiN2[i] = rN2;
            state.adjustedCritRadiiHe[i] = rHe;
            state.regeneratedRadiiN2[i] = rN2;
            state.regeneratedRadiiHe[i] = rHe;
        }
    }
    function calcAllowableGradients(state, model, settings, conservatism) {
        for (let i = 0; i < NC; i++) {
            const rN2 = state.regeneratedRadiiN2[i];
            const baseGradN2 = twoGammaOverR(GAMMA, rN2)
                * (GAMMA_C - GAMMA) / GAMMA_C;
            const rHe = state.regeneratedRadiiHe[i];
            const baseGradHe = twoGammaOverR(GAMMA, rHe)
                * (GAMMA_C - GAMMA) / GAMMA_C;
            state.initialAllowableGradientN2[i] = baseGradN2;
            state.initialAllowableGradientHe[i] = baseGradHe;
            state.allowableGradientN2[i] = state.initialAllowableGradientN2[i];
            state.allowableGradientHe[i] = state.initialAllowableGradientHe[i];
            state.decoGradientN2[i] = state.allowableGradientN2[i];
            state.decoGradientHe[i] = state.allowableGradientHe[i];
        }
    }
    function solveBubbleRadius(a, b, c, lowBound, highBound) {
        let low = lowBound;
        let high = Math.max(highBound, lowBound);
        for (let iter = 0; iter < 80; iter++) {
            const mid = (low + high) * 0.5;
            const fMid = mid * (mid * (a * mid - b)) - c;
            if (Math.abs(fMid) < 1e-18 || Math.abs(high - low) < 1e-14) return mid;
            const fLow = low * (low * (a * low - b)) - c;
            if ((fLow <= 0 && fMid <= 0) || (fLow >= 0 && fMid >= 0)) {
                low = mid;
            } else {
                high = mid;
            }
        }
        return (low + high) * 0.5;
    }
    function boyleLawCompensation(state, firstStopDepth, decoStopDepth, stepSize, settings) {
        const surfP = getSurfacePressure(settings);
        const unitsFactor = settings.metric ? SLP_SW_M : SLP_SW_F;
        const firstStop = Math.max(0, firstStopDepth || state.firstStopDepth || 0);
        const currentStop = Math.max(0, decoStopDepth || firstStop);
        const nextStop = Math.max(0, currentStop - (stepSize || 0));
        const ambFirstPa = (surfP + firstStop / unitsFactor) * 101325.0;
        const ambNextPa = (surfP + nextStop / unitsFactor) * 101325.0;
        const safeAmbNextPa = Math.max(ambNextPa, 1.0);
        const rootFactor = Math.pow(Math.max(ambFirstPa / safeAmbNextPa, 1.0), 1.0 / 3.0);
        for (let i = 0; i < NC; i++) {
            const gradHePa = Math.max(1e-9, (state.allowableGradientHe[i] / unitsFactor) * 101325.0);
            const radiusHe = (2.0 * GAMMA) / gradHePa;
            const cHe = (ambFirstPa + (2.0 * GAMMA) / radiusHe) * radiusHe * radiusHe * radiusHe;
            const endRadiusHe = solveBubbleRadius(
                safeAmbNextPa,
                -2.0 * GAMMA,
                cHe,
                radiusHe,
                radiusHe * rootFactor
            );
            state.decoGradientHe[i] = ((2.0 * GAMMA) / endRadiusHe / 101325.0) * unitsFactor;
            const gradN2Pa = Math.max(1e-9, (state.allowableGradientN2[i] / unitsFactor) * 101325.0);
            const radiusN2 = (2.0 * GAMMA) / gradN2Pa;
            const cN2 = (ambFirstPa + (2.0 * GAMMA) / radiusN2) * radiusN2 * radiusN2 * radiusN2;
            const endRadiusN2 = solveBubbleRadius(
                safeAmbNextPa,
                -2.0 * GAMMA,
                cN2,
                radiusN2,
                radiusN2 * rootFactor
            );
            state.decoGradientN2[i] = ((2.0 * GAMMA) / endRadiusN2 / 101325.0) * unitsFactor;
        }
        state.useDecoGradients = true;
    }
    function extendedCompensation(state, settings) {
        const surfP = getSurfacePressure(settings);
        const pMaxAmb = state.maxAmbientPressure;
        const maxDepthBar = pMaxAmb - surfP;
        const threshold = 6.0; 
        if (maxDepthBar <= threshold) return;
        const extFactor = 1.0 - (maxDepthBar - threshold) * 0.02;
        const clampedFactor = Math.max(0.5, Math.min(1.0, extFactor));
        for (let i = 0; i < NC; i++) {
            state.allowableGradientN2[i] *= clampedFactor;
            state.allowableGradientHe[i] *= clampedFactor;
        }
    }
    function getVPMCeiling(state, settings) {
        const surfP = getSurfacePressure(settings);
        const slp = settings.metric ? SLP_SW_M : SLP_SW_F;
        let maxCeilingP = 0;
        for (let i = 0; i < NC; i++) {
            const pN2 = state.tissues[i].pN2;
            const pHe = state.tissues[i].pHe;
            const pTotal = pN2 + pHe;
            const allowGrad = getWeightedAllowableGradient(state, i, pHe, pN2, state.useDecoGradients);
            const ceilingP = pTotal + CONSTANT_PRESSURE_OTHER_GASES - allowGrad;
            if (ceilingP > maxCeilingP) {
                maxCeilingP = ceilingP;
            }
        }
        const ceilingDepth = (maxCeilingP - surfP) * slp;
        return Math.max(0, ceilingDepth);
    }
    function applyGFSurfacing(state, stopDepth, firstStopDepth, gfHi, settings) {
        if (firstStopDepth <= 0) return;
        const fraction = stopDepth / firstStopDepth; 
        const surfP = getSurfacePressure(settings);
        const pAmb = getAmbientPressure(stopDepth, settings);
        const gf = gfHi / 100;
        for (let i = 0; i < NC; i++) {
            const pN2 = state.tissues[i].pN2;
            const pHe = state.tissues[i].pHe;
            const pTotal = pN2 + pHe;
            let a, b;
            if (pTotal > 0) {
                a = (pN2 * ZHL16C_N2[i].a + pHe * ZHL16C_He[i].a) / pTotal;
                b = (pN2 * ZHL16C_N2[i].b + pHe * ZHL16C_He[i].b) / pTotal;
            } else {
                a = ZHL16C_N2[i].a;
                b = ZHL16C_N2[i].b;
            }
            const mValue = a + pAmb / b;
            const buhlGrad = gf * (mValue - pAmb);
            let vpmGrad;
            if (pTotal > 0) {
                vpmGrad = (pN2 * state.allowableGradientN2[i] + pHe * state.allowableGradientHe[i]) / pTotal;
            } else {
                vpmGrad = state.allowableGradientN2[i];
            }
            const blendedGrad = vpmGrad * fraction + buhlGrad * (1 - fraction);
            if (pTotal > 0) {
                state.allowableGradientN2[i] = blendedGrad;
                state.allowableGradientHe[i] = blendedGrad;
            }
        }
    }
    function isClearToAscendVPM(state, targetDepth, firstStopDepth, model, settings) {
        const pAmb = getAmbientPressure(targetDepth, settings);
        for (let i = 0; i < NC; i++) {
            const pN2 = state.tissues[i].pN2;
            const pHe = state.tissues[i].pHe;
            const pTotal = pN2 + pHe;
            const allowGrad = getWeightedAllowableGradient(state, i, pHe, pN2, state.useDecoGradients);
            if (pTotal + CONSTANT_PRESSURE_OTHER_GASES - allowGrad > pAmb) return false;
        }
        return true;
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
            if (gas.o2 >= 0.995 && depth > o2MaxDepth) continue;
            if (ppO2 <= limit && gas.o2 > bestO2) {
                bestO2 = gas.o2;
                bestGas = gas;
            }
        }
        return bestGas;
    }
    function roundUpToStop(depth, stepSize) {
        return Math.ceil(depth / stepSize) * stepSize;
    }
    function getEffectiveSetpoint(level, isCCR) {
        if (!isCCR || !level) return 0;
        if (level.oc || level.scr) return 0;
        return level.setpoint || 1.3;
    }
    function calculateOTU(ppO2, time) {
        if (ppO2 <= 0.5) return 0;
        return time * Math.pow((ppO2 - 0.5) / 0.5, 0.8333);
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
    function calculateCNS(ppO2, time) {
        if (ppO2 < 0.50) return 0;
        return time * getCNSRate(ppO2);
    }
    function calculate(levels, decoGases, settings, model) {
        model = model || 'VPMB';
        if (!levels || levels.length === 0) {
            return { error: 'No bottom segments defined', stops: [], totalTime: 0 };
        }
        const stepSize = settings.stepSize || (settings.metric ? 3 : 10);
        const lastStop = settings.lastStop || (settings.metric ? 3 : 10);
        const descentRate = settings.descentRate || (settings.metric ? 20 : 60);
        const ascentRate = settings.ascentRate || (settings.metric ? 10 : 30);
        const decoAscentRate = settings.decoAscentRate || (settings.metric ? 3 : 10);
        const surfaceAscentRate = settings.surfaceAscentRate || decoAscentRate;
        const ppO2Deco = settings.ppO2Deco || 1.6;
        const minStopTime = settings.minStopTime || 1;
        const conservatism = settings.conservatism || 0;
        const firstStop30sec = settings.firstStop30sec || false;
        const firstStopDoubleStep = settings.firstStopDoubleStep || false;
        const state = createVPMState(settings);
        setCriticalRadiiForConservatism(state, conservatism);
        const normalizedDecoGases = decoGases.map(g => ({
            o2: g.o2 / 100,
            he: g.he / 100,
            label: `${g.o2}/${g.he}`,
            depthOverrideOn: g.depthOverrideOn === true || g.depthOverrideOn === 1 || g.depthOverrideOn === '1',
            depthOverride: g.depthOverride != null && g.depthOverride !== '' ? Number(g.depthOverride) : null
        }));
        let deepestLevelIndex = 0;
        for (let i = 1; i < levels.length; i++) {
            if (levels[i].depth > levels[deepestLevelIndex].depth) {
                deepestLevelIndex = i;
            }
        }
        let continuationLevels = [];
        if (deepestLevelIndex < levels.length - 1) {
            let monotonicContinuation = true;
            for (let i = deepestLevelIndex + 1; i < levels.length; i++) {
                if (levels[i].depth > levels[i - 1].depth) {
                    monotonicContinuation = false;
                    break;
                }
            }
            if (monotonicContinuation) {
                continuationLevels = levels.slice(deepestLevelIndex + 1);
                levels = levels.slice(0, deepestLevelIndex + 1);
            }
        }
        const plan = [];
        const _origPush = plan.push;
        plan.push = function(seg) {
            try {
                if (!seg._tissues) {
                    seg._tissues = state.tissues.map(t => ({ pN2: t.pN2, pHe: t.pHe }));
                }
                if (seg._cumOTU == null) seg._cumOTU = totalOTU;
                if (seg._cumCNS == null) seg._cumCNS = totalCNS;
                if (seg._ceilingDepth == null) {
                    seg._ceilingDepth = Math.max(0, getVPMCeiling(state, settings));
                }
            } catch (e) {  }
            return _origPush.call(this, seg);
        };
        let runtime = 0;
        let currentDepth = 0;
        let totalOTU = 0;
        let totalCNS = 0;
        function addExposureToContext(ctx, fromDepth, toDepth, time) {
            if (time <= 0) return;
            const steps = Math.max(1, Math.ceil(Math.abs(toDepth - fromDepth)));
            const dt = time / steps;
            for (let s = 0; s < steps; s++) {
                const frac = s / steps;
                const depth = fromDepth + (toDepth - fromDepth) * frac;
                const pAmb = getAmbientPressure(depth, settings);
                const ppO2 = ctx.currentSP > 0 ? Math.min(ctx.currentSP, pAmb) : ctx.currentO2 * pAmb;
                ctx.totalOTU += calculateOTU(ppO2, dt);
                ctx.totalCNS += calculateCNS(ppO2, dt);
            }
        }
        function addConstantExposure(ctx, depth, time) {
            if (time <= 0) return;
            const pAmb = getAmbientPressure(depth, settings);
            const ppO2 = ctx.currentSP > 0 ? Math.min(ctx.currentSP, pAmb) : ctx.currentO2 * pAmb;
            ctx.totalOTU += calculateOTU(ppO2, time);
            ctx.totalCNS += calculateCNS(ppO2, time);
        }
        function makeScheduleContext(baseState, startDepth, startRuntime, startOTU, startCNS, o2, he, gasLabel, sp, outPlan) {
            return {
                state: cloneVPMState(baseState),
                currentDepth: startDepth,
                runtime: startRuntime,
                totalOTU: startOTU,
                totalCNS: startCNS,
                currentO2: o2,
                currentHe: he,
                currentGasLabel: gasLabel,
                currentSP: sp,
                firstStopDepth: 0,
                plan: outPlan || null,
                continuationFinalPhase: false
            };
        }
        function appendPlan(ctx, segment) {
            if (!ctx.plan) return;
            try {
                segment._tissues = ctx.state.tissues.map(t => ({ pN2: t.pN2, pHe: t.pHe }));
                segment._cumOTU = ctx.totalOTU;
                segment._cumCNS = ctx.totalCNS;
                segment._ceilingDepth = Math.max(0, getVPMCeiling(ctx.state, settings));
            } catch (e) {  }
            ctx.plan.push(segment);
        }
        function runAscentSegment(ctx, toDepth, rate) {
            const fromDepth = ctx.currentDepth;
            const segTime = loadTissuesLinear(
                ctx.state, fromDepth, toDepth, rate,
                ctx.currentO2, ctx.currentHe, settings, ctx.currentSP
            );
            ctx.runtime += segTime;
            addExposureToContext(ctx, fromDepth, toDepth, segTime);
            appendPlan(ctx, {
                type: 'ascent',
                startDepth: fromDepth,
                endDepth: toDepth,
                time: Math.round(segTime * 10) / 10,
                runtime: Math.round(ctx.runtime * 10) / 10,
                gas: ctx.currentGasLabel,
                o2: Math.round(ctx.currentO2 * 100),
                he: Math.round(ctx.currentHe * 100)
            });
            ctx.currentDepth = toDepth;
            return segTime;
        }
        function runRoundedDecoStop(ctx, stopDepth, nextStop) {
            let effectiveMinStop = (firstStop30sec && stopDepth === ctx.firstStopDepth) ? 0.5 : minStopTime;
            const roundedRuntime = (ctx.continuationFinalPhase && stopDepth <= 12)
                ? ctx.runtime
                : Math.round((ctx.runtime / effectiveMinStop) + 0.5) * effectiveMinStop;
            let segmentTime = roundedRuntime - ctx.runtime;
            ctx.runtime = roundedRuntime;
            let totalStopTime = segmentTime;
            const pAmb = getAmbientPressure(stopDepth, settings);
            const fractions = getInertFractions(ctx.currentO2, ctx.currentHe, pAmb, ctx.currentSP);
            const inspHe = fractions.he * (pAmb - WATER_VAPOR_PRESSURE);
            const inspN2 = fractions.n2 * (pAmb - WATER_VAPOR_PRESSURE);
            for (let guard = 0; guard < 1000; guard++) {
                for (let i = 0; i < NC; i++) {
                    ctx.state.tissues[i].pHe = haldane(ctx.state.tissues[i].pHe, inspHe, ZHL16C_He[i].ht, segmentTime);
                    ctx.state.tissues[i].pN2 = haldane(ctx.state.tissues[i].pN2, inspN2, ZHL16C_N2[i].ht, segmentTime);
                }
                const decoCeiling = getVPMCeiling(ctx.state, settings);
                const clearTolerance = (ctx.continuationFinalPhase && stopDepth <= 6)
                    ? (nextStop <= 0 ? 0.35 : 0.1)
                    : 1e-9;
                if (decoCeiling <= nextStop + clearTolerance) break;
                segmentTime = effectiveMinStop;
                totalStopTime += effectiveMinStop;
                ctx.runtime += effectiveMinStop;
            }
            const ppO2Stop = ctx.currentSP > 0 ? Math.min(ctx.currentSP, pAmb) : ctx.currentO2 * pAmb;
            ctx.totalOTU += calculateOTU(ppO2Stop, totalStopTime);
            ctx.totalCNS += calculateCNS(ppO2Stop, totalStopTime);
            appendPlan(ctx, {
                type: 'stop',
                depth: stopDepth,
                time: totalStopTime,
                runtime: Math.round(ctx.runtime * 10) / 10,
                gas: ctx.currentGasLabel,
                o2: Math.round(ctx.currentO2 * 100),
                he: Math.round(ctx.currentHe * 100)
            });
            return totalStopTime;
        }
        function maybeSwitchDecoGas(ctx, depth) {
            const decoGas = selectDecoGas(depth, normalizedDecoGases, ppO2Deco, settings);
            if (!decoGas) return;
            const pAmb = getAmbientPressure(depth, settings);
            const ocPpO2 = decoGas.o2 * pAmb;
            const ccrPpO2 = ctx.currentSP > 0 ? Math.min(ctx.currentSP, pAmb) : 0;
            if (decoGas.o2 > ctx.currentO2 || (ctx.currentSP > 0 && ocPpO2 > ccrPpO2)) {
                ctx.currentO2 = decoGas.o2;
                ctx.currentHe = decoGas.he;
                ctx.currentGasLabel = decoGas.label;
                ctx.currentSP = 0;
                // Load tissues during gas switch — previously instantaneous (cosmetic only).
                // This makes deco plan account for saturation during mix change time.
                const gct = settings.gasChangeTime || 0;
                if (gct > 0) {
                    loadTissuesConstant(ctx.state, depth, gct, ctx.currentO2, ctx.currentHe, settings, 0);
                    ctx.runtime += gct;
                    addConstantExposure(ctx, depth, gct);
                    if (ctx.plan) {
                        ctx.plan.push({
                            type: 'gas_change',
                            depth: depth,
                            time: gct,
                            runtime: Math.round(ctx.runtime * 10) / 10,
                            gas: ctx.currentGasLabel,
                            o2: Math.round(ctx.currentO2 * 100),
                            he: Math.round(ctx.currentHe * 100)
                        });
                    }
                }
            }
        }
        function calcIntermediateFirstStopDepth(ctx, targetDepth) {
            let rawCeiling = getVPMCeiling(ctx.state, settings);
            if (rawCeiling <= targetDepth) return 0;
            let firstStopDepth = Math.floor(rawCeiling / stepSize) * stepSize;
            if (firstStopDoubleStep && firstStopDepth > Math.max(lastStop, targetDepth)) {
                const doubleStep = stepSize * 2;
                firstStopDepth = Math.ceil(rawCeiling / doubleStep) * doubleStep;
            }
            if (firstStopDepth >= ctx.currentDepth) firstStopDepth = ctx.currentDepth - stepSize;
            if (firstStopDepth < targetDepth + stepSize) firstStopDepth = targetDepth + stepSize;
            ctx.state.firstStopDepth = firstStopDepth;
            if (model === 'VPMB' || model === 'VPMBE' || model === 'VPMB_GFS' || model === 'VPMBFBO') {
                boyleLawCompensation(ctx.state, firstStopDepth, firstStopDepth, stepSize, settings);
                rawCeiling = getVPMCeiling(ctx.state, settings);
                firstStopDepth = Math.floor(rawCeiling / stepSize) * stepSize;
                if (firstStopDoubleStep && firstStopDepth > Math.max(lastStop, targetDepth)) {
                    const doubleStep = stepSize * 2;
                    firstStopDepth = Math.ceil(rawCeiling / doubleStep) * doubleStep;
                }
                if (firstStopDepth >= ctx.currentDepth) firstStopDepth = ctx.currentDepth - stepSize;
                if (firstStopDepth < targetDepth + stepSize) firstStopDepth = targetDepth + stepSize;
                ctx.state.firstStopDepth = firstStopDepth;
            }
            return firstStopDepth;
        }
        function runStopSequenceToDepth(ctx, firstStopDepth, targetDepth, anchorFirstStopDepth) {
            if (firstStopDepth <= 0 || firstStopDepth <= targetDepth) {
                runAscentSegment(ctx, targetDepth, ascentRate);
                return ctx;
            }
            const phaseFirstStopDepth = anchorFirstStopDepth || firstStopDepth;
            ctx.firstStopDepth = phaseFirstStopDepth;
            runAscentSegment(ctx, firstStopDepth, ascentRate);
            let stopDepth = firstStopDepth;
            while (stopDepth > targetDepth) {
                maybeSwitchDecoGas(ctx, stopDepth);
                const nextStop = Math.max(targetDepth, stopDepth - stepSize);
                if (model === 'VPMB_GFS') {
                    const gfsValue = settings.gfs || settings.gfHi || 85;
                    applyGFSurfacing(ctx.state, stopDepth, phaseFirstStopDepth, gfsValue, settings);
                }
                if (model === 'VPMB' || model === 'VPMBE' || model === 'VPMB_GFS' || model === 'VPMBFBO') {
                    boyleLawCompensation(ctx.state, phaseFirstStopDepth, stopDepth + stepSize, stepSize, settings);
                }
                runRoundedDecoStop(ctx, stopDepth, nextStop);
                if (nextStop <= targetDepth) {
                    const segTime = loadTissuesLinear(
                        ctx.state, stopDepth, targetDepth, decoAscentRate,
                        ctx.currentO2, ctx.currentHe, settings, ctx.currentSP
                    );
                    ctx.runtime += segTime;
                    addExposureToContext(ctx, stopDepth, targetDepth, segTime);
                    ctx.currentDepth = targetDepth;
                    break;
                }
                runAscentSegment(ctx, nextStop, decoAscentRate);
                stopDepth = nextStop;
            }
            return ctx;
        }
        function appendLevelHold(ctx, level) {
            ctx.currentDepth = level.depth;
            ctx.currentO2 = level.o2 / 100;
            ctx.currentHe = level.he / 100;
            ctx.currentGasLabel = `${level.o2}/${level.he}`;
            ctx.currentSP = getEffectiveSetpoint(level, isCCR);
            if (level.time <= 0) return;
            loadTissuesConstant(ctx.state, level.depth, level.time, ctx.currentO2, ctx.currentHe, settings, ctx.currentSP);
            ctx.runtime += level.time;
            addConstantExposure(ctx, level.depth, level.time);
            appendPlan(ctx, {
                type: 'bottom',
                depth: level.depth,
                time: Math.round(level.time * 10) / 10,
                runtime: Math.round(ctx.runtime * 10) / 10,
                gas: ctx.currentGasLabel,
                o2: level.o2,
                he: level.he
            });
        }
        function calcSurfaceFirstStopDepth(scheduleState, fromDepth, o2, he, sp, anchorFirstStopDepth) {
            let rawCeiling = getVPMCeiling(scheduleState, settings);
            if (rawCeiling <= 0) return 0;
            let firstStopDepth = roundUpToStop(rawCeiling, stepSize);
            if (firstStopDoubleStep && firstStopDepth > lastStop) {
                const doubleStep = stepSize * 2;
                firstStopDepth = Math.ceil(rawCeiling / doubleStep) * doubleStep;
            }
            if (firstStopDepth >= fromDepth) firstStopDepth = fromDepth - stepSize;
            if (firstStopDepth < lastStop) firstStopDepth = lastStop;
            firstStopDepth = projectedAscent(
                scheduleState,
                Math.max(fromDepth, 0),
                ascentRate,
                firstStopDepth,
                stepSize,
                o2,
                he,
                settings,
                sp
            );
            if (model === 'VPMB' || model === 'VPMBE' || model === 'VPMB_GFS' || model === 'VPMBFBO') {
                boyleLawCompensation(
                    scheduleState,
                    anchorFirstStopDepth || firstStopDepth,
                    firstStopDepth,
                    stepSize,
                    settings
                );
                rawCeiling = getVPMCeiling(scheduleState, settings);
                if (rawCeiling > 0) {
                    firstStopDepth = roundUpToStop(rawCeiling, stepSize);
                    if (firstStopDoubleStep && firstStopDepth > lastStop) {
                        const doubleStep = stepSize * 2;
                        firstStopDepth = Math.ceil(rawCeiling / doubleStep) * doubleStep;
                    }
                    if (firstStopDepth >= fromDepth) firstStopDepth = fromDepth - stepSize;
                    if (firstStopDepth < lastStop) firstStopDepth = lastStop;
                    firstStopDepth = projectedAscent(
                        scheduleState,
                        Math.max(fromDepth, 0),
                        ascentRate,
                        firstStopDepth,
                        stepSize,
                        o2,
                        he,
                        settings,
                        sp
                    );
                } else {
                    firstStopDepth = 0;
                }
            }
            return firstStopDepth;
        }
        function runContinuationSchedule(baseState, startDepth, startRuntime, startOTU, startCNS, o2, he, gasLabel, sp, outPlan) {
            const ctx = makeScheduleContext(baseState, startDepth, startRuntime, startOTU, startCNS, o2, he, gasLabel, sp, outPlan);
            let phaseFirstStopDepth = 0;
            for (const level of continuationLevels) {
                const levelFirstStopDepth = calcIntermediateFirstStopDepth(ctx, level.depth);
                if (!phaseFirstStopDepth && levelFirstStopDepth > 0) {
                    phaseFirstStopDepth = levelFirstStopDepth;
                }
                runStopSequenceToDepth(ctx, levelFirstStopDepth, level.depth, phaseFirstStopDepth || levelFirstStopDepth);
                appendLevelHold(ctx, level);
            }
            const finalFirstStopDepth = calcSurfaceFirstStopDepth(
                ctx.state,
                ctx.currentDepth,
                ctx.currentO2,
                ctx.currentHe,
                ctx.currentSP,
                phaseFirstStopDepth
            );
            if (!phaseFirstStopDepth && finalFirstStopDepth > 0) {
                phaseFirstStopDepth = finalFirstStopDepth;
            }
            ctx.continuationFinalPhase = true;
            runStopSequence(ctx, finalFirstStopDepth, true, phaseFirstStopDepth || finalFirstStopDepth);
            return { ctx, firstStopDepth: phaseFirstStopDepth };
        }
        function runStopSequence(ctx, firstStopDepth, recordSurface, anchorFirstStopDepth) {
            if (firstStopDepth <= 0) {
                runAscentSegment(ctx, 0, surfaceAscentRate);
                if (recordSurface) {
                    appendPlan(ctx, { type: 'surface', depth: 0, time: 0, runtime: Math.round(ctx.runtime * 10) / 10, gas: ctx.currentGasLabel });
                }
                return ctx;
            }
            const phaseFirstStopDepth = anchorFirstStopDepth || firstStopDepth;
            ctx.firstStopDepth = phaseFirstStopDepth;
            runAscentSegment(ctx, firstStopDepth, ascentRate);
            let stopDepth = firstStopDepth;
            while (stopDepth > 0) {
                maybeSwitchDecoGas(ctx, stopDepth);
                const nextStop = stopDepth <= lastStop ? 0 : stopDepth - stepSize;
                if (model === 'VPMB_GFS') {
                    const gfsValue = settings.gfs || settings.gfHi || 85;
                    applyGFSurfacing(ctx.state, stopDepth, phaseFirstStopDepth, gfsValue, settings);
                }
                if (model === 'VPMB' || model === 'VPMBE' || model === 'VPMB_GFS' || model === 'VPMBFBO') {
                    boyleLawCompensation(ctx.state, phaseFirstStopDepth, stopDepth + stepSize, stepSize, settings);
                }
                runRoundedDecoStop(ctx, stopDepth, nextStop);
                if (nextStop <= 0) {
                    runAscentSegment(ctx, 0, surfaceAscentRate);
                    break;
                }
                runAscentSegment(ctx, nextStop, decoAscentRate);
                stopDepth = nextStop;
            }
            if (recordSurface) {
                appendPlan(ctx, { type: 'surface', depth: 0, time: 0, runtime: Math.round(ctx.runtime * 10) / 10, gas: ctx.currentGasLabel });
            }
            return ctx;
        }
        const isCCR = settings.circuit === 'CCR';
        let curO2 = levels[0].o2 / 100;
        let curHe = levels[0].he / 100;
        let curGasLabel = `${levels[0].o2}/${levels[0].he}`;
        let forcedOCMode = isCCR && !!levels[0].oc;
        let curSP = forcedOCMode ? 0 : getEffectiveSetpoint(levels[0], isCCR);
        function runInterLevelDecoAscent(targetDepth) {
            calcCrushing(state, settings);
            applyNuclearRegeneration(state, runtime);
            const offLoopPath = isCCR && (forcedOCMode || curSP <= 0);
            const interLevelConservatism = offLoopPath ? Math.max(0, conservatism - 1) : conservatism;
            calcAllowableGradients(state, model, settings, interLevelConservatism);
            if (model === 'VPMBE') extendedCompensation(state, settings);
            let rawCeiling = getVPMCeiling(state, settings);
            if (rawCeiling <= targetDepth) {
                const ascTime = loadTissuesLinear(
                    state, currentDepth, targetDepth, ascentRate,
                    curO2, curHe, settings, curSP
                );
                runtime += ascTime;
                const stepsA = Math.max(1, Math.ceil(Math.abs(currentDepth - targetDepth)));
                const dtA = ascTime / stepsA;
                for (let s = 0; s < stepsA; s++) {
                    const frac = s / stepsA;
                    const depth = currentDepth + (targetDepth - currentDepth) * frac;
                    const pAmbSeg = getAmbientPressure(depth, settings);
                    const ppO2Seg = curSP > 0 ? Math.min(curSP, pAmbSeg) : curO2 * pAmbSeg;
                    totalOTU += calculateOTU(ppO2Seg, dtA);
                    totalCNS += calculateCNS(ppO2Seg, dtA);
                }
                plan.push({
                    type: 'ascent', startDepth: currentDepth, endDepth: targetDepth,
                    time: Math.round(ascTime * 10) / 10,
                    runtime: Math.round(runtime * 10) / 10,
                    gas: curGasLabel,
                    o2: Math.round(curO2 * 100),
                    he: Math.round(curHe * 100)
                });
                return { depth: targetDepth, o2: curO2, he: curHe, gasLabel: curGasLabel, sp: curSP };
            }
            let firstStopDepth = offLoopPath
                ? Math.floor(rawCeiling / stepSize) * stepSize
                : roundUpToStop(rawCeiling, stepSize);
            if (firstStopDoubleStep && firstStopDepth > Math.max(lastStop, targetDepth)) {
                const doubleStep = stepSize * 2;
                firstStopDepth = Math.ceil(rawCeiling / doubleStep) * doubleStep;
            }
            if (firstStopDepth >= currentDepth) firstStopDepth = currentDepth - stepSize;
            if (firstStopDepth < targetDepth + stepSize) firstStopDepth = targetDepth + stepSize;
            state.firstStopDepth = firstStopDepth;
            if (model === 'VPMB' || model === 'VPMBE' || model === 'VPMB_GFS' || model === 'VPMBFBO') {
                boyleLawCompensation(state, firstStopDepth, firstStopDepth, stepSize, settings);
                rawCeiling = getVPMCeiling(state, settings);
                firstStopDepth = offLoopPath
                    ? Math.floor(rawCeiling / stepSize) * stepSize
                    : roundUpToStop(rawCeiling, stepSize);
                if (firstStopDoubleStep && firstStopDepth > Math.max(lastStop, targetDepth)) {
                    const doubleStep = stepSize * 2;
                    firstStopDepth = Math.ceil(rawCeiling / doubleStep) * doubleStep;
                }
                if (firstStopDepth >= currentDepth) firstStopDepth = currentDepth - stepSize;
                if (firstStopDepth < targetDepth + stepSize) firstStopDepth = targetDepth + stepSize;
                state.firstStopDepth = firstStopDepth;
            }
            const ascTimeToFirst = loadTissuesLinear(
                state, currentDepth, firstStopDepth, ascentRate,
                curO2, curHe, settings, curSP
            );
            runtime += ascTimeToFirst;
            {
                const stepsA = Math.max(1, Math.ceil(Math.abs(currentDepth - firstStopDepth)));
                const dtA = ascTimeToFirst / stepsA;
                for (let s = 0; s < stepsA; s++) {
                    const frac = s / stepsA;
                    const depthSeg = currentDepth + (firstStopDepth - currentDepth) * frac;
                    const pAmbSeg = getAmbientPressure(depthSeg, settings);
                    const ppO2Seg = curSP > 0 ? Math.min(curSP, pAmbSeg) : curO2 * pAmbSeg;
                    totalOTU += calculateOTU(ppO2Seg, dtA);
                    totalCNS += calculateCNS(ppO2Seg, dtA);
                }
            }
            plan.push({
                type: 'ascent', startDepth: currentDepth, endDepth: firstStopDepth,
                time: Math.round(ascTimeToFirst * 10) / 10,
                runtime: Math.round(runtime * 10) / 10,
                gas: curGasLabel,
                o2: Math.round(curO2 * 100),
                he: Math.round(curHe * 100)
            });
            let stopDepth = firstStopDepth;
            let maxIter = 500;
            while (stopDepth > targetDepth && maxIter-- > 0) {
                const decoGas = selectDecoGas(stopDepth, normalizedDecoGases, ppO2Deco, settings);
                if (decoGas) {
                    const pAmbHere = getAmbientPressure(stopDepth, settings);
                    const ocPpO2 = decoGas.o2 * pAmbHere;
                    const ccrPpO2 = curSP > 0 ? Math.min(curSP, pAmbHere) : 0;
                    if (decoGas.o2 > curO2 || (curSP > 0 && ocPpO2 > ccrPpO2)) {
                        curO2 = decoGas.o2;
                        curHe = decoGas.he;
                        curGasLabel = decoGas.label;
                        curSP = 0;
                    }
                }
                const nextStop = stopDepth - stepSize;
                const nextStopClamped = nextStop < targetDepth ? targetDepth : nextStop;
                if (model === 'VPMB' || model === 'VPMBE' || model === 'VPMB_GFS' || model === 'VPMBFBO') {
                    boyleLawCompensation(state, firstStopDepth, stopDepth + stepSize, stepSize, settings);
                }
                const effectiveMinStop = (firstStop30sec && stopDepth === firstStopDepth) ? 0.5 : minStopTime;
                let stopTime = 0;
                while (!isClearToAscendVPM(state, nextStopClamped, firstStopDepth, model, settings) && stopTime < 999) {
                    loadTissuesConstant(state, stopDepth, effectiveMinStop, curO2, curHe, settings, curSP);
                    stopTime += effectiveMinStop;
                }
                if (stopTime < effectiveMinStop) stopTime = effectiveMinStop;
                runtime += stopTime;
                const pAmbStop = getAmbientPressure(stopDepth, settings);
                const ppO2Stop = curSP > 0 ? Math.min(curSP, pAmbStop) : curO2 * pAmbStop;
                totalOTU += calculateOTU(ppO2Stop, stopTime);
                totalCNS += calculateCNS(ppO2Stop, stopTime);
                plan.push({
                    type: 'stop', depth: stopDepth, time: stopTime,
                    runtime: Math.round(runtime * 10) / 10,
                    gas: curGasLabel,
                    o2: Math.round(curO2 * 100),
                    he: Math.round(curHe * 100)
                });
                if (nextStopClamped < stopDepth) {
                    const ascSegTime = loadTissuesLinear(state, stopDepth, nextStopClamped, decoAscentRate, curO2, curHe, settings, curSP);
                    runtime += Math.abs(stopDepth - nextStopClamped) / decoAscentRate;
                    const stepsA = Math.max(1, Math.ceil(Math.abs(stopDepth - nextStopClamped)));
                    const dtA = ascSegTime / stepsA;
                    for (let s = 0; s < stepsA; s++) {
                        const frac = s / stepsA;
                        const depthSeg = stopDepth + (nextStopClamped - stopDepth) * frac;
                        const pAmbSeg = getAmbientPressure(depthSeg, settings);
                        const ppO2Seg = curSP > 0 ? Math.min(curSP, pAmbSeg) : curO2 * pAmbSeg;
                        totalOTU += calculateOTU(ppO2Seg, dtA);
                        totalCNS += calculateCNS(ppO2Seg, dtA);
                    }
                }
                stopDepth = nextStopClamped;
            }
            currentDepth = targetDepth;
            return { depth: targetDepth, o2: curO2, he: curHe, gasLabel: curGasLabel, sp: curSP };
        }
        for (const level of levels) {
            const depth = level.depth;
            const time = level.time;
            const o2Frac = level.o2 / 100;
            const heFrac = level.he / 100;
            const nextLevelOffLoop = isCCR && !!(level.oc || level.scr);
            const sp = (forcedOCMode || nextLevelOffLoop) ? 0 : getEffectiveSetpoint(level, isCCR);
            if (depth > currentDepth) {
                const descTime = loadTissuesLinear(state, currentDepth, depth, descentRate, o2Frac, heFrac, settings, sp);
                runtime += descTime;
                const pAmbEnd = getAmbientPressure(depth, settings);
                const ppO2D = sp > 0 ? Math.min(sp, pAmbEnd) : o2Frac * pAmbEnd;
                totalOTU += calculateOTU(ppO2D, descTime);
                totalCNS += calculateCNS(ppO2D, descTime);
                plan.push({
                    type: 'descent', startDepth: currentDepth, endDepth: depth,
                    time: Math.round(descTime * 10) / 10,
                    runtime: Math.round(runtime * 10) / 10,
                    gas: `${level.o2}/${level.he}`, o2: level.o2, he: level.he
                });
                curO2 = o2Frac; curHe = heFrac; curGasLabel = `${level.o2}/${level.he}`; curSP = sp;
            } else if (depth < currentDepth) {
                const ascResult = runInterLevelDecoAscent(depth);
                curO2 = ascResult.o2; curHe = ascResult.he;
                curGasLabel = ascResult.gasLabel; curSP = ascResult.sp;
                curO2 = o2Frac; curHe = heFrac; curGasLabel = `${level.o2}/${level.he}`; curSP = sp;
            }
            if (level.oc) forcedOCMode = true;
            const descTimeFromLevel = Math.abs(depth - currentDepth) / descentRate;
            const bottomTime = Math.max(0, time - descTimeFromLevel);
            if (bottomTime > 0) {
                loadTissuesConstant(state, depth, bottomTime, o2Frac, heFrac, settings, sp);
                runtime += bottomTime;
                const pAmbB = getAmbientPressure(depth, settings);
                const ppO2B = sp > 0 ? Math.min(sp, pAmbB) : o2Frac * pAmbB;
                totalOTU += calculateOTU(ppO2B, bottomTime);
                totalCNS += calculateCNS(ppO2B, bottomTime);
                plan.push({
                    type: 'bottom', depth, time: Math.round(bottomTime * 10) / 10,
                    runtime: Math.round(runtime * 10) / 10,
                    gas: `${level.o2}/${level.he}`, o2: level.o2, he: level.he
                });
            }
            currentDepth = depth;
        }
        setCriticalRadiiForConservatism(state, conservatism);
        calcCrushing(state, settings);
        applyNuclearRegeneration(state, runtime);
        calcAllowableGradients(state, model, settings, conservatism);
        if (model === 'VPMBE') {
            extendedCompensation(state, settings);
        }
        const lastLevel = continuationLevels.length > 0
            ? continuationLevels[continuationLevels.length - 1]
            : levels[levels.length - 1];
        const currentO2 = lastLevel.o2 / 100;
        const currentHe = lastLevel.he / 100;
        const currentGasLabel = `${lastLevel.o2}/${lastLevel.he}`;
        const currentSP = forcedOCMode ? 0 : getEffectiveSetpoint(lastLevel, isCCR);
        const startOfAscentState = cloneVPMState(state);
        const runtimeStartOfAscent = runtime;
        const totalOTUStartOfAscent = totalOTU;
        const totalCNSStartOfAscent = totalCNS;
        const depthStartOfAscent = currentDepth;
        const depthStartOfDecoZone = calcStartOfDecoZone(
            startOfAscentState,
            depthStartOfAscent,
            ascentRate,
            currentO2,
            currentHe,
            settings,
            currentSP
        );
        const trialStartState = cloneVPMState(startOfAscentState);
        let runtimeStartOfDecoZone = runtimeStartOfAscent;
        if (depthStartOfDecoZone > 0 && depthStartOfDecoZone < depthStartOfAscent) {
            runtimeStartOfDecoZone += loadTissuesLinear(
                trialStartState,
                depthStartOfAscent,
                depthStartOfDecoZone,
                ascentRate,
                currentO2,
                currentHe,
                settings,
                currentSP
            );
        }
        const decoPhaseRuntimeOrigin = depthStartOfDecoZone > 0 ? runtimeStartOfDecoZone : runtimeStartOfAscent;
        const decoZoneStart = depthStartOfDecoZone;
        let firstStopDepth = 0;
        let scheduleConverged = false;
        for (let cvIter = 0; cvIter < 12; cvIter++) {
            const trialBaseState = cloneVPMState(state);
            restoreTissues(trialBaseState, trialStartState.tissues);
            if (continuationLevels.length === 0) {
                let rawCeiling = getVPMCeiling(trialBaseState, settings);
                if (rawCeiling <= 0) {
                    firstStopDepth = 0;
                } else {
                    firstStopDepth = roundUpToStop(rawCeiling, stepSize);
                    if (firstStopDoubleStep && firstStopDepth > lastStop) {
                        const doubleStep = stepSize * 2;
                        firstStopDepth = Math.ceil(rawCeiling / doubleStep) * doubleStep;
                    }
                    if (firstStopDepth > depthStartOfDecoZone && depthStartOfDecoZone > 0) {
                        firstStopDepth = Math.floor(depthStartOfDecoZone / stepSize) * stepSize;
                    }
                    if (firstStopDepth >= depthStartOfAscent) firstStopDepth = depthStartOfAscent - stepSize;
                    if (firstStopDepth < lastStop) firstStopDepth = rawCeiling > 0 ? lastStop : 0;
                    firstStopDepth = projectedAscent(
                        trialBaseState,
                        Math.max(depthStartOfDecoZone, 0),
                        ascentRate,
                        firstStopDepth,
                        stepSize,
                        currentO2,
                        currentHe,
                        settings,
                        currentSP
                    );
                }
                if (model === 'VPMB' || model === 'VPMBE' || model === 'VPMB_GFS' || model === 'VPMBFBO') {
                    boyleLawCompensation(trialBaseState, firstStopDepth, firstStopDepth, stepSize, settings);
                    rawCeiling = getVPMCeiling(trialBaseState, settings);
                    if (rawCeiling > 0) {
                        firstStopDepth = roundUpToStop(rawCeiling, stepSize);
                        if (firstStopDoubleStep && firstStopDepth > lastStop) {
                            const doubleStep = stepSize * 2;
                            firstStopDepth = Math.ceil(rawCeiling / doubleStep) * doubleStep;
                        }
                        if (firstStopDepth > depthStartOfDecoZone && depthStartOfDecoZone > 0) {
                            firstStopDepth = Math.floor(depthStartOfDecoZone / stepSize) * stepSize;
                        }
                        if (firstStopDepth >= depthStartOfAscent) firstStopDepth = depthStartOfAscent - stepSize;
                        if (firstStopDepth < lastStop) firstStopDepth = lastStop;
                        firstStopDepth = projectedAscent(
                            trialBaseState,
                            Math.max(depthStartOfDecoZone, 0),
                            ascentRate,
                            firstStopDepth,
                            stepSize,
                            currentO2,
                            currentHe,
                            settings,
                            currentSP
                        );
                    } else {
                        firstStopDepth = 0;
                    }
                }
            } else {
                firstStopDepth = 0;
            }
            let trialCtx;
            if (continuationLevels.length > 0) {
                trialCtx = runContinuationSchedule(
                    trialBaseState,
                    depthStartOfAscent,
                    runtimeStartOfAscent,
                    totalOTUStartOfAscent,
                    totalCNSStartOfAscent,
                    levels[levels.length - 1].o2 / 100,
                    levels[levels.length - 1].he / 100,
                    `${levels[levels.length - 1].o2}/${levels[levels.length - 1].he}`,
                    forcedOCMode ? 0 : getEffectiveSetpoint(levels[levels.length - 1], isCCR),
                    null
                ).ctx;
            } else {
                trialCtx = makeScheduleContext(
                    trialBaseState,
                    depthStartOfDecoZone > 0 ? depthStartOfDecoZone : depthStartOfAscent,
                    depthStartOfDecoZone > 0 ? runtimeStartOfDecoZone : runtimeStartOfAscent,
                    totalOTUStartOfAscent,
                    totalCNSStartOfAscent,
                    currentO2,
                    currentHe,
                    currentGasLabel,
                    currentSP,
                    null
                );
                runStopSequence(trialCtx, firstStopDepth, false);
            }
            const decoPhaseVolumeTime = trialCtx.runtime - decoPhaseRuntimeOrigin;
            calcSurfacePhaseVolumeTime(trialCtx.state, settings);
            scheduleConverged = true;
            for (let i = 0; i < NC; i++) {
                const phaseVolumeTime = decoPhaseVolumeTime + trialCtx.state.surfacePhaseVolumeTime[i];
                if (Math.abs(phaseVolumeTime - state.lastPhaseVolumeTime[i]) > 1.0) {
                    scheduleConverged = false;
                }
                state.lastPhaseVolumeTime[i] = phaseVolumeTime;
                state.surfacePhaseVolumeTime[i] = trialCtx.state.surfacePhaseVolumeTime[i];
            }
            if (scheduleConverged || cvIter === 11) {
                const finalState = cloneVPMState(state);
                restoreTissues(finalState, startOfAscentState.tissues);
                let finalCtx;
                if (continuationLevels.length > 0) {
                    finalCtx = runContinuationSchedule(
                        finalState,
                        depthStartOfAscent,
                        runtimeStartOfAscent,
                        totalOTUStartOfAscent,
                        totalCNSStartOfAscent,
                        levels[levels.length - 1].o2 / 100,
                        levels[levels.length - 1].he / 100,
                        `${levels[levels.length - 1].o2}/${levels[levels.length - 1].he}`,
                        forcedOCMode ? 0 : getEffectiveSetpoint(levels[levels.length - 1], isCCR),
                        plan
                    ).ctx;
                } else {
                    finalCtx = makeScheduleContext(
                        finalState,
                        depthStartOfAscent,
                        runtimeStartOfAscent,
                        totalOTUStartOfAscent,
                        totalCNSStartOfAscent,
                        currentO2,
                        currentHe,
                        currentGasLabel,
                        currentSP,
                        plan
                    );
                    runStopSequence(finalCtx, firstStopDepth, true);
                }
                runtime = finalCtx.runtime;
                totalOTU = finalCtx.totalOTU;
                totalCNS = finalCtx.totalCNS;
                restoreTissues(state, finalCtx.state.tissues);
                return buildResult(plan, runtime, totalOTU, totalCNS, settings, state, decoZoneStart);
            }
            calcCriticalVolume(state, decoPhaseVolumeTime);
        }
        return buildResult(plan, runtime, totalOTU, totalCNS, settings, state, decoZoneStart);
    }
    function buildResult(plan, runtime, totalOTU, totalCNS, settings, state, decoZoneStart) {
        return {
            plan,
            totalRuntime: Math.ceil(runtime),
            totalOTU: Math.round(totalOTU),
            totalCNS: Math.round(totalCNS * 100) / 100,
            depthUnit: settings.metric ? 'm' : 'ft',
            decoZoneStart: decoZoneStart || 0,
            stops: plan.filter(s => s.type === 'stop'),
            finalTissues: state ? state.tissues.map(t => ({ pN2: t.pN2, pHe: t.pHe })) : null,
            error: null
        };
    }
    return {
        calculate,
        createVPMState,
        MODELS: ['VPMA', 'VPMB', 'VPMBE', 'VPMB_GFS', 'VPMBFBO'],
        MODEL_NAMES: {
            'VPMA': 'VPM-A',
            'VPMB': 'VPM-B',
            'VPMBE': 'VPM-B/E',
            'VPMB_GFS': 'VPM-B/GFS',
            'VPMBFBO': 'VPM-B/FBO'
        }
    };
})();
if (typeof module !== 'undefined') module.exports = VPMEngine;
