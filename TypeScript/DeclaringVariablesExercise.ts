// Define the input values
const firstFlight: number = 2; // Pounds of cargo from First Flight
const dtdc: number = 1;        // Pounds of cargo from DTDC

// Define the rates
const firstFlightRate: number = 5;     // USD per Pound for First Flight
const dtdcRate: number = 10;           // USD per Pound for DTDC
const serviceTaxRate: number = 0.10;   // 10% service tax for DTDC

// Calculate the total charges for each courier service
const firstFlightCharge: number = firstFlight * firstFlightRate;
const dtdcCharge: number = dtdc * dtdcRate * (1 + serviceTaxRate);

// Calculate the total charge
const totalCharge: number = firstFlightCharge + dtdcCharge;

// Display the charges
console.log(`Total charge for First Flight: USD ${firstFlightCharge}`);
console.log(`Total charge for DTDC: USD ${dtdcCharge.toFixed(2)}`);

// Expected output
console.log(`Expected output: ${firstFlightCharge}, ${dtdcCharge.toFixed(2)}`);
