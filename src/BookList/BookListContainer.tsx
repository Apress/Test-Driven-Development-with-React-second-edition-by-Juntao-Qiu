import useBooks from "../useBooks";
import BookList from "./BookList";
import SearchBox from "./SearchBox";

const BookListContainer = () => {
  const { books, term, setTerm } = useBooks();

  return (
    <>
      <SearchBox term={term} onSearch={setTerm} />
      <BookList books={books} />
    </>
  );
};

export default BookListContainer;
