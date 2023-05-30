import { useParams } from 'react-router-dom';
import projects from '../../datas/projects';
import HelmetComponent from '../../components/HelmetComponent';
import Header from '../../components/Header';
import Info from '../../components/Info';
import Slider from '../../components/Slider';
import Footer from '../../components/Footer';
import './project.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faDesktop, faFileCode } from '@fortawesome/free-solid-svg-icons';

function Project() {
    const { slug } = useParams();

    const currentProject = projects.filter((project) => project.slug === slug);

    return (
        <>
            <HelmetComponent title={`${currentProject[0].title} - ${currentProject[0].subtitle}`} description={currentProject[0].subtitle} />
            <Header />
            <main className='project_wrapper'>
                {currentProject.map((project) => (
                    <div key={project.id} className='project_container'>
                        <div className='project_result'>
                            <img src={project.cover} alt={project.title} />
                            <div className='project_btn'>
                                <button>
                                    <FontAwesomeIcon icon={faDesktop} /> 
                                    Démo du projet
                                </button>
                                <button>
                                    <FontAwesomeIcon icon={faFileCode} /> 
                                    Code source du projet
                                </button>
                            </div>
                        </div>
                        <div className='project_info'>
                            <h2>{project.title}</h2>
                            <h3>{project.subtitle}</h3>
                            <Info className="project_tech" title="Technologies utilisées" infos={project.technologies} />
                            <p><b>Objectifs</b> : {project.demands}</p>
                            <Info className="project_prob_sol" title="Problèmes rencontrés" infos={project.difficulties} />
                            <Info className="project_prob_sol" title="Solutions" infos={project.solutions} />
                        </div>
                    </div>
                ))}
            <Slider />
            </main>
            <Footer />
        </>
    )
}

export default Project