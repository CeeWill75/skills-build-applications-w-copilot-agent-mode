import { render, screen } from '@testing-library/react';
import App from './App';

test('renders OctoFit Tracker app title', () => {
  render(<App />);
  const titleElement = screen.getByText(/OctoFit Tracker/i);
  expect(titleElement).toBeInTheDocument();
});
