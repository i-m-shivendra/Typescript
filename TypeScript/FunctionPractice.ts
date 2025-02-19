//write a function to add two numbers
function add(num1:number,num2:number):number{
    return (num1+num2);
}
let ans11=add(10,20);
console.log("Sum is::"+ans11);


//write a function to subtract two numbers
function subtract(num1:number,num2:number):number{
    return (num1-num2);
}
let ans12=subtract(20,10);
console.log(`Subtract is::`,ans12);


//write a function to multiply two numbers
function product(num1:number,num2:number):number{
    return (num1*num2);
}
let ans13=product(10,20);
console.log("Multiplication is::",ans13);

//write a function two divide two numbers
function division(num1:number,num2:number):number{
    return (num1/num2);
}
let ans14=division(20,10);
console.log(ans14);
let ans15=division(20,6);
console.log(ans15);

//write a function to find the remainder of two numbers
function remainder(num1:number,num2:number):number{
    return (num1%num2);
}
let ans16=remainder(10,3);
console.log(ans16);
let ans17=remainder(98,5);
console.log(ans17);


//write a function to check whether the given number is odd or even
function isOddEven(num:number):void{
    if(num%2===0){
        console.log("Even number");
    }
    else if(num%2!=0){
        console.log("Odd number");
        
    }
}
isOddEven(78);
isOddEven(71);

//write a program to reverse the digits of given integer
function reverseDigits(num:number){
    let reverseNumber=0;
    while(num!==0){
        let lastDigit:number=num%10;
        reverseNumber=reverseNumber*10+lastDigit;
        num = Math.floor(num/10);
    }
    console.log("Reverse::"+reverseNumber);
}
reverseDigits(362);

//alternate method to reverse the digits of given integer
function reverseDigits2(num: number): number {
    // Convert number to string, split into characters, reverse the array, 
    // join back to string, and convert back to number
    const reversedString = num.toString().split('').reverse().join('');
    const reversedNumber = parseInt(reversedString, 10);
    
    return reversedNumber;
}
const result2 = reverseDigits(362);
console.log("Reverse::" + result2);

//function with default parameters
function greet(name: string, greeting: string = "Hello"): string {
    return `${greeting}, ${name}!`;
}
let output=greet("Akshita");
console.log(output);

//function overloading
function combine(input1: number, input2: number): number;
function combine(input1: string, input2: string): string;
function combine(input1: any, input2: any): any {
    if (typeof input1 === "number" && typeof input2 === "number") {
        return input1 + input2;
    } else if (typeof input1 === "string" && typeof input2 === "string") {
        return input1 + input2;
    }
}
let combinedNumber = combine(10, 20); // Output: 30 
let combinedString = combine("Hello, ", "World!"); // Output: "Hello, World!" 
console.log(`Combined Number: ${combinedNumber}`);
console.log(`Combined String: ${combinedString}`);

//optional parameters
function printDetails(name: string, age?: number): void {
    if (age !== undefined) {
        console.log(`Name: ${name}, Age: ${age}`);
    } else {
        console.log(`Name: ${name}`);
    }
}
let result11=printDetails("Kanishka",22);
let result12=printDetails("Bhoomika");



