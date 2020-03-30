// Assignment Code
var generateBtn = document.querySelector("#generate");

generateBtn.setAttribute('class', 'btn')

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}


//Possible password values

var uppercase= 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
var lowercase= 'abcdefghijklmnopqrstuvwxyz';
var numericValues='0123456789';
var specialCharacters='!@#$%^&*=_-?';


document.getElementById('password')

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

function generatePassword() {
//1 = true (include)
//2 = false (exclude)
passwordLength = prompt( 'How long do you want your password? (8-128)');
//Upper Case letter prompt
if (confirm( 'Do you want to include Uppercase letters?')) {
confirmUppercase = 1;
} else {
confirmUppercase = 2;
}
//Lower Case letter prompt
if(confirm( 'Do you want to include Lowercase letters?')) {
confirmLowercase = 1;
} else {
confirmLowercase =  2;
}
//Include numbers prompt
if(confirm( 'Do you want to include numbers?')) {
confirmNumericValues = 1;
} else {
confirmNumericValues = 2;
}
    //Special Characters prompt
if(confirm( 'Do you want to include special characters letters? (#$@&)')) {
confirmSpecialCharacters = 1;
} else {
confirmSpecialCharacters = 2;
}
//Define what characters we will be using for password gen
var newchars = "";
if (confirmUppercase == 1 && confirmLowercase == 1 && confirmNumericValues == 1 && confirmSpecialCharacters == 1) {
newchars = uppercase+lowercase+numericValues+specialCharacters;
} else if (confirmUppercase == 2 && confirmLowercase == 1 && confirmNumericValues == 1 && confirmSpecialCharacters == 1) {
newchars = lowercase+numericValues+specialCharacters;
} else if(confirmUppercase == 2 && confirmLowercase == 2 && confirmNumericValues == 1 && confirmSpecialCharacters == 1) {
newchars = numericValues+specialCharacters;
} else if(confirmUppercase == 2 && confirmLowercase == 2 && confirmNumericValues == 2 && confirmSpecialCharacters == 1) {
newchars = specialCharacters;
} else if (confirmUppercase == 1 && confirmLowercase == 1 && confirmNumericValues == 1 && confirmSpecialCharacters == 2) {
newchars = uppercase+lowercase+numericValues;
} else if (confirmUppercase == 1 && confirmLowercase == 1 && confirmNumericValues == 2 && confirmSpecialCharacters == 2) {
newchars = uppercase+lowercase;
} else if (confirmUppercase == 1 && confirmLowercase == 2 && confirmNumericValues == 2 && confirmSpecialCharacters == 2) {
newchars = uppercase;
} else if (confirmUppercase == 1 && confirmLowercase == 1 && confirmNumericValues == 2 && confirmSpecialCharacters == 1) {
newchars = uppercase+lowercase+specialCharacters;
} else if (confirmUppercase == 1 && confirmLowercase == 2 && confirmNumericValues == 1 && confirmSpecialCharacters == 2) {
newchars = uppercase+numericValues;
} else if (confirmUppercase == 2 && confirmLowercase == 1 && confirmNumericValues == 1 && confirmSpecialCharacters == 2) {
newchars = lowercase+numericValues;
} else if (confirmUppercase == 1 && confirmLowercase == 2 && confirmNumericValues == 2 && confirmSpecialCharacters == 1) {
newchars = uppercase+specialCharacters;
} else if (confirmUppercase == 2 && confirmLowercase == 1 && confirmNumericValues == 2 && confirmSpecialCharacters == 1) {
newchars = lowercase+specialCharacters;
} else {
alert("ERROR");
}
//Generate a password based of the received responses.
var password = "";
for (var i=0; i<passwordLength; i++) {
var ran = Math.floor(Math.random() * newchars.length);
password += newchars.substring(ran,ran+1);
}
    return password;
}


