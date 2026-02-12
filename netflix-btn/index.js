const nextBtn = document.querySelector(".next-btn");
// duration tid i millisekunder 5000 = 5 sekunder
let progress = 0;
const duration = 5000;
const stepTime = 50;
let interval;
setTimeout(() => {
  interval = setInterval(() => {
    progress += 1;

    nextBtn.style.background = `linear-gradient(
        to right,
        white ${progress}%,
        #cec2c2 ${progress}%
        )`;
    if (progress === 100) {
      clearInterval(interval);

      // skifter til ny episode
      window.location.href = "next.html";
    }
  }, stepTime);
}, 1000);

document.addEventListener("mousemove", fillBtn);

function fillBtn() {
  clearInterval(interval);
  nextBtn.style.background = "white";
}
