var buf1 = Buffer.from('b');
var buf2 = Buffer.from('c');
var buf3 = Buffer.from('a');
array = [buf1, buf2, buf3]

var buf = Buffer.concat(array);
console.log(buf)









