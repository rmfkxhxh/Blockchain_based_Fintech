const http = require("http")
const url = require("url")

const port = 3000;
const strIp = '127.0.0.1';


var server = http.createServer((req, res)=> {
    res.writeHead(200, {"Contents-Type" : "text/html; charset = utf-8"});
    var strQuery = url.parse(req.url, true).query;
    var txt = strQuery.year + " " + strQuery.month;
    //http://127.0.0.1:3000/?year=2021&month=Oct 주소창에서 쿼리함
    // 2021 Oct
    
    res.end(txt);
});
server.listen(port, strIp, () => {
    console.log(`Server running at http://${strIp}:${port}`)
});