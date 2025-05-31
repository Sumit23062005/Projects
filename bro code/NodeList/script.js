// NodeList = static collection of html elements by (id, class , element )
// Can be created by using querySelectorAll()
// Similar to an array , but no (map, filter , reduce ) 
// NodeList won't update to automatically reflect changes 

let buttons = document.querySelectorAll(".myButton");

// console.log(buttons);

// buttons.forEach(button => {
//     button.style.backgroundColor ="green";
// button.textContent += "😊";


// });

// click event Listener 

// buttons.forEach(button => {
//     button.addEventListener("click", event => {
//         event.target.style.backgroundColor = "tomato";

//  } )
// })


// MouseOver + MouseOut event Listener 

// buttons.forEach(button => {
//     button.addEventListener("mouseover" , event =>{
//         event.target.style.backgroundColor = "hsl(202, 100%, 50%)";
//     })
// })
// buttons.forEach(button => {
//     button.addEventListener("mouseout" , event =>{
//         event.target.style.backgroundColor = "hsl(202, 100%, 60%)";
//     })
// })


// add an element 
//  const newButton = document.createElement("button"); //step1
//  newButton.textContent ="Button 5";   //step2
//  newButton.classList = "myButton";
//  document.body.appendChild(newButton);  //step3


//  buttons = document.querySelectorAll(".mybuttons");

//  console.log(button);


// remove an element 

buttons.forEach(button => {
    button.addEventListener("click" , event => {
        event.target.remove();
        buttons = document.querySelectorAll(".myButtons");
        console.log(buttons);

    })
})
