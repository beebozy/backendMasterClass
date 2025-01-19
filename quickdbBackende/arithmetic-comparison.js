// Prompt the user for length and width
const prompt = require('prompt-sync')();
let length = parseFloat(prompt("Enter the length of the rectangle in cm:"));
let width = parseFloat(prompt("Enter the width of the rectangle in cm:"));

// Calculate area
let area = length * width;
console.log(`Area of the rectangle: ${area} cm²`);

// Fixed value to compare
let fixedValue = 100;

// Compare area with the fixed value
if (area > fixedValue) {
  console.log("The area is greater than 100 cm².");
} else if (area === fixedValue) {
  console.log("The area is equal to 100 cm².");
} else {
  console.log("The area is less than 100 cm².");
}

// Prompt the user for a number
let number = parseInt(prompt("Enter a number:"));

// Check if the number is between 10 and 20 (inclusive)
if (number >= 10 && number <= 20) {
  console.log("Valid");
} else {
  console.log("Invalid");
}
