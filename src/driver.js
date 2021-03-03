'use strict';


const event = require('./event.js');

function handlePickup (payload){
  setTimeout(() =>{
    console.log(`Package ${payload.orderID} is on route.`);
    event.emit('in-transit', payload)
  }, 1000)

  setTimeout(() =>{
    console.log('Delivered to', payload.customer);
    event.emit('delivered', payload)
  }, 3000)
}


  event.on('pickUp', handlePickup) 

    
  



module.exports = handlePickup