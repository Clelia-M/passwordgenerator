// Array of special characters to be included in password
var specialCharacters = ['@', '%', '+', '\\', '/', "'", '!', '#', '$', '^', '?', ':', ',', ')', '(', '}', '{', ']', '[', '~', '-', '_', '.'];

// Array of numeric characters to be included in password
var numericCharacters = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];

// Array of lowercase characters to be included in password
var lowerCasedCharacters = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];

// Array of uppercase characters to be included in password
var upperCasedCharacters = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];

// Function to prompt user for password options
function getPasswordOptions() {
  // Declare variables to store user input and user confirmations
  var length = parseInt(
    prompt('How many characters would you like your password to contain?')
  );
  while (isNaN(length) || length < 10 || length > 64) {
    alert('Password length needs to be a number between 10 and 64');
    length = parseInt(
      prompt('How many characters would you like your password to contain?')
    );
  }
  var hasSpecialCharacters = confirm(
    'Click OK to confirm including special characters.'
    );

  var hasNumericCharacters = confirm(
    'Click OK to confirm including numeric characters.'
    );
  var hasLowerCasedCharacters = confirm(
    'Click OK to confirm including lowercase characters.'
    );
  var hasUpperCasedCharacters = confirm(
    'Click OK to confirm including uppercase characters.'
    );

  // If no character types are selected, prompt user to try again
  while (
    !hasSpecialCharacters &&
    !hasNumericCharacters &&
    !hasLowerCasedCharacters &&
    !hasUpperCasedCharacters
  ) {
    alert('Must select at least one character type');
  };

  // Store user input and confirmation
  return {
    length: length,
    hasSpecialCharacters: hasSpecialCharacters,
    hasNumericCharacters: hasNumericCharacters,
    hasLowerCasedCharacters: hasLowerCasedCharacters,
    hasUpperCasedCharacters: hasUpperCasedCharacters
  };
}

// Function for getting a random element from an array
function getRandom(arr) {
  var randIndex = Math.floor(Math.random() * arr.length);
  var randElement = arr[randIndex];
  return randElement;
}

// Function to generate password with user input
function generatePassword() {
  var options = getPasswordOptions();
  // Declare variables to store user input and user confirmations
  var result = [];

  // Conditional statements that add characters based on user's input
  if (options.hasSpecialCharacters) {
    result = result.concat(specialCharacters);
  }

  if (options.hasNumericCharacters) {
    result = result.concat(numericCharacters);
  }

  if (options.hasLowerCasedCharacters) {
    result = result.concat(lowerCasedCharacters);
  }

  if (options.hasUpperCasedCharacters) {
    result = result.concat(upperCasedCharacters);
  }

  // For loop that iterates through the options object to create the psw
  for (var i = 0; i < options.length; i++) {
    var possibleCharacters = result;
    var randomCharacter = getRandom(possibleCharacters);
    //result.push(randomCharacter);
    result[i] = randomCharacter;
  }

  // Transform the result into a string without commas
  result = result.join('');
  return result.slice(0, options.length);
}

// Get references to the #generate element
var generateBtn = document.querySelector('#generate');

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  console.log(password);
  var passwordText = document.querySelector('#password');
  console.log(passwordText);
  passwordText.value = password;
}

// Add event listener to generate button
//var generateBtn = document.querySelector('#generate');
generateBtn.addEventListener('click', writePassword);