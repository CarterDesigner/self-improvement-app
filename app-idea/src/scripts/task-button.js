import { completeTask, taskMap } from "./tasks-manager.js";
import { scoreImplimentation } from './score-impliment.js';
import { stats } from "./stats-manager.js";

export function setupTaskButtons() {
    document.querySelectorAll('[data-task]').forEach(button => {
        button.addEventListener('click', () => {
            const taskId = button.dataset.task;
            const task = taskMap[taskId];
            if (!task) return;
            completeTask(task);
            scoreImplimentation();
        });
        console.log(stats);
    });
}