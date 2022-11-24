const validationSalesProducId = (request, response, next) => {
  const { productId } = request.body;
  if (!productId) {
    return response.status(400).json({ message: '"productId" is required' });
  }

  next();
};

const validationQuantity = (request, response, next) => {
  const { quantity } = request.body;

  if (!quantity) return response.status(400).json({ message: '"quantity" is required' });

  if (Number(quantity) < 1) {
    return response.status(422).json({ message: '"quantity" must be greater than or equal to 1' });
  }
  next();
};

module.exports = { validationSalesProducId, validationQuantity };
