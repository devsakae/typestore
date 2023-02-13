DROP SCHEMA IF EXISTS typestore;
CREATE SCHEMA IF NOT EXISTS typestore;

CREATE TABLE typestore.users (
  id INTEGER AUTO_INCREMENT PRIMARY KEY NOT NULL,
  username TEXT NOT NULL,
  email TEXT NOT NULL,
  displayName TEXT NOT NULL,
  password TEXT NOT NULL
);

CREATE TABLE typestore.orders (
  id INTEGER AUTO_INCREMENT PRIMARY KEY NOT NULL,
  user_id INTEGER,
  FOREIGN KEY (user_id) REFERENCES typestore.users (id)
);

CREATE TABLE typestore.products (
  id INTEGER AUTO_INCREMENT PRIMARY KEY NOT NULL,
  name TEXT NOT NULL,
  amount DOUBLE NOT NULL,
  order_id INTEGER,
  FOREIGN KEY (order_id) REFERENCES typestore.orders (id)
);

INSERT INTO
  typestore.users (username, displayName, email, password)
VALUES
  ("gerente", "Gerente da loja", "gerente@loja.com.br", "122333"),
  ("supervisor", "Supervisor da loja", "supervisor@loja.com.br", "123456"); 
INSERT INTO
  typestore.orders (user_id)
VALUES
  (1),
  (1),
  (2);

INSERT INTO
  typestore.products (name, amount)
VALUES
  ("Toalha de mesa bordada tema flores", 79.9);

INSERT INTO
  typestore.products (name, amount, order_id)
VALUES
  (
    "Gorro de lã tema natal",
    24.9,
    1
  ),
  ("Pano de louça tema universo", 5.9, 2),
  ("Pano de louça tema frutas", 5.9, 2),
  ("Kit de 3 panos de louças sortidos", 16, 3);
