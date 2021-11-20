var fs= require("fs")
var srcstat
var targetstat

console.log('going to get file info!!!')
fs.stat('./src/metallica_seattle.mp4', function(err, stats) {
    if (err) {
        return console.error(err);
        }
        srcstat = stats
    console.log(stats);
    console.log('got file info successfully!!');
})
console.log('going to get file info!!!')
fs.stat('./target/metallica_seattle.mp4', function(err, stats) {
    if (err) {
        return console.error(err);
        }
    console.log(stats);
    targetstat = stats
    console.log('got file info successfully!!');
})

console.log('targetstat', targetstat)
// console.log('going to get file info!!!')
// fs.stat('./src/input.txt', function(err, stats) {
//     if (err) {
//         return console.error(err);
//         }
//         srcstat = stats
//     console.log(stats);
//     console.log('got file info successfully!!');
// })
// console.log('going to get file info!!!')
// fs.stat('./target/input.txt', function(err, stats) {
//     if (err) {
//         return console.error(err);
//         }
//     console.log(stats);
//     targetstat = stats
//     console.log('got file info successfully!!');
// })

// console.log('targetstat', targetstat)