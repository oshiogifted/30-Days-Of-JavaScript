// console.log(countries);
// alert('Open the console and check if the countries has been loaded')

// ex 1

/* let emptySet = new Set();
console.log('emptySet - ', emptySet); */

/* i = 0;
let numSet = new Set();
while (i <= 10) {
  numSet.add(i);
  i++;
}
console.log(numSet); */

/* let nameSet = new Set(['jon', 'lisa', 'jake']);
nameSet.delete('jake');
console.log('nameSet - ', nameSet); */

/* let anotherSet = new Set(['1', 1, true]);
anotherSet.clear();
console.log('anotherSet -', anotherSet); */

/* let array = ['a', 'b', 'c', 'd', 'e'];
let strSet = new Set();
for (let i of array) {
  strSet.add(i);
}
console.log('strSet - ', strSet); */

/* let obj = {};
for (let country of countries) {
  let countryLen = country.name.length;
  obj[country.name] = countryLen;
}
console.log('obj - ', obj);
let countryMap = new Map(Object.entries(obj));
console.log('countryMap - ', countryMap);
 */

// ex 2

const a = [4, 5, 8, 9];
const b = [3, 4, 5, 7];

let c = [...a, ...b]; // union a and b
console.log('c - ', c);
let unionSet = new Set(c);
console.log('unionSet - ', unionSet);

let bSet = new Set(b);
let d = a.filter((el) => bSet.has(el));
let intersectionSet = new Set(d);
console.log('intersectionSet - ', intersectionSet); // intersection a and b
