const fs = require("fs")
const zlib = require("zlib")

fs.createReadStream("input.txt")
    .pipe(zlib.createGzip())
    .pipe(fs.createWriteStream("input.txt.gz"))

console.log("File compressed")
