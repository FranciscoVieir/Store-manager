const { Router } = require('express');
const { allProductsController, productsIdController } = require('./controllers/productsController');

const router = Router();

router.get('/products', allProductsController);

router.get('/products/:id', productsIdController);

module.exports = router;
