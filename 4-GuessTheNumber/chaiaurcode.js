let random = parseInt(Math.random() * 100 + 1);
const submit = document.querySelector('#subt');
const userInput = document.querySelector('#guessField');
const guessSlot = document.querySelector('.guesses');
const remaning = document.querySelector('.lastResult');
const lowOrHi = document.querySelector('.lowOrHi');
const startover = document.querySelector('.resultParas');
const p = document.createElement('p');

let prevGuess = [];
let numGuess = 1;
let PG = true;

if (PG) {
  submit.addEventListener('click', function (e) {
    e.preventDefault();
    const guess = parseInt(userInput.value);
    console.log(guess);
    ValidateGuess(guess);
  });
}

function ValidateGuess(guess) {
  if (isNaN(guess) || guess < 0) {
    alert('insert valid no');
  } else {
    prevGuess.push(guess);
    if (numGuess === 11) {
      Displaygues(guess);
      displayMesage('over');
      endGame();
    } else {
      Displaygues(guess);
      checkGues(guess);
    }
  }
}
function checkGues(guess) {
  if (guess == random) {
    displayMesage('right no');
    endGame();
  } else if (guess < random) {
    displayMesage('no is low');
  } else if (guess > random) {
    displayMesage('no is high');
  }
}
function Displaygues(guess) {
  userInput.value = '';
  guessSlot.innerHTML += `${guess} `;
  numGuess++;
  remaning.innerHTML = `${11 - numGuess}`;
}
function displayMesage(messge) {
  lowOrHi.innerHTML = `<h2>${messge}</h2>`;
}

function endGame() {
  userInput.value = '';
  userInput.setAttribute('disabled', '');
  p.classList.add('button');
  p.innerHTML = `<h2 id='newGame'>new game</h2>`;
  startover.appendChild(p);
  PG = false;
  newGame();
}
function newGame() {
const newG = document.querySelector('#newGame');
  newG.addEventListener('click', function (e) {
    random = parseInt(Math.random() * 100 + 1);
    let prevGuess = [];
    let numGuess = 1;
    guessSlot.innerHTML = '';
    remaning.innerHTML = `${11-numGuess}`;
    userInput.removeAttribute('disabled');
    startover.removeChild(p);
    PG = true;
  });
}
