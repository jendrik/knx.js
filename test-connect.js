var knx = require('.');
var util = require('util');

var connection = knx.IpTunnelingConnection({ipAddr:'192.168.8.4'});
// var connection = knx.IpRoutingConnection();

connection.debug = true;

connection.Connect(function() {
  console.log('----------');
  console.log('Connected!');
  console.log('----------');
  var light = new knx.Devices.BinarySwitch({ga: '1/1/8', status_ga: '1/1/108'}, connection);
  light.control.on('change', function(oldvalue, newvalue) {
    console.log("**** LIGHT control changed from: %j to: %j",
      oldvalue, newvalue);
  });
  light.switchOff();
  setTimeout( () => {
     console.log('Disconnecting')
     connection.Disconnect()
  }, 1000)
});