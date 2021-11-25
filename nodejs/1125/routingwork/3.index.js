const express = require("express");
const app = express();

var port = 3000
var host = '127.0.0.1'

const routing = require('./2.router.js') // 파일의 exports import

app.use('/', routing);

app.listen(port, host, () => {
    console.log(`application running at http://${host}:${port}/`)
});

//check METHOD by cmd curl -X METHOD "http://localhost/dasdasdfsa"
// OR 
// POSTMAN