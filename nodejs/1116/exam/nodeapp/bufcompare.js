var buf1 = Buffer.from('abc');
var buf2 = Buffer.from('acd');
var x  = Buffer.compare(buf2, buf1);
console.log(x) // equal 0 왼쪽이 크면 1 오른쪽이 크면 -1

// ======================================================

var buf1 = Buffer.from('bsadas');
var buf2 = Buffer.from('c');
var buf3 = Buffer.from('a');
var arr = [buf1, buf2, buf3];

console.log(arr);
console.log("====================");
console.log(arr.sort(Buffer.compare));
console.log(toString(buf1))
