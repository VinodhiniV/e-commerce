const { randomBytes } = require('crypto');

class Order {
    constructor(orderdata) {
      const {orderLines,customerId,  datePlaced} = orderdata;
        this.id = randomBytes(4).toString('hex');
        this.orderLines = orderLines;
        this.customerId = customerId;
        this.totalCost =  Math.random() * 10;
        this.datePlaced = datePlaced;
      }

      canPlaceOrder (){
        if(this.customerId === 1) return false;
        return true;
      }

      calculateTotalCost(){
        return Math.random() * 10;
      }
}
module.exports = Order