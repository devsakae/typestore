import express from 'express';
import OrderController from './controllers/order.controller';
import ProductController from './controllers/product.controller';
import UserController from './controllers/user.controller';

const app = express();

app.use(express.json());

const productController = new ProductController();
const userController = new UserController();
const orderController = new OrderController();

app.post('/products', productController.create);
app.get('/products', productController.getAll);

app.post('/users', userController.create);

app.get('/orders', orderController.getOrders);

export default app;
