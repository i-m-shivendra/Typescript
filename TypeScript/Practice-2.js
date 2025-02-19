// enum Family{Mummy, Papa, Shivani, Choti};
// console.log(Family.Mummy);
// console.log(Family['Mummy']);
// console.log(Family[0]);
function add42(a, b) {
    return (a + b);
}
var result51 = add42(45, 45);
console.log(result51);
function getPoductDetails(productName) {
    return "Product identified is::" + productName;
}
var productName = getPoductDetails("Laptop");
console.log(productName);
var subtract51 = function (c, d) {
    return (c - d);
};
var result52 = subtract51(45, 45);
console.log(result52);
var product51 = function (e, f) {
    return (e * f);
};
console.log(product51(3, 6));
var division51 = function (g, h) {
    return (g / h);
};
console.log(division51(60, 32));
var remainder51 = function (i, j) {
    return (i / j);
};
console.log((remainder51(78, 23)));
//optional parameter
function add101(k, l) {
    if (l === undefined) {
        return k;
    }
    return (k + l);
}
var ans101 = add101(23);
var ans102 = add101(89, 43);
console.log(ans101);
console.log(ans102);
// default parameter
function add151(m, n) {
    if (n === void 0) { n = 76; }
    return (m + n);
}
var ans151 = add101(24);
var ans152 = add101(54, 45);
console.log(ans151);
console.log(ans152);
//Rest Parameters
// Add function using rest parameters
var add201 = function () {
    var numbers = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        numbers[_i] = arguments[_i];
    }
    return numbers.reduce(function (total, num) { return total + num; }, 0);
};
// Example usage
console.log(add201(10, 20));
console.log(add201(5, 15, 25, 35));
console.log(add201(1));
console.log(add201(1, 2, 3, 4, 5, 6, 7, 8, 9, 10));
