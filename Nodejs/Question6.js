/*
Create a command line node.js program that simulates a basic calculator. the program should allow users to perform addition, subtraction, multiplication and divide operations on two numbers.
*/

const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

// Function to perform the calculation
function calculate(operator, num1, num2) {
  switch (operator) {
    case "+":
      return num1 + num2;
    case "-":
      return num1 - num2;
    case "*":
      return num1 * num2;
    case "/":
      if (num2 === 0) {
        return "Error: Division by zero";
      }
      return num1 / num2;
    default:
      return "Error: Invalid operator";
  }
}

// Prompt the user for input
rl.question("Enter the first number: ", (input1) => {
  const num1 = parseFloat(input1);
  rl.question("Enter the operator (+, -, *, /): ", (operator) => {
    rl.question("Enter the second number: ", (input2) => {
      const num2 = parseFloat(input2);
      const result = calculate(operator, num1, num2);
      console.log(`Result: ${result}`);
      rl.close();
    });
  });
});
