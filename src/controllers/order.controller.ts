import { Request, Response } from 'express';
import Errado from '../interfaces/error.interface';
import OrderService from '../services/order.service';
import getError from '../validations/errors';
import { orderCreateSchema } from '../validations/validation';

export default class OrderController {
  constructor(private orderService = new OrderService()) {}

  public getOrders = async (req: Request, res: Response) => {
    const allOrders = await this.orderService.getOrders();
    res.status(200).json(allOrders);
  };

  public newOrder = async (req: Request, res: Response) => {
    try {
      const { body: { user: { data: { userId } }, productsIds } } = req;
      await orderCreateSchema.validateAsync({ productsIds });
      const response = await this.orderService.newOrder(
        userId as number,
        productsIds as number[],
      );
      res.status(201).json(response);
    } catch (err: unknown) {
      const error = getError(err as Errado);
      res.status(error.code).json({ message: error.message });
    }
  };
}
