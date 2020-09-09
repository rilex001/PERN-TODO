CREATE DATABASE booksproject 


CREATE TABLE todo(
    book_id SERIAL PRIMARY KEY,
    title VARCHAR(100),
    author VARCHAR(100),
    page INT
);