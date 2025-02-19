//Tuple me length aur datatypes pahle se define hota hai sabhi index ke liye
let arrTuple:[number,string,number,string]=[501,"Welcome",505,"Shivendra"];
console.log(arrTuple);

//Declartion and Initialization of Tuples
type Actor=[string,number,boolean]
const actor1:Actor=["Shahrukh",59,true];
const actor2:Actor=["Ranbeer",43,true];
const actor3:Actor=["Siddhartha",40,false];
console.log(actor1);
console.log(actor2);
console.log(actor3);

//Example-2 Tuples
type Actress=[string,number,boolean]

let actress1:Actress=["Katrina",42,false];
console.log("Name of the actress1::"+actress1[0]);
console.log("Age of actress1::"+actress1[1]);
console.log("Whether she is famous::",actress1[2]);

let actress2:Actress=["Alia",38,true];
console.log("Name of the actress2::"+actress2[0]);
console.log("Age of the actress2::"+actress2[1]);
console.log("Whether she is famous::"+actress2[2]);

let actress3:Actress=["Priyanka",45,false];
console.log("Name of the actress3::"+actress3[0]);
console.log("Age of the actress3::"+actress3[1]);
console.log("Whether she is famous::"+actress3[2]);


// Returning Multiple Values from a Function
function getDetails(): [string, number, boolean] {
    let name = "Shivendra";
    let age = 23;
    let isActive = true;
    return [name, age, isActive];
}
let details = getDetails();
console.log(`Name: ${details[0]}, Age: ${details[1]}, Active: ${details[2]}`); 


//swapping variables using tuples
let a: number = 1;
let b: number = 2;
[a, b] = [b, a];
console.log(`a: ${a}, b: ${b}`); // Outputs: a: 2, b: 1

//Destructuring tuples
let employee: [string, number, boolean] = ["Alice", 30, true];
let [name1, age1, isEmployed1] = employee;
console.log(`Name: ${name1}, Age: ${age1}, Employed: ${isEmployed1}`);

//Tuples with rest parameter
type StringNumberTuple = [string, ...number[]];
let example: StringNumberTuple = ["Numbers", 1, 2, 3, 4];
console.log(example); // ["Numbers", 1, 2, 3, 4]
