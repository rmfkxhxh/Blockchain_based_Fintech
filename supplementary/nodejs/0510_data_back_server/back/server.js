// const express = require('express');
// const app = express();
// const cors = require('cors')
// const cookieParser = require('cookie-parser')

// app.use(cors());
// app.use(cookieParser());

// app.get('/', (req, res) => {
//     res.send('hello world')
// });

// app.post('/getCookie', (req, res) => {
//     console.log(req.cookies)
//     res.header("Access-Control-Allow-Credentials", true)
//     res.cookie('hasVisited', '1', {
//         maxAge: 60 * 60 * 1000,
//         httpOnly: true,
//         path: '/'
//     });
//     // res.send('')
// })
// app.get('/getCookie', (req, res) => {
//     console.log(req.cookies)
//     res.header("Access-Control-Allow-Credentials", true)
//     res.cookie('hasVisited', '1', {
//         maxAge: 60 * 60 * 1000,
//         httpOnly: true,
//         path: '/'
//     });
//     res.send('getCookie')
// })

// app.listen(3500, () => {
//     console.log('서버 시작 http://localhost:3500/')
// });


const express = require("express");
const cors = require("cors");
const app = express();
// const cookieParser = require('cookie-parser')

app.use(express.urlencoded({ extended: true }))

app.use(express.json())


var safesitelist = ['http://127.0.0.1:3000', 'http://localhost:3000']

var corsOptions = {
    origin: function(origin, callback) {
        var issafesitelisted = safesitelist.indexOf(origin) !== -1;
        console.log(issafesitelisted)
        callback(null, issafesitelisted);
    },
    credentials: true
}
app.use(cors(corsOptions))

// app.use((req, res, next) => {    
//     res.cookie('asdasd','asdasds')
//     .send('hello')
//     console.log(req.cookies)
//     // console.log(req.cookie)
//     // console.log(res.cookie())
// })

app.get("/", (req, res) => {
    res.send("Hello Wolrd")
})

app.post("/getCookie", (req, res) => {
    res.cookie('asdasd','asdasds', {sameSite:"none", secure:true})
    res.send('data')
    // console.log(req.cookies)
    
})

app.listen(3500, () => {
    console.log("서버 시작")
})