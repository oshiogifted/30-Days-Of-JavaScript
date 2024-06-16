// this is your main.js script

alert('Open the browser console whenever you work on JavaScript');

// skipped to level 3
// (note can use objects for this but since we haven't learned it i choose this instead lol)
const jan = 31;
const feb = 28;
const febLeapYear = 29;
const mar = 31;
let month = prompt(
  "Enter full month. For leap year enter 'feburary leap year'",
  'January - March'
);

switch (month.toLowerCase()) {
  case 'january':
    alert(`${month} has ${jan} days`);
    break;
  case 'feburary':
    alert(`${month} has ${feb} days`);
    break;
  case 'feburary leap year':
    alert(`${month} has ${febLeapYear} days`);
    break;
  case 'march':
    alert(`${month} has ${mar} days`);
    break;
  default:
    alert('invalid month');
}
