import AboutUs from './components/AboutUs'
import Certificates from './components/Certificates'
import Header from './components/Header'
import Hero from './components/Hero'
import Links from './components/Links'
import Facts from './components/Facts'
import Values from './components/Values' 
import Services from './components/Services'
import Footer from './components/Footer'

function HomePage(){
    return (
        <div>
            <Header />
            <Hero />
            <Links />
            <AboutUs />
            <Facts />
            <Values />
            <Services />
            <Certificates />
            <Footer />
        </div>
    )
}

export default HomePage