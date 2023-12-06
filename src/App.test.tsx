import { act, screen } from '@testing-library/react';
import { renderWithProviders } from './helpers/testHelper';
import App from './App';

describe('Main App Component', () => {
  it('renders App without crashing', async () => {
    await act(async () => {
      renderWithProviders(<App />);
    });

    const app = await screen.findByTestId(/app/i);
    expect(app).toBeTruthy();
  });
});
