function OrdersRepository() {
    this.orders = [];

    this.findAll = async () => {
        console.log('Successfully getting all Orders : ', this.orders.length);
        return this.orders.map((order) => {
            return { id: order.id, totalCost: order.totalCost }
        });
    }   
    
    this.save =  async (order) => {
        console.log('Successfully Saved Order : ', order.id);
         await this.orders.push(order);
        return order.id;
    }
}


// return {
//     findAll,
//     save
// };
// }

module.exports = OrdersRepository