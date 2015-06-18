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
		            	console.log("x1 : " + x);
		            	console.log("y1 : " + y);
		            	console.log("z1 : " + z);
		                };

		            accChange();
		            })
	    			sensorTag.notifyAccelerometer(function() {
                    console.log(">SensorTag1 accelerometer is on");
                    });
                    });
	    			
	    			sensorTag.enableIrTemperature(function() {
	    				sensorTag.setIrTemperaturePeriod(5, function() {
	    				})

	    				sensorTag.on('irTemperatureChange', function(obj, amb){

	    					function tempChange() {
	    						console.log("obj1 : " + obj);
	    						console.log("amb1 : "  + amb);
	    					
	    				    };
	    				tempChange();
	    			    })
	    				sensorTag.notifyIrTemperature(function() {
	    					console.log(">SensorTag1 temperature is on");
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
		            	console.log("x2 : " + x);
		            	console.log("y2 : " + y);
		            	console.log("z2 : " + z);
		                };

		            accChange();
		            })
	    			sensorTag.notifyAccelerometer(function() {
                    console.log(">SensorTag2 accelerometer is on");
                    });
                    });
	    			
	    			sensorTag.enableIrTemperature(function() {
	    				sensorTag.setIrTemperaturePeriod(5, function() {
	    				})

	    				sensorTag.on('irTemperatureChange', function(obj, amb){

	    					function tempChange() {
	    						console.log("obj2 : " + obj);
	    						console.log("amb2 : " + amb);
	    					};
	    					tempChange();
	    				})

	    				sensorTag.notifyIrTemperature(function() {
	    					console.log(">SensorTag2 temperature is on");
	    				});
	    			});

	    		}else{
	    			console.log("null");
	    		}
	    	});
	    });
    });
});
