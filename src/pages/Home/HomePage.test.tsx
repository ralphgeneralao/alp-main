import { render, screen, waitFor } from '@testing-library/react';
import HomePage from './HomePage';

describe('Home Page Component', () => {
  it('renders without crashing', async () => {
    const { getByTestId } = await waitFor(() => render(<HomePage />));
    const el = getByTestId(/home-page/i);
    expect(el).toBeTruthy();
  });

  it('has Home Page element', () => {
    render(<HomePage />);
    const linkElement = screen.getByText(/home page/i);
    expect(linkElement).toBeInTheDocument();
  });
});
