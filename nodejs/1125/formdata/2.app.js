const express = require('express')
const cookieParser = require("cookie-parser")

let app = express(); // == createServer


const port = 5000
const host = '127.0.0.1'

app.use(cookieParser());
app.set('view engine', 'pug');
app.set("views", './views');

app.get('/', (req, res) => {
    res.cookie('name', 'express').send('cookie set') //cookie name = express
    // res.cookie('name', 'express', { expires: 36000 + Date.now() }).send('cookie set') //cookie name = express
    console.log(req.cookies)
    // res.send('cookie is sent')
})

app.get('/clear', (req, res) => {
    res.clearCookie('name').send('cookie express cleared')
})

app.listen(port, host, () => {
    console.log(`application running at http://${host}:${port}/`)
});