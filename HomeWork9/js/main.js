const usersParametr = ["name", "height", "skin_color"];
let btn = document.querySelector(".btn");

btn.addEventListener("click", async (e) => {
  e.preventDefault();
  bildTable();
  let users = await getPeople()
  fillTable(users);
});

async function getPeople() {
  let usersResponse = await fetch("https://swapi.co/api/people/");
  let users = (await usersResponse.json()).results;
  console.log(users)
  return users;

}

function bildTable() {
    let table = document.createElement('table');
    let tr = document.createElement('tr');
    usersParametr.forEach((item) => {
        let td = document.createElement('td');
        td.innerHTML = item;
        tr.append(td);
    });
    table.classList.add('peopleTable')
    table.append(tr);
    document.body.prepend(table);
}

function fillTable(users) {
    users.forEach(item => {
        let tr = document.createElement('tr');
        usersParametr.forEach((el) => {
            let td = document.createElement('td');
            let text = item[el];
            td.innerHTML = text;
            tr.append(td);
        });
        let table = document.querySelector('.peopleTable')
        table.append(tr);
    });
}