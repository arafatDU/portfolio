import { render, screen } from '@testing-library/react';
import { About } from '@/components/sections/About';

describe('About Section', () => {
  it('renders About Me heading', () => {
    render(<About />);
    expect(screen.getByText(/About Me/i)).toBeInTheDocument();
  });
});
