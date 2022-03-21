import AboutUs from './components/AboutUs'
import Certificates from './components/Certificates'
import Header from './components/Header'
import Hero from './components/Hero'
import Links from './components/Links'
import Facts from './components/Facts'

function HomePage(){
    return (
        <div>
            <Header />
            <Hero />
            <Links />
            <AboutUs />
            <Facts />
            <Certificates />
        </div>
    )
}

export default HomePage