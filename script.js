

// Assignment Code
var generateBtn = document.querySelector("#generate");
var lowercase = "abcdefghijklmnopqrstuvwxyz";
var uppercase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var number = "0123456789";
var special = "!@#$%^&*()_-+={}[];:'`~<,>.?/|"


//Length of the password
function Length(){
  passwordLength = prompt("How many characters? (between 8-128 characters): ");

    if (passwordLength<8){
      alert("Has to be a number between 8-128 characters");
      Length();
    }
    else if (passwordLength>128){
      alert("Has to be a number between 8-128 characters");
      Length();
    }
    return passwordLength;
}

//Uppercase use
function determineUppercase(){
  uppercaseCheck = prompt("Uppercase Letters? \n(y/n)");
    uppercaseCheck = uppercaseCheck.toLowerCase();

     if (uppercaseCheck ==="y"){
      uppercaseCheck = true;
      return uppercaseCheck;

    }else if (uppercaseCheck ==="n"){
      uppercaseCheck = false;
      return uppercaseCheck;
    
    }else {
      alert("Please answer y/n");
      determineUppercase();
    }
    return uppercaseCheck;
}

//Numbers use
function determineNumbers(){
  numberCheck = prompt("Numbers? \n(y/n)");
    numberCheck = numberCheck.toLowerCase();


    if (numberCheck ==="y"){
      numberCheck = true;
      return numberCheck;

    }else if (numberCheck ==="n"){
      numberCheck = false;
      return numberCheck;
    
    }else {
      alert("Please answer y/n");
      determineNumbers();
    }
    return numberCheck;
}

//Special Characters use
function determineSpecial(){
  specialCheck = prompt("Special Characters? \n(y/n)");
    specialCheck = specialCheck.toLowerCase();

     if (specialCheck ==="y"){
      specialCheck = true;
      return specialCheck;

    }else if (specialCheck ==="n"){
      specialCheck = false;
      return specialCheck;
    
    }else {
      alert("Please answer y/n");
      determineSpecial();
    }
    return specialCheck;
}

 //Randomize
function generatePassword(){
  Length();
  console.log(passwordLength);
  determineUppercase();
  console.log(uppercaseCheck);
  determineNumbers();
  console.log(numberCheck);
  determineSpecial();
  console.log(specialCheck);

var characters = lowercase;
var password = "";
if (uppercaseCheck && numberCheck && specialCheck){
  characters += uppercase + number + special;

}else if (uppercaseCheck && numberCheck){
  characters += uppercase + number;

}else if (numberCheck && specialCheck){
  characters += number + special;

}else if (uppercaseCheck && specialCheck){
  characters += uppercase + special;

}else if (uppercaseCheck){
  characters += uppercase;

}else if(numberCheck){
  characters += number;

}else if (specialCheck){
  characters += special;

}else{
  characters === lowercase;
}

  for(var i = 0; i < passwordLength; i++){
    password += characters.charAt(Math.floor(Math.random() * characters.length));
  }
  return password;
}

// Write password to the #password input
function writePassword() {
  var password1 = "";
  password1 = generatePassword();
  var passwordText = document.querySelector("#password");
  passwordText.value = password1;
}


// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);