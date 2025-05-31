let username = window.prompt("enter your username ");

// no method chaining 
// username = username.trim();
// let letter = username.charAt(0);
// letter = letter.toUpperCase();

// let extracharacter = username.slice(1);
// extracharacter = extracharacter.toLowerCase();
// username= letter + extracharacter;

//  console.log(username);

//  method chaining

username = username.trim().charAt(0).toUpperCase() + username.slice(1).trim().toLowerCase();


console.log(username);

