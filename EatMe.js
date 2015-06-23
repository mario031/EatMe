var SensorTag = require('sensortag');
var fs = require('fs');

//function onDiscover(sensorTag){

//}

SensorTag.discoverAll(function(sensorTag) {
	sensorTag.connect(function(error) {

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
	    					var accData = nowTime + "," +  x + "," + y + "," +  z + "," + nowDate + "\n";


	    					
	    					function accChange() {
	    						fs.appendFile('./csv/accData1.csv', accData)
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
	    					var tempData = nowTime + "," + obj + "," + amb + "," + nowDate+ "\n";

	    					function tempChange() {
	    						fs.appendFile('./csv/tempData1.csv', tempData)
	    					};

	    					tempChange();
	    				})
	    				sensorTag.notifyIrTemperature(function() {
	    					console.log(">SensorTag1 temperature is on");
	    				});
	    			});

	    		}else{
	    			console.log("SensorTag1 null");
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
	    					var accData = nowTime + "," +  x + "," + y + "," +  z + "," + nowDate+ "\n";


	    					
	    					function accChange() {
	    						fs.appendFile('./csv/accData2.csv', accData)
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
	    					var tempData = nowTime + "," + obj + "," + amb + "," + nowDate+ "\n";

	    					function tempChange() {
	    						fs.appendFile('./csv/tempData2.csv', tempData)
	    					};

	    					tempChange();
	    				})

	    				sensorTag.notifyIrTemperature(function() {
	    					console.log(">SensorTag2 temperature is on");
	    				});
	    			});

	    		}else{
	    			console.log("SensorTag2 null");
	    		}
	    	});
	    });
    });
});
