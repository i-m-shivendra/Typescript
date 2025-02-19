var isMyNameShivendra = true;
var isDone = true;
var hasStarted = false;
//check whether the given number is even
function isEven(a) {
    return a % 2 === 0;
}
console.log(isEven(10));
console.log(isEven(3));
//check if number is divisible by both 4 and 8
function isDivisible(num) {
    return (num % 4 === 0 && num % 8 === 0);
}
console.log(isDivisible(64));
console.log(isDivisible(41));
//How to define bigInt(It is there in ES-6)
// let bigNumber:bigint = 9007199254740992n;
// console.log(bigNumber);
// let anotherBigNumber=BigInt("90071992547409925");
// console.log(anotherBigNumber);
//use to find the maximum possible number in typescript
var maxNumber = Number.MAX_SAFE_INTEGER;
console.log(maxNumber);
//use to find the minimum possible number in typescript
var minNumber = Number.MIN_SAFE_INTEGER;
console.log(minNumber);
//minimum numeric value that can be represented TypeScript
var minPossible = Number.MAX_VALUE;
console.log(minPossible);
//maximum numeric value that can be represented in TypeScript
var maxPossible = Number.MIN_VALUE;
console.log(maxNumber);
