import { Request, Response } from 'express';
import jwt from 'jsonwebtoken';
import UserService from '../services/user.service';
import getError from '../validations/errors';

const secret = process.env.JWT_SECRET || 'ninguemsabedomeutoken';

class UserController {
  constructor(private userService = new UserService()) { }

  public create = async (req: Request, res: Response) => {
    try {
      const response = await this.userService.create(req.body);
      const signed = jwt.sign({ data: { userId: response.id } }, secret, { algorithm: 'HS256' });
      res.status(201).json({ token: signed });
    } catch (err: any) {
      const errorCode = getError(err);
      res.status(errorCode).json({ message: err.message });
    }
  };

  public login = async (req: Request, res: Response) => {
    const sent = req.body;
    if (!sent.username) return res.status(400).json({ message: '"username" is required' });
    if (!sent.password) return res.status(400).json({ message: '"password" is required' });
    const response = await this.userService.login(sent);
    if (!response || response.password !== sent.password) {
      return res.status(401).json({ message: 'Username or password invalid' });
    }
    const token = jwt.sign(
      { data: { userId: response.id } },
      secret,
      { expiresIn: '12h', algorithm: 'HS256' },
    );
    res.status(200).json({ token });
  };
}

export default UserController;