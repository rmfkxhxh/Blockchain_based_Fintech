// const readline = require('readline');

// const rl = readline.createInterface({
//   input: process.stdin,
//   output: process.stdout
// });

// let input = [];

// rl.on('line', function (line) {
//   input.push(line);
//   let count = Number(input[0]);
  
//   for(let i = 1; i <= count; i++) {
//     let numbers = input[i].split(' ')
//     // console.log(numbers);
//     num1 = Number(numbers[0]);
//     num2 = Number(numbers[1]);
//     sum = num1 + num2

//     console.log(`Case #${i}: `, sum);
//   }
//   });

let input = require('fs').readFileSync('/dev/stdin').toString().split('\n');
const count = Number(input[0]);
for (let i = 1; i <= count; i++) {
  let numbers = input[i].split(' ');
  console.log(`Case #${i}: ${Number(numbers[0]) + Number(numbers[1])}`);
}