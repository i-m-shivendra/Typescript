var calculateInterest = function (P, R, T, B, bankName) {
    if (B === void 0) { B = 1; }
    // Calculate the interest using the provided formula
    var interest = (P * R * T * B) / 100;
    // Prepare the output message based on whether the bank name is provided or not
    if (bankName) {
        return "".concat(bankName, " will charge total interest USD ").concat(interest);
    }
    else {
        return "Total interest amount will be USD ".concat(interest);
    }
};
// Test the function with the given inputs
console.log(calculateInterest(10000, 9, 3, 2, "Swiss Bank")); // Expected Output: Swiss Bank will charge total interest USD 5400
console.log(calculateInterest(10000, 9, 3)); // Expected Output: Total interest amount will be USD 2700
