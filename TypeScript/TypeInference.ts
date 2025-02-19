/*
let myFirstName="Shivendra";
myFirstName=9;  //Type number is not assignable to type string
*/

let firstName="Shivendra"; //The compiler infers the type string for variable
let age=22;  //The compiler infers the type number for the variable age;
let isValid=true; //The compiler infers the type boolean for vaiable isValid

let message="Hello, Typescript!";
console.log(message);


//function to calculate area of rectangle
function calculateArea(length:number,breadth:number){
      return length*breadth;
}
let area=calculateArea(6,8);
console.log(area);
