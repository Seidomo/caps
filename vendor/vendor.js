'use strict';

const io = require('socket.io-client');
const faker = require('faker');
const events = require('../event.js');

const hostURL = 'http://localhost:3001';
const socket = io.connect(hostURL);
require('dotenv').config({ path: '../.env'});
const store = process.env.STORE;


setInterval(() => {
  let entry = { 
          store: store,
          orderID: faker.random.uuid(),
          customer: faker.name.findName(),
          address: `${faker.address.stateAbbr()}`
          
      };
  socket.emit('pickup', entry)
}, 5000);

socket.on('delivered', payload => {
  console.log('eyyyyyaaaaaaaaaaaaaaaaa///');
  events.vendorDelivered(payload);
});