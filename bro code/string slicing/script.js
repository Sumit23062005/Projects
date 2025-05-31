// const fullname = "Sumit Jadhav";

// let firstname = fullname.slice(0 , 5);
// let lastname = fullname.slice(5,12);

// let firstchar = fullname.slice(0 ,1);
// let lastchar = fullname.slice(-1);

// console.log(firstchar);
// console.log(lastchar);

// let firstname= fullname.slice(0 , fullname.indexOf(" "));
// let lastname = fullname.slice(fullname.indexOf(" "));
// console.log(firstname);
// console.log(lastname);

const email = "sumit@gmail.com";
let username = email.slice(0,email.indexOf("@"));
let extension = email.slice(email.indexOf("@") + 1);

console.log(username);
console.log(extension);
