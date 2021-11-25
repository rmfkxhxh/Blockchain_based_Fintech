const express = require("express")
const app = express()
const bodyParser = require("body-parser")
const multer = require("multer")
const upload = multer();

app.use(express.static('views'))

app.use(bodyParser.json());
var urlencodedParser = bodyParser.urlencoded({extended:true})
app.use(upload.array())


var Users = [];
app.set('view engine', 'pug');
app.set("views", './views');

const port = 5000
const host = '127.0.0.1'

app.get('/', (req,res) => {
    res.render('signup', {message: "please signup"})
})



app.post('/info', urlencodedParser, (req, res) => {
    console.log(req.body)
    var response = {
        user_name: req.body.user_name,
        user_id: req.body.user_id,
        password: req.body.password,
        post: req.body.post,
        addr: req.body.addr,
        detai: req.body.detai
    };
    // console.log(response)
    res.writeHead(200, {'Content-Type':'text/plain; charset=utf-8'});
    res.end(`이름 : ${response.user_name} \n아이디 : ${response.user_id} \n주소 : ${response.post} ${response.addr} ${response.detai}`)
    
    // res.redirect('information')
})
app.listen(port, host, () => {
    console.log(`application running at http://${host}:${port}/`)
});