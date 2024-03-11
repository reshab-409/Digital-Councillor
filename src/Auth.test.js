import { render, screen } from '@testing-library/react';
import Auth from './Components/Auth';

test('Text In the document', () => {
  render(<Auth />);
  const linkElement = screen.getByText(/Welcome Back!/i);
  expect(linkElement).toBeInTheDocument();
});
