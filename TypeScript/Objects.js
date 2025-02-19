//A person's information - in the from of objects
var person = {
    name: "Shivendra",
    age: 23,
    isEmployee: true,
    address: {
        city: "Bhopal",
        country: "India"
    }
};
//For accessing the object information
console.log(person.name);
console.log(person.age);
console.log(person.isEmployee);
console.log(person.address.city);
console.log(person.address.country);
// objct example - 2 
var person2 = {
    firstName: "Shivendra",
    middleName: "Pratap",
    lastName: "Singh",
};
console.log("Hello, ".concat(person2.firstName, " ").concat(person2.middleName, "\n     ").concat(person2.lastName));
