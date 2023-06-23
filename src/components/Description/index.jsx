import ProjectAbstract from "../ProjectAbstract";
import Info from "../Info";
import './description.scss';

function Description(props) {
    return (
        <div className='description_container'>
            {!props.isTabletOrMobile && (
                <ProjectAbstract title={props.title} subtitle={props.subtitle} infos={props.technologies} />
            )}
            <p><b>Objectifs</b> : {props.demands}</p>
            <Info className="description_info" title="Problèmes rencontrés :" infos={props.difficulties} />
            <Info className="description_info" title="Solutions :" infos={props.solutions} />
        </div>
    )
}

export default Description