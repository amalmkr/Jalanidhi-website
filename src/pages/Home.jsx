import Hero from '../sections/home/hero'
import About from '../sections/home/LandingAbout'
import Services from '../sections/home/service'
import Contacts from '../sections/home/contact'
import Stats from '../sections/home/Stats'
import Footer from '../components/footer'


function Home(){

    return(
        <>
        <Hero/>
        <Stats/>
        <About/>
        <Services/>
        <Contacts/>
        </>
    )
}

export default Home;