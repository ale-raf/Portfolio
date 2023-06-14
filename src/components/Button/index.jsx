import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

function Button(props) {
    const isDefaultBtn = props.isDefaultBtn;
    if (isDefaultBtn) {
        return (
            <button className={props.className} role="link" onClick={() => props.openInNewTab(props.link)}>
                <FontAwesomeIcon icon={props.icon} /> 
                {props.text}
            </button>
        )
    }
    return (
        <button role="link" onClick={() => props.openInNewTab(props.link)}>
            <i className={props.icon}></i>
        </button>
    )
}

export default Button