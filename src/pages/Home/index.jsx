import HelmetComponent from '../../components/HelmetComponent';
import Header from '../../components/Header';
import Banner from '../../components/Banner';
import About from '../../components/About';
import Works from '../../components/Works';
import ContactForm from '../../components/ContactForm';
import Footer from '../../components/Footer';

function Home() {
    return (
        <>
            <HelmetComponent 
                title='Alexis Raffin - Développeur web frontend' 
                description='Accueil du site de Alexis Raffin, développeur web frontend'
            />
            <Header />
            <Banner />
            <About />
            <Works />
            <ContactForm />
            <Footer />
        </>
    )
}

export default Home