var buf = Buffer.alloc(20);
// var bufLen = Buffer.byteLength(buf);
var bufLen = Buffer.byteLength('buffer'); // buffer는 6글자, 6바이트이기에 숫자 6이 출력된다.
console.log(bufLen);