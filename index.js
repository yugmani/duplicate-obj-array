// Import stylesheets
import './style.css';

let myStr1 = '';
let myStr2 = null;
let myStr3 = ' ';

//checking type of given string.
function typeOfThing(str) {
  return typeof str;
}

console.log(typeOfThing(myStr1)); //string
console.log(typeOfThing(myStr2)); //object
console.log(typeOfThing(myStr3)); //string

console.log(myStr1 == null); //false
console.log(myStr2 == null); //true;

console.log(myStr1 == String(myStr1)); //true
console.log(myStr2 == String(myStr2)); //false

function emptyByLength(str) {
  if (str.length === 0) return 'This is an empty string!';
  return 'This is NOT an empty string!';
}

console.log(emptyByLength(myStr1));
//This is an empty string!

// console.log(emptyByLength(myStr2));
//Error: Cannot read properties of null (reading 'length')

console.log(emptyByLength(myStr3));
//This is NOT an empty string!

function emptyTrimByLength(str) {
  if (str.trim().length === 0) return 'This is an empty string!';
  return 'This is NOT an empty string!';
}

console.log(emptyTrimByLength(myStr1));
//This is an empty string!

console.log(emptyTrimByLength(myStr3));
//This is an empty string!

