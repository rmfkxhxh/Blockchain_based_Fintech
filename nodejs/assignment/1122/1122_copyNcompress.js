const fs = require("fs")
const zlib = require("zlib")
const archiver = require('archiver');
const archive = archiver('tar', {
    gzip: true,
    zlib: { level: 9 } // Sets the compression level.
});

function readDirnMakeTarget() {
    return new Promise((resolve) => {
        var fileArr = []
        fs.readdir('./', (err, files) => {
            if (err) throw err;

            files.forEach((x) => {
                fileArr.push(x)
                // console.log('current directory files : ', x);
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
            resolve('readDirnMakeTarget: reading target dir finish');
        });

    });
}

function pipe() {
    return new Promise((resolve) => {
        var fileList = []
        fs.readdir("./src", (err, files) => {
            if (err) throw err;
            fileList.push(files)

            if (files.length <= 0) {
                console.log('src directory has no file');
            }
            if (files.length > 0) {


                files.forEach((x) => {


                    fs.createReadStream(`./src/${x}`)
                        .pipe(fs.createWriteStream(`./target/${x}`))



                })
            }
            resolve('pipe: copying file finsished');
        })

    });
}

function finished(x) {
    return new Promise((resolve) => {

        resolve(console.log(`\n${x} is finished`));
    });
}

function compressTargetFiles() {
    return new Promise((resolve) => {
        setTimeout(() => {


            var compressList = fs.readdirSync("./target")
            compressList.forEach((x) => {
                var output = fs.createWriteStream('./target/tageto.tar.gz');
                archive.on('error', function (err) {
                    // throw err;
                })
                // pipe archive data to the output file
                archive.pipe(output)
                // append files
                archive.file(`./target/${x}`, { name: `./target/${x}` });
                console.log(x)
            })

            // Wait for streams to complete
            archive.finalize()
            resolve('compress: compress file finsished');
        }, 500);
    })
}

async function fnAsync() {
    console.log('starting function 1')
    t = await readDirnMakeTarget()
    console.log(t)
    console.log('starting function 2')
    b = await pipe()
    console.log(b)
    console.log('starting function 3')
    c = await compressTargetFiles()
    console.log(c)
    console.log('function complete')
}
fnAsync();



