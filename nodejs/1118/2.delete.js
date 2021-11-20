const fs = require('fs');

console.log('delete a delete.txt file')
fs.unlink('delete.txt', (err) => { //web program이라서 unlink = remove
    if (err) return console.log(err)

    console.log('file deleted successfully')
})