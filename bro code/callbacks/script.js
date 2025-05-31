// callback =  a function that is passed as an argument to another function 

// used to handle asynchronous operations:
// 1. reading a file 
// 2. network requests 
// 3 . intereacting with databases 
// "hey , when you're done call this next ."
// hello(goodbye);

// function hello(callback){
//     console.log("hello");
//     callback();


// }

// function wait(){
//     console.log("wait");
// }


// function leave(){
//     console.log("leave");
// }


// function goodbye(){
//     console.log("Goodbye");
// }

sum(displaypage ,1,2);

function sum(callback , x ,y){
    let result = x+ y ;
    callback(result);

}

function displayconsole(result){
    console.log(result);
}

function displaypage(result){
    document.getElementById("myh1").textContent = result;
}