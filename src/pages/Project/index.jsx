import '../../datas/projects';
import { useParams } from 'react-router-dom';
import projects from '../../datas/projects';

function Project() {
    const { slug } = useParams();

    const currentProject = projects.filter((project) => project.slug === slug);

    return (
        <main>
            {currentProject.map((item) => (
                <div key={item.id} className='project_container'>
                    <h2>{item.title}</h2>
                    <h3>{item.subtitle}</h3>
                    <ul>
                        {item.technologies.map((tech) => (
                            <li key={tech}>{tech}</li>
                        ))}
                    </ul>
                    <p>{item.demands}</p>
                    <p>{item.difficulties}</p>
                    <p>{item.solutions}</p>
                </div>
            ))}
        </main>
    )
}

export default Project