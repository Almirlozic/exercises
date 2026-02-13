getJson();
setInterval(getJson, 10000);
async function getJson() {
  const response = await fetch("https://kea-alt-del.dk/kata-distortion/");
  const data = await response.json();
  //console.log(data.inQueue);

  showData(data.inQueue);
}

function showData(inQueue) {
  document.querySelector("h1").textContent = inQueue;
  const h1 = document.querySelector("h1");
  const div = document.querySelector("div");
  const p = document.querySelector("p");
  if (inQueue < 5) {
    div.style.backgroundColor = "green";
    p.textContent = "antal personer i køen.";
  } else if (inQueue > 5 && inQueue < 20) {
    div.style.backgroundColor = "orange";
    p.textContent = "antal personer i køen.";
  } else {
    div.style.backgroundColor = "red";
    p.textContent = "antal personer i køen.";
  }
}
