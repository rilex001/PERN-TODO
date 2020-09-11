import React, { useState, useEffect } from 'react'



const InputBook = () => {

    const [title, setTitle] = useState()
    const [author, setAuthor] = useState()
    const [page, setPage] = useState()

    const onSubmitForm = async e => {
        e.preventDefault();
        try {
          const body = { title, author, page };
          const response = await fetch("http://localhost:5000/books", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(body)
          });
    
          window.location = "/";
        } catch (err) {
          console.error(err.message);
        }
      };

    return (
        <>
            <h1 className='text-center my-5'>Input Book</h1>
            <form className='' onSubmit={onSubmitForm}  >
                <input 
                    type='text' 
                    placeholder='Add book' 
                    className='form-control mt-3'
                    value={title} 
                    onChange={e => setTitle(e.target.value)}
                />
                <input 
                    type='text' 
                    placeholder='Add author' 
                    className='form-control mt-2'
                    value={author} 
                    onChange={e => setAuthor(e.target.value)}
                />
                <input 
                    type='text' 
                    placeholder='page' 
                    className='form-control mt-2'
                    value={page} 
                    onChange={e => setPage(e.target.value)}
                />
                <div className='d-flex justify-content-center mt-2'>
                <button className='btn btn-success'>Add</button>
                </div>
                
            </form>
        </>
    )
}

export default InputBook