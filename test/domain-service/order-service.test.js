const order = require('../../src/domain-models/order');
const OrdersService = require('../../src/domain-services/order-service')

const assert = require('assert');

describe('Orders service', () => {
  it('gets orders', async () => {
    const orders = [{
      id: 1,
      item: 'apple'
    }];

    const orderRepository = {
      findAll: async () => {
        return orders
      }
    };

    const ordersService = new OrdersService(orderRepository);
  
    assert.strictEqual(await ordersService.getOrders(), orders);
  });
});

























//===================================================


// const order = require('../domain-models/order');
// const orderRepository = require('../repository-services/order-repository');

// async function getOrders() {
//   return await orderRepository.findAll();
// }

// async function placeOrder(orderData) {
//   const order = new order(orderData);

//   return await orderRepository.placeOrder(order);
// }

// module.exports = {
//   getOrders,
//   placeOrder
// }