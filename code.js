'use strict';

// const modal = document.querySelector('.modal');
// const overlay = document.getElementsByClassName('overlay')[0];
// const closeModal = document.querySelectorAll('.closeModal');
// const buttonModal = document.querySelectorAll('.buttonModal');

// const oModal = function () {
//   console.log('button clicked!!!');
//   modal.classList.remove('hidden');
// };
// console.log(document);
// const cModal = function () {
//   console.log('closing model');
//   modal.classList.add('hidden');
//   overlay.classList.add('hidden');
// };
// for (let i = 0; i < buttonModal.length; i++)
//   buttonModal[i].addEventListener('click', oModal);
// for (let i = 0; i < closeModal.length; i++)
//   closeModal[i].addEventListener('click', cModal);
// overlay.addEventListener('click', cModal);

// document.addEventListener('keydown', function (e) {
//   console.log(e.key);
//   if (e.key === 'Escape' && !modal.classList.contains('hidden')) {
//     cModal();
//   }
// });

// const game = {
//   team1: 'Bayern Munich',
//   team2: 'borrosia dormunt',
//   players: [
//     [
//       'ankit',
//       'virat',
//       'Rohit',
//       'raydu',
//       'Rahul',
//       'rishabh',
//       'hardik',
//       'jadeja',
//       'bumrah',
//       'siraj',
//       'bhuvi',
//     ],
//     [
//       'roy',
//       'buttler',
//       'williamson',
//       'babar',
//       'hetmayar',
//       ' pooran',
//       'stoksy',
//       'rashid',
//       'rabada',
//       'starc',
//       'boult',
//     ],
//   ],
//   score: '4:0',
//   scored: ['rohit', 'ankit', 'virat', 'buttler', 'starc'],
//   date: '03 may , 1996',
//   odds: {
//     team1: 1.33,
//     x: 2.23,
//     team2: 6.45,
//   },
// };

// for (const [i, player] of game.scored.entries() ?? 'something is wrong')
//   console.log(`goal ${i + 1}:  ${player}`);

//answer 1
// let [players1, players2] = game.players;
// console.log(players1, players2);

//answer 2
// const [gk, ...fieldPlayers] = players1;
// console.log([gk], fieldPlayers);
//answer3

// let [allPlayers] = players1.concat(players2);
// console.log(allPlayers);

// const [gk] = game.players;
// console.log(gk.shift);

// var hello = n => {
//   fact = 1;
//   for (let i = 1; i <= n; i++) {
//     fact *= i;
//   }
//   console.log(fact);
// };
// hello(5);

//challenge 3 , maps, sets

// const gameEvents = new Map([
//   [17, 'goal'],
//   [36, 'subsititution'],
//   [47, ' goal'],
//   [61, 'subsititution'],
//   [64, ' yellow card'],
//   [69, 'red card'],
//   [70, 'subsititution'],
//   [72, ' subsititution'],
//   [76, 'goal'],
//   [80, 'goal'],
//   [92, 'yellow card'],
// ]);

// const setArr = [...new Set(gameEvents.values())];
// console.log(setArr);

//call, bind methof

// const poll = {
//   questions: 'what is your fav programming language?',
//   options: ['0 :javascript', '1 :c++', '2 :java ', '3 :django'],
//   answers: new Array(4).fill(0),
//   registerNewAnswer() {
//     const answer = Number(
//       prompt(`${this.questions} \n ${this.options.join('\n')}`)
//     );
//     console.log(answer);
//     typeof answer === 'number' &&
//       answer < this.answers.length &&
//       this.answers[answer]++;
//     console.log(this.answers);
//   },
// };
// document
//   .querySelector('.buttonModal')
//   .addEventListener('click', poll.registerNewAnswer.bind(poll));

// (function () {
//   const header = document.querySelector('h1');
//   header.style.color = 'red';

//   document.querySelector('body').addeventListener('click', function () {
//     header.style.color = 'blue';
//   })();
// });

//for each funtion  --- didn;t really work after applying html

// const url = document.querySelector('.buttonModal');
// const arr = ['red', 'yellow', 'pink', 'blue', 'green'];
// url.innerHTML = '';
// const rainbow = function (color) {
//   color.forEach(function (mov, i) {
//     const html = `this is movememnt of ${mov} and i like the color ${i + 1}.`;

//     url.insertAdjacentElement('afterbegin', html);
//   });
// };
// rainbow(arr);
// console.log(rainbow.innerHTML);

//map methods --- short name

// const name1 = {
//   name: 'ankit kumar',
//   sex: 'Male',
//   phoneNumber: 9711766000,
// };
// const name2 = {
//   name: 'abhinav rai',
//   sex: 'Male',
//   phoneNumber: 9711766002,
// };
// const name3 = {
//   name: 'saumi prajapati',
//   sex: 'female',
//   phoneNumber: 9711766003,
// };

// const names = [name1, name2, name3];

// const findsex = names.find(sexy => sexy.sex === 'female');
// console.log(findsex);

// const findphone = function (n) {
//   for (let num of n)
//     num.phoneNumber === 9711766002
//       ? console.log(num)
//       : console.log('number not found');
// };
// findphone(names);

// const changename = function (nom) {
//   nom.forEach(function (user) {
//     user.userName = user.name
//       .toLowerCase()
//       .split(' ')
//       .map(nomo => nomo[0])
//       .join('');
//   });
// };
// changename(names);
// console.log(names);

//flat and flatMap

// let switcher = [
//   ['a', 'c'],
//   ['b', 'd'],
//   ['f', 'e'],
// ];
// const add = [1, 2, 322, 2323, -12, 1, -212, -22, 90];
// const tt = add.sort(
//   (a, b) => a - b
//   //   if (a > b) return 1;
//   //   if (b > a) return -1;
//   //
// );

// console.log(tt);

const dogs = [
  { weight: 22, curFood: 250, owners: ['Alice', 'Bob'] },
  { weight: 8, curFood: 200, owners: ['Matilda'] },
  { weight: 13, curFood: 275, owners: ['Sarah', 'John'] },
  { weight: 32, curFood: 340, owners: ['Michael'] },
];

//answer1
dogs.forEach(dog => (dog.recFood = Math.trunc(dog.weight ** 0.75 * 28)));
console.log(dogs);

//answer2

const tt = dogs.find(dog => dog.owners.includes('Sarah'));
console.log(tt);
console.log(
  `sarah is eating too ${tt.curFood > tt.recFood ? 'much' : 'little'}`
);

//answer3
const ownersEatTooMuch = dogs
  .filter(dog => dog.curFood > dog.recFood)
  .flatMap(dog => dog.owners);
console.log(ownersEatTooMuch);

const ownersEatTooLittle = dogs
  .filter(dog => dog.curFood < dog.recFood)
  .flatMap(dog => dog.owners);
console.log(ownersEatTooLittle);

//answer4
const pr = ownersEatTooMuch.join(', ');
const cr = ownersEatTooLittle.join(', ');

console.log(`${pr}'s dog eats too little`);
console.log(`${cr}'s dog eats too much`);

//answe 5
console.log(`${dogs.some(dog => dog.curFood == dog.recFood)}`);

//answer6
//current > (recommended * 0.90) && current < (recommended * 1.10)
const checkOkay = dog => dog.recFood * 0.9 && dog.curFood < dog.recFood * 1.1;
console.log(dogs.some(checkOkay));

//answer7
console.log(dogs.filter(checkOkay));

//answer8
const sorted = dogs.slice().sort((a, b) => a.recFood - b.recFood);
console.log(sorted);

//generating a random number between two numbers

const random = (min, max) => Math.floor(Math.random() * (max - min) + 1) + min;
console.log(random(1, 99));

// const modali = document.createElement('div');
// modali.innerHTML = '<button class ="modal">nonon</button>';
// modali.classList.add('modali');
// header.append(modali.clone(true));

document.querySelector('.nav__links').addEventListener('click', function (e) {
  e.preventDefault();
  if (e.target.classList.contains('nav__link')) {
    const id = e.target.getAttribute('href');
    document.querySelector(id).scrollIntoView({ behavior: 'smooth' });
    console.log('link');
  }
});

//new line added
