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

const serviceCreateProduct = async (name) => {
  const response = await productsModel.createProduct(name);

  // console.log(response);

  const { insertId } = response;

  const newProduct = {
    id: insertId,
    name,
  };
  // console.log(newProduct);

  return newProduct;
};

module.exports = {
  getAllProducts,
  getProductById,
  serviceCreateProduct,
};
