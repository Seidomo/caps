'use strict';


const eventPool = require('./event-handler.js');

function sendMessage(payload) {

  console.log('Sending Message!!',
    `Text: ${payload.message.text} :: `,
    `Sending to ${payload.message.receiver}`
  );

  eventPool.emit('onRoute', { orderID: payload.message, text: payload.message.text });
}


module.exports = {
  sendMessage,
}
