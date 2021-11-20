const fs = require("fs");

fs.readdir('./newfolder/hellodir', (err, files) => {
    if (err) throw err;

    files.forEach((x) => {
        fileType = x.split('.')
        console.log('files type: ', x.split('.'));

        if (fileType[1] == 'txt' || fileType[1] == 'html') {
            fs.unlink(`./newfolder/hellodir/${x}`, (err) => {
                if (err) return console.log(err)
                console.log(x, 'file deleted successfully')
            })      
        }
    })

    console.log("removing directory");
    fs.rmdir("./newfolder/hellodir/", (err) => {
        if (err) throw err;

        console.log('directory remove success~~')
    })
})
