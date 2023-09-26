// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

// Psuedocode
// Declare generatePassword function
// Prompt user with a question of how many characters are desired in password
// If answer is under 8 character and over 128 characters then its an invalid response
// Confirm whether user wants uppercase letters in password
// Confirm whether user wants lowercase letters in password
// Confirm whether user wants numbers in password
// Confirm whether user wants special characters in password
// If user does not choose "ok" on all, alert "must choose at least one"
// Store responses in variables
// Store uppercase letters in a variable
// Store lowercase letters in a variable
// Store numbers in a variable
// Store special characters in a variable
// Declare an empty array
// Combined predefined values that can be in password in a string
// Create a for loop with character amount as the number of iterations the loop will execute
// In the loop push the string[random index] into empty array
// Once loop is completed create a string from the array
// Return password string




console.log(Math.floor(Math.random() * 10/*charactersValue*/))
