import React from 'react';
import './App.css';

import Typography from '@mui/material/Typography';
import BookListContainer from './BookList/BookListContainer';
import BookDetailContainer from './BookDetail/BookDetailContainer';

import {
  Routes,
  Route,
} from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <Typography variant='h2' component='h2' data-test='heading'>
        Bookish
      </Typography>
      <Routes>
        <Route path='/' element={<BookListContainer />}/>
        <Route path='/books/:id' element={<BookDetailContainer />}/>
      </Routes>
    </div>
  );
}

export default App;
