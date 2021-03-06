const startBtn = document.querySelector('#start');
const screens = document.querySelectorAll('.screen');
const timeList =document.querySelector('#time-list');
const timeEl = document.querySelector('#time');
const board = document.querySelector('#board');
const colors = ['#2196F3', '#4CAF50', '#FF9800', '#F44336', '#9C27B0', '#009688', '#673AB7', '#3F51B5', '#E91E63', '#FF5722']; //COLORS ADDED
let time = 0; //10sec for example
let score = 0;

startBtn.addEventListener('click', (event) => {
    event.preventDefault();
    screens[0].classList.add('up');
});

timeList.addEventListener('click', event => {
    if (event.target.classList.contains('time-btn')) {
        time = parseInt(event.target.getAttribute('data-time'));
        screens[1].classList.add('up'); 
        startGame();
    };
});

board.addEventListener('click', event => {
    if (event.target.classList.contains('circle')) {
        score++;
        event.target.remove();
        creatRandomCircle();
    }
})

// // DEBUG
// startGame();

function startGame() {
    setInterval(decreaseTime, 1000);
    creatRandomCircle();
    setTime(time);
}

function decreaseTime() {
    if (time === 0) {
        finishGame();
    } else {
        let current = --time;
        if (current < 0) {
            current = `00:${value}`;
        }
            setTime(current);
    }
}

function setTime(value) {
    timeEl.innerHTMl = `00:${value}`;
}

function finishGame() {
    timeEl.parentNode.classList.add('hide');
    board.innerHTML = `<h1>Game Over! <span class='primary'>${score}</span></h1>`
}
 
function creatRandomCircle() {
    const circle = document.createElement('div');
    const size = getRandomNumber(10, 60);
    const {width, height} = board.getBoundingClientRect();
    const x = getRandomNumber(0, width - size);
    const y = getRandomNumber(0, height - size);

    const color = colors[getRandomNumber(0, colors.length)];
    circle.style.background = color; //added colors
    
    circle.classList.add('circle');
    circle.style.width = `${size}px`;
    circle.style.height = `${size}px`;
    circle.style.left = `${x}px`;
    circle.style.top = `${y}px`;

    board.append(circle);
}

function getRandomNumber(min, max) {
    return Math.round(Math.random() * (max - min) + min);
}
