
let age: number = 20; 

if (age >= 18) {
  console.log("Eligible to vote");
} else {
  console.log("Not eligible to vote");
}

let day: number = 3; 

switch (day) {
  case 1:
    console.log("Monday");
    break;
  case 2:
    console.log("Tuesday");
    break;
  case 3:
    console.log("Wednesday");
    break;
  case 4:
    console.log("Thursday");
    break;
  case 5:
    console.log("Friday");
    break;
  case 6:
    console.log("Saturday");
    break;
  case 7:
    console.log("Sunday");
    break;
  default:
    console.log("Invalid day");
}


let score: number = 72; 


if (score >= 0 && score <= 100) {

  let result: string = score >= 50 ? "Passed" : "Failed";
  
  
  console.log(`Score: ${score}`);
  console.log(`Result: ${result}`);
} else {
  console.log("Invalid score. Please provide a score between 0 and 100.");
}

function greet(person: string | null): void {
    if (person) {
      console.log(`Hello, ${person}`);
    } else {
      console.log("No name provided");
    }
  }
  
  
  greet("Alice");
  greet(null);
  
  function calculateArea(radius: number): number {
    return Math.PI * Math.pow(radius, 2);
  }
  

  let radius: number = 5; 
  console.log(`Area of the circle: ${calculateArea(radius).toFixed(2)} cm²`);
  
  function calculateDiscountedPrice(price: number, discount: number = 10): number {
    return price - (price * discount) / 100;
  }
  
  
  let originalPrice: number = 200; 
  let discount: number = 15; 
  console.log(`Price after discount: ${calculateDiscountedPrice(originalPrice, discount).toFixed(2)}`);
  console.log(`Price after default discount: ${calculateDiscountedPrice(originalPrice).toFixed(2)}`);
  