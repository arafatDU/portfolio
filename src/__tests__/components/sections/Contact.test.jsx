import { render, screen } from '@testing-library/react';
import { Contact } from '@/components/sections/Contact';

describe('Contact Section', () => {
  it('renders Get In Touch heading', () => {
    render(<Contact />);
    expect(screen.getByText(/Get In Touch/i)).toBeInTheDocument();
  });
});
