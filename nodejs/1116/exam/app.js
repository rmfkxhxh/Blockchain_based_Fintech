const http = require("http")

http.createServer(function(req, res) {
    //send the http header
    //http status: 200: ok
    //content type: text/plain
    res.writeHead(200, {'Content-Type': 'text/plain'});

    //send the response body as "hello world"
    res.end("Hello World\n");
}).listen(8081);

//console will print the message
console.log("server running at http://127.0.0.1:8081/")