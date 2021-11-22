const express = require("express")
const app = express()

//this reponds with "hello world" on the homepage
app.get('/', (req, res) => {
    console.log("got a get request for the homepage");
    res.send("Hello Get");
});

//this responds a delete request for the homepage
app.post('/del_user', (req, res) => {
    console.log("got a post request for the hompeage");
    res.send("Hello post");
});

//this reponds a delete request for the /del_user page
app.delete("/del_user", (req, res) => {
    console.log("got a delete request for /del_user");
    res.send("Hello delete");
});

//this responds a get request for the /list_user page
app.get('/list_user', (req, res) => {
    console.log("got a get request for /list_user");
    res.send("page listing");
});

//this reponds a get request for abcd, abxcd, ab123cd, and so on
app.get('/ab*cd', (req, res) => {
    console.log("got a get request for /ab*cd");
    res.send('page pattern match')
});

var server = app.listen(3000, () => {
    var host = server.address().address;
    var port = server.address().port;

    console.log("server listening at http://%s:%s", host, port)
})