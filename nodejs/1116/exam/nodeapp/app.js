var http = require('http');
var dt = require('./myfirstnodemodule');
const homePage = '127.0.0.1';
const port = 5000;

const server = http.createServer(function(req, res) {
    res.writeHead(200, {'Content-Type' : 'text/html; charset=utf-8'});
    // res.statusCode = 200; //브라우저에 알려줘야함?
    // res.setHeader('Content-Type', 'text/html; charset=utf-8')
    res.write("The date and time are currently: " + dt.myDateTime());
    res.end();
})
server.listen(port, homePage, ()=>{
    console.log(`Server running at http://${homePage}:${port}/`);
})