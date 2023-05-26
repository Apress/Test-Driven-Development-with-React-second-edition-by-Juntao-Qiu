Feature: Book List
  As a reader
  I want to see books in trend
  So I can learn that what to read next

  Scenario: Heading
    Given I am a bookish user
    When I open the "list" page
    Then I can see the title "Bookish" is showing

  Scenario: Book List
    Given I am a bookish user
    When I open the "list" page
    And there is a book list
      | name                                          |
      | Refactoring                                   |
      | Domain-driven design                          |
      | Building Microservices                        |
      | Acceptance Test Driven Development with React |

  Scenario: Search by keyword
    Given I am a bookish user
    When I open the "list" page
    And I typed "design" to perform a search
    Then I should see "Domain-driven design" is matched

  Scenario: Write a review
    Given I am a bookish user
    When I open the book detail page for the first item
    And I add a review to that book
      | name       | content          |
      | Juntao Qiu | Excellent work!  |
    Then I can see it displayed beneath the description section with the text "Excellent works!"