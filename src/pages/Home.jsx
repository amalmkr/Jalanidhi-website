import Hero from '../sections/hero'
import About from '../sections/about'
import Services from '../sections/service'
import Contacts from '../sections/contact'
import Stats from '../sections/Stats'


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