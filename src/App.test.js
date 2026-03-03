// src/App.test.js
import { render, screen } from '@testing-library/react';
import App from './App';

test('renders ContractLink title', () => {
    render(<App />);
    const titleElement = screen.getByText(/ContractLink/i);
    expect(titleElement).toBeInTheDocument();
});
