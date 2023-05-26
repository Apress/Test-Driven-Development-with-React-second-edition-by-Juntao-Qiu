import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { Review } from "../types";

type AddReviewRequest = {
  id: number;
  name: string;
  content: string;
};

export const addReview = createAsyncThunk<Review, AddReviewRequest>(
  "reviews/addReview",
  async ({ id, name, content }: AddReviewRequest) => {
    try {
      const response = await axios.post(
        `http://localhost:8080/books/${id}/reviews`,
        {
          name,
          content,
        }
      );
      return response.data;
    } catch (error) {
      throw error;
    }
  }
);

type UpdateReviewRequest = {
  bookId: number;
  reviewId: number;
  content: string;
};

export const updateReview = createAsyncThunk<Review, UpdateReviewRequest>(
  "reviews/updateReview",
  async ({ bookId, reviewId, content }: UpdateReviewRequest) => {
    try {
      const response = await axios.put(
        `http://localhost:8080/books/${bookId}/reviews/${reviewId}`,
        { content }
      );
      return response.data;
    } catch (error) {
      throw error;
    }
  }
);

type ReviewSliceType = {
  review?: Review;
};

const initialState: ReviewSliceType = {};

const reviewSlice = createSlice({
  name: "reviews",
  initialState: initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(addReview.fulfilled, (state, action) => {
      state.review = action.payload;
    });

    builder.addCase(updateReview.fulfilled, (state, action) => {
      state.review = action.payload;
    });
  },
});

export default reviewSlice.reducer;
