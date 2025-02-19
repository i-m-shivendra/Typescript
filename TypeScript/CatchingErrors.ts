//program to add two numbers 
function sum(a,b){
    return a+b;
}
console.log(sum(5,10));

//program to add two numbers
function sum2(a,b){
    return a+b;
}
console.log(sum2(5,"Shivendra"));

//program to add two numbers
function sum3(a:number,b:number):number{
    return a+b;
}
console.log(sum3(5,10));

//use of NaN
let nanValue: number = NaN;
console.log(nanValue); // Outputs: NaN

//string length
let myName:String="Shivendra";
let len=myName.length;
console.log(len);

//string uppercase and lowercase
let str="shIveNDra";
let upp=str.toUpperCase();
console.log(upp);
let low=str.toLowerCase();
console.log(low);


//string comparison
let str3="Shivendra";
let str4="Shivendra";
console.log(str3===str4);
console.log(str3==str4);

//string comparison
let str5="Shivendra";
let str6="shivendra";
console.log(str5===str6);
console.log(str5==str6);

//string and extracting substring
let str7="Shivendra Pratap Singh";
let str8=str7.substring(8);
let str9=str7.substring(4,10);
console.log(str8);
console.log(str9);

















