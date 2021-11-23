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
  let sum = []

  for (i=0; i < num; i++) {
    sum += (i+1)+'\n'
  }
  
    console.log(sum);
  
	
  process.exit();
});