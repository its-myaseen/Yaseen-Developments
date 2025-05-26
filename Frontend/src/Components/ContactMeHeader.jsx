import Lottie from 'lottie-react'
import React, { useRef } from 'react'
import animationData from '../assets/Animation - 1747794974724.json'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
gsap.registerPlugin(ScrollTrigger)

const ContactMeHeader = () => {
  const heading = useRef()
  const subHeading = useRef()
  const svg = useRef()
  const elements = useRef()
  
  useGSAP(()=>{
    gsap.from(svg.current, {
      opacity: 0,
      yPercent: -50,
      duration: 1,
      ease: 'power2.out',
      scrollTrigger: {
        trigger: svg.current,
        start: 'top 80%',
        toggleActions: 'play none none reverse'
      }
    })

    gsap.from(heading.current, {
      opacity: 0,
      yPercent: 100,
      duration: 1,
      ease: 'power2.out',
      scrollTrigger: {
        trigger: heading.current,
        start: 'top 90%',
        toggleActions: 'play none none reverse'
      }
    })

    gsap.from(subHeading.current, {
      opacity: 0,
      yPercent: 100,
      duration: 1,
      ease: 'power2.out',
      scrollTrigger: {
        trigger: subHeading.current,
        start: 'top 90%',
        toggleActions: 'play none none reverse'
      }
    })

    gsap.from(elements.current, {
      opacity: 0,
      yPercent: 100,
      duration: 1,
      ease: 'power2.out',
      scrollTrigger: {
        trigger: elements.current,
        start: 'top 85%',
        toggleActions: 'play none none reverse'
      }
    })

    
  })
  return (
    <>
      <div className='flex justify-left sm:justify-center mt-20 px-5'>
                <Lottie ref={svg} animationData={animationData} loop={true} className='block relative h-20'></Lottie>
            </div>
            <h1 ref={heading} className='block relative ml-5 sm:ml-0 text-white text-3xl sm:text-3xl md:text-4xl w-[70%] sm:w-[60%] md:w-[40%] text-left sm:text-center sm:left-1/2 sm:-translate-x-1/2 mt-5'>Get <b className='font-normal text-blue-500'>In Touch</b></h1>
            <p ref={subHeading} className='block relative ml-5 sm:ml-0 w-[70%] sm:w[60%] md:w-[40%] sm:left-1/2 sm:-translate-x-1/2 text-white text-sm sm:text-md text-left sm:text-center mt-3'>Have a question, project idea, or just want to say hello? I’d love to hear from you. Fill out the form below and I’ll get back to you as soon as possible.</p>
        
            <div ref={elements} className='flex flex-col sm:justify-center sm:flex-row relative w-screen gap-1 left-1/2 -translate-x-1/2 mt-5'>
                <div className='flex justify-start sm:justify-center items-center gap-3 relative box-border px-5'>
                    <i className="fa-brands fa-whatsapp block relative text-blue-500 px-2 py-2 text-sm bg-[#ffffff0e] rounded-full"></i>
                   <h1 className='block relative text-white text-[10px]'>+92-3140507520</h1>
                </div>

                <div className='flex justify-start sm:justify-center items-center gap-3 relative box-border px-5'>
                    <i className="fa-brands fa-instagram block relative text-blue-500 px-2 py-2 text-sm bg-[#ffffff0e] rounded-full"></i>
                   <h1 className='block relative text-white text-[10px]'>@dev_yaseen</h1>
                </div>

                <div className='flex justify-start sm:justify-center items-center gap-3 relative box-border px-5'>
                    <i className="fa-regular fa-envelope block relative text-blue-500 px-2 py-2 text-sm bg-[#ffffff0e] rounded-full"></i>
                   <h1 className='block relative text-white text-[10px]'>itsmyaseen2040@gmail.com</h1>
                </div>
            </div>
    </>
  )
}

export default ContactMeHeader
