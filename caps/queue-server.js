'use strict';

const socket_io = require('socket.io');

const io = socket_io(3001);

const orderQueue = {
    sent: {

    },
    inTransit:{

    },
    recieved:{

    }
    
};

io.on('connection', (socket) =>{
    socket.on('packageReady', payload => {
        orderQueue.sent[payload.orderID] = payload;

        socket.broadcast.emit('packageReady', payload)
    })
    socket.on('recieved', payload =>{
        delete orderQueue.sent[payload.orderID];
        orderQueue.recieved[payload.orderID] = payload;
    })
    socket.on('getMessages', () => {
        for (let key in orderQueue.sent) {
    
          socket.emit('packageReady', orderQueue.sent[key]);
        }
      });
})