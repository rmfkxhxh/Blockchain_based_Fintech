const fs = require("fs")

var readerStream = fs.createReadStream("input.txt")
var writerStream = fs.createWriteStream("output.txt")
// var readerStream = fs.createReadStream("./srctxttallica_seattle.mp4")
// var writerStream = fs.createWriteStream("output.mp4")


//Pipe the read and write operations
// read input.txt and write data to output.txt
readerStream.pipe(writerStream);

console.log("program ended")
