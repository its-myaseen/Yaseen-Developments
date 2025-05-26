import React, { useRef, useState } from 'react'
import ContactDetailsPopup from './ContactDetailsPopup'
import { Link } from 'react-router'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
gsap.registerPlugin(ScrollTrigger)
const Footer = () => {

  const MyName = useRef()
  const MyRole = useRef()
  const AboutMe = useRef()
  const Buttons = useRef()
  const subheading = useRef()
  const icons = useRef()
  // useGSAP(() => {
  //   gsap.from(MyName.current, {
  //     xPercent: -50,
  //     opacity: 0,
  //     duration: 1,
  //     scrollTrigger: {
  //       trigger: MyName.current,
  //       start: "top 95%",
  //       toggleActions: 'play none none reverse'
  //     }
  //   })

  //   gsap.from(MyRole.current, {
  //     xPercent: -50,
  //     opacity: 0,
  //     duration: 1,
  //     scrollTrigger: {
  //       trigger: MyRole.current,
  //       start: "top 95%",
  //       toggleActions: 'play none none reverse'
  //     }
  //   })

  //   gsap.from(subheading.current, {
  //     xPercent: -50,
  //     opacity: 0,
  //     duration: 1,
  //     scrollTrigger: {
  //       trigger: subheading.current,
  //       start: "top 95%",
  //       toggleActions: 'play none none reverse'
  //     }
  //   })

  //   gsap.from(Buttons.current, {
  //     yPercent: 50,
  //     opacity: 0,
  //     duration: 2,
  //     ease: 'back.in',
  //     scrollTrigger: {
  //       trigger: Buttons.current,
  //       start: "top 95%",
  //       toggleActions: 'play none none reverse'
  //     }
  //   })

  //   gsap.from(AboutMe.current, {
  //     xPercent: 100,
  //     opacity: 0,
  //     duration: 1,
  //     scrollTrigger: {
  //       trigger: AboutMe.current,
  //       start: "top 95%",
  //       toggleActions: 'play none none reverse'
  //     }
  //   })

  //   gsap.fromTo('.icons', {
  //     yPercent: 100,
  //     opacity: 0,
  //   },
  //     {
  //       yPercent: 0,
  //       opacity:1,
  //       duration: 1,
  //       stagger: 0.2,
  //       ease: 'back.in',
  //       scrollTrigger: {
  //         trigger: '.icons',
  //         start: "top 95%",
  //         toggleActions: 'play none none reverse'
  //       }
  //     })
  // })
  return (
    <div className='flex justify-center relative pb-15 w-full pt-10 overflow-hidden'>
      <div className='block relative pb-10 sm:min-h-85 lg:h-70 w-[90%] bg-blue-600 rounded-4xl px-10 py-13'>

        <div className='flex flex-col sm:flex-row justify-between'>
          <div className='block relative h-full w-1/2'>
            <h1 ref={MyName} className='block relative text-white text-4xl font-normal' style={{ fontFamily: '"Audiowide", sans-serif' }}>Muhammad Yaseen</h1>
            <p ref={MyRole} className='text-gray-100 text-md '>Mern Stack Developer</p>
            <h1 ref={subheading} className='text-white text-md font-bold mt-8 sm:mt-20'>Available on</h1>
            <div className='flex relative justify-between items-center text-lg text-gray-300 w-40 mt-3'>
              <i ref={icons} className="icons fa-brands fa-instagram hover:text-white duration-300 cursor-pointer hover:scale-105"></i>
              <i ref={icons} className="icons fa-brands fa-facebook-f hover:text-white duration-300 cursor-pointer hover:scale-105"></i>
              <i ref={icons} className="icons fa-brands fa-linkedin-in hover:text-white duration-300 cursor-pointer hover:scale-105"></i>
              <i ref={icons} className="icons fa-brands fa-tiktok hover:text-white duration-300 cursor-pointer hover:scale-105"></i>
              <i ref={icons} className="icons fa-brands fa-whatsapp hover:text-white duration-300 cursor-pointer hover:scale-105"></i>
            </div>
          </div>


          <div className='block relative h-full w-full sm:w-1/2'>
            <p ref={AboutMe} className='block relative w-full sm:w-[80%] text-gray-200 text-[13px] mt-20 sm:mt-0'>I’m a passionate full-stack web developer specializing in the MERN stack and modern UI/UX design.
              With a strong focus on performance, responsiveness, and user experience, I craft clean and scalable web solutions.
              From custom websites to complex web apps, I bring ideas to life through code.
              Let’s build something meaningful — together.

            </p>

            <div ref={Buttons} className='flex gap-4 mt-5'>
              <Link to='/Contact'> <button className='px-5 lg:px-10 py-2 bg-white text-black text-[10px] lg:text-sm rounded-lg cursor-pointer hover:bg-gray-200 active:bg-gray-200 active:scale-95'>Contact Me</button> </Link>
              <Link to='/Services'> <button className='px-5 lg:px-10 py-2 border border-white text-white text-[10px] lg:text-sm rounded-lg cursor-pointer hover:text-gray-100 active:border-gray-100 active:scale-95'>View My Services</button></Link>
            </div>
          </div>

        </div>


      </div>
      <p className='block absolute text-[11px] w-full text-center text-gray-300 left-1/2 -translate-1/2 bottom-5'>© 2025 Muhammad Yaseen. All rights reserved.</p>


    </div>
  )
}

export default Footer
