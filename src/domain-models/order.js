const { randomBytes } = require('crypto');

class Order {
  constructor(orderLines, customerId, datePlaced) {
    this.id = randomBytes(4).toString('hex');
    this.orderLines = orderLines;
    this.customerId = customerId;
    this.totalCost = Math.random() * 10;
    this.datePlaced = datePlaced;
  }

  canPlaceOrder() {
    if (this.customerId === 1) {
      console.log('Cannot place an order for Customer id -> ', this.customerId);
      return false;
    } else {
      console.log('Can place order');
      return true;
    }
  }

  calculateTotalCost() {
    return Math.random() * 10;
  }
}
module.exports = Order