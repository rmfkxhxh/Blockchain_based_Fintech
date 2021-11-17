const fs = require("fs");
const { off } = require("process");

var buf = Buffer.alloc(1024); //1kb

console.log("open existing input.txt file~")

fs.open("input.txt", 'r+', (err, fd) => { 
    if (err) return console.error(err);

    console.log("inut.txt open success~~")

    console.log("reading input.txt file~")
    fs.read(fd, buf, 0, buf.length, 0, (err, bytes, bf) => {
        if (err) return console.error(err);

        console.log("input.txt reading success~")
        console.log("bf : " + bf)
        if(bytes>0) console.log(buf.slice(0, bytes).toString());

        fs.close(fd, (err)=> {
            if (err) return console.error(err);

            console.log("input.txt closed success~")
        })
    })
})
