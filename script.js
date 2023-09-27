// Assignment Code
var generateBtn = document.querySelector("#generate");

function generatePassword() {
  var passLength = prompt("How many characters do you want your password to have?")

  if(passLength < 8 || passLength > 128) alert("Password must be in between 8 and 128 characters");
  else if(isNaN(passLength)) alert("Please enter a number") /* Checks to see if the passLength response is in fact a number and not a letter */ 
  else {
    var uppercaseValue = confirm("Do you want Uppercase letters?");
    var lowercaseValue = confirm("Do you want lowercase letters?");
    var numericalValue = confirm("Do you want numbers included?");
    var specialCharValue = confirm("Do you want special characters included");
    
    var uppercaseString = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
    var lowercaseString = "abcdefjhijklmnopqrstuvwxyz"
    var numberString = "0123456789"
    var specialCharString = "!\"#$%&'()*+,-./:;<=>?@[\\]^_`{|}~"
    
    if (!uppercaseValue && !lowercaseValue && !numericalValue && !specialCharValue) alert("You must choose at least one password parameter.")

    var parameterString = ""
    var passArr = []

    if (uppercaseValue) parameterString = parameterString.concat(uppercaseString)
    if (lowercaseValue) parameterString = parameterString.concat(lowercaseString)
    if (numericalValue) parameterString = parameterString.concat(numberString)
    if (specialCharValue) parameterString = parameterString.concat(specialCharString)
  
    for(var i = 0; i < passLength; i++) {
      passArr.push(parameterString[Math.floor(Math.random() * passLength)])
    }

    console.log(passArr);

  }


}
// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

// Psuedocode
// Declare generatePassword function --
// Prompt user with a question of how many characters are desired in password --
// If answer is not a number then it is in invalid response --
// If answer is under 8 character and over 128 characters then its an invalid response --
// Confirm whether user wants uppercase letters in password --
// Confirm whether user wants lowercase letters in password --
// Confirm whether user wants numbers in password --
// Confirm whether user wants special characters in password --
// If user does not choose "ok" on all, alert "must choose at least one" --
// Store responses in variables --
// Store uppercase letters in a variable --
// Store lowercase letters in a variable --
// Store numbers in a variable --
// Store special characters in a variable --
// Declare an empty array
// Combined predefined values that can be in password in a string
// Create a for loop with character amount as the number of iterations the loop will execute
// In the loop push the string[random index] into empty array
// Once loop is completed create a string from the array
// Return password string

