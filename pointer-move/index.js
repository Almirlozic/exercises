window.addEventListener("mousemove", function (event) {
  console.log(event);
  const percent = (event.clientX / window.innerWidth) * 100;
  document.documentElement.style.setProperty("--mouse-bg", percent + "%");
});
