// let age = 25;
// if(age >= 18){
//     console.log("you are old enough to enter this site ")
// }else{
//     console.log("you must be 18+ to enter this site ")
// }
// let time = 9 ;
// if(time < 12 ){
//     console.log("good morning !");
// }else{
//     console.log(" Good afternoon !");

// }

// let isstudent = true;
// if(isstudent){
//     console.log("you are a student ")
// }else{
//     console.log("you are not a student ")
// }

// let age =25;
// let haslicense = false;
// if(age >= 18){
//     console.log("you are old enough to drive")

//     if(haslicense){
//     console.log("you have your license !")
//     }
//     else{
//         console.log("you do not have your license !")
//     }
// }else{
//     console.log("you are not old enough to have license")
// }
const mytext = document.getElementById("mytext");
const mysubmit = document.getElementById("mysubmit");
const resultelement = document.getElementById("resultelement");
let age;

mysubmit.onclick = function(){
    age =mytext.value;
    age = Number(age);

if(age >= 100){
  
    resultelement.textContent = `you are too old to enter the site !`;
}
else if(age == 0){
    
    resultelement.textContent =`you cant enter . you were just born !`;
}
else if(age >= 18){

    resultelement.textContent =`you are old enough to enter the site`;
}
else if(age < 0){
    resultelement.textContent=`your age can't be below 0`;
}
else{
     resultelement.textContent=`you must me 18+ to enter this site`;
}
}