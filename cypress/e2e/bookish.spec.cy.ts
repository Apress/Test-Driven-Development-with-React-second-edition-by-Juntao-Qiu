import {
  checkAppTitle,
  checkBookDetail,
  checkBookListWith,
  checkReview,
  composeReview,
  gotoApp,
  gotoNthBookInTheList,
  performSearch,
} from "./helpers";

describe("Bookish application", function () {
  beforeEach(() => {
    gotoApp();
  });

  it("Visits the bookish", function () {
    checkAppTitle("Bookish");
  });

  it("Shows a book list", () => {
    checkAppTitle("Bookish");
    checkBookListWith([
      "Refactoring",
      "Domain-driven design",
      "Building Microservices",
      "Acceptance Test Driven Development with React",
    ]);
  });

  it("Goes to the detail page", () => {
    gotoNthBookInTheList(0);
    checkBookDetail("Refactoring");
  });

  it("Searches for a title", () => {
    performSearch("design");
    checkBookListWith(["Domain-driven design"]);
  });

  it("Write a review for a book", () => {
    cy.request("DELETE", "http://localhost:8080/books/1/reviews");

    gotoNthBookInTheList(0);
    checkBookDetail("Refactoring");

    composeReview("Juntao Qiu", "Excellent work!");
    checkReview("Excellent work!");
  });
});

export {}