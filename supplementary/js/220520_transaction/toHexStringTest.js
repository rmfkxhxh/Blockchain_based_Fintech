

const toHexString = (byteArray) => {
    // byte 값들을 문자열로 치환

    return Array.from(byteArray, (byte) => {
        let char =('0' + (byte & 0xFF).toString(16)).slice(-2)
        // console.log(char);
        return char
    }).join('')

    
    // return Array.from(byteArray, (byte) => {
    //     return ('0' + (byte & 0xFF).toString(16)).slice(-2)
    // }).join('');
}

console.log(toHexString([500000,3000000010]))
