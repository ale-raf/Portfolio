import { useParams } from 'react-router-dom';
import { useMediaQuery } from 'react-responsive';
import projects from '../../datas/projects';
import HelmetComponent from '../../components/HelmetComponent';
import Header from '../../components/Header';
import Button from '../../components/Button';
import ProjectAbstract from '../../components/ProjectAbstract';
import Info from '../../components/Info';
import Slider from '../../components/Slider';
import Footer from '../../components/Footer';
import { faDesktop, faFileCode } from '@fortawesome/free-solid-svg-icons';
import './project.scss';

function Project() {
    const { slug } = useParams();

    const currentProject = projects.filter((project) => project.slug === slug);

    const openInNewTab = (url) => {
        window.open(url, '_blank', 'noreferrer');
    };

    const isTabletOrMobile = useMediaQuery({ query: '(max-width: 768px)' });

    return (
        <>
            <HelmetComponent title={`${currentProject[0].title} - ${currentProject[0].subtitle}`} description={currentProject[0].subtitle} />
            <Header />
            <main className='project_wrapper'>
                {currentProject.map((project) => (
                    <div key={project.id} className='project_container'>
                        {isTabletOrMobile && (
                            <ProjectAbstract title={project.title} subtitle={project.subtitle} infos={project.technologies} />
                        )}
                        <div className='project_result'>
                            <img src={project.cover} alt={project.title} />
                            <div className='project_btn'>
                                {project.demo !== null && (
                                    <Button 
                                        isDefaultBtn={true} 
                                        openInNewTab={openInNewTab} 
                                        link={project.demo} 
                                        icon={faDesktop} 
                                        text="Live demo" 
                                    />
                                )}
                                <Button 
                                    className={project.demo === null ? 'source_code' : null}
                                    isDefaultBtn={true} 
                                    openInNewTab={openInNewTab} 
                                    link={project.repository} 
                                    icon={faFileCode} 
                                    text="Code source" 
                                />
                            </div>
                        </div>
                        <div className='project_info'>
                            {!isTabletOrMobile && (
                                <ProjectAbstract title={project.title} subtitle={project.subtitle} infos={project.technologies} />
                            )}
                            <p><b>Objectifs</b> : {project.demands}</p>
                            <Info className="project_prob_sol" title="Problèmes rencontrés :" infos={project.difficulties} />
                            <Info className="project_prob_sol" title="Solutions :" infos={project.solutions} />
                        </div>
                        <Slider index={project.id} projects={projects} />
                    </div>
                ))}
            </main>
            <Footer />
        </>
    )
}

export default Project