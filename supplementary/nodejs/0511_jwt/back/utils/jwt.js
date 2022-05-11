// const crypto = require('crypto-js')
const crypto = require('crypto')


const header = {
    "alg": "HS256",
    "typ": "JWT"
}

const payload = {
    // "userId": "web777",
    // "job": null,
    "sub": "1234567890",
    "name": "John Doe",
    "iat": 1516239022
}

// base64
// console.log(Buffer.from(JSON.stringify(header))) //16진수 -> 64진수

// Buffer.from(JSON.stringify(header).toString('base64').replace('==', '').replace('=', '')) // ASCII ->
// -> 
const encodingHeader = Buffer.from(JSON.stringify(header))
                             .toString('base64')
                             .replace("==", "")
                             .replace('=', '')

// console.log("enc header: ",encodingHeader) //eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9

const decodingHeader = JSON.parse(Buffer.from(encodingHeader, "base64").toString())
// console.log(decodingHeader) //{"alg":"HS256","typ":"JWT"}
// bit - =

const encodingPayload = Buffer.from(JSON.stringify(payload))
                              .toString('base64')
                              .replace("==", '')
                              .replace("=", "")
// console.log("enc payload: ",encodingPayload) //eyJ1c2VySWQiOiJ3ZWI3NzciLCJqb2IiOm51bGwsInN1YiI6IjEyMzQ1Njc4OTAiLCJuYW1lIjoiSm9obiBEb2UiLCJpYXQiOjE1MTYyMzkwMjJ9

// 단반향 암호화를 진행함 우리가 잘아는 SHA-256
// const signature = crypto.SHA256(`${encodingHeader}.${encodingPayload}`).toString() //해쉬값 -> base64
// const signature = crypto.HmacSHA256(encodingHeader + "." +encodingPayload, "SASDasdas@#!@#12312321ASDsadsfewfe wwqdasd123~!@#@$!@#@@#sfsadasdsad" ).toString() //해쉬값 -> base64
const salt = 'ingoo'
const signature = crypto.createHmac('sha256', salt)
                        .update(`${encodingHeader}.${encodingPayload}`)
                        .digest('base64')
                        .replace(/[=]/g, '')
// console.log('signature :', signature)


const encodingSignature = Buffer.from(signature).toString('base64').replace('==', '').replace('=', '')
// console.log(signature) //3db08112e18edf555403245f67b5d099ebefa2c0ae0b41b9c32f2a89997a3b88
// console.log("enc signature: ", encodingSignature) //MTI2ODM3MDdkY2I3OTQyNmM5ZTFkMGNhZmM2ZDM3YzJmZWRiMDc1NTQzZWQxZjFjOTE0MGU3ZjZjNjhlN2YxMg

// console.log(`result : ${encodingHeader}.${encodingPayload}.${encodingSignature}`)
// HMACSHA256(encodingHeader + "." +encodingPayload,"mysecret" )

const encoding = (value) => {
    return Buffer.from( JSON.stringify(value))
                 .toString('base64')
                 .replace(/[=]/g,'')
}
const createToken = (state) => {
    const salt = 'ingoo'
    const header = { "alg": "HS256", "typ": "JWT" }
    const payload = { ...state }

    // console.log(header, payload)
    const encodingHeader = encoding(header);
    const encodingPayload = encoding(payload);
    const encodingSignature = crypto.createHmac('sha256', salt)
                                    .update(`${encodingHeader}.${encodingPayload}`)
                                    .digest('base64')
                                    .replace(/[=]/g,'')
    const result = `${encodingHeader}.${encodingPayload}.${encodingSignature}`
    // console.log(result)
    return result
}

module.exports = { createToken }

// createToken({ name: 'ingoo'})
// createToken({ name: 'web7722'})
// createToken({ userid: 'web7722'})

/*
    1. JWT 토큰을 만드는것을 직접 구현
    2. 로그인 로직 이해하기
        2-1. 로그인 화면이 필요, back front(react, nunjucks)
            2-1-1. 리액트 디렉토리를 만들어야함,
            2-1-2. 로그인 화면 완료
            2-1-3. 로그인 submit시 요청 코드 만들기
            
        2-2. Back 서버에 내용을 전달 (post body(userid, userpwd)) 요청
        2-3. Back 에서 body(userid, userpwd) 읽고, back 콘솔 확인;
        2-4. Back 에서 userid, userpw에 대한 (DB조회대신) admin/admin 
        2-5. DB조회 결과에 따른 로직
            2-5-1. 조회가 안되었을때
                쿠키를 생성하지 않고, 브라우저에게 오류전달
            2-5-2. 조회가 되었을때
                쿠키를 생성해서, 브라우저에게 전달

        3. API 
            back 3500
            front 3000

            POST /user/login {userid, userpw} : cookie 생성
            POST /user/logout {} : cookie 삭제


*/