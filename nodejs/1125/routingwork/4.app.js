const express = require("express");
const app = express()
const host = '127.0.0.1' //localhost
const port = 3000

app.get('/:id', (req, res) => {
    res.send("The id is : " + req.params.id);
});
app.get('/hello/:name/:id', (req, res) => {
    res.send("id : " + req.params.id + '<br>' + 'name : ' + req.params.name);
});
app.get('/helloworld/:id([0-9]{5})/:name([A-z]{5})', (req, res) => { //5자리 숫자만 받는 정규표현식 , 5자리 알파벳만 받는 정규표현식
    res.send("id : " + req.params.id + '<br>' + 'name : ' + req.params.name);
});

app.listen(port, host, () => {
    console.log(`application running at http://${host}:${port}/`)
});
