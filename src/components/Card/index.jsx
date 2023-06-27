import { Link } from 'react-router-dom';
import './style.scss';

function Card(props) {
    return (
        <Link to={`/Portfolio/projets/${props.slug}`} className='projects_ancre'>
            <article className='projects_card'>
                <img src={props.cover} alt={props.title} />
                <div className='projects_hover'>
                    <h3>{props.title}</h3>
                    <h4>{props.subtitle}</h4>
                </div>
            </article>
        </Link>
    )
}

export default Card