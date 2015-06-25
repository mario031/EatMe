var SensorTag = require('sensortag');
var mongoose = require('mongoose');



var EatSchema = new mongoose.Schema({
  id1:{type:String},
  id2:{type:String},
  date1:{type:String},
  date2:{type:String}
});
mongoose.model('Eat', EatSchema);

// mongodbに接続
var eatme = mongoose.connect('mongodb://localhost/eatme');
var Eat = eatme.model('Eat');



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
	    				var date = new Date();
	    					var year = date.getFullYear();
	    					var month = date.getMonth()+1;
	    					var day = date.getDate();
	    					var hour = date.getHours();
	    					var minute = date.getMinutes();
	    					var second = date.getSeconds();
	    					var milisecond = date.getMilliseconds();
	    					var nowTime = hour + ":" + minute + ":" + second + ":" + milisecond;
	    					var nowDate = year + "-" + month + "-" + day;
	    					var accData =  nowDate + ' ' + nowTime;
	    				
	    				function accChange() {
	    					if(x < -2 || 2 < x){
	    						var eat = new Eat();
		            		    eat.id1 = '5c:31:3e:00:00:bf:fc:15';
		            		    eat.date1 = accData;
		            		    eat.save(function(err){
	    						   if(err){
	    							console.log('save error!');
	    						   }
	    					    });
	    					}    					
		                };

		            accChange();
		            })
	    			sensorTag.notifyAccelerometer(function() {
                    console.log("> accelerometer1 is on");
                    });
                    });
	    			
	    			// sensorTag.enableIrTemperature(function() {
	    			// 	sensorTag.setIrTemperaturePeriod(5, function() {
	    			// 	})

	    			// 	sensorTag.on('irTemperatureChange', function(obj, amb){

	    			// 		function tempChange() {
	    			// 			exports.obj_1 = obj;
	    			// 			exports.amb_1 = amb;
	    			// 		};
	    			// 		tempChange();
	    			// 	})

	    			// 	sensorTag.notifyIrTemperature(function() {
	    			// 		console.log("> temperature is on");
	    			// 	});
	    			// });
	    		}else{
	    			console.log("null");
	    		}

	    		if(systemId == '5c:31:3e:00:00:bf:e8:7a') {
	    			sensorTag.enableAccelerometer(function() {
	    				sensorTag.setAccelerometerPeriod(5, function() {
	    				})

	    			sensorTag.on('accelerometerChange', function(x, y, z){
	    				var date = new Date();
	    					var year = date.getFullYear();
	    					var month = date.getMonth()+1;
	    					var day = date.getDate();
	    					var hour = date.getHours();
	    					var minute = date.getMinutes();
	    					var second = date.getSeconds();
	    					var milisecond = date.getMilliseconds();
	    					var nowTime = hour + ":" + minute + ":" + second + ":" + milisecond;
	    					var nowDate = year + "-" + month + "-" + day;
	    					var accData =  nowDate + nowTime;
	    				
	    				function accChange() {
		            	    if(x < -2 || 2 < x){
		            		    var eat = new Eat();
		            		    eat.id2 = '5c:31:3e:00:00:bf:e8:7a';
		            		    eat.date2 = accData;
		            		    eat.save(function(err){
	    						    if(err){
	    							    console.log('save error!');
	    						    }
	    					    });
	    					}    
		                };

		            accChange();
		            })
	    			sensorTag.notifyAccelerometer(function() {
                    console.log("> accelerometer2 is on");
                    });
                    });
	    			
	    			// sensorTag.enableIrTemperature(function() {
	    			// 	sensorTag.setIrTemperaturePeriod(5, function() {
	    			// 	})

	    			// 	sensorTag.on('irTemperatureChange', function(obj, amb){

	    			// 		function tempChange() {
	    			// 			exports.obj_2 = obj;
	    			// 			exports.amb_2 = amb;
	    			// 		};
	    			// 		tempChange();
	    			// 	})

	    			// 	sensorTag.notifyIrTemperature(function() {
	    			// 		console.log("> temperature is on");
	    			// 	});
	    			// });
	    		}else{
	    			console.log("null");
	    		}
	    	});
	    });
    });
});

// Eat.find({}, function(err, res) {
//   console.log(res);
// });

