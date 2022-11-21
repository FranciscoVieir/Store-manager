const { expect } = require('chai');
const { afterEach } = require('mocha');
const Sinon = require('sinon');
const sinon = require('sinon');
const connection = require('../../../src/DB/connection');

const productModel = require('../../../src/models/Products');

const { mockAllProducts, mockProductById, mockUptade } = require('../Mocks/mocks');

describe('Verificando a camada models', () => {

  afterEach(sinon.restore)

  it('Verifica se a lista contèm todos os produtos no arquivo "Model"', async () => {
    sinon.stub(connection, 'execute').resolves([mockAllProducts]);

    const result = await productModel.allProducts();

    expect(result).to.be.an('array');

    expect(result).to.be.deep.equal(mockAllProducts)
  })

  it('Verifica se a lista retorna um objeto específico pelo "id" no arquivo "Model"', async () => {
    sinon.stub(connection, 'execute').resolves([[mockProductById]]);

    const result = await productModel.productId(1);

    expect(result).to.be.deep.equal(mockProductById);
  });

  it('Verifica se retorna um ubjeto com', async () => {
    sinon.stub(connection, 'execute').resolves([mockUptade]);

    const result = await productModel.putProduct('Martelo do batman', 1);

    console.log(result, 'teste')

    // expect(result).to.be.deep.equal(1)
  });
})
