var fs= require("fs")
//async -open file

console.log('open file!!!')
fs.open('input.txt', 'r+', function(err, fd) {
    if (err) return console.error(err);

    console.log('file opened success!!');
})
