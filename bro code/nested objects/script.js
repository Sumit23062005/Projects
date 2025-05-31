// nested objects = objets inside of other objects . allows you to represent more complex data structure Child object is enclosed by a parent object 

// person{Adress{} , ContactInfo{} , shoppingCart{Keyboard{} , Mouse{} , Monitor{}}}

// const person = {
//     fullname : " Spongebob SquarePants ",
//     age : 30 ,
//     isStudent : true ,
//     hobbies : ["karate" , "jellyfishing" , " cooking"],
//     address : {
//         street : "123 Conch street ",
//         city : "Bikini Bottom ",
//         country : "Int.  Water ",
//     }

// }
// console.log(person.fullname);
// console.log(person.fullname);
// console.log(person.isStudent);
// console.log(person.hobbies[2]);
// console.log(person.address.street);
// console.log(person.address.country);

// for(const property in person.address){
//     console.log(person.address[property]);

// }

class Person {
    constructor(name, age, ...address) {
        this.name = name;
        this.age = age;
        this.address = new Address(...address);



    }
}

class Address{
    constructor(street, city, country) {
        this.street = street;
        this.city = city;
        this.country = country;


    }
}
const person1 = new Person("Spongebob , 30 , 124 Conch St. ",
    "Bikini Bottom ",
    "Int. Waters .");


const person2 = new Person("Patrick ", 37, "128 Conch St. ",
    "Bikini Bottom ",
    "Int. Waters .");

console.log(person1.address);

console.log(person2.address);
