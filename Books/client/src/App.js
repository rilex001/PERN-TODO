import React from 'react';
import './App.css';
import InputBook from './components/InputBook';
import ListBooks from './components/ListBooks';
import SearchBook from './components/SearchBook';

function App() {
  return (
    <div>
      <div className='container'>
        <InputBook />
        <SearchBook />
        <ListBooks />
      </div>
    </div>
  );
}

export default App;
