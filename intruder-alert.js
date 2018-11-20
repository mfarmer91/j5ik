var Tessel = require("tessel-io");
var five = require("johnny-five");
var board = new five.Board({
  io: new Tessel()
});

var accountSid = "";
var authToken = "";

var sender = "";
var recipient = "";

var client = new twilio.RestClient(accountSid, authToken);

board.on("ready", () => {
  //var led = new five.Led("a5");
  var door = new five.Switch({
    pin: "a2",
    invert: true,
  });

  door.on("open", () => {
    body: `Security Breach at ${Date.now()}`
    from: sender,
    to: recipient,
  });

  client.messages.create(details, error => {
    if (error) {
      console.error(error.message);
    }
  });
  //door.on("close", () => led.off());
});
