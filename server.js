var config = require('./config'),
    http = require('http'),
    url = require('url');

function start(route, handle) {
  console.log('start function called from server.js');

    function onRequest(request, response) {

        var pathname = url.parse(request.url).pathname,
            postData = '';

        request.setEncoding('utf8');

        request.addListener('data', function(postDataChunk) {
            postData += postDataChunk;
        });

        request.addListener('end', function() {
            route(handle, pathname, response, postData);
        });
    }

    http.createServer(onRequest).listen(config.port);
    console.log('htty sperver created');
}

exports.start = start;
