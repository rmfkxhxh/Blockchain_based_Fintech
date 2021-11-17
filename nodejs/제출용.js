const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().split(' ');

a = Number(input[0])


for (var i = 0; i < 9; i++) {
  let arr = []
  arr += `${a} * ${i+1} = ${a*(i+1)}\n`
    
}
console.log(arr)



