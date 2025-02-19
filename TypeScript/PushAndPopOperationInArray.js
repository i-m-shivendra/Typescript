var runs = [67, 89, 34, 21, 98];
console.log(runs);
//Adding elements to last
runs.push(69);
runs.push(103);
runs.push(76);
console.log(runs);
//Removing Elements from last
runs.pop();
console.log(runs);
//Adding elements to front
runs.unshift(15);
runs.unshift(24);
runs.unshift(32);
console.log(runs);
//Removing elements from front
runs.shift();
console.log(runs);
//use of sort function
console.log(runs.sort(function (a, b) { return a - b; }));
console.log(runs.sort(function (a, b) { return b - a; }));
//use of slice function
console.log(runs.slice(2, 7));
console.log(runs.slice(5));
console.log(runs.slice(-5));
// const value1=runs.includes(103);  // It is in ES-6 not in Es-5
// console.log(value1);
// const value2=runs.includes(100);  // It is in ES-6 not in ES-5
// console.log(value2);
//use of splice function
console.log(runs.splice(5, 2));
console.log(runs);
console.log(runs.splice(3, 2, 6));
console.log(runs);
console.log(runs.splice(2, 1, 3, 4));
console.log(runs);
console.log(runs.splice(4, 3, 7, 89, 456, 60, 54));
console.log(runs);
//use of concat function
var run = [99, 53, 245, 398, 999];
console.log(run);
var newArray = run.concat(runs);
console.log(newArray);
/* find and findElement is present in ES-6
console.log(newArray.find(element=>element>900));
*/
//use of filter operation
var filteredOperation1 = newArray.filter(function (element) { return element > 900; });
console.log(filteredOperation1);
var filteredOperation2 = newArray.filter(function (element) { return element % 2 == 0; });
console.log(filteredOperation2);
var filteredOperation3 = newArray.filter(function (element) { return element % 2 != 0; });
console.log(filteredOperation3);
//use of reduce operation
var sum = newArray.reduce(function (sum, number) { return sum + number; }, 0);
console.log(sum);
var multiply = newArray.reduce(function (multiply, number) { return multiply * number; }, 1);
console.log(multiply);
//use of map operation
var doubledNumbers = newArray.map((function (number) { return number * 2; }));
console.log(doubledNumbers);
