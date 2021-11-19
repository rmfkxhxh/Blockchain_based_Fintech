var assert = require('assert');

var x = {a: {n: 0}};
var y = {a: {n: 0}};
var z = {a: {n: 1}};
var g = {a: {n: 1}};

assert.deepEqual(x, y);
console.log('x,y true');
assert.deepEqual(x, z, "x랑 z랑 달라~~"); //에러발생
console.log('x,z false');
assert.deepEqual(g, z);
console.log('g,z true');

