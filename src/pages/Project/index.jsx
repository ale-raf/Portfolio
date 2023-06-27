import { useParams } from 'react-router-dom';
import { useMediaQuery } from 'react-responsive';
import { projects } from '../../datas/projects';
import Description from '../../components/Description';
import Header from '../../components/Header';
import HelmetComponent from '../../components/HelmetComponent';
import Footer from '../../components/Footer';
import ProjectAbstract from '../../components/ProjectAbstract';
import Result from '../../components/Result';
import Slider from '../../components/Slider';
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
            <HelmetComponent 
                title={`${currentProject[0].title} - ${currentProject[0].subtitle}`} 
                description={currentProject[0].subtitle} 
            />
            <Header />
            <main className='project_wrapper'>
                {currentProject.map((project) => (
                    <div key={project.id} className='project_container'>
                        {isTabletOrMobile && (
                            <ProjectAbstract title={project.title} subtitle={project.subtitle} infos={project.technologies} />
                        )}
                        <Result 
                            cover={project.cover}
                            demo={project.demo}
                            title={project.title}
                            repository={project.repository}
                            openInNewTab={openInNewTab}
                            desktopIcon={faDesktop}
                            fileCodeIcon={faFileCode}
                        />
                        <Description 
                            demands={project.demands}
                            difficulties={project.difficulties}
                            title={project.title}
                            solutions={project.solutions}
                            subtitle={project.subtitle}
                            technologies={project.technologies}
                            isTabletOrMobile={isTabletOrMobile}
                        />
                        <Slider index={project.id} projects={projects} />
                    </div>
                ))}
            </main>
            <Footer />
        </>
    )
}

export default Project