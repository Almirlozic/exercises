const themeSelect = document.querySelector("#switcher");
const body = document.body;

document.addEventListener("DOMContentLoaded", oldTheme);

themeSelect.value = body.dataset.theme;

themeSelect.addEventListener("change", (event) => {
  const chosenTheme = event.target.value;
  body.dataset.theme = chosenTheme;
  localStorage.setItem("theme", event.target.value);
});

function oldTheme() {
  body.dataset.theme = localStorage.getItem("theme");
  themeSelect.value = localStorage.getItem("theme");
}
