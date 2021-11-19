const http = require("http");
const fs = require("fs");
const url = require("url");

const ip = "127.0.0.1";
const port = 3000;

var server = http.createServer(function (req, res) {
    var pathName = url.parse(req.url).pathname;

    console.log("request for " + pathName + " received!!")
    console.log("pathName : ", pathName)
    fs.readFile(pathName.substr(1), (err, data) => {
        if (err) {
            console.log(err);
            //http status:404(not found)
            //content type : text/html
            res.writeHead(404, { "Content-Type": "text/html; charset=utf-8" });
        }
        else {
            //http status : 200 (ok)
            res.writeHead(200, { "Content-Type": "text/html; charset=utf-8" });
            res.write(data.toString());
        } //send the response body
        res.end();
    })
});

server.listen(port, ip, (err) => {
    console.log(`server running at http://${ip}:${port}`);
})