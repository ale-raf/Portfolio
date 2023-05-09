import Skills from '../Skills';
import './style.scss';

function About() {
    return (
        <section className='about_section'>
            <div className='about_container'>
                <div className='about_introduction'>
                    <h3>Bonjour, je m'appelle Alexis et je suis développeur web junior. Les projets que je réalise sont plutôt
                        orientés vers le front mais je reste ouvert au back !</h3>
                    <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eveniet, quia aspernatur. Nulla, unde ea mollitia voluptates nobis quod. Accusantium non harum maiores sunt, totam modi nam? Reiciendis, maxime! Odit, accusamus.</p>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit, quae! Veniam dicta nisi hic explicabo cumque repellat! Nobis necessitatibus dolorem perspiciatis, laboriosam, deserunt voluptas cum natus modi mollitia, nam provident.</p>
                    <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Tempore, vitae repudiandae repellendus rem aperiam quod delectus dolorum! Id cumque voluptas esse nemo, veniam, quas libero in deserunt, impedit cum ad.</p>
                </div>
                <Skills />
                {/* <div className='about_img'></div> */}
            </div>
        </section>
    )
}

export default About