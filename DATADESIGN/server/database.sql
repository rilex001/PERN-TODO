-- CREATE DATABASE authtodo;

-- CREATE TABLE users(
--   user_id uuid DEFAULT uuid_generate_v4(),
--   user_name VARCHAR(255) NOT NULL,
--   user_email VARCHAR(255) NOT NULL UNIQUE,
--   user_password VARCHAR(255) NOT NULL,
--   PRIMARY KEY(user_id)
-- );

-- CREATE TABLE todo(
--   todo_id SERIAL,
--   user_id UUID ,
--   description VARCHAR(255),
--   PRIMARY KEY (todo_id),
--   FOREIGN KEY (user_id) REFERENCES users(user_id)
-- );


-- INSERT INTO users (user_name, user_email, user_password) VALUES ('henry', 'henryly213@gmail.com', 'kthl8822');


CREATE DATABASE authtodolist 

--users

CREATE TABLE users(
  user_id UUID DEFAULT uuid_generate_v4(),
  user_name VARCHAR(255) NOT NULL,
  user_email VARCHAR(255) NOT NULL UNIQUE
  user_password VARCHAR(255) NOT NULL,
  PRIMARY KEY (user_id)
)

CREATE TABLE todos(
  todo_id SERIAL,
  user_id UUID,
  description VARCHAR(255) NOT NULL,
  PRIMARY KEY (todo_id),
  FOREIGN KEY (user_id) REFERENCES users(user_id)
)

-- fake users data 

insert into users (user_name, user_email, user_password) VALUES ('Nikola', 'mirkojeopasan@gmail.com', 'mrkonjic') 

-- fake todos data

insert into todos (user_id, description) VALUES ('49159f12-3e67-4bc7-b520-65e9aaa552b3', 'hello world')

select * from users INNER JOIN todos ON users.user_id = todos.user_id