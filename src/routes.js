const { Router } = require('express');
const {
  allProductsController,
  productsIdController,
  createProduct,
  updateProducts,
  deleteProductById,
} = require('./controllers/productsController');

// const {
//   getAllSales,
// } = require('./controllers/salesController');

const { validationProductName } = require('./middlewares/validationProduct');

const router = Router();

router.get('/products', allProductsController);

router.get('/products/:id', productsIdController);

router.post('/products', validationProductName, createProduct);

router.put('/products/:id', validationProductName, updateProducts);

router.delete('/products/:id', deleteProductById);

// router.get('/sales', getAllSales);
module.exports = router;
