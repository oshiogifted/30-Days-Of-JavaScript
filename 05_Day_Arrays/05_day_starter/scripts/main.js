import countries from '../data/countries.js';
import webTechs from '../data/web_techs.js';

// console.log(countries)
// alert('Open the browser console whenever you work on JavaScript')
// alert('Open the console and check if the countries has been loaded')

// ex lvl 1
// const emptyArr = [];
// const arr = [
//   'banana',
//   1,
//   2,
//   'orange',
//   false,
//   ['mango', 3, 4],
//   { name: 'jon', age: 20 },
// ];
// console.log(arr.length);
// console.log(arr[0], arr[Math.floor(arr.length / 2)], arr[arr.length - 1]);

// const itCompanies = [
//   'Facebook',
//   'Google',
//   'Microsoft',
//   'Apple',
//   'IBM',
//   'Oracle',
//   'Amazon',
// ];
// console.log(itCompanies);
// console.log(itCompanies.length);
// console.log(
//   itCompanies[0],
//   itCompanies[Math.floor(itCompanies.length / 2)],
//   itCompanies[itCompanies.length - 1]
// );
// console.log(itCompanies.join(' '));
// console.log(itCompanies.join(', ').toUpperCase());
// console.log(
//   `${itCompanies.splice(0, itCompanies.length - 1).join(', ')} and ${
//     itCompanies[itCompanies.length - 1]
//   } are big IT companies.`
// );
// let company = prompt('Enter company name: ');
// let companyArr = company.split('');
// let firstLetter = companyArr[0].toUpperCase();
// let rest = companyArr.slice(1).join('').toLowerCase();
// let result = `${firstLetter.concat(rest).trim()}`;
// console.log('result - ', result);
// itCompanies.includes(result)
//   ? console.log(`${result} exists`)
//   : console.log(`${result} doesn't exist`);

// const lowerCaseITCompaniesArr = itCompanies.join().toLowerCase().split(',');
// console.log(lowerCaseITCompaniesArr);
// let company = prompt('Enter company name: ').toLowerCase();
// lowerCaseITCompaniesArr.includes(company)
//   ? console.log(`${company} exists`)
//   : console.log(`${company} doesn't exist`);

// let temp = [];
// itCompanies.join().split('');

// console.log('---');

// console.log(itCompanies.sort());
// console.log(itCompanies.reverse());
// console.log('itCompanies - ', itCompanies); // it companies after sort and reverse
// console.log(itCompanies.slice(0, 3)); // first 3 companies
// console.log(itCompanies.slice(itCompanies.length - 3));
// // console.log(itCompanies.shift());
// console.log(itCompanies.splice(Math.floor(itCompanies.length / 2), 1));
// console.log('itCompanies - ', itCompanies);
// console.log(itCompanies.pop());
// console.log('itCompanies - ', itCompanies);
// console.log(itCompanies.splice(0));
// console.log('itCompanies - ', itCompanies);

console.log('countries - ', countries);
console.log('web techs - ', webTechs);

let text =
  'I love teaching and empowering people. I teach HTML, CSS, JS, React, Python.';
let punctuation = '!"#$%&\'()*+,-./:;<=>?@[\\]^_`{|}~';
let textArr = text.split('');
let textWithoutPunctuation = textArr
  .filter((char) => punctuation.indexOf(char) === -1) // only returns elements that pass (e.g char 'e' is not part of punctuation so indexOf return -1)
  .join('') // to string
  .split(' '); // to array
console.log(textWithoutPunctuation);
console.log(textWithoutPunctuation.length);

const shoppingCart = ['Milk', 'Coffee', 'Tea', 'Honey'];
// console.log(shoppingCart.splice(0, 0, 'Meat')); // or below
console.log(
  shoppingCart.includes('Meat') ? shoppingCart : shoppingCart.unshift('Meat')
);
console.log('shopping cart - ', shoppingCart);

console.log(
  shoppingCart.includes('Sugar') ? shoppingCart : shoppingCart.push('Sugar')
);
console.log('shopping cart - ', shoppingCart);

console.log(
  shoppingCart.includes('Milk') ? shoppingCart : shoppingCart.push('Milk')
);

let honeyIndex = shoppingCart.indexOf('Honey');
console.log(shoppingCart.splice(honeyIndex, 1)); // remove honey
console.log('shopping cart without honey - ', shoppingCart);

let greenTeaIndex = shoppingCart.indexOf('Tea');
shoppingCart.splice(greenTeaIndex, 1, 'Green Tea');
console.log('shopping cart updated tea to green tea - ', shoppingCart);

// let country = 'Ethiopia';
// countries.includes(country)
//   ? console.log(country.toUpperCase())
//   : countries.push(country);

const frontEnd = ['HTML', 'CSS', 'JS', 'React', 'Redux'];
const backEnd = ['Node', 'Express', 'MongoDB'];

const fullStack = frontEnd.concat(backEnd);
console.log(fullStack);

// ex lvl 3
const ages = [19, 22, 19, 24, 20, 25, 26, 24, 25, 24];
console.log('ages sorted - ', ages.sort());
console.log(`min age is ${ages[0]}, and max age is ${ages[ages.length - 1]}`);
console.log(`median is ${Math.floor(ages[ages.length / 2])}`);
console.log(
  `average age is ${Math.floor(
    ages.reduce((prev, curr) => prev + curr, 0) / ages.length
  )}`
);
console.log(`the range of ages is ${ages[ages.length - 1] - ages[0]}`); // oldest is 7 years older than youngest

// console.log(`first ten arrays in countries array - ${countries.slice(0, 10)}`);
// console.log(
//   `the middle country is - ${countries[Math.floor((countries.length - 1) / 2)]}`
// );

let isEvenOdd = countries.length % 2 === 0 ? 'even' : 'odd';
console.log('Is Country array even or odd - ', isEvenOdd);
console.log('countries array length - ', countries.length);
let firstCountryArrHalf = [];
let secondCountryArrHalf = [];
let midPointCountryIndex = Math.floor((countries.length - 1) / 2);
if (countries.length % 2 === 0) {
  // is even
  console.log('midPointCountryIndex - ', midPointCountryIndex);
  firstCountryArrHalf = countries.slice(0, midPointCountryIndex);
  console.log('firstHalf - ', firstCountryArrHalf);
  secondCountryArrHalf = countries.slice(midPointCountryIndex);
  console.log(
    `[EVEN] Countries array divded into two arrays - ${firstCountryArrHalf} and ${secondCountryArrHalf}`
  );
} else {
  //is odd
  firstCountryArrHalf = countries.slice(0, Math.ceil(midPointCountryIndex + 1));
  console.log('firstHalf - ', firstCountryArrHalf);
  secondCountryArrHalf = countries.slice(Math.ceil(midPointCountryIndex + 1));
  console.log('midPoint- ', midPointCountryIndex);
  console.log('secondHalf - ', secondCountryArrHalf);
  console.log(
    `[ODD] Countries array divded into two arrays -
    first half => ${firstCountryArrHalf.join(' ')} \n 
      second half => ${secondCountryArrHalf.join(' ')}`
  );

  console.log(
    `check to see if first half is greater than second half - ${
      firstCountryArrHalf.length > secondCountryArrHalf.length
    }`
  );
}
