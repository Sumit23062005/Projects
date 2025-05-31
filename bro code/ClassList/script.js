// classList = Element property in javascript used to interact with an element's list of classes (CSS classes)
//  Allows you to make resuable classes for many elements across your webpage .

// add()
// remove()
//Toggle(remove if present , add if not)
//replace(oldclass , newClass )
//contains()

// const myButton =  document.getElementById("myButton");
// myButton.classList.add("enabled");
// myButton.classList.remove("enabled");
// myButton.classList.add("hover");

// myButton.addEventListener("mouseover"  , event => {
//     event.target.classList.toggle("hover");

// })
// myButton.addEventListener("mouseout" , event => {
//     event.target.classList.toggle("hover");

// })

// const myH1 = document.getElementById("myH1");
// myH1.classList.add("enabled");
// myButton.classList.add("enabled");

// myButton.addEventListener("click" , event => {
//     if(event.target.classList.contains("disabled")){
//         event.target.textContent += "🤬";
//     }else{
//         event.target.classList.replace("enabled" , "disabled");


//         }

//     }
  
// )
// myH1.addEventListener("click" , event => {
//     if(event.target.classList.contains("disabled")){
//         event.target.textContent += "🤬";
//     }else{
//         event.target.classList.replace("enabled" , "disabled");


//         }

//     }
  
// )

const buttons = document.querySelectorAll(".myButton");
buttons.forEach(button => {
    button.classList.add("enabled");

});
// buttons.forEach(button => {
//     button.classList.remove("enabled");

// });

buttons.forEach(button => {
    button.addEventListener("mouseover" , event => {
        event.target.classList.toggle("hover");
        
    })
})