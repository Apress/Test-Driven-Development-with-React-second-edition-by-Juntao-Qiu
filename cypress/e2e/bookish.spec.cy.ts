const gotoApp = () => {
  cy.visit("http://localhost:3000/");
};

const checkAppTitle = () => {
  cy.get('h2[data-test="heading"]').contains("Bookish");
};

const checkBookListWith = (expectation: string[] = []) => {
  cy.get('div[data-test="book-list"]').should("exist");
  cy.get("div.book-item").should((books) => {
    expect(books).to.have.length(expectation.length);

    const titles = [...books].map((x) => x.querySelector("h2").innerHTML);
    expect(titles).to.eql(expectation);
  });
};

const gotoNthBookInTheList = (index: number) => {
  cy.get("div.book-item").contains("View Details").eq(index).click();
}

const checkBookDetail = () => {
  cy.url().should("include", "/books/1");
}

const performSearch = (term: string) => {
  cy.get('[data-test="search"] input').type(term);
}

describe("Bookish application", function () {
  beforeEach(() => {
    gotoApp();
  })

  it("Visits the bookish", function () {
    checkAppTitle();
  });

  it("Shows a book list", () => {
    checkAppTitle();
    checkBookListWith([
      "Refactoring",
      "Domain-driven design",
      "Building Microservices",
      "Acceptance Test Driven Development with React",
    ]);
  });

  it("Goes to the detail page", () => {
    gotoNthBookInTheList(0);
    checkBookDetail();
  });

  it("Searches for a title", () => {
    performSearch("design")
    checkBookListWith(['Domain-driven design'])
  });
});
