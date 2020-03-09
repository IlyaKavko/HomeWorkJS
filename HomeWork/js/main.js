let data = [
        {
        firstName: 'Ashton',
        lastName: 'Kutcher',
        age: 40
    }, {
        firstName: 'Bradley',
        lastName: 'Pitt',
        age: 54
    }, {
        firstName: 'Hanna',
        lastName: 'Dakota',
        age: 24
    }
];

let users = prompt ('Enter last name');
let result = 'No results found for your request';

for (let i = 0; i < data.length; i++) {
    if (users.toUpperCase() == data[i].lastName.toUpperCase()) {
        result = `User name: ${data[i].firstName} ${data[i].lastName} 
User age: ${data[i].age}`;
    } 
};

console.log(result);