import React, { useEffect } from "react";
import BookDetail from "./BookDetail";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "../store";
import { useParams } from "react-router";
import { fetchBookDetails } from "../bookDetailSlice";

const BookDetailContainer = () => {
  const { id = "" } = useParams<string>();
  const { book } = useSelector((state: RootState) => ({
    book: state.detail.book,
  }));

  const dispatch = useDispatch<AppDispatch>();

  useEffect(() => {
    dispatch(fetchBookDetails(id));
  }, [dispatch]);

  return <BookDetail book={book} />;
};

export default BookDetailContainer;
