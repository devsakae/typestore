import Errado from '../interfaces/error.interface';

const getError = (err: Errado) => {
  if (err.details[0].type === 'any.required') return { code: 400, ...err.details[0] };
  if (err.details[0].type === 'array.includesRequiredUnknowns') {
    return {
      code: 422,
      message: '"productsIds" must include only numbers',
    };
  }
  return { code: 422, ...err.details[0] };
};

export default getError;
