import { useState } from 'react';
import { Link } from 'react-router-dom';
import { HashLink } from 'react-router-hash-link';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faXmark, faHouse, faDiagramProject, faAddressCard } from '@fortawesome/free-solid-svg-icons';
import useScrollDirection from '../useScrollDirection';
import './style.scss';

function Header() {

    const [isHamburgerOpen, setIsHamburgerOpen] = useState(false);

    const toggleHamburger = () => {
        setIsHamburgerOpen(!isHamburgerOpen)
    };

    const scrollDirection = useScrollDirection();

    return (
        <header className={`header ${scrollDirection === "down" ? "hide" : "show"}`}>
            <nav className='navbar'>
                <div className='logo'>
                    <Link to='/Portfolio/'>
                        <h1>Alexis Raffin</h1>
                    </Link>
                </div>
                { !isHamburgerOpen ? 
                <button className='hamburger' onClick={toggleHamburger}>
                    <FontAwesomeIcon className='burger' icon={faBars} />
                </button> : 
                <button className='hamburger' onClick={toggleHamburger}>
                    <FontAwesomeIcon className='burger' icon={faXmark} />
                </button> }
                <div className={ isHamburgerOpen ? 'navigation expanded' : 'navigation' }>
                    <ul>
                        <HashLink smooth to='/Portfolio/#banner'>
                            <li>
                                <FontAwesomeIcon icon={faHouse} /> Accueil
                            </li>
                        </HashLink>
                        <HashLink smooth to='/Portfolio/#projets'>
                            <li id='nav_projets'>
                                <FontAwesomeIcon icon={faDiagramProject} /> Projets
                            </li>
                        </HashLink>
                        <HashLink smooth to='/Portfolio/#contact'>
                            <li>
                                <FontAwesomeIcon icon={faAddressCard} /> Contact
                            </li>
                        </HashLink>
                    </ul>
                </div>
            </nav>
        </header>
    )
}

export default Header