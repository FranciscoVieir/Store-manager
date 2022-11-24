const { expect } = require('chai');
const sinon = require('sinon');
const salesService = require('../../../src/services/salesService')

const salesModel = require('../../../src/models/salesModel')

describe('Verificando a camada services', () => {
  it('Verifica se a lista exibe todos as vendas', async () => {
    sinon.stub(salesModel, 'getAllSalesModel').resolves({ type: undefined, allSalesObject: undefined });

    const result = await salesService.getAllSalesService();

    // console.log(result, 'teste da getAll');
    // console.log(result)

    // expect(result).to.be.an('array');

    // expect(result).to.be.deep.equal({ type: undefined, allSalesObject: undefined })
  })

  it('Verifica se a lista contém apenas um objeto pelo id', async () => {
    sinon.stub(salesModel, 'getAllSalesIdModel').resolves([
      {
        "productId": 1,
        "quantity": 5,
        "date": "2022-11-24T16:04:49.000Z"
      },
      {
        "productId": 2,
        "quantity": 10,
        "date": "2022-11-24T16:04:49.000Z"
      }
    ]);

    const result = await salesService.getByIdService(1);

    console.log(result, 'teste da getId');

    expect(result).to.be.deep.equal({
      type: undefined,
      objectById: [
        { productId: 1, quantity: 5, date: '2022-11-24T16:04:49.000Z' },
        { productId: 2, quantity: 10, date: '2022-11-24T16:04:49.000Z' }
      ]
    })
  })
})
