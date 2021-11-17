var assert = require('assert');

// == 를 메소드화시켜놓았다고 보면 됨
assert.equal(50, 50); // OK
assert.equal(50, "50"); // OK
assert.equal(50, 70, "Each number is not equal!!"); // error

assert.equal(undefined, undefined); // ok


