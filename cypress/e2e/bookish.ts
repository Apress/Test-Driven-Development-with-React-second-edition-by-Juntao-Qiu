import {
  When,
  Then,
  Given,
  DataTable,
} from "@badeball/cypress-cucumber-preprocessor";

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

Given(/^I am a bookish user$/, function () {
  //...
});
When(/^I open the "([^"]*)" page$/, function (page: string) {
  gotoApp();
});
Then(/^I can see the title "([^"]*)" is showing$/, function (title: string) {
  checkAppTitle(title);
});

When(/^there is a book list$/, function (table: DataTable) {
  const actual = table.rows().map((row) => row[0]);
  checkBookListWith(actual);
});

When(/^I typed "([^"]*)" to perform a search$/, function (keyword: string) {
  performSearch(keyword);
});
Then(/^I should see "([^"]*)" is matched$/, function (title: string) {
  checkBookListWith([title]);
});
When(/^I open the book detail page for the first item$/, function () {
  cy.request("DELETE", "http://localhost:8080/books/1/reviews");
  gotoApp();
  gotoNthBookInTheList(0);

  checkBookDetail("Refactoring");
});
When(/^I add a review to that book$/, function (table: DataTable) {
  const reviews = table.hashes();
  const review = reviews[0];
  composeReview(review.name, review.content);
});
Then(
  /^I can see it displayed beneath the description section with the text "([^"]*)"$/,
  function (content: string) {
    cy.get('div[data-testid="reviews-container"] .review').should(
      "have.length",
      1
    );
    checkReview(content);
  }
);
