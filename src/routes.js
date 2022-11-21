const { Router } = require('express');
const {
  allProductsController,
  productsIdController,
  createProduct,
  updateProducts,
} = require('./controllers/productsController');
const { validationProductName } = require('./middlewares/validationProduct');

const router = Router();

router.get('/products', allProductsController);

router.get('/products/:id', productsIdController);

router.post('/products', validationProductName, createProduct);

router.put('/products/:id', validationProductName, updateProducts);

module.exports = router;
