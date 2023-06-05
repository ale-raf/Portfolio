import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleArrowLeft, faCircleArrowRight } from '@fortawesome/free-solid-svg-icons';
// import projects from '../../datas/projects';
import './slider.scss';

function Slider(props) {
    const index = props.index;
    
    const len = props.projects.length - 1;
    
    const [back, setBack] = useState(0);
    
    const [next, setNext] = useState(0);

    useEffect(() => {
        index === 0 ? setBack(len) : setBack(index - 1);
        index === len ? setNext(0) : setNext(index + 1);
    }, [index, back, next, len]);



    return (
        <div className='slider_navigation'>
            <Link to={`/projets/${props.projects[back].slug}`}>
                <button>
                    <FontAwesomeIcon icon={faCircleArrowLeft} className='slider_icon'/>
                    projet précédent
                </button>
            </Link>
            <p>{index + 1} / {props.projects.length}</p>
            <Link to={`/projets/${props.projects[next].slug}`}>
                <button>
                    projet suivant
                    <FontAwesomeIcon icon={faCircleArrowRight} className='slider_icon'/>
                </button>
            </Link>
        </div>
    )
}

export default Slider