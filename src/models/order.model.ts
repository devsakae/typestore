import { Pool } from 'mysql2/promise';

export default class OrderModel {
  public connection: Pool;

  constructor(connection: Pool) {
    this.connection = connection;
  }

  public async getOrders() {
    const query = `SELECT o.id, o.user_id AS userId,
    JSON_ARRAYAGG(p.id) as productsIds FROM Trybesmith.orders AS o
    INNER JOIN Trybesmith.products AS p ON o.id = p.order_id GROUP BY o.id`;
    const [rows] = await this.connection.execute(query);
    return rows;
  }
}