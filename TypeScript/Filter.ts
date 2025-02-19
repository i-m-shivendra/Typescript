//filtering all numbers greater than 10
const numbers = [1, 12, 5, 18, 7, 30, 3];
const res=numbers.filter(num=>num>10);
console.log(res);

//filter out all strings that have a length less than 4.
const words = ['apple', 'cat', 'banana', 'dog', 'elephant'];
const result=words.filter(str=>str.length<4);
console.log(result);

// Given an array of player objects, 
//filter out players who have a score less than 50.
interface Player {
    name: string;
    score: number;
  }
  const players: Player[] = [
    { name: 'Alice', score: 30 },
    { name: 'Bob', score: 50 },
    { name: 'Charlie', score: 40 },
  ];

  const getPlayers=players.filter(num=>num.score<50);
  console.log(getPlayers);
  
// find an id having score greater than 50
const data = [
    { id: 1, details: { score: 50 } },
    { id: 2, details: { score: 70 } },
    { id: 3, details: { score: 30 } },
  ];

const id=data.filter(num=>num.details.score>=50);
console.log(id);

//Given an array of boolean values, filter out all false values.
const flags = [true, false, true, false, true];
const getFalse=flags.filter(num=>!num);
const getTrue=flags.filter(num=>num)
console.log(getFalse);
console.log(getTrue);

//Given an array filter out odd and even numbers
const num = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const getOdd=num.filter(num=>num%2!=0);
const getEven=num.filter(num=>num%2==0);
console.log(getOdd);
console.log(getEven);


//Given an array of objects, filter out objects that 
// contain a specific property.
const items = [
    { id: 1, name: 'A' },
    { id: 2, name: 'B', special: true },
    { id: 3, name: 'C' },
    { id: 4, name: 'D', special: true },
  ];
const special=items.filter(it=>it.special);
console.log(special);

//Given an array of numbers, filter out numbers that fall 
//within a specific range (e.g., between 10 and 20).
const numb = [5, 10, 15, 20, 25, 30];
const range=numb.filter(num=>num>=10 && num<=20);
console.log(range);

//Given an array containing different data types, 
//filter out all elements that are not numbers.
const mixedArray = [1, 'two', 3, 'four', 5, true, null];
const notNumbers=mixedArray.filter(num=>typeof num !== 'number');
const numbersOnly=mixedArray.filter(num=>typeof num === 'number');
console.log(notNumbers);
console.log(numbersOnly);

//Given an array of date strings, filter out all 
// dates before a specific date.
const dates = ['2023-01-01', '2023-06-15', '2024-01-01', '2022-12-31'];
const targetDate = new Date('2023-01-01');
const validDates = dates.filter(dat=>new Date(dat)<=targetDate);
console.log(validDates);

  