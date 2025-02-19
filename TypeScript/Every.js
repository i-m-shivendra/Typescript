//check whether the given series consist of even numbers
var num = [2, 4, 6, 8, 10];
var ans = num.every(function (n) { return n % 2 == 0; });
console.log(ans);
//check whether the given series consist of even numbers
var num2 = [2, 4, 6, 8, 10, 15, 8, 11];
var ans2 = num.every(function (n) { return n % 2 == 0; });
console.log(ans2);
//check whether the given series consist of odd numbers
var numb = [1, 3, 5, 7, 9];
var result = numb.every(function (n) { return n % 2 != 0; });
console.log(result);
//check whether the given series consist of odd numbers
var numb1 = [1, 3, 5, 7, 9, 10, 12];
var result1 = numb.every(function (n) { return n % 2 != 0; });
console.log(result1);
