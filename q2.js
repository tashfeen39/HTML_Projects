const userInput = prompt("Enter values separated by commas:");

// Convert the user input string into an array of values
const values = userInput.split(",");

// check if the input string contains both letters and numbers
if (/\d/.test(userInput) && /[a-zA-Z]/.test(userInput)) {
  alert("Input string contains both letters and numbers!");
} else {
  alert("Input string must contain both letters and numbers.");
}
