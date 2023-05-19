import React from "react";
import {Book} from "./types";

const BookList = ({books}: { books: Book[] }) => {
  return <div data-test='book-list'>
    {
      books.map(book => (<div className='book-item' key={book.id}>
        <h2 className='title'>{book.name}</h2>
        <a href={`/books/${book.id}`}>View Details</a>
      </div>))
    }
  </div>;
}

export default BookList;