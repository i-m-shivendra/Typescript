//function declaration and definition
function greet(name, id) {
    console.log("Welcome, ".concat(name, " and your id is ").concat(id));
}
//function call
greet("Shivendra", 1);
//Arrow Function
var greet2 = function (name, id) {
    console.log("Welcome, ".concat(name, " and your id is ").concat(id));
};
greet2("Madubala", 2);
//to check whether the given string is palindrome or not
var isPalindrome = function (palin) {
    var myPalin = palin.split("").reverse().join("");
    return myPalin === palin;
};
var check = isPalindrome("12321");
console.log(check);
