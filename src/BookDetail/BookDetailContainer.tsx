import React from "react";
import { useBook } from "../useBook";
import BookDetail from "./BookDetail";

const BookDetailContainer = () => {
  const { book } = useBook();

  return <BookDetail book={book} />;
};

export default BookDetailContainer;
