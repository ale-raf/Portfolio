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
                    <h1>Alexis Raffin</h1>
                </div>
                { !isHamburgerOpen ? <button className='hamburger' onClick={toggleHamburger}><FontAwesomeIcon className='burger' icon={faBars} /></button>
                : <button className='hamburger' onClick={toggleHamburger}><FontAwesomeIcon className='burger' icon={faXmark} /></button> }
<<<<<<< HEAD
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
=======
                <div className={isHamburgerOpen ? 'navigation expanded' : 'navigation'}>
                    <ul>
                        <li>
                            <Link to='/'>
                                <FontAwesomeIcon icon={faHouse} /> accueil
                            </Link>
                        </li>
                        <li>
                            <HashLink smooth to='/#projets'>
                                <FontAwesomeIcon icon={faDiagramProject} /> projets
                            </HashLink>
                        </li>
                        <li>
                            <HashLink smooth to='/#contact'>
                                <FontAwesomeIcon icon={faAddressCard} /> contact
                            </HashLink>
                        </li>
>>>>>>> 54fd0d8b0dbb8f866c82b50065f90a7e3062cba5
                    </ul>
                </div>
            </nav>
        </header>
    )
}

export default Header