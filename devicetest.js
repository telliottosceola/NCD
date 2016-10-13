var SerialPort = require("serialport");

// enter in just the command you want to test  (the complete api  command will be built)
let cmdArr = [254, 175, 0];
console.log('The command to be sent: ', cmdArr)

// settings
let apiCode = 170;
let device = "/dev/ttyUSB0"
let baudrate = 115200  // default is 8,N,1

// variables - leave these.
let checksum = 0;
let response = [];

var port = new SerialPort(device, {
    baudRate: baudrate
});

port.on('data', function(received) {
    for (var byte of received) {
        response.push(byte);
    }
    console.log('complete response: ', response)

    port.close();
});

port.on('error', function(err) {
    console.log('Error: ' + err.message);
});

port.on('open', function() {

    cmdArr.unshift(cmdArr.length);
    cmdArr.unshift(apiCode);
    checksum = cmdArr.reduce((a, b) => a + b, 0) & 255;
    cmdArr.push(checksum);
    console.log('api command array: ', cmdArr)
    let cmdBuf = new Buffer(cmdArr); // get status of bank 0
    console.log('command as buffer: ', cmdBuf)

    port.write(cmdBuf, function(err) {
        if (err) {
            return console.log('Error on write: ', err.message);
        }
        console.log('message is sent...');

    });
});
