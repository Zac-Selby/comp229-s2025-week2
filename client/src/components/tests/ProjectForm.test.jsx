import { render, screen, fireEvent } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import '@testing-library/jest-dom';  // 👈 Add this line
import ProjectForm from '../admin/ProjectForm';

describe('ProjectForm', () => {
  it('renders form fields', () => {
    render(<ProjectForm />);
    expect(screen.getByLabelText(/Title:/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/Description:/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/Technologies/)).toBeInTheDocument();
    expect(screen.getByLabelText(/GitHub Link/)).toBeInTheDocument();
  });

  it('updates form state on user input', () => {
    render(<ProjectForm />);
    const titleInput = screen.getByLabelText(/Title:/i);
    fireEvent.change(titleInput, { target: { value: 'My AI Project' } });
    expect(titleInput.value).toBe('My AI Project');
  });
});
