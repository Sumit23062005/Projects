// inheritance =  allows a new class to inherit properties and methods from an existing class (parent -> child)
// helps with code reusability 
class Animal {
    alive = true;
    eat(){
        console.log(`this ${this.name} is eating `);

    }
   
    sleep(){
        console.log(`this ${this.name} is sleeping`);
    }
}

class Rabbit extends Animal{
    name = "Rabbit ";
    run(){
        console.log(`this ${this.name} is running `);


    }
    

}
class Fish extends Animal{
    name = "Fish ";
    swim(){
        console.log(`this ${this.name} is swimming`);

    }


}
class Hawk extends Animal{
    name = "Hawk";
    fly(){
        console.log(`this ${this.name}  is flying`);
        
    }


}
class Snake extends Animal{
    name = "Snake";


}

const rabbit = new Rabbit();
const fish = new Fish();
const hawk =  new Hawk();
const snake = new Snake();
rabbit.alive = false;


console.log(rabbit.alive);
rabbit.eat();
rabbit.sleep();
fish.eat();
fish.sleep();
rabbit.run();


