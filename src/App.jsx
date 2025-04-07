
import './App.css'
import { Navbar } from './components/navbar/Navbar'
import { Hero } from './components/hero/Hero'
import { About } from './components/about/About'
import { Achievements } from './components/achivements/Achivements'
import { Services } from './components/services/Services'
import { PracticeAreas } from './components/practiceareas/PracticeAreas'
import { PeopleMakeTheDifference } from './components/PeopleMakeTheDifference/PeopleMakeTheDifference'
import { Attorneys } from './components/Attorneys/Attorneys'
import { Testimonials } from './components/Test/Testimonials'
import { Consultation } from './components/Consultation/Consultation'
import CallSection from './components/CallSection/CallSection'
import Footer from './components/Footer/Footer'

function App() {
 

  return (
    <>
    <Navbar/> 
    <Hero/>
    <About/>
    <Achievements/>
    <PeopleMakeTheDifference/>
    <Services/>
    <Attorneys/>
    
    <Testimonials/>
    <Consultation/>
    <PracticeAreas/>
   
     {/* <CallSection/>  */}
    <Footer/>
    </>
  )
}

export default App
