const { expect } = require('chai');
const { afterEach } = require('mocha');
const Sinon = require('sinon');
const sinon = require('sinon');
const connection = require('../../../src/DB/connection');

const productModel = require('../../../src/models/Products');

const { MockAllProducts, MockProductById } = require('../Mocks/mocks');

describe('Verificando o funcionamento das services "AllProducts e productById"', () => {

  afterEach(sinon.restore)

  it('Verifica se a lista contèm todos os produtos no arquivo "Model"', async () => {
    sinon.stub(connection, 'execute').resolves([MockAllProducts]);

    const result = await productModel.allProducts();

    expect(result).to.be.an('array');

    expect(result).to.be.deep.equal(MockAllProducts)
  })

  it('Verifica se a lista retorna um objeto específico pelo "id" no arquivo "Model"', async () => {
    sinon.stub(connection, 'execute').resolves(MockProductById);

    const result = await productModel.productId(1);

    expect(result).to.be.deep.equal(MockProductById);
  });
})
