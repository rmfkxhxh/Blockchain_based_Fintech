const express = require("express");
const app = express();

app.use(express.static('public'));
app.use(express.static('public/img'));
app.use(express.static('public/txtrc'));

app.get('/', (req, res) => {
    res.send("hello world");
    // res.send('./img/image1.jpg')
});

var server = app.listen(3000, () => {
    var host = server.address().address;
    var port = server.address().port;

    console.log('listening at http://%s:%s', host, port)
})
