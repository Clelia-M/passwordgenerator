// Array of special characters to be included in password
var specialCharacters = [
  '@',
  '%',
  '+',
  '\\',
  '/',
  "'",
  '!',
  '#',
  '$',
  '^',
  '?',
  ':',
  ',',
  ')',
  '(',
  '}',
  '{',
  ']',
  '[',
  '~',
  '-',
  '_',
  '.'
];

// Array of numeric characters to be included in password
var numericCharacters = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];

// Array of lowercase characters to be included in password
var lowerCasedCharacters = [
  'a',
  'b',
  'c',
  'd',
  'e',
  'f',
  'g',
  'h',
  'i',
  'j',
  'k',
  'l',
  'm',
  'n',
  'o',
  'p',
  'q',
  'r',
  's',
  't',
  'u',
  'v',
  'w',
  'x',
  'y',
  'z'
];

// Array of uppercase characters to be included in password
var upperCasedCharacters = [
  'A',
  'B',
  'C',
  'D',
  'E',
  'F',
  'G',
  'H',
  'I',
  'J',
  'K',
  'L',
  'M',
  'N',
  'O',
  'P',
  'Q',
  'R',
  'S',
  'T',
  'U',
  'V',
  'W',
  'X',
  'Y',
  'Z'
];

// Function to prompt user for password options
function getPasswordOptions() {
  //Declare variables to store user input and user confirmations
  var lenght = parseInt(prompt('How many characters would you like your password to contain?')
  );
  while (isNaN(lenght) || lenght < 10 || lenght > 64) {
    alert('Password lenght must be a number between 10 and 64');
    lenght = parseInt(prompt('How many characters would you like your password to contain?')
    );
  }

  var hasSpecialCharacters = confirm('Click OK to confirm including special characters.');

  var hasNumericCharacters = confirm('Click OK to confirm including numeric characters.');

  var hasLowerCasedCharacters = confirm('Click OK to confirm including special characters.');

  var hasUpperCasedCharacters = confirm('Click OK to confirm including uppercase characters.');

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
    lenght: lenght,
    hasSpecialCharacters: hasSpecialCharacters,
    hasNumericCharacters: hasNumericCharacters,
    hasLowerCasedCharacters: hasLowerCasedCharacters,
    hasUpperCasedCharacters: hasUpperCasedCharacters
  };

}

// Function for getting a random element from an array
function getRandom(arr) {
 
}

// Function to generate password with user input
function generatePassword() {
  
  }

// Get references to the #generate element
var generateBtn = document.querySelector('#generate');


// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector('#password');

  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener('click', writePassword);