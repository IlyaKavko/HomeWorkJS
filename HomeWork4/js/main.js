let data = [{
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

let arr = 0

for (let i = 0; i < data.length; i++) {

  table.rows[arr].cells[1].innerHTML = data[i].firstName;
  arr++;
  table.rows[arr].cells[1].innerHTML = data[i].lastName;
  arr++;
  table.rows[arr].cells[1].innerHTML = data[i].age;
  arr++;
}

//Превое задание

for (let j = 0; j < table.rows.length; j++) {
  let rows = table.rows[j];
  rows.cells[1].classList.add('tomato');
}