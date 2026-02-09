const curseWords = [
  { bad: "var", good: "const" },
  { bad: "float", good: "grid" },
  { bad: "marquee", good: "just don't" },
];

let buttonClicked = false;
let theText = document.querySelector("p").textContent;
document.querySelector("#btn").addEventListener("click", klik);
const popup = document.querySelector("#popup");
const closeBtn = document.querySelector("#close_popup").addEventListener("click", closePopup);

function openPopup() {
  popup.classList.add("show");
}
function closePopup() {
  popup.classList.remove("show");
}

function klik() {
  if (buttonClicked === true) {
    console.log("knappen har været trykket op");
    openPopup();
  } else {
    console.log("knappet har ikke været trykke på");
    sfw();
  }
  buttonClicked = true;
}

function sfw() {
  theText = document.querySelector("p").innerHTML;

  curseWords.forEach((word) => {
    theText = theText.replaceAll(word.bad, `<span class="highlight">${word.good}</span>`);
  });

  document.querySelector("p").innerHTML = theText;
}
