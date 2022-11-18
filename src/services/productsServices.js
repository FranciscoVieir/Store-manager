const productsModel = require('../models/Products');

const getAllProducts = async () => {
  const allProduct = await productsModel.allProducts();
  // console.log(allProduct);
  return allProduct;
};

const getProductById = async (id) => {
  const product = await productsModel.productId(id);

  return product;
};

module.exports = {
  getAllProducts,
  getProductById,
};
