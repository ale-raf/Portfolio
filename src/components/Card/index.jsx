import './style.scss';

function Card({ cover, title, subtitle }) {
    return (
        <article className='projects_card'>
            <img src={cover} alt={title} />
            <div className='projects_hover'>
                <h3>{title}</h3>
                <h4>{subtitle}</h4>
            </div>
        </article>
    )
}

export default Card