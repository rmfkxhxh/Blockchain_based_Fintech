var assert = require('assert');

var x = {a: {n: 0}};
var y = {a: {n: 0}};
var z = {a: {n: 1}};
var zz = {a: {n: 1}};


// .deepEqual()객체간 동등 여부를 체크
assert.deepEqual(x, y);
console.log("Hello World");
// 에러메세지 작성
assert.deepEqual(x, z, "x not equal z !!!");
console.log("Hello Node");







