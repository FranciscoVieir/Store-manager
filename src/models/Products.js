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

const createProduct = async (name) => {
  const query = 'INSERT StoreManager.products (name) VALUES (?);';
  const [result] = await connection.execute(query, [name]);
  // console.log(result, 'create');
  return result;
};

const putProduct = async (name, id) => {
  const [updateResult] = await connection
    .execute('UPDATE StoreManager.products SET name = (?) WHERE id = (?);', [name, id]);
  // console.log(updateResult, 'update');

  return updateResult;
};

const deleteProduct = async (id) => {
  const result = await connection
    .execute('DELETE FROM StoreManager.products WHERE id = (?);', [id]);
  // console.log('deleteModel', result);
  return result;
};

module.exports = { allProducts, productId, createProduct, putProduct, deleteProduct };
