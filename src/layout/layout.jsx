import React from 'react'
import Navbar from '../components/navbar/navbar'
import Footer from '../components/footer/Footer'

const Layout = ({children})=>{
   return (
      <div>
         <Navbar/>
         {children}
         <Footer/>  
      </div>
   )
}

export default Layout