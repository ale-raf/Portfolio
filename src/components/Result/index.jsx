import Button from "../Button";
import './result.scss';

function Result(props) {
    return (
        <div className='result_container'>
            <img src={props.cover} alt={props.title} />
            <div className='result_btn'>
                {props.demo !== null && (
                    <Button 
                        isDefaultBtn={true} 
                        openInNewTab={props.openInNewTab} 
                        link={props.demo} 
                        icon={props.desktopIcon} 
                        text="Live demo" 
                    />
                )}
                <Button 
                    className={props.demo === null ? 'source_code' : null}
                    isDefaultBtn={true} 
                    openInNewTab={props.openInNewTab} 
                    link={props.repository} 
                    icon={props.fileCodeIcon} 
                    text="Code source" 
                />
            </div>
        </div>
    )
}

export default Result