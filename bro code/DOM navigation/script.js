// DOM navigation = the process of navigating through the structures of an html document using JavaScript.

// .firstElementChild
// .lastElementChild
// .nextElementSibling
// .previousELementSibling
// .parentElement
// .children



// 1.firstElementChild
// const element =  document.getElementById("fruits");
// const firstchild = element.firstElementChild;
// firstchild.style.backgroundColor = "yellow";


// const ulElements = document.querySelectorAll("ul");
//  ulElements.forEach(ulElement => {
//     const firstchild = ulElement.firstElementChild;
//     firstchild.style.backgroundColor ="yellow";

//  })



// 2.lastElementChild

// const element = document.getElementById("desserts");

// const lastChild = element.lastElementChild;
// lastChild.style.backgroundColor = "Yellow";


// const ulElements = document.querySelectorAll("ul");

// ulElements.forEach(ulElement => {
//     const lastChild = ulElement.lastElementChild;
//     lastChild.style.backgroundColor = "yellow";

// })





// 3.nextElementSibling

// const element = document.getElementById("fruits");
// const nextSibling = element.nextElementSibling;
// nextSibling.style.backgroundColor ="yellow";






// 4.previousELementSibling


// const element = document.getElementById("ice-cream");
// const prevSibling = element.previousElementSibling;
// prevSibling.style.backgroundColor ="green";










// 5.parentElement

// const element = document.getElementById("apple");

// const parent = element.parentElement;
// parent.style.backgroundColor ="red";














// 6.children



const element = document.getElementById("fruits");

const children = element.children;

// Array.from(children).forEach(child => {
//     child.style.backgroundColor ="yellow";
    
// })

children[2].style.backgroundColor ="yellow";
