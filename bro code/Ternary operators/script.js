let age = 12;
let message = age >= 18 ? "you're an adult " : " You're a minor";
let time = 9;
console.log(message);
let greeting = time < 12 ? "Good morning !" : " Good afternoon !";
console.log(greeting);

let isStudent = false ;
let message1 = isStudent ? "You are a student " : " you are not a student ";
console.log(message1);

let purchaseamount = 125 ;
let discount = purchaseamount >= 100 ? 10 : 0;
console.log(` your total amount is $${purchaseamount - purchaseamount * (discount/100)}`)