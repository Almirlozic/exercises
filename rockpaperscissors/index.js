"use strict";

const rock_btn = document.querySelector(".rock");
const paper_btn = document.querySelector(".paper");
const scissors_btn = document.querySelector(".scissors");
const player1 = document.querySelector("#player1");
const player2 = document.querySelector("#player2");
document.addEventListener("DOMContentLoaded", init);
let userChoice;
let computerChoice;

function init() {
  rock_btn.addEventListener("click", rockClick);
  paper_btn.addEventListener("click", paperClick);
  scissors_btn.addEventListener("click", scissorsClick);
  player1.addEventListener("animationend", animationDone);
  player2.addEventListener("animationend", animationDone);
}

function rockClick() {
  console.log("rock");
  userChoice = "rock";
  computerChooses();
  hideAllResults();
}
function paperClick() {
  console.log("paper");
  userChoice = "paper";
  computerChooses();
  hideAllResults();
}
function scissorsClick() {
  console.log("scissors");
  userChoice = "scissors";
  computerChooses();
  hideAllResults();
}

function computerChooses() {
  const random = Math.floor(Math.random() * 3);

  if (random === 0) {
    computerChoice = "rock";
  } else if (random === 1) {
    computerChoice = "paper";
  } else {
    computerChoice = "scissors";
  }
  handShakeStart();
}

function handShakeStart() {
  player1.classList.add("shake");
  player2.classList.add("shake");
}

function animationDone() {
  player1.classList.remove("shake");
  player2.classList.remove("shake");
  player1.classList.remove("rock", "paper", "scissors");
  player1.classList.add(userChoice);
  player2.classList.remove("rock", "paper", "scissors");
  player2.classList.add(computerChoice);
  checkWinner();
}

function hideAllResults() {
  document.querySelector("#win").classList.add("hidden");
  document.querySelector("#lose").classList.add("hidden");
  document.querySelector("#draw").classList.add("hidden");
}

function checkWinner() {
  hideAllResults();

  if (userChoice === computerChoice) {
    document.querySelector("#draw").classList.remove("hidden");
  } else if (
    (userChoice === "rock" && computerChoice === "scissors") ||
    (userChoice === "paper" && computerChoice === "rock") ||
    (userChoice === "scissors" && computerChoice === "paper")
  ) {
    document.querySelector("#win").classList.remove("hidden");
  } else {
    document.querySelector("#lose").classList.remove("hidden");
  }
}
