import { useMemo, useState } from 'react';
import projects from '../../datas/projects';
import Card from '../Card';
import './style.scss';

function Works() {

    const categories = ["Frontend", "Backend", "JavaScript", "React", "Express"];

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
    
    // const [state, setState] = useState(projects);

    // const filterProjects = (params) => {
    //     const res = projects.filter((project) => project.categories === params);
    //     console.log(params);
    //     setState(res);
    // }
    
    return (
        <>
            <section id="projets">
                <div className='works_container'>
                    <h2>projets</h2>
                    <ul className='works_filters'>
                        {/* <li onClick={() => setState(projects)}>Tous</li> */}
                        <li onClick={() => setState("")}>Tous</li>
                        {categories.map((category) => (
                            // <li key={category} onClick={() => filterProjects(category)}>{category}</li>
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