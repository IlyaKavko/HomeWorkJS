let data = [ {
    firstName: 'Ashton ',
    lastName: 'Kutcher',
    age:40
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

if (users == data[0].lastName) {

    console.log('User name: ', data[0].firstName + data[0].lastName);
    console.log('User age: ', data[0].age)

}   else if (users == data[1].lastName) {

    console.log('User name: ', data[1].firstName + data[1].lastName);
    console.log('User age: ', data[1].age)

}   else if (users == data[2].lastName) {

    console.log('User name: ', data[2].firstName + data[2].lastName);
    console.log('User age: ', data[2].age)

}   else {

    console.log('No results found for your request')

};
