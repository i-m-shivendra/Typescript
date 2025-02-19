var myFavNum = 5;
myFavNum = "Shivendra";
myFavNum = true;
//unknown practice question-1
var num3;
num3 = "Shivendra";
num3 = true;
num3 = 5;
if (typeof num3 === "number") {
    console.log(num3 + 5); // Now, TypeScript knows num3 is a number
}
else {
    console.log("num3 is not a number.");
}
//unknown- example 2
var num4;
num4 = "Shivendra";
num4 = 87;
num4 = true;
if (typeof num4 === "number") {
    console.log("Hey I am number data type");
}
else if (typeof num4 === "string") {
    console.log("Hey I am string data type");
}
else {
    console.log("Hey I am boolean data type");
}
