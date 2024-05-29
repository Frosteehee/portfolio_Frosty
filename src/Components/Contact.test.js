
import { render, fireEvent, waitFor } from '@testing-library/react';
import Contact from './Contact';

// Mock pour useForm
jest.mock('@formspree/react', () => ({
  useForm: jest.fn(() => [{}, jest.fn()]), // Simule l'utilisation de useForm, renvoie un état vide et une fonction handleSubmit fictive
}));

describe('Contact component', () => {
  it('sends message when form is submitted', async () => {
    const { getByLabelText, getByText } = render(<Contact />);

    // Remplir le formulaire avec des données fictives
    fireEvent.change(getByLabelText(/Your name/i), { target: { value: 'John Doe' } });
    fireEvent.change(getByLabelText(/Your email/i), { target: { value: 'john@example.com' } });
    fireEvent.change(getByLabelText(/Your message/i), { target: { value: 'Test message' } });

    // Soumettre le formulaire
    fireEvent.click(getByText(/Send/i));

    // Attendre que le message de remerciement soit affiché
    await waitFor(() => {
      expect(getByText(/Thanks for your message!/i)).toBeInTheDocument();
    });

    // Vérifier que la fonction handleSubmit de useForm a été appelée
    expect(useForm.mock.calls.length).toBe(1);
    expect(useForm.mock.calls[0][1]).toBeInstanceOf(Function); // Vérifie que handleSubmit est une fonction
  });
});
