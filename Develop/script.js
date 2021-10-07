let generateBtn = document.querySelector("#generate");

let criteriaCheck = false;

let criteria = {
  passwordLength: null,
  symbolCheck: null,
  numberCheck: null,
  upperCheck: null
}

function criteriaPrompt() {
  if (criteriaCheck) {
    return
  };

  criteria.passwordLength = prompt("How long would you like your password? (8 - 128 characters)");

  if (criteria.passwordLength < 8 || criteria.passwordLength > 128) {
    window.alert("Please change you password lenght between 8 - 128 characters.");

    return criteriaPrompt();

  }

  criteria.symbolCheck = confirm("Adding special characters?");
  criteria.numberCheck = confirm("Adding number characters?");
  criteria.upperCheck = confirm("Adding uppercase letters?");

  criteriaCheck = true
}

function generatePassword() {
  criteriaPrompt();
  if (!criteriaCheck) {
    return
  };

  let password = [];

  password = [];

  let characters = {
    symbol: "!@#$%^&*()_<>?",
    numbers: "123456789",
    upperCase: "ABCDEFGHIJKLMNOPQRSTUVWXYZ",
  };

  let characterSet = 'abcdefghijklmnopqrstuvwxyz';

  if(criteria.symbolCheck){
    characterSet = characterSet + characters.symbol
  }

  if (criteria.numberCheck){
    characterSet = characterSet + characters.numbers
  }
  
  if (criteria.upperCheck){
    characterSet = characterSet + characters.upperCase
  }

  for (let index = 0; index < criteria.passwordLength; index++) {
    let value = characterSet.charAt(Math.floor(Math.random() * characterSet.length));

    password.push(value);

  }

  console.log(`Your password is ${password.join('')}`);

  return password.join('');

}

function writePassword() {
  let password = generatePassword();

  let passwordText = document.querySelector("#password");

  passwordText.value = password;
}

generateBtn.addEventListener("click", writePassword);

