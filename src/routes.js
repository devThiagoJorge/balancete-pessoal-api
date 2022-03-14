const express = require('express');

const routes = express.Router();

const categoryController = require('./app/controllers/CategoryController');


routes.get('/categories', categoryController.index);
routes.post('/categories', categoryController.create);

module.exports = routes;