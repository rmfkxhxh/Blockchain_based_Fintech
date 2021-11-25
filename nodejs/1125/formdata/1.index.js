const express = require('express')
const bodyParser = require('body-parser')
const multer = require("multer")

let upload = multer();
let app = express(); // == createServer

const port = 3000
const host = '127.0.0.1'

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
//true qs모듈 사용 - query string 
//false 내장 qs
app.set('view engine', 'pug');
app.set("views", './views');
app.use(upload.array());

app.get('/', (req, res) => {
    res.render('1form');
})

app.post('/', (req, res) => {
    console.log(req.body)
    res.render("received post request");
})

app.listen(port, host, () => {
    console.log(`application running at http://${host}:${port}/`)
});

