import Lottie from 'lottie-react'
import React, { useRef, useState } from 'react'
import animationData from '../assets/desktopAnim.json'
import ContactDetailsPopup from './ContactDetailsPopup'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { Link } from 'react-router'
gsap.registerPlugin(ScrollTrigger)

const TechStackSectionTop = () => {
  const [showContactDetails, setShowContactDetails] = useState(false)
  const closePopup = () => {
    setShowContactDetails(false)
  }

  const heading = useRef();
  const subHeading = useRef();
  const buttonAlpha = useRef();
  const buttonBravo = useRef();
  const svg = useRef();

  useGSAP(()=>{
    gsap.from(heading.current, {
      xPercent: -100,
      opacity: 0,
      duration: 1,
      scrollTrigger: {
        trigger: heading.current,
        start: "top 80%",
        toggleActions: 'play none none reverse'
      }
    })

    gsap.from(subHeading.current, {
      xPercent: -100,
      opacity: 0,
      duration: 1,
      scrollTrigger: {
        trigger: subHeading.current,
        start: "top 80%",
        toggleActions: 'play none none reverse'
      }
    })

    gsap.from(buttonAlpha.current, {
      xPercent: -100,
      opacity: 0,
      duration: 1,
      ease: "back.out(1.7)",
      scrollTrigger: {
        trigger: buttonAlpha.current,
        start: "top 80%",
        toggleActions: 'play none none reverse'
      }
    })

    gsap.from(buttonBravo.current, {
      xPercent: -100,
      opacity: 0,
      duration: 1,
      ease: "back.out(1.7)",
      scrollTrigger: {
        trigger: buttonBravo.current,
        start: "top 80%",
        toggleActions: 'play none none reverse'
      }
    })

    gsap.from(svg.current, {
      xPercent: 100,
      opacity: 0,
      duration: 1,
      ease: "back.out(1.7)",
      scrollTrigger: {
        trigger: svg.current,
        start: "top 70%",
        toggleActions: 'play none none reverse'
      }
    })
  })
  return (
    <div className='flex relative box-border sm:h-90 md:h-140 w-[100%] px-5 pb-10 sm:pb-10 md:pb-0 md:px-10 overflow-hidden '>
      <div className='block relative h-full w-full md:w-1/2'>
        <h1 ref={heading} className='block relatice text-left text-white font-bold text-2xl sm:text-2xl md:text-3xl lg:text-4xl mt-20'>The Technologies <br></br>That Power My Code</h1>
        <p ref={subHeading} className='w-full md:w-[80%] text-left text-gray-300 mt-5 text-[13px] md:text-[13px] lg:text-[16px]'>I’m passionate about building modern, scalable, and performant digital experiences. Over the years, I’ve worked with a wide range of technologies — from front-end tools like HTML, CSS, and JavaScript to back-end systems powered by Node.js, Python, and databases like MongoDB and MySQL. I also work with tools like Docker for containerization and GitHub for version control and collaboration.</p>
        <div className='flex items-center mt-10 gap-3'>
         <Link to='/AboutMe'> <button ref={buttonAlpha} className='px-6 py-3 md:px-8 md:py-3 text-black text-sm bg-white rounded-md cursor-pointer hover:bg-gray-200 active:bg-gray-200'>Learn More</button></Link>
          <button ref={buttonBravo} className='px-6 py-3 md:px-8 md:py-3 text-white text-sm bg-blue-500 rounded-md cursor-pointer hover:bg-blue-600 active:bg-blue-600' onClick={()=>{setShowContactDetails(true)}}>Visit Social Media</button>
        </div>

      </div>
      <div ref={svg} className='hidden md:block relative h-full w-1/2 overflow-hidden box-border'>

        <Lottie animationData={animationData} loop={true} className='block absolute w-full -top-10'></Lottie>
      </div>
      {
        showContactDetails && <ContactDetailsPopup closePopup={closePopup}></ContactDetailsPopup>
      }
    </div>
  )
}

export default TechStackSectionTop
