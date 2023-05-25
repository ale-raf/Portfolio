import '../../datas/projects';
import { useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import projects from '../../datas/projects';
import HelmetComponent from '../../components/HelmetComponent';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import './project.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faDesktop, faFileCode, faCircleArrowLeft, faCircleArrowRight } from '@fortawesome/free-solid-svg-icons';

function Project() {
    const { slug } = useParams();

    const currentProject = projects.filter((project) => project.slug === slug);

    // const [count, setCount] = useState(currentProject[0].id);

    const [index, setIndex] = useState(0);

    function previousWork() {
        if (index === 0) {
            // setCount(projects.length)
            setIndex(projects.length - 1)
        } 
        // setCount(count - 1)
        setIndex(index - 1)
    }

    function nextWork() {
        if (index === projects.length - 1) {
            // setCount(1)
            setIndex(0)
        }
        // setCount(count + 1)
        setIndex(index + 1)
        console.log(projects[index]);
    }

    return (
        <>
            <HelmetComponent title={`${currentProject[0].title} - ${currentProject[0].subtitle}`} description={currentProject[0].subtitle} />
            <Header />
            <main className='project_wrapper'>
                {currentProject.map((project) => (
                    <div key={project.id} className='project_container'>
                        <div className='project_result'>
                            <img src={project.cover} alt={project.title} />
                            <button>
                                <FontAwesomeIcon icon={faDesktop} /> 
                                Démo du projet
                            </button>
                            <button>
                                <FontAwesomeIcon icon={faFileCode} /> 
                                Code source du projet
                            </button>
                        </div>
                        <div className='project_info'>
                            <h2>{project.title}</h2>
                            <h3>{project.subtitle}</h3>
                            <ul className='project_tech'>
                                <b>Technologies utilisées</b> :
                                {project.technologies.map((tech) => (
                                    <li key={tech}>{tech}</li>
                                ))}
                            </ul>
                            <p><b>Objectifs</b> : {project.demands}</p>
                            <ul className='project_prob_sol'>
                                <b>Problèmes rencontrés</b> : 
                                {project.difficulties.map((difficulty) => (
                                    <li key={difficulty}>{difficulty}</li>
                                ))}
                            </ul>
                            <ul className='project_prob_sol'>
                                <b>Solutions</b> : 
                                {project.solutions.map((sol) => (
                                    <li key={sol}>{sol}</li>
                                ))}
                            </ul>
                        </div>
                    </div>
                ))}
                <div className='project_navigation'>
                    <Link to={`/projets/${projects[index].slug}`}>
                        <button onClick={previousWork}>
                            <FontAwesomeIcon icon={faCircleArrowLeft} className='project_icon'/>
                            projet précédent
                        </button>
                    </Link>
                    {/* <p>{count} / {projects.length}</p> */}
                    <Link to={`/projets/${projects[index].slug}`}>
                        <button onClick={nextWork}>
                            projet suivant
                            <FontAwesomeIcon icon={faCircleArrowRight} className='project_icon'/>
                        </button>
                    </Link>
                </div>
            </main>
            <Footer />
        </>
    )
}

export default Project