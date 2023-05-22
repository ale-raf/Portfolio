import { useState } from 'react';
import { Link } from 'react-router-dom';
import { HashLink } from 'react-router-hash-link';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faXmark, faHouse, faDiagramProject, faAddressCard } from '@fortawesome/free-solid-svg-icons';
import './style.scss';

function Header() {

    const [isHamburgerOpen, setIsHamburgerOpen] = useState(false);

    const toggleHamburger = () => {
        setIsHamburgerOpen(!isHamburgerOpen)
    }

    return (
        <header>
            <nav className='navbar'>
                <div className='logo'>
                    <Link to='/'>
                        <h1>Alexis Raffin</h1>
                    </Link>
                </div>
                { !isHamburgerOpen ? <button className='hamburger' onClick={toggleHamburger}><FontAwesomeIcon className='burger' icon={faBars} /></button>
                : <button className='hamburger' onClick={toggleHamburger}><FontAwesomeIcon className='burger' icon={faXmark} /></button> }
                <div className={ isHamburgerOpen ? 'navigation expanded' : 'navigation' }>
                    <ul>
                        <Link to='/'>
                            <li>
                                <FontAwesomeIcon icon={faHouse} /> accueil
                            </li>
                        </Link>
                        <HashLink smooth to='/#projets'>
                            <li id='nav_projets'>
                                <FontAwesomeIcon icon={faDiagramProject} /> projets
                            </li>
                        </HashLink>
                        <HashLink smooth to='/#contact'>
                            <li>
                                <FontAwesomeIcon icon={faAddressCard} /> contact
                            </li>
                        </HashLink>
                    </ul>
                </div>
            </nav>
        </header>
    )
}

export default Header