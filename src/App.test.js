import { render, screen } from '@testing-library/react';
import App from './App';

test('renders Empezando con react link', () => {
  render(<App />);
  const linkElement = screen.getByText(/Empezando con react/i);
  expect(linkElement).toBeInTheDocument();
});
