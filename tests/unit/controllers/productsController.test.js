const { expect } = require('chai');
const { afterEach } = require('mocha');
const sinon = require('sinon');

const productController = require('../../../src/controllers/productsController')
const service = require('../../../src/services/productsServices');

const { mockAllProducts, mockProductById, mockResponse } = require('../Mocks/mocks');

describe('Verificando o funcionamento das funcôes controller', () => {

  it('Verifica se a lista renderiza todos os produtos referente a rota "/products"', async () => {
    sinon.stub(service, 'getAllProducts').resolves(mockAllProducts);

    const result = await productController.allProductsController();

    expect(result).to.be.an('array');

    expect(result).to.be.deep.equal(mockAllProducts)
  })

  it('Verifica se a lista retorna uma messagem de erro, caso o "id" passado seja inválido', async () => {
    sinon.stub(service, 'getProductById').resolves({ message: 'Product not found' });
    const request = { params: { id: 500 } };
    const response = mockResponse();

    const result = await productController.productsIdController(request, response);

    expect(response.status).to.have.been.calledWith(404);
    expect(response.json).to.have.been.calledWith({ message: 'Product not found' })
  });
})
