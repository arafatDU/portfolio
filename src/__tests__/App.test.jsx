import { render, screen } from '@testing-library/react';
import App from '@/App';

describe('App', () => {
  it('renders without crashing and shows the Navbar', () => {
    render(<App />);
    expect(screen.getAllByText(/arafat/i).length).toBeGreaterThan(0);
  });
});
