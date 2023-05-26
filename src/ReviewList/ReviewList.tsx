import { Review } from "../types";
import ReviewItem from "./ReviewItem";

const ReviewList = ({ reviews }: { reviews: Review[] }) => {
  return (
    <div data-testid="reviews-container">
      {reviews.map((review) => (
        <ReviewItem key={review.id} review={review} />
      ))}
    </div>
  );
};

export default ReviewList;
