let data = [
        {
        firstName: 'Ashton ',
        lastName: 'Kutcher',
        age: 40
    }, {
        firstName: 'Bradley ',
        lastName: 'Pitt',
        age: 54
    }, {
        firstName: 'Hanna ',
        lastName: 'Dakota',
        age: 24
    }
];

let users = prompt ('Enter last name');

for (let i = 0; i < data.length; i++) {
    if (users == data[i].lastName) {
        console.log('User name:', data[i].firstName + data[i].lastName);
        console.log('User age:', data[i].age)
    } 
};
