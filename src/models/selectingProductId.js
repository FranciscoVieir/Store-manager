const { connection } = require('../DB/connection');

const selectionAllProducts = async (id) => {
  const resultId = await connection.execute('SELECT * FROM StoreManager.products WHERE id = (?)',
    [id]);

  return resultId;
};

module.exports = selectionAllProducts;
