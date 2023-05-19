import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';

import {MemoryRouter as Router} from 'react-router-dom';

const renderWithRouter = (component: JSX.Element) => {
  return {
    ...render(<Router>
      {component}
    </Router>)
  }
};

test('renders learn react link', () => {
  renderWithRouter(<App />);
  const linkElement = screen.getByText(/Bookish/i);
  expect(linkElement).toBeInTheDocument();
});
