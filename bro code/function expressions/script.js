// function declaration = define a reusable block of codes that perform a specific task 

// function hello(){
//     console.log("hello");
// }
// // function expressions = a way  to define functions as a values or variables 
// const hello = function(){
//  console.log("hello");

// }

// setTimeout(hello ,3000);

// setTimeout(function(){
//     console.log("hello");
// } , 3000 );


const numbers = [ 1,2,3,4,5,6,7];
// const squares = numbers.map(sqaure);
// console.log(squares);


// function sqaure(element){
//     return Math.pow(element , 2);
// }

// const squares = numbers.map(function(element){
//     return Math.pow(element , 2);

// })

// console.log(squares);

// const cubes = numbers.map(cube);
// console.log(cubes);
// function cube(element){
//     return Math.pow(element , 3);

// }

const cubes  = numbers.map(function(element){
    return Math.pow(element  , 3);
});
console.log(cubes);

const evenNUmbs = numbers.filter(function(element){
    return element % 2 === 0;

});

const oddNums = numbers.filter(function(element){
    return element % 2 !== 0 ;

});


console.log(evenNUmbs);
console.log(oddNums);


const total = numbers.reduce(function(accumulator , element ){
    return accumulator + element ;

});

console.log(total);