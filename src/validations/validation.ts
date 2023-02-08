import Joi from 'joi';

const productCreateSchema = Joi.object({
  name: Joi.string().min(3).required(),
  amount: Joi.string().min(3).required(),
});

const userCreateSchema = Joi.object({
  username: Joi.string().min(3).required(),
  vocation: Joi.string().min(3).required(),
  level: Joi.number().min(1).required(),
  password: Joi.string().min(8).required(),
});

const orderCreateSchema = Joi.object({
  productsIds: Joi.array().items(Joi.number().required()).required(),
});

export { productCreateSchema, userCreateSchema, orderCreateSchema };
