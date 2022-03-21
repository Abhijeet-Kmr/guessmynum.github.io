'use strict';


let secretNumber = Math.trunc(Math.random() * 10 + 1);
let score = 10;
let highScore = 0;

document.querySelector('.secretNumber').textContent = secretNumber;

const msgGiver = function (message) {
    document.querySelector('.message').textContent = message;
}

document.querySelector('.check-btn').addEventListener('click', function () {
    const guess = (Number(document.querySelector('.guess').value));
    if (!guess) {
        msgGiver('OOPS! NO NUMBER');
    }
    if (guess === secretNumber) {
        msgGiver('Yeay! Correct Number');
        document.querySelector('html').style.backgroundColor = 'green';

        if (score > highScore) {
            highScore = score;
            document.querySelector('.highScore').textContent = highScore;
        }

    }
    if (score > 1) {
        if (guess < secretNumber) {
            msgGiver('Too Low');
            score--;
            document.querySelector('.score').textContent = score;
        } else if (guess > secretNumber) {
            msgGiver('Too High');
            score--;
            document.querySelector('.score').textContent = score;
        }
    } else {
        document.querySelector('.score').textContent = 0;
        msgGiver('You lost the game');
    }
});

document.querySelector('.checkAgain').addEventListener('click', function () {
    score = 10;
    secretNumber = Math.trunc(Math.random() * 10 + 1);

    msgGiver('Start again');
    document.querySelector('.score').textContent = score;
    document.querySelector('.secretNumber').textContent = secretNumber;
    document.querySelector('.guess').value = '';
    document.querySelector('html').style.backgroundColor = '#222';
    // document.querySelector('.highScore').textContent = 0;
});
