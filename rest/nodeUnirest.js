var unirest = require('unirest');

var server = "10.0.0.111:8080";

unirest.put('http://' + server + '/dist-http-example/4')
.headers({'Accept': 'application/json', 'Content-Type': 'application/json'})
.send('{"name":"carlos","age":31}')
.end(function (response) {
  console.log(response);
});

var Request = unirest.get('http://' + server + '/dist-http-example/4');
Request.header('Accept', 'application/json').end(function (response) {
  console.log(response);
});