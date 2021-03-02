'use strict';


'use strict';

require('dotenv').config({ path: '../.env'});
const store = process.env.STORE;
const event = require('./event.js');
// const { address } = require('faker');
const faker = require('faker')



setInterval(()  =>{
  let entry = { 
    store: store,
    orderID: faker.random.uuid(),
    customer: faker.name.findName(),
    address: `${faker.address.stateAbbr()}`
    
};
  event.emit('pickUp', entry)
}, 5000)

event.on('delivered', (payload) => {
    console.log('We Appreciate Your Bussiness')
})





// class Vendor {
//   constructor() {
//     this.db = [];
//   }

//   create() 
//   { 
//     let entry = { 
//         store: store,
//         orderID: faker.random.uuid(),
//         customer: faker.name.findName(),
//         address: `${faker.address.city},${faker.address.stateAbbr()}`
        
//     };
   
//     this.db.push(entry);
//     return entry;
//   }

 
// } 

// console.log('seiiii', Vendor)
// module.exports = Vendor;
