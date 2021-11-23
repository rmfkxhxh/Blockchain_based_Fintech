const express = require("express");
const bodyParser = require('body-parser')
const app = express();

const host = '127.0.0.1'
const port = 3001

app.use(express.static('public'))
var urlencodedParser = bodyParser.urlencoded({extended:false})


app.get('./2index.html', (req, res)=> {
    res.sendFile(__dirname + '/2index.html')
})

app.get("/process_get", (req, res) => {
    //prepare output in JSON format
    var response = {
        first_name:req.query.first_name,
        last_name:req.query.last_name,
    };
    console.log(response)
    res.end(JSON.stringify(response))
})

app.get("/process_post", urlencodedParser, (req, res) => {
    //prepare output in JSON format
    var response = {
        first_name:req.body.first_name,
        last_name:req.body.last_name,
    };
    console.log(response)
    res.end(JSON.stringify(response))
})

app.listen(port, host, () => {

    console.log('listening at http://%s:%s', host, port)
})