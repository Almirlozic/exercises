const btn = document.querySelector("#generate-btn");
const list = document.querySelector("nav");
btn.addEventListener("click", showNav);

const bc = [
  { name: "Hvidevarer", link: "/hvidevarer" },
  { name: "Vaskemaskiner", link: "/hvidevarer/vaskemaskiner" },
  { name: "Bosch", link: "/hvidevarer/vaskemaskiner/bosch/" },
];

function showNav() {
  console.log("button clicked");
  list.innerHTML = "";

  bc.forEach((item, index) => {
    const li = document.createElement("li");
    const a = document.createElement("a");
    const p = document.createElement("p");

    a.textContent = item.name;
    a.href = item.link;
    p.textContent = "/";
    li.appendChild(a);
    li.appendChild(p);
    list.appendChild(li);
    if (index === bc.length - 1) {
      li.textContent = item.name;
    }
  });
}
