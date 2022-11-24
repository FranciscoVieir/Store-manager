const salesModel = require('../models/salesModel');

const getAllSalesService = async () => {
  const allSales = await salesModel.getAllSalesModel();
  // console.log(allSales, 'getAll da service');
  return { type: undefined, allSalesObject: allSales };
};

const getByIdService = async (Id) => {
  const salesById = await salesModel.getAllSalesIdModel(Id);
  if (salesById.length === 0) return { code: 'NOT_FOUND', message: 'Sale not found' };
  return { type: undefined, objectById: salesById };
};

module.exports = {
  getAllSalesService,
  getByIdService,
};
