import React from 'react'
import {render, screen} from '@testing-library/react'

import BookList from './BookList';
import {MemoryRouter as Router} from 'react-router-dom';

const renderWithRouter = (component: JSX.Element) => {
  return {
    ...render(<Router>
      {component}
    </Router>)
  }
};

describe('BookList', () => {
  it('render books', async () => {
    const props = {
      books: [
        {'name': 'Refactoring', 'id': 1},
        {'name': 'Domain-driven design', 'id': 2},
      ]
    };

    renderWithRouter(<BookList {...props} />);

    const headings = await screen.findAllByRole('heading')

    headings.forEach((heading, index) => {
      expect(heading).toHaveTextContent(props.books[index].name);
    });
  })
});