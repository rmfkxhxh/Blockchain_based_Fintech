const fs = require('fs');
var buf = Buffer.alloc(1024);

console.log("open input.txt file~")
fs.open('input.txt', 'r+', (err, fd) => {
    if(err) return console.error(err);

    console.log("file open success!!!!")

    console.log("truncate file after 20bytes~~~")
    var len = 20

    fs.ftruncate(fd, len, (err)=> { //file 0위치 부터 len만큼만 남김
        if(err) return console.error(err);

        console.log("file truncate success~~");

        console.log("reading file~~")

        fs.read(fd, buf, 0, buf.length, 0, (err, bytes, databuf) => {
            if(err) return console.error(err);

            if(bytes > 0) {
                console.log(buf.slice(0, bytes).toString());
                console.log('bytes:', bytes)
                console.log('databuf: ', databuf)
                console.log('buf: ', buf)
                // console.log()
            }

            fs.close(fd, (err)=> {
                if(err) return console.error(err)

                console.log('file closed~~~~~')
            })
        })
    })
}) 