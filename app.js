var eat = require('./EatMe');
var http = require('http');
http.createServer(function (req, res) {
  res.writeHead(200, {'Content-Type': 'text/plain'});
  res.write("SensorTag1" + "\nx:" + eat.accX_1+ "\ny:" + eat.accY_1 + "\nz:" + eat.accZ_1 + "\nobj:" + eat.obj_1 + "\namb:" + eat.amb_1 + '\n');
  res.write("\nSensorTag2" + "\nx:" + eat.accX_2+ "\ny:" + eat.accY_2 + "\nz:" + eat.accZ_2 + "\nobj:" + eat.obj_2 + "\namb:" + eat.amb_2);
  res.end();
}).listen(1337, "127.0.0.1");
console.log('Server running at http://127.0.0.1:1337/');
