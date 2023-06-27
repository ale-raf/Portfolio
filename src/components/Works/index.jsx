import { useMemo, useState } from 'react';
import { categories } from '../../datas/categories';
import { projects } from '../../datas/projects';
import Card from '../Card';
import './style.scss';

function Works() {

    const [state, setState] = useState("");

    const filterProjects = useMemo(() => {
        return projects.filter((project) => {
            if (state === "") {
                return projects
            }
            const categoryProject = project.categories;
            return categoryProject.includes(state);
        })
    }, [state])
    
    return (
        <>
            <section id="projets">
                <div className='works_container'>
                    <h2>Projets</h2>
                    <ul className='works_filters'>
                        <li onClick={() => setState("")}>Tous</li>
                        {categories.map((category) => (
                            <li key={category} onClick={() => setState(category)}>{category}</li>
                        ))}
                    </ul>
                    <div className='works_wrapper'>
                        <div className='works_grid'>
                            {filterProjects.map((project) => (
                                <Card key={project.id}
                                slug ={project.slug}
                                cover={project.cover} 
                                title={project.title} 
                                subtitle={project.subtitle} />
                            ))}
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Works