//Given an array find sum of all elements
const series = [1, 2, 3, 4, 5];
const res=series.reduce((sum,i)=>sum+i,0);
console.log(res);

//Given an array find product of all elements
const num=[1,2,3,4,5];
const result=num.reduce((product,i)=>product*i,1);
console.log(result);

//Flatten an array - converting 2d array into 1d array
const array2D=[[1, 2], [3, 4], [5]];
const ans=array2D.reduce((acc,val)=>acc.concat(val),[]);
console.log(ans);

//concatenation of two strings
const strings = ['Hello', ' ', 'World', '!'];
const concatenated = strings.reduce((acc, str) => acc + str, '');
console.log(concatenated); 

//finding the average of an array
const scores = [10, 20, 30, 40, 50];
const average = scores.reduce((acc, score, _, { length }) => 
                               acc + score / length, 0);
console.log(average); 

//count the booleans
const flags = [true, false, true, false, true];
const trueCount = flags.reduce((acc, flag) => acc + (flag ? 1 : 0), 0);
console.log(trueCount);
