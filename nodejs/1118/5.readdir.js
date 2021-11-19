const fs = require('fs');

console.log('reading directory')
fs.readdir('./newfolder/hellodir/', (err, files) => {
    if(err) throw err;

    files.forEach((x) => {
        console.log(x);
    })
})