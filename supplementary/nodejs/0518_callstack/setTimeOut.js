// 1. 함수 콜백
// 2. 시간

// 변수는 heap에 들어감
// block scope 별 heap 관리는?
console.log('1')
function callback() {
    console.log('hello')
}
setTimeout(callback, 1000)
console.log('3')
