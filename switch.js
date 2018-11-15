var Tessel = require("tessel-io");
var five = require("johnny-five");

var board = new five.Board({
  io: new Tessel()
});

board.on("ready", () => {
  var spdt = new five.Switch("a5");
  spdt.on("close", () => console.log("Switch closed"));
  spdt.on("open", () => console.log("Switch opened"));
});
