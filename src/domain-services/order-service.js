const Order = require('../domain-models/order');
const OrderLine = require('../domain-models/order-line');
const Product = require('../domain-models/product');
const CostCalculatorService = require('./cost-calculator-service');
const PlaceOrderResponse = require('../response/place-order-response')

function OrdersService(ordersRepositoryService, publisherService) {
    this.ordersRepositoryService = ordersRepositoryService;
    this.publisherService = publisherService;

    this.getOrders = async () => {
        return await this.ordersRepositoryService.findAll();
    }

    this.placeOrder = async (orderRequestData) => {
        const orderLines = createOrderLines(orderRequestData);
        const domainOrder = new Order(
            orderLines,
            orderRequestData.order.customerId,
            orderRequestData.order.datePlaced
        );

        if (domainOrder.canPlaceOrder(orderRequestData)) {
            const orderId = await this.ordersRepositoryService.save(domainOrder);
            const response = new PlaceOrderResponse(true, "Order Successfully Place", orderId);

            await publisherService.publish(createEvent(domainOrder, orderId));

            return response;
        }
        else {
            return new PlaceOrderResponse(false, "Order validation failed", null);
        }
    }

    function createEvent(domainOrder, orderId) {
        return {
            orderId,
            customerId: domainOrder.customerId,
            totalCost: domainOrder.totalCost,
            datePlaced: domainOrder.datePlaced
        }
    }

    function createOrderLines(orderRequestData) {
        const orderLines = [];
        for (lineCount = 0; lineCount > orderRequestData.order.orderLines.length; orderRequestData.order.orderLines) {
            const orderline = new OrderLine(
                new Product(orderLine.product.id, orderLine.product.unitprice, orderLine.product.currency),
                orderLine.quantity);
            orderLines.push(orderLine);
        }
        return orderLines;
    }
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