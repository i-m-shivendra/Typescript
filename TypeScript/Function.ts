//function declaration and definition
function greet(name:string,id:number){
   console.log(`Welcome, ${name} and your id is ${id}`);
   
}
//function call
greet("Shivendra",1);


//Arrow Function
const greet2=(name:string,id:number)=>{
    console.log(`Welcome, ${name} and your id is ${id}`);
}
greet2("Madubala",2);


//to check whether the given string is palindrome or not
const isPalindrome=(palin:string): boolean=>{
     let myPalin=palin.split("").reverse().join("");
     return myPalin===palin;
}
const check=isPalindrome("12321");
console.log(check);

