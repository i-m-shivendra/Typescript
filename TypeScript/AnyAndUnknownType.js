var myFavNum = 5;
myFavNum = "Shivendra";
myFavNum = true;
//unknown practice question-1
var num3;
num3 = "Shivendra";
num3 = true;
num3 = 5;
if (typeof num3 === "number") {
    console.log(num3 + 5); // Now, TypeScript knows num3 is a number
}
else {
    console.log("num3 is not a number.");
}
//unknown- example 2
var num4;
num4 = "Shivendra";
num4 = 87;
num4 = true;
if (typeof num4 === "number") {
    console.log("Hey I am number data type");
}
else if (typeof num4 === "string") {
    console.log("Hey I am string data type");
}
else {
    console.log("Hey I am boolean data type");
}
//unknown example 3 - Function with unknown parameter
function processValue(input) {
    // Task: Check if the input is a string, and if so, return its length. If it's a number, return its double.
}
console.log(processValue("TypeScript")); // Output should be: 10
console.log(processValue(21)); // Output should be: 42
//unknown example 4 - Handling array with unknown elements
var newArrayList = ["hello", 42, true];
function logMixedArrayElements(array) {
    array.forEach(function (element) {
        if (typeof element === "string") {
            console.log("This is a string: ".concat(element));
        }
        else if (typeof element === "number") {
            console.log("This is a number: ".concat(element));
        }
        else if (typeof element === "boolean") {
            console.log("This is a boolean: ".concat(element));
        }
        else {
            console.log("Unknown type detected.");
        }
    });
}
logMixedArrayElements(newArrayList);
