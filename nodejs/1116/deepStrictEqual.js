

// assert는 기본 내장 모듈
var assert = require('assert');

var x = {a : {
    n:0}
};
// 오류가 안난다면 그냥 터미널 다음줄로 넘어감.
var y = {a: 
    {n: '0'}
};

assert.deepStrictEqual(x, y, "x not equal y !!!!");



