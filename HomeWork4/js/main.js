let data = [
  {
    firstName: "Ashton",

    lastName: "Kutcher",

    age: 40
  },
  {
    firstName: "Bradley",

    lastName: "Pitt",

    age: 54
  },
  {
    firstName: "Hannah",

    lastName: "Dakota",

    age: 24
  }
];

let boby = document.body;

let table = document.body.querySelector("table");

table.classList.add("borderTable");

let cells = table.getElementsByTagName("td");

let arr = 0

for (let i = 0; i < 3; i++) {

    table.rows[arr].cells[1].innerHTML = data[i].firstName;
    arr++;
    table.rows[arr].cells[1].innerHTML = data[i].lastName;
    arr++;
    table.rows[arr].cells[1].innerHTML = data[i].age;
    arr++;
}
