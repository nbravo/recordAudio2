function respondWithHTTPCode(response, code) {
    response.writeHead(code, { 'Content-Type': 'text/plain' });
    response.end();
}

function route(handle, pathname, response, postData) {
  console.log('route function called');

    var extension = pathname.split('.').pop();

    var staticFiles = {
        js: 'js',
        gif: 'gif',
        css: 'css',
        webm: 'webm',
        mp4: 'mp4',
        wav: 'wav',
        ogg: 'ogg'
    };

    if ('function' === typeof handle[pathname]) {
    console.log('detected handler');
        handle[pathname](response, postData);
    } else if (staticFiles[extension]) {
        handle._static(response, pathname, postData);
    } else {
        respondWithHTTPCode(response, 404);
    }
}

exports.route = route;
