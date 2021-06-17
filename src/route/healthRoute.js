const express = require('express');

const healthRoute = express.Router();

healthRoute.post('/', (_, res) => {
  return res.status(200).json({ message: 'Success', value: 'Our service is online!'})
});

module.exports = healthRoute;