import { NextFunction, Request, Response } from 'express';
import jwt, { JwtPayload } from 'jsonwebtoken';

const secret = process.env.JWT_SECRET || 'ninguemsabedomeutoken';

const validateToken = async (req: Request, res: Response, next: NextFunction) => {
  try {
    if (!req.headers.authorization) { return res.status(401).json({ message: 'Token not found' }); }
    const { headers: { authorization } } = req;
    const user = jwt.verify(authorization, secret) as JwtPayload;
    req.body.user = user;
    next();
  } catch (err) {
    return res.status(401).json({ message: 'Invalid token' });
  }
};

export default validateToken;
