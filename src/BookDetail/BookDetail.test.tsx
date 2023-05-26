import BookDetail from "./BookDetail";
import { render, screen } from "@testing-library/react";

import { Provider } from "react-redux";
import store from "../redux/store";

const renderWithProvider = (component: JSX.Element) => {
  return {
    ...render(<Provider store={store}>{component}</Provider>),
  };
};

describe("BookDetail", () => {
  it("renders title", () => {
    const props = {
      book: {
        id: 1,
        name: "Refactoring",
      },
    };

    renderWithProvider(<BookDetail {...props} />);

    const title = screen.getByRole("heading");
    expect(title.innerHTML).toEqual(props.book.name);
  });

  it("renders description", () => {
    const props = {
      book: {
        id: 1,
        name: "Refactoring",
        description:
          "Martin Fowler's Refactoring defined core ideas and techniques " +
          "that hundreds of thousands of developers have used to improve " +
          "their software.",
      },
    };

    renderWithProvider(<BookDetail {...props} />);

    const description = screen.getByText(props.book.description);
    expect(description).toBeInTheDocument();
  });

  it("displays the book name when no description was given", () => {
    const props = {
      book: {
        id: 1,
        name: "Refactoring",
      },
    };

    renderWithProvider(<BookDetail {...props} />);

    const description = screen.getByTestId("book-description");
    expect(description).toHaveTextContent(props.book.name);
  });

  it("renders reviews", () => {
    const props = {
      book: {
        id: 1,
        name: "Refactoring",
        description:
          "Martin Fowler’s Refactoring defined core ideas and techniques...",
        reviews: [
          {
            id: 1,
            bookId: 1,
            name: "Juntao",
            date: "2023/06/21",
            content: "Excellent work, really impressed by your efforts",
          },
        ],
      },
    };

    renderWithProvider(<BookDetail {...props} />);

    const content = screen.getByTestId("review-content");
    expect(content).toHaveTextContent(
      "Excellent work, really impressed by your efforts"
    );
  });

  it("renders review form", () => {
    const props = {
      book: {
        id: 1,
        name: "Refactoring",
        description:
          "Martin Fowler’s Refactoring defined core ideas and techniques...",
      },
    };

    renderWithProvider(<BookDetail {...props} />);

    const nameInput = screen.getByTestId("name");
    const contentInput = screen.getByTestId("content");
    const button = screen.getByTestId("submit");

    expect(nameInput).toBeInTheDocument();
    expect(contentInput).toBeInTheDocument();
    expect(button).toBeInTheDocument();
  });
});
