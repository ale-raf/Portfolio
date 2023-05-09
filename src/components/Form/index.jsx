import './style.scss';

function Form() {
    return (
        <section className="form-container">
            <form className='form' action="#">
                <label>
                    Nom : 
                    <input type='text' name='name' />
                </label>
                <label>
                    Email : 
                    <input type='text' name='email' />
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
            
        </section>
    )
}

export default Form;