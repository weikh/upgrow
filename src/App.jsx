import Company from "./components/company/company"
import Hero from "./components/hero/hero"
import Navbar from "./components/navbar/navbar"
import Partners from "./components/partners/partners"
import Project from "./components/project/project"
import Section from "./components/section/section"
import Services from "./components/services/services"
import Contact from "./components/contact/Contact"
import Footer from './components/footer/Footer'
import Clients from "./components/clients/clients"
import Logo from "./components/logo/logo"
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {

  return (
    <div className='bg-[#f7f9fd] max-w-[1440px] mx-auto min-h-screen'>
      <Navbar/>
      <Hero/>
      <Logo/>
      <Company/>
      <Services/>
      <Partners/>
      <Project/>
      <Section/>
      <Clients/>
      <Contact/>
      <Footer/>
      <ToastContainer/>
    </div>
  )
}

export default App
