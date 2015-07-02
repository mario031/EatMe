var SensorTag = require('sensortag');
var request  = require('request');

var baseUrl = 'http://life-cloud.ht.sfc.keio.ac.jp/~mario/response.php';



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
	    					var accDate =  nowDate + ' ' + nowTime;
	    				
	    				function accChange() {
	    					if(x < -2 || 2 < x){
	    						request.post(
	    							{url: baseUrl,json:true,
	    							form: { name:'sensortag1', id:'5c:31:3e:00:00:bf:fc:15', date: accDate}},
	    							function(err,res,body){
	    								if(!err && res.statusCode == 200){
	    								    console.log('S1 post success');
	    							    }else{
	    								    console.log('S1 post error');
	    							    }
	    							}
	    						);
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
	    					var accDate =  nowDate + ' ' + nowTime;
	    				
	    				function accChange() {
		            	    if(x < -2 || 2 < x){
		            		    request.post(
	    							{url: baseUrl,json:true,
	    							form: { name:'sensortag2', id:'5c:31:3e:00:00:bf:e8:7a', date: accDate}},
	    							function(err,res,body){
	    								if(!err && res.statusCode == 200){
	    								    console.log('S2 post success');
	    							    }else{
	    								    console.log('S2 post error');
	    							    }
	    							}
	    						);
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
	    		}
	    		if(systemId == '5c:31:3e:00:00:bf:fa:70') {
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
	    					var accDate =  nowDate + ' ' + nowTime;
	    				
	    				function accChange() {
		            	    if(x < -2 || 2 < x){
		            		    request.post(
	    							{url: baseUrl,json:true,
	    							form: { name:'sensortag3', id:'5c:31:3e:00:00:bf:fa:70', date: accDate}},
	    							function(err,res,body){
	    								if(!err && res.statusCode == 200){
	    								    console.log('S3 post success');
	    							    }else{
	    								    console.log('S3 post error');
	    							    }
	    							}
	    						);
	    					}    
		                };

		            accChange();
		            })
	    			sensorTag.notifyAccelerometer(function() {
                    console.log("> accelerometer3 is on");
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
	    		}
	    	});
	    });
    });
});

// Eat.find({}, function(err, res) {
//   console.log(res);
// });

