"use strict";

import { randomNumber } from "./units/units.js";

const secretNumber = randomNumber();
console.log(secretNumber);

const submit = document.getElementById("guessButton");
const feedback = document.getElementById("feedback");
const input = document.getElementById("guessInput");

submit.addEventListener("click", () => {
  const userGuess = Number(input.value);

  if (userGuess < secretNumber) {
    feedback.textContent = "For lavt!";
    feedback.style.backgroundColor = "red";
  } else if (userGuess > secretNumber) {
    feedback.textContent = "For højt!";
    feedback.style.backgroundColor = "red";
  } else {
    feedback.textContent = "TILLYKKE DU GÆTTEDE RIGTIGT!";
    feedback.style.color = "gold";
    feedback.style.backgroundColor = "green";
    document.body.style.backgroundColor = "green";
    document.body.style.backgroundImage =
      "url('https://media.giphy.com/media/111ebonMs90YLu/giphy.gif')";
  }
});
