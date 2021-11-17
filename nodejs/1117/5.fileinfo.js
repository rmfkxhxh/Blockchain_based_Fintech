var fs= require("fs")

console.log('going to get file info!!!')
fs.stat('input.txt', function(err, stats) {
    if (err) {
        return console.error(err);
        }
    console.log(stats);
    console.log('got file info successfully!!');

// check file type
console.log("isFile ? " + stats.isFile());
console.log("is directory ? " + stats.isDirectory());
});
