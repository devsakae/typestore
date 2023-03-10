import { Request, Response } from 'express';
import Errado from '../interfaces/error.interface';
import ProductService from '../services/product.service';
import getError from '../validations/errors';

class ProductController {
  constructor(private productService = new ProductService()) {}

  public create = async (req: Request, res: Response) => {
    try {
      const product = req.body;
      const productCreated = await this.productService.create(product);
      res.status(201).json(productCreated);
    } catch (err) {
      const error = getError(err as Errado);
      res.status(error.code).json({ message: error.message });
    }
  };

  public getAll = async (_req: Request, res: Response) => {
    const allProducts = await this.productService.getAll();
    res.status(200).json(allProducts);
  };
}

export default ProductController;
