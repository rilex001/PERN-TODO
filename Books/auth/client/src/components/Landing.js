import React from 'react'
import { Link } from 'react-router-dom'


const Landing = () => {
    return (
        <>
        <div className='navigation'>
            <p className='logo'>BooksProject</p>
            {/* <p>Sign In and start building your todo list</p> */}
            <div className='buttoncontainer'>
            <Link to="/login" className="button">Login</Link>
            <Link to="/register" className="button">Register</Link>
            </div>
        </div>
        <div className='wrapper'>
            <p className='content'>Welcome to Books Project</p>
            <p>Books list project is </p>
        </div>
        </>
    )
}

export default Landing;