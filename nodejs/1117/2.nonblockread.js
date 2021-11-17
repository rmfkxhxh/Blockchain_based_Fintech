var fs = require('fs');
var data = fs.readFile('input.txt', function(err, data) {
    if (err) return console.log(err);

    console.log(data.toString());

});

console.log("finished program")
