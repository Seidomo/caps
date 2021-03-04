'use strict';

const socket_io = require('socket.io');
const events = require('../event.js');

const io = socket_io(3001);
const caps = io.of('/caps');


const orderQueue = {
  sent: {

  },
  recieved:{

  }
  
};

caps.on('connection', (socket) => {
  console.log('new connection created', socket.id);

  socket.on('packageReady', payload => {
    orderQueue.sent[payload.orderID] = payload;

    caps.emit('packageReady', payload)
})

  socket.on('pickup', payload => {
    events.eventPickup(payload);
    caps.emit('pickup', payload);
  })

  
  socket.on('in-transit', payload => {
    events.eventIntransit(payload);
  }); 
  
  
  socket.on('delivered', payload => {
    events.eventDelivered(payload);
    caps.emit('delivered', payload);
  });

  socket.on('delivered', payload => {
  
    events.vendorDelivered(payload);
  });

})