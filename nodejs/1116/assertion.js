var assert = require('assert');
// 잘못된 assert일 경우 뜨는 오류
// AssertionError [ERR_ASSERTION]: 
// The expression evaluated to a falsy value:
// assert( 5 > 7);
// 이 경우 뒤의 코드를 계속 실행하지 않은 채 중단하고 빠져나온다.

assert( 7 > 5);

