// It defines the structure and type information of a function without
// including the function's implementation or body


// call signatures are typically used inside object-type-annotation to desribe
// the shape of functions within object types 

//TypeScript call signatures define objects that can be invoked like functions
// but also have properties. They specify the parameter and return type 
// of the function

//Example-1 Greeting Function
type MyObject={
    (input: string):string   // call signature
    propertyName: string;    // Property
};


const myObject:MyObject=(input:string)=>{
    return `Hello, ${input}!`;
};

myObject.propertyName="Greeting Function";

console.log(myObject("World"));   //output:Hello world
console.log(myObject.propertyName); //output:Greeting Function

//Example-2 Calculator

// Define the Calculator interface
interface Calculator {
    (a: number, b: number): number; // Call signature
    operation: string;              // Property
}

// Create objects that satisfy the Calculator interface
const add: Calculator = (Object.assign((a: number, b: number) => a + b, { operation: "Addition" }));
const multiply: Calculator = (Object.assign((a: number, b: number) => a * b, { operation: "Multiplication" }));

// Log the results
console.log(`Operation: ${add.operation}, Result: ${add(5, 3)}`);       // Output: Operation: Addition, Result: 8
console.log(`Operation: ${multiply.operation}, Result: ${multiply(5, 3)}`); // Output: Operation: Multiplication, Result: 15
