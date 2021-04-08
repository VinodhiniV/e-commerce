
let di = require('di4js');
const OrdersService = require('../domain-services/order-service');
const PublisherService = require('../domain-services/publisher-service');
const OrdersRepository = require('../repository-services/order-repository');

di
.register('ordersRepository')
	.as(OrdersRepository)
		.withConstructor()
.register('publisherService')
	.as(PublisherService)
		.withConstructor()
.register('ordersService')
	.as(OrdersService)
		.withConstructor()
			.param().ref('ordersRepository')
			.param().ref('publisherService')

let ordersService = di.resolve('ordersService');

module.exports= ordersService