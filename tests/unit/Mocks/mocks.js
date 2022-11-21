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

// const mockResponse = () => {
//   const response = {};
//   response.status = sinon.stub().returns(response);
//   response.json = sinon.stub().returns(response);
//   return response;
// };

const mockUptade = {
  fieldCount: 0,
  affectedRows: 0,
  insertId: 0,
  info: 'Rows matched: 0  Changed: 0  Warnings: 0',
  serverStatus: 2,
  warningStatus: 0,
  changedRows: 0
};

module.exports = {
  mockAllProducts,
  mockProductById,
  mockUptade,
}
