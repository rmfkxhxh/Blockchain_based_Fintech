import express from 'express';
import jmt from 'jsonwebtoken';
const app = express();

app.use(express.json())
// const { userid, pwd } = req.body
app.post('/auth/token', (req, res) => {
    const { userid, userpwd } = req.body
    console.log(req.body)
    // db 요청해서 값있을때는 토큰반환, 없으면 x
    if (userid !== 'web7722' || userpwd !== 1234) {
        let result = { result: false, message: "아이디 패스워드가 맞지 않습니다" }
        return res.status(401).json(result)
    }
    const payload = {
        userid: 'web7722'
    }

    const secret = 'ingoo';

    const token = jmt.sign(payload, secret, {
        algorithm: 'HS256'
    })
    const result = { result: true, token, message: null }
    res.status(200).json(result)

    //eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyaWQiOiJ3ZWI3NzcyMiIsImlhdCI6MTY1MzAzMzEwOH0.JsU7RlPKxisxKOjNUUQUVSzOUwAW46nZFyGkCy1B4kU
})
app.post('/auth/verify', (req, res) => {
    const { token } = req.body
    const salt = 'ingoo'
    let response = { result: false, data: null, msg: null }
    try {
        const result = jmt.verify(token, salt) //1.token, 2.salt
        //result = payload 복호화한 내용
        console.log(result)
        response.result = true;
        response.data = result
        res.status(200).json(response)

    } catch (e) {
        response.msg = 'token invalid'
        res.status(401).json(response)
    }
})

// post : http://localhost:3500/user/me/web7722
// get : http://localhost:3500/user/me?userid=web7722
// url 깔끔하게 하기 위해서 post사용

// http://localhost:3500/board/view/2

app.post('/user/me/:userid', (req, res) => {
    const { userid } = req.params
    // todo 검증
    const response = {
        userid,
        name:'ingoo'
    }
    res.status(200).json(response)
})



app.listen(3500, () => {
    console.log('http://localhost:3500')
})