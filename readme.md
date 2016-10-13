<h2>National Control Devices</h2>
<h4>A nodejs/javascript based library for testing and programming of NCD boards </h4>

This just a simple start of a more robust repo with a CLI and several registerable modules that abstract most of the inner workings of [NCD boards](http://controlanything.com).  10/13/16

Assuming you have [nodejs](https://nodejs.org/en/download/) loaded on your machine (this repo uses always the latest node currently 6.x) from a terminal in the repository root run ```npm install```

Currently there is just a simple test module  <em>devicetest.js</em>

Edit the settings section of that file (at the top).  You'll need to know your device string which is OS dependent and may depend on which usb port you plug the device into. For linux users I include a bash script <em>usbcomports.sh</em> to help you identify connected USB serial ports.  The baudrate given seems to be the factory default so it should work. If you have issues with baudrate then you'll have to fire up the base station software and check it.

then....enter the NCD command in the variable ```cmdArr```, no need for the api and checksum stuff those are added... just the command ma'am.

Then run ```npm start```  ...that's it.

If it can't open the port then probably you have a cable connection problem (is board power up he asked) and/or your device string in the settings is incorrect.  If it says ```"message sent..."``` but the next line ```"complete response"``` does not appear then likely you have a baud rate mismatch problem and/or the 8,N,1 settings on the board were changed.
