import AboutUs from './components/AboutUs'
import Certificates from './components/Certificates'
import Header from './components/Header'
import HeroSlider from './components/HeroSlider'
import Links from './components/Links'

function HomePage(){
    return (
        <div>
            <Header />
            <HeroSlider />
            <Links />
            <AboutUs />
            <Certificates />
        </div>
    )
}

export default HomePage