const express = require('express');
const bodyParser = require('body-parser');
const { randomBytes } = require('crypto');
const cors = require('cors');
const axios = require('axios');

const app = express();
app.use(bodyParser.json());
app.use(cors());

const OrdersService = require('../domain-services/order-service');
const orderService = new OrdersService();

app.get('/orders', async (req, res) => {
  const orders = await orderService.getOrders();
  res.status(200).send(orders);
});

app.post('/placeOrder', async (req, res) => {
  let id = await orderService.placeOrder(req.body);
  res.status(201).send(id);
});

app.post('/events', (req, res) => {
  console.log('Received Event', req.body.type);

  res.send({});
});


module.exports = { app };



