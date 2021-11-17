// 마지막인자로 인코딩할 형식을 정해준다.
var buf = Buffer.from('Hello, and welcome to Hell');
var x = 'abc';

console.log(buf.toString('utf-8')); // Hello, and welcome to Hell
console.log(buf.toString('ascii')); // Hello, and welcome to Hell
console.log(buf.includes('welcome')); // true;
console.log(buf.includes('welcome1')); // false;

console.log("========================================")

console.log(buf.indexOf('welcome')); // 12;

console.log("========================================")

console.log(buf.indexOf('l')); // 2; 제일 처음 나온 인덱스.
console.log(buf.lastIndexOf('l')); // 25. 마지막 나온 l 인덱스


// buffer가 맞는가
console.log("========================================")
console.log(Buffer.isBuffer(buf)); // true;
console.log(Buffer.isBuffer(x)); // false;


// buffer의 encoding 상태
console.log("========================================")
console.log(Buffer.isEncoding('utf-8')); // true;
console.log(Buffer.isEncoding('ascii')); // true;
console.log(Buffer.isEncoding('utf/8')); // false;


console.log("========================================")
console.log("buf length is : " + buf.length); // buf length is : 26

console.log("========================================")
console.log(buf.toJSON()); // json 형태로 나옴.







