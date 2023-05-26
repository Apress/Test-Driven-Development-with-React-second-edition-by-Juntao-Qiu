import { Book } from "../types";
import ReviewList from "../ReviewList/ReviewList";
import ReviewForm from "./ReviewForm";

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
      <ReviewForm book={book} />
      {book.reviews && <ReviewList reviews={book.reviews} />}
    </div>
  );
};

export default BookDetail;
