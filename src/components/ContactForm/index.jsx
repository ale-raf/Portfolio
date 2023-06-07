import { useState } from 'react';
import axios from 'axios';
import './style.scss';

function ContactForm() {
    const [state, setState] = useState({
        name: '',
        email: '',
        subject: '',
        message: ''
    });
    
    const [result, setResult] = useState(null);

    const sendEmail = event => {
        event.preventDefault();
        axios
            .post('/send', { ...state })
            .then(response => {
                setResult(response.data);
                setState({ 
                    name: '',
                    email: '', 
                    subject: '', 
                    message: '' });
            })
            .catch(() => {
                setResult({ 
                    success: false, 
                    message: 'Une erreur est survenue. Veuillez réessayer plus tard.'});
            });
    };

    const onInputChange = event => {
        const { name, value } = event.target;
        setState({
            ...state,
            [name]: value
        });
    };

    return (
        <section id='contact' className='form_section'>
            <div className="form_container">
                <h2>Contact</h2>
                {result && (<p className={`${result.success ? 'form_success' : 'form_error'}`}>{result.message}</p>)}
                <form className='form' onSubmit={sendEmail}>
                    <label>
                        <input type='text' name='name' value={state.name} placeholder='Nom' onChange={onInputChange} />
                    </label>
                    <label> 
                        <input type='email' name='email' value={state.email} placeholder='adresse@email.com' onChange={onInputChange} />
                    </label>
                    <label>
                        <input type='text' name='subject' value={state.subject} placeholder='Sujet' onChange={onInputChange} />
                    </label>
                    <label>
                        <textarea type='text' name='message' value={state.message} placeholder='Message' onChange={onInputChange} />
                    </label>
                    <input className='form_btn' type="submit" value="Envoyer" />
                </form>
            </div>
        </section>
    )
}

export default ContactForm