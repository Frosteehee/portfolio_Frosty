import  { useState } from 'react';
import { useForm, ValidationError } from '@formspree/react';
import Button from './Button';
import '../Sass/Contact.scss';

function Contact() {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');

    const [state, handleSubmit] = useForm("xleqkqkn");

    if (state.succeeded) {
        return <p>Thanks for joining!</p>;
    }

    return (
        <section className="contact" id="contact">
            <h2 className='animate-text animated-lines'>Contact Page</h2>
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
        </section>
    );
}

export default Contact;
