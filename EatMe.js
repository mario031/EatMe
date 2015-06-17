var SensorTag = require('sensortag');

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
		            	exports.accX_1 = x;
		            	exports.accY_1 = y;
		            	exports.accZ_1 = z;
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
