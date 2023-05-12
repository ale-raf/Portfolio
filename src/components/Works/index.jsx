import { useState, useMemo } from 'react';
import projects from '../../datas/projects';
import Card from '../Card';
import './style.scss';
import { useEffect } from 'react';

function Works() {

    const categories = ["frontend", "backend", "javascript", "react", "express"];
    
    return (
        <>
            <section id="projets">
                <div className='works_container'>
                    <h2>projets</h2>
                    <ul className='works_filters'>
                        <li>tous</li>
                        {categories.map((category) => (
                            <li key={category}>{category}</li>
                        ))}
                    </ul>
                    <div className='works_wrapper'>
                        <div className='works_grid'>
                            {projects.map((project) => (
                                <Card key={project.id}
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