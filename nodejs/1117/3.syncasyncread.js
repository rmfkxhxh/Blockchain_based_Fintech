var fs = require('fs');

fs.readFile('input.txt', (err, data) => { //비동기
    if(err) return console.error(err);

    console.log("asyncronous read " + data.toString());

});

var data = fs.readFileSync('input.txt'); //동기
console.log("synchronous read : " + data.toString())

console.log('finsihed program')