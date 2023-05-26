import React, { useEffect } from "react";
import BookDetail from "./BookDetail";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "../redux/store";
import { useParams } from "react-router";
import { fetchBookDetails } from "../redux/bookDetailSlice";

const BookDetailContainer = () => {
  const { id } = useParams<string>();
  const { book } = useSelector((state: RootState) => ({
    book: state.detail.book,
  }));

  const dispatch = useDispatch<AppDispatch>();

  useEffect(() => {
    dispatch(fetchBookDetails(Number(id)));
  }, [dispatch, id]);

  return <BookDetail book={book} />;
};

export default BookDetailContainer;
