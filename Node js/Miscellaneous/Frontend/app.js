// let arr = [1,2,3] ;
// let arr2 = [1 ,2,3] ;
// arr.sayHello= () => {
//     console.log("hello i am arr") ;
// };

// arr2.sayHello = () => {
//     console.log("Hello I am arr") ;
// } ;

// Factory functions
// function PersonMaker(name , age){
//   const person = {
//   name : name ,
//   age : age ,
//   talk() {
//     console.log(`Hi my name is, ${this.name}`) ;
//   }
//   }
//   return person ;
// }


// Constructor - Doesn't return anything and start with capital 

// function Person(name , age){
//     this.name = name ;
//     this.age = age ;

// }

// Person.prototype.talk = function() {
//     console.log(`Hi, my name is ${this.name}`) ;
// };
// classes
// class Person {
//     constructor(name ,age){
//         this.name = name ;
//         this.age = age ;

//     }
//     talk(){
//         console.log(`Hi my name is ${this.name} and my age is ${this.age}`)  ;
//     }
// }

// let p1 = new Person("adam" , 25) ;
// let p2 = new Person("eve" , 25) ;


// Inheritance 

class Person {
    constructor(name , age){
        this.name = name ;
        this.age = age ;

    }
    talk(){
        console.log(`Hi , my name is ${this.name}`); 
    }
}

class Student extends Person{
    constructor(name , age, marks){
        this.marks = marks ;

    }
}


class Teacher {
    constructor(name , age, subjects){
        this.subjects = subjects ;

    }
}

// let teacher1 = new Teacher("Sachin Sakhare" , 45 , "Operating Systems") ;
// let teacher2 = new Teacher("Gopal Deshmukh" , 40 , "LEDM") ;
