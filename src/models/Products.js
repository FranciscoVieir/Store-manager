const connection = require('../DB/connection');

const allProducts = async () => {
  const [result] = await connection.execute('SELECT * FROM StoreManager.products');
  // console.log(result);
  return result;
};

const productId = async (id) => {
  const [[resultId]] = await connection
    .execute('SELECT * FROM StoreManager.products WHERE id = (?)',
      [id]);

  return resultId;
};

module.exports = { allProducts, productId };
