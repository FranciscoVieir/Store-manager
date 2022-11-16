const selectingAllProducts = require('../models/selectingAllProducts');
const selectingProductId = require('../models/selectingProductId');

const getAllProducts = async () => {
  const allProduct = await selectingAllProducts();

  return allProduct;
};

const getProductById = async (id) => {
  const product = await selectingProductId(id);

  return product;
};

module.exports = {
  getAllProducts,
  getProductById,
};
