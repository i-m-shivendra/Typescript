// Arrow function to filter strings with length less than or equal to four
var filterSmallWords = function () {
    var words = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        words[_i] = arguments[_i];
    }
    var smallWords = words.filter(function (word) { return word.length <= 4; });
    return smallWords;
};
// Input array
var words1 = ["batter", "zoo", "care", "mate", "stale", "seek", "silence", "tail", "act", "many"];
// Calling the function and displaying the result
var smallWords = filterSmallWords.apply(void 0, words1);
console.log(smallWords);
