import Header from './components/Header';
import HeroSlider from './components/HeroSlider/HeroSlider';
import WhoWeAre from './components/WhoWeAre';
import CompanyFacts from './components/CompanyFacts/CompanyFacts';

//import AboutUs from './components/AboutUs'
//import Certificates from './components/Certificates'
// import Hero from './components/Hero'
// import Links from './components/Links'
// import Facts from './components/Facts'
// import Values from './components/Values' 
// import Services from './components/Services'
// import Footer from './components/Footer'
// import Mosaic from './components/Mosaic'
// import News from './components/News'
import useObserver from './hooks/useObserver'
import { useEffect } from 'react'
import HeroLinks from './components/HeroLinks';



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
        </div>
    )
}

export default App