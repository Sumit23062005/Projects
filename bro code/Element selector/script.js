//  element selector = Methods used to target and manipulate HTML elements they allow you to select one or multiple HTML elements from the DOM (document Object Model)


// 1.document.getElementById()                    // Element or null
// 2.document.getElementsClassName()              html collection 
// 3.document.getElementByTagName()               html collection
// 4.document.querySelector()                     element or null 
// 5. document.querySelectorAll()                 Nodelist     


// const myHeading=  document.getElementById("my-heading");
// myHeading.style.backgroundColor = "Yellow";
// myHeading.style.textAlign = " Center";

// console.log(myHeading);


// const fruits = document.getElementsByClassName("fruits");

// console.log(fruits);
// fruits[2].style.backgroundColor = "yellow";

// for(let fruit of fruits){
//     fruit.style.backgroundColor = "yellow";

// }


// Array.from(fruits).forEach(fruit => {
//     fruit.style.backgroundColor = "yellow";

// });

// const h4elements = document.getElementsByTagName("h4");
// const lieElements = document.getElementsByTagName("li");

// console.log(h4elements);

// h4elements[0].style.backgroundColor="Yellow";

// for(let h4element of h4elements){
//     h4element.style.backgroundColor = "yellow";

// }

// for(let lieElement of lieElements ){
//     lieElement.style.backgroundColor="lightgreen";

// }

// Array.from(h4elements).forEach(h4element => {
//     h4element.style.backgroundColor = "Yellow";

// });


// Array.from(lieElements).forEach(lieElement => {
//     lieElement.style.backgroundColor ="lightgreen";

// });



// const element = document.querySelector(".fruits");

// element.style.backgroundColor = "yellow";

// const element = document.querySelector("h4");

// element.style.backgroundColor = "yellow";

// const element = document.querySelector("li");

// element.style.backgroundColor = "yellow";
// const element = document.querySelector("ul");

// element.style.backgroundColor = "yellow";
// const element = document.querySelector("ol");

// element.style.backgroundColor = "yellow";

// const fruits = document.querySelectorAll(".fruits");
// fruits[0].Style.backgroundColor ="yellow";

const foods= document.querySelectorAll("li");
// foods[2].Style.backgroundColor ="yellow";

foods.forEach(food => {
    food.style.backgroundColor = "yellow";

})

