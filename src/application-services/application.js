'use strict';
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const ordersService = require('./inject-dependencies');

const app = express();
app.use(bodyParser.json());
app.use(cors());

app.get('/orders', async (req, res) => {
  const orders = await ordersService.getOrders();
  res.status(200).send(orders);
});

app.post('/placeOrder', async (req, res) => {
    let response = await ordersService.placeOrder(req.body);
    console.log('Order ID is ', response.orderid)
    res.status(201).send(response);
});

app.post('/events', (req, res) => {
  console.log('Received Event', req.body.type);
  res.status(200).send('Event Received');
});

module.exports = { app };



