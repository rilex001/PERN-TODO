import React, { Fragment, useState } from "react";

const EditBook = ({ book, setBooksChange }) => {
  const [title, setTitle] = useState(book.title);
  const [author, setAuthor] = useState(book.author);
  const [page, setPage] = useState(book.page)
 
  //edit description function

  const updateBooks = async e => {
    e.preventDefault();
    try {
      const body = { title, author, page };

      const myHeaders = new Headers()

      myHeaders.append("Content-Type", "application/json")
      myHeaders.append("jwt_token", localStorage.token)

       await fetch(
        `http://localhost:5000/dashboard/books/${book.book_id}`,
        {
          method: "PUT",
          headers: myHeaders,
          body: JSON.stringify(body)
        }
      );

      setBooksChange(true)

      // window.location = "/";
    } catch (err) {
      console.error(err.message);
    }
  };

  return (
    <Fragment>
      <button
        type="button"
        className="btn btn-warning"
        data-toggle="modal"
        data-target={`#id${book.book_id}`}
      >
        Edit
      </button>

      {/* 
        id = id10
      */}
      <div
        className="modal"
        id={`id${book.book_id}`}
        onClick={() => setTitle(book.title)}
      >
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h4 className="modal-title">Edit Todo</h4>
              <button
                type="button"
                className="close"
                data-dismiss="modal"
                onClick={() => setTitle(book.title)}
              >
                &times;
              </button>
            </div>

            <div className="modal-body">
              <input
                type="text"
                className="form-control"
                value={title}
                onChange={e => setTitle(e.target.value)}
              />
              <input
                type="text"
                className="form-control"
                value={author}
                onChange={e => setAuthor(e.target.value)}
              />
              <input
                type="text"
                className="form-control"
                value={page}
                onChange={e => setPage(e.target.value)}
              />
            </div>

            <div className="modal-footer">
              <button
                type="button"
                className="btn btn-warning"
                data-dismiss="modal"
                onClick={e => updateBooks(e)}
              >
                Edit
              </button>
              <button
                type="button"
                className="btn btn-danger"
                data-dismiss="modal"
                onClick={() => setTitle(book.title)}
              >
                Close
              </button>
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default EditBook;