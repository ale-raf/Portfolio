<<<<<<< HEAD
import { HashLink } from 'react-router-hash-link';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowDown} from '@fortawesome/free-solid-svg-icons';
=======
>>>>>>> 54fd0d8b0dbb8f866c82b50065f90a7e3062cba5
import avatar from '../../assets/avatar.svg';
import './style.scss';

function Banner() {
    return (
        <section className='banner_section'>
            <div className='banner_container'>
                <img className='banner_avatar' src={avatar} alt='avatar Alexis'></img>
                <div>
<<<<<<< HEAD
                    <h1>Développeur web front et back</h1>
                    <h2>Je réalise des projets d’intégration et de programmation pour des applications et des sites web.</h2>
                </div>
            </div>
            <div className='banner_bottom'>
                <HashLink smooth to='/#about'><button className='banner_scroll_btn'><FontAwesomeIcon icon={faArrowDown} /> Scrollez pour découvrir</button></HashLink>
                <div className='banner_img'></div>
            </div>
            
=======
                    <h1>Développeur web front-end et back-end</h1>
                    <h2>Je réalise des projets d’intégration et de programmation pour des applications et des sites web.</h2>
                </div>
            </div>
            <div className='banner_img'></div>
>>>>>>> 54fd0d8b0dbb8f866c82b50065f90a7e3062cba5
        </section>
    )
}

export default Banner