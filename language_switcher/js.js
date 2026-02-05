"use strict";
const texts = {
  de: {
    texts: [
      { text: "Das Bot", location: ".header" },
      { text: "Das Ro-Bot", location: ".footer" },
    ],
  },
  da: {
    texts: [
      { text: "Båden", location: ".header" },
      { text: "Robotten", location: ".footer" },
    ],
  },
};
let locale = "da";

//console.log(texts.da.texts);

changeSprog();
const sprog = document.querySelector("#sprog");
sprog.addEventListener("change", (event) => {
  locale = event.target.value;
  changeSprog();
});
function changeSprog() {
  texts[locale].texts.forEach((elm) => {
    console.log(elm.location);
    if (elm.location === ".footer") {
      document.querySelector(elm.location).innerHTML = elm.text;
    } else {
      document.querySelector(elm.location).innerHTML = elm.text;
    }
  });
}
