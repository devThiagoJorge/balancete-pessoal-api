const express = require('express');

const routes = express.Router();

const categoryController = require('./app/controllers/CategoryController');


routes.get('/categories', categoryController.findAll);
routes.post('/categories', categoryController.create);
routes.delete('/categories/:id', categoryController.delete)
module.exports = routes;