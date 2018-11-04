var Tessel = require("tessel-io");
var five = require("johnny-five");

var board = new five.Board({
  io: new Tessel()
});

board.on("ready", () => {
    var button = new five.Button("a2");
    button.on("press", () => console.log("Oops! Did I do that? :D "));
    button.on("release", () => console.log("Yeas. Yeas I did."));
});
