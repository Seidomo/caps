'use strict';

const hub = require('../src/hub.js');

// this swaps the normal console.log funciton with a jest function for mock testing.
console.log = jest.fn();

describe('Testing the hub module', () => {
  it('should console log some output', () => {
    

    let payload = { entry: { orderID: 'J21470735382' }};

    hub.sendMessage(payload);
    expect(console.log).toHaveBeenCalled();
  });
});


