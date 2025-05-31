// example 1 <h1>

// STEP 1  create the element 
// const newH1 = document.createElement("h1");




// STEP 2 Add attributes and properties 
// newH1.textContent  ="i like pizza "
// newH1.id ="myH1";
// newH1.style.color ="tomato";
// newH1.style.textAlign ="center";


// STEP 3  append element to DOM 

// document.getElementById("box1").append(newH1);

// const box3 = document.getElementById("box3");
// document.body.insertBefore(newH1,box3)

// const boxes = document.querySelectorAll(".box");
// document.body.insertBefore(newH1 , boxes[4]);
// remove HTML element 
// document.getElementById("box1").removeChild(newH1);



// step1. create the element
const newListItem = document.createElement("li");


// step2. Add attributes/properties 
newListItem.textContent = "coconut";
newListItem.id = "coconut";
newListItem.style.fontWeight ="bold";
newListItem.style.backgroundColor = "lightgreen";




// step3. Append element to Dom 
// document.body.append(newListItem);
// document.body.prepend(newListItem);
// document.getElementById("fruits").append(newListItem)
// document.getElementById("fruits").prepend(newListItem);


// const orange = document.getElementById("orange");
// document.getElementById("fruits").insertBefore(newListItem,orange);


const listItems = document.querySelectorAll("#fruits li");
document.getElementById("fruits").insertBefore(newListItem , listItems[2]);
