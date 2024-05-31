import  { useState, useEffect } from 'react';
import { useForm, ValidationError } from '@formspree/react';
import Modal from 'react-modal';
import Button from './Button';
import '../Sass/Contact.scss';

Modal.setAppElement('#root'); // Set the root element for accessibility

function Contact() {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');
    const [modalIsOpen, setModalIsOpen] = useState(false);

    const [state, handleSubmit] = useForm("xleqkqkn");

    useEffect(() => {
        if (state.succeeded) {
            setModalIsOpen(true);
        }
    }, [state.succeeded]);

    const closeModal = () => {
        setModalIsOpen(false);
        // Reset form fields
        setName('');
        setEmail('');
        setMessage('');
    };

    return (
        <section className="contact" id="contact">
            <h2 className='animate-text animated-lines'>Envoyez moi un petit courriel</h2>
            <form onSubmit={handleSubmit}>
                <label htmlFor="name">Your name:</label>
                <input
                    id="name"
                    type="text"
                    name="name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                />
                <label htmlFor="email">Your email:</label>
                <input
                    id="email"
                    type="email"
                    name="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                />
                <label htmlFor="message">Your message:</label>
                <textarea
                    id="message"
                    name="message"
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                />

                <ValidationError
                    prefix="Name"
                    field="name"
                    errors={state.errors}
                />
                <ValidationError
                    prefix="Email"
                    field="email"
                    errors={state.errors}
                />
                <ValidationError
                    prefix="Message"
                    field="message"
                    errors={state.errors}
                />

                <Button type="submit" styleType="primary" disabled={state.submitting}>Send</Button>
            </form>
            
            <Modal
                isOpen={modalIsOpen}
                onRequestClose={closeModal}
                contentLabel="Confirmation Modal"
                className="confirmation-modal"
                overlayClassName="confirmation-overlay"
            >
                <h2>Merci pour votre message !</h2>
                <p>Votre message a été envoyé avec succès.</p>
                <Button onClick={closeModal} styleType="primary">Fermer</Button>
            </Modal>
        </section>
    );
}

export default Contact;
