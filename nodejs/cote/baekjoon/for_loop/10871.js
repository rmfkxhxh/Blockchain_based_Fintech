const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

let input = [];

rl.on('line', function (line) {
  input.push(line);

}).on('close', function () {
  var N = Number(input[0].split(' ')[0]);
  var X = Number(input[0].split(' ')[1]);
  var ans = []
  numlis = input[1].split(' ');
  for (i in numlis) {
    if (numlis[i] < X)
    ans.push(numlis[i])
  }
  console.log(ans.join(' '))
  })