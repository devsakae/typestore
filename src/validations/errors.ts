const getError = (err: any) => {
  if (err.details[0].type === 'any.required') return 400;
  return 422;
};

export default getError;