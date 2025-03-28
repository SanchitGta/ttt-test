import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import UsernameForm from './UsernameForm';

describe('UsernameForm', () => {
  test('submits a valid username', () => {
    render(<UsernameForm />);
    const input = screen.getByPlaceholderText('Enter your username');
    const submitButton = screen.getByRole('button', { name: /submit/i });

    fireEvent.change(input, { target: { value: 'validUser' } });
    fireEvent.click(submitButton);

    expect(screen.getByText(/username submitted successfully/i)).toBeInTheDocument();
  });

  test('shows error on empty submission', () => {
    render(<UsernameForm />);
    const submitButton = screen.getByRole('button', { name: /submit/i });

    fireEvent.click(submitButton);

    expect(screen.getByText(/username cannot be empty/i)).toBeInTheDocument();
  });

  test('shows error on invalid username', () => {
    render(<UsernameForm />);
    const input = screen.getByPlaceholderText('Enter your username');
    const submitButton = screen.getByRole('button', { name: /submit/i });

    fireEvent.change(input, { target: { value: 'invalid@user' } });
    fireEvent.click(submitButton);

    expect(screen.getByText(/invalid username/i)).toBeInTheDocument();
  });
});
