const { connection } = require('../DB/connection');

const selectionAllProducts = async () => {
  const result = await connection.execute('SELECT * FROM StoreManager.products');

  return result;
};

module.exports = selectionAllProducts;
