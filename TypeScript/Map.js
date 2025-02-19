var celius = [0, 10, 20, 30, 40, 50];
//converting celsius to fahrenheit
var fahrenheit = celius.map(function (temp) { return (temp * 9 / 5) + 32; });
console.log(fahrenheit);
//converting celsius to kelvin
var kelvin = celius.map(function (temp) { return temp + 273; });
console.log(kelvin);
//converting strings to lowercase
var words = ["SHIVENDRA", "SachiN", "Alia", "Katrina"];
var upper = words.map(function (word) { return word.toLowerCase(); });
console.log(upper);
//converting strings to uppercase
var lowers = ["madhubala", "nargis", "nanda", "waheeda"];
var lower = lowers.map(function (str) { return str.toUpperCase(); });
console.log(lower);
//extracting names and marks from arrays
var players = [
    { name: 'Alice', marks: 80 },
    { name: 'Bob', marks: 70 },
    { name: 'Charlie', marks: 90 },
];
//extracting names from arrays
var names = players.map(function (player) { return player.name; });
console.log(names);
//extracting marks from arrays
var mark = players.map(function (player) { return player.marks; });
console.log(mark);
//Example of cricketers
var cricketers = [
    { name: "MS Dhoni", age: 43, runs: 5000 },
    { name: "Virat Kohli", age: 36, runs: 10000 },
    { name: "Sachin Tendulkar", age: 51, runs: 15000 }
];
//Accessing the name of cricketers
var cricketerNames = cricketers.map(function (newNames) { return newNames.name; });
console.log(cricketerNames);
//Accessing the age of cricketers
var cricketerAges = cricketers.map(function (newAge) { return newAge.age; });
console.log(cricketerAges);
//Accessing the runs of cricketers
var cricketerRuns = cricketers.map(function (newRuns) { return newRuns.runs; });
console.log(cricketerRuns);
//calculating the length of the given strings
var students = ["Nisha", "Brijendra", "Shivani", "Shivendra", "Priyanshi"];
var size = students.map(function (len) { return len.length; });
console.log(size);
//Extracting nested values(value inside value)
var bankDetails = [
    { name: "Vijay", account: { password: "Vijay@123" } },
    { name: "Shyam", account: { password: "Shyam@123" } },
    { name: "Sundar", account: { password: "Sundar@123" } }
];
//Accessing bankHolderName
var bankHolderName = bankDetails.map(function (newName) { return newName.name; });
console.log(bankHolderName);
//Accessing password(sensitive information)
var userPassword = bankDetails.map(function (pass) { return pass.account.password; });
console.log(userPassword);
//squaring each number in array
var squares = [1, 34, 21, 67, 99];
var ans = squares.map(function (val) { return val * val; });
console.log(ans);
//find cube of each numbers in array
var cubes = [2, 45, 10, 99, 43];
var res = cubes.map(function (val) { return val * val * val; });
console.log(res);
