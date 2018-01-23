var five = require("johnny-five");
var Tessel = require("tessel-io");
var board = new five.Board({
  io: new Tessel()
});
board.on("ready", () => {
  var leds = new five.Leds(["a2", "a3", "a4", "a5", "a6", "a7"]);
  var index = 0;
  var step = 2;
  var step_back = -1;

  board.loop(1000, () => {
    if (index === leds.length - 1) {
      index = 0;
    } else {
      leds.off();
      leds[index].on();
      index += step;
      leds.off();
      leds[index].on();
      index += step_back;
    }
  });
});
