// static = keyword that defines properties or methods that belong to a class itself rather than the objects created from that class (class own anything static , not the objects )

// class MathUtil{
//     static PI = 3.14;
//     static getDiameter(radius){
//         return radius * 2;
//     }
//     static getCircumference(radius){
//         return 2*this.PI*radius;

//     }
//     static Area(radius){
//         return this.PI *radius*radius;
//         }

// }

// console.log(MathUtil.PI);
// console.log(MathUtil.getDiameter(10));
// console.log(MathUtil.getCircumference(10).toFixed(2));
// console.log(MathUtil.Area(10));

class User{
    static usercount = 0 ;
    constructor(username){
        this.username =  username ;
        User.usercount++;

    }
    static getUsercount(){
        console.log(`there are ${User.usercount} users online`);
    }

    sayHello(){
        console.log(`Hello , My username is ${this.username}`);
    }
}
const User1 = new User("Spongebob");
const User2  = new User("patrick");
const User3 = new User("Sandy");


console.log(User1.username);
console.log(User.usercount);
console.log(User2.username);

User1.sayHello();
User2.sayHello();
User3.sayHello();

User.getUsercount();


