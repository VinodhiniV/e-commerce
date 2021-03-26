const { randomBytes } = require('crypto');
const Product = require('../domain-models/product')

class OrderLine {
    constructor(product, quantity) {

        this.id = randomBytes(4).toString('hex');
        this.product = product;
        this.quantity = quantity;
      }
}
module.exports = OrderLine