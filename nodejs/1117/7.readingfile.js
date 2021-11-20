const fs= require("fs")
var buf = Buffer.alloc(1024)
console.log(buf)
console.log('open existing file!!!')
fs.open('input1.txt', 'r+', (err, fd) => {
    if(err) return console.error(err);

    console.log("file open success!!!!")

    console.log("reading file")

    fs.read(fd, buf, 0, buf.length, 0, (err, bytes) => {
        if(err) return console.error(err)

        console.log("reading file success")

        //불필요한 버퍼는 스트링 변환 하지 않음
        if (bytes > 0) console.log(buf.slice(0, bytes).toString()) 
        // console.log(buf)
        
        // if (bytes > 0) console.log(buf.toString())
    })
})



