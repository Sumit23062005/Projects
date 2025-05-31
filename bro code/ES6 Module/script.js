// ES6 module = An external file that conrtains resuable code 
// that can be imported into other javascript files . write resusable code for many different apps . 
// Can conatain variables , classes , Functions ... and more 
// Introduced as part of ECMAScript 2015 update

import {PI , getCircumference,getArea,getVolume} from './mathUtil.js';

console.log(PI);

const circumference = getCircumference(10);
const Area = getArea(10);
const Volume = getVolume(10);


console.log(`${circumference.toFixed(2)}cm`);
console.log(`${Area.toFixed(2)}cm^2`);
console.log(`${Volume.toFixed(2)}cm^3`);