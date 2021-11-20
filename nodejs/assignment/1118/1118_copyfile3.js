const fs = require('fs');
var buf = Buffer.alloc(40960);
var restfilesize = 0;

console.log('reading current directory')
fs.readdir('./', (err, files) => {
    if (err) throw err;
    var fileArr = []
    files.forEach((x) => {
        fileArr += x
        console.log('current directory files : ', x);
    })
    if (fileArr.includes('target') == 0) {
        fs.mkdir('./target', (err) => {
            if (err) throw err;
            console.log("created target directory")
        })
    }
    else console.log("target directory already exists")
})
fs.readdir("./src", (err, files) => {
    files.forEach((x) => {
        console.log('src directory files : ', x);
        if (x == "metallica_seattle.mp4") {
            fs.stat(`./src/${x}`, (err, stats) => {
                if (err) throw err;
                var fsize = stats.size;
                console.log('filesize : ', fsize);
                restfilesize = 0;



                fs.open(`./src/${x}`, 'r+', (err, fd) => {
                    if (err) return console.error(err);

                    console.log(`${x} open success~~`)


                    console.log("reading file~")

                    for (var bytesRead = 0; bytesRead < fsize / 3; bytesRead = bytesRead + buf.length) {

                        fs.read(fd, buf, 0, buf.length, bytesRead, (err, bytes, bf) => {
                            if (err) throw err;
                            // console.log('bf', bf.length, bytesRead)
                            restfilesize += bytesRead
                            // if (restfilesize < fsize) {
                            // console.log("bytesRead :", restfilesize, "reading success~");
                            // console.log(fsize / 3)
                            // console.log(bytesRead)

                            // console.log("bf : ", fsize/buf.length)
                            // if (bytes > 0) console.log(buf.slice(0, bytes).toString());
                            // }
                            // console.log('bytes', bytes)
                            fs.writeFile(`./target/${x}`, bf, function (err) {
                                // console.log(bytesRead)
                                if (err) throw err;
                                console.log('data written success~~')
                            });//
                        })//

                    }//
                    for (var bytesRead = fsize / 3; bytesRead < 2 * fsize / 3; bytesRead = bytesRead + buf.length) {

                        fs.read(fd, buf, 0, buf.length, bytesRead, (err, bytes, bf) => {
                            if (err) throw err;
                            restfilesize += bytesRead
                            // if (restfilesize < fsize) {
                            // console.log("bytesRead :", bytesRead, "reading success~");
                            // console.log(fsize / 3)
                            // console.log(bytesRead)

                            // console.log("bf : ", fsize/buf.length)
                            // if (bytes > 0) console.log(buf.slice(0, bytes).toString());
                            // }
                            console.log('bytes', bytes)
                            fs.appendFile(`./target/${x}`, bf, function (err) {
                                // console.log(bytesRead)
                                if (err) throw err;
                                console.log('data written success~~')
                            });//
                        })//

                    }//
                    for (var bytesRead = 2 * fsize / 3; bytesRead < fsize; bytesRead = bytesRead + buf.length) {

                        fs.read(fd, buf, 0, buf.length, bytesRead, (err, bytes, bf) => {
                            if (err) throw err;
                            restfilesize += bytesRead
                            // if (restfilesize < fsize) {
                            // console.log("bytesRead :", bytesRead, "reading success~");
                            // console.log(fsize / 3)
                            // console.log(bytesRead)

                            // console.log("bf : ", fsize/buf.length)
                            // if (bytes > 0) console.log(buf.slice(0, bytes).toString());
                            // }
                            // console.log('bytes', bytes)
                            fs.appendFile(`./target/${x}`, bf, function (err) {
                                // console.log(bytesRead)
                                if (err) throw err;
                                console.log('data written success~~')
                            });//
                        })//
                    }//
                })//
            })//
        }
    })

})







//         fs.writeFile('./target', '', function (err) {
//             if (err) throw console.error(err);
//             console.log('data written success~~');
//             console.log('read new file');
//         })//end of write
//     }
// }
