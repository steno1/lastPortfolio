import About from "./sections/About/About"
import Contact from "./sections/contacts/Contact"
import Faqs from "./sections/Faqs/Faqs"
import Footer from "./sections/footer/Footer"
import Header from "./sections/header/Header"
import Navbar from "./sections/Navbar/Navbar"
import Portfolio from "./sections/portfolio/Portfolio"
import Services from "./sections/services/Services"
import Theme from "./theme/Theme"
import { useThemeContext } from "./context/themeContext"

//import FloatingNav from "./sections/FloatingNav/FloatingNav"

const App = () => {
  const {themeState}=useThemeContext();
  return (
  <main className={`${themeState.primary} ${themeState.background}` }>
    <Navbar/>
    <Header/>
   <About/>
    <Services/>
    <Portfolio/>
    <Faqs/>
    <Contact/>
    <Footer/>
    <Theme/> 
    {/*<FloatingNav/> */}
  </main>
  )
}

export default App
