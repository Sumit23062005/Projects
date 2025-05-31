// synchronous= Executes line by line cosecutively in a Sequential manner 
// Code that waits for an operation to complete 

// asynchronous = Allows multiple operations to be performed without waiting Does'nt block the execution flow and allows the program to continue (I/O operations , network requests , fetching data)
// Handled with: Callbacks , promises ,Async /Await 

function func1(callback){
    setTimeout(() => {console.log("Task 1"); 
                      callback()}, 3000);
}

function funct2(){
    console.log("Task 2");
    console.log("Task 3");
    console.log("Task 4");
}

func1(funct2);
