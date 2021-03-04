'use strict';

const io = require('socket.io-client');
const faker = require('faker');
const events = require('../event.js');

const hostURL = 'http://localhost:3001/caps';
const socket = io.connect(hostURL);
require('dotenv').config({ path: '../.env'});
const store = process.env.STORE;
const store2 = process.env.STORE2;


setInterval(() => {
  let entry = { 
          store: store,
          orderID: faker.random.uuid(),
          customer: faker.name.findName(),
          address: `${faker.address.stateAbbr()}`
          
      };
  socket.emit('pickup', entry)
}, 5000);

setInterval(() => {
  let entry = { 
          store: store2,
          // orderID: faker.random.uuid(),
          customer: faker.name.firstName(),
          address: `${faker.address.stateAbbr()}`
          
      };
  socket.emit('pickup', entry)
}, 6000)

setInterval(() => {
  let entry = { 
    store: store,
    orderID: faker.random.uuid(),
    customer: faker.name.findName(),
    address: `${faker.address.stateAbbr()}`
    
};
  socket.emit('packageReady', entry);
}, 3000);

socket.emit('getMessages');

socket.on('delivered', payload => {
  
  events.vendorDelivered(payload);
});