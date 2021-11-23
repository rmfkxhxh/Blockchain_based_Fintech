var tar = require('tar-stream');
var fs = require('fs');
var zlib = require('zlib');

var extract = tar.extract();
var chunks = [];

extract.on('entry', function(header, stream, next) {
    if (header.name == './unzip/') {
        stream.on('data', function(chunk) {
            chunks.push(chunk);
        });
    }

    stream.on('end', function() {
        next();
    });

    stream.resume();
});

extract.on('finish', function() {
    if (chunks.length) {
        var data = Buffer.concat(chunks);
        fs.writeFile('./unzip/', data);
    }
});

fs.createReadStream('./target/tageto.tar.gz')
    .pipe(zlib.createGunzip())
    .pipe(extract);