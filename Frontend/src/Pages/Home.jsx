import React from 'react'
import HeroSection from '../Components/HeroSection'
import Section1 from '../Components/Section1'
import Section2 from '../Components/Section2'
import ScrollerText1 from '../Components/ScrollerText1'
import TechStackSectionTop from '../Components/TechStackSectionTop'
import TechStackSection from '../Components/TechStackSection'
import Testimonials from '../Components/Testimonials'


function Home() {

  return (
    <>
      <HeroSection />
      <Section1 />
      <Section2 />
      <ScrollerText1 />
      <TechStackSectionTop />
      <TechStackSection />
      <Testimonials />
    </>
  )
}

export default Home
