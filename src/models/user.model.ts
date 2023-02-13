import { Pool, ResultSetHeader } from 'mysql2/promise';
import User from '../interfaces/user.interface';

export default class UserModel {
  public connection: Pool;

  constructor(connection: Pool) {
    this.connection = connection;
  }

  public async create(user: User): Promise<User> {
    const { username, displayName, email, password } = user;
    const response = await this.connection.execute<ResultSetHeader>(
      'INSERT INTO typestore.users (username, displayName, email, password) VALUES (?, ?, ?, ?)',
      [username, displayName, email, password],
    );
    const [dataInserted] = response;
    const { insertId } = dataInserted;
    return { id: insertId, ...user };
  }

  public async login(user: User) {
    const { username, password } = user;
    const [response] = await this.connection.execute(
      'SELECT * FROM typestore.users WHERE username = ? AND password = ?',
      [username, password],
    );
    return response as User[];
  }

  public async getById(userId: number) {
    const [response] = await this.connection.execute(
      'SELECT * FROM typestore.users WHERE id = ?',
      [userId],
    );
    return response;
  }
}