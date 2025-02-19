//function definition(Default Parameters)
var greet5 = function (name, id) {
    if (id === void 0) { id = 1; }
    return ("Welcome, ".concat(name, " and your id is ").concat(id));
};
//function call
var ans5 = greet5("Shivendra");
console.log(ans5);
//function definition(Optional Parameters)
var greet6 = function (name, id) {
    if (id) {
        return ("Welcome ".concat(name, " and your id is ").concat(id));
    }
    else {
        return ("Welcome, ".concat(name));
    }
};
//function call
var ans6 = greet6("Nargis");
console.log(ans6);
