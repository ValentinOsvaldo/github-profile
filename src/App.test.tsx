import { render, screen } from '@testing-library/react';
import App from './App';

describe('App.tsx', () => {
  it('Renders', () => {
    render(<App />);

    screen.debug()
  });
});
