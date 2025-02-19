// an interface is a way to define the shape of an object. 
// It allows you to specify the structure of objects, 
// including the types of properties and methods they can have.
var person1 = {
    name: "Shivendra",
    age: 23
};
console.log(person1.name);
console.log(person1.age);
var person21 = {
    name: "Divya",
    age: 22
};
console.log(person21.name);
console.log(person21.age);
function printAnimalDetails(animal) {
    console.log("Species: ".concat(animal.species, ", Age: ").concat(animal.age));
}
var myPet1 = { species: "Dog", age: 5 };
printAnimalDetails(myPet1);
var myPet2 = { species: "Cat", age: 10 };
printAnimalDetails(myPet2);
var myPet3 = { species: "Cow", age: 15 };
printAnimalDetails(myPet3);
var myPet4 = { species: "Buffalo", age: 20 };
printAnimalDetails(myPet4);
var myBook1 = { title: "1984", author: "George Orwell" };
console.log(myBook1);
var myBook2 = { title: "The Last Night", author: "Winston Churchil" };
console.log(myBook2);
var myBook3 = { title: "The Diary of Young Girl", author: "Annie Frank" };
console.log(myBook3);
var myCar1 = { make: "Toyota", model: "Corolla", year: 2021 };
console.log(myCar1);
var myCar2 = { make: "Vitara", model: "Breeza", year: 2022 };
console.log(myCar2);
var myCar3 = { make: "Mahindra", model: "SUV", year: 2023 };
console.log(myCar3);
var employee1 = { name: "Alice", age: 30, employeeId: 1234 };
console.log(employee1);
var employee2 = { name: "Bob", age: 35, employeeId: 6785 };
console.log(employee2);
var employee3 = { name: "Charlie", age: 45, employeeId: 8765 };
console.log(employee3);
