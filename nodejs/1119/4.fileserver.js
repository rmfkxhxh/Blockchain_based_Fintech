const http = require("http");
const url = require("url")
const fs = require("fs")
const port = 3000;
const strIp = '127.0.0.1';


var server = http.createServer((req, res)=> {
    var qString = url.parse(req.url, true);
    var fileName = "."+qString.pathname

    fs.readFile(fileName, function(err, data) {
        if (err) {
            res.writeHead(404, {"Content-Type": "text/html; charset=utf-8"})
            return res.end("404 못 찾아여")
        };
        res.writeHead(200, {"Content-Type" : "text/html; charset=utf-8"});
        res.write(data);
        return res.end();
    })
});
server.listen(port, strIp, () => {
    console.log(`Server running at http://${strIp}:${port}`)
});