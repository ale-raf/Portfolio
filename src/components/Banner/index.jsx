import avatar from '../../assets/avatar.svg';
import './style.scss';

function Banner() {
    return (
        <section className='banner_section'>
            <div className='banner_container'>
                <img className='banner_avatar' src={avatar} alt='avatar Alexis'></img>
                <div>
                    <h1>Développeur web front-end et back-end</h1>
                    <h2>Je réalise des projets d’intégration et de programmation pour des applications et des sites web.</h2>
                </div>
            </div>
            <div className='banner_img'></div>
        </section>
    )
}

export default Banner