const area = document.querySelector('.game-area');
const startItem = document.querySelector('.start-item')
const finishItem = document.querySelector('.finish-item')
const pipes = document.querySelectorAll(".pipe");

const scoreDisplay = document.querySelector('.score-panel .score');
const lossDisplay = document.querySelector('.score-panel .loss');
const winDisplay = document.querySelector('.score-panel .win');

const contentWrite = (label, count) => `${label}: ${count}`

let score = 0;
let loss = 0;
let win = 0;

let hoveredPipes = new Set();
let isPipe = false;
let isFinished = false

area.addEventListener("mousemove", event => {
    if (event.target === startItem) {
        isFinished = false
    }


    if (event.target === area && isPipe) {
        score = 0;
        !isFinished && loss++;
        isPipe = false;
        hoveredPipes.clear();
        scoreDisplay.textContent = contentWrite("score", score);
        lossDisplay.textContent = contentWrite('loss', loss)
        return; 
    }

    if (event.target === finishItem && !isFinished) {
        score = 0;
        loss = 0
        win++
        isFinished = true
        hoveredPipes.clear();
        scoreDisplay.textContent = contentWrite("score", score);
        lossDisplay.textContent = contentWrite('loss', loss)
        winDisplay.textContent = contentWrite('win', win)
        return;
    }


    pipes.forEach(pipe => {
        if (event.target === pipe && !hoveredPipes.has(pipe)) {
            isPipe = true;
            score++;
            hoveredPipes.add(pipe);
            scoreDisplay.textContent = contentWrite('score', score)
        }
    });
});
