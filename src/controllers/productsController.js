const service = require('../services/productsServices');

const allProductsController = async (request_, response) => {
  const allProduct = await service.getAllProducts();
  // console.log(allProduct);

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

const createProduct = async (req, resp) => {
  const { name } = req.body;

  const newProduct = await service.serviceCreateProduct(name);

  // console.log('create', newProduct);

  resp.status(201).json(newProduct);
};

const updateProducts = async (request, response) => {
  const { name } = request.body;
  const { id } = request.params;
  const productById = await service.getProductById(Number(id));

  const newObj = await service.updateProduct(name, id);
  // console.log(newObj);

  if (!productById) return response.status(404).json({ message: 'Product not found' });

  return response.status(200).json(newObj);
};

const deleteProductById = async (request, response) => {
  const { id } = request.params;

  const productById = await service.getProductById(Number(id));

  if (!productById) return response.status(404).json({ message: 'Product not found' });

  const productDelete = await service.deleteProducts(id);

  return response.status(204).json(productDelete);
};

module.exports = {
  allProductsController,
  productsIdController,
  createProduct,
  updateProducts,
  deleteProductById,
};
