import { ovrStat, focusStat, strengthStat, confidenceStat, disciplineStat, wisdomStat } from './stats-manager.js';
import { updateStat } from './stats-manager.js';

const previousRatings = {
    overall: ovrStat.rating,
    focus: focusStat.rating,
    strength: strengthStat.rating,
    confidence: confidenceStat.rating,
    discipline: disciplineStat.rating,
    wisdom: wisdomStat.rating,
}

export function scoreImplimentation() {
    /*
    const ovrCard = document.querySelector('#ovr-card');
    const focusCard = document.querySelector('#foc-card');
    const strengthCard = document.querySelector('#str-card');
    const confidenceCard = document.querySelector('#con-card');
    const disciplineCard = document.querySelector('#dis-card');
    const wisdomCard = document.querySelector('#wis-card');

    ovrCard.querySelector('#overall').textContent = Math.floor(ovrStat.rating);
    focusCard.querySelector('#focus').textContent = Math.floor(focusStat.rating);
    strengthCard.querySelector('#strength').textContent = Math.floor(strengthStat.rating);
    confidenceCard.querySelector('#confidence').textContent = Math.floor(confidenceStat.rating);
    disciplineCard.querySelector('#discipline').textContent = Math.floor(disciplineStat.rating);
    wisdomCard.querySelector('#wisdom').textContent = Math.floor(wisdomStat.rating);
    */

    updateCard(document.querySelector('#ovr-card'), ovrStat, 'overall');
    updateCard(document.querySelector('#foc-card'), focusStat, 'focus');
    updateCard(document.querySelector('#str-card'), strengthStat, 'strength');
    updateCard(document.querySelector('#con-card'), confidenceStat, 'confidence');
    updateCard(document.querySelector('#dis-card'), disciplineStat, 'discipline');
    updateCard(document.querySelector('#wis-card'), wisdomStat, 'wisdom');
}

export function updateStats() {
    document.querySelectorAll('[data-update]').forEach(btn => {
        btn.addEventListener('click', () => {
            const stat = btn.dataset.stat;
            const delta = parseInt(btn.dataset.delta);
            updateStat(stat, delta);
            scoreImplimentation();
        });
    });
}

const updateCard = (card, stat, ratingKey) => {
    const current = Math.floor(stat.rating);
    const previous = Math.floor(previousRatings[ratingKey]);
    const arrow = card.querySelector('.triangle');

    card.querySelector(`#${ratingKey}`).textContent = current;

    if (current > previous) {
        arrow.classList.add('increase');
        arrow.classList.remove('decrease');
    } else if (current < previous) {
        arrow.classList.add('decrease');
        arrow.classList.remove('increase');
    } else {
        arrow.classList.remove('increase', 'decrease');
    }

    previousRatings[ratingKey] = stat.rating
};