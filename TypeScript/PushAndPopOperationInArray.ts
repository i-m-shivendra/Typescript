let runs:Array <number> =[67,89,34,21,98];
console.log(runs);

//Adding elements to last
runs.push(69);
runs.push(103);
runs.push(76);
console.log(runs);

//Removing Elements from last
runs.pop();
console.log(runs);

//Adding elements to front
runs.unshift(15);
runs.unshift(24);
runs.unshift(32);
console.log(runs);

//Removing elements from front
runs.shift();
console.log(runs);

//use of sort function
console.log(runs.sort((a,b) => a - b));
console.log(runs.sort((a,b)=> b - a));

//use of slice function
console.log(runs.slice(2,7));
console.log(runs.slice(5));
console.log(runs.slice(-5));

// const value1=runs.includes(103);  // It is in ES-6 not in Es-5
// console.log(value1);

// const value2=runs.includes(100);  // It is in ES-6 not in ES-5
// console.log(value2);

//use of splice function
console.log(runs.splice(5,2));
console.log(runs);

console.log(runs.splice(3,2,6));
console.log(runs);

console.log(runs.splice(2,1,3,4));
console.log(runs);

console.log(runs.splice(4,3,7,89,456,60,54));
console.log(runs);

//use of concat function
let run:Array <number> =[99,53,245,398,999];
console.log(run);

let newArray=run.concat(runs);

console.log(newArray);

/* find and findElement is present in ES-6
console.log(newArray.find(element=>element>900));
*/


//use of filter operation
let filteredOperation1=newArray.filter(element=>element>900);
console.log(filteredOperation1);

let filteredOperation2=newArray.filter(element=>element%2==0);
console.log(filteredOperation2);

let filteredOperation3=newArray.filter(element=>element%2!=0)
console.log(filteredOperation3);

//use of reduce operation
let sum=newArray.reduce((sum, number) => sum + number, 0);
console.log(sum);

let multiply=newArray.reduce((multiply,number)=>multiply*number,1);
console.log(multiply);
 
//use of map operation
let doubledNumbers=newArray.map((number=>number*2));
console.log(doubledNumbers);






