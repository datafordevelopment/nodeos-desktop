var Yunitto = require('yunitto');

function Desktop(config) {
  if(typeof(config) != "object")
   throw "nodeos-desktop: config is not a object";
   
  if(typeof(config.port) != "number")
   throw "nodeos-desktop: config port is not a number";
   
  var yunitto = new Yunitto({httpport: config.port});
}

module.exports = Desktop;
