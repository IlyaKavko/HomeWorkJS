let body = document.body

let table = document.createElement('table');
body.append(table);

let arr = [
    ['1:1', '1:2', '1:3', '1:4', '1:5'], 
    ['2:1', '2:2', '2:3', '2:4', '2:5'], 
    ['3:1', '3:2', '3:3', '3:4', '3:5'], 
    ['4:1', '4:2', '4:3', '4:4', '4:5'], 
    ['5:1', '5:2', '5:3', '5:4', '5:5']
];

for (let i = 0; i < arr.length; i++) {
    let tr = document.createElement('tr');
    table.append(tr);
    for (let j = 0; j < arr[i].length; j++) {
        let td = document.createElement('td');
        td.innerHTML = arr[i][j];
        tr.append(td);
    }
}

for (let k = 0; k < table.rows.length; k++) {
    let rows = table.rows[k];
    rows.cells[4 - k].classList.add('red')
}
