const fs = require('fs');
const events = require("events");
const eventEmitter = new events.EventEmitter(); //모듈속 class이기 때문에


function chknMakeTargetDir() {
    console.log('reading current directory')
    fs.readdir('./', (err, files) => {
        if (err) throw err;
        var fileArr = []
        files.forEach((x) => {
            fileArr += x
            console.log('current directory files : ', x);
        });
        if (fileArr.includes('target') == 0) {
            fs.mkdir('./target', (err) => {
                if (err) throw err;
                console.log("created target directory")
            })
        }
        else {
            console.log("target directory already exists")
        };
    });
}

function getFilenSize() {
    fs.readdir("./src", (err, files) => {
        if (err) throw err;

        if (files.length <= 0) {
            console.log('src directory has no file');
        }
        if (files.length > 0) {
            files.forEach((x) => {
                console.log('src directory files : ', x);
                if (x == "metallica_seattle.mp4") {
                    // if (x == "input.txt") {
                    fs.stat(`./src/${x}`, (err, stats) => {
                        if (err) throw err;

                        var fsize = stats.size;
                        console.log('filesize : ', fsize);
                        srcFileDir = `./src/${x}`
                        return fsize, srcFileDir
                    })
                }
            })
        }
    })
}
var buf = Buffer.alloc(500000);
var pos = 0 
var restfilesize = 0

eventEmitter.on('openSrcFile', () => {
    var fsize, srcFileDir = getFilenSize()
    restfilesize = fsize
    console.log("restfilesize : ", restfilesize)
    fs.open(srcFileDir, 'r+', (err, fd) => {
        if (err) throw err;
        
        eventEmitter.emit("readsrcFile", fd, buf, pos, restfilesize)
})

eventEmitter.on("readsrcFile", (fd, buf, pos, restfilesize) => {


bytesRead = fs.readSync(fd, buf, 0, buf.length, pos);
})
eventEmiiter.on("writeFile", (fd, restfilesize) => {
    if (restfilesize > buf.length) {

})

//     eventEmitter.emit("data_received");
// };

// eventEmitter.on("connection", connectHandler);

// eventEmitter.on("data_received", ()=> {
//     console.log("data recieved success~~");
// });

// eventEmitter.emit("connection");

// console.log("Program finished~~~");







// var buf = Buffer.alloc(4096000);
// var restfilesize = 0;
// var pos = 0;



//                     var srcFile = fs.openSync(`./src/${x}`, 'r');
//                     console.log(`src ${x} open success~~`);
//                     console.log("reading file~");
//                     var targetFile = fs.openSync(`./target/${x}`, 'a')
//                     console.log(`target ${x} open success~~`);

//                     while (restfilesize > 0) {
//                         var bytesRead = fs.readSync(srcFile, buf, 0, buf.length, pos);
//                         if (restfilesize > buf.length) {
//                             fs.writeSync(targetFile, buf, 0, buf.length);
//                             pos += bytesRead
//                             restfilesize -= bytesRead
//                         }
//                         else {
//                             fs.writeSync(targetFile, buf, 0, bytesRead);
//                             pos += bytesRead
//                             restfilesize -= bytesRead;

//                             if (restfilesize == 0) {
//                                 fs.close(srcFile);
//                                 fs.close(targetFile);
//                                 console.log('\nfiles closed~~~~~')
//                                 // console.log(`restfilesize=${restfilesize}~~`, fsize - pos);
//                                 break;
//                             }
//                             else {
//                                 console.log('\nfiles not closed..')
//                                 console.log(`restfilesize=${restfilesize}~~`, fsize - pos);
//                                 // console.log('\nfiles not closed..')
//                             }
//                         }
//                         var star = '='.repeat(40 * (pos / fsize))
//                         var empty = ' '.repeat(40 - (40 * (pos / fsize)))
//                         var percent = Math.floor((fsize - restfilesize) / fsize * 100)
//                         process.stdout.write(`\r[${star}${empty}] ${percent}%`)
//                     }
//                 })
//             }
//             else {
//                 console("src file not found")
//             }
//             return false
//         })
//     }
// })
