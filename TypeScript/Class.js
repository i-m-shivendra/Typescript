"use strict";
//a class is a blueprint for creating objects with specific properties 
//and methods. Classes enable you to encapsulate data and behavior 
//in a structured way, promoting object-oriented programming 
//principles such as inheritance, encapsulation, and polymorphism.
Object.defineProperty(exports, "__esModule", { value: true });
//Example-1 
var Person = /** @class */ (function () {
    // Constructor
    function Person(name, age) {
        this.name = name;
        this.age = age;
    }
    // Method
    Person.prototype.greet = function () {
        console.log("Hello, my name is ".concat(this.name, " and I am ").concat(this.age, " years old."));
    };
    return Person;
}());
// Creating instances of the class
var person11 = new Person("Shivendra", 23);
person11.greet();
var person12 = new Person("Ajay", 24);
person12.greet();
var person13 = new Person("Shyam", 54);
person13.greet();
//Example-2 - Basic Example 
var Student = /** @class */ (function () {
    function Student(name, department, rollNo) {
        this.name = name;
        this.department = department;
        this.rollNo = rollNo;
    }
    Student.prototype.display = function () {
        console.log("Name::" + this.name);
        console.log("Department::" + this.department);
        console.log("Roll No::" + this.rollNo);
    };
    return Student;
}());
var Student1 = new Student("Alice", "CSE", 953);
var Student2 = new Student("Bob", "IT", 537);
var Student3 = new Student("Charlie", "ECE", 521);
Student1.display();
Student2.display();
Student3.display();
//Example-3 Class With Methods
var Rectangle = /** @class */ (function () {
    function Rectangle(width, height) {
        this.width = width;
        this.height = height;
    }
    Rectangle.prototype.area = function () {
        return this.width * this.height;
    };
    Rectangle.prototype.perimeter = function () {
        return 2 * (this.width + this.height);
    };
    return Rectangle;
}());
var myRectangle1 = new Rectangle(5, 10);
console.log("Area: ".concat(myRectangle1.area())); // Outputs: Area: 50
console.log("Perimeter: ".concat(myRectangle1.perimeter())); // Outputs: Perimeter: 30
var myRectangle2 = new Rectangle(5.98, 4.2134);
console.log("Area: ".concat(myRectangle2.area())); // Outputs: Area: 25.194132
console.log("Perimeter: ".concat(myRectangle2.perimeter())); // Outputs: Perimeter: 20.3868
