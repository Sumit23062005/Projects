// JSON  =(JavaScript Object Notation ) Data inter-Change Format Used for Exchanging data between a server and a web application JSON files {key :value } OR [value1 , value2 , value3 ]


// JSON.stringify() = converts a js object to a JSON string.
// JSON.parse() = converts a JSON string to a JS object 
// const names = ["spongebob" , "Patrick" , "Squirdward" ,"Sandy"];
// const person = {
//     "name": "spongebob",
//     "age" : 30 ,
//     "isEmployed" : true, 
//     "hobbies " : ["jellyFishing" ,"karate" , "cooking"]
// };

// const people = [
//     {
//         "name": "spongebob",
//         "age" : 30 ,
//         "isEmployed" : true
//     },
//     {
//         "name": "Patrick",
//         "age" : 34 ,
//          "isEmployed" : false

//     },
//      {
//         "name " : "Squirdward",
//         "age" : "50 ",
//         "isEmployed" : true 
//      },
//       {
//         "name" : "Sandy",
//          "age" : 27 ,
//          "isEmployed" : false
//       }
// ];

// const jsonString = JSON.stringify(people);
// // console.log(jsonString);
// console.log(jsonString);




// const jsonnames = ["spongebob" , "Patrick" , "Squirdward" ,"Sandy"];
// const jsonperson = {
//     "name": "spongebob",
//     "age" : 30 ,
//     "isEmployed" : true, 
//     "hobbies " : ["jellyFishing" ,"karate" , "cooking"]
// };

// const jsonpeople = [
//     {
//         "name": "spongebob",
//         "age" : 30 ,
//         "isEmployed" : true
//     },
//     {
//         "name": "Patrick",
//         "age" : 34 ,
//          "isEmployed" : false

//     },
//      {
//         "name " : "Squirdward",
//         "age" : "50 ",
//         "isEmployed" : true 
//      },
//       {
//         "name" : "Sandy",
//          "age" : 27 ,
//          "isEmployed" : false
//       }
// ];

// const parsedData = JSON.parse(jsonnames);
// console.log(parsedData);


fetch("person.json")
.then(response => response.json())
.then(values => values.forEach(value => console.log(value)));