//union - when we don't sure about the data types
var score = 33;
score = 44;
console.log(score);
score = "55";
console.log(score);
score = true;
console.log(score);
var Shivendra = { name: "Shivendra", id: 334 };
Shivendra = { username: "Shiv", id: 556 };
//Example-3 - A very simple example
var value;
value = "Hello, world!";
console.log(value);
value = 42;
console.log(value);
//Example-4 - With Functions
function formatValue(value) {
    if (typeof value === "string") {
        return "String value: ".concat(value);
    }
    else if (typeof value === "number") {
        return "Number value: ".concat(value);
    }
}
console.log(formatValue("TypeScript"));
console.log(formatValue(101));
//Example-5 Union type with Arrays
var mixArray = ["Hello", 10, "World", 20];
mixArray.forEach(function (item) {
    if (typeof item === "string") {
        console.log("String: ".concat(item));
    }
    else if (typeof item === "number") {
        console.log("Number: ".concat(item));
    }
});
