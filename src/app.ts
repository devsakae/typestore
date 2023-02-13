import express from 'express';
import OrderController from './controllers/order.controller';
import ProductController from './controllers/product.controller';
import UserController from './controllers/user.controller';
import validateToken from './validations/token';

const app = express();

app.use(express.json());

const productController = new ProductController();
const userController = new UserController();
const orderController = new OrderController();

app.post('/produtos', productController.create);
app.get('/produtos', productController.getAll);
app.post('/staff', userController.create);
app.get('/pedidos', orderController.getOrders);
app.post('/pedidos', validateToken, orderController.newOrder);
app.post('/login', userController.login);

export default app;
