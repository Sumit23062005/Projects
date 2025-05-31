// ...spread operators allows an iterable such as an array or string to be expanded into seperated elements (unpack the elements )

let numbers = [ 1,2,3,4,5];
let maximum = Math.max(...numbers);
let minimum = Math.min(...numbers);
console.log(minimum);
console.log(maximum);
let username = "sumit jadhav ";
let letters = [...username].join("-");
console.log(letters);

let fruits= [" apple " , " orange" , "banana"];
let newfruits = [...fruits];

let vegetables = [ " carrots" , " celery " , "potatoes "];
let foods = [...fruits, ...vegetables , "eggs" , " milk "];
console.log(foods);

