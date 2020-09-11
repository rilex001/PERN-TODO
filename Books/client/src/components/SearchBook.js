import React, { useState } from 'react'

export default function SearchBook() {

    const [search, setSearch] = useState()
    const [book, setBook] = useState('')

    const onSubmitForm = async e => {
        e.preventDefault();
        try {
          const response = await fetch(`http://localhost:5000/users/?name=${search}`);
    
          const parseResponse = await response.json();
          setBook(parseResponse);
          console.log(book)
        } catch (err) {
          console.error(err.message);
        }
      };

    return (
        <>
            <form className="d-flex" onSubmit={onSubmitForm} >
                <input 
                    type='text' 
                    placeholder='Search' 
                    className='form-control mt-2'
                    value={search} 
                    onChange={e => setSearch(e.target.value)}
                />
            </form>  

{/* 
            <table className="table my-5">
          <thead>
            <tr>
              <th>First Name</th>
              <th>Last Name</th>
            </tr>
          </thead>
          <tbody>
            {book.map(user => (
              <tr key={user.book_id}>
                <td>{user.title}</td>
                <td>{user.author}</td>
              </tr>
            ))}
          </tbody>
        </table>
        {book.length === 0 && <p>No Results Found</p>}
       */}

{/* {console.log('Ovo je niz' + book)} */}

        </>
    )
}
