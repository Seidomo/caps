'use strict';

const eventPool = require('./event-handler.js');

function confirmation(payload) {
  setTimeout(() => {
    console.log('Package Delivered!');
  }, 3000);
}
function thankYou(payload){
    setTimeout(() => {
        console.log('We Appreciate Your Bussiness');  
      }, 3000);
    
}
function onRoute(payload){
    setTimeout(() => {
        console.log('Your package Is On The Way');  
      }, 3000);
}

module.exports = {
  confirmation,
  thankYou,
  onRoute,
}
