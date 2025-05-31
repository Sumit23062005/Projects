// let username = "";
// while(username === ""){
//     console.log("you didn't entered your username ");
// }

// console.log("hello ${username} ");

// while(username === "" || username === null){
//     username = window.prompt("Enter your username ");

// }
// console.log(`hello ${username}`);


// do{
//     username = window.prompt("Enter your username ");

// }while(username === "" || username === null)
// console.log(`hello ${username}`);


let loggedIn = false ;
let username;
let password ;

while(!loggedIn){
    username = window.prompt("enter your username ");
    password = window.prompt("enter your password ");

    if(username === "myUsername" && password === "myPassword"){
        loggedIn = true;
        console.log("you are logged in !");
    }else{
        console.log("invalid credentials | please try again ");
    }
}