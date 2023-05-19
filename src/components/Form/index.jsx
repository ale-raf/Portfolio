import './style.scss';

function Form() {
    return (
        <section id='contact' className='form_section'>
            <div className="form_container">
                <h2>contact</h2>
                <form className='form' action="#">
                    <label>
                        Nom : 
                        <input type='text' name='name' />
                    </label>
                    <label>
                        Email : 
                        <input type='email' name='email' />
                    </label>
                    <label>
                        Sujet : 
                        <input type='text' name='subject' />
                    </label>
                    <label>
                        Message : 
                        <textarea type='text' name='message' />
                    </label>
                    <input type="submit" value="Envoyer" />
                </form>
            </div>
        </section>
    )
}

export default Form;