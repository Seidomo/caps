'use strict';

// bring in the node events modules

const Events = require('events');
// This is the same event Emitter that is subscribing and publishing
const eventEmitter = new Events();

// define an event and an event handler
eventEmitter.on('pickUp', async (payload) => {
  console.log('message sent', payload);
  eventEmitter.emit('onRoute', { user: 'jacob' });
});

eventEmitter.on('onRoute', async (payload) => {
  console.log('User', payload.user, 'has received their message');
  eventEmitter.emit('delivered', { messageId: '1234' });
});

eventEmitter.on('delivered', async (payload) => {
    console.log('seids', payload);
  console.log('Great', payload.messageId, ' is finished');
});


console.log('hiiiiiii');
eventEmitter.emit('send', { message: 'hello word' });
