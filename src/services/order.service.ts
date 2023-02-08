import Order from '../interfaces/order.interface';
import connection from '../models/connection';
import OrderModel from '../models/order.model';

export default class OrderService {
  public model: OrderModel;

  constructor() { this.model = new OrderModel(connection); }

  public async getOrders() {
    return this.model.getOrders();
  }

  public async newOrder(userId: any, productsIds: number[]): Promise<Order> {
    await this.model.newOrder(userId, productsIds);
    return { userId, productsIds };
  }
}