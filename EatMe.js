var SensorTag = require('sensortag');
var fs = require('fs');

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
	    					var accData = nowTime + "," +  x + "," + y + "," +  z + "," + nowDate;


	    					
	    					function accChange() {
	    						fs.writeFile('./csv/accData1.csv', accData);
	    						//console.log("acc1 log start");
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
	    					var tempData = nowTime + "," + obj + "," + amb + "," + nowDate;

	    					function tempChange() {
	    						fs.writeFile('./csv/tempData1.csv', tempData);
	    						//console.log("temp1 log start");
	    					
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
	    					var accData = nowTime + "," +  x + "," + y + "," +  z + "," + nowDate;


	    					
	    					function accChange() {
	    						fs.writeFile('./csv/accData2.csv', accData);
	    						//console.log("acc2 log start");
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
	    					var tempData = nowTime + "," + obj + "," + amb + "," + nowDate;

	    					function tempChange() {
	    						fs.writeFile('./csv/tempData2.csv', tempData);
	    						//console.log("temp2 log start");
	    					
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
