import About from "./sections/About/About"
import Contact from "./sections/contacts/Contact"
import Faqs from "./sections/Faqs/Faqs"
import Footer from "./sections/footer/Footer"
import Header from "./sections/header/Header"
import Navbar from "./sections/Navbar/Navbar"
import Portfolio from "./sections/portfolio/Portfolio"
import Services from "./sections/services/Services"

//import FloatingNav from "./sections/FloatingNav/FloatingNav"






const App = () => {
  return (
  <main >
    <Navbar/>
    <Header/>
   <About/>
    <Services/>
    <Portfolio/>
    <Faqs/>
    <Contact/>
    <Footer/>
    {/*<FloatingNav/> */}
  </main>
  )
}

export default App
