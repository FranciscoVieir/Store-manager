const { Router } = require('express');
const {
  allProductsController,
  productsIdController,
  createProduct,
} = require('./controllers/productsController');
const { validationProductName } = require('./middlewares/validationProduct');

const router = Router();

router.get('/products', allProductsController);

router.get('/products/:id', productsIdController);

router.post('/products', validationProductName, createProduct);

module.exports = router;
