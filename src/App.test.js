import { render, screen } from '@testing-library/react';
import App from './App';

test('renders header content', () => {
  render(<App />);
  const liElement = screen.getByText(/Time Line/i);
  expect(liElement).toBeInTheDocument();
});
