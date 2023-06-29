import Skills from '../Skills';
import { aboutContent } from '../../datas/about';
import './about.scss';

function About() {
    return (
        <section id='about' className='about_section'>
            <div className='about_container'>
                <div className='about_introduction'>
                    {aboutContent.map((about, key) => {
                        return (
                            <p key={key}>{about.text}</p>
                        )
                    })}
                </div>
                <Skills />
                <div className='about_img'></div>
            </div>
        </section>
    )
}

export default About