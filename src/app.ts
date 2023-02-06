import express from 'express';
import ProductController from './controllers/product.controller';
import UserController from './controllers/user.controller';

const app = express();

app.use(express.json());

const productController = new ProductController();
const userController = new UserController();

app.post('/products', productController.create);
app.get('/products', productController.getAll);

app.post('/users', userController.create);

export default app;
