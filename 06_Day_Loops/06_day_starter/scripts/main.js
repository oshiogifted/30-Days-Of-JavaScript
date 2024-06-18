import countries from '../data/countries.js';
import webTechs from '../data/web_techs.js';

// alert('Open the console and check if the countries has been loaded')

// ex lvl 1

// for (let i = 10; i >= 0; i--) {
//   console.log(i);
// }

// let idx = 10;
// while (idx >= 0) {
//   console.log(idx);
//   idx--;
// }

// let index = 10;
// do {
//   console.log(index);
//   index--;
// } while (index >= 0);

// let n = prompt('enter a number between 1 - 10');

// for (let i = 0; i <= +n; i++) {
//   console.log(i);
// }

// for (let i = 1; i <= 7; i++) {
//   console.log('#'.repeat(i));
// }

// let i = 0;
// while (i <= 10) {
//   console.log(`${i} x ${i} = ${i * i}`);
//   i++;
// }

/**
 * An integer is prime if it is not divisible by any prime less than or equal to its square root
 **/
// for (let i = 0; i <= 100; i++) {
//   let sqrt = Math.sqrt(i);
//   if (sqrt % 2 !== 0) console.log(i);
// }

// let sum = 0;
// for (let i = 0; i <= 100; i++) {
//   sum += i;
// }
// console.log(sum);

// let even = 0;
// let odd = 0;
// for (let i = 0; i <= 100; i++) {
//   if (i % 2 !== 0) {
//     even += i;
//   } else {
//     odd += i;
//   }
// }
// console.log('Array - ', [odd, even]);
// console.log(`The sum of all evens from 0 to 100 is ${even}. And the
//     sum of all odds from 0 to 100 is ${odd}`);

// let arr = [];
// for (let i = 1; i <= 5; i++) {
//   let ranNum = Math.floor(Math.random() * (10 - 5 + 1)) + 5;
//   arr.push(ranNum);
// }
// console.log(arr);

// generate 5 unique numbers
// let i = 1;
// let arr = [];
// while (i <= 5) {
//   let ranNum = Math.round(Math.random() * (5 - 1 + 1) + 1);
//   // arr.push(ranNum)
//   if (arr.indexOf(ranNum) === -1) {
//     arr.push(ranNum);
//   } else {
//     i--;
//   }
//   i++;
// }

// console.log(arr);

// generate 6 chars random id
// let strLen = Math.random().toString(16).length;
// console.log('random generated str len - ', strLen);
// let numOfcharsToGenerate = strLen + 6 - strLen;
// console.log('num of chars to generate - ', numOfcharsToGenerate);
// console.log(
//   Math.random()
//     .toString(16)
//     .slice(2, numOfcharsToGenerate + 2)
// );

// ex lvl 2
// console.log(countries.join(', ').toUpperCase().split(', ')); // converts to uppercase

// let countriesLenArr = [];
// for (let i = 0; i < countries.length; i++) {
//   countriesLenArr.push(countries[i].length);
// }
// console.log(countriesLenArr);

// let newCountriesArr = [];
// for (let i = 0; i < countries.length; i++) {
//   newCountriesArr.push([
//     `${countries[i]}, ${countries[i].slice(0, 3).toUpperCase()}, ${
//       countries[i].length
//     }`,
//   ]);
// }
// console.log(newCountriesArr);

// let countriesWithLandArr = [];
// let countriesWithoutLandArr = [];
// for (let i = 2; i <= countries.length; i++) {
//   console.log(`countries at ${i}`, countries[i]);
//   let eachCountry = countries[i];
//   console.log(`eachCountry - `, eachCountry);
//   let countryLowerCase = eachCountry.toLowerCase(); // keep getting error here for some reason.. doesn't make any sense lol...
//   console.log(`countryLowerCase - `, countryLowerCase);
//   if (countryLowerCase.includes('land')) {
//     countriesWithLandArr.push(countries[i]);
//   } else {
//     countriesWithoutLandArr.push(countries[i]);
//   }
// }
// console.log(
//   `countries with land - ${countriesWithLandArr} \n countries without land - ${countriesWithoutLandArr}`
// );

// let arr = []
// for (let i = 0; i < countries.length; i++) {
//     if (countries[i].lastIndexOf('ia') !== -1) {
//         arr.push(countries[i])
//     }
// }
// console.log('arr - ', arr)

// let longestCountryChar = ''
// for (let i = 0; i < countries.length; i++) {
//     console.log('whgat - ', countries[1].length)
//     if (longestCountryChar.length < countries[i].length) {
//         longestCountryChar = countries[i]
//     }
// }

// console.log('longestCountryChar - ', longestCountryChar)

// const mernStack = ['MongoDB', 'Express', 'React', 'Node'];
// const newArr = [];
// for (let items of mernStack) {
//   newArr.push(items[0]);
// }
// console.log(newArr.join(' '));

// const fruits = ['banana', 'orange', 'mango', 'lemon'];
// const reversedFruits = [];
// for (let i = fruits.length - 1; i >= 0; i--) {
//   reversedFruits.push(fruits[i]);
// }
// console.log(reversedFruits);

// console.log('countries - ', countries);

// const sortedCountries = [...countries].sort();
// console.log('sortedCountries - ', sortedCountries);

// console.log('webTechs - ', webTechs);
// const sortedWebTechs = [...webTechs].sort();
// console.log('sortedWebTechs - ', sortedWebTechs);

// const filteredCountries = countries.filter((country) =>
//   country.includes('land')
// );
// console.log('countries with the word land - ', filteredCountries);

// let countryWithLongestWord = '';
// for (let i = 0; i < countries.length; i++) {
//   if (countryWithLongestWord.length < countries[i].length) {
//     countryWithLongestWord = countries[i];
//   }
// }
// console.log('country with the longest word - ', countryWithLongestWord);

// let countriesWithFourChar = [];
// for (let i = 0; i < countries.length; i++) {
//   if (countries[i].length === 4) {
//     countriesWithFourChar.push(countries[i]);
//   }
// }
// console.log('country with four chars - ', countriesWithFourChar);

// let countriesWithTwoOrMoreWords = [];
// for (let i = 0; i < countries.length; i++) {
//   if (countries[i].length >= 2) {
//     countriesWithTwoOrMoreWords.push(countries[i]);
//   }
// }
// console.log('country with two or more words - ', countriesWithTwoOrMoreWords);

let reversedUpperCaseCountries = countries
  .reverse()
  .join(' ')
  .toUpperCase()
  .split(' ');
console.log(
  'countries reversed and upper cased - ',
  reversedUpperCaseCountries
);
