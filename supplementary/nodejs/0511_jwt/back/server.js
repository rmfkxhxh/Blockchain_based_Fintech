const express = require('express');
const app = express();
const cors = require('cors');
const { createToken } = require('./utils/jwt');



app.use(express.urlencoded({ extended: true }))

app.use(express.json())

app.use(cors({
    origin: true,
    credentials: true
}))

app.get('/', (req, res) => {
    // console.log(req.body)
    res.send('서버 테스트')
})

app.post('/user/login', (req, res) => {
    const { userid, userpw } = req.body
    // console.log(userid, userpw)
    const response = {
        response:null,
        error:null,
    }
    if (userid === 'admin' && userpw === 'admin') {
        //쿠키생성
            //payload에 뭘넣을까
           const token =  createToken({userid})
           res.cookie('token', token)

           //response
           response.response = { userid }

    } else {
        // 실패시 response
        response.error = '아이디와 패스워드를 확인해주세여'
        
    }
    // console.log(req.cookies)
    res.json(response)
})

app.post('/user/logout', (req, res) => {
    res.send('로그아웃 테스트')
}
)
app.listen(3500, () => {
    console.log('서버 시작 http://localhost:3500')
})
