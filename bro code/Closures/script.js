// Closure = A clsoure defined inside of another function , the inner function has access to the variables and scope of the outer functions .
// Allow for private variables and state maintenance Used frequently in js Frameworks : React , Vue, Angular 

// function outer(){
//     let message= "Hello";
//     function inner(){
//         console.log(message);

//     }
//     inner();
// }

// message = "Goodbye";

// outer();

// function createCounter(){

// let count = 0;
// function increment(){

//     count ++;
//     console.log(`Count increased to ${count}`);

// }
// function getCount(){
//     return count;
// }

// return {increment , getCount};
// }

// const counter = createCounter();
// counter.increment();
// counter.increment();
// counter.increment();
// counter.increment();
// counter.increment();
// counter.increment();


// console.log(`The current count is ${counter.getCount()}`);
function createGame(){
let score = 0;
function increaseScore(points){
    score += points ;
    console.log(` + ${points} pts`);
}

function decreasepoints(points){
    score -= points ;
    console.log(`-${points} pts`);

}
function getScore(){
    return score;
}
return {increaseScore , decreasepoints , getScore};
}



const game = createGame();
game.increaseScore(5);
game.increaseScore(6);
game.decreasepoints(3);

console.log(`The final Score is ${game.getScore()} pts`);
