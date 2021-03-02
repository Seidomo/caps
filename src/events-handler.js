'use strict';

///// Dependencies  //////


const eventPool = require('./event.js');
const Message = require('./index.js');
const Vendor = require('./vendor.js');
const send = require('./sending.js');
const inTransit = require('./receiving.js');
const delivered = require('./pickUp.js');

const vendor = new Vendor();
const messageInterface = new Message();

// Event that will be published, setting up subscribers for events.

eventPool.on('pickUp', send.sendMessage);
eventPool.on('onRoute', inTransit.confirmation);
eventPool.on('delivered', delivered.confirmation);

// Artificial interaction point.
setInterval(() => {
  eventPool.emit('send', { user: userInterface.create('seid'), message: messageInterface.create('Hey There', 'Jacob', 'Jacob') });
}, 2000);
