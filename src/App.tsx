import React from 'react';
import './App.css';

import Typography from '@mui/material/Typography';
import BookListContainer from './BookListContainer';
import BookDetailContainer from './BookDetailContainer';

import {
  Routes,
  Route,
} from 'react-router-dom';

function App() {
  return (
    <div>
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
