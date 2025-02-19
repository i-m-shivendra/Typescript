let calculateInterest = (P: number, R: number, T: number, B: number = 1, 
    bankName?: string): string => {
    // Calculate the interest using the provided formula
    let interest: number = (P * R * T * B) / 100;
    
    // Prepare the output message based on whether the bank name is provided or not
    if (bankName) {
        return `${bankName} will charge total interest USD ${interest}`;
    } else {
        return `Total interest amount will be USD ${interest}`;
    }
}

// Test the function with the given inputs
console.log(calculateInterest(10000, 9, 3, 2, "Swiss Bank")); // Expected Output: Swiss Bank will charge total interest USD 5400
console.log(calculateInterest(10000, 9, 3));                  // Expected Output: Total interest amount will be USD 2700
