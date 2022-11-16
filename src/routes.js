const { Router } = require('express');
const allProductsController = require('./controllers/allProductsController');
const productsIdController = require('./controllers/productsIdController');

const router = Router();

router.get('/products', allProductsController);

router.get('/products/:id', productsIdController);

module.exports = router;
