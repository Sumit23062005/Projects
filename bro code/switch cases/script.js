// let day = 1;

// switch(day){
//     case 1:
//         console.log("it is  Monday");
//         break;
//     case 2:
//         console.log("it is tueday ");
//         break;
//     case 3:
//         console.log("it is wednesday");
//         break;
//     case 4:
//         console.log("it is thursday");
//         break;
//     case 5:
//         console.log("it is friday");
//         break;
//     case 6:
//         console.log("it is saturday");
//         break;
//     case 7:
//         console.log("it is sunday");
//         break;
//     default:
//         console.log(` ${day} is not a day `);


// }

let testscore = 92;
let lettergrade ;
switch(true){
    case testscore >= 90:
        lettergrade = "A";
        break;
    case testscore >= 80:
        lettergrade ="B";
        break;
    case testscore >= 70:
        lettergrade="C";
        break;
        
    case testscore >= 60:
        lettergrade = "D";
        break;
     default:
        lettergrade= "F";
        break;

    
}
console.log(lettergrade);
