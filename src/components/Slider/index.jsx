import { useState } from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleArrowLeft, faCircleArrowRight } from '@fortawesome/free-solid-svg-icons';
import projects from '../../datas/projects';
import './slider.scss';

function Slider() {

    // const [count, setCount] = useState(currentProject[0].id);

    const [index, setIndex] = useState(0);

    function previousWork() {
        if (index === 0) {
            // setCount(projects.length)
            setIndex(projects.length - 1)
        } 
        // setCount(count - 1)
        setIndex(index - 1)
    }

    function nextWork() {
        if (index === projects.length - 1) {
            // setCount(1)
            setIndex(0)
        }
        // setCount(count + 1)
        setIndex(index + 1)
        console.log(projects[index]);
    }

    return (
        <div className='slider_navigation'>
            <Link to={`/projets/${projects[index].slug}`}>
                <button onClick={previousWork}>
                    <FontAwesomeIcon icon={faCircleArrowLeft} className='slider_icon'/>
                    projet précédent
                </button>
            </Link>
            {/* <p>{count} / {{projects}.length}</p> */}
            <Link to={`/projets/${projects[index].slug}`}>
                <button onClick={nextWork}>
                    projet suivant
                    <FontAwesomeIcon icon={faCircleArrowRight} className='slider_icon'/>
                </button>
            </Link>
        </div>
    )
}

export default Slider