const Order = require('../domain-models/order');
const OrdersRepository = require('../repository-services/order-repository');
const OrderLine = require('../domain-models/order-line');
const Product = require('../domain-models/product');
const CostCalculatorService = require('./cost-calculator-service');
const PlaceOrderResponse = require('../response/place-order-response')

function OrdersService() {

    async function getOrders() {
        return await new OrdersRepository().findAll();
    }

    async function placeOrder(orderRequestData) {
        //Create domain order from the request
        const orderLines = [];
        for (lineCount = 0; lineCount > orderRequestData.order.orderLines.length; orderRequestData.order.orderLines) {
            const orderline = new OrderLine(
                new Product(orderLine.product.id, orderLine.product.unitprice,orderLine.product.currency),
                orderLine.quantity);
            orderLines.push(orderLine);
        }
        const domainOrder = new Order(
            orderLines,
            orderRequestData.order.customerId,
            orderRequestData.order.datePlaced
        );

        //Perform domain validation (checks for availability of product)
        if (domainOrder.canPlaceOrder(orderRequestData)) {
            //store the order in the repository
            const orderId = await new OrdersRepository().save(domainOrder);
            const response = new PlaceOrderResponse(true, "Order Successfully Place",orderId);
            //publish
            // _publisher.Publish(MapToContract(domainOrder, orderId));
            return response;
        }
        else {
            const response = new PlaceOrderResponse(false, "Order validation failed", null);
            return response;
        }

        // try {
        //     //Calculate total cost
        //     this.totalCost = CostCalculatorService.calculateCost(orderRequestData);
        //     //Calculate transit locations
        //     const orderData = {
        //         orderLines: new OrderLine(orderRequestData),
        //         customerId: orderRequestData.customerId,
        //         totalCost: this.totalCost,
        //         datePlaced: new Date()
        //     };
        //     const order = new Order(orderData);
        //     return await new OrdersRepository().save(order);
        // } catch {
        //     throw new Error(401, 'Product');
        // }
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