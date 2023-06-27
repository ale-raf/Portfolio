import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { useMediaQuery } from 'react-responsive';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleArrowLeft, faCircleArrowRight } from '@fortawesome/free-solid-svg-icons';
import './slider.scss';

function Slider(props) {
    const index = props.index;
    
    const len = props.projects.length - 1;
    
    const [back, setBack] = useState(0);
    
    const [next, setNext] = useState(0);

    const isTabletOrMobile = useMediaQuery({ query: '(max-width: 768px)' });

    useEffect(() => {
        index === 0 ? setBack(len) : setBack(index - 1);
        index === len ? setNext(0) : setNext(index + 1);
    }, [index, back, next, len]);



    return (
        <div className='slider_navigation'>
            <Link to={`/portfolio/projets/${props.projects[back].slug}`}>
                {!isTabletOrMobile ?
                <button>
                    <FontAwesomeIcon icon={faCircleArrowLeft} className='slider_icon'/>
                    projet précédent
                </button> :
                    <FontAwesomeIcon icon={faCircleArrowLeft} className='slider_icon mobile'/>}
            </Link>
            <p>{index + 1} / {props.projects.length}</p>
            <Link to={`/portfolio/projets/${props.projects[next].slug}`}>
                {!isTabletOrMobile ? 
                <button>
                    projet suivant
                    <FontAwesomeIcon icon={faCircleArrowRight} className='slider_icon'/>
                </button> :
                <FontAwesomeIcon icon={faCircleArrowRight} className='slider_icon mobile'/>}
            </Link>
        </div>
    )
}

export default Slider