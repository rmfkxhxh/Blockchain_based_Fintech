var buf = Buffer.from('abcd')

for(x of buf.entries()) {
    console.log(x) //10진수
}

console.log('-----------------------------------------')

for(x of buf.keys()) {
    console.log(x) //키값
}
console.log('-----------------------------------------')

for(x of buf.values()) {
    console.log(x) //벨류값
}
console.log(buf)
