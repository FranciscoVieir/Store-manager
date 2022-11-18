const { Router } = require('express');
const { allProductsController, productsIdController } = require('./controllers/productsController');
const { validationProductName } = require('./middlewares/validationProduct');

const router = Router();

router.get('/products', allProductsController);

router.get('/products/:id', productsIdController);

router.post('/products', validationProductName);

module.exports = router;
