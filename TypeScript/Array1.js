var scores = [67, 54, 32, 89, 87];
for (var i = 0; i < scores.length; i++) {
    console.log("Score of Player in " + i + " inning is::" + scores[i]);
}
console.log("\n");
scores.forEach(function (itr, i) {
    console.log("Score of Player in " + i + " inning is::" + itr);
});
console.log("\n");
scores.forEach(function (itr) {
    console.log(itr);
});
console.log("\n");
for (var _i = 0, scores_1 = scores; _i < scores_1.length; _i++) {
    var itr = scores_1[_i];
    console.log(itr);
}
