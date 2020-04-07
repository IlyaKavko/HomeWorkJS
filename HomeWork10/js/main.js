const usersParametr = ["name", "height", "skin_color"];
let btn = document.querySelector(".btn");
let modalWrapper = document.querySelector(".modal_wrapper");
let leftCol = document.querySelector('.modal_wrapper .left_col');
let rightCol = document.querySelector('.modal_wrapper .right_col');

modalWrapper.addEventListener("click", (e) => {
  let modal = document.querySelector(".modal");
  if (e.target !== modal) {
    leftCol.innerHTML = '';
    rightCol.innerHTML = '';
    modalWrapper.classList.remove("active");
  }
});

btn.addEventListener("click", async (e) => {
  e.preventDefault();
  bildTable();
  let users = await getPeople();
  fillTable(users);
});

let getAdditionUserInfo = (mass, eyeColor, birthYear) => {
  let table = document.createElement("table");
  table.innerHTML = `
    <tr>
      <td>Вес</td>
      <td>Цвет Глаз</td>
      <td>День Рождения</td>
    </tr>
    <tr>
      <td>${mass}</td>
      <td>${eyeColor}</td>
      <td>${birthYear}</td>
    </tr>`;
  return table;
};

let getInfoOfHomePlanet = (planetInfoTable) => {
  let table = document.createElement("table");
  table.innerHTML = `
    <tr>
      <td>Имя Планеты</td>
      <td>Диаметр Планеты</td>
      <td>Орбитальный Период</td>
      <td>Население</td>
    </tr>
    <tr>
      <td>${planetInfoTable.name}</td>
      <td>${planetInfoTable.diameter}</td>
      <td>${planetInfoTable.orbital_period}</td>
      <td>${planetInfoTable.population}</td>
    </tr>`;
  return table;
}

async function showModal(e) {
  let thisTr = e.target.closest("tr");
  if (thisTr.rowIndex === 0) return;
  let planetUrl = thisTr.dataset.planetUrl
  let mass = thisTr.dataset.mass;
  let eyeColor = thisTr.dataset.eyeColor;
  let birthYear = thisTr.dataset.birthYear;
  let additionUserInfo = getAdditionUserInfo(mass, eyeColor, birthYear);
  let planetInfoTable = await getPlanet(planetUrl);
  let homePlanet = getInfoOfHomePlanet(planetInfoTable)
  leftCol.append(additionUserInfo);
  rightCol.append(homePlanet);
  modalWrapper.classList.add("active");
}

async function getPeople() {
  let usersResponse = await fetch("https://swapi.co/api/people/");
  let users = (await usersResponse.json()).results;
  console.log(users);
  return users;
}
async function getPlanet(url) {
  let planetResponse = await fetch(url);
  let planet = await planetResponse.json();
  return planet;
}

function bildTable() {
  let table = document.createElement("table");
  table.addEventListener("click", showModal);
  let tr = document.createElement("tr");
  usersParametr.forEach((item) => {
    let td = document.createElement("td");
    td.innerHTML = item;
    tr.append(td);
  });
  table.classList.add("peopleTable");
  table.append(tr);
  document.body.prepend(table);
}

function fillTable(users) {
  users.forEach((item) => {
    let tr = document.createElement("tr");
    tr.dataset.mass = item.mass;
    tr.dataset.eyeColor = item.eye_color;
    tr.dataset.birthYear = item.birth_year;
    tr.dataset.planetUrl = item.homeworld;
    usersParametr.forEach((el) => {
      let td = document.createElement("td");
      let text = item[el];
      td.innerHTML = text;
      tr.append(td);
    });
    let table = document.querySelector(".peopleTable");
    table.append(tr);
  });
}
