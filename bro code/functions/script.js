// function happybirthday(username , age){

//     console.log("Happy Birthday to you");
//     console.log("Happy Birthday to you");
//     console.log(`Happy Birthday dear ${username}`);
//     console.log(`You are ${age} years old `);
// }

// happybirthday("Sumit" , 19);

// happybirthday("spongebob" , 30);
// happybirthday("patrick" , 34);

// function add(x ,y){
//     let result = x +y;
//     return result;

// }

// let answer=add(2 , 3);
// console.log(answer)
function sub(x , y){
    return x - y;

}

function multiply(x , y){
    return x*y;

}

function divide(x ,y){
    return x / y ;

}

console.log(divide(2 , 3));

// function isEven(number){
//     if(number%2 == 0){
//         return true;

//     }else{
//         return false;

//     }
// }
// console.log(isEven(12));

function isEven(number){
    return number%2 == 0 ? true : flase ;
}
console.log(isEven(14));

function isvalidEmail(email){
    if(email.includes("@")){
        return true;
    }else{
        return false;
    }
}

console.log(isvalidEmail("Bro@fake.com"));
console.log(isvalidEmail("Elonmusk.com"));

