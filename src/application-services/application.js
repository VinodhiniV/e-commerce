const express = require('express');
const bodyParser = require('body-parser');
const { randomBytes } = require('crypto');
const cors = require('cors');
const axios = require('axios');

const app = express();
app.use(bodyParser.json());
app.use(cors());

const OrdersService = require('../domain-services/order-service');

// function ApplicationService(OrdersService) {

app.get('/orders', (req, res) => {
  const orders = {};
  res.send(orders);
});

app.post('/placeOrder', async (req, res) => {
  const { item } = req.body;
  const orderService = new OrdersService();
  let id = await orderService.placeOrder(item);
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



