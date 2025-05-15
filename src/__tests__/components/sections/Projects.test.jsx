import { render, screen } from '@testing-library/react';
import { Projects } from '@/components/sections/Projects';

describe('Projects Section', () => {
  it('renders Projects heading', () => {
    render(<Projects />);
    expect(screen.getByText(/Projects/i)).toBeInTheDocument();
  });
});
