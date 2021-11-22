const fs = require("fs")
const zlib = require("zlib")
const archiver = require('archiver');
const archive = archiver('tar', {
    gzip: true,
    zlib: { level: 9 } // Sets the compression level.
});








function readDirnMakeTarget() {
    return new Promise((resolve) => {
        fs.readdir('./', (err, files) => {
            if (err) throw err;
            var fileArr = []
            files.forEach((x) => {
                fileArr += x
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
        });
        resolve();
    });
}

function pipe() {
    return new Promise((resolve) => {
        fs.readdir("./src", (err, files) => {
            if (err) throw err;

            if (files.length <= 0) {
                console.log('src directory has no file');
            }
            if (files.length > 0) {


                files.forEach((x) => {


                    fs.createReadStream(`./src/${x}`)
                        .pipe(fs.createWriteStream(`./target/${x}`))


                    resolve(x);
                })
            }

        })

    });
}

function finished(x) {
    return new Promise((resolve) => {
        console.log(`\n${x} is finished`);
        resolve();
    });
}

function compressTargetFiles() {
    return new Promise((resolve) => {
        fs.readdir("./target", (err, files) => {
            if (err) throw err;
            var output = fs.createWriteStream('./target/target.tar.gz');
            files.forEach((x) => {

                archive.on('error', function (err) {
                    throw err;
                });
                // pipe archive data to the output file
                archive.pipe(output);

                // append files
                archive.file(`./src/${x}`, { name: `./src/${x}` });

                // Wait for streams to complete
                archive.finalize();
            })
        })
        resolve();
    });
}

async function fnAsync() {
    // readDirnMakeTarget().then(pipe()).then(compressTargetFiles)
    finished(await readDirnMakeTarget
        (await pipe(
            await compressTargetFiles())))
}

fnAsync();