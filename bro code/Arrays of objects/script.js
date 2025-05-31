const fruits = [{name:"Apple" , color : "red " , calories : 95 },
    {
    name : "Orange" , color :"Orange" , calories : 45 
    },
    {
        name : "coconut" , color : "White ", calories: 159 
    },
    {
        name : "pineapple" , color : "yellow" , calories :37
    }
];

// console.log(friuts[0].name);
// console.log(friuts[0].calories);

// friuts.push({name : "grapes" , color : "purple" , calories : 62});
// console.log(friuts);

// friuts.pop();
// friuts.splice(1,2);
// console.log(friuts);

// friut.forEach(fruits => console.log(fruits.calories));

// const fruitnames = fruits.map(fruit => fruit.name);
// const fruitcolors = fruits.map(fruit => fruit.color);
// const fruitcalorie = fruits.map(fruit => fruit.calories);

// console.log(fruitnames);
// console.log(fruitcolors);
// console.log(fruitcalorie);


// const yellowfruits = fruits.filter(fruit => fruit.color === "yellow");
// const lowcalfruit = fruits.filter(fruit => fruit.calories < 100);
// const highcalfruit =  fruits.filter(fruit =>fruit.calories >= 100 );

// console.log(yellowfruits);
// console.log(lowcalfruit);
// console.log(highcalfruit);

const maxfruit = fruits.reduce ((max , fruit ) => fruit.calories > max.calories ? fruit :max );

console.log(maxfruit);
const minfruit = fruits.reduce((min , fruit) => min.calories ? fruit : min) ;
 
console.log(minfruit);
