import React, { Fragment, useEffect, useState } from "react";

import EditBook from "./EditBook";

const ListBooks = () => {
  const [books, setBooks] = useState([]);
  const [drop, setdrop] = useState('Sala mala')

  //delete todo function

  const deleteBook = async id => {
    try {
      const deleteBook = await fetch(`http://localhost:5000/books/${id}`, {
        method: "DELETE"
      });

      setBooks(books.filter(book => book.book_id !== id));
    } catch (err) {
      console.error(err.message);
    }
  };

  const getBooks = async () => {
    try {
      const response = await fetch("http://localhost:5000/books");
      const jsonData = await response.json();

      setBooks(jsonData);
    } catch (err) {
      console.error(err.message);
    }
  };

  useEffect(() => {
    getBooks();
  }, []);

  const handleChange = (e) => {
    setdrop(e.target.value)
  }

  const handleSubmit = (e) => {
    e.preventDefault();
  }

  const mirko = books.sort((a, b) => (a.page < b.page) ? 1 : -1)
  const marko = books.sort((a, b) => (a.author < b.author) ? 1 : -1)
  const misko = books.sort((a, b) => (a.title > b.title) ? 1 : -1)
  console.log(misko)

  return (
    <Fragment>
      <form onSubmit={this.handleSubmit}>
        <label>
          Pick your favorite flavor:
          <select value={this.state.drop} onChange={this.handleChange}>
            <option value="grapefruit">Grapefruit</option>
            <option value="lime">Lime</option>
            <option value="coconut">Coconut</option>
            <option value="mango">Mango</option>
          </select>
        </label>
        <input type="submit" value="Submit" />
      </form>

      {" "}
      <table class="table mt-5 text-center">
        <thead  className="bg-info">
          <tr>
            <th>Book</th>
            <th>Author</th>
            <th>Page</th>
            <th>Edit</th>
            <th>Delete</th>
          </tr>
        </thead>
        <tbody>
          {/*<tr>
            <td>John</td>
            <td>Doe</td>
            <td>john@example.com</td>
          </tr> */}
          {books.map(book => (
            <tr key={book.book_id}>
              <td>{book.title}</td>
              <td>{book.author}</td>
              <td>{book.page}</td>
              <td>
                <EditBook book={book} />
              </td>
              <td>
                <button
                  className="btn btn-danger"
                  onClick={() => deleteBook(book.book_id)}
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </Fragment>
  );
};

export default ListBooks;