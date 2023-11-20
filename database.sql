CREATE DATABASE vvumarket;

CREATE TABLE hotdeals(
  deal_id SERIAL PRIMARY KEY,
  deal_name VARCHAR(200),
  description VARCHAR(300),
  price VARCHAR(20),
  contact INT(13)
);