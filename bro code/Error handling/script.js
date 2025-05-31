// Error = An object is created to represent a problem that occurs occur often with user Input or establishing a connection

// try { } = Enclose code that might potentially cause an error 
// catch { } = catch and handle any thrown Errors from try { }
// finally { } = (optional) Always executes . Used mostly for clean up export.  close connections , release resources 

// console.log("hello ");
// console.log("you have reached the end ");

// try{
//      console.log(x);
//     //  network errors 
//     //  promise errors 
//     //  security errors 

// }
// catch(error){
//     console.error(error);
// }

// finally{
//     //CLOSE FILES
//     // CLOSE CONNECTIONS
//     // RELEASE RESOURCES
//     console.log("This always executes ");

// }

// console.log("You have reached the end !");





try{
    const dividend = Number(window.prompt("Enter a divident :"));
const divisor = Number(window.prompt("Enter a divisor : "));
const result = dividend / divisor ;

if(divisor == 0){
    throw new Error("You can't divide by zero ");
}
if(isNaN(dividend || isNaN(divisor))){
    throw new Error("Values must be a number ");

}
console.log(result);
}
catch(error){
    console.error(error);
}

console.log("You have reached the end !");
