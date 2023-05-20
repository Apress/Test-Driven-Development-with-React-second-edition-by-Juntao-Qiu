import useBooks from "../useBooks";
import BookList from "./BookList";
import {TextField} from "@mui/material";
import {useEffect, useState} from "react";
import axios from "axios";

const BookListContainer = () => {
  const { books, term, setTerm } = useBooks();

  return <>
    <TextField
      label='Search'
      value={term}
      data-test='search'
      onChange={(e) => setTerm(e.target.value)}
      margin='normal'
      variant='outlined'
    />
    <BookList books={books} />
    </>;
};

export default BookListContainer;
