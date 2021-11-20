var buf = Buffer.from('Hello, and welcome to hell~~안녕');
var x = 'abc'


console.log(buf.toString('ascii'));
var k = buf.toJSON()

console.log(k.data);

console.log(buf.includes('welcome and'));
console.log('=================================================');
console.log(buf.indexOf('welcome to'))
console.log(buf.indexOf('l')) //제일첫번째
console.log('last: ',buf.lastIndexOf('l')) //마지막

console.log(Buffer.isBuffer(buf));
console.log(Buffer.isBuffer(x));
console.log(Buffer.isEncoding('ascii'))
console.log('=================================================');
console.log('buflength: ', buf.length)



// ascii
// utf-8
// utf16le
// ucs2
// base64
