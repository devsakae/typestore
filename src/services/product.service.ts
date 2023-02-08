import Product from '../interfaces/product.interface';
import connection from '../models/connection';
import ProductModel from '../models/product.model';
import { productCreateSchema } from '../validations/validation';

class ProductService {
  public model: ProductModel;

  constructor() { this.model = new ProductModel(connection); }

  public async create(product: Product): Promise<Product | unknown> {
    await productCreateSchema.validateAsync(product);
    const response = await this.model.create(product);
    return response;
  }

  public async getAll() {
    return this.model.getAll();
  }
}

export default ProductService;