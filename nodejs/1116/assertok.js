var assert = require('assert');

// ok 안의 0이거나 false면 오류를 뱉음. true면 아무반응없음.
// assert는 Boolean, ok는 0하고 falsy한 값을 체크.
assert.ok(70> 50, "result is false");
assert.ok(50 - 49);

// 응용 : 나의 수식이 0보다 커야 할때 쓸 수 있는 ok 함수.


















