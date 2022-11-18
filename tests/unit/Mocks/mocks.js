const sinon = require('sinon');

const mockAllProducts = [
  {
    "id": 1,
    "name": "Martelo de Thor"
  },
  {
    "id": 2,
    "name": "Traje de encolhimento"
  },
  {
    "id": 3,
    "name": "Escudo do Capitão América"
  }
]

const mockProductById = {
  "id": 1,
  "name": "Martelo de Thor"
}

const mockResponse = () => {
  const response = {};
  response.status = sinon.stub().returns(response);
  response.json = sinon.stub().returns(response);
  return response;
};

module.exports = {
  mockAllProducts,
  mockProductById,
  mockResponse
}
