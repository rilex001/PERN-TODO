import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { toast } from "react-toastify";


const Landing = ({ setAuth }) => {
    const [inputs, setInputs] = useState({
        email: "",
        password: "",
        name: ""
      });
    
    const { email, password, name } = inputs;

    const onChange = e =>
    setInputs({ ...inputs, [e.target.name]: e.target.value });

  const onSubmitForm = async e => {
    e.preventDefault();
    try {
      const body = { email, password, name };
      const response = await fetch(
        "http://localhost:5000/authentication/register",
        {
          method: "POST",
          headers: {
            "Content-type": "application/json"
          },
          body: JSON.stringify(body)
        }
      );
      const parseRes = await response.json();

      if (parseRes.jwtToken) {
        localStorage.setItem("token", parseRes.jwtToken);
        setAuth(true);
        toast.success("Register Successfully");
      } else {
        setAuth(false);
        toast.error(parseRes);
      }
    } catch (err) {
      console.error(err.message);
    }
  };

  
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
            <p className='content'>Welcome to BooksProject</p>
            <p>y dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown </p>
        </div>

        <div className='formcontainer'>
        <h3>Sign Up</h3>
        <form onSubmit={onSubmitForm}>
        <input
          type="text"
          name="email"
          value={email}
          placeholder="email"
          onChange={e => onChange(e)}
          className="form-control my-3"
        />
        <input
          type="password"
          name="password"
          value={password}
          placeholder="password"
          onChange={e => onChange(e)}
          className="form-control my-3"
        />
        <input
          type="text"
          name="name"
          value={name}
          placeholder="name"
          onChange={e => onChange(e)}
          className="form-control my-3"
        />
        <button className="btn btn-success btn-block">Submit</button>
      </form>
      <Link to="/login">login</Link>
      </div>
        </>
    )
}

export default Landing;