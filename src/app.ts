import express from 'express';
import ProductController from './controllers/product.controller';

const app = express();

app.use(express.json());

const productController = new ProductController();

app.post('/products', productController.create);
app.get('/products', productController.getAll);

export default app;
