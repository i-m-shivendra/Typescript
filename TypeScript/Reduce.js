//Given an array find sum of all elements
var series = [1, 2, 3, 4, 5];
var res = series.reduce(function (sum, i) { return sum + i; }, 0);
console.log(res);
//Given an array find product of all elements
var num = [1, 2, 3, 4, 5];
var result = num.reduce(function (product, i) { return product * i; }, 1);
console.log(result);
//Flatten an array - converting 2d array into 1d array
var array2D = [[1, 2], [3, 4], [5]];
var ans = array2D.reduce(function (acc, val) { return acc.concat(val); }, []);
console.log(ans);
//concatenation of two strings
var strings = ['Hello', ' ', 'World', '!'];
var concatenated = strings.reduce(function (acc, str) { return acc + str; }, '');
console.log(concatenated);
//finding the average of an array
var scores = [10, 20, 30, 40, 50];
var average = scores.reduce(function (acc, score, _, _a) {
    var length = _a.length;
    return acc + score / length;
}, 0);
console.log(average);
//count the booleans
var flags = [true, false, true, false, true];
var trueCount = flags.reduce(function (acc, flag) { return acc + (flag ? 1 : 0); }, 0);
console.log(trueCount);
