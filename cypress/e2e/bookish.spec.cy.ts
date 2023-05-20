import axios from 'axios';

describe('Bookish application', function () {

  it('Visits the bookish', function () {
    cy.visit('http://localhost:3000/');
    cy.get('h2[data-test="heading"]').contains('Bookish')
  })

  it('Shows a book list', () => {
    cy.visit('http://localhost:3000/');
    cy.get('div[data-test="book-list"]').should('exist');

    cy.get('div.book-item').should((books) => {
      expect(books).to.have.length(4);
      const titles = [...books].map(x => x.querySelector('h2').innerHTML);

      expect(titles).to.eql(
        ['Refactoring', 'Domain-driven design', 'Building Microservices', 'Acceptance Test Driven Development with React']
      )
    })
  });

  it('Goes to the detail page', () => {
    cy.visit('http://localhost:3000/');
    cy.get('div.book-item').contains('View Details').eq(0).click();
    cy.url().should('include', "/books/1")
  });

  it('Searches for a title', () => {
    cy.visit('http://localhost:3000/');
    cy.get('div.book-item').should('have.length', 4);
    cy.get('[data-test="search"] input').type('design');
    cy.get('div.book-item').should('have.length', 1);
    cy.get('div.book-item').eq(0).contains('Domain-driven design');
  });
})