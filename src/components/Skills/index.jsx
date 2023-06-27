import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { skillsList, skillsIntro } from '../../datas/skills';
import './style.scss';

function Skills() {
    return (
        <div className='about_skills'>
            <p>{skillsIntro}</p>
            <div className='skills_list'>
                {skillsList.map((skill) => (
                    <div className='skills_items' key={skill.title}>
                        <h3>
                            {skill.title} 
                            <FontAwesomeIcon icon={skill.icon} />
                        </h3>
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
