const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

let input = [];

rl.on('line', function (line) {
  input.push(line);

}).on('close', function () {
  var num = Number(input[0]);
  for(var i=0; i < num; i++) {
    var star = '*'
    console.log(star.repeat(i+1))
  }
})