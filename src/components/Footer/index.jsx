import { HashLink } from 'react-router-hash-link';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { library } from '@fortawesome/fontawesome-svg-core';
import { fas } from '@fortawesome/free-solid-svg-icons';
import Button from '../Button';
import Mail from '../Mail';
import './footer.scss';
library.add(fas);

function Footer() {
    const openInNewTab = (url) => {
        window.open(url, '_blank', 'noreferrer');
    };
    
    return (
        <footer>
            <div className='footer_container'>
                <div className='footer_social'>
                    <span></span>
                    <Button 
                        isDefaultBtn={false} 
                        openInNewTab={openInNewTab} 
                        link='https://github.com/ale-raf' 
                        icon="fa-brands fa-github"
                    />
                    <Button 
                        isDefaultBtn={false} 
                        openInNewTab={openInNewTab} 
                        link='https://www.linkedin.com/in/alexis-raffin-867596257/' 
                        icon="fa-brands fa-linkedin"
                    />
                    <Mail email={process.env.REACT_APP_EMAIL} subject='' body=''>
                        <FontAwesomeIcon icon="fa-solid fa-envelope" />
                    </Mail>
                    <span></span>
                </div>
                <HashLink smooth to='/Portfolio/#banner'>
                    <div className='footer_legal'>
                        <p>Site portfolio réalisé avec React.js</p>
                        <p>® 2023 Alexis Raffin</p> 
                    </div>
                </HashLink>
            </div>
        </footer>
    )
}

export default Footer