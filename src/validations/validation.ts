import Joi from 'joi';

const productCreateSchema = Joi.object({
  name: Joi.string().min(3).required(),
  price: Joi.number().min(0).required(),
});

const userCreateSchema = Joi.object({
  username: Joi.string().trim().min(3).required(),
  displayName: Joi.string().min(3),
  password: Joi.string().min(8).required(),
  email: Joi.string().required(),
});

const orderCreateSchema = Joi.object({
  productsIds: Joi.array().items(Joi.number().required()).required(),
});

export { productCreateSchema, userCreateSchema, orderCreateSchema };
