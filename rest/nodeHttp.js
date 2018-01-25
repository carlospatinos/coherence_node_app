const http = require('http');

const server_ip = "10.0.0.111:8080";
 
http.get('http://' + server_ip + '/dist-http-example/1', (resp) => {
  let data = '';
 
  // A chunk of data has been recieved.
  resp.on('data', (chunk) => {
    data += chunk;
  });
 
  // The whole response has been received. Print out the result.
  resp.on('end', () => {
    console.log(data);
  });
 
}).on("error", (err) => {
  console.log("Error: " + err.message);
});