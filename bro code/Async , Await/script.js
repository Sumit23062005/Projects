// Async/ Await  = Async = makes a fucntion return a  promise 
//                 Await = makes a Async function wait or a promise 

//                 Allows you to write Asynchronous code in a synchronous manner Async doesnt have resolve or reject parameters 
//                 Everything After await is placed in an event queue 


function walkDog(){
    return new Promise((resolve , rejecct) => {
        setTimeout(() => {
            const dogwalked = true ;
            if(dogwalked){
                resolve("you walk the dog 🐕");
            }else{
                rejecct("You Didn't walk the dog");
            }
        }, 1500);
    });
}

function cleanKitchen(){
    return new Promise((resolve , reject) => {
        setTimeout(() =>{
            const cleankitchen = true ;
            if(cleankitchen){
                resolve(" you clean the kitchen 🧹");
            }
        },2500);
    });
}

function TakeOutTrash(){
    return new Promise((resolve, reject)=>{
        setTimeout(() => {
            const trashout = true ;
            if(trashout){
                resolve("you took the trash out 🗑️");
            }else{
                reject("YOU DIDN'T TAKE OUT THE TRASH");
            }

        },1500);
    });
}
    
async function doChores(){
    try{
        const walkDogResult= await walkDog();
        console.log(walkDogResult);

        const cleanKitchenResult =  await cleanKitchen();
        console.log(cleanKitchenResult);

        const TakeOutTrashResult = await TakeOutTrash();
        console.log(TakeOutTrashResult);


        console.log("You finished all the chores!");
    }catch(error){
        console.error(error);
    }
}

doChores();