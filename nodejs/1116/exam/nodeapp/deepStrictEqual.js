var assert = require('assert');
//===
var x = {a: 
    {n: 0}
};
var y = {a: 
    {n: '0'}
};

assert.deepStrictEqual(x, y, 'x랑 y가 달라요~~')