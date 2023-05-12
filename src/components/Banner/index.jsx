import { HashLink } from 'react-router-hash-link';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowDown} from '@fortawesome/free-solid-svg-icons';
import avatar from '../../assets/avatar.svg';
import './style.scss';

function Banner() {
    return (
        <section className='banner_section'>
            <div className='banner_container'>
                <img className='banner_avatar' src={avatar} alt='avatar Alexis'></img>
                <div>
                    <h1>Développeur web front et back</h1>
                    <h2>Je réalise des projets d’intégration et de programmation pour des applications et des sites web.</h2>
                </div>
            </div>
            <div className='banner_bottom'>
                <HashLink smooth to='/#about'><button className='banner_scroll_btn'><FontAwesomeIcon icon={faArrowDown} /> Scrollez pour découvrir</button></HashLink>
                <div className='banner_img'></div>
            </div>
            
        </section>
    )
}

export default Banner