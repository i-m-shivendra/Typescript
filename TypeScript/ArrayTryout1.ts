
// Creating an array of strings
let manufacturers: string[] = ["Samsung", "Apple", "Sony"]

// Adding values into an array using push() method
manufacturers.push("Motorola"); // Adds the elements at the end of array

// Adding multiple elements to an array using push() method
manufacturers.push("Panansonic", "LG")

// Adding elements at a specific index
manufacturers[4] = "Micromax";

// Removing Elements from an Array using pop() method
manufacturers.pop(); // removes the Last element from the array

// Use Of splice method:

// Removing a specified number of elements from the specified postion and adding elements in its place
manufacturers.splice(2, 1, "Google", "Videocon")

// adding elements at a specified index without removing any element
manufacturers.splice(3, 0, "iBall") // This adds 'iBall' at the 3rd index and shifts the other elements by one index position

console.log(manufacturers); // displays the final list of manufacturers
