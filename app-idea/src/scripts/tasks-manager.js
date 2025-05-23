import { calculateTaskEffect } from "./calcs.js";
import { updateStat } from "./stats-manager";

export const task_1 = {
    id: "wake-7am",
    title: "wake up at 7am",
    description: "waking up early to grind early",
    statEffects: { discipline: 0.5, focus: 0.2 },
    completionCount: 0,
}

export const task_2 = {
    id: "gym",
    title: "workout at the gym",
    description: "working for stronger body and mind",
    statEffects: { discipline: 0.3, strength: 0.5, confidence: 0.05 },
    completionCount: 0,
}


export const taskMap = {
    "wake-7am": task_1,
    "gym": task_2,
};

export function completeTask(task) {
    for (const stat in task.statEffects) {
        const baseDelta = task.statEffects[stat];
        const adjusted = calculateTaskEffect(baseDelta, task.completionCount);
        updateStat(stat, adjusted);
    }
    task.completionCount++;
}