/*
console.log('hello world 👋');

console.log(global.luckyNum);

global.luckyNum = 23;

console.log(global.luckyNum);

console.log(process.platform);

console.log(process.env.USER);

process.on('exit', function () {
  // do something!
});

const { EventEmitter } = require('events');
const eventEmitter = new EventEmitter();

eventEmitter.on('lunch', () => {
  console.log('yum 🍣');
});

eventEmitter.emit('lunch');
eventEmitter.emit('lunch');

// FILE SYSTEM
//////////////////////////////////////
// first without async await promises - and without blocking
// const { readFile, readFileSync } = require('fs');

// const txt = readFileSync('./hello.txt', 'utf8');

// console.log(txt);

// console.log('Do this ASAP ‼');

// first make code nonblicking by refracting this to callback
// readFile('./hello.txt', 'utf8', (err, txt) => {
//   console.log(txt);
// });

// console.log('do this ASAP');

///////////////////////////////
// second with promises and await async
const { readFile } = require('fs').promises;

async function hello() {
  const file = await readFile('./hello.txt', 'utf8');
  console.log(file);
}
hello();

console.log('Do this ASAP ‼');


*/
////////////////////////////////////////////////
// 7. MODULES AND NPM
//// in Common JS require(), in ES6 modules import / export
const myModule = require('./my-module');

console.log(myModule);

const express = require('express');
const { readFile } = require('fs');
const { response } = require('express');

const app = express();

// app.get('/', (request, response) => {
//   readFile('./home.html', 'utf8', (err, html) => {
//     if (err) {
//       response.status(500).send('sorry, out of order');
//     }

//     response.send(html);
//   });
// });

// app.listen(process.env.PORT || 3031, () =>
//   console.log(`App available on http://localhost:3031`)
// );

// Now with async and promises
// FIXME:
app.get('/', async (request, response) => {
  response.send(await readFile('./home.html', 'utf8'));
});

app.listen(process.env.PORT || 3031, () =>
  console.log(`App available on http://localhost:3031`)
);
