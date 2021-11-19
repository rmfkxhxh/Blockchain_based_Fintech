const fs = require('fs');
var buf = Buffer.alloc(100);
var restfilesize = 0;
var pos = 0;
var savCount = 0;

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
        // if (x == "metallica_seattle.mp4") {
        if (x == "input.txt") {
            fs.stat(`./src/${x}`, (err, stats) => {
                if (err) throw err;
                var fsize = stats.size;
                console.log('filesize : ', fsize);
                restfilesize = fsize;

                fs.open(`./src/${x}`, 'r+', (err, fd) => {
                    if (err) throw err;

                    console.log(`${x} open success~~`)

                    console.log("reading file~")

                    while (restfilesize > 0) {

                        if (savCount == 0) {
                            console.log('savecount = 0', pos)
                            savCount += 1
                            fs.read(fd, buf, 0, buf.length, pos, (err, bytes, bf) => {
                                if (err) throw err;
                                
                                fs.writeFile(`./target/${x}`, buf, function (err) {
                                    if (err) throw err;
                                    console.log(`data written ${savCount} times`)
                                    console.log('savecount', savCount, pos)
                                })
                                console.log('savecount', savCount)
                            })
                            pos += buf.length
                            restfilesize -= buf.length;
                            
                            // console.log('pos', pos, restfilesize)
                        }
                        if (restfilesize > buf.length) {
                            console.log('restfilesize > buf.length', pos)
                            savCount += 1
                            // console.log(pos, restfilesize)
                            fs.read(fd, buf, 0, buf.length, pos, (err, bytes, bf) => {
                                if (err) throw err;
                                // console.log('bytes', bytes)
                                fs.appendFile(`./target/${x}`, buf, function (err) {
                                    // console.log(bytesRead)
                                    if (err) throw err;

                                    // console.log('restfilesize : ', restfilesize)
                                    // console.log(`data written ${savCount} times`)
                                });//
                            })
                            pos += buf.length
                            restfilesize -= buf.length;
                            // console.log('pos2', pos, restfilesize)
                            // break;
                        }
                        if (restfilesize < buf.length) {
                            console.log('else')
                            savCount += 1
                            var buflast = Buffer.alloc(restfilesize)
                            // console.log('length', buflast.length)
                            fs.read(fd, buflast, 0, buflast.length, pos, (err, bytes, bf) => {
                                if (err) throw err;
                                // console.log(buflast)
                                fs.appendFile(`./target/${x}`, buflast, function (err) {
                                    // console.log(bytesRead)
                                    if (err) throw err;
                                    
                                    // console.log(`data written ${savCount} times`)
                                })
                                
                            })
                            pos += buflast.length
                            restfilesize -= buflast.length;
                            console.log(pos, restfilesize)
                            if (restfilesize == 0) {
                                fs.close(fd, (err) => {
                                    if (err) return console.error(err)
                                    console.log('file closed~~~~~', fsize - pos)
                                })
                                break;
                            }
                        }
                    }
                })
            })//
        }
    })//
})







//         fs.writeFile('./target', '', function (err) {
//             if (err) throw console.error(err);
//             console.log('data written success~~');
//             console.log('read new file');
//         })//end of write
//     }
// }
