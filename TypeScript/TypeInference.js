/*
let myFirstName="Shivendra";
myFirstName=9;  //Type number is not assignable to type string
*/
var firstName = "Shivendra"; //The compiler infers the type string for variable
var age = 22; //The compiler infers the type number for the variable age;
var isValid = true; //The compiler infers the type boolean for vaiable isValid
var message = "Hello, Typescript!";
console.log(message);
//function to calculate area of rectangle
function calculateArea(length, breadth) {
    return length * breadth;
}
var area = calculateArea(6, 8);
console.log(area);
