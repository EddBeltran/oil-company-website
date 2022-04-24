import Header from './components/Header';
import Hero from './components/HeroSlider/Hero';
import HeroLinks from './components/HeroLinks';
import WhoWeAre from './components/WhoWeAre';
import CompanyFacts from './components/CompanyFacts/CompanyFacts';
import Values from './components/Values';
import Certificates from './components/Certificates';
import Footer from './components/Footer/Footer';

import useObserver from './hooks/useObserver'
import { useEffect } from 'react'
import Mosaic from './components/Mosaic/Mosaic';
import Services from './components/Servicies/Services';


function App(){
    const[observer, setElements, entries] = useObserver({
        threshold: 0.25,
        root: null
    });

    useEffect(function(){
        const bro = document.querySelectorAll(".bro");
        setElements(bro);
    }, [setElements]);

    useEffect(function(){
        entries.forEach(entry =>{
            if (entry.isIntersecting){
                const tio = entry.target;
                tio.classList.add("sam");
                observer.unobserve(tio);
            }
        });
    }, [entries, observer]);

    return (
        <div>
            <Header />
            <Hero />
            <HeroLinks />
            <WhoWeAre />
            <CompanyFacts />
            <Values />
            <Services />
            <Mosaic />
            <Certificates />
            <Footer />
        </div>
    )
}

export default App