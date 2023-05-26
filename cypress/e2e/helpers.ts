export const gotoApp = () => {
  cy.visit("http://localhost:3000/");
};
export const checkAppTitle = (title: string) => {
  cy.get('h2[data-test="heading"]').contains(title);
};
export const checkBookListWith = (expectation: string[] = []) => {
  cy.get('div[data-test="book-list"]').should("exist");
  cy.get("div.book-item").should((books) => {
    expect(books).to.have.length(expectation.length);

    const titles = [...books].map((x) => x.querySelector("h2").innerHTML);
    expect(titles).to.eql(expectation);
  });
};
export const gotoNthBookInTheList = (index: number) => {
  cy.get("div.book-item").contains("View Details").eq(index).click();
}
export const checkBookDetail = (content: string = "") => {
  cy.url().should("include", "/books/1");
  cy.get('.book-title').contains(content);
}
export const performSearch = (term: string) => {
  cy.get('[data-test="search"] input').type(term);
}
export const composeReview = (name: string, content: string) => {
  cy.get('input[name="name"]').type(name);
  cy.get('textarea[name="content"]').type(content);
  cy.get('button[name="submit"]').click();
};
export const checkReview = (content: string) => {
  cy.get('div[data-testid="reviews-container"] .review').should('have.length', 1);
}