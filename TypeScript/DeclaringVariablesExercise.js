// Define the input values
var firstFlight = 2; // Pounds of cargo from First Flight
var dtdc = 1; // Pounds of cargo from DTDC
// Define the rates
var firstFlightRate = 5; // USD per Pound for First Flight
var dtdcRate = 10; // USD per Pound for DTDC
var serviceTaxRate = 0.10; // 10% service tax for DTDC
// Calculate the total charges for each courier service
var firstFlightCharge = firstFlight * firstFlightRate;
var dtdcCharge = dtdc * dtdcRate * (1 + serviceTaxRate);
// Calculate the total charge
var totalCharge = firstFlightCharge + dtdcCharge;
// Display the charges
console.log("Total charge for First Flight: USD ".concat(firstFlightCharge));
console.log("Total charge for DTDC: USD ".concat(dtdcCharge.toFixed(2)));
// Expected output
console.log("Expected output: ".concat(firstFlightCharge, ", ").concat(dtdcCharge.toFixed(2)));
