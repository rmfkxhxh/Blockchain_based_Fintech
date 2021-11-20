const fs = require('fs');

console.log('rename a file')
fs.rename('lorem.txt', 'hello.txt', (err) => { 
    if (err) throw err;

    console.log('file renamed successfully')
})