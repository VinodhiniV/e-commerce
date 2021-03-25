const Order = require('../domain-models/order');
const ordersRepository = require('../repository-services/order-repository');

function OrdersService() {

    async function getOrders() {
        return await new ordersRepository().findAll();
    }

    async function placeOrder(orderData) {
        const order = new Order(orderData);
        return await new ordersRepository().save(order);
    }

    return {
        getOrders,
        placeOrder
    };
}

module.exports = OrdersService

























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