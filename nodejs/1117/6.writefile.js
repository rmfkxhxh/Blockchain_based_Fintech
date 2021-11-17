var fs= require("fs")

console.log('Writing file!!!')
fs.writeFile('input.txt', 'This is file writing test in nodejs~~~', function(err) {
    if (err) {
        return console.error(err);
        }
    console.log('data written success~~');
    console.log('read new file');
    fs.readFile('input.txt', (err, data) => {   
        if (err) {
            return console.error(err);
        }
        console.log("async file reading : " + data.toString());
    });
});
