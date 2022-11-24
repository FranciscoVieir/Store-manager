const connection = require('../DB/connection');

const getAllSalesModel = async () => {
  const [allSales] = await connection.execute(
    `SELECT
      sp.sale_id as saleId,
      sp.product_id as productId,
      sp.quantity,
      sale.date as date
    FROM
      StoreManager.sales_products AS sp
    INNER JOIN
      StoreManager.sales AS sale
    ON sp.sale_id = sale.id`,
  );

  // console.log('getAllModel', allSales);

  return allSales;
};

const getAllSalesIdModel = async (saleId) => {
  const [sale] = await connection.execute(
    `SELECT
      sp.product_id as productId,
      sp.quantity,
      sa.date as date
    FROM
      StoreManager.sales_products AS sp
    INNER JOIN
      StoreManager.sales AS sa
    ON sp.sale_id = sa.id
    WHERE sale_id = (?)`,
    [saleId],
  );
  // console.log(sale, 'model saleAllId');

  return sale;
};

module.exports = {
  getAllSalesModel,
  getAllSalesIdModel,
};
