import { useState } from 'react';
import { FormProvider, useForm } from 'react-hook-form';
import emailjs from '@emailjs/browser';
import { name_validation, message_validation, email_validation, subject_validation } from '../../utils/inputValidations';
import Input from '../Input';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleCheck } from '@fortawesome/free-solid-svg-icons';
import './contactForm.scss';

function ContactForm() {
    const methods = useForm();
    
    const [success, setSuccess] = useState(false);

    const onSubmit = methods.handleSubmit(data => {
        methods.reset();
        setSuccess(true);
        setTimeout(() => {
            setSuccess(false);
        }, 5000);
        emailjs
            .send(
                process.env.REACT_APP_SERVICE_ID, 
                process.env.REACT_APP_TEMPLATE_ID, 
                data, 
                process.env.REACT_APP_PUBLIC_KEY
            )
            .then((result) => {
                console.log(result.text);
            }, (error) => {
                console.log(error.text);
            });
    });
    
    return (
        <section id='contact' className='form_section'>
            <div className="form_container">
                <h2>Contact</h2>
                <FormProvider {...methods}>
                    <form className='form' onSubmit={e => e.preventDefault} noValidate autoComplete='off'>
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