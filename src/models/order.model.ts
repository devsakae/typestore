import { Pool, ResultSetHeader } from 'mysql2/promise';

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

  public async checkUserId(userId: number) {
    const query = 'SELECT id FROM Trybesmith.users WHERE id = ?';
    const [rows] = await this.connection.execute(query, [userId]);
    console.log('MODEL ROWS:', rows);
    return rows;
  }

  public async newOrder(id: number, productIds: number[]) {
    const variaveis = productIds.map((_) => '?').join(', ');
    const newVar = `(${variaveis})`;
    const orderQuery = 'INSERT INTO Trybesmith.orders (user_id) VALUES (?)';
    const [{ insertId }] = await this.connection.execute<ResultSetHeader>(
      orderQuery,
      [id],
    );
    const productQuery = `UPDATE Trybesmith.products SET order_id = ? WHERE id IN ${newVar}`;
    const [{ affectedRows }] = await this.connection.execute<ResultSetHeader>(
      productQuery,
      [insertId, ...productIds],
    );
    return affectedRows;
  }
}
