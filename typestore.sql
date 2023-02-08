DROP SCHEMA IF EXISTS typestore;
CREATE SCHEMA IF NOT EXISTS typestore;

CREATE TABLE typestore.users (
  id INTEGER AUTO_INCREMENT PRIMARY KEY NOT NULL,
  username TEXT NOT NULL,
  displayName TEXT NOT NULL,
  password TEXT NOT NULL
  phone INTEGER NOT NULL,
);

CREATE TABLE typestore.orders (
  id INTEGER AUTO_INCREMENT PRIMARY KEY NOT NULL,
  user_id INTEGER,
  FOREIGN KEY (user_id) REFERENCES typestore.users (id)
);

CREATE TABLE typestore.products (
  id INTEGER AUTO_INCREMENT PRIMARY KEY NOT NULL,
  name TEXT NOT NULL,
  amount TEXT NOT NULL,
  order_id INTEGER,
  FOREIGN KEY (order_id) REFERENCES typestore.orders (id)
);

INSERT INTO
  typestore.users (username, displayName, phone, password)
VALUES
  ("cliente.rodrigo", "Rodrigo Sakae", 99999999, "senhadocliente"),
  ("cliente.leticia", "Letícia H S", 99999999, "minhaprimeirasenha"); 
INSERT INTO
  typestore.orders (user_id)
VALUES
  (1),
  (3),
  (2);

INSERT INTO
  typestore.products (name, amount)
VALUES
  ("Cuia chimarrão porcelana verde", "R$ 50,00");

INSERT INTO
  Trybesmith.products (name, amount, order_id)
VALUES
  (
    "Guarda chuva de veludo vermelho",
    "1 ingresso jogo do Criciúma",
    1
  ),
  ("Garrafa customizada para suco", "Post patrocinado Instagram", 2),
  ("Capinha de celular de massinha", "Um beijo", 2),
  ("Pintura corporal", "Um favor", 3);
