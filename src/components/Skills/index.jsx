import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import skills from '../../datas/skills';
import './style.scss';

function Skills() {
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
