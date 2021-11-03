import React from 'react';
import { render, fireEvent, screen } from '@testing-library/react';
import App from '../App';

test('Is the home rendered?', async () => {
  const {findByText} = render(<App />);
  const lastSearch =  await findByText('Last search');
  expect(lastSearch).toBeInTheDocument();
});

test('Searchform could be used?', async () => {
    render(<App />);
    const searchForm = await screen.findByRole('textbox');
    fireEvent.change(searchForm, {target: {value: 'random'}});
})