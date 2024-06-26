// TODO
// - work on being able to navigate through an array of objects without creating a loop soup (loops within loops)

// console.log(countries);
// alert('Open the console and check if the countries has been loaded')

// ex lvl 2 -

// const products = [
//   { product: 'banana', price: 3 },
//   { product: 'mango', price: 6 },
//   { product: 'potato', price: ' ' },
//   { product: 'avocado', price: 8 },
//   { product: 'coffee', price: 10 },
//   { product: 'tea', price: '' },
// ];

// let sum = 0;
/* products
  .filter((el) => typeof el.price === 'number')
  .forEach((el) => (sum += el.price));
console.log('total price - ', sum); 
*/
// another way --
/* console.log(
  'total price - ',
  products
    .filter((el) => typeof el.price === 'number')
    .map((el) => el.price)
    .reduce((acc, curr) => acc + curr, 0)
);
*/

// this doesn't work, returns NaN
// console.log(
//   'using only reduce with filter to get total price - ',
//   products
//     .filter((el) => typeof el.price === 'number')
//     .reduce((acc, curr) => acc.price + curr.price)
// );

// loop through countries array
// get the first letter and use as key in object
// if letter doesn't exist, create it as key and increment value to 1
// if letter does exist, increment value by 1
// return array of objects with first letter as key and amount of times it's used as value
// ex. {a: 20, b: 10} etc structure
/* let countryNames = [];
for (let i = 0; i < countries.length; i++) {
  let { name } = countries[i];
  countryNames.push(name);
  //console.log('countryNames - ', countryNames);
}

let newObj = {};
let firstLetters = countryNames.map((el) => el.charAt(0));
console.log('first Letter - ', firstLetters);

firstLetters.map((letter) => {
  if (Object.keys(newObj).includes(letter)) {
    newObj[letter]++;
  } else {
    newObj[letter] = 1;
  }

  // newObj.push({[letter]: 1})

  // TODO: currently it's an object, convert this into an array of separate objects => [{a: 24}, {b: 43}] etc
});

console.log(
  'array of objects containing letter and number of times a country starts with said letter - ',
  newObj
); 
*/

// console.log('get first ten countries - ', countries.slice(0, 10));
// or loop (for let i = 0; i < 10, i++ ) {console.log([].push(countries[i])}

// ex lvl 3 -

// find the n most spoken languages

function mostSpokenLanguages(arr, n) {
  let output = [];

  // loop through countries array
  // destructure language and loop through it
  // push each language into output array of objects
  // increment language count if language already exists
  //

  for (let i = 0; i < arr.length; i++) {
    let { languages } = arr[i];
    // console.log('languages - ', languages);

    for (let j = 0; j < languages.length; j++) {
      // console.log('languages[j] - ', languages[j]);
      // console.log('output[j][language]- ', output[j]['language']);
      // optional operator won't throw an error as per specification
      // output[0].language doesn't exist yet in output = [] so of course it's undefined
      // console.log('output[j][language]- ', output[j]?.language);
      // var currentLang = languages[j];

      let filteredLang = output.filter((el) => el.language === languages[j]);
      if (filteredLang.length !== 0) {
        filteredLang[0]['count']++;
      } else {
        output.push({ ['language']: languages[j], ['count']: 1 });
      }

      // we should loop through the output array starting from the beginning and match whatever language[j] is
      //   for (let k = 0; k < output.length; k++) {
      // can't access j here lol...
      //     console.log(
      //       'output[k].language, languages[j] - ',
      //       output[k].language,
      //       currentLang
      //     );
      //     if (output[k].language === languages[j]) {
      //       // console.log(' here? ');
      //       //output[k].count++;
      //     } else {
      //       //output.push({ ['language']: languages[j], ['count']: 1 });
      //     }
      //   }
      //   if (output[j]?.language === languages[j]) {
      //     console.log(' here? ');
      //     output[j].count++;
      //   }
      //   //   output['language'] = languages[j];
      //   output.push({ ['language']: languages[j], ['count']: 1 });
    }
  }
  // console.log('output - ', output);
  output.sort((a, b) => b.count - a.count); // this modifies original output array
  return console.log('sorted and sliced - ', output.slice(0, n));
}

// mostSpokenLanguages(countries, 10);
