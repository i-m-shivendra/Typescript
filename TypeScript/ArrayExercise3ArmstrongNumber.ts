// Function to check if a number is an Armstrong number
function isArmstrongNumber(num: number): boolean {
    // Convert the number to a string to get each digit
    const numStr = num.toString();
    // Calculate the sum of cubes of its digits
    const sumOfCubes = numStr.split('').reduce((sum, digit) => {
        return sum + Math.pow(parseInt(digit), 3);
    }, 0);
    // Check if the sum of the cubes of its digits equals the number itself
    return sumOfCubes === num;
}

// Provided array to check for Armstrong numbers
let numArray = [105, 5, 293, 153, 17, 2, 1, 371, 95, 407];

// Find and display Armstrong numbers from the array
let armstrongNumbers = numArray.filter(isArmstrongNumber);

console.log(armstrongNumbers); // Expected output: [153, 1, 371, 407]
