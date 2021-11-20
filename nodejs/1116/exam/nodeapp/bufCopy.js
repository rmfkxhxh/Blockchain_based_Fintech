var buf1 = Buffer.from('asdfdsfdsfsdfsdfsdfsdbv');
var buf2 = Buffer.from('Helloworld');

// buf2.copy(buf1, 2); //2번째부터
// console.log(buf1.toString());

buf2.copy(buf1, 2, 0, 5) //0번째부터 5바이트
console.log(buf1.toString());

buf1.write('hello world', 2);
console.log(buf1.toString())
