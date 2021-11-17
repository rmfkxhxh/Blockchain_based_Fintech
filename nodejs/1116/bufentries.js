var buf = Buffer.from('abcd');

for(x of buf.entries()){
    console.log(x); // entries를 이용하면 인덱스와 값을 모두 빼옴.
    // https://shaeod.tistory.com/228 아스키코드 참고한 결과가 나온다.
}

console.log("========================================")

for(x of buf.keys()){ // key 값만 가져올 수 있다.
    console.log(x);
}


console.log("========================================")
for(x of buf.values()){ // 밸류값만 가져올 수 있다.
    console.log(x);
}


