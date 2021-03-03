'use strict';

const hub = require('../event.js');

// this swaps the normal console.log funciton with a jest function for mock testing.
console.log = jest.fn();

describe('Testing the hub module', () => {
  it('should console log some output', () => {
    

    let payload = { entry: { orderID: 'J21470735382' }};

    hub.eventPickup(payload);
    expect(console.log).toHaveBeenCalled();
  });
  it('should console log when order is in-transit', () => {
    

    let payload = { entry: { orderID: 'J21470735382' }};

    hub.eventIntransit(payload);
    expect(console.log).toHaveBeenCalled();
  });
  it('should console log when th driver picks up order', () => {
    

    let payload = { entry: { orderID: 'J21470735382' }};

    hub.driverPickup(payload);
    expect(console.log).toHaveBeenCalled();
  });

});


