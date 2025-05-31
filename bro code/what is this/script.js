// this = reference to the objects where this is used (this object depends on the immediate Context.name= this.name)

const person1 = {
    name : "spongebob", 
    age : 30 ,
     favfood : "hamburgers ",
     sayHello: function(){
        console.log(`Hi, i am  ${this.name}`)
     },
      eat : function(){
        console.log(`${this.name} is eating ${this.favfood}`)
      }
}
person1.sayHello();
person1.eat();


const person2 = {
    name : "Patrick", 
    age : 30 ,
     favfood : "Pizza",
     sayHello: function(){
        console.log(`Hi, i am  ${this.name}`)
     },
      eat : function(){
        console.log(`${this.name} is eating ${this.favfood}`)
      }
    }

    person2.sayHello();
    person2.eat();
    