var _a;
//Tuple me length aur datatypes pahle se define hota hai sabhi index ke liye
var arrTuple = [501, "Welcome", 505, "Shivendra"];
console.log(arrTuple);
var actor1 = ["Shahrukh", 59, true];
var actor2 = ["Ranbeer", 43, true];
var actor3 = ["Siddhartha", 40, false];
console.log(actor1);
console.log(actor2);
console.log(actor3);
var actress1 = ["Katrina", 42, false];
console.log("Name of the actress1::" + actress1[0]);
console.log("Age of actress1::" + actress1[1]);
console.log("Whether she is famous::", actress1[2]);
var actress2 = ["Alia", 38, true];
console.log("Name of the actress2::" + actress2[0]);
console.log("Age of the actress2::" + actress2[1]);
console.log("Whether she is famous::" + actress2[2]);
var actress3 = ["Priyanka", 45, false];
console.log("Name of the actress3::" + actress3[0]);
console.log("Age of the actress3::" + actress3[1]);
console.log("Whether she is famous::" + actress3[2]);
// Returning Multiple Values from a Function
function getDetails() {
    var name = "Shivendra";
    var age = 23;
    var isActive = true;
    return [name, age, isActive];
}
var details = getDetails();
console.log("Name: ".concat(details[0], ", Age: ").concat(details[1], ", Active: ").concat(details[2]));
//swapping variables using tuples
var a = 1;
var b = 2;
_a = [b, a], a = _a[0], b = _a[1];
console.log("a: ".concat(a, ", b: ").concat(b)); // Outputs: a: 2, b: 1
//Destructuring tuples
var employee = ["Alice", 30, true];
var name1 = employee[0], age1 = employee[1], isEmployed1 = employee[2];
console.log("Name: ".concat(name1, ", Age: ").concat(age1, ", Employed: ").concat(isEmployed1));
var example = ["Numbers", 1, 2, 3, 4];
console.log(example); // ["Numbers", 1, 2, 3, 4]
