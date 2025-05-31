// map = accepts a callback andn applies that function to each element of an array , then return a new array 

// const numbers = [1,2,3,4,5,6];

// const squares = numbers.map(square);
// console.log(cubes);

// const cubes = numbers.map(cube);

// console.log(squares);


// function square(element){
//     return Math.pow(element  , 2);

// }

// function cube(element){
//     return Math.pow(element ,  3);

// }


// const students = ["spongebob" , "patrick" , "squidward" , "sandy "];
// const studentsupper = students.map(uppercase);
// const lowercase= students.map(studentslower);
// console.log(lowercase);

// console.log(studentsupper);

// function uppercase(element){
//     return element.toUpperCase();

// }

// function studentslower(element){
//     return element.toLowerCase();
// }

const dates = ["2024-1-10" , "2025-2-20" , "2026-3-30"];

const formattedates = dates.map(formatdates);



function formatdates(element){
    const parts = element.split("-");
    return `${parts[1]}/${parts[2]}/${parts[0]}`;
}

console.log(formattedates);
