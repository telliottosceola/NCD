**National Control Devices**  
A nodejs/javascript Based Library for testing and programming of [NCD Devices](http://controlanything.com)

This just a simple start of a more robust repo with a CLI and several registerable modules that abstract most of the inner workings of NCD boards.  10/13/16

Assuming you have [nodejs](https://nodejs.org/en/download/) loaded on your machine (this repo uses always the latest node currently 6.x) from a terminal in the repository root run ```npm install```

Currently there is just a simple test module  <em>devicetest.js<em>

Edit the files settings of that file (at the top).  You'll need to know your device string which is OS dependent and may depend on which usb port you plug the device into. For linux users I include a bash script <em> usbcomports.sh<em>.  The baudrate seems to be the factory default so it should work. If you have issues then you'll have to fire up the base station software and check it.

then....enter the NCD command in the variable ```cmdArr```, no need for the api and checksum stuff those are added... just the command ma'am.

Then run ```npm start```  ...that's it.
