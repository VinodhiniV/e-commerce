'use strict';
const express = require('express');
const bodyParser = require('body-parser');
const { randomBytes } = require('crypto');
const cors = require('cors');
const axios = require('axios');

const app = express();
app.use(bodyParser.json());
app.use(cors());

var di = require('di4js');
const OrdersService = require('../domain-services/order-service');
const OrdersRepository = require('../repository-services/order-repository');

di
.register('ordersRepository')
	.as(OrdersRepository)
		.withConstructor()
	.param().val('')
.register('ordersService')
	.as(OrdersService)
		.withConstructor()
			.param().ref('ordersRepository')

var ordersService = di.resolve('ordersService');

// function Checkbox(){ 
//   this.$el = $("<input/>", { type: "checkbox" }); 
// }
// Checkbox.prototype = Object.create(IOrderService); // inherit
// Checkbox.prototype.render = function(){ return this.$el; };
// Checkbox.prototype.value = function(){ 
//   return this.$el.prop("checked"); // override methods
// };

// function ApplicationService(OrdersService) {

app.get('/orders', async (req, res) => {
  const orders = await ordersService.getOrders();
  res.status(200).send(orders);
});

app.post('/placeOrder', async (req, res) => {
  // const { item } = req.body;
  console.log('Into Place Order... checking OrdersService', ordersService);
    let id = await ordersService.placeOrder(req.body);
    console.log('ID is ', id)
     
    
      // await axios.post('http://localhost:4005/events', {
      //   type: 'OrderCreated',
      //   data: {
      //     id,
      //     item
      //   }
      // });
    
      res.status(201).send(id);
 
 
});

app.post('/events', (req, res) => {
  console.log('Received Event', req.body.type);

  res.send({});
});

// return { app }

// }

module.exports = { app };



