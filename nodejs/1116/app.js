
var http = require('http');
var dt = require('./myfirstmodule');
// 로컬호스트 아이디
const homePage = '127.0.0.1';
const port = 3000;

const server = http.createServer(function(req, res){
    // res.writeHead(200, {'Content-Type' : 'text/html'});
    // 브라우저에 상태코드를 알려줘야 한다.
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/html');
    res.write("The Date and Time are currently " + dt.myDateTime());
    res.end();
})

// 포트, url, 익명함수
server.listen(port, homePage, () => {
    console.log(`Server running at http://${homePage}:${port}/`);
});








