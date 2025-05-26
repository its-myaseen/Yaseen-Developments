import React, { useRef } from 'react'
import ScrollerText2 from './ScrollerText2'
import gsap from 'gsap'
import { useGSAP } from '@gsap/react'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
gsap.registerPlugin(ScrollTrigger)

const PagesHeader1 = (props) => {

  const heading = useRef()
  const subHeading = useRef()

  let tl = gsap.timeline()

  useGSAP(()=>{
    tl.fromTo(heading.current, {
      y: -100,
      opacity: 0
    }, {
      y: -0,
      opacity: 1,
      duration: 1,
      ease: "power2.out",
    })
    tl.fromTo(subHeading.current, {
      y: 100,
      opacity: 0
    }, {
      y: -0,
      opacity: 1,
      duration: 1,
      ease: "power2.out",
    }, "-=0.5")
  })
  return (
    <div className='block relative bg-black overflow-hidden box-border w-full'>
      <h1 ref={heading} className='block relative text-4xl text-white text-center font-normal mt-35' style={{ fontFamily: "Zen Dots" }}>{props.data}</h1>
      <p ref={subHeading} className='block relative text-center text-sm text-white mt-2'>Home / <b className='font-normal text-blue-500'>{props.data}</b></p>
      <ScrollerText2></ScrollerText2>

    </div>
  )
}

export default PagesHeader1
