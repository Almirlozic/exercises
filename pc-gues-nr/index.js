"use strict";

let min = 0;
let max = 100;
let guesses = 0;

const startBTN = document.querySelector("#start");
const pcGuess = document.querySelector("#guess");
const toLow = document.querySelector("#to-low");
const toHigh = document.querySelector("#to-high");
const correct = document.querySelector("#correct");
let currentGuess;

function startGame() {
  guesses = 0;
  min = 0;
  max = 100;
  let firstGuess = Math.floor((min + max) / 2);
  pcGuess.textContent = `Er det ${firstGuess}?`;
  guesses++;
  currentGuess = firstGuess;
  toHigh.disabled = false;
  toLow.disabled = false;
  correct.disabled = false;
}
startBTN.addEventListener("click", startGame);

toLow.addEventListener("click", function () {
  min = currentGuess + 1;
  currentGuess = Math.floor((min + max) / 2);
  pcGuess.textContent = `Er det ${currentGuess}?`;
  guesses++;
});

toHigh.addEventListener("click", function () {
  max = currentGuess - 1;
  currentGuess = Math.floor((min + max) / 2);
  pcGuess.textContent = `Er det ${currentGuess}?`;
  guesses++;
});

correct.addEventListener("click", function () {
  pcGuess.textContent = `yay! Jeg gættede dit tal ${currentGuess} på ${guesses} forsøg!`;
});
