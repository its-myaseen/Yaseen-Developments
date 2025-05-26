import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import React, { useRef } from 'react'
import { use } from 'react'
import { Link } from 'react-router'

const AboutMeHeader = () => {
  const heading = useRef()
  const about = useRef()
  const button = useRef()
  const image = useRef()

  useGSAP(()=>{
    gsap.from(heading.current, {
      xPercent: -100,
      opacity: 0,
      duration: 1,
      ease: "power2.out",
      scrollTrigger: {
        trigger: heading.current,
        start: "top 90%",
        toggleActions: "play none none reverse"
      }
    })

    gsap.from(about.current, {
      xPercent: -100,
      opacity: 0,
      duration: 1.5,
      ease: "power2.out",
      scrollTrigger: {
        trigger: about.current,
        start: "top 90%",
        toggleActions: "play none none reverse"
      }
    })

    gsap.from(button.current, {
      yPercent: 100,
      opacity: 0,
      duration: 1,
      ease: "power2.out",
      scrollTrigger: {
        trigger: button.current,
        start: "top 90%",
        toggleActions: "play none none reverse"
      }
    })

    gsap.from(image.current, {
      xPercent: 100,
      opacity: 0,
      duration: 1,
      ease: "power2.out",
      scrollTrigger: {
        trigger: image.current,
        start: "top 90%",
        toggleActions: "play none none reverse"
      }
    })
  })
  return (
    <div className="flex flex-col-reverse lg:flex-row justify-between items-start lg:items-center relative box-border py-10 min-h-[100vh] w-[100vw] px-5 sm:px-15 overflow-hidden bg-black">
      <div className='block relative flex-1 box-border bg-transparent'>
        <h1 ref={heading} className='block relative text-white text-2xl sm:text-4xl font-bold w-[95%] sm:w-[80%] mt-15' style={{ fontFamily: "Roboto" }}>I'm <b className='font-bold text-blue-500'>Yaseen</b>, a developer who turns ideas into fast, user-friendly, and inclusive digital experiences.</h1>
        <p ref={about} className='text-gray-300 text-sm sm:text-md w-[95%] sm:w-[85%] mt-5'>Hi, I'm Yaseen — a dedicated MERN stack developer who builds modern, responsive, and high-performance web applications. I create clean, user-friendly interfaces using React and Tailwind CSS, and develop powerful backends with Node.js, Express, and MongoDB. Whether it’s a landing page, dashboard, or a full-scale management system, I focus on functionality, speed, and scalability. I also build RESTful APIs and integrate third-party services like payment gateways and social logins. I aim to deliver digital solutions that solve real problems and enhance user experiences.</p>
       <Link to='/Contact'> <button ref={button} className='block relative px-5 py-2 bg-blue-600 hover:bg-blue-700 cursor-pointer active:scale-95 text-white rounded-md mt-5 '>Contact Me</button></Link>
      </div>
      <img ref={image} src="/src/assets/PROFILE.png" alt="Image" className=' w-70 sm:w-80 md:w-100 object-cover rounded-full' />
    </div>
  )
}

export default AboutMeHeader
