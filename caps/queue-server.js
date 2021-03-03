'use strict';

const socket_io = require('socket.io');

const io = socket_io(3001);

const messageQueue = {
    sent: {

    },
    inTransit:{

    },
    recieved:{
        
    }
}