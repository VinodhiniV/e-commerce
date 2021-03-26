const { randomBytes } = require('crypto');

class Product {
    constructor(id, unitPrice,currency) {
        this.id = id;
        this.unitPrice = unitPrice;
        this.currency = currency;
      }
}
module.exports = Product