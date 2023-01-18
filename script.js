// Array of special characters to be included in password
const specialCharacters = [
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
const numericCharacters = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];

// Array of lowercase characters to be included in password
const lowerCasedCharacters = [
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
const upperCasedCharacters = [
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

// Variable declarations

let password = "";

// Function to prompt user for password options
function getPasswordOptions() {

// Choose password length
  let passwordLength = prompt(`Enter the password length between 10 and 64 characters`);

// Check for required password characters range
  if (passwordLength >= 10 && passwordLength <= 64) {
    alert(`Selected length is ${passwordLength}`)
  } else {
    alert(`Not valid`);
  }

  let includeLowerCasedChar = confirm(`Confirm to include lower cased character in your password`);
  let includeSpecialChar = confirm(`Confirm to include special character in your password`); 
  let includeNumericChar = confirm(`Confirm to include numeric character in your password`);
  let includeUpperCasedChar = confirm(`Confirm to include upper cased character in your password`);


  let choicesStorage = {
    length: passwordLength,
    lower: includeLowerCasedChar,
    special: includeSpecialChar,
    numeric: includeNumericChar,
    upper: includeUpperCasedChar
  }

  return choicesStorage;
}

// Function for getting a random element from connected array 
function getRandom(array) {
  return array[Math.floor(Math.random() * array.length)];
}

// Function to generate password with user input
function generatePassword() {
    let options1 = getPasswordOptions();
    let result = [];
    let possibleChar = [];

    if (options1.lower) {
      possibleChar = possibleChar.concat(lowerCasedCharacters)
    }
    if (options1.special) {
      possibleChar = possibleChar.concat(specialCharacters)
    }
    if (options1.numeric) {
      possibleChar = possibleChar.concat(numericCharacters)
    }
    if (options1.upper) {
      possibleChar = possibleChar.concat(upperCasedCharacters)
    }

    for (let i = 0; i < options1.length; i++) {
      let passChar = getRandom(possibleChar)
      result.push(passChar)
    }
    return result.join("")
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