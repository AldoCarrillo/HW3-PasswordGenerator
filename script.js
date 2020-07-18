// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  passwordText.value = password;

}


function generatePassword(){
  var tempPassword =[""];
  var infoCriteria = ["Upper_Case", "Lower_case", "Numbers","Special_Characters"];
  var criteria = [0,0,0,0];
  
  
  if(document.getElementById("check1").checked==false && document.getElementById("check2").checked==false && document.getElementById("check3").checked==false && document.getElementById("check4").checked==false )
    return  "NO CRITERIA SELECTED";


  if(document.getElementById("check1").checked==true )
    criteria[0] = 1;
  
  if(document.getElementById("check2").checked==true )
    criteria[1] = 1;

  if(document.getElementById("check3").checked==true )
    criteria[2] = 1;

    if(document.getElementById("check4").checked==true )
    criteria[3] = 1;

   
  var i;
  var randomOption;
  var addToPass;

  for(i=0 ; i<=lenghtOfPassword; i++){
   
    randomOption = Math.round(Math.random()*3);

    while(criteria[randomOption]== 0){
      randomOption = Math.round(Math.random()*3);
    }

 
    switch(randomOption){
      case 0:
        addToPass = "uppperCase";

      break;

      case 1:
        addToPass = "lowerCase";

      break;
      
      case 2:
        addToPass = "Number";

      break;

      case 3:
        addToPass = "Special";

      break;
    } ;


    if(addToPass == "uppperCase"){
      var randomUpper= Math.round(Math.random()*25);
      randomUpper = randomUpper + 65;
      tempPassword [i] = String.fromCharCode(randomUpper); 
    }
    else if(addToPass == "lowerCase"){
      var randomLower= Math.round(Math.random()*25);
      randomLower = randomLower + 97;
      tempPassword [i] = String.fromCharCode(randomLower); 
    }
    else if(addToPass == "Number"){
      var randomNumber= Math.round(Math.random()*9);
      randomNumber = randomNumber +48;
      tempPassword [i] = String.fromCharCode(randomNumber); 
    }
    else if(addToPass == "Special"){
      var randomSpecial= Math.round(Math.random()*15);
      randomSpecial = randomSpecial + 33;
      tempPassword [i] = String.fromCharCode(randomSpecial); 
    }



  }  


  var passwordToReturn="";
  for(i=0;i<tempPassword.length;i++){
    passwordToReturn = passwordToReturn + tempPassword[i];

  }
  return passwordToReturn;
}


var lenghtOfPassword = prompt("How Lenght do you want your PASSWORD?"); 
  

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

