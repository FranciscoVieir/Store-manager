const service = require('../services/productsServices');

const allProductsController = async (request_, response) => {
  const allProduct = await service.getAllProducts();

  return response.status(200).json(allProduct);
};

const productsIdController = async (req, res) => {
  const { id } = req.params;
  const productById = await service.getProductById(Number(id));

  if (!productById) {
    res.status(404).json({ message: 'Product not found' });
  }

  res.status(200).json(productById);
};

module.exports = { allProductsController, productsIdController };
