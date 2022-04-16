import Header from './components/Header';
import HeroSlider from './components/HeroSlider/HeroSlider';
import HeroLinks from './components/HeroLinks';
import WhoWeAre from './components/WhoWeAre';
import CompanyFacts from './components/CompanyFacts/CompanyFacts';
import Values from './components/Values';

import useObserver from './hooks/useObserver'
import { useEffect } from 'react'
import Mosaic from './components/Mosaic/Mosaic';



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
            <HeroSlider />
            <HeroLinks />
            <WhoWeAre />
            <CompanyFacts />
            <Values />
            <Mosaic />
        </div>
    )
}

export default App