import { render, screen } from '@testing-library/react';
import { Navbar } from '@/components/Navbar';

describe('Navbar', () => {
  it('renders the brand name', () => {
    render(<Navbar menuOpen={false} setMenuOpen={() => {}} />);
    // The brand name is split between text and a <span>, so use a function matcher
    expect(
      screen.getByText((content, element) => {
        return (
          element?.tagName.toLowerCase() === 'a' &&
          /arafat/.test(content) &&
          element.innerHTML.includes('.hussain')
        );
      })
    ).toBeInTheDocument();
  });

  it('renders all navigation links', () => {
    render(<Navbar menuOpen={false} setMenuOpen={() => {}} />);
    // Use getAllByText for all links since they might appear multiple times
    expect(screen.getAllByText(/Home/i).length).toBeGreaterThan(0);
    expect(screen.getAllByText(/About/i).length).toBeGreaterThan(0);
    expect(screen.getAllByText(/Projects/i).length).toBeGreaterThan(0);
    expect(screen.getAllByText(/Contact/i).length).toBeGreaterThan(0);
  });
});
