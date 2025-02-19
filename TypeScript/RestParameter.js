//First question Rest parameter - using sum function
function sum() {
    var numbers = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        numbers[_i] = arguments[_i];
    }
    return numbers.reduce(function (total, num) { return total + num; }, 0);
}
console.log(sum(1, 2, 3, 4));
console.log(sum(10, 20, 30));
console.log(sum(1, 2, 3, 4, 5, 6, 7, 8, 9, 10));
//Second question Rest paramter - using product function
function product() {
    var num = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        num[_i] = arguments[_i];
    }
    var product = num.reduce(function (multiply, i) { return multiply * i; }, 1);
    return product;
}
console.log(product(1, 2, 3, 4, 5));
console.log(product(10, 3, 40));
console.log(product(23, 23));
//Third question Rest Parameter - find the average
function avg() {
    var numbers = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        numbers[_i] = arguments[_i];
    }
    var total = 0;
    for (var _a = 0, numbers_1 = numbers; _a < numbers_1.length; _a++) {
        var num = numbers_1[_a];
        total += num;
    }
    return numbers.length === 0 ? 0 : total / numbers.length;
}
console.log(avg(1, 78, 5));
console.log(avg(1, 2, 3, 4, 5, 6, 7, 8, 9, 10));
//rest parameter - concatenation of strings
function joinStrings() {
    var names = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        names[_i] = arguments[_i];
    }
    return names.join(" , ");
}
var finalResult1 = joinStrings("Shivendra", "Mayank", "Raj", "Ritik", "Vaibhav");
var finalResult2 = joinStrings(" are the cousins");
var lastResult = finalResult1 + finalResult2;
console.log(lastResult);
//rest parameter example - concatenation of strings
function concatenateStrings() {
    var strings = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        strings[_i] = arguments[_i];
    }
    return strings.join(', ');
}
console.log(concatenateStrings("Hello", "World", "TypeScript"));
