var SensorTag = require('sensortag');
var request  = require('request');
require('date-utils');

var baseUrl = 'http://life-cloud.ht.sfc.keio.ac.jp/~mario/response.php';



SensorTag.discoverAll(function(sensorTag) {
	sensorTag.connect(function() {

	    sensorTag.discoverServicesAndCharacteristics(function() {
	    	sensorTag.readSystemId(function(error, systemId){
	    		if(systemId == '5c:31:3e:00:00:bf:fc:15') {
	    			sensorTag.enableAccelerometer(function() {
	    				sensorTag.setAccelerometerPeriod(10, function() {
	    				})

	    			sensorTag.on('accelerometerChange', function(x, y, z){
	    				var date = new Date().getTime();
	    				var realDate = new Date();
	    				var formatted = realDate.toFormat("YYYY-MM-DD HH:MI:SS");
	    				
	    				function accChange() {
	    					if(x < -2 || 2 < x){
	    						request.post(
	    							{url: baseUrl,json:true,
	    							form: { name:'sensortag1', id:'5c:31:3e:00:00:bf:fc:15', date: date, realDate: formatted}},
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
	    			// 	sensorTag.setIrTemperaturePeriod(10, function() {
	    			// 	})

	    			// sensorTag.on('irTemperatureChange', function(obj, amb){

	    			// 		function tempChange() {
	    			// 			console.log();
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
	    				sensorTag.setAccelerometerPeriod(10, function() {
	    				})

	    			sensorTag.on('accelerometerChange', function(x, y, z){
	    				var date = new Date().getTime();
	    				var realDate = new Date();
	    				var formatted = realDate.toFormat("YYYY-MM-DD HH:MI:SS");
	    				
	    				function accChange() {
		            	    if(x < -2 || 2 < x){
		            		    request.post(
	    							{url: baseUrl,json:true,
	    							form: { name:'sensortag2', id:'5c:31:3e:00:00:bf:e8:7a', date: date, realDate: formatted}},
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
	    			// 	sensorTag.setIrTemperaturePeriod(10, function() {
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
	    				sensorTag.setAccelerometerPeriod(10, function() {
	    				})

	    			sensorTag.on('accelerometerChange', function(x, y, z){
	    				var date = new Date().getTime();
	    				var realDate = new Date();
	    				var formatted = realDate.toFormat("YYYY-MM-DD HH:MI:SS");
	    				
	    				function accChange() {
		            	    if(x < -2 || 2 < x){
		            		    request.post(
	    							{url: baseUrl,json:true,
	    							form: { name:'sensortag3', id:'5c:31:3e:00:00:bf:fa:70', date: date, realDate: formatted}},
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
	    			// 	sensorTag.setIrTemperaturePeriod(10, function() {
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

