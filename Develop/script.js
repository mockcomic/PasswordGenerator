function generatePassword() {
  let passwordLength = prompt("How long would you like your password? (8 - 128 characters)");
  if (passwordLength < 8 || passwordLength > 128) {
    window.alert("Please change you password lenght between 8 - 128 characters.");
    let passwordCheck = false;
    while(!passwordCheck){
      passwordLength = prompt("How long would you like your password? (8 - 128 characters)");
      if(passwordLength >= 8 && passwordLength <= 128){
        console.log('passed password check')
        passwordCheck = true;
      }
    }
  }
  let symbolCheck = confirm("Adding special characters?");
  let numberCheck = confirm("Adding number characters?");


  let password = [];
  password = [];
  let characters = {
    symbol: "!@#$%^&*()",
    numbers: "123456789",
    letters: "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"
  };
  if (symbolCheck && numberCheck) {
    let characterSet = characters.letters + characters.symbol + characters.numbers
    for (let index = 0; index < passwordLength; index++) {
      let value = characterSet.charAt(Math.floor(Math.random() * characterSet.length));
      password.push(value);
    }
  } else if (symbolCheck && !numberCheck) {
    let characterSet = characters.letters + characters.symbol
    for (let index = 0; index < passwordLength; index++) {
      let value = characterSet.charAt(Math.floor(Math.random() * characterSet.length));
      password.push(value);
    }
  } else if (!symbolCheck && numberCheck) {
    let characterSet = characters.letters + characters.numbers
    for (let index = 0; index < passwordLength; index++) {
      let value = characterSet.charAt(Math.floor(Math.random() * characterSet.length));
      password.push(value);
    }
  } else {
    let characterSet = characters.letters
    for (let index = 0; index < passwordLength; index++) {
      let value = characterSet.charAt(Math.floor(Math.random() * characterSet.length));
      password.push(value);
    }
  }
  console.log(`Your password is ${password.join('')}`)
  return password.join('');
}
let generateBtn = document.querySelector("#generate");


function writePassword() {
  let password = generatePassword();
  let passwordText = document.querySelector("#password");
  passwordText.value = password;
}

generateBtn.addEventListener("click", writePassword);