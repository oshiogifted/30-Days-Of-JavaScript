import countries from '../data/countries.js';

// function swapValues(x, y) {
//   return `x => ${y}, y => ${x}`;
// }

// console.log('swap values - ', swapValues(3, 4));

// const reverseArray = (...args) => {
//   let reversedArray = [];
//   for (let i = args.length - 1; i >= 0; i--) {
//     // for (let j = args.length - 1; j >= i; j--) {
//     //     let temp = args[j]
//     //     args[j] = arr[i]
//     //     args[i] = temp
//     // }
//     console.log(args.length);
//     console.log('args[i] - ', args[i]);
//     reversedArray.push(args[i]);
//   }
//   return reversedArray;
// };

// console.log('reversed array - ', reverseArray(1, 2, 3, 4, 5));

// function removeItem(i, arr) {
//   // arr.splice(i, 1);
//   // or
//   // arr.filter((el) => el !== i); (you can use index here tho)
//   return arr;
// }

// console.log('remove item - ', removeItem(0, [1, 2, 3]));

// function sumOfOdds(n) {
//   let arr = [];
//   for (let i = 1; i <= n; i++) {
//     if (i % 2 === 0) continue;
//     arr.push(i);
//   }

//   let sum = arr.reduce((prev, curr) => prev + curr, 0);
//   return sum;
// }

// console.log('sum of odd numbers from 1 - n => ', sumOfOdds(5));

// function factorial(n) {
//   let result = 1;
//   for (let i = 1; i <= n; i++) {
//     result *= i;
//   }
//   return result;
// }
// console.log('factorial of given number - ', factorial(3));

// function modifyArray(arr, idx) {
//   for (let i = 0; i < arr.length; i++) {
//     if (i !== idx) continue;
//     console.log('arr[i] - ', arr[i].toUpperCase());
//     arr[i] = arr[i].toUpperCase();
//   }
//   return arr;
// }

// console.log(
//   'modify array element to upper case with provided index => ',
//   modifyArray(['hi', 'bye', 'salt', 'eat', 'goat'], 4)
// );

// function checkDataType(arr) {
//   let result;
//   outer: for (let i = 0; i < arr.length - 1; i++) {
//     for (let j = i + 1; j <= arr.length - 1; j++) {
//       if (typeof arr[i] !== typeof arr[j]) {
//         console.log('not all elements are of the same data type');
//         break outer;
//       }
//       result = 'all elements are of the same data type';
//     }
//   }
//   return result;
// }

// console.log(checkDataType(['hi', 1, true]));
// console.log(checkDataType([true, false]));
// console.log(checkDataType([1, 2, 3, 4]));
// console.log(checkDataType(['hi', 'bye', 'salt', 'eat', 'goat']));
// console.log(checkDataType([() => {}, () => {}]));
