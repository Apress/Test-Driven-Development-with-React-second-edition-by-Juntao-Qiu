import BookList from "./BookList";
import SearchBox from "./SearchBox";
import { useDispatch, useSelector } from "react-redux";
import { fetchBooks } from "../bookListSlice";
import type { AppDispatch, RootState } from "../store";
import { useEffect } from "react";

const BookListContainer = () => {
  const { books } = useSelector((state: RootState) => ({
    books: state.list.books,
  }));

  const dispatch = useDispatch<AppDispatch>();

  useEffect(() => {
    dispatch(fetchBooks(""));
  }, [dispatch]);

  return (
    <>
      <SearchBox />
      <BookList books={books} />
    </>
  );
};

export default BookListContainer;
