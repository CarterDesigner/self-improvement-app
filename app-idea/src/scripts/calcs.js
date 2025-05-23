import { stats, ovrStat, focusStat, strengthStat, confidenceStat, disciplineStat, wisdomStat } from './stats-manager.js';

export function calculateTaskEffect(baseEffect, completionCount, decayRate = 0.2) {
    return baseEffect * (1 / (1 + decayRate * completionCount));
}