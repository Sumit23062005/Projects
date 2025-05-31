// let randomnum = Math.random();
// console.log(randomnum);

//  const max = 50 ;
//  const min = 100 ;
//  let randomNumber = Math.floor(Math.random()*(max - min)) + min ;
//  console.log(randomNumber);

const mybutton = document.getElementById("mybutton");
const mylabel = document.getElementById("mylabell");
const mylabe2 = document.getElementById("mylabel2");
const mylabe3 = document.getElementById("mylabel3");
const max = 6;
const min = 1;
let randomNum1;
let randomNum2;
let randomNum3;


mybutton.onclick=function(){
    randomNum1 = Math.floor(Math.random() * max) + min ;
    randomNum2= Math.floor(Math.random() * max) + min ;
    randomNum3 = Math.floor(Math.random() * max ) + min ;
    mylabel1.textContent= randomNum1;
    mylabel2.textContent= randomNum2;
    mylabel3.textContent= randomNum3;

}