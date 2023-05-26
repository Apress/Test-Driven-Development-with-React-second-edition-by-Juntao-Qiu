import { Review } from "../types";
import { Button, TextField } from "@mui/material";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { AppDispatch } from "../redux/store";
import { updateReview } from "../redux/reviewSlice";

const ReviewItem = ({ review }: { review: Review }) => {
  const [editing, setEditing] = useState<boolean>(false);
  const [content, setContent] = useState<string>(review.content);

  const dispatch = useDispatch<AppDispatch>();

  const updateReviewContent = () => {
    if (editing) {
      dispatch(
        updateReview({ reviewId: review.id, bookId: review.bookId, content })
      );
    }
    setEditing((editing) => !editing);
  };

  return (
    <div data-testid="review" className="review" key={review.id}>
      <div data-testid="name">{review.name}</div>
      {!editing ? (
        <p data-testid="review-content">{review.content}</p>
      ) : (
        <TextField
          name="content"
          label="Content"
          margin="normal"
          variant="outlined"
          multiline
          value={content}
          onChange={(e) => setContent(e.target.value)}
        />
      )}
      <Button
        variant="contained"
        color="primary"
        name="submit"
        onClick={updateReviewContent}
      >
        {!editing ? "Edit" : "Submit"}
      </Button>
    </div>
  );
};

export default ReviewItem;
