const express = require('express');
const app = express();
const cors = require('cors')
const cookieParser = require('cookie-parser')

app.use(cors());
app.use(cookieParser());

app.get('/', (req, res) => {
    res.send('hello world')
});

app.post('/getCookie', (req, res) => {
    console.log(req.cookies)
    res.header("Access-Control-Allow-Credentials", true)
    res.cookie('hasVisited', '1', {
        maxAge: 60 * 60 * 1000,
        httpOnly: true,
        path: '/'
    });
    // res.send('')
})
app.get('/getCookie', (req, res) => {
    console.log(req.cookies)
    res.header("Access-Control-Allow-Credentials", true)
    res.cookie('hasVisited', '1', {
        maxAge: 60 * 60 * 1000,
        httpOnly: true,
        path: '/'
    });
    res.send('getCookie')
})

app.listen(3500, () => {
    console.log('서버 시작 http://localhost:3500/')
});


// const express = require("express");
// const cors = require("cors");
// const app = express();
// const cookieParser = require('cookie-parser')

// app.use(cookieParser())
// app.use(cors({
//     origin: true,  
//     credentials: true, 
// })); 

// app.use((req, res, next) => {    
// res.setHeader("Set-Cookie", "name=JungHyun; httpOnly=true;path=/")
// .send("hello setCookie")
// })

// app.get("/", (req, res) => {
//     res.send("Hello Wolrd")
// })

// app.get("/setCookie", (req, res) => {

// })

// app.post("/getCookie", (req, res) => {
//     res.send(req.cookies)
    
// })

// app.listen(3500, () => {
//     console.log("서버 시작")
// })