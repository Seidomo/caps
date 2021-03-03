


'use strict';

function eventPickup(payload){
  console.log(`EVENT: Order picked up from  ${payload.store}`);
}


function eventIntransit(payload){
  console.log(`EVENT:  Order in-transit to  ${payload.customer} in ${payload.address}`);
}

function eventDelivered(payload){
  console.log(`EVENT: Order delivered to  ${payload.customer} in ${payload.address}`);
}


function driverPickup(payload){
  console.log(`DRIVER: Picked up order from ${payload.store}`);
}

function driverDelivered(payload){
  console.log(`DRIVER: Delivered order to ${payload.customer}`)
}

function vendorDelivered(payload){
  console.log(`VENDOR: We Appreciate Your Bussiness for your order ${payload.customer}`);
}

module.exports = {
  eventPickup: eventPickup,
  eventIntransit: eventIntransit,
  eventDelivered: eventDelivered,
  driverPickup: driverPickup,
  driverDelivered: driverDelivered,
  vendorDelivered: vendorDelivered
}