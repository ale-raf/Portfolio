import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
<<<<<<< HEAD
import skills from '../../datas/skills';
import './style.scss';

function Skills() {
=======
import { faCode, faServer, faScrewdriverWrench } from '@fortawesome/free-solid-svg-icons';
import './style.scss';

function Skills() {
    const skills = [
        {
            icon: faCode,
            title: 'Front-end',
            items: ['HTML', 'CSS (SCSS)', 'JavaScript', 'React']
        },
        {
            icon: faServer,
            title: 'Back-end',
            items: ['Node.js', 'Express', 'MongoDB']
        },
        {
            icon: faScrewdriverWrench,
            title: 'Outils',
            items: ['Git & Github', 'Figma & Photoshop', 'SEO', 'Trello']
        }
    ]

>>>>>>> 54fd0d8b0dbb8f866c82b50065f90a7e3062cba5
    return (
        <div className='about_skills'>
            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. 
                Iusto, nam incidunt! Blanditiis, tempore. Excepturi repellat quam iste mollitia. 
                Laboriosam cum est nulla itaque et, eos repudiandae nobis error. Amet, quo?</p>
            <div className='skills_list'>
                {skills.map((skill) => (
                    <div className='skills_items' key={skill.title}>
                        <h3>{skill.title} <FontAwesomeIcon icon={skill.icon} /></h3>
                        <ul>
                            {skill.items.map((item) => (
                                <li key={item}>{item}</li>
                            ))}
                        </ul>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Skills 
