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
        });
        resolve(fileArr);
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

        })
        resolve(fileList);
    });
}

function finished(x) {
    return new Promise((resolve) => {

        resolve(console.log(`\n${x} is finished`));
    });
}

// function compressTargetFiles() {
//     return new Promise((resolve) => {

//         fs.readdir("./target", (err, files) => {
//             if (err) throw err;

//             files.forEach((x) => {

//             })
//         })
//         var output = fs.createWriteStream('./target/target.tar.gz');
//         for (var file of fileList) {
//             archive.on('error', function (err) {
//                 throw err;
//             })
//             // pipe archive data to the output file
//             archive.pipe(output)
//             // append files
//             archive.file(`./src/${file}`, { name: `./src/${file}` });
//             console.log(x)

//         }
//         // Wait for streams to complete
//         archive.finalize()
//         console.log(fileList)
//         resolve(fileList)
//     })
// }

// async function fnAsync() {
    // await readDirnMakeTarget()
    // finished(await pipe())
    // await compressTargetFiles()
// }
// fnAsync();
readDirnMakeTarget()
pipe()


while (1) {
    var compressList =fs.readdirSync("./target")
    compressList.forEach((x) => {
        var output = fs.createWriteStream('./target/target.tar.gz');
        archive.on('error', function (err) {
            throw err;
        })
        // pipe archive data to the output file
        archive.pipe(output)
        // append files
        archive.file(`./target/${x}`, { name: `./target/${x}`});
        console.log(x)
    })
    // Wait for streams to complete
    archive.finalize()
    break
}




