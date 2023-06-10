import { useState } from 'react';
// import axios from 'axios';
import { FormProvider, useForm } from 'react-hook-form';
import {
    name_validation,
    message_validation,
    email_validation,
    subject_validation
} from '../../utils/inputValidations'
import emailjs from '@emailjs/browser';
import Input from '../Input';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleCheck } from '@fortawesome/free-solid-svg-icons';
import './style.scss';

function ContactForm() {
    const methods = useForm();
    // const [state, setState] = useState({
    //     name: '',
    //     email: '',
    //     subject: '',
    //     message: ''
    // });
    
    const [success, setSuccess] = useState(false);

    // const sendEmail = (event) => {
    //     event.preventDefault();
    //     axios
    //         .post('/send', { ...state })
    //         .then((response) => {
    //             setResult(response.data);
    //             setState({ 
    //                 name: '',
    //                 email: '', 
    //                 subject: '', 
    //                 message: '' });
    //         })
    //         .catch(() => {
    //             setResult({ 
    //                 success: false, 
    //                 message: 'Une erreur est survenue. Veuillez réessayer plus tard.'});
    //         });
    // };

    // const sendEmail = (e) => {
    //     emailjs.sendForm(process.env.REACT_APP_MAIL_SERVICE, process.env.REACT_APP_MAIL_TEMPLATE, e.target, process.env.REACT_APP_KEY_MAIL);
    //     setResult(`Merci de m'avoir contacté. Je reviens vers vous au plus vite.`);
    // }
    // const onInputChange = (event) => {
    //     const { name, value } = event.target;
    //     setState({
    //         ...state,
    //         [name]: value
    //     });
    // };
    const onSubmit = methods.handleSubmit(data => {
        console.log(data);
        methods.reset();
        setSuccess(true);
        setTimeout(() => {
            setSuccess(false);
        }, 9000);
        emailjs.sendForm(process.env.REACT_APP_MAIL_SERVICE, process.env.REACT_APP_MAIL_TEMPLATE, data.target, process.env.REACT_APP_KEY_MAIL);
    })

    return (
        <section id='contact' className='form_section'>
            <div className="form_container">
                <h2>Contact</h2>
                <FormProvider {...methods}>
                    <form className='form' onSubmit={e => e.preventDefault()} noValidate autoComplete='off'>
                        <Input {...name_validation} />
                        <Input {...email_validation} />
                        <Input {...subject_validation} />
                        <Input {...message_validation} />
                        <div className='form_submit'>
                            <input className='form_btn' type="submit" value="Envoyer" onClick={onSubmit}/>
                            {success && (
                                <p className='form_enquiry success'>
                                    <FontAwesomeIcon icon={faCircleCheck} />
                                    Le formulaire a bien été envoyé !
                                </p>
                            )}
                        </div>
                    </form>
                </FormProvider>
            </div>
        </section>
    )
}

export default ContactForm