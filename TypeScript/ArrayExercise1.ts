// Initial car list
let carList: string[] = ["Aston Martin", "BMW", "Ford", "Honda", "Volvo", "Toyota", "Nissan"];

// Get the initial list of cars
function getCars() {
    return carList;
}

// Display the list of cars
function displayCars(carList) {
    console.log(carList);
}

// Add a car to the end of the list
function addCars(carList, carName) {
    carList.push(carName);
}

// Remove a car from the end of the list
function removeCar(carList) {
    carList.pop();
}

// Add a car at the specified position
function addCarAtIndex(carList, carName, pos) {
    carList.splice(pos, 0, carName);
}

// Remove a car from the specified position
function removeCarFromIndex(carList, pos, noToRemove) {
    carList.splice(pos, noToRemove);
}

// 1. Remove the last car
removeCar(carList);
displayCars(carList); // ["Aston Martin", "BMW", "Ford", "Honda", "Volvo", "Toyota"]

// 2. Add "Lamborghini" at 3rd position and display the new list
addCarAtIndex(carList, "Lamborghini", 2);
displayCars(carList); // ["Aston Martin", "BMW", "Lamborghini", "Ford", "Honda", "Volvo", "Toyota"]

// 3. Remove "Honda" from the list obtained from the previous addition
let hondaIndex = carList.indexOf("Honda");
if (hondaIndex !== -1) {
    removeCarFromIndex(carList, hondaIndex, 1);
}
displayCars(carList); // ["Aston Martin", "BMW", "Lamborghini", "Ford", "Volvo", "Toyota"]

// 4. Add "Hyundai" at the end of the list and display the updated list
addCars(carList, "Hyundai");
displayCars(carList); // ["Aston Martin", "BMW", "Lamborghini", "Ford", "Volvo", "Toyota", "Hyundai"]
