export const ovrStat = {
    statName: "ovr",
    rating: 0,
}
export const focusStat = {
    statName: "focus",
    rating: 0,
}
export const strengthStat = {
    statName: "strength",
    rating: 0,
}
export const confidenceStat = {
    statName: "confidence",
    rating: 0,
}
export const disciplineStat = {
    statName: "discipline",
    rating: 0,
}
export const wisdomStat = {
    statName: "wisdom",
    rating: 0,
}

export const stats = [
    ovrStat,
    focusStat,
    strengthStat,
    confidenceStat,
    disciplineStat,
    wisdomStat,
]

function clamp(value, min, max) {
    return Math.max(min, Math.min(max, value));
}
export function updateStat(statName, delta) {
    const stat = stats.find(s => s.statName === statName);
    if (!stat) return;
    stat.rating = clamp(stat.rating + delta, 0, 100);
    if (statName !== "ovr") {
        recalculateOvrStat();
    }
}
function recalculateOvrStat() {
    const nonOvrStats = stats.filter(s => s.statName !== "ovr");
    const total = nonOvrStats.reduce((sum, s) => sum + s.rating, 0);
    ovrStat.rating = Math.round(total / nonOvrStats.length);
}