// const prompt = require('prompt-sync')();


// function convertTemperature(tempType, tempValue) {
//     tempValue = Number(tempValue);

//     if (isNaN(tempValue)) {
//         return "Error: Please enter a valid number for temperature value.";
//     }

//     if (tempType === "C") {
//         return `${tempValue}°C is equal to ${(9 / 5 * tempValue + 32).toFixed(2)}°F.`;
//     } else if (tempType === "F") {
//         return `${tempValue}°F is equal to ${((tempValue - 32) * 5 / 9).toFixed(2)}°C.`;
//     }
// }


// const tempValue = prompt("Enter a temperature value: ");

// let tempType;

// // Prompt until a valid temperature type is entered
// while (true) {
//     tempType = prompt("Enter the temperature type ('C' for Celsius or 'F' for Fahrenheit): ").toUpperCase();

//     if (tempType === "C" || tempType === "F") {
//         break; // Exit the loop if valid input
//     }

//     console.log("Invalid input. Please enter 'C' for Celsius or 'F' for Fahrenheit.");
// }

// // Convert temperature and print the result
// const result = convertTemperature(tempType, tempValue);
// console.log(result);


const http = require("http");

const server= http.createServer((req,res)=>{

    res.writeHead(200,'Content-type : Create res' );

    res.end('Hello, world');
})

const  PORT= 3000;

server.listen(PORT, ()=>{

    console.log(`server is runing on port ${PORT}`)
})