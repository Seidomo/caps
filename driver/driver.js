
'use strict';
const io = require('socket.io-client');

const hostURL = 'http://localhost:3001';
const socket = io.connect(hostURL);
const events = require('../event.js');


socket.on('pickup', payload => {
    setTimeout(() => {
      events.driverPickup(payload);
      socket.emit('in-transit', payload);
    }, 1500)
  });


socket.on('pickup', payload => {
  setTimeout(() => {
    events.driverDelivered(payload);
    socket.emit('delivered', payload);
  }, 3000)
});







