import React from "react";
import { render, screen } from '@testing-library/react';
import Dashboard from './Dashboard';

jest.mock('lucide-react', () => ({
  Landmark: () => <span>Landmark</span>,
  BookOpenCheck: () => <span>BookOpenCheck</span>,
  DatabaseZap: () => <span>DatabaseZap</span>,
  BarChart3: () => <span>BarChart3</span>,
  Brain: () => <span>Brain</span>,
}), { virtual: true });

describe('Dashboard page', () => {
  it('renders heading', () => {
    render(<Dashboard />);
    expect(screen.getByRole('heading', { name: /Solomon Reasoning Engine Dashboard/i })).toBeInTheDocument();
  });
});
