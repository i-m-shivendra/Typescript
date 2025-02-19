// Define an array to store all the object literals for mobile phones
const mobiles = [
    { color: "Very Silver", price: 30000 },
    { color: "Clearly White", price: 35000 },
    { color: "Bright Red", price: 25000 },
    { color: "Midnight Black", price: 40000 }
];

// Function to calculate price details after applying discount
const priceDetails = (color: string): number => {
    // Find the mobile with the specified color
    const mobile = mobiles.find(mobile => mobile.color === color);

    // If mobile is found, apply the appropriate discount
    if (mobile) {
        if (mobile.price > 30000) {
            return mobile.price * 0.95; // 5% discount
        } else {
            return mobile.price * 0.90; // 10% discount
        }
    }

    // If no mobile found, return 0 or handle as needed
    return 0;
}

// Test the function with the given inputs
console.log(priceDetails("Very Silver")); // Expected Output: 27000
console.log(priceDetails("Clearly White")); // Expected Output: 33250
