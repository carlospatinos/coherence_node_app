var unirest = require('unirest');

var async = require('async');
var request = require('request');

var server = "10.0.0.111:8080";

console.log('node.js application starting...');

async.parallel({
    one: function(callback) {
      var path = '/dist-http-example/1';
      unirest.put('http://' + server + path)
        .headers({'Accept': 'application/json', 'Content-Type': 'application/json'})
        .send('{"name":"carlos","age":31}')
        .end(function (response) {
            if (response.statusCode == 200) {
                callback(null, response.status);
            } else {
              callback(true, {});
            }
      });
    },
    two: function(callback) {
        var path = '/dist-http-example/2';
        unirest.put('http://' + server + path)
          .headers({'Accept': 'application/json', 'Content-Type': 'application/json'})
          .send('{"name":"luis","age":32}')
          .end(function (response) {
              if (response.statusCode == 200) {
                  callback(null, response.status);
              } else {
                callback(true, {});
              }
        });
    },
    three: function(callback) {
        var path = '/dist-http-example/3';
        unirest.put('http://' + server + path)
          .headers({'Accept': 'application/json', 'Content-Type': 'application/json'})
          .send('{"name":"genaro","age":33}')
          .end(function (response) {
              if (response.statusCode == 200) {
                  callback(null, response.status);
              } else {
                callback(true, {});
              }
        });
    },
    four: function(callback) {
        var path = '/dist-http-example/4';
        unirest.put('http://' + server + path)
          .headers({'Accept': 'application/json', 'Content-Type': 'application/json'})
          .send('{"name":"oscar","age":34}')
          .end(function (response) {
              if (response.statusCode == 200) {
                  callback(null, response.status);
              } else {
                callback(true, {});
              }
        });
    }
  }, function(err, results) {
    // results is now equals to: {one: 1, two: 2}
    console.log(results);
  });



  // an example using an object instead of an array
  var path =  '/dist-http-example/';
  async.parallel({
    one: function(callback) {
      unirest.get('http://' + server + path + '1')
        .headers({'Accept': 'application/json', 'Content-Type': 'application/json'})
        .end(function (response) {
            if (response.statusCode == 200) {
                callback(null, response.body);
            } else {
              callback(true, {});
            }
      });
    },
    two: function(callback) {
        unirest.get('http://' + server + path + '2')
        .headers({'Accept': 'application/json', 'Content-Type': 'application/json'})
        .end(function (response) {
            if (response.statusCode == 200) {
                callback(null, response.body);
            } else {
              callback(true, {});
            }
      });
    },
    three: function(callback) {
        unirest.get('http://' + server + path + '3')
        .headers({'Accept': 'application/json', 'Content-Type': 'application/json'})
        .end(function (response) {
            if (response.statusCode == 200) {
                callback(null, response.body);
            } else {
              callback(true, {});
            }
      });
    },
    four: function(callback) {
        unirest.get('http://' + server + path + '4')
        .headers({'Accept': 'application/json', 'Content-Type': 'application/json'})
        .end(function (response) {
            if (response.statusCode == 200) {
                callback(null, response.body);
            } else {
              callback(true, {});
            }
      });
    }
  }, function(err, results) {
    // results is now equals to: {one: 1, two: 2}
    console.log("getting values from the get...\n")
    console.log(JSON.stringify(results, null, 2));
  });