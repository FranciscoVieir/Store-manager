const salesService = require('../services/salesService');

const getAllSalesController = async (_request, response) => {
  const { allSalesObject } = await salesService.getAllSalesService();
  console.log(allSalesObject, 'func');
  return response.status(200).json(allSalesObject);
};

const getSalesByIdController = async (request, response) => {
  const { id } = request.params;
  const { code, objectById } = await salesService.getByIdService(Number(id));

  // console.log(objectById);

  if (code) {
    return response.status(404).json({ message: 'Sale not found' });
  }

  return response.status(200).json(objectById);
};

module.exports = {
  getAllSalesController,
  getSalesByIdController,
};
