var SensorTag = require('sensortag');

//function onDiscover(sensorTag){

//}

SensorTag.discoverAll(function(sensorTag) {
	sensorTag.connect(function() {

	    sensorTag.discoverServicesAndCharacteristics(function() {

	        sensorTag.enableAccelerometer(function() {
	
	            sensorTag.setAccelerometerPeriod(5, function() {
	            })

	            sensorTag.on('accelerometerChange', function(x, y, z){

		            function accChange() {
			            document.write('accX', {accX: x});
			            document.write('accY', {accY: y});
			            document.write('accZ', {accZ: z});
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
	        			document.write('obj', {obj: obj});
	        			document.write('amb', {amb: amb});
	        		};
	        		tempChange();
	        	})

	        	sensorTag.notifyIrTemperature(function() {
	        		console.log("> temperature is on");
	        	});
	        });

	        /*sensorTag.on('simpleKeyChange', function(left, right) {

	        	function buttons() {
	        		var left = SensorTag.accChange();
	        	    var right = SensorTag.tempChange();

	        	    //callback(left, right);
	            };
	            buttons();	        	
	        })

	        sensorTag.notifySimpleKey(function() {
	        	console.log("> simpleKey is on");
	        });*/

	    });
	});
});