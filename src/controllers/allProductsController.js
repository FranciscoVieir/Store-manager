const service = require('../services/productsServices');

const allProductsController = async (request_, response) => {
  const [allProduct] = await service.getAllProducts();

  return response.status(200).json(allProduct);
};

module.exports = allProductsController;
