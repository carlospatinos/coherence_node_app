var Client = require('node-rest-client').Client;
var client = new Client();
 
// direct way 
client.get("http://172.17.0.1:8080/dist-http-example/1.json", function (data, response) {
    // parsed response body as js object 
    //console.log(data);
    // raw response 
    console.log(response);
});
 
// // registering remote methods 
// client.registerMethod("jsonMethod", "http://remote.site/rest/json/method", "GET");
 
// client.methods.jsonMethod(function (data, response) {
//     // parsed response body as js object 
//     console.log(data);
//     // raw response 
//     console.log(response);
// });