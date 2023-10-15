// TODO: create contact component

// Contacts should have fields for name, email and a message for the developer

// When the cursor is moved out of one of the form fields without entering text, a message should appear indicating that field is required.

// When text is written on the email field, if its not a valid email, a message should appear saing that.

import { useState } from 'react';

function Contact() {

    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');
    const [validationMessage, setValidationMessage] = useState('');


    const handleInputChange = (e) => {        
        const { name, value } = e.target;
    
        if(name === "name"){
            setName(value)
        }
        if(name === "email"){
            setEmail(value)
        }
        if(name==="message"){
            setMessage(value)
        }
    };

    const isValidEmail = (email) => {
        const emailRegex = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i;
        return emailRegex.test(email);
    };

    const validateInputs = () => {
        if (!name || !email || !message) {
            setValidationMessage('All fields are required.');
            return false;
        }

        if (!isValidEmail(email)) {
            setValidationMessage('Invalid email address.');
            return false;
        }

        setValidationMessage('');
        return true;
    };

    
    const handleSubmit = (e) => {
        e.preventDefault();

        if(validateInputs()){
            alert(`${name}, your message was sent successfully.`);
        setName('');
        setEmail('');
        setMessage('');
        }
    }

    const handleMouseLeave = (e) => {
        validateInputs();
    }


    return (
        <div className="contact">
            <h2 className='title'>Contact</h2>
            <h3>Send me a message!</h3>
            
            <form onSubmit={handleSubmit}>
                <label for="name">Name: </label>
                <input value={name} 
                name="name"
                id="name" 
                onChange={handleInputChange}
                onMouseLeave={handleMouseLeave}
                type="text"
                placeholder="What is your name?"/>
            

                <label for="email">Email: </label>            
                <input value={email} 
                name="email"
                id="email" 
                onChange={handleInputChange}
                onMouseLeave={handleMouseLeave}
                type="email"
                placeholder="What is your email?"/>

                <label for="message">Message:</label>
                <textarea value={message} 
                name="message"
                id="message" 
                onChange={handleInputChange}
                onMouseLeave={handleMouseLeave}
                placeholder="Whrite your message here."/>

                {validationMessage && <p className='validation'>{validationMessage}</p>}

                <button type="submit">Send</button>
            </form>
        </div>
    )
};

export default Contact;