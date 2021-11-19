const fs = require("fs");

console.log("removing directory");
fs.rmdir("./newfolder/hellodir/", (err) => {
    if (err) throw err;

    console.log('directory remove success~~')

    fs.readdir('./newfolder/', (err, files) => {
        if (err) throw err;

        files.forEach((x) => {
            console.log(x);
        })
    })
})
