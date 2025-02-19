// an interface is a way to define the shape of an object. 
// It allows you to specify the structure of objects, 
// including the types of properties and methods they can have.

//Example-1 - Basic Example
interface Person {
    name: string;
    age: number;
}

let person1: Person = {
    name: "Shivendra",
    age: 23
};
console.log(person1.name); 
console.log(person1.age);  

let person21:Person={
    name: "Divya",
    age: 22
};
console.log(person21.name); 
console.log(person21.age);  



// Example-2 - With functions
interface Animal {
    species: string;
    age: number;
}

function printAnimalDetails(animal: Animal): void {
    console.log(`Species: ${animal.species}, Age: ${animal.age}`);
}

let myPet1: Animal = { species: "Dog", age: 5 };
printAnimalDetails(myPet1);

let myPet2:Animal={species:"Cat", age:10};
printAnimalDetails(myPet2);

let myPet3:Animal={species:"Cow", age:15};
printAnimalDetails(myPet3);

let myPet4:Animal={species:"Buffalo", age:20}
printAnimalDetails(myPet4);

//Example-3 Interface with optional properties
interface Book {
    title: string;
    author: string;
    publishedYear?: number; // Optional property
}
let myBook1: Book = { title: "1984", author: "George Orwell" };
console.log(myBook1); 

let myBook2: Book = {title: "The Last Night", author: "Winston Churchil"};
console.log(myBook2);

let myBook3:Book = {title: "The Diary of Young Girl", author:"Annie Frank"};
console.log(myBook3);


//Example-4 interface with read only properties
interface Car {
    readonly make: string;
    readonly model: string;
    year: number;
}

let myCar1: Car = { make: "Toyota", model: "Corolla", year: 2021 };
console.log(myCar1);

let myCar2: Car = { make: "Vitara", model: "Breeza", year:2022 };
console.log(myCar2);

let myCar3: Car = {make: "Mahindra", model:"SUV", year:2023};
console.log(myCar3);


// Interface - Inheritance
interface BasicInfo {
    name: string;
    age: number;
}

interface Employee extends BasicInfo {
    employeeId: number;
}

let employee1: Employee = { name: "Alice", age: 30, employeeId: 1234 };
console.log(employee1); 

let employee2 : Employee = {name: "Bob", age: 35, employeeId: 6785};
console.log(employee2);

let employee3:Employee={name: "Charlie", age: 45, employeeId: 8765};
console.log(employee3);



