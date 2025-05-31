// .filter() = creates a new array by filtering out Elements

// let numbers = [ 1,2,3,4,5,6,7];
// let evenNums = numbers.filter(iseven);
// console.log(evenNums);
// let oddNums = numbers.filter(isodd);
// console.log(oddNums);


// function iseven(element){
//     return element%2==0;

// }

// function isodd(element){
//     return element%2!==0;

// }

const age = [16,17,18,19,20,60];

let adults = age.filter(isAdult);
console.log(adults);
let children = age.filter(isChild);
console.log(children);



function isAdult(element){
    return element>=18;

}

function isChild(element){
    return element<=18;

}

const words = ["Apple" , "orange " , "banana" , "kiwi" , "pomogranade" , "coconut"];

const shortwords = words.filter(getshortwords);
console.log(shortwords);
const  longwords = words.filter(getlongwords);
console.log(longwords);

function getshortwords(element){
    return element.length <=6;

}

function getlongwords(element){
    return element.length > 6;

}