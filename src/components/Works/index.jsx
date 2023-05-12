<<<<<<< HEAD
import { useState, useMemo } from 'react';
import projects from '../../datas/projects';
import Card from '../Card';
import './style.scss';
import { useEffect } from 'react';

function Works() {

    const categories = ["frontend", "backend", "javascript", "react", "express"];
    
=======
import './style.scss';

function Works() {
>>>>>>> 54fd0d8b0dbb8f866c82b50065f90a7e3062cba5
    return (
        <>
            <section id="projets">
                <div className='works_container'>
                    <h2>projets</h2>
<<<<<<< HEAD
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
=======
                    <div className='works_card'>
                        <div className='works_hover'>
                            <h3>Titre</h3>
                            <h4>Sous-titre</h4>
>>>>>>> 54fd0d8b0dbb8f866c82b50065f90a7e3062cba5
                        </div>
                    </div>
                </div>
            </section>
<<<<<<< HEAD
        </>
=======

            <style jsx>
                {`
                    
                `}
            </style>
        </>
        
>>>>>>> 54fd0d8b0dbb8f866c82b50065f90a7e3062cba5
    )
}

export default Works