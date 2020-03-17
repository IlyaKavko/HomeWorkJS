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

for (let i = 0; i < data.length; i++) {
  for (let j = 0; j < table.rows.length; j++) {
    table.rows[0].cells[1].innerHTML = data[0].firstName;
    table.rows[1].cells[1].innerHTML = data[0].lastName;
    table.rows[2].cells[1].innerHTML = data[0].age;
  }
}
