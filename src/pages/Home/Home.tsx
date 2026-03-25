// Components
import Button from "../../components/Button/Button";
import Navbar from "../../components/Navbar/Navbar";
import Hero from "../../components/Hero/Hero";
import About from "../../components/About/About";
import Stones from "../../components/Stones/Stones";
import Services from "../../components/Services/Services";
import Projects from "../../components/Projects/Projects";
import WhyChoose from "../../components/Choose/WhyChoose";
import BtnContact from "../../components/BtnContact/BtnContact";
import Contact from "../../components/Contact/Contact";
import Footer from "../../components/Footer/Footer";
// Imagem utilizada no fundo do site
import Fundos from "../../assets/Calacata-fundo.jpg";
// Icones 
import { FaWhatsapp } from 'react-icons/fa'; 

// Libs 
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";



export default function Home() {
    useEffect(() => {
        AOS.init({
          duration: 800,
          once: true, 
        });
      }, []);

    return (
        <div className='bg-cover bg-center min-h-screen'
        style={{ backgroundImage: `url(${Fundos})` }}>
        <Button variant="link" as="a" href="https://wa.me/5535998522695?text=Olá, gostaria de um orçamento!" target="_blank" rel="noopener noreferrer">
            <FaWhatsapp className="text-2xl" />
        </Button>
        <Navbar />
        <Hero />
        <About />
        <Stones />
        <Services />
        <Projects />
        <WhyChoose />
        <BtnContact />
        <Contact />
        <Footer />
        </div>
    );
}