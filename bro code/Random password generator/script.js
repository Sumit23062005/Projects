

function generatePassword(length , includeLowerCase, includeUpperCase ,includeNumbers , includeSymbols){
    const lowerChars = "abcdefghijklmnopqrstuvwxyz";
    const upperChars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    const numberChars = "0123456789";
    const symbolChars = "!@#$%^&*()_+[]|\:;'?/"
    
    let allowedChars = "";
    let password = "";


    allowedChars += includeLowerCase ? lowerChars : "" ;
    allowedChars += includeUpperCase ? upperChars : "";
    allowedChars += includeSymbols ? symbolChars : "" ;
    allowedChars += includeNumbers ? numberChars : "";

if(length <= 0 ){
    return '(Password lenght must be atleast once )' ;

}

if(allowedChars.length === 0){
    return '(Atleast 1 set of characters must be choosen )';

}
for(let i = 0 ; i <length ; i ++){
    const randomIndex = Math.floor(Math.random() * allowedChars.length) ;
    password += allowedChars[randomIndex];

}


    return password ;

}

const passwordLength  = 12;
const includeLowerCase = true ;
const includeUpperCase = true ;
const includeNumbers = true ;
const includeSymbols = false ;

const password = generatePassword(passwordLength,
                                  includeLowerCase , 
                                 includeUpperCase ,
                                 includeNumbers , 
                                 includeSymbols );
console.log(`Generated password is : ${password}`);                                 