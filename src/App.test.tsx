import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';

import {MemoryRouter as Router} from 'react-router-dom';
import { Provider } from "react-redux";
import store from "./redux/store";

const customRender = (component: JSX.Element) => {
  return {
    ...render(
      <Provider store={store}>
        <Router>
          {component}
        </Router>
      </Provider>
    )
  }
}

// const renderWithRouter = (component: JSX.Element) => {
//   return {
//     ...render(<Router>
//       {component}
//     </Router>)
//   }
// };

it('renders bookish', () => {
  customRender(<App />);
  const heading = screen.getByText(/Bookish/i);
  expect(heading).toBeInTheDocument();
});
