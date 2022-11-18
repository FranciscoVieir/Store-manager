const { expect } = require('chai');
const sinon = require('sinon');
const service = require('../../../src/services/productsServices')

const productsModel = require('../../../src/models/Products')
const { mockAllProducts, mockProductById } = require('../Mocks/mocks');

describe('Verificando o funcionamento das services "AllProducts e productById"', () => {
  it('Verifica se a lista contèm todos os produtos', async () => {
    sinon.stub(productsModel, 'allProducts').resolves(mockAllProducts);

    const result = await service.getAllProducts();
    console.log(result)

    expect(result).to.be.an('array');

    expect(result).to.be.deep.equal(mockAllProducts)
  })

  it('Verifica se a lista retorna um objeto específico pelo "id"', async () => {
    sinon.stub(productsModel, 'productId').resolves(mockProductById);

    const result = await service.getProductById(1);

    expect(result).to.be.deep.equal(mockProductById);
  });
})
