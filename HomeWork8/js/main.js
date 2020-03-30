const usersParametr = ["name", "height", "skin_color"];
let btn = document.querySelector(".btn");

btn.addEventListener("click", e => {
  e.preventDefault();
  getPeople();
});

async function getPeople() {
  let usersResponse = await fetch("https://swapi.co/api/people/");
  let users = await usersResponse.json();
  let table = document.createElement("table");
  let tr = document.createElement("tr");
  table.append(tr);

  for (let j = 0; j < usersParametr.length; j++) {
    let hearetTh = document.createElement("th");
    hearetTh.innerHTML = usersParametr[j];
    tr.append(hearetTh);
  }

  for (let i = 0; i < users.results.length; i++) {
    let usersName = users.results[i].name;
    let usersHeight = users.results[i].height;
    let usersSkinColor = users.results[i].skin_color;

    let tr = document.createElement("tr");
    table.append(tr);

    let tdName = document.createElement("td");
    tdName.innerHTML = usersName;
    tr.append(tdName);
    let tdHeight = document.createElement("td");
    tdHeight.innerHTML = usersHeight;
    tr.append(tdHeight);
    let tdSkinColor = document.createElement("td");
    tdSkinColor.innerHTML = usersSkinColor;
    tr.append(tdSkinColor);
  }

  document.body.prepend(table);
}
