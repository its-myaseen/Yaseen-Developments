import React from 'react'
import './App.css'
import NavigationBar from './Components/NavigationBar'
import HeroSection from './Components/HeroSection'
import Section1 from './Components/Section1'
import Section2 from './Components/Section2'
import ScrollerText1 from './Components/ScrollerText1'
import TechStackSection from './Components/TechStackSection'
import TechStackSectionTop from './Components/TechStackSectionTop'
import Testimonials from './Components/Testimonials'
import Footer from './Components/Footer'
import Home from './Pages/Home'

import { BrowserRouter } from 'react-router'
import { Routes } from 'react-router'
import { Route } from 'react-router'
import Services from './Pages/Services'
import AboutMe from './Pages/AboutMe'
import ContactMe from './Pages/ContactMe'
import Mern from './Pages/Mern'
import ScrolltoTop from './Components/ScrollToTop'


function App() {

  return (
    <>
      <BrowserRouter>
        <NavigationBar></NavigationBar>
        <ScrolltoTop/>
        <Routes>
          <Route path='/' element={<Home />}></Route>
          <Route path='/Home' element={<Home />}></Route>
          <Route path='/Services' element={<Services />}></Route>
          <Route path='/AboutMe' element={<AboutMe />}></Route>
          <Route path='/Contact' element={<ContactMe />}></Route>
          
          {/* SERVICES ROUTES */}
          <Route path='/Services/MERN' element={<Mern />}></Route>
        </Routes>
        <Footer></Footer>
      </BrowserRouter>
    </>
  )
}

export default App
