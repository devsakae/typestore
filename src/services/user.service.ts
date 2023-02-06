import User from '../interfaces/user.interface';
import connection from '../models/connection';
import UserModel from '../models/user.model';

class UserService {
  public model: UserModel;

  constructor() { this.model = new UserModel(connection); }

  public create(user: User): Promise<User> {
    const userId = this.model.create(user);
    return userId;
  }
}

export default UserService;