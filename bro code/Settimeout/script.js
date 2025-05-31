// setTimeout = function in a javascript that allows you to schedule 
// the execution of a function after an amaount of time (milliseconds) Times are approximate 
// (varies based on the workload of the javascript runtime env)
// setTimeout(callback , delay);
// clearTimeout() = can cancel a timeout before it trigger 

// function sayhello(){
//     console.log("hello");

// }
// setTimeout(sayhello , 3000);

// setTimeout(function(){window.alert("Hello")}, 3000);

// const timeoutid = setTimeout(() => window.alert(("hello")), 3000);

// clearTimeout(timeoutid);

let timeoutId;

function startTimer(){
   timeoutId= setTimeout(() => window.alert("hello"), 3000);
   console.log("STARTER")
}

function clearTimer(){
    clearTimeout(timeoutId);
    console.log("CLEARED");
}