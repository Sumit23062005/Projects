// promises = an object that manages an asynchronous operations. 
// wrap a promise Object around (ansynchronous code ) 
// "I promise to return a value "
// PENDING -> RESOLVE OR REJECTED 
// new Promise ((resolve, reject ) => (asynchronous code))

// DO THESE CHORES IN ORDER 

// 1.WALK THE DOG 
// 2. CLEAN THE KITCHEN 
// 3.TAKE OUT THE TRASH 

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
    
walkDog().then(value => {console.log(value); return cleanKitchen()})
.then(value => {console.log(value); return TakeOutTrash() })
.then(value => {console.log(value); console.log(" you finished all the chores ")})
.then(error => console.log(error));
