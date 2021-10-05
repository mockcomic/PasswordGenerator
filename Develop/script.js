// Assignment code here
let passwordLength = prompt("How long would you like your password? (8 - 128 characters)")
let symbolCheck = prompt("Would you like special characters?").toLowerCase()
let letterCheck = prompt("Would you like letters characters?").toLowerCase()
let numberCheck= prompt("Would you like number characters?").toLowerCase()

function generatePassword(passwordLength) {
  let password = [];
  let characters= {
    symbol: "!@#$%^&*()",
    numbers: "123456789",
    letters: "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"
  }
  
  if (symbolCheck == "yes" || symbolCheck == "y" && letterCheck == "yes" || letterCheck == "y" && numberCheck == "yes" || numberCheck == "y") {
    let characterSet = characters.letters + characters.symbol + characters.letters
    for (let index = 0; index < passwordLength; index++) {
      let value = characterSet.charAt(Math.floor(Math.random() * characterSet.length));
      password.push(value);
    }

  } else {
    for (let index = 0; index < passwordLength; index++) {
      let value = characters.letters.charAt(Math.floor(Math.random() * characters.letters.length));
      password.push(value);
    }
  }
  console.log(`Your password is ${password.join('')}`)
  return password.join('');
}
let generateBtn = document.querySelector("#generate");


function writePassword() {
  let password = generatePassword(passwordLength);
  let passwordText = document.querySelector("#password");
  passwordText.value = password;
}

generateBtn.addEventListener("click", writePassword);