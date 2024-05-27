import Button from './Button'; // Import du composant Button

// Import des modules React
import { useState } from 'react';



// Import du fichier SCSS
import '../Sass/Contact.scss';

// Composant Contact
function Contact() {
    // Définition des états pour les champs du formulaire
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');

    // Fonction de gestion de la soumission du formulaire
    const handleSubmit = (e) => {
        e.preventDefault();
            console.log('ça fonctionne ! ');
    };

    // Rendu du composant Contact
    return (
        <section className="contact"> {/* Ajout de la classe contact-container */}
            <h1>Contact Page</h1>
            <form onSubmit={handleSubmit}>
                <label>
                    Your name:
                    <input type="text" value={name} onChange={(e) => setName(e.target.value)} />
                </label>
                <label>
                   Your email:
                    <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
                </label>
                <label>
                    Your message:
                    <textarea value={message} onChange={(e) => setMessage(e.target.value)} />
                </label>
                
                <Button type="submit" styleType="primary">Send</Button>
            </form>
        </section>
    );
}

// Export du composant Contact
export default Contact;
