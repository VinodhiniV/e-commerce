function OrdersRepository() {

    const orders = [];

    async function findAll() {
        console.log('Successfully getting all Orders : ', orders.length);
        return orders;
    }

    async function save(order) {
        console.log('Successfully Saved Order : ', order.id);
        orders.push(order);
        return order.id;
    }

    return {
        findAll,
        save
    };
}

module.exports = OrdersRepository