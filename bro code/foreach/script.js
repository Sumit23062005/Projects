// foreach() = method used to iterate over the elements of an array and apply a specified function (callback) to each element 
// array.foreach(callabck)
// element , index ,array are provided 

// let numbers = [1,2,3,4,5];

// numbers.forEach(cube);
// numbers.forEach(display);
// numbers.forEach(square);

// function double(element  , index  , array ){
//     array[index] = element * 2;

// }

// function triple(element ,  index , array ){
//     array[index] =  element * 3;

// }

// function square(element , index , array ){
//     array[index] = Math.pow(element , 2);

// }

// function cube(element , index ,  array ){
//     array[index] = Math.pow(element , 3);
// }
// function display(element){
//     console.log(element);

// }

let fruits = ["apple" , "orange " , "banana" , "coconut"];
fruits.forEach(uppercase);
fruits.forEach(display);

function uppercase(element ,index  ,array){
    array[index] = element.toUpperCase();
}

function display(element){
    console.log(element);

}