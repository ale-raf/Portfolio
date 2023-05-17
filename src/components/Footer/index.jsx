import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { library } from '@fortawesome/fontawesome-svg-core';
import { fas } from '@fortawesome/free-solid-svg-icons';
import './footer.scss';
import Mail from '../Mail';
import { HashLink } from 'react-router-hash-link';
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
                    <button role='link' onClick={() => openInNewTab('https://github.com/ale-raf')}>
                        <i className="fa-brands fa-github"></i>
                    </button>
                    <button role='link' onClick={() => openInNewTab('https://www.linkedin.com/in/alexis-raffin-867596257/')}>
                        <i className="fa-brands fa-linkedin"></i>
                    </button>
                    <Mail email='raffinalexis@gmail.com' subject='' body='Bonjour,...'>
                        <FontAwesomeIcon icon="fa-solid fa-envelope" />
                    </Mail>
                    <span></span>
                </div>
                <HashLink smooth to='/#banner'>
                    <div className='footer_legal'>
                        ® 2023 Alexis Raffin
                    </div>
                </HashLink>
            </div>
        </footer>
    )
}

export default Footer