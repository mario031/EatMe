var eat = require('./EatMe');
var http = require('http');
http.createServer(function (req, res) {
  res.writeHead(200, {'Content-Type': 'text/plain'});
  res.write("x" + eat.accX);
  res.write("y" + eat.accY);
  res.write("z" + eat.accZ);
  res.write("obj" + eat.obj);
  res.write("amb" + eat.amb);
  res.end();
}).listen(1337, "127.0.0.1");
console.log('Server running at http://127.0.0.1:1337/');
