// And = &&
// Or = || 
// not = !

const temp = 20;
// if(temp > 0 && temp <= 30){
//     console.log("the weather is good !");

// }else{
//     console.log("the weather is bad !");
// }

if(temp <=0 || temp > 30){
    console.log("the weather is bad !");
}else{
    console.log("the weather is good !");
}

const isSunny = true;
if(!isSunny){
    console.log("the weather is cloudy !");

}else{
    console.log("the weather is Sunny!");
}