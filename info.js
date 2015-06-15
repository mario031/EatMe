var SensorTag = require('sensortag');

function onDiscover(sensorTag){
	sensorTag.readDeviceName(function(error, deviceName){
		console.log(deviceName);
	});
	sensorTag.readSystemId(function(error, systemId){
		console.log(systemId);
	});
	sensorTag.readSerialNumber(function(error, serialNumber){
		console.log(serialNumber);
	});
	sensorTag.readFirmwareRevision(function(error, firmwareRevision){
		console.log(firmwareRevision);
	});
	sensorTag.readHardwareRevision(function(error, hardwareRevision){
		console.log(hardwareRevision);
	});
	sensorTag.readSoftwareRevision(function(error, softwareRevision){
		console.log(softwareRevision);
	});
	sensorTag.readManufacturerName(function(error, manufacturerName){
		console.log(manufacturerName);
	});
}

SensorTag.discoverAll(onDiscover);