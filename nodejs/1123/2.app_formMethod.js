const express = require("express");
const bodyParser = require('body-parser')
const path = require('path')
const app = express();

const host = '127.0.0.1'
const port = 3001


var urlencodedParser = bodyParser.urlencoded({extended:false})

app.use(express.static('pulbic'))

app.get('/index', (req, res)=> {
    console.log(__dirname)
    // res.sendFile(path.join(__dirname, 'public', 'html','2index.html'))
    res.sendFile(__dirname + '/public/html/2index.html')
    
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
app.use(express.static(path.join(__dirname,'public')));
app.listen(port, host, () => {

    console.log('listening at http://%s:%s', host, port)
})