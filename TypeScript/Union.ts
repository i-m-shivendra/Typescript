//union - when we don't sure about the data types
let score: number | string | boolean = 33;
score=44;
console.log(score);
score="55";
console.log(score);
score=true;
console.log(score);

//Example-2 - User defined data type
type User={
    name: string;
    id: number;
}

type Admin={
    username:string;
    id:number;
}

let Shivendra: User | Admin ={name:"Shivendra",id:334};
Shivendra = {username:"Shiv",id:556};


//Example-3 - A very simple example
let value: string | number;
value = "Hello, world!";
console.log(value); 
value = 42;
console.log(value);

//Example-4 - With Functions
function formatValue(value: string | number): string {
    if (typeof value === "string") {
        return `String value: ${value}`;
    } 
    else if(typeof value==="number"){
        return `Number value: ${value}`;
    }
}
console.log(formatValue("TypeScript")); 
console.log(formatValue(101));          

//Example-5 Union type with Arrays
let mixArray: (string | number)[] = ["Hello", 10, "World", 20];
mixArray.forEach((item) => {
    if (typeof item === "string") {
        console.log(`String: ${item}`);
    } 
    else if(typeof item==="number") {
        console.log(`Number: ${item}`);
    }
});
