const { expect } = require('chai');
const { afterEach } = require('mocha');
const Sinon = require('sinon');
const sinon = require('sinon');
const connection = require('../../../src/DB/connection');

const { mockGetAllSales } = require('../Mocks/mocks');

const salesModel = require('../../../src/models/salesModel');

describe('Verificando a camada models', () => {

  afterEach(sinon.restore)

  it('Verifica se a "sales model" retorna um array', async () => {
    sinon.stub(connection, 'execute').resolves([mockGetAllSales]);

    const result = await salesModel.getAllSalesModel();

    // console.log(result, 'result')

    // expect(result).to.be.an('array');

    expect(result).to.be.deep.equal(mockGetAllSales)
  })

  it('Verifica se a salesModel "getById" retorna apenas um objeto específico', async () => {
    sinon.stub(connection, 'execute').resolves([mockGetAllSales]);

    const result = await salesModel.getAllSalesIdModel()

    // console.log(result, 'result by id')

    // expect(result).to.be.an('array');

    expect(result).to.be.deep.equal(mockGetAllSales)
  })
})
