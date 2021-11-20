const fs = require('fs')

fs.mkdir('./newfolder', (err) => { //"./newfolder/new windows doesn't work"
    if (err) throw err;
    console.log('create directory success~~')
})