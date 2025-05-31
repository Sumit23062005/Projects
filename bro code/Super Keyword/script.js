// super Keyword  =  is used in classes to call constructor or access the properties  and methods of a parent (super class )
// this = this object 
// super =  the parent 

class Animal {
    constructor(name, age) {
        this.name = name;
        this.age = age;


    }
    move(speed) {
        console.log(`this ${this.name} moves at a speed of ${speed}mph`);

    }

}
class Rabbit extends Animal {


    constructor(name, age, runspeed) {
        super(name, age);
        this.runspeed = runspeed;


    }
    run() {
        console.log(`this ${this.name} can run`);
        super.move(this.runspeed);

    }
}
class Fish extends Animal {
    constructor(name, age, swimspeed) {
        super(name, age);
        this.swimspeed = swimspeed;
    }
    swim(){
        console.log(`this ${this.name} can swim`);
        super.move(this.swimspeed);
    }

}
class Hawk extends Animal {
    constructor(name, age, flyspeed) {
        super(name, age);
        this.flyspeed = flyspeed;
    }
    fly(){
        console.log(`this ${this.name} can fly `);
        super.move(this.flyspeed);
    }

}

const rabbit = new Rabbit("rabbit", 1, 25);
const fish = new Fish("fish ", 2, 12);
const hawk = new Hawk("hawk", 3, 50);
fish.swim();
hawk.fly();

