const http = require('http');

//Option to be used by request
var options = {
    host: 'localhost',
    port: '3000',
    path: '/helloworld.html'
}

const callback = function(res) {
    var body = '';
    res.on('data', function(d) {
        body += d;
    });

    res.on('end', ()=> {
        console.log(body);
    });
}

var req = http.request(options, callback);
req.end();