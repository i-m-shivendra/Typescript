//a class is a blueprint for creating objects with specific properties 
//and methods. Classes enable you to encapsulate data and behavior 
//in a structured way, promoting object-oriented programming 
//principles such as inheritance, encapsulation, and polymorphism.

import { readConfigFile } from "typescript";

//Example-1 
class Person {
    // Properties
    name: string;
    age: number;

    // Constructor
    constructor(name: string, age: number) {
        this.name = name;
        this.age = age;
    }

    // Method
    greet() {
        console.log(`Hello, my name is ${this.name} and I am ${this.age} years old.`);
    }
}

// Creating instances of the class
const person11 = new Person("Shivendra", 23);
person11.greet();

const person12 = new Person("Ajay", 24);
person12.greet();

const person13 = new Person("Shyam", 54);
person13.greet();


//Example-2 - Basic Example 
class Student{
    name:string;
    department:string;
    rollNo:number;

    constructor(name:string,department:string,rollNo:number){
        this.name=name;
        this.department=department;
        this.rollNo=rollNo;
    }

    display(){
        console.log("Name::"+this.name);
        console.log("Department::"+this.department);
        console.log("Roll No::"+this.rollNo);
        
    }
}

const Student1=new Student("Alice","CSE",953);
const Student2=new Student("Bob","IT",537);
const Student3=new Student("Charlie","ECE",521);
Student1.display();
Student2.display();
Student3.display();

//Example-3 Class With Methods
class Rectangle {
    width: number;
    height: number;

    constructor(width: number, height: number) {
        this.width = width;
        this.height = height;
    }

    area(): number {
        return this.width * this.height;
    }

    perimeter(): number {
        return 2 * (this.width + this.height);
    }
}

const myRectangle1 = new Rectangle(5, 10);
console.log(`Area: ${myRectangle1.area()}`); 
console.log(`Perimeter: ${myRectangle1.perimeter()}`);

const myRectangle2 = new Rectangle(5.98, 4.2134);
console.log(`Area: ${myRectangle2.area()}`);
console.log(`Perimeter: ${myRectangle2.perimeter()}`); 
