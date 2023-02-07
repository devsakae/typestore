import { Request, Response } from 'express';
import jwt from 'jsonwebtoken';
import UserService from '../services/user.service';

const secret = process.env.JWT_SECRET || 'ninguemsabedomeutoken';

class UserController {
  constructor(private userService = new UserService()) { }

  public async create(req: Request, res: Response) {
    const response = await this.userService.create(req.body);
    const signed = jwt.sign({ data: { userId: response.id } }, secret, { algorithm: 'HS256' });
    res.status(201).json({ token: signed });
  }

  // public login = async (req: Request, res: Response) => {
  //   const response = await this.userService.login(req.body);
  //   res.status(666).json(response);
  // };

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