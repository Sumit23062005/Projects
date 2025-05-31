// destructuring = extract values from arrays and objects, then assign them to variable in a convenient way 
// []= to perform array destructuring
// {} =  to explain obejct destructuring
// 5 examples 

// example 1 
// swap the values of two variable 
// let a = 1;
// let b = 2;
// [a ,b] = [b , a];
// console.log(a);
// console.log(b);

// example 2 
// swap 2 elements in an array 
// const colors = ["red" , "green" , "blue" , "white"];
// [colors[0] ,colors[4]] = [colors[4], colors[0]];
// console.log(colors);

// example 3 
// ASSIGN ARRAY ELEMENTS TO VARIABLES 

// const colors = ["red" , "green" , "blue" , "white"];

// const [firstColor , secondColor ,thirdColor, ...extraColors] = colors;
// console.log(firstColor);
// console.log(secondColor);
// console.log(thirdColor);
// console.log(extraColors);

// example 4
// EXTRACT VALUES FROM OBJECTS 

function displayPerson({firstName , lastName , age , job = "Unemployed"}){
    console.log(`name: ${firstName} ${lastName}`);
    console.log(`age: ${age}`);
console.log(`job: ${job}`);

}
const person1 = {
    firstName : "spongebob",
    lastName : "SquarePants",
    age :30,
    job : "fry cook",


}
const person2 = {
    firstName: "Patrick" , 
    lastName : "star",
    age : 34 ,
}

// const {firstName , lastName , age , job} = person1;

// console.log(firstName);
// console.log(lastName);
// console.log(age);
// console.log(job);

// const {firstName , lastName , age , job ="Unemployed "} = person2;

// console.log(firstName);
// console.log(lastName);
// console.log(age);
// console.log(job);

displayPerson(person2);


// example 5 
// DESTRUCTURE IN FUNCTION PARAMETERS

