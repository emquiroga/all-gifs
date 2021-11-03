import React from 'react';
import { render, screen } from '@testing-library/react';
import App from '../App';

test('Be sure that my app gets render', () => {
  render(<App />);
  const title = screen.getByText(/Gifhub/i);
  expect(title).toBeInTheDocument();
});
