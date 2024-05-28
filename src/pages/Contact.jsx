import { useState } from 'react';
import { validateEmail } from '../utils/helpers';

export default function Contact() {
        const [ email, setEmail ]  = useState('');
        const [ username, setUsername ] = useState('');
        const [ message, setMessage ] = useState('');
        const [ errorMessage, setErrorMessage ] = useState('');
    
        const userInputChange = (e) => {
            const { target } = e;
            const inputName = target.name;
            const inputValue = target.value;
    
            if (inputName === 'email') {
                setEmail(inputValue)
            } else if (inputName === 'username') {
                setUsername(inputValue)
            } else {
                setMessage(inputValue)
            }
        };
    
        const handleFormSubmit = (e) => {
            e.preventDefault();
    
            if (!validateEmail(email)) {
                setErrorMessage('Email is invalid');
                return;
            }
            if (!username || !message) {
                setErrorMessage('Please complete all feilds')
                return
            }
    
            setEmail('')
            setUsername('')
            setMessage('')
        };
    
        return (
            <div className='Contact'>
            <div className="container text-center">
                <h1>Contact Me</h1>
                <p>
                    Email:
            <a className="email" href="mailto:parismwoods@yahoo.com">
              parismwoods@yahoo.com
            </a>
            <br></br>
            Or leave a message using the form below.
                </p>
                <form className='form' onSubmit={handleFormSubmit}>  
                    <input 
                        value={email}
                        name='email'
                        onChange={userInputChange}
                        type="email"
                        placeholder="email"
                    />
                    <br></br>
                    <input 
                        value={username}
                        name='username'
                        onChange={userInputChange}
                        type="text"
                        placeholder="username"
                    />
                    <br></br>
                    <textarea
                        value={message}
                        name='message'
                        onChange={userInputChange}
                        type="text"
                        placeholder="message"
                    ></textarea>
                    <br></br>
                    <button type="submit">Submit</button> 
                </form>
                {errorMessage && (
                    <div>
                        <p className="error-text">{errorMessage}</p>
                    </div>
                )}
            </div>
            </div>
        );
  }