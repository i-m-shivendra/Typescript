//filtering all numbers greater than 10
var numbers = [1, 12, 5, 18, 7, 30, 3];
var res = numbers.filter(function (num) { return num > 10; });
console.log(res);
//filter out all strings that have a length less than 4.
var words = ['apple', 'cat', 'banana', 'dog', 'elephant'];
var result = words.filter(function (str) { return str.length < 4; });
console.log(result);
var players = [
    { name: 'Alice', score: 30 },
    { name: 'Bob', score: 50 },
    { name: 'Charlie', score: 40 },
];
var getPlayers = players.filter(function (num) { return num.score < 50; });
console.log(getPlayers);
// find an id having score greater than 50
var data = [
    { id: 1, details: { score: 50 } },
    { id: 2, details: { score: 70 } },
    { id: 3, details: { score: 30 } },
];
var id = data.filter(function (num) { return num.details.score >= 50; });
console.log(id);
//Given an array of boolean values, filter out all false values.
var flags = [true, false, true, false, true];
var getFalse = flags.filter(function (num) { return !num; });
var getTrue = flags.filter(function (num) { return num; });
console.log(getFalse);
console.log(getTrue);
//Given an array filter out odd and even numbers
var num = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
var getOdd = num.filter(function (num) { return num % 2 != 0; });
var getEven = num.filter(function (num) { return num % 2 == 0; });
console.log(getOdd);
console.log(getEven);
//Given an array of objects, filter out objects that 
// contain a specific property.
var items = [
    { id: 1, name: 'A' },
    { id: 2, name: 'B', special: true },
    { id: 3, name: 'C' },
    { id: 4, name: 'D', special: true },
];
var special = items.filter(function (it) { return it.special; });
console.log(special);
//Given an array of numbers, filter out numbers that fall 
//within a specific range (e.g., between 10 and 20).
var numb = [5, 10, 15, 20, 25, 30];
var range = numb.filter(function (num) { return num >= 10 && num <= 20; });
console.log(range);
//Given an array containing different data types, 
//filter out all elements that are not numbers.
var mixedArray = [1, 'two', 3, 'four', 5, true, null];
var notNumbers = mixedArray.filter(function (num) { return typeof num !== 'number'; });
var numbersOnly = mixedArray.filter(function (num) { return typeof num === 'number'; });
console.log(notNumbers);
console.log(numbersOnly);
//Given an array of date strings, filter out all 
// dates before a specific date.
var dates = ['2023-01-01', '2023-06-15', '2024-01-01', '2022-12-31'];
var targetDate = new Date('2023-01-01');
var validDates = dates.filter(function (dat) { return new Date(dat) <= targetDate; });
console.log(validDates);
