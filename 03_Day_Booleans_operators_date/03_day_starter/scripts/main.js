// this is your main.js script

// ex lvl 1
let firstName = 'firstName';
let lastName = 'lastName';
let country = 'country';
let city = 'city';
let age = 13;
let isMarried = false;
let year = 2009;

console.log(typeof firstName);
console.log(typeof lastName);
console.log(typeof country);
console.log(typeof city);
console.log(typeof age);
console.log(typeof isMarried);
console.log(typeof year);

console.log(typeof '10' == 10);

console.log(typeof parseInt('9.8') == 10);

console.log(undefined !== null);
console.log(4 > 3);
console.log('hi' == 'hi');

console.log(undefined === null);
console.log(4 < 3);
console.log(1 == 4);

// jumped to lvl 2
//let base = window.prompt('please enter triangle base: ', 'base');
//let height = window.prompt('please enter triangle height: ', 'height');
//let triangleArea = window.alert(`The triangle area is: ${0.5 * base * height}`);

let yourName = window.prompt('Enter your name');
let nameLen = window.alert(
  yourName.length > 7 ? 'your name is long' : 'your name is short'
);

// skipped lvl 3 because i've done something simliar recently - check greatfontend job board question
