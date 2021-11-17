var buf1 = Buffer.from('abc');
var buf2 = Buffer.from('abc');
var x = Buffer.compare(buf1, buf2); // 같으면 0을 도출함.

console.log(x);

// // // // // // 



var buf1 = Buffer.from('b');
var buf2 = Buffer.from('c');
var buf3 = Buffer.from('a');
array = [buf1, buf2, buf3]
var x = Buffer.compare(buf1, buf2, buf3);

console.log(array);
console.log('===========================================')
console.log(array.sort(Buffer.compare))

var x = Buffer.compare(buf2, buf1);
console.log(x);








