import express from 'express';
import cors from 'cors';
import nunjucks from 'nunjucks';
import axios from 'axios';
import qs from 'qs'; // {a:'asd', b:'asasdd'}
import { query } from 'express';

const app = express();
/*
REST API 키 : 83cb2256df0ae85571ab4ebea4a2a739
redirectURL : http://localhost:3005/auth/kakao
보안 secret key : tJUUNmO9dZCtS3tGyyP80YbHQ4Hc7OQG
*/
const clientId = '83cb2256df0ae85571ab4ebea4a2a739';
const redirectURL = 'http://localhost:3005/auth/kakao'
const client_secret = 'tJUUNmO9dZCtS3tGyyP80YbHQ4Hc7OQG'
const host = 'https://kauth.kakao.com'

app.use(cors());

app.set('view engine', 'html')
nunjucks.configure('views', {
    express: app,
})

app.get('/', (req, res) => {
    res.render('index')
})

app.get('/kakao/login', (req, res) => {
    const redirectUrl = `${host}/oauth/authorize?client_id=${clientId}&redirect_uri=${redirectURL}&response_type=code`
    res.redirect(redirectUrl)
})

app.get('/auth/kakao', async (req, res) => {
    const { query: { code } } = req

    // axios 
    // 1. url , 2. body (data), 3. header(option)
    const body = qs.stringify({
        grant_type: 'authorization_code',
        client_id: clientId,
        redirect_uri: redirectURL,
        code, // === code:${code}
        client_secret, // === client_secret:${client_secret}
    })
    const headers = { 'Content-Type': 'application/x-www-form-urlencoded; charset=utf8' };
    let response;
    try {
        response = await axios.post(`${host}/oauth/token`, body, headers)
        if (response) {
            console.log(response.data)
            const { access_token } = response.data
            const url = 'https://kapi.kakao.com/v2/user/me'
            const userInfo = await axios.post(url, null, {
                headers: {
                    "Authorization" : `Bearer ${access_token}`,
                    "Content-Type": "application/x-www-form-urlencoded; charset=utf-8",
                }
            })
            console.log(userInfo.data)
        }
        
    } catch (e) {
        console.log(e)
    }

    res.send('login 완료')
})


// const auth2 = (str, req, res, next) => {
//     if (req.headers.authorization) {
//         // authorization: 'Basic d2ViNzc3OmFzZA==' .split('Basic') ['', 'd2ViNzc3OmFzZA==']
//         const data = req.headers.authorization.split("Basic")[1].trim();
//         console.log(Buffer.from(data, 'base64').toString('utf-8'))
//     }
//     // Basic 은 url에 id pwd 노출돼서 token 사용
//     // jwt같은..
//     // Bearer [JWT]
//     next();
// }
// app.use((req, res, next) => {
//     auth2('hello', req, res, next)
// })

// const auth = (req, res) => {
//     res.send('hello world from auth')
// }
// app.get('/', auth)



app.listen(3005, () => {
    console.log('http://localhost:3005')
})

/*
    url 체계에서 URL auth
    host
    protocol + auth + hostname + port
    http://web777:123@localhost:3005
            id : pw @ hostname



    http request message
    authorization < header 내용추가

*/