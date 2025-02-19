//First question Rest parameter - using sum function
function sum(...numbers: number[]): number {
    return numbers.reduce((total, num) => total + num, 0);
}
console.log(sum(1,2,3,4)); 
console.log(sum(10,20,30)); 
console.log(sum(1,2,3,4,5,6,7,8,9,10));


//Second question Rest paramter - using product function
function product(...num:number[]):number{
   let product=num.reduce((multiply,i)=>multiply*i,1);
   return product;
}
console.log(product(1,2,3,4,5));
console.log(product(10,3,40));
console.log(product(23,23));

//Third question Rest Parameter - find the average
function avg(...numbers:number[]):number{
     let total=0;
     for(let num of numbers){
        total += num;
     }
     return numbers.length === 0 ? 0 : total/numbers.length;
}
console.log(avg(1,78,5));
console.log(avg(1,2,3,4,5,6,7,8,9,10));


//rest parameter - concatenation of strings
function joinStrings(...names:string[]):string{
      return names.join(" , ");
}
let finalResult1=joinStrings("Shivendra","Mayank","Raj","Ritik","Vaibhav");
let finalResult2=joinStrings(" are the cousins");
let lastResult=finalResult1+finalResult2;
console.log(lastResult);

//rest parameter example - concatenation of strings
function concatenateStrings(...strings: string[]): string {
    return strings.join(', ');
}
console.log(concatenateStrings("Hello", "World", "TypeScript")); 