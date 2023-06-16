import Info from "../Info";
import './project_abstract.scss';

function ProjectAbstract(props) {
    return (
        <div className='project_abstract'>
            <h2>{props.title}</h2>
            <h3>{props.subtitle}</h3>
            <Info className="project_tech" title="Technologies utilisées :" infos={props.infos} />
        </div>
    )
}

export default ProjectAbstract