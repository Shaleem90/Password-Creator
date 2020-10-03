
// Assignment Code
var generateBtn = document.querySelector("#generate");
var lowerCase = ['abcdefghijklmnopqrstuvwxyz'];
var upperCase = ['ABCDEFGHIJKLMNOPQRSTUVWXYZ'];
var numbers = ['0123456789'];
var symbols = ['!@#$%^&*(){}[]=<>/+-_|~'];
var userChoices = [];

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

// Write password to the password input
function writePassword() {

  const confirmLower = confirm("Would you like to use lower case?");
    if (confirmLower) {
      userChoices.push(lowerCase);
    }

  const confirmUpper = confirm("Would you like to use upper case?");
    if (confirmUpper) {
      userChoices.push(upperCase);
    }

  const confirmNumbers = confirm("Would you like to use numbers?");
    if (confirmNumbers) {
      userChoices.push(numbers);
    }

  const confirmSymbols = confirm("Would you like to use symbols?");

    if (confirmSymbols) {
      userChoices.push(symbols);
    }
    if (!confirmLower && !confirmUpper && !confirmNumbers && !confirmSymbols) {
      alert("You must choose at least one character type. Press Generate Password again.");
      return;
    }
  

    let getLength = prompt("Choose the length of your password from 8 to 128 characters.");
    if (!getLength) {
      alert("Please enter a value for the password length. Press Generate Password again.");
    } else if (getLength < 8 || getLength > 128) {
      alert("Incorrect. Please choose between 8 and 128 characters. Press Generate Password again.");
      return "Yes";
    }
  
  let joinedChoices = userChoices.join('');
  let stringPassword = "";

    for (var i = 0, n = joinedChoices.length; i < getLength; i++) {
      stringPassword += joinedChoices.charAt(Math.floor(Math.random() * n));
    }

  //Generated password is displayed on page

  var passwordText = document.querySelector("#password");

  passwordText.value = stringPassword;

}
