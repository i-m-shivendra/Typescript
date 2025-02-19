let celius:number[]=[0,10,20,30,40,50];

//converting celsius to fahrenheit
let fahrenheit=celius.map(temp=>(temp*9/5)+32);
console.log(fahrenheit);

//converting celsius to kelvin
let kelvin=celius.map(temp=>temp+273);
console.log(kelvin);

//converting strings to lowercase
let words:string[]=["SHIVENDRA","SachiN","Alia","Katrina"];
let upper=words.map(word=>word.toLowerCase());
console.log(upper);

//converting strings to uppercase
let lowers:string[]=["madhubala","nargis","nanda","waheeda"];
let lower=lowers.map(str=>str.toUpperCase());
console.log(lower);


//extracting names and marks from arrays
const players: any=[
    { name:'Alice', marks: 80},
    { name:'Bob', marks: 70},
    { name:'Charlie', marks: 90},
  ];


//extracting names from arrays
const names = players.map(player => player.name);
console.log(names); 

//extracting marks from arrays
const mark=players.map(player=>player.marks);
console.log(mark);
  

//Example of cricketers
const cricketers: any[]=[
    {name:"MS Dhoni",age:43,runs:5000},
    {name:"Virat Kohli",age:36,runs:10000},
    {name:"Sachin Tendulkar",age:51,runs:15000}
];

//Accessing the name of cricketers
const cricketerNames=cricketers.map(newNames=>newNames.name);
console.log(cricketerNames);


//Accessing the age of cricketers
const cricketerAges=cricketers.map(newAge=>newAge.age);
console.log(cricketerAges);


//Accessing the runs of cricketers
const cricketerRuns=cricketers.map(newRuns=>newRuns.runs);
console.log(cricketerRuns);


//calculating the length of the given strings
const students:string[]=["Nisha","Brijendra","Shivani","Shivendra","Priyanshi"];
const size=students.map(len=>len.length);
console.log(size);

//Extracting nested values(value inside value)
let bankDetails:any[]=[
   {name:"Vijay",account:{password:"Vijay@123"}},
   {name:"Shyam",account:{password:"Shyam@123"}},
   {name:"Sundar",account:{password:"Sundar@123"}}
];

//Accessing bankHolderName
const bankHolderName=bankDetails.map(newName=>newName.name);
console.log(bankHolderName);

//Accessing password(sensitive information)
const userPassword=bankDetails.map(pass=>pass.account.password);
console.log(userPassword);

//squaring each number in array
let squares:number[]=[1,34,21,67,99];
let ans=squares.map(val=>val*val);
console.log(ans);

//find cube of each numbers in array
let cubes:number[]=[2,45,10,99,43];
let res=cubes.map(val=>val*val*val);
console.log(res);

