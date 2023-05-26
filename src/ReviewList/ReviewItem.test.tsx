import ReviewItem from "./ReviewItem";
import { act, render, screen } from "@testing-library/react";
import React from "react";
import userEvent from "@testing-library/user-event";

import { Provider } from "react-redux";
import store from "../redux/store";

import axios from "axios";
import exp from "constants";

jest.mock("axios");

const renderWithProvider = (component: JSX.Element) => {
  return {
    ...render(<Provider store={store}>{component}</Provider>),
  };
};

describe("ReviewItem", () => {
  it("renders", () => {
    const review = {
      id: 1,
      bookId: 1,
      name: "Juntao Qiu",
      date: "2023/06/21",
      content: "Excellent work, really impressed by your efforts",
    };

    renderWithProvider(<ReviewItem review={review} />);
    expect(screen.getByTestId("name")).toHaveTextContent("Juntao Qiu");
    expect(screen.getByTestId("review-content")).toHaveTextContent(
      "Excellent work, really impressed by your efforts"
    );
  });

  it("edit a review item", () => {
    const review = {
      id: 1,
      bookId: 1,
      name: "Juntao Qiu",
      date: "2023/06/21",
      content: "Excellent work, really impressed by your efforts",
    };

    renderWithProvider(<ReviewItem review={review} />);
    const button = screen.getByRole("button");

    expect(button).toHaveTextContent("Edit");

    act(() => {
      userEvent.click(button);
    });

    expect(button).toHaveTextContent("Submit");
  });

  it("copy content to a textarea for editing", () => {
    const review = {
      id: 1,
      bookId: 1,
      name: "Juntao Qiu",
      date: "2023/06/21",
      content: "Excellent work, really impressed by your efforts",
    };

    renderWithProvider(<ReviewItem review={review} />);

    const button = screen.getByRole("button");
    const content = screen.getByTestId("review-content");

    expect(content).toBeInTheDocument();

    act(() => {
      userEvent.click(button);
    });

    const editingContent = screen.getByRole("textbox");
    expect(content).not.toBeInTheDocument();

    expect(editingContent).toBeInTheDocument();
    expect(editingContent).toHaveValue(
      "Excellent work, really impressed by your efforts"
    );
  });

  it("update the content", () => {
    const review = {
      id: 1,
      bookId: 1,
      name: "Juntao Qiu",
      date: "2023/06/21",
      content: "Excellent work, really impressed by your efforts",
    };

    renderWithProvider(<ReviewItem review={review} />);

    const putSpy = jest.spyOn(axios, "put").mockResolvedValue({ data: review });

    const button = screen.getByRole("button");

    // enter the editing mode
    act(() => {
      userEvent.click(button);
    });

    const editingContent = screen.getByRole("textbox");
    expect(editingContent).toBeInTheDocument();

    act(() => {
      userEvent.clear(editingContent);
      userEvent.type(editingContent, "I mean this is fantastic");
    });

    // submit the form
    act(() => {
      userEvent.click(button);
    });

    expect(putSpy).toHaveBeenCalledWith(
      "http://localhost:8080/books/1/reviews/1",
      { content: "I mean this is fantastic" }
    );
  });
});
