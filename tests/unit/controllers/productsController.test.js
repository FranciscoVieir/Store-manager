const { expect } = require('chai');
const { afterEach } = require('mocha');
const sinon = require('sinon');
const chai = require('chai');
const sinoChai = require('sinon-chai');


chai.use(sinoChai)

const productController = require('../../../src/controllers/productsController')
const service = require('../../../src/services/productsServices');
const productModel = require('../../../src/models/Products');

const { mockAllProducts, mockProductById, mockCreateProduct } = require('../Mocks/mocks');

describe('Verificando a camada controller', () => {
  const req = { params: { id: 500 } };
  afterEach(sinon.restore)

  it('Verifica se a lista renderiza todos os produtos referente a rota "/products"', async () => {
    sinon.stub(service, 'getAllProducts').resolves(mockAllProducts);
    const request = {};
    const response = {};
    response.status = sinon.stub().returns(response);
    response.json = sinon.stub().returns(response);

    await productController.allProductsController(request, response);


    expect(response.status).to.have.been.calledWith(200);
    expect(response.json).to.have.been.calledWith(mockAllProducts)
  })

  it('Verifica se a lista retorna uma messagem de erro, caso o "id" passado seja inválido', async () => {
    sinon.stub(service, 'getProductById').resolves(undefined);
    const request = { params: { id: 500 } };
    const response = {};
    response.status = sinon.stub().returns(response);
    response.json = sinon.stub().returns(response);

    await productController.productsIdController(request, response);


    expect(response.status).to.have.been.calledWith(404);
    expect(response.json).to.have.been.calledWith({ message: 'Product not found' });
  });

  it('Verifica se remove exibido uma messagem de "Product not found", caso o id inserido seja inválido ', async () => {
    sinon.stub(service, 'deleteProducts').resolves(undefined);
    const request = { params: { id: 1 } };
    const response = {};
    response.status = sinon.stub().returns(response);
    response.json = sinon.stub().returns();

    await productController.deleteProductById(request, response);


    expect(response.status).to.have.been.calledWith(404);
    expect(response.json).to.have.been.calledWith({ message: 'Product not found' });
  });

  it('Verifica se é criado um novo produto', async () => {
    sinon.stub(service, 'serviceCreateProduct').resolves(mockCreateProduct);
    const request = { body: { name: 'ProdutoX' } };
    const response = {};
    response.status = sinon.stub().returns(response);
    response.json = sinon.stub().returns();

    await productController.createProduct(request, response);


    expect(response.status).to.have.been.calledWith(201);
    expect(response.json).to.have.been.calledWith(mockCreateProduct);
  });

  it('Verifica se é atualizado um novo produto', async () => {
    sinon.stub(service, 'updateProduct').resolves({ id: 3, name: 'Martelo do Batman' });
    const request = { params: { id: 3 }, body: { name: 'Martelo do Batman' } };
    const response = {};
    response.status = sinon.stub().returns(response);
    response.json = sinon.stub().returns();

    // console.log(request, 'request')

    // console.log(response, 'response')

    await productController.updateProducts(request, response);

    // console.log(teste, 'teste');


    expect(response.status).to.have.been.calledWith(200);
    expect(response.json).to.have.been.calledWith({ id: 3, name: 'Martelo do Batman' });
  });
})
