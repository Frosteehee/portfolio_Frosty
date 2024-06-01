import { useState, useEffect } from 'react';
import { useForm, ValidationError } from '@formspree/react';
import Modal from 'react-modal';
import Button from './Button';
import '../Sass/Contact.scss';
import { useLanguage } from '../context/LanguageContext';

Modal.setAppElement('#root'); // Suggéré par React Modal pour éviter les erreurs d'accessibilité

function Contact() {
    const { translate } = useLanguage(); // Ajout pour la traduction 
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
            <h2 className='animate-text animated-lines'>{translate('contact.sendEmail')}</h2>
            <form onSubmit={handleSubmit}>
                <label htmlFor="name">{translate('contact.nameLabel')}</label>
                <input
                    id="name"
                    type="text"
                    name="name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                />
                <label htmlFor="email">{translate('contact.emailLabel')}</label>
                <input
                    id="email"
                    type="email"
                    name="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                />
                <label htmlFor="message">{translate('contact.messageLabel')}</label>
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

                <Button type="submit" styleType="primary" disabled={state.submitting}>
                    {translate('contact.sendButton')}
                </Button>
            </form>
            
            <Modal
                isOpen={modalIsOpen}
                onRequestClose={closeModal}
                contentLabel={translate('contact.modalContentLabel')}
                className="confirmation-modal"
                overlayClassName="confirmation-overlay"
            >
                <h2>{translate('contact.modalTitle')}</h2>
                <p>{translate('contact.modalMessage')}</p>
                <Button onClick={closeModal} styleType="primary">{translate('contact.modalCloseButton')}</Button>
            </Modal>
        </section>
    );
}

export default Contact;
