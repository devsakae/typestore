import { Request, Response } from 'express';
import jwt from 'jsonwebtoken';
import UserService from '../services/user.service';

const secret = process.env.JWT_SECRET || 'ninguemsabedomeutoken';

class UserController {
  constructor(private userService = new UserService()) { }

  public create = async (req: Request, res: Response) => {
    const response = await this.userService.create(req.body);
    const signed = jwt.sign({ data: { userId: response.id } }, secret, { algorithm: 'HS256' });
    res.status(201).json({ token: signed });
  };
}

export default UserController;