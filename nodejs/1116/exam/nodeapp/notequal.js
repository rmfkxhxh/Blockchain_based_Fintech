var assert = require('assert');

assert.notEqual(50, "55"); 
console.log('check\n\n_________________')
assert.notEqual(50, 50, '같아요'); //err
// assert.notEqual(50, "50"); //err

