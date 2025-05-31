// DOM = Document Object Model 
// object{} that represents the page you see in the web browser and provides you with An API to interact with it 
// web browser constructs the DOM when it loads an html document,
// and structures all the elements in a tree-like representation. JavaScript can also access the DOM dynamically change the content , structure , and style of a web page .

const username = "Sumit ";
const welcomeMsg = document.getElementById("welcome-msg");
welcomeMsg.textContent += username === "" ? `Guest` : username;
console.log(document);
