function Multiply() {
  num1 = document.getElementById("firstnum").value;
  num2 = document.getElementById("firstnum").value;
  document.getElementById("result").innerHTML = num1 * num2;
}

function Divide() {
  num1 = document.getElementById("firstnum").value;
  num2 = document.getElementById("firstnum").value;
  document.getElementById("result").innerHTML = num1 / num2;
}

// Prompt the user to enter values separated by commas
const userInput = prompt("Enter values separated by commas:");

// Convert the user input string into an array of values
const values = userInput.split(",");

// Check if all elements in the array are numbers
const allNumbers = values.every((element) => !isNaN(element));

// Display alert message based on the result
if (allNumbers) {
  alert("All entered values are numbers");
} else {
  alert("Error: The entered values contain non-numeric elements");
}
