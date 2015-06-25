var SensorTag = require('sensortag');
var mongoose = require('mongoose');

var EatSchema = new mongoose.Schema({
  id1:String,
  id2:String,
  date1:Date,
  date2:Date
});

var Eat = mongoose.model('Eat', EatSchema);

// mongodbに接続
mongoose.connect('mongodb://localhost/eatme', // memoの部分はデータベース名
  // コールバックでエラー時の処理が書けるみたい。
  function(err) {
    if (err) {
      console.log(err);
    } else {
      console.log('connection success!');
    }
  }
);

//function onDiscover(sensorTag){

//}

SensorTag.discoverAll(function(sensorTag) {
	sensorTag.connect(function() {

	    sensorTag.discoverServicesAndCharacteristics(function() {
	    	sensorTag.readSystemId(function(error, systemId){
	    		if(systemId == '5c:31:3e:00:00:bf:fc:15') {
	    			sensorTag.enableAccelerometer(function() {
	    				sensorTag.setAccelerometerPeriod(5, function() {
	    				})

	    			sensorTag.on('accelerometerChange', function(x, y, z){
	    				
	    				function accChange() {
	    					if()
	    					Eat.save.(function(err){
	    						if(err){
	    							console.log('save error!');
	    						}else{
	    							var eat = new Eat();
	    							eat.id1 = '5c:31:3e:00:00:bf:fc:15';
	    							eat.date1 = new Date();
	    						}
	    					});
		                };

		            accChange();
		            })
	    			sensorTag.notifyAccelerometer(function() {
                    console.log("> accelerometer is on");
                    });
                    });
	    			
	    			sensorTag.enableIrTemperature(function() {
	    				sensorTag.setIrTemperaturePeriod(5, function() {
	    				})

	    				sensorTag.on('irTemperatureChange', function(obj, amb){

	    					function tempChange() {
	    						exports.obj_1 = obj;
	    						exports.amb_1 = amb;
	    					};
	    					tempChange();
	    				})

	    				sensorTag.notifyIrTemperature(function() {
	    					console.log("> temperature is on");
	    				});
	    			});
	    		}else{
	    			console.log("null");
	    		}

	    		if(systemId == '5c:31:3e:00:00:bf:e8:7a') {
	    			sensorTag.enableAccelerometer(function() {
	    				sensorTag.setAccelerometerPeriod(5, function() {
	    				})

	    			sensorTag.on('accelerometerChange', function(x, y, z){
	    				
	    				function accChange() {
		            	exports.accX_2 = x;
		            	exports.accY_2 = y;
		            	exports.accZ_2 = z;
		                };

		            accChange();
		            })
	    			sensorTag.notifyAccelerometer(function() {
                    console.log("> accelerometer is on");
                    });
                    });
	    			
	    			sensorTag.enableIrTemperature(function() {
	    				sensorTag.setIrTemperaturePeriod(5, function() {
	    				})

	    				sensorTag.on('irTemperatureChange', function(obj, amb){

	    					function tempChange() {
	    						exports.obj_2 = obj;
	    						exports.amb_2 = amb;
	    					};
	    					tempChange();
	    				})

	    				sensorTag.notifyIrTemperature(function() {
	    					console.log("> temperature is on");
	    				});
	    			});
	    		}else{
	    			console.log("null");
	    		}
	    	});
	    });
    });
});
