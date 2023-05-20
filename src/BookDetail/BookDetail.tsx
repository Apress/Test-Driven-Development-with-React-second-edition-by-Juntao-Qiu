import { Book } from "../types";

const getDescriptionFor = (book: Book) => {
  return book.description ? book.description : book.name;
};

const BookDetail = ({ book }: { book: Book }) => {
  return (
    <div className="detail">
      <h2 className="book-title">{book.name}</h2>
      <p className="book-description" data-testid="book-description">
        {getDescriptionFor(book)}
      </p>
    </div>
  );
};

export default BookDetail;
