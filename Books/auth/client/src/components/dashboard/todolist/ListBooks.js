import React, { Fragment, useEffect, useState } from "react";

import EditBook from "./EditBook";

const ListBooks = ({ allBooks, setBooksChange }) => {
  const [books, setBooks] = useState([]);
  const [select, setSelect] = useState()
  const [search, setSearch] = useState('')

  //delete todo function

  const deleteBook = async id => {
    try {
      const deleteBook = await fetch(`http://localhost:5000/dashboard/books/${id}`, {
        method: "DELETE",
        headers: {jwt_token : localStorage.token}
      });

      setBooks(books.filter(book => book.book_id !== id));
    } catch (err) {
      console.error(err.message);
    }
  };

  // const getBooks = async () => {
  //   try {
  //     const response = await fetch("http://localhost:5000/books");
  //     const jsonData = await response.json();

  //     setBooks(jsonData);
  //   } catch (err) {
  //     console.error(err.message);
  //   }
  // };

  useEffect(() => {
    setBooks(allBooks)
  }, [allBooks]);

 

  if(select === 'title') {
    books.sort((a, b) => (a.title > b.title) ? 1 : -1)
  } else if(select === 'title1') {
    books.sort((a, b) => (a.title < b.title) ? 1 : -1)
  } else if(select === 'author') {
    books.sort((a, b) => (a.author > b.author) ? 1 : -1)
  } else if(select === 'author1') {
    books.sort((a, b) => (a.author < b.author) ? 1 : -1)
  } else if(select === 'page') {
    books.sort((a, b) => (a.page > b.page) ? 1 : -1)
  } else if(select === 'page1') {
    books.sort((a, b) => (a.page < b.page) ? 1 : -1)
  }

  const filteredData = books.filter(item => {
    return item.title.toLowerCase().indexOf( search.toLowerCase() ) !== -1
  });
  
  return (
    <Fragment>

        <input 
            className="form-control m-2" 
            placeholder="Search for a book..." 
            value={search}
            onChange={e => setSearch(e.target.value)}
        />

      <select id="sort" value={select} onChange={e => setSelect(e.target.value)}>
                <option value="">Sort by</option>
                <option value="title">title (A-Z)</option>
                <option value="title1">title (Z-A)</option>
                <option value="author">author (A-Z)</option>
                <option value="author1">author (Z-A)</option>
                <option value="page">page increase</option>
                <option value="page1">page decrease</option>
      </select> 

   


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
          {filteredData.length !== 0 && 
            filteredData[0].book_id !== null && 
              filteredData.map(book => (
            <tr key={book.book_id}>
              <td>{book.title}</td>
              <td>{book.author}</td>
              <td>{book.page}</td>
              <td>
                <EditBook book={book} setBooksChange={setBooksChange}/>
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