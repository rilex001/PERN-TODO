import React, { useEffect, useState } from "react";
import { toast } from "react-toastify";

//components

import InputBook from './todolist/InputBook'
import ListBooks from './todolist/ListBooks'

const Dashboard = ({ setAuth }) => {
  const [name, setName] = useState("");
  const [allBooks, setAllBooks] = useState([])
  const [booksChange, setBooksChange] = useState(false)

  const getProfile = async () => {
    try {
      const res = await fetch("http://localhost:5000/dashboard/", {
        method: "GET",
        headers: { jwt_token: localStorage.token }
      });

      const parseData = await res.json();

      setAllBooks(parseData)

      setName(parseData[0].user_name);
    } catch (err) {
      console.error(err.message);
    }
  };

  const logout = async e => {
    e.preventDefault();
    try {
      localStorage.removeItem("token");
      setAuth(false);
      toast.success("Logout successfully");
    } catch (err) {
      console.error(err.message);
    }
  };

  useEffect(() => {
    getProfile();
    setBooksChange(false)
  }, [booksChange]);

  return (
    <div>
      <h1 className="mt-5">Dashboard</h1>
      <h2>Welcome {name}</h2>
      <button onClick={e => logout(e)} className="btn btn-primary">
        Logout
      </button>
      <InputBook setBooksChange={setBooksChange} />
      <ListBooks allBooks={allBooks} setBooksChange={setBooksChange} />
    </div>
  );
};

export default Dashboard;
