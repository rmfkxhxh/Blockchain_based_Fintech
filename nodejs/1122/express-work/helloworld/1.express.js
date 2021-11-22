const express = require("express");
const app = express()

app.get("/", (req, res) => {
    res.end('hello world');
});

app.get("/hellodir", (req, res) => {
    res.end('hello dir');
});

var server = app.listen(3000, () => {
    var host = server.address().address;
    var port = server.address().port;

    console.log("server listening at http://%s:%s", host, port)
})