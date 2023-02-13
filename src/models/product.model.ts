import { Pool, ResultSetHeader } from 'mysql2/promise';
import Product from '../interfaces/product.interface';

export default class ProductModel {
  public connection: Pool;

  constructor(connection: Pool) {
    this.connection = connection;
  }

  public async create(product: Product): Promise<Product> {
    const { name, price } = product;
    const result = await this.connection.execute<ResultSetHeader>(
      'INSERT INTO typestore.products (name, amount) VALUES (?, ?)',
      [name, price],
    );
    const [dataInserted] = result;
    const { insertId } = dataInserted;
    return { id: insertId, ...product };
  }

  public async getAll() {
    const [rows] = await this.connection.execute<ResultSetHeader>(
      'SELECT * FROM typestore.products',
    );
    return rows;
  }
}