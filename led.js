var Tessel = require("tessel-io");
var five = require("johnny-five");
//above are modules, which contains the code needed for tessel and johnny-five to run.

var board = new five.Board({
  io: new Tessel()
})
//creates a new instance object of a Johnny-Five board.

board.on("ready", () => {
  var led = new five.Led("a5");
  led.pulse(1000);
})
//this executes when the board emits the "ready" event.  Gets executed "on" the board.
