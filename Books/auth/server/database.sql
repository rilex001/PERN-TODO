CREATE DATABASE authtodo;

CREATE TABLE users(
  user_id uuid DEFAULT uuid_generate_v4(),
  user_name VARCHAR(255) NOT NULL,
  user_email VARCHAR(255) NOT NULL UNIQUE,
  user_password VARCHAR(255) NOT NULL,
  PRIMARY KEY(user_id)
);

CREATE TABLE todo(
  todo_id SERIAL,
  user_id UUID ,
  description VARCHAR(255),
  PRIMARY KEY (todo_id),
  FOREIGN KEY (user_id) REFERENCES users(user_id)
);

CREATE TABLE todo(
    book_id SERIAL PRIMARY KEY,
    title VARCHAR(100),
    author VARCHAR(100),
    page INT
);

INSERT INTO users (user_name, user_email, user_password) VALUES ('henry', 'henryly213@gmail.com', 'kthl8822');


INSERT INTO book (user_id, title, author, page) VALUES ('a2497a96-ebee-443c-b110-06c1d46b05e0', 'Alchemist', 'Paulo Coelho', '244');