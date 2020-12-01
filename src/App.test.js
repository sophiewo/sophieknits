import { render, screen } from '@testing-library/react';
import App from './App';

test('renders learn react link', () => {
  render(<App />);
  const message = screen.getByText(/Start/i);
  expect(message).toBeInTheDocument();
});
