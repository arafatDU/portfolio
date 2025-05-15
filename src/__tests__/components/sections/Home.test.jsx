import { render, screen } from '@testing-library/react';
import { Home } from '@/components/sections/Home';

describe('Home Section', () => {
  it('renders the user name', () => {
    render(<Home />);
    expect(screen.getByText(/Arafat Hussain/i)).toBeInTheDocument();
  });
});
