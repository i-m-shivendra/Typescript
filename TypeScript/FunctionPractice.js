//write a function to add two numbers
function add(num1, num2) {
    return (num1 + num2);
}
var ans11 = add(10, 20);
console.log("Sum is::" + ans11);
//write a function to subtract two numbers
function subtract(num1, num2) {
    return (num1 - num2);
}
var ans12 = subtract(20, 10);
console.log("Subtract is::", ans12);
//write a function to multiply two numbers
function product(num1, num2) {
    return (num1 * num2);
}
var ans13 = product(10, 20);
console.log("Multiplication is::", ans13);
//write a function two divide two numbers
function division(num1, num2) {
    return (num1 / num2);
}
var ans14 = division(20, 10);
console.log(ans14);
var ans15 = division(20, 6);
console.log(ans15);
//write a function to find the remainder of two numbers
function remainder(num1, num2) {
    return (num1 % num2);
}
var ans16 = remainder(10, 3);
console.log(ans16);
var ans17 = remainder(98, 5);
console.log(ans17);
//write a function to check whether the given number is odd or even
function isOddEven(num) {
    if (num % 2 === 0) {
        console.log("Even number");
    }
    else if (num % 2 != 0) {
        console.log("Odd number");
    }
}
isOddEven(78);
isOddEven(71);
//write a program to reverse the digits of given integer
function reverseDigits(num) {
    var reverseNumber = 0;
    while (num !== 0) {
        var lastDigit = num % 10;
        reverseNumber = reverseNumber * 10 + lastDigit;
        num = Math.floor(num / 10);
    }
    console.log("Reverse::" + reverseNumber);
}
reverseDigits(362);
//alternate method to reverse the digits of given integer
function reverseDigits2(num) {
    // Convert number to string, split into characters, reverse the array, 
    // join back to string, and convert back to number
    var reversedString = num.toString().split('').reverse().join('');
    var reversedNumber = parseInt(reversedString, 10);
    return reversedNumber;
}
var result2 = reverseDigits(362);
console.log("Reverse::" + result2);
//function with default parameters
function greet(name, greeting) {
    if (greeting === void 0) { greeting = "Hello"; }
    return "".concat(greeting, ", ").concat(name, "!");
}
var output = greet("Akshita");
console.log(output);
function combine(input1, input2) {
    if (typeof input1 === "number" && typeof input2 === "number") {
        return input1 + input2;
    }
    else if (typeof input1 === "string" && typeof input2 === "string") {
        return input1 + input2;
    }
}
var combinedNumber = combine(10, 20); // Output: 30 
var combinedString = combine("Hello, ", "World!"); // Output: "Hello, World!" 
console.log("Combined Number: ".concat(combinedNumber));
console.log("Combined String: ".concat(combinedString));
//optional parameters
function printDetails(name, age) {
    if (age !== undefined) {
        console.log("Name: ".concat(name, ", Age: ").concat(age));
    }
    else {
        console.log("Name: ".concat(name));
    }
}
var result11 = printDetails("Kanishka", 22);
var result12 = printDetails("Bhoomika");
