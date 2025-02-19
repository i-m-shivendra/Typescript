// It defines the structure and type information of a function without
// including the function's implementation or body
var myObject = function (input) {
    return "Hello, ".concat(input, "!");
};
myObject.propertyName = "Greeting Function";
console.log(myObject("World")); //output:Hello world
console.log(myObject.propertyName); //output:Greeting Function
