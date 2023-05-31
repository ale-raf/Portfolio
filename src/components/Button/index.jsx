import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

function Button(props) {

    return (
        <button role="link" onClick={() => props.openInNewTab(props.link)}>
            <FontAwesomeIcon icon={props.icon} /> 
            {props.text}
        </button>
    )
}

export default Button