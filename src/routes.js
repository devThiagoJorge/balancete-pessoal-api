const express = require('express');

const routes = express.Router();

const categoryController = require('./app/controllers/CategoryController');

require('./app/database/db');

routes.get('/categories', categoryController.index);

module.exports = routes;