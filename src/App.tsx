import './App.css'
import About from './components/About/About';
import WhyChoose from './components/Choose/WhyChoose';
import Hero from './components/Hero/Hero';
import Navbar from './components/Navbar/Navbar';
import Services from './components/Services/Services';
import BtnContact from './components/BtnContact/BtnContact';
import Stones from './components/Stones/Stones';
import Projects from './components/Projects/Projects';
import Contact from './components/Contact/Contact';
import Footer from './components/Footer/Footer';
// Imagem utilizada no fundo do site
import Fundos from '../src/assets/Calacata-fundo.jpg';

import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";



function App() {
  useEffect(() => {
    AOS.init({
      duration: 800,
      once: true, 
    });
  }, []);

  return (
    <div className='bg-cover bg-center min-h-screen'
      style={{ backgroundImage: `url(${Fundos})` }}>
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

export default App
