import { Button, TextField } from "@mui/material";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { AppDispatch } from "../redux/store";
import { addReview } from "../redux/reviewSlice";
import { fetchBookDetails } from "../redux/bookDetailSlice";
import { Book } from "../types";

const ReviewForm = ({ book }: { book: Book }) => {
  const [name, setName] = useState<string>("");
  const [content, setContent] = useState<string>("");
  const dispatch = useDispatch<AppDispatch>();

  const handleSubmit = () => {
    dispatch(addReview({ id: book.id, name, content }));
    setTimeout(() => {
      dispatch(fetchBookDetails(book.id));
    }, 0);
  };

  return (
    <form noValidate autoComplete="off">
      <TextField
        label="Name"
        name="name"
        margin="normal"
        variant="outlined"
        data-testid="name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />

      <TextField
        name="content"
        label="Content"
        margin="normal"
        variant="outlined"
        multiline
        data-testid="content"
        value={content}
        onChange={(e) => setContent(e.target.value)}
      />

      <Button
        variant="contained"
        color="primary"
        name="submit"
        data-testid="submit"
        onClick={() => handleSubmit()}
      >
        Submit
      </Button>
    </form>
  );
};

export default ReviewForm;
