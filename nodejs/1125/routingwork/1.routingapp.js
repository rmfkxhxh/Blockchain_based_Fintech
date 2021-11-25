const express = require('express')
const app = express(); // == createServer
var port = 3000
var host = '127.0.0.1'

app.get('/hello', (req, res) => {
    res.send("Hello World~~");
});

app.post('/hello', (req, res) => {
    res.send("you just called the post method at '/hello'")
});

app.listen(port, host, () => {
    console.log(`application running at http://${host}:${port}/`)
});