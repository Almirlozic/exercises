window.addEventListener("mousemove", function (event) {
  //console.log(event);
  const percent = (event.clientX / window.innerWidth) * 100;
  document.documentElement.style.setProperty("--l-bg", percent + "%");
  document.documentElement.style.setProperty("--l-color", 100 - percent + "%");
});
