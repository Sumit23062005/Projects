// arrow function = a conscise way to write function expressions good for simple functions that you use only once (parameters) => some code

// function hello(){
//     console.log("hello");
// }

// const hello = function(){

//     console.log("hello ");

// }

// arrow function 
const hello = (name ,age) => {console.log(`hello  ${name}`) 
console.log(`you are  ${age} years old`)};

hello("bro" , 25);


setTimeout(() => console.log("hello "), 3000);

const numbers = [1,2,3,4,5,6,7];
const squares = numbers.map((element) => Math.pow(element , 2))
const cubes  = numbers.map((element) => Math.pow(element , 3))
console.log(cubes);
const evenNumbs  =  numbers.filter((element) =>  element % 2  === 0);
console.log(evenNumbs);
const oddnumbs = numbers.filter((element) => element % 2 !== 0);
console.log(oddnumbs);

const total = numbers.reduce((accumulator , element ) => accumulator + element);
 console.log(total);
 