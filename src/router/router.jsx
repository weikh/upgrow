import React from 'react'
import {Routes, Route} from 'react-router-dom'
import Layout from "../layout/layout"
import About from '../pages/about/about'
import Contacts from '../pages/contact/contacts'
import Home from '../pages/home/home'
import Portfolio from '../pages/portfolio/portfolio'
import Services from '../pages/services/services'

const Router = () =>{
   return(
      <>
      <Layout>
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/contact" element={<Contacts/>} />
          <Route path="/services" element={<Services/>} />
          <Route path="/about" element={<About/>} />
          <Route path="/portfolio" element={<Portfolio/>} />
        </Routes>
      </Layout>
    </>
   )
}

export default Router