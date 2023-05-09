import useBooks from "./useBooks";
import BookList from "./BookList";

const BookListContainer = () => {
  const {loading, error, books} = useBooks();

  return <BookList books={books} />
}

export default BookListContainer;