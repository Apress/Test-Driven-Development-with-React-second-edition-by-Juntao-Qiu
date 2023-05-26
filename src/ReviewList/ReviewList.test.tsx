import React from "react";
import ReviewList from "./ReviewList";
import { render, screen } from "@testing-library/react";

import { Provider } from "react-redux";
import store from "../redux/store";

const renderWithProvider = (component: JSX.Element) => {
  return {
    ...render(<Provider store={store}>{component}</Provider>),
  };
};

describe("ReviewList", () => {
  it("renders an empty list", () => {
    const reviews = [
      {
        id: 1,
        bookId: 1,
        name: "Juntao Qiu",
        date: "2023/06/01",
        content: "Excellent work, really impressed by your efforts",
      },
    ];

    renderWithProvider(<ReviewList reviews={reviews} />);
    expect(screen.getByTestId("reviews-container")).toBeInTheDocument();
  });

  it("renders a list when data is passed", () => {
    const reviews = [
      {
        id: 1,
        bookId: 1,
        name: "Juntao Qiu",
        date: "2023/06/21",
        content: "Excellent work, really impressed by your efforts",
      },
      {
        id: 2,
        bookId: 1,
        name: "Abruzzi Kim",
        date: "2023/06/22",
        content: "What a great book",
      },
    ];

    renderWithProvider(<ReviewList reviews={reviews} />);

    const items = screen.getAllByTestId("review");

    expect(items.length).toBe(2);
  });
});
