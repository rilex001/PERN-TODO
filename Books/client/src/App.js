import React from 'react';
import './App.css';
import InputBook from './components/InputBook';
import ListBooks from './components/ListBooks';

function App() {
  return (
    <>
      <div className='container'>
        <InputBook />
        <ListBooks />
      </div>
    </>
  );
}

export default App;
