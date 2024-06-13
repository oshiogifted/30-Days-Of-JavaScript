// this is your main.js script

// Exercise: Level 1

// #1
let challenge = '30 Days Of JavaScript';

console.log(challenge);
console.log('str length - ', challenge.length);
console.log(challenge.toUpperCase());
console.log(challenge.toLowerCase());
console.log(challenge.substring(0, 2));
console.log(challenge.substring(3));
console.log(challenge.includes('Script'));
console.log(challenge.split());
console.log(challenge.split(' '));

let str2 = 'Facebook, Google, Microsoft, Apple, IBM, Oracle, Amazon';
console.log(str2.split(', '));

console.log(challenge.replace('JavaScript', 'Python'));
console.log(challenge.charAt(15));
console.log(challenge.charCodeAt(challenge.match('JavaScript')['index'])); // cheeky way of getting the below
console.log(challenge.charCodeAt(11)); // same as above
console.log(challenge.indexOf('a'));
console.log(challenge.lastIndexOf('a'));

let str3 =
  'You cannot end a sentence with because because because is a conjunction';
console.log(str3.indexOf('because'));
console.log(str3.lastIndexOf('because'));
console.log(str3.search('because'));

let str4 = ' 30 Days Of JavaScript ';
console.log(str4.trim());

console.log(challenge.startsWith(30));
console.log(challenge.endsWith('t'));
console.log(challenge.match('a'));
console.log(challenge.repeat(2));

// Ex lvl2
console.log(
  "The quote 'There is no exercise better for the heart than reaching down and lifting people up.' by John Holmes teaches us to help one another."
);
console.log(
  '"Love is not patronizing and charity isn\'t about pity, it is about love. Charity and love are the same -- with charity you give love, so don\'t just give money but reach out your hand instead."'
);

console.log(typeof '10' == 'string');
console.log(Math.round(parseFloat('9.8')) == 10);

let pythonStr = 'python';
let jargonStr = 'jargon';
console.log(pythonStr.includes('on'));
console.log(jargonStr.includes('on'));

let str5 = 'I hope this course is not full of jargon';
console.log(str5.includes('jargon'));

console.log(Math.round(Math.random() * 101)); // 0 - 100 inclusively
console.log(Math.floor(Math.random() * 51) + 50); // 50 - 100 inclusively
console.log(Math.round(Math.random() * 258)); // 0 - 255 inclusively

// using (max - min + 1) + min to access 'JavaScript' chars between 11 - 20 range
console.log(challenge.charAt(Math.floor(Math.random() * (20 - 11 + 1)) + 11));

console.log('1\t1\t1\t1\t1\n2\t1\t2\t4\t8'); // and so on...

let firstIndexOfBecause = str3.indexOf('because');
let lastIndexOfBecause = str3.lastIndexOf('because');
console.log(
  str3.substring(firstIndexOfBecause, lastIndexOfBecause + 'because'.length)
);

let str6 =
  'Love is the best thing in this world. Some found their love and some are still looking for their love.';
console.log(str6.match(/love/gi).length);

console.log(str3.match(/because/gi).length);

const sentence =
  '%I $am@% a %tea@cher%, &and& I lo%#ve %te@a@ching%;. The@re $is no@th@ing; &as& mo@re rewarding as educa@ting &and& @emp%o@weri@ng peo@ple. ;I found tea@ching m%o@re interesting tha@n any ot#her %jo@bs. %Do@es thi%s mo@tiv#ate yo@u to be a tea@cher!? %Th#is 30#Days&OfJavaScript &is al@so $the $resu@lt of &love& of tea&ching';

console.log(sentence.replace(/[^\w\s]/g, ''));

const str7 =
  'He earns 5000 euro from salary per month, 10000 euro annual bonus, 15000 euro online courses per month.';
const arr = str7.match(/\d+/g);
const totalIncome = +arr[0] + +arr[1] + +arr[2];
console.log('totalIncome - ', totalIncome);
