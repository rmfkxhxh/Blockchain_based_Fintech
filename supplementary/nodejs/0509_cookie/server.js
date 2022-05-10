/*
    쿠키와
    (req,res,next)
*/

const express = require('express')
const app = express()

app.use((req, res, next) => {
    console.log('쿠키를 찾아볼까')


    // console.log(cookie)
    //name=ingoo; name2=minsoo
    /*
        {
            name:ingoo,
            name2:ingoo
        }
    */

    // 배열을 객체로 변환할때는 reduce를 사용, 데이터타입을 변환할때만
    const { cookie } = req.headers
    console.log(cookie)
    if (cookie) {
        const cookies = cookie
            .split(';')
            .map(v => v.trim().split('='))
            .reduce((acc, val) => {
                acc[val[0]] = val[1]
                return acc
            },{})
        req.cookie = cookies;
    }



    // const cookies = cookie.split(';')
    // const newArr = [];
    // for (let i=0; i < cookies.length; i++) {
    //     console.log(cookies[i].trim()) // Datatype : string
    //     // string.trim() 빈 스페이스 제거
    //     newArr.push(cookies[i].trim())
    // }


    // req.cookie = req.headers.cookie.split('=')[1];
    next();
})

app.get('/', (req, res) => {
    console.log(req.cookie)
    // cookie=asdf&aaa=11234
    // string parsing

    //forEach map filter some reduce
    // let a = 1;
    // console.log(req.cookie);
    res.send('hello world~~')
})

app.get('/cookie', (req, res) => {
    // console.log(a)
    res.send('hello cookie~~')
})

app.get('/setCookie', (req, res) => {
    // const date = new Date()
    const time = 30;
    res
        .setHeader('Set-Cookie', 'name=ingoo; httpOnly=true; max-age='+time+'; path=/')
        // .setHeader('Set-Cookie', 'name3=ingoo, httpOnly=true, path=/')
        // .setHeader('Set-Cookie', 'name=minsoo; httpOnly=true; path=/')
        .send("hello setCookie")

    /*
        http 통신프로토콜에서
        set-cookie에대한 문법이 따로 있음,
        지켜준다면 httponly로 작성가능
    */

    /*
        로그인을 햇는데, 5분뒤에 로그인 해제,
        5분뒤에 쿠키가 사라지면됨

        Max-age : 시간
        Expires : 기간
    */
})

app.listen(3000, () => {
    console.log(`server start http://localhost:3000`)
})

