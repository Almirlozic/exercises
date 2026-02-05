const vehicles = [
  { type: "Bus", fuel: "Diesel", passengers: 45, stops: ["Nørrebrogade", "Elmegade"] },
  { type: "Bil", fuel: "Benzin", passengers: 4, ownedBy: "Klaus" },
  { type: "Cykel", fuel: "Rugbrød", passengers: 0, ownedBy: "Jonas", isElectric: true },
  { type: "Bil", passengers: 5, ownedBy: "Elon", isElectric: true },
  { type: "MC", fuel: "Benzin", passengers: 2, ownedBy: "Fonda" },
  { type: "Cykel", fuel: "Rugbrød", passengers: 2, ownedBy: "Vingegård", isTandem: true },
  { type: "MC", fuel: "Benzin", passengers: 2, ownedBy: "Yolanda" },
  { type: "Knallert", fuel: "Benzin", passengers: 1, ownedBy: "Børge" },
  { type: "Knallert", fuel: "Benzin", passengers: 1, ownedBy: "Jonas" },
  { type: "Løbehjul", passengers: 1, isElectric: true },
];
const showAllBtn = document.querySelector("#showAll");
showAllBtn.addEventListener("click", showAll);
function showAll() {
  showTheseVehicles(vehicles);
}

const showElectricBtn = document.querySelector("#showElectric");
showElectricBtn.addEventListener("click", showElectric);
function showElectric() {
  const showElectric = vehicles.filter((v) => v.isElectric);
  showTheseVehicles(showElectric);
}
const showMoreThanTwo = document.querySelector("#showMoreThan2");
showMoreThanTwo.addEventListener("click", moreThanTwo);
function moreThanTwo() {
  const showMoreThanTwo = vehicles.filter((v) => v.passengers > 2);
  showTheseVehicles(showMoreThanTwo);
}

const showJonasElectric = document.querySelector("#showJonasElectric");
showJonasElectric.addEventListener("click", jonasAndElectric);
function jonasAndElectric() {
  const jonasElectric = vehicles.filter((v) => v.isElectric && v.ownedBy === "Jonas");
  showTheseVehicles(jonasElectric);
}

const showRugbroed = document.querySelector("#showRugbroed");
showRugbroed.addEventListener("click", rugbroedAndPerson);
function rugbroedAndPerson() {
  const rugbroedMany = vehicles.filter((v) => v.passengers >= 2 && v.fuel === "Rugbrød");
  showTheseVehicles(rugbroedMany);
}

const tbodyPointer = document.querySelector("tbody");
showTheseVehicles(vehicles);
function showTheseVehicles(arr) {
  tbodyPointer.innerHTML = "";
  arr.forEach((each) => {
    let fuelText = "No fuel";
    let stopsText = "No stop";
    let ownedByText = "Nobody";
    let isElectricText = "Electric";
    let isTandemText = "";
    if (each.fuel) {
      fuelText = each.fuel;
    }
    if (each.stops) {
      stopsText = each.stops;
    }
    if (each.ownedBy) {
      ownedByText = each.ownedBy;
    }
    if (each.isElectric === true) {
      isElectricText = "Electric";
    } else {
      isElectricText = "Not electric";
    }
    if (each.isTandem) {
      isTandemText = "2 persons";
    } else {
      isTandemText = "1 person";
    }

    tbodyPointer.innerHTML += `<tr>
  <td>${each.type}</td>
  <td>${fuelText}</td>
  <td>${each.passengers}</td> 
  <td>${stopsText}</td>
  <td>${ownedByText}</td>
  <td>${isElectricText}</td>
  <td>${isTandemText}</td>
</tr>`;
  });
}
