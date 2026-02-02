"use strict";

const input1 = document.querySelector("#number-1");
const input2 = document.querySelector("#number-2");
const dropdown = document.querySelector("#drop-down");
const resultat = document.querySelector("#resultat");
const button = document.querySelector("#beregn");

button.addEventListener("click", calculate);

function calculate() {
  const number1 = Number(input1.value);
  const number2 = Number(input2.value);
  let result;

  if (dropdown.value === "plus") {
    result = number1 + number2;
  } else if (dropdown.value === "minus") {
    result = number1 - number2;
  } else if (dropdown.value === "gange") {
    result = number1 * number2;
  } else if (dropdown.value === "dividere") {
    result = number1 / number2;
  } else {
    result = "Ugyldig operation";
  }

  resultat.value = result;
}
