import useBooks from "../useBooks";
import BookList from "./BookList";

const BookListContainer = () => {
  const { books } = useBooks();

  return <BookList books={books} />;
};

export default BookListContainer;
