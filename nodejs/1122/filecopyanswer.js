const fs = require("fs");
var buf = Buffer.alloc(20480);

var pos = 0;
var remainSize = 0;
var srcFileName = '';
var targetFileName = '';

fs.readdir("./source", (err, files) => {
    if (err) throw err;

    files.forEach((file) => {
        if ("merallica_seattle.mp4" == file) {
            srcFileName = "./source/" + file;
            targetFileName = "./target/" + file;
            fs.stat(srcFileName, (err, stats) => {
                if (err) throw err;

                remainSize = stats.size;
                console.log("fileName = " + srcFileName + ", remainSize" + remainSize);

                var rfd = fs.openSync(srcFileName, 'r');
                var wfd = fs.openSync(targetFileName, 'a');

                var readBytes = 0;
                while (remainSize > 0) {
                    readBytes = fs.readSync(rfd, buf, 0, buf.length, pos);
                    if (remainSize > buf.length) { //buf 변수의 주소값을 넘겨줌으로 call by reference
                        fs.writeSync(wdf, buf, 0, buf.length);
                        pos += readBytes;
                        remainSize -= readBytes;
                    }
                    else {
                        fs.writeSync(wfd, buf, 0, readBytes);
                        fs.closeSync(rfd);
                        fs.closeSync(wfd);
                        break;
                    }
                }

            })
            return false
        }
        
    })
})
