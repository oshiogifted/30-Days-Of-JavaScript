import users from '../data/users.js';

// console.log(users);
// console.log(users.Alex.skills);
// console.log(Object.entries(users));

function getUserWithManySkills() {
  // two ways of doing this
  let mostSkills = 0;
  let entries = Object.entries(users);
  console.log('entries - ', entries);
  let userName;
  let skills;
  for (let i = 0; i < entries.length; i++) {
    skills = entries[i][1].skills.length;
    /* let values = entries[i][1];
    let { skills: skillzzz } = values; // renamed skills to skillzzz 
    console.log('skills - ', skillzzz); */
    if (mostSkills < skills) {
      userName = entries[i][0];
      mostSkills = skills;
    }
  }
  console.log(
    `user with most skills is: ${userName} with ${mostSkills} skills`
  );

  // OR -- PREFERRED

  /*     let keys = Object.keys(users);
    let mostSkills = 0;
    let userName;
    for (let i = 0; i < keys.length; i++) {
      let user = keys[i];
      let values = users[user];
      let { skills } = values;

      if (mostSkills < skills.length) {
        mostSkills = skills.length;
        userName = user; // user with most skill
      }
    }
    console.log(`for user ${userName}, they have ${mostSkills} skills`); 
    
    */
}

// getUserWithManySkills();

function getUsersWithFiftyPointsOrMore() {
  /* let keys = Object.keys(users);
  let totalUsers = 0;
  for (let i = 0; i < keys.length; i++) {
    let { points } = users[keys[i]];
    // console.log('points - ', points);
    if (points >= 50) {
      totalUsers++;
    }
  }
  console.log(
    'amount of users with greater than or equal to 50 points - ',
    totalUsers
  ); 
  */

  // OR -- PREFERRED
  let totalUsers = 0;
  // forEach doesn't return a new array.. it just executes for each element in the array
  Object.keys(users).forEach((user) => {
    let { points } = users[user];
    if (points >= 50) totalUsers++;
  });

  console.log(
    'amount of users with greater than or equal to 50 points - ',
    totalUsers
  );
}

// getUsersWithFiftyPointsOrMore();

function getMERNDevs() {
  let entries = Object.entries(users);
  let obj = {};
  let dev;
  let foo = [];
  for (let i = 0; i < entries.length; i++) {
    let { skills } = users[entries[i][0]];
    dev = entries[i][0];
    // console.log('dev - ', entries[i][0]);
    // console.log('skills ', skills);
    let allSkills = '';
    for (let j = 0; j < skills.length; j++) {
      let firstSkillChar = skills[j].charAt(0);
      allSkills = allSkills.concat(firstSkillChar);
      obj[dev] = allSkills;
    }
    // console.log('dev - ', dev);
    // console.log('obj[dev] - ', obj[dev]);
    if (
      obj[dev].includes('M') &&
      obj[dev].includes('E') &&
      obj[dev].includes('R') &&
      obj[dev].includes('N')
    ) {
      foo.push(dev);
    }
  }

  console.log(`devs with MERN stack - ${foo.join(', ')}`);
}

// getMERNDevs();

const foo = [
  {
    _id: 'ab12ex',
    username: 'Alex',
    email: 'alex@alex.com',
    password: '123123',
    createdAt: '08/01/2020 9:00 AM',
    isLoggedIn: false,
  },
  {
    _id: 'fg12cy',
    username: 'Asab',
    email: 'asab@asab.com',
    password: '123456',
    createdAt: '08/01/2020 9:30 AM',
    isLoggedIn: true,
  },
  {
    _id: 'zwf8md',
    username: 'Brook',
    email: 'brook@brook.com',
    password: '123111',
    createdAt: '08/01/2020 9:45 AM',
    isLoggedIn: true,
  },
  {
    _id: 'eefamr',
    username: 'Martha',
    email: 'martha@martha.com',
    password: '123222',
    createdAt: '08/01/2020 9:50 AM',
    isLoggedIn: false,
  },
  {
    _id: 'ghderc',
    username: 'Thomas',
    email: 'thomas@thomas.com',
    password: '123333',
    createdAt: '08/01/2020 10:00 AM',
    isLoggedIn: false,
  },
];

let input = prompt('Enter a user name ', '');
let usersArr = [];
for (let i = 0; i < foo.length; i++) {
  const userName = foo[i].username;
  usersArr.push(userName);
}

console.log('usersArr - ', usersArr);

if (usersArr.includes(input)) {
  alert(`user ${input} exists`);
} else {
  foo.push({ username: input });
  // alert(`nope! user ${input} doesn't exist`);
}
console.log('new foo - ', foo);
