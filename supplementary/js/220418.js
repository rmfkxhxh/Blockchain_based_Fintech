alert("start javascript!!!")

// 숫자형
/*
    10진수
    255
    179
    2 진수 255 - (0b 1111 1111), 
            128 64 32 16 8 4 2 1  
           179 - (0b 1011 0011),
    8 진수 0o000,
        64  8  1 
    255 - 0c377

    16진수 0x00,
        16 1,

*/

let ans = prompt("정답을 입력하세요.", 10);

// let randomNum = Math.random() * 10; //0.0 ~ 1.0 사이의 랜덤한 값(난수)

// console.log(Math.floor(randomNum));
// console.log(Math.ceil(randomNum));
// console.log(Math.round(randomNum));

/* 실습
   프로그램이 3 ~ 10 사이의 랜덤한 값을 지정한다.
   값을 하나 입력 받아서 정답인지 아닌지 출력한다.
*/

let randomNum = Math.round(Math.random() * 7 + 3);
console.log("rand : ", randomNum);
console.log("ans : ", ans);
if (ans == randomNum) {
    alert("정답입니다." + " rand : " + randomNum);
} else {
    alert("틀렷습니다." + " rand : " + randomNum);
}

// 변수명 이름 규칙
/*
    1. 알파벳, _, -, 숫자 (한글, 특수문자, 일본어 권장 X)
     1_1. 숫자가 제일 앞에 올 수 없다.
    2. camel 표기법 (구글도 권장)
     let myVeryLongName; 카멜
     let MyVeryLongName; 파스칼
    3. 대소문자 구분
     let myVeryLongName; 
     let MyVeryLongName;
     위 두 변수는 다르다.
    4. var let const
     
*/

console.log(varName); // hoisting/호이스팅 
// undefined
var varName = 0;

console.log(varName);
// 0

if (true) {
    var varName = 1;
}

console.log(varName);
// 1


let letName = 0;

console.log(letName);
// 0

if (true) {
    let letName = 1;
    console.log(letName);
    // 1
}

console.log(letName);
// 0


const constName = "rmfkxhxh";

console.log(constName);
// rmfkxhxh

constName = "jms"
// error
