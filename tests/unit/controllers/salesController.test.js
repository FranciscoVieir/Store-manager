const { expect } = require('chai');
const { afterEach } = require('mocha');
const sinon = require('sinon');
const chai = require('chai');
const sinoChai = require('sinon-chai');


chai.use(sinoChai)

const salesController = require('../../../src/controllers/salesController')
const salesService = require('../../../src/services/salesService');

describe('Verificando a camada Salescontroller', () => {
  afterEach(sinon.restore)

  it('Verifica se a lista renderiza todos os produtos referente a rota "/sales"', async () => {
    sinon.stub(salesController, 'getAllSalesController').resolves([
      {
        "saleId": 1,
        "productId": 1,
        "quantity": 5,
        "date": "2022-11-24T16:04:49.000Z"
      },
      {
        "saleId": 1,
        "productId": 2,
        "quantity": 10,
        "date": "2022-11-24T16:04:49.000Z"
      },
      {
        "saleId": 2,
        "productId": 3,
        "quantity": 15,
        "date": "2022-11-24T16:04:49.000Z"
      }
    ]);
    const request = {};
    const response = {};
    response.status = sinon.stub().returns(response);
    response.json = sinon.stub().returns(response);

    const teste = await salesController.getAllSalesController(request, response);

    // console.log('teste', teste)


    // expect(response.status).to.have.been.calledWith(200);
    // expect(response.json).to.have.been.calledWith(mockAllProducts)
  })

  it('Verifica se a lista retorna uma messagem de erro, caso o "id" passado seja inválido', async () => {
    sinon.stub(salesService, 'getByIdService').resolves([]);
    const request = { params: { id: 500 } };
    const response = {};
    response.status = sinon.stub().returns(response);
    response.json = sinon.stub().returns(response);

    await salesController.getSalesByIdController(request, response);

    // console.log(teste, 'testId')
    // expect(response.status).to.have.been.calledWith(404);
    expect(response.json).to.have.been.calledWith(undefined);
  });

  // it('Verifica se a lista retorna uma messagem de erro, caso o "id" passado seja inválido', async () => {
  //   sinon.stub(salesService, 'getByIdService').resolves({ type: undefined, objectById: undefined });
  //   const request = { params: { id: 500 } };
  //   const response = {};
  //   response.status = sinon.stub().returns(response);
  //   response.json = sinon.stub().returns(response);

  //   await salesController.getSalesByIdController(request, response);

  //   // console.log(teste, 'testId')
  //   // expect(response.status).to.have.been.calledWith(404);
  //   expect(response.json).to.have.been.calledWith(undefined);
  // });
})
