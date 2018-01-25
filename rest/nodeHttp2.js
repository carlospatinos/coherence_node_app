const http = require('http');

var options = {
    host: "10.0.0.111",
    port: 8080,
    path: '/dist-http-example/1',
    method: 'GET'
  };
  
  http.request(options, function(res) {
    console.log('STATUS: ' + res.statusCode);
    console.log('HEADERS: ' + JSON.stringify(res.headers));
    res.setEncoding('utf8');
    res.on('data', function (chunk) {
      console.log('BODY: ' + chunk);
    });
    console.log(res);
  }).end();