import React from 'react';
import './App.css';

import Typography from '@mui/material/Typography';
import BookListContainer from './BookListContainer';

function App() {
  return (
    <div>
      <Typography variant='h2' component='h2' data-test='heading'>
        Bookish
      </Typography>
      <BookListContainer />
    </div>
  );
}

export default App;
