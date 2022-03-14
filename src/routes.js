const express = require('express');

const routes = express.Router();

const categoryController = require('./app/controllers/CategoryController');
const purchaseController = require('./app/controllers/PurchaseController');

//#region  Categories

routes.get('/categories', categoryController.findAll);
routes.post('/categories', categoryController.create);
routes.delete('/categories/:id', categoryController.delete)

//#endregion


//#region Purchases
routes.get('/purchases', purchaseController.findAll);
routes.post('/purchases', purchaseController.create);

//#endregion

module.exports = routes;