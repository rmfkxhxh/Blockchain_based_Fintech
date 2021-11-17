var buf1 = Buffer.from('abcdefghiklmnopqrstu');
var buf2 = Buffer.from("helloworld");

// buf2.copy(buf1, 2); // // abhelloworldnopqrstu
// buf2.copy(buf1, 2, 0, 5); // abhellohiklmnopqrstu . buf1[2]부터 buf2의 0번째부터 5바이트만큼.
// console.log(buf1);
// console.log(buf1.toString());

buf1.write('hello world', 2);
console.log(buf1.toString()); //abhello worldopqrstu


