import Company from "./components/company/company"
import Hero from "./components/hero/hero"
import Navbar from "./components/navbar/navbar"


function App() {

  return (
    <div className='bg-[#f7f9fd] max-w-[1440px] border border-black mx-auto min-h-screen'>
      <Navbar/>
      <Hero/>
      <Company/>
    </div>
  )
}

export default App
