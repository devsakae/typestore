import connection from '../models/connection';
import OrderModel from '../models/order.model';

export default class OrderService {
  public model: OrderModel;

  constructor() { this.model = new OrderModel(connection); }

  public getOrders() {
    return this.model.getOrders();
  }
}