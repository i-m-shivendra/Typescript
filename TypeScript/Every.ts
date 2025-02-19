//check whether the given series consist of even numbers
let num:number[]=[2,4,6,8,10];
let ans=num.every(n=>n%2==0);
console.log(ans);

//check whether the given series consist of even numbers
let num2:number[]=[2,4,6,8,10,15,8,11];
let ans2=num.every(n=>n%2==0);
console.log(ans2);

//check whether the given series consist of odd numbers
let numb:number[]=[1,3,5,7,9];
let result=numb.every(n=>n%2!=0)
console.log(result);

//check whether the given series consist of odd numbers
let numb1:number[]=[1,3,5,7,9,10,12];
let result1=numb.every(n=>n%2!=0)
console.log(result1);

//check whether the given string is greater than length 3
const words: string[] = ['apple', 'banana', 'orange', 'mango'];
const allLengthGreaterThan3 = words.every((word) => word.length > 3);
console.log(allLengthGreaterThan3); // Output: true


