const { randomBytes } = require('crypto');

class Order {
    constructor(item) {
        this.item = item;
        this.id = randomBytes(4).toString('hex');
      }
}
module.exports = Order