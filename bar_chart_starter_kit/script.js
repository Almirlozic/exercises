const list = document.querySelector("ul");

const li = document.createElement("li");
li.style.setProperty("--height", "30");
list.appendChild(li);

const columnArray = [];

setInterval(generateColumns, 1000);
function generateColumns() {
  columnArray.push(Math.round(Math.random() * 100));
  list.innerHTML = "";
  columnArray.forEach((height) => {
    const li = document.createElement("li");
    li.style.setProperty("--height", height);
    list.appendChild(li);
  });

  //console.log("columnarray", columnArray);
  if (columnArray.length >= 20) {
    columnArray.shift();
  }
}
