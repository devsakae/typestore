import app from './app';

const PORT = 3000;

const server = app.listen(PORT, () => console.log(
  `Sistema TYPESTORE rodando em http://localhost:${PORT}`,
));

export default server;
