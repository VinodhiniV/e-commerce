class PlaceOrderResponse
{
    constructor(isSuccess, reason, orderid){
        this.isSuccess = isSuccess,
        this.reason = reason,
        this.orderid = orderid
    }
}

module.exports = PlaceOrderResponse

