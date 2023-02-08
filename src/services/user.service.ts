import User from '../interfaces/user.interface';
import connection from '../models/connection';
import UserModel from '../models/user.model';
import { userCreateSchema } from '../validations/validation';

class UserService {
  public model: UserModel;

  constructor() { this.model = new UserModel(connection); }

  public async create(user: User): Promise<User> {
    await userCreateSchema.validateAsync(user);
    const userId = await this.model.create(user);
    return userId;
  }

  public async login(user: User) {
    const [response] = await this.model.login(user);
    return response;
  }

  // public async getById(userId: number) {
  //   try {
  //     const response = await this.model.getById(userId);
  //     return response;
  //   } catch (err) {
  //     return err;
  //   }
  // }
}

export default UserService;