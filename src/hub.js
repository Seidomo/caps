'use strict';

///// Dependencies  //////


const event = require('./event.js');
// const Message = require('./index.js');
 require('./vendor.js');


 require('./driver.js');



// Event that will be published, setting up subscribers for events.

event.on('pickUp', sendMessage);
event.on('in-transit', sendMessage);
event.on('delivered', sendMessage);


function sendMessage(payload){
  console.log(`Delivery to: ${JSON.stringify(payload)}`);
}
