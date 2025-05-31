// getter = special method that makes a property redeable 
// setter = special method that makes a property writeable

// validate and modify a value when reading / writing a property 

// class Rectangle{
//     constructor(width , height ){
//         this.width= width;
//         this.height = height ;

//     }

//     set width(newwidth){
//         if(newwidth > 0){
//             this._width = newwidth;

//         }else{
//             console.log("width must be a positive number");
//         }

//     }

//     set height(newheight){
//         if(newheight > 0){
//         this._height = newheight;

//     }else{
//         console.log(" height must be a positve number ");

//     }
// }

// get width(){
//     return `${this._width.toFixed(1)} cm^2`;

// }

// get height(){
//     return `${this._height.toFixed(1)} cm^2 `;

// }
// get Area(){
//     return `${(this._width *this._height).toFixed(1)} cm^2`;

// }
// }
// const rectangle = new Rectangle(3 ,5);
// console.log(rectangle.width);
// console.log(rectangle.height);
// console.log(rectangle.Area);

class Person {
    constructor(firstName, lastName, age) {
        // Updated constructor to use setters
        this.firstName = firstName;
        this.lastName = lastName;
        this.age = age;
    }

    set firstName(newFirstName) {
        if (typeof newFirstName === "string" && newFirstName.length > 0) {
            this._firstName = newFirstName;
        } else {
            console.error("First name must be a non-empty string");
        }
    }

    get firstName() {
        return this._firstName;
    }

    set lastName(newLastName) {
        if (typeof newLastName === "string" && newLastName.length > 0) {
            this._lastName = newLastName;
        } else {
            console.error("Last name must be a non-empty string"); // Corrected error message
        }
    }

    get lastName() {
        return this._lastName;
    }

    set age(newAge) {
        if (typeof newAge === "number" && newAge >= 0) {
            this._age = newAge;
        } else {
            console.error("Please enter a valid age");
        }
    }

    get age() {
        return this._age;
    }

    get fullname(){
        return this._firstName +  " " + this._lastName;

    }
}

// Use valid initial values
const person = new Person("John", "Doe", 30);
console.log(person.firstName); // John
console.log(person.lastName); // Doe
console.log(person.age); // 30

// Testing invalid values
person.firstName = 420; // Should trigger an error
person.lastName = 68; // Should trigger an error
person.age = "Pizza"; // Should trigger an error

console.log(person.firstName); // Should remain "John"
console.log(person.lastName); // Should remain "Doe"
console.log(person.age); // Should remain 30

console.log(person.fullname);
